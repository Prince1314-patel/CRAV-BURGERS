# Fix Audit Report — Design Critique P1s

Date: 2026-08-02
Scope: `src/components/Reveal.tsx`, `src/components/Nav.tsx`

## Finding 1: `Reveal.tsx` viewport-height threshold bug

**File:** `src/components/Reveal.tsx:31`

**Before:**
```ts
{ threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
```

**After:**
```ts
{ threshold: 0.01, rootMargin: "0px 0px -8% 0px" }
```

### Why this fixes it

`threshold` is evaluated as a fraction of the *target element's* bounding box that
must intersect the root before the callback fires. For an element taller than the
viewport (e.g. a long `MenuCategorySection` on a small mobile screen), 15% of the
element's total area can exceed what a viewport-sized window can ever show at once,
so `isIntersecting` never flips true and the element stays at `opacity: 0`
permanently.

`rootMargin`, by contrast, is a fixed pixel/percentage inset applied to the
*root's* (viewport's) bounding box, not the target's — its percentage values are
resolved against the root's dimensions, so they don't scale with target height and
don't reintroduce the same failure mode.

Changing `threshold` to `0.01` ("fire as soon as essentially any pixel is visible")
means the reveal now fires reliably regardless of how tall the wrapped content is,
while `rootMargin: "0px 0px -8% 0px"` is left unchanged — it still shrinks the
effective trigger zone by 8% of the viewport height from the bottom edge,
preserving the original slightly-early/pre-emptive reveal feel intended by the
original component author. `threshold: 0` (rather than `0.01`) would work equally
well; `0.01` was chosen to avoid firing on a single sub-pixel edge case some browsers
report during layout thrash, but is functionally equivalent to `0` here since we
only care about the first intersection event (`observer.unobserve` on first fire).

No other behavior, prop, or consumer changed. `MenuCategorySection.tsx` and all
other `<Reveal>` usages are drop-in compatible.

## Finding 2: Mobile nav keyboard/screen-reader trap

**File:** `src/components/Nav.tsx`

### 1. `inert` on the closed panel — `src/components/Nav.tsx:107-113`

```tsx
<nav
  id="mobile-menu"
  inert={!open ? true : undefined}
  className={clsx(
    "fixed inset-x-0 top-[72px] z-40 origin-top overflow-hidden bg-maroon text-cream transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
    open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
  )}
>
```

When `open` is `false`, the native `inert` attribute is applied to the `<nav>`.
`inert` removes the subtree from both the tab order and the accessibility tree
(no `tabIndex` bookkeeping needed on individual `<Link>`s or the address `<p>`),
while the element remains in the DOM so the existing `max-h`/`opacity` CSS
transition still animates the close exactly as before. Verified `inert` compiles
cleanly under this project's React 19 + `@types/react` DOM typings — no `as any`
workaround was needed; `tsc --noEmit` passed without modification to
`tsconfig.json` or type augmentation.

### 2. `Escape` key handler — `src/components/Nav.tsx:27-40`

```tsx
useEffect(() => {
  if (!open) return;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  };

  document.addEventListener("keydown", handleKeyDown);
  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}, [open]);
```

The listener is only attached while `open` is `true` and is cleaned up on
close/unmount, so it never leaks a global handler while the menu is closed.

### 3. Focus management — `src/components/Nav.tsx:17-18, 42-53, 75, 119`

- Added `toggleButtonRef` (on the hamburger `<button>`, line 75) and
  `firstLinkRef` (on the first `<Link>` in the panel, line 119).
- Added an `isFirstRender` guard (line 42) so the focus effect is a no-op on
  initial mount — otherwise the toggle button would steal focus from the page
  on first load, since `open` starts `false` and the effect's `else` branch
  would fire immediately.
- On every subsequent `open` transition:
  - `open` becomes `true` → focus moves to the first link in the panel
    (`firstLinkRef.current?.focus()`), so a keyboard user immediately lands
    inside the newly revealed content instead of on a now off-screen button.
  - `open` becomes `false` (via toggle button, a link click, or the new
    `Escape` handler — all three funnel through `setOpen(false)`) → focus
    returns to the toggle button (`toggleButtonRef.current?.focus()`), so the
    user's keyboard position is never lost to a now-`inert` subtree.

This is a single `useEffect` keyed on `open`, deliberately kept simple per the
task's guidance — no focus-trap library, no manual `tabIndex` management,
since `inert` already handles removing the closed panel from the tab order.

All other styling, the `document.documentElement.style.overflow` lock
`useEffect`, and the hamburger-icon animation markup/logic are unchanged.

## Verification

```
$ npx tsc --noEmit
(no output — clean)

$ npm run lint
> street-bites@0.1.0 lint
> eslint
(no output — clean)
```

Both commands exited 0 with no errors or warnings.

## Files changed

- `src/components/Reveal.tsx` (1 line: `threshold: 0.15` → `threshold: 0.01`)
- `src/components/Nav.tsx` (added refs, `inert`, Escape handler, focus-management
  effect; no other file touched)

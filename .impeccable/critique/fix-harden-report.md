# Fix: Order CTA phone fallback + branded image placeholder background (critique P0s)

Date: 2026-08-02

## Finding 1 — Order CTAs can dead-end at a search page

**Problem:** `src/content/site.ts` (`delivery.justEat` / `delivery.uberEats`) point to generic
search-result URLs, not confirmed direct store links (see comment at
`src/content/site.ts:22-23`, and this is already flagged in `LAUNCH-CHECKLIST.md`). If a
customer's restaurant doesn't surface in that search, the Order Online section had no fallback.

**Fix:** Added a third, co-equal CTA — a `tel:` link — to the Order Online button row.

File: `src/components/home/OrderOnline.tsx:29-42`

```tsx
<a
  href={siteInfo.delivery.uberEats}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border-2 border-cream/40 px-8 py-4 font-body text-sm font-semibold tracking-[0.08em] text-cream uppercase transition-colors hover:border-gold hover:text-gold"
>
  Order on Uber Eats
</a>
<a
  href={`tel:${siteInfo.phone}`}
  className="rounded-full border-2 border-gold px-8 py-4 font-body text-sm font-semibold tracking-[0.08em] text-gold uppercase transition-colors hover:bg-gold hover:text-ink"
>
  Or call us: {siteInfo.phoneDisplay}
</a>
```

- `href` uses `siteInfo.phone` (`+447438017394`, `src/content/site.ts:12`) — a valid `tel:` URI,
  not a hardcoded string.
- Visible label uses `siteInfo.phoneDisplay` (`+44 7438 017394`, `src/content/site.ts:13`).
- Styling: gold outline + gold text, filling gold on hover — distinct from both existing
  treatments (solid gold "Just Eat" button, cream-outline "Uber Eats" button) so it reads as a
  clear third option rather than a subordinate/disabled-looking link, while staying inside the
  existing maroon-section gold/cream palette.
- No other files touched for this finding.

## Finding 2 — Every image on the site renders as a broken icon

**Problem:** `public/img/` is empty; 31 placeholder image paths are referenced across Hero,
MenuTeaser, Gallery, and MenuCategorySection (tracked in `LAUNCH-CHECKLIST.md`). Missing
`next/image` sources previously rendered as bare broken-image glyphs with no visual treatment.

**Fix:** Added `bg-maroon/5` (existing design token, very light maroon tint) to each `relative`
image-wrapper `div` that hosts an `<Image fill .../>`, so the box reads as an intentional
branded placeholder block even when the image fails to load or hasn't loaded yet. No component
restructuring, no new state/logic — background class only.

| File | Line | Wrapper |
|---|---|---|
| `src/components/home/Hero.tsx` | 44 | `<Reveal delay={120} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-maroon/5">` (storefront photo wrapper) |
| `src/components/home/MenuTeaser.tsx` | 51 | `<div className="relative aspect-[4/3] bg-maroon/5">` (each dish card's photo wrapper) |
| `src/components/home/Gallery.tsx` | 31 | `className="relative h-64 w-64 shrink-0 overflow-hidden rounded-md bg-maroon/5 sm:h-80 sm:w-80"` (each gallery square wrapper) |
| `src/components/menu/MenuCategorySection.tsx` | 28 | `"relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-maroon/5",` (category photo wrapper, inside `clsx(...)`) |

No other files touched for this finding.

## Verification

1. `npx tsc --noEmit` — no output, exit clean. Type-checking passes.
2. `npm run lint` — `eslint` ran with no errors or warnings reported.
3. Manual read-back:
   - `OrderOnline.tsx` phone CTA uses `siteInfo.phone` for `href` and `siteInfo.phoneDisplay` for
     the visible label — confirmed, no hardcoded phone string.
   - All four image wrapper divs listed above now carry `bg-maroon/5` — confirmed by reading each
     file back after edit.

## Scope

Only the five files listed above were modified:
- `src/components/home/OrderOnline.tsx`
- `src/components/home/Hero.tsx`
- `src/components/home/MenuTeaser.tsx`
- `src/components/home/Gallery.tsx`
- `src/components/menu/MenuCategorySection.tsx`

`src/content/site.ts` and `LAUNCH-CHECKLIST.md` were read for context only, not edited (per
instructions — the placeholder delivery URLs remain unresolved and are tracked separately).

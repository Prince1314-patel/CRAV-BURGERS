---
target: homepage (src/app/page.tsx)
total_score: 21
max_score: 40
na_heuristics: 
p0_count: 2
p1_count: 3
timestamp: 2026-08-02T08-14-23Z
slug: src-app-page-tsx
---
Method: dual-agent (A: ab078f180ad1546cd · B: acaeafbbb3919bbb9)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No active-link state in Nav/CategoryNav; external delivery links give no "leaves the site" signal; hardcoded "Open Now" badge isn't a real status |
| 2 | Match System / Real World | 3 | "London Meets India" card copy contradicts a shop that only exists in Wolverhampton |
| 3 | User Control and Freedom | 2 | Mobile menu has no Escape/focus-trap/backdrop dismiss and locks body scroll; gallery strip has no keyboard/arrow affordance |
| 4 | Consistency and Standards | 2 | Eyebrow color drifts from DESIGN.md's gold rule (5 of 6 sections use maroon); 3 mutually-inconsistent hardcoded sticky-header offsets |
| 5 | Error Prevention | 1 | Both order CTAs point at third-party search results, not the store; social links are unverified guesses; zero image-fallback handling |
| 6 | Recognition Rather Than Recall | 3 | Menu items have zero descriptions/veg-spice-allergen markers across ~90 dishes |
| 7 | Flexibility and Efficiency | 2 | No persistent order/call CTA after the Order Online section; no click-to-call in nav; no "Get Directions" link |
| 8 | Aesthetic and Minimalist Design | 3 | Clean overall; undermined by four back-to-back identical cream slabs and an empty-placeholder Team section |
| 9 | Error Recovery | 1 | No `not-found.tsx`, no image fallback state, no recovery path if the delivery-app handoff fails |
| 10 | Help and Documentation | 2 | No allergen/dietary info, no delivery radius/collection info — meaningful gaps for a food business |
| **Total** | | **21/40** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment:** Roughly 70% authored, 30% template. The product-specific moves are real and well-executed: the scroll-linked cart on its dashed gold track, the London×India skyline motif, the maroon/gold/cream palette, and a hero headline that does genuine positioning work ("The streets of India have arrived in Wolverhampton"). But the underlying structure is the standard 2024 restaurant-landing skeleton — hero → 4 feature cards → CTA band → 3-col dish grid → photo strip → 3 team cards → address/map — and the two sections that should feel most like street food (the menu teaser and the gallery) are the most generic components on the page: plain 4:3 photo cards with name+price, eight identical unlabeled squares. The signature cart interaction is also hidden below `md`, meaning most of a takeaway's actual mobile traffic never sees the one thing that makes this site Street Bites. The brand currently lives in the chrome, not the content.

**Deterministic scan:** `detect.mjs --json` ran clean across `page.tsx`, all of `src/components/home/`, `Nav.tsx`, `Footer.tsx`, `ScrollCart.tsx`, `SkylineDivider.tsx`, `Reveal.tsx`, and `globals.css` — exit code 0, zero findings, no false positives to report (there was nothing to assess). This is a real blind spot worth naming: the detector catches pattern-level anti-patterns, not semantic/UX defects. Every substantive issue in this report — broken order CTAs, empty image directory, a content-invisibility bug in `Reveal`, inconsistent sticky offsets, an accessibility trap in the mobile menu — is invisible to the deterministic scan and was only surfaced by the design-review pass.

**Visual overlays:** Not available this run — no browser automation tool is exposed in this environment, so there was no live page to inject the detector script into. Assessment B explicitly reported this as a fallback signal rather than skipping it silently.

## Overall Impression

A well-tokenized, technically clean build (zero `tsc`/lint findings, zero detector findings, real accessibility handling at the CSS layer for reduced motion) that undersells its own best idea. The signature interaction and brand motif are good; the actual appetite-building content — the menu teaser and gallery — reads as a generic template, and the page's emotional arc asks for the order before it's shown a single dish. There is also one real functional bug (not just craft): `Reveal`'s `IntersectionObserver` threshold can permanently keep tall `/menu` category sections at `opacity: 0` on mobile, and both delivery-app CTAs currently point at search results rather than the actual store.

## What's Working

1. **`ScrollCart`** is a correctly-implemented, brand-specific interaction: scroll progress drives position, `useReducedMotion` is honored, it's `aria-hidden` and non-interactive. This is the rare case of decorative motion that's actually saying something about the brand (a cart traveling the street).
2. **Token and accessibility discipline in `globals.css`**: a tight `@theme inline` set, a global 3px gold `focus-visible` ring, branded `::selection`, and `prefers-reduced-motion` handled once at the CSS layer rather than scattered per-component.
3. **Content-in-data is honored properly**: `site.ts`/`menu.ts` are typed, single-sourced, and self-documenting — unverified values (social handles, delivery links) carry their own "confirm before launch" comments, and `MenuTeaser` now looks up prices from `menu.ts` rather than duplicating them (this was itself a fix from the branch's final review).

## Priority Issues

**[P0] Both "Order Online" CTAs point at third-party search results, not the actual store.**
- **Why it matters:** `site.ts`'s `delivery.justEat`/`delivery.uberEats` are generic search URLs, surfaced on the highest-intent buttons on the page (`OrderOnline.tsx`, `Footer.tsx`). The one conversion this site exists to produce can land a visitor on a page showing competitors or nothing at all.
- **Fix:** Get the two direct store URLs before launch (tracked in `LAUNCH-CHECKLIST.md`). Until then, promote the phone number to a co-equal primary CTA in `OrderOnline` ("Or call +44 7438 017394 to order direct") so there's an order path that cannot fail.
- **Suggested command:** `/impeccable harden`

**[P0] `public/img/` is empty and there is no missing-image handling anywhere.**
- **Why it matters:** All 31 referenced image paths (hero, teaser, gallery, menu categories) currently render as broken icons — this is the site's actual current visual state, not a hypothetical. There's also no graceful degradation built in for when a single photo is missing or slow post-launch.
- **Fix:** Add a branded placeholder treatment (e.g. a low-opacity skyline motif on `bg-maroon/5`) as the background of every image container so a missing file degrades to an on-brand block instead of a broken glyph icon.
- **Suggested command:** `/impeccable harden`

**[P1] `Reveal`'s IntersectionObserver threshold can permanently hide tall `/menu` sections on mobile.**
- **Why it matters:** `Reveal.tsx` uses `threshold: 0.15`, which never fires for a child taller than the viewport. `/menu` category sections wrapping long item lists (e.g. Chaat Corner's 13 items) can exceed mobile viewport height, meaning that content can stay at `opacity: 0` permanently — a real content-invisibility bug, not a polish note.
- **Fix:** Switch tall sections to a rootMargin-based or `threshold: 0` trigger, or bypass `Reveal` for `/menu` category sections entirely.
- **Suggested command:** `/impeccable audit`

**[P1] Section order asks for the conversion before showing a single dish, and the page ends on a receipt.**
- **Why it matters:** `OrderOnline` sits at position 3, before `MenuTeaser` and `Gallery` — the two sections that actually build appetite. The page then ends on `LocationHours` (an hours table and a map) with no closing CTA. Peak-end rule says the final section is disproportionately what's remembered; right now that's logistics, not appetite.
- **Fix:** Reorder to Hero → MenuTeaser → WhyChooseUs → Gallery → OrderOnline → LocationHours, and close with a maroon-inverted band pairing a strong photo with a final "Order now" + tel link.
- **Suggested command:** `/impeccable layout`

**[P1] Mobile menu is a keyboard/screen-reader trap.**
- **Why it matters:** `Nav.tsx`'s closed mobile panel uses `max-h-0 opacity-0 overflow-hidden` — the four links and the address line stay in the tab order and accessibility tree while invisible, with no Escape handler, no focus move on open, no focus return on close.
- **Fix:** Add `hidden`/`inert` when closed, an Escape listener, and focus management on open/close.
- **Suggested command:** `/impeccable audit`

## Persona Red Flags

**Jordan (confused first-timer):** The highest-value persona for a brand pitching authenticity to people who may not know the dishes. Reads "Vada Pav £2.50" on `MenuTeaser.tsx` with a photo and zero description — no way to tell if it's a snack or a main, meat or veg, mild or hot (`menu.ts` has no description/veg/spice fields at all across ~90 items). Sees a maroon "View Menu" pill and a separate "Menu" hamburger side-by-side in the nav and can't tell which one is the food.

**Casey (distracted mobile user):** Never sees the signature cart interaction at all — `ScrollCart` is `hidden` below `md`, desktop-only, even though mobile is realistically the majority of a takeaway's traffic. Gets the order ask at position 3 and then nothing for four sections; if she bounces at `Gallery` there's no sticky order bar or tap-to-call to catch her. The `<iframe>` map at the bottom is a well-known mobile scroll-trap (captures touch scroll from the page).

## Minor Observations

- `SkylineDivider` uses `preserveAspectRatio="none"` on a 1200×80 viewBox stretched into `h-10 w-full` — on wide screens this visibly distorts the London Eye's `<circle>` into an ellipse; the motif is abstract enough already that distortion makes the landmarks unreadable without the DESIGN.md caption to explain them.
- Three mutually-inconsistent hardcoded sticky-offset values (`Nav.tsx` 72px, `ScrollCart.tsx` 64/76px, `CategoryNav.tsx` 89/101px) against an actual header height that doesn't match any of them — should derive from one `--nav-h` CSS variable.
- `Team.tsx` — three unnamed roles over empty `bg-maroon/10` circles reads as the most obvious "unfinished template" signal on the page, sitting between the two sections meant to build appetite and trust.
- Footer copyright text (`text-cream/50` on maroon, ~3.5:1 at 12px) is below WCAG AA for small text.

## Questions to Consider

- What if the menu itself were the hero? ~90 real dishes at £2.50–£5.50 is a genuinely specific, differentiated asset that's currently hidden behind a storefront photo and four adjectival trust cards.
- The cart travels a street — so why doesn't the page? Right now it's a decorative line with no relationship to the content it crosses. What if the section dividers *were* the street, with the cart passing recognizable London landmarks into recognizable India landmarks as you scroll — making the "London meets India" claim structural instead of a copy line?

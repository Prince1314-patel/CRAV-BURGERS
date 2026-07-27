# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
[INFERRED — no interview response received; substituted from the explicit brief.]
Anyone visiting the site as a prospective customer of CRAV, a fictional/concept artisan smashed-burger restaurant brand ("Est. 1997 — Navarra, España"). The build's actual audience is the requester, who asked for a faithful clone of the live reference site https://www.cravburgers.shop/ for study/portfolio purposes.

## Product Purpose
[INFERRED] A marketing site for CRAV, a smashed-burger restaurant/brand: convert visitors into orders ("Order Now" → /menu), communicate brand story and ingredient quality (Our Spices), and provide a way to get in touch (Contact). This build's purpose is to faithfully reproduce that reference site — same content, structure, brand, and energy — as a new Next.js implementation using the real assets pulled from the live site.

## Positioning
[INFERRED] Artisan/craft smashed-burger brand differentiated on ingredient obsession ("a short ingredient list, obsessive about every item"), a signature preparation (smashed hot on the flat-top, chili honey glaze, melted cheddar), and an "est. 1997, Navarra, España" heritage story, presented with a bold, high-energy, sticker/pop visual identity rather than a typical minimalist restaurant site.

## Operating Context
- 4 routes: Home (`/`), Menu (`/menu`), Our Spices (`/spices`), Contact (`/contact`).
- No backend/CMS — content is static/hardcoded; menu "cart" is client-side only (no checkout); contact form has no server (mailto or local success state).
- Reference implementation is Next.js (App Router) + next/image; this rebuild target is also Next.js 16 + Tailwind v4 + React 19, `motion` + `clsx` already installed.

## Capabilities and Constraints
- Real photography/asset files already downloaded into `public/img/` and `public/img-webp/` from the live site — use these, do not fabricate placeholder imagery.
- Fonts: Modak (display) + Mouse Memoirs (body/UI), both Google Fonts, load via `next/font/google`.
- Palette already extracted from live computed CSS: beige `#f5e3cd` (bg), red `#f91814`, mustard `#ffd750` / `#f4a804`, black `#1b1b1b`, white.
- [INFERRED — unanswered] Treating this as a study/portfolio clone: original brand name "CRAV", the "Est. 1997 — Navarra, España" heritage line, and all scraped copy are kept verbatim rather than swapped for a real/different business.
- [INFERRED — unanswered] The live site's `/contact` page shows a real dismissible notice: *"This is a concept website created by Anyflow Agency... reach out at anyflowagency@gmail.com"*. Kept verbatim as part of the original site's real content, since the ask was for "the same website." If this is ever adapted into an actual business site, this notice should be removed first.

## Brand Commitments
- Name: CRAV. Tagline context: "Artisan Smashed Burgers", "Est. 1997 — Navarra, España".
- Voice: bold, energetic, short punchy all-caps headlines, playful ("Feel It", "Craving...", "Eat Like You Mean It").
- Visual identity: chunky rounded display type (Modak) + rounded sans (Mouse Memoirs), sticker-style ingredient cutouts, thick outlines, beige/red/mustard palette.

## Evidence on Hand
- Full page copy scraped from live site DOM for all 4 routes (hero, about/top-classic, experience, takeaway, feel-it CTA, menu items with prices/macros, spices/ingredient story, contact form + notice modal, nav + footer).
- Real image assets in `public/img/` (plane.png, burgerselfie.png, burger-boy.png) and `public/img-webp/` (burgerH, about-1/2/3, burgerwithhands, cheesyBurger, cheese-logo, cheese, tomato, meat, lettuce, fries, burger, berlin/london/newyork/sydney/tokyo, cta, spices, farmtobite, lettuceimg, tomatoimg, cheeseimg, tikki, bun, smile).
- No absences beyond: no real backend, no real menu photography per-item (site uses shared hero imagery, not per-burger photos), no real business address/phone (only "Est. 1997 — Navarra, España" and city names for the takeaway section, which are stylistic, not literal locations).

## Product Principles
1. Faithfulness over invention — reproduce the reference site's content, structure, and brand truthfully; do not invent new claims, testimonials, or pricing.
2. Real assets only — every image comes from the downloaded `public/img*` set; no stock placeholders.
3. Bold over generic — the site's visual energy (chunky type, high contrast, playful motion) is a core brand asset, not decoration to be tamed.
4. No backend, no shortcuts — cart and contact form are honestly client-side; do not fake persistence or real checkout.

## Accessibility & Inclusion
[Not established in interview; no product-specific requirement beyond standard web a11y — apply standard practice (semantic landmarks, alt text already scraped from live site, focus-visible states, reduced-motion support).]

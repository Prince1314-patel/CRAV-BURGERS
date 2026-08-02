# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Prospective and existing customers of Street Bites, an Indian street-food restaurant at 1A North Street, Wolverhampton, WV1 1RE (Streetbites Food Limited, Company No. 17131409). Visitors are people browsing the menu, checking hours/location, or looking to order delivery/collection through Just Eat or Uber Eats.

## Product Purpose

A marketing and informational site for an already-open, trading restaurant: communicate what Street Bites is (Indian street food — chaat, vada pav, momos, curries, dosa and more) and where it is, showcase the menu, and route visitors to the two delivery partners (Just Eat, Uber Eats) for ordering. There is no on-site ordering, cart, or checkout — this site's job is to inform and hand off to the delivery apps.

## Positioning

An authentic Indian street-food concept — not a generic curry house — built around real street-vendor dishes (chaat, vada pav, dabeli, momos) alongside familiar mains and curries, presented with a bold maroon/gold visual identity and a "Taste of Street Culture" tagline that ties the food back to its street-food roots.

## Operating Context

- 2 routes: Home (`/`, one-page scrolling marketing site) and Menu (`/menu`, dedicated full categorized menu page).
- No backend/CMS — all content (menu items, prices, site info, hours) is static/hardcoded in typed content files under `src/content/`. No cart, no checkout, no server-side logic.
- Ordering happens entirely off-site: "Order Online" links out to Just Eat and Uber Eats.
- Built on Next.js 16 (App Router) + Tailwind CSS v4 + React 19, using `motion` for the scroll-linked cart animation and scroll-reveal effects, and `clsx` for conditional classes.

## Capabilities and Constraints

- The business is live/open and trading now — there is no "coming soon" framing anywhere on the site.
- Real assets used where available (storefront photo, grand-opening poster dish photos); many image slots are still placeholders pending real photography — see `LAUNCH-CHECKLIST.md` at the repo root for the exact list of files still needed before launch.
- Contact info that must appear verbatim: phone `+44 7438 017394`, email `streetbites.wv1@gmail.com`, address `1A North Street, Wolverhampton, WV1 1RE`, legal name `Streetbites Food Limited` (Company No. 17131409).
- Delivery links currently point to Just Eat/Uber Eats *search results* for "Street Bites Wolverhampton," not confirmed direct store-page URLs — flagged for owner confirmation before launch.
- Instagram/Facebook handles (`@Streetbites` on both) are unverified guesses, not confirmed with the business — flagged for owner confirmation before launch.
- Opening hours and the 3 "meet the team" role descriptions are currently placeholder content pending real details from the owner.
- No email capture, no mailing list, no analytics/tracking scope defined.

## Brand Commitments

- Name: Street Bites. Tagline: "Taste of Street Culture."
- Voice: warm, inviting, food-forward — describing real street-vendor recipes and a "London meets India" fusion angle (rooted in Indian street culture, served in Wolverhampton).
- Visual identity: deep maroon + gold/cream palette, a wheeled food-cart logo mark, and a recurring London×India skyline line-art motif used as a section-divider device — reflecting the brand's UK-meets-India positioning.
- Signature interaction: a food-cart icon travels left-to-right along a thin dashed track as the visitor scrolls the page, evoking the cart "traveling the street."

## Evidence on Hand

- Registered company details confirmed via Companies House (STREETBITES FOOD LIMITED, No. 17131409, SIC 56103 "Take-away food shops and mobile food stands").
- A real storefront photo (shopfront signage, illuminated "OPEN" sign, delivery-partner stickers for Just Eat and Uber Eats).
- A "Grand Opening" promotional poster with contact details (phone, email) and dish photography; its printed opening date is outdated and not used, but its imagery and contact details are still valid.
- A full menu PDF (~90 items) covering: Chaat Corner, Street Bites Special, Rolls & Crispy Bites, Burgers/Wraps/Sandwiches, Chips & Sides, Mains & Rice, Momo Station, Dosa Corner, Indian Veg Curries, Chicken Curries, Paratha Corner, Tea & Coffee, Soft Drinks, Energy Drinks, Milkshakes — fully transcribed into `src/content/menu.ts`.
- Absences: no real per-dish photography for most menu categories yet (placeholders), no confirmed opening hours, no confirmed team member details, no confirmed social/delivery-app URLs. All tracked in `LAUNCH-CHECKLIST.md`.

## Product Principles

1. Inform, then hand off — the site's job is to build appetite and confidence, then route to Just Eat/Uber Eats for the actual order; it does not attempt to replace those platforms.
2. Real content over invention — menu items, prices, and business details come from verified sources (Companies House, the menu PDF, the storefront photo); anything still unverified (hours, socials, delivery links, team bios) is clearly flagged for owner confirmation rather than presented as fact.
3. Content lives in data, not components — menu items, prices, and site info are edited in `src/content/*.ts` files, not scattered through component code, so a non-developer editing prices only needs to touch one typed file.
4. No backend, no shortcuts — no fake cart, no fake checkout, no simulated persistence; every "order" action is an honest external link.

## Accessibility & Inclusion

Standard web a11y practice: semantic landmarks, alt text on informative imagery (empty `alt=""` on images that are purely decorative or duplicate an adjacent heading), visible focus states, and `prefers-reduced-motion` support for the scroll-linked cart animation and scroll-reveal effects (both fall back to a static, non-animated presentation).

# Street Bites Website — Launch Checklist

This is a plain-language checklist for the Street Bites team before the new website goes live. Nothing here requires coding — it's a list of photos to send over and details to confirm.

## 1. Photos still needed

The website currently has placeholder image slots at the file paths below. Until real photos are dropped into these exact locations (same file name, same folder), those spots on the site will show as broken/missing images. Send photos and we (or you, if you have file access) can drop them straight in — no code changes needed.

**Hero (1 photo)**
- `public/img/hero/storefront.jpg` — the shopfront photo (the "STREETBITES · Indian Street Food" sign with the OPEN sign lit up)

**Menu Teaser — signature dishes (6 photos)**
- `public/img/teaser/vada-pav.jpg`
- `public/img/teaser/pani-puri.jpg`
- `public/img/teaser/samosa-chaat.jpg`
- `public/img/teaser/chole-bhature.jpg`
- `public/img/teaser/chicken-momos.jpg`
- `public/img/teaser/butter-chicken.jpg`

**Gallery — general food/shop photos (8 photos)**
- `public/img/gallery/dish-1.jpg`
- `public/img/gallery/dish-2.jpg`
- `public/img/gallery/dish-3.jpg`
- `public/img/gallery/dish-4.jpg`
- `public/img/gallery/dish-5.jpg`
- `public/img/gallery/dish-6.jpg`
- `public/img/gallery/dish-7.jpg`
- `public/img/gallery/dish-8.jpg`

**Full Menu page — one photo per menu category (15 photos)**
- `public/img/menu/chaat-corner.jpg`
- `public/img/menu/street-bites-special.jpg`
- `public/img/menu/rolls-crispy-bites.jpg`
- `public/img/menu/burgers-wraps-sandwiches.jpg`
- `public/img/menu/chips-sides.jpg`
- `public/img/menu/mains-rice.jpg`
- `public/img/menu/momo-station.jpg`
- `public/img/menu/dosa-corner.jpg`
- `public/img/menu/indian-veg-curries.jpg`
- `public/img/menu/chicken-curries.jpg`
- `public/img/menu/paratha-corner.jpg`
- `public/img/menu/tea-coffee.jpg`
- `public/img/menu/soft-drinks.jpg`
- `public/img/menu/energy-drinks.jpg`
- `public/img/menu/milkshakes.jpg`

**Other assets (2 items)**
- `public/img/cart-icon.png` — a small icon of the wheeled food-cart logo mark (transparent background), used for the little animation that travels across the top of the page as visitors scroll
- `src/app/favicon.ico` — replace with the real Street Bites logo mark (the browser-tab icon). We don't have a real icon file for this yet — please send a square logo image and we'll convert it.

**Total: 31 photos + 1 icon/logo file = 32 assets needed before launch.**

## 2. Needs your confirmation before launch

These are currently placeholder or best-guess values in the code. Please review and confirm (or correct) each one before the site goes live:

- **Opening hours** — currently showing:
  - Monday – Thursday: 12:00 PM – 10:00 PM
  - Friday – Saturday: 12:00 PM – 11:00 PM
  - Sunday: 1:00 PM – 9:00 PM
  Please confirm these are your real, current hours (they're placeholders right now).

- **Team section (3 roles)** — the "meet the team" section on the homepage currently shows generic placeholder descriptions for 3 roles: Founder & Head Chef, Kitchen Lead, and Front of House. Please confirm the real names/roles you'd like shown, and whether you'd like real photos for each person (currently just a plain circle icon).

  Team section (`src/components/home/Team.tsx`) is built but not currently shown on the homepage — it needs a real photo and name (not generic role placeholders) before re-adding it to `src/app/page.tsx`.

- **Instagram / Facebook handles** — currently set to `@Streetbites` on both platforms, guessed from the business name and not yet verified. Please confirm the exact, correct profile links so the footer social buttons point to the right pages.

- **Just Eat / Uber Eats links** — currently point to generic search-results pages for "Street Bites Wolverhampton" on each platform, not your restaurant's direct store page. Please send the direct links to your Just Eat and Uber Eats store pages so customers land exactly on your listing.

- **"Why Choose Us" marketing claims** — the homepage currently has generic copy such as "made fresh in-house each day, never frozen or pre-mixed." Please review this section's wording for accuracy before launch, since it's making specific claims about how the food is prepared.

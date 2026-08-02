# Street Bites Website — Launch Checklist

This is a plain-language checklist for the Street Bites team before the new website goes live. Nothing here requires coding — it's a list of photos to send over and details to confirm.

## 1. Photos — status update

All image slots are now filled (no more broken/missing images anywhere on the site). Here's what's real vs. what's a stand-in still worth upgrading:

**Already real, no action needed:**
- `public/img/hero/storefront.jpg` — your real shopfront photo (the "STREETBITES · Indian Street Food" sign with OPEN lit up). ✅
- `public/img/cart-icon.png`, `src/app/favicon.ico`, `src/app/icon.png`, `src/app/apple-icon.png` — all now use your real cart-logo artwork (from the `favicon_io/` folder you added). ✅
- Most menu-category and gallery photos were pulled directly from the dish photography embedded in `Street Bites Menu 3.pdf` — these are real photos of the actual style of dish (chaat, vada pav, momos, dosa, curries, drinks, etc.), not stock photos.

**Worth upgrading when you have real photography:**
- `public/img/teaser/pani-puri.jpg` and `public/img/teaser/samosa-chaat.jpg` both currently reuse the same general chaat-plate photo from the menu PDF (the PDF didn't have a dedicated close-up shot of either dish specifically). A proper pani puri and a proper samosa chaat photo would be a nice upgrade.
- `public/img/menu/mains-rice.jpg` uses a big thali/spread photo from the PDF — great visually, but it's a mixed platter rather than one specific dish. Fine as-is, or swap for something more specific later.
- `public/img/menu/milkshakes.jpg` and the milkshake gallery photo show mango and strawberry milkshakes from the PDF — if your actual milkshake flavours/presentation differ, a real photo would be more accurate.
- Several gallery photos reuse the same images already used elsewhere on the site (there wasn't enough distinct PDF photography for all 8 gallery slots to be unique) — more variety would help once you have your own photography.

None of the above is urgent — everything currently shown is a real, on-brand food photo, just not always the *exact* dish or your own photography. Swap any file in place (same filename, same folder) whenever you have better photos, and it updates automatically.

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

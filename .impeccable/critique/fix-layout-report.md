# Fix: Homepage section reorder (critique P1)

## New section order in `src/app/page.tsx`

Old: Hero → WhyChooseUs → OrderOnline → MenuTeaser → Gallery → Team → LocationHours

New: Hero → MenuTeaser → WhyChooseUs → Team → Gallery → OrderOnline → LocationHours

Rationale: the menu teaser (dish photos/names) now appears immediately after the
hero, so appetite is built before any order ask. `WhyChooseUs` and `Team`
follow to build trust/credibility. `Gallery` gives one more appetite beat
right before the ask. `OrderOnline` now sits second-to-last, immediately
followed by `LocationHours`, so the page closes on "how to get it" (order
CTA + hours/map) rather than ending cold on a receipt-like hours table with
no CTA.

## Team placement

Kept `<Team />` in the render tree (out of scope to remove — a separate task
owns that decision) and placed it between `WhyChooseUs` and `Gallery`, per
the suggested reasonable placement in the task brief. It reads naturally
there: after "why choose us" (trust-building), before the gallery/order
sequence — meeting the team reinforces trust just before the appetite/order
push, without breaking up the appetite-building block (MenuTeaser → Gallery
now bookends the trust content).

## OrderOnline copy adjustment

`OrderOnline` already had the maroon-inverted background and the primary
Just Eat / Uber Eats / phone CTAs from an earlier fix, so no structural
change was needed. The only change: the heading was updated from
"Get Street Bites Delivered" (reads like a mid-page service description) to
"Ready to Order?" — a closing invitation that reads naturally as the last
beat before the hours/map section, consistent with the direct, confident
voice used in `Hero.tsx` (e.g. "The streets of India have arrived in
Wolverhampton."). The eyebrow label ("Order Online"), body copy, and all
three CTA buttons were left untouched.

## Files touched

- `src/app/page.tsx` — reordered section composition only.
- `src/components/home/OrderOnline.tsx` — heading text only (`Get Street
  Bites Delivered` → `Ready to Order?`).

No other files were modified.

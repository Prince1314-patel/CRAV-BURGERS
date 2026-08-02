---
name: Street Bites — Indian Street Food
description: Warm, appetite-forward restaurant site — deep maroon and gold on a soft cream ground, with a London×India skyline motif and a cart icon that travels the page as you scroll.
colors:
  maroon: "#5c0f1f"
  maroon-dark: "#3d0a15"
  gold: "#e8b34b"
  cream: "#f6ecdc"
  ink: "#241009"
  white: "#ffffff"
typography:
  display:
    fontFamily: "'Playfair Display', serif"
    fontSize: "clamp(2rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Poppins', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "'Poppins', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.25em"
rounded:
  sm: "8px"
  md: "20px"
  lg: "40px"
spacing:
  sm: "16px"
  md: "32px"
  lg: "64px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.maroon}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "999px"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.maroon-dark}"
    textColor: "{colors.white}"
    rounded: "999px"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "999px"
    padding: "16px 32px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "24px"
---

# Design System: Street Bites — Indian Street Food

## Overview

**Creative North Star: "The Street-Corner Stall, Dressed Up for the High Street"**

Street Bites reads like a well-kept Indian street-food stall that's moved into a proper Wolverhampton shopfront: deep maroon and warm gold carry the same energy as spice-stall awnings and festival signage, set against a soft cream page ground that keeps the food photography and long menu lists easy to read. A recurring London×India skyline line-art strip — Big Ben and the London Eye giving way to India Gate and a Taj Mahal dome — runs as a section divider, quietly stating the brand's "London meets India" premise without needing a paragraph to explain it. The signature touch is a small wheeled food-cart icon that travels left-to-right along a thin dashed gold track as the visitor scrolls the homepage, echoing the cart in the Street Bites logo mark and turning the page scroll itself into a nod to a street vendor's cart making its way down the road.

**Key Characteristics:**
- Warm cream page ground with a deep maroon primary accent and a gold secondary accent — evokes spice, warmth, and festival color without tipping into gaudy.
- A serif display face (Playfair Display) for headings paired with a clean geometric sans (Poppins) for body copy and menu text — editorial warmth up top, easy legibility for long price lists below.
- The London×India skyline motif as a recurring, low-opacity section-divider device, always rendered in `currentColor` so it can sit on either maroon or cream backgrounds.
- A single signature scroll-linked animation (the traveling cart icon) rather than motion sprinkled everywhere — most other content uses simple fade/rise-in reveals on scroll.
- Editorial alternating-side layout on the `/menu` page: each category's dish photo and price list swap sides down the page instead of a plain grid.

## Colors

One primary accent (maroon) and one secondary accent (gold) on a warm cream ground; no dark mode.

### Primary
- **Maroon** (`#5c0f1f`) / **Maroon Dark** (`#3d0a15`): primary buttons, the "Order Online" section background, headings that need weight, the footer background. Maroon Dark is the pressed/hover state of Maroon.

### Secondary
- **Gold** (`#e8b34b`): eyebrow labels, the scroll-cart's dashed track, secondary buttons ("Order on Just Eat"), hover accents, focus-visible outlines, text-selection highlight.

### Neutral
- **Cream** (`#f6ecdc`): the page background everywhere outside the maroon sections — this is the brand's default surface.
- **Ink** (`#241009`): body text and borders; a warm near-black rather than pure black, consistent with the maroon-led palette.
- **White** (`#ffffff`): card surfaces that need to separate from the cream ground (menu teaser cards, team cards) and text set on maroon/gold.

### Named Rules
**The Cream Ground Rule.** The default page background is Cream everywhere except sections that deliberately invert to Maroon (e.g. Order Online) for emphasis. There is no dark theme.

## Typography

**Display Font:** Playfair Display (serif, weights 600/700)
**Body Font:** Poppins (sans-serif, weights 400/500/600)

**Character:** Playfair Display brings editorial, slightly formal warmth to headings — restaurant-menu-board energy without being a script or display-only novelty face. Poppins is a clean geometric sans that stays legible at the small sizes needed for long menu item lists and price columns.

### Hierarchy
- **Display** (700, `clamp(2rem, 5vw, 4.5rem)`, line-height ~1.05): hero headline, section headings ("A Taste of the Menu," "Why We Are Your Best Choice"), category names on `/menu`. Always Playfair Display.
- **Body** (400, 1rem, line-height 1.5): paragraph copy, descriptions, menu item names. Poppins, sentence case.
- **Label** (600, 0.75rem, letter-spacing 0.25em, uppercase): eyebrow text above headings ("Signature Dishes," "Why Choose Us"), nav links, button text. Poppins uppercase, wide-tracked.
- **Price** (600, ~1rem, Playfair Display): menu prices are set in the display face at body-adjacent size so they read as considered typographic moments rather than plain data, while staying legible next to the Poppins item name.

### Named Rules
**The Eyebrow Rule.** Every major section opens with a small uppercase gold Label line above its Display headline — this pairing is the site's consistent way of introducing a new section and should not be dropped even in short sections.

## Layout

Single-column, section-per-scroll marketing layout on `/`, with a container max-width of 1280px and side padding of 24px (mobile) up to 48px (desktop, `px-12`). Vertical rhythm between sections is generous (64–96px, `py-16`–`py-24`). On `/menu`, categories alternate the dish photo between left and right down the page (`lg:order-2` swap) inside a two-column grid that collapses to one column below `lg`. Cards (menu teaser, team, why-choose-us) sit in responsive grids that collapse from 3–4 columns to 1 column on mobile.

## Elevation & Depth

Flat by default — no ambient drop shadows. Separation between a card and the cream ground comes from a solid white card background plus a thin 2px maroon-tinted border (`border-maroon/15`), not shadow. The only "floating" element is the scroll-linked cart icon, which sits above a thin dashed gold line representing its track.

## Shapes

Soft-rounded rather than sharp or fully pill-shaped: `radius-sm` (8px) for small chips, `radius-md` (20px) for cards and images, `radius-lg` (40px) for large feature panels. Buttons use a fully rounded pill shape for a friendly, food-truck-adjacent feel, while cards and photos use the medium radius so they read as considered content blocks rather than stickers.

## Components

### Buttons
- **Shape:** fully rounded pill.
- **Primary:** Maroon background, white Poppins label text (uppercase, wide-tracked), used for "View Full Menu," in-page navigation CTAs.
- **On maroon sections:** Gold background, ink text (e.g. "Order on Just Eat") for the highest-contrast action against a maroon backdrop; a bordered cream-outline variant (e.g. "Order on Uber Eats") for the secondary action in the same section.
- **Hover / Focus:** background darkens (Maroon → Maroon Dark, Gold → white) on hover; focus-visible gets a 3px gold outline ring for keyboard users.

### Cards / Containers
- **Corner Style:** `radius-md` (20px).
- **Background:** White, to separate from the cream page ground.
- **Shadow Strategy:** none — separation comes from a 2px `border-maroon/15` border.
- **Internal Padding:** 20–32px depending on card density (team cards more generous, menu teaser cards tighter around the image).

### Navigation
- Sticky top nav in cream with the wordmark "Street Bites" (maroon + gold accent). `/menu`'s category jump-nav is a second sticky bar of pill-shaped category links, positioned below the nav and below the scroll-cart's track so the two sticky layers never visually overlap.

### Scroll Cart (signature component)
A small wheeled cart icon (`public/img/cart-icon.png`) that travels along a thin dashed gold track fixed just under the main nav, its horizontal position driven by overall page scroll progress (0% at the top of the page, fully across the track at the bottom). Hidden below `md` breakpoints and replaced with a static (non-animated) position when `prefers-reduced-motion` is set.

### Skyline Divider (signature component)
An inline SVG strip combining London landmarks (Big Ben, London Eye, Tower Bridge) on the left half and Indian landmarks (India Gate, Taj Mahal dome, a minaret) on the right half of one continuous viewBox, rendered in `currentColor` at low opacity. Used in the footer and hero as a divider that visually states the brand's London×India premise.

## Do's and Don'ts

### Do:
- **Do** keep the page ground Cream on every section except deliberate Maroon-inverted sections.
- **Do** pair every section heading with a small uppercase Gold eyebrow label above it.
- **Do** set headings in Playfair Display and all reading/menu copy in Poppins.
- **Do** respect `prefers-reduced-motion` for the scroll-cart and scroll-reveal animations — both must fall back to a static presentation.

### Don't:
- **Don't** introduce a dark theme or dark section backgrounds outside the Maroon-inverted sections.
- **Don't** stack the scroll-cart's dashed track and the `/menu` category nav in the same vertical band — keep their sticky `top` offsets far enough apart that they never overlap.
- **Don't** add ambient drop shadows to cards or buttons; rely on the white-card-on-cream + border pattern instead.
- **Don't** duplicate visible heading text in adjacent image `alt` attributes — use `alt=""` when a heading right next to the image already states the same name.

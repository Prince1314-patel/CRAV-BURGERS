---
name: CRAV — Artisan Smashed Burgers
description: Bold, sticker-pop burger brand site — chunky rounded display type over a warm beige ground, hot red and mustard doing all the talking.
colors:
  beige: "#f5e3cd"
  red: "#f91814"
  mustard: "#ffd750"
  mustard-dark: "#f4a804"
  ink: "#1b1b1b"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Modak, cursive"
    fontSize: "clamp(3.5rem, 11vw, 9rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.01em"
  body:
    fontFamily: "'Mouse Memoirs', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "'Mouse Memoirs', sans-serif"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "10px"
  md: "24px"
  lg: "48px"
  pill: "999px"
spacing:
  sm: "16px"
  md: "32px"
  lg: "64px"
  xl: "128px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "20px 40px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "20px 40px"
  button-secondary:
    backgroundColor: "{colors.mustard}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "18px 36px"
  card-menu:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "32px"
---

# Design System: CRAV — Artisan Smashed Burgers

## Overview

**Creative North Star: "The Flat-Top Sticker Shop"**

CRAV reads like a butcher-paper menu board crossed with a skate-brand sticker sheet: enormous, gummy, rounded-off lettering stamped straight onto warm butcher-beige, with fried-egg-yellow and hot-sauce-red doing the only shouting in the room. Nothing here is polite or corporate — headlines are oversized to the point of spilling past their container, ingredient photography is cut out and dropped in at an angle like stickers peeled off a sheet, and every section resolves to a single loud, round-cornered call to action. The system trusts two typefaces to carry all of the personality: a chunky bubble display face for anything meant to be *felt*, and a friendly rounded hand-sans for anything meant to be *read*. There is no serif, no hairline, no restraint — restraint is the thing this brand is refusing.

**Key Characteristics:**
- Warm beige page ground, never white, never dark-mode — this is a daylight, butcher-paper surface.
- Two-color accent system (red for action, mustard for warmth/energy) used at page scale, not as sprinkled chips.
- Display type set enormous and tight-leaded; body type stays small, rounded, and quiet by comparison.
- Real ingredient/product photography treated as cut-out "stickers": drop shadow, slight rotation, layered over the beige ground rather than boxed into cards.
- Thick, fully-rounded (pill) buttons and containers — no sharp corners anywhere in the interactive layer.

## Colors

Two accents on one warm neutral ground; no dark mode — this brand lives in daylight.

### Primary
- **Hot Sauce Red** (`#f91814`): every primary CTA ("Order Now", "Send Craving"), the color of urgency and appetite. Used on ≤10% of any viewport — it always marks the one thing to click.

### Secondary
- **Fried-Egg Mustard** (`#ffd750`) / **Mustard Dark** (`#f4a804`): warmth accents — badges, secondary buttons, underlines, hover states, the "peel" highlight behind stat numbers. Mustard Dark is the pressed/hover state of Mustard, never a separate role.

### Neutral
- **Butcher Beige** (`#f5e3cd`): the page background everywhere. This is the brand's signature surface — it never shifts to white or dark.
- **Char Ink** (`#1b1b1b`): body text, outlines, footer background. Doubles as a near-black "ink" for thick borders around cards and buttons.
- **Paper White** (`#ffffff`): reserved for card surfaces that need to separate from the beige ground (menu cards, form fields) and for text set on red/ink.

### Named Rules
**The Daylight Rule.** The page ground is always Butcher Beige. There is no dark theme — dropping to near-black backgrounds anywhere but the footer and ink accents breaks the brand.

## Typography

**Display Font:** Modak (with cursive/system fallback)
**Body Font:** Mouse Memoirs (with sans-serif fallback)

**Character:** Modak is a single-weight, extremely rounded bubble-letter display face — it is the brand's voice and is never set below ~40px. Mouse Memoirs is a friendly, slightly rounded sans built for small sizes; it carries every sentence of actual reading.

### Hierarchy
- **Display** (400, `clamp(3.5rem, 11vw, 9rem)`, line-height 0.9): hero wordmark ("CRAV"), page-section headlines ("FEEL THE CHANGE", "SMASHED FRESH"). Always set in Modak, always tight-leaded, frequently stacked across 2-3 lines.
- **Headline** (400, `clamp(1.5rem, 4vw, 2.5rem)`, line-height 1.05): sub-headlines inside sections ("JUICY CHEESY FULLY LOADED"). Modak, uppercase source copy kept as-is.
- **Body** (400, 1rem–1.125rem, line-height 1.5): paragraph copy. Mouse Memoirs, sentence case, max ~60ch measure.
- **Label** (400, 0.75–0.85rem, letter-spacing 0.08em, uppercase): nav items, eyebrows ("THE BURGER", "EST. 1997 — NAVARRA, ESPAÑA"), quick-detail chips, button text. Mouse Memoirs uppercase.

### Named Rules
**The One-Voice Display Rule.** Modak only ever appears for brand-voice moments (hero words, section titles, the footer wordmark) — never for body copy, form labels, or dense information (menu macros, prices), which stay in Mouse Memoirs for legibility.

## Layout

Single-column, generously spaced, section-per-viewport rhythm typical of a scroll-driven marketing site. Container max-width ~1280px with 24–32px side gutters on mobile, up to 96px on desktop. Vertical rhythm is loose: `{spacing.xl}` (128px+) between major sections, `{spacing.lg}` (64px) between a section's header and its body content. Grids collapse from multi-column (2–3 col for stat blocks, ingredient cards, menu cards) to single-column under ~768px. Sticker images are positioned with slight overlap into the surrounding whitespace (small negative margins / absolute offsets), not confined to a strict grid cell.

## Elevation & Depth

Flat by default — no ambient drop shadows on cards or buttons. Depth comes from layering: sticker-style cutout images cast one deliberate, hard-edged drop shadow (to sell the "peeled sticker" illusion) and sit above flat color/beige panels. Menu and ingredient cards use a thick solid ink or colored border instead of a shadow to separate from the beige ground.

### Named Rules
**The Sticker Shadow Rule.** Only cutout product/ingredient imagery gets a shadow (simulating a sticker lifted off the page). UI chrome — buttons, nav, cards — stays flat and relies on color and border instead.

## Shapes

Fully rounded, pill-shaped interactive elements (`{rounded.pill}` on all buttons and chips) paired with softly rounded containers (`{rounded.md}` ≈ 24px on cards, `{rounded.lg}` ≈ 48px on large image panels). No sharp 0-radius corners anywhere in the interactive layer — the brand's bubble-letter logic extends to every shape on the page.

## Components

### Buttons
- **Shape:** fully rounded pill (`{rounded.pill}`).
- **Primary:** Hot Sauce Red background, white Mouse Memoirs label text (uppercase, letter-spaced), generous padding (~20px/40px). Used for every "Order Now" / "Send Craving" CTA.
- **Hover / Focus:** background shifts to Char Ink with a slight upward translate (2–4px) and shadow lift; focus-visible gets a mustard outline ring for keyboard users.
- **Secondary:** Mustard background, ink text — used for lower-emphasis actions (e.g. "Later" on the cookie banner).

### Cards / Containers
- **Corner Style:** `{rounded.md}` (~24px).
- **Background:** Paper White on the menu grid (so items pop off beige); beige-on-beige with an ink border elsewhere (ingredient/spice callouts).
- **Shadow Strategy:** none on the card itself; only the product photo inside it casts the sticker shadow.
- **Border:** 2–3px solid Char Ink on cards that sit directly on the beige ground, omitted on white cards.
- **Internal Padding:** `{spacing.md}` (32px).

### Inputs / Fields
- **Style:** Paper White fill, thick (2–3px) Char Ink border, `{rounded.sm}`–`{rounded.md}` corners, Mouse Memoirs placeholder text in uppercase label style.
- **Focus:** border shifts to Hot Sauce Red, no glow.

### Navigation
- Logo "CRAV" set in Modak at label-adjacent scale, always top-left, links home. Right side keeps one visible link ("Burgers") plus a hamburger that opens a full label-style menu (Mouse Memoirs, uppercase, generous line-height) over a beige or ink panel. Active/hover state underlines or shifts to red.

### Sticker Ingredient Cutout (signature component)
Individual ingredient photography (lettuce, tomato, cheese, patty) cut out against transparency, given a single hard drop shadow, and placed at a slight rotation over the beige ground — implemented here as a scroll/hover-reactive tilt+float rather than the reference site's literal path animation, in the same expressive spirit.

## Do's and Don'ts

### Do:
- **Do** keep the page ground Butcher Beige (`#f5e3cd`) on every route; it is the brand's signature surface.
- **Do** reserve Hot Sauce Red for the single primary action per section.
- **Do** set brand-voice headlines in Modak, oversized and tight-leaded; keep all reading copy in Mouse Memoirs.
- **Do** give every button and card a fully rounded silhouette — no sharp corners.

### Don't:
- **Don't** introduce a dark theme or dark section backgrounds outside the ink footer.
- **Don't** set dense information (prices, macros, forms) in Modak — it is unreadable below display sizes.
- **Don't** add ambient drop shadows to flat UI chrome; reserve shadow for sticker-style product cutouts only.
- **Don't** square off buttons or cards — sharp corners contradict the bubble-letter identity.

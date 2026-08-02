# SpruceMySite — Brand Guidelines

**Version 1.0 · July 2026**
Extracted from the live website (www.sprucemysite.com.au) and codebase. This document is the single source of truth for how SpruceMySite looks, sounds, and behaves across every touchpoint.

---

## 1. Brand Essence

**Who we are:** A Bondi Junction web design and digital marketing studio run by Christian Alba, helping busy Sydney small businesses get their "digital house in order."

**The brand equation (used verbatim in the hero):**

> Web Design **+** Mindset Tools **=** Less Burnout, More Leads.

**Positioning:** "Your Trusted Local Mate, Who Happens To Be A Tech Wizard." We are the approachable expert — warm, local, human first; technically excellent second. We handle the scary stuff so clients can handle the human stuff.

**Brand promise (footer sign-off):**
> "We Handle The Scary Stuff So You Can Handle The Human Stuff. ☕"

### Core brand words (from the site marquee)
These six phrases rotate in the marquee band and are the brand's vocabulary anchors:

- Less Burnout
- More Leads
- Digital House In Order
- Hold The Keys
- Tech Detox
- 24/7 Don't-Panic Support

---

## 2. Logo

| Asset | File | Usage |
|---|---|---|
| Leaf mark | `/logo-leaf.jpg`, `/logo-leaf.webp` | Favicon, nav brand mark, footer. Always displayed in a circle (border-radius 50%), 38×38px in nav |
| Wordmark | Text-set, not an image | "Spruce**MySite**" — "Spruce" in ink, "MySite" in terracotta bold |
| Social/OG image | `/og-cover.jpg` (1200×630) | Link previews on Facebook, LinkedIn, X |

**Wordmark rules:**
- Set in Fraunces, weight 600, ~1.32rem in navigation
- "MySite" is always terracotta (`#D9582F`); "Spruce" is always ink
- The leaf mark sits left of the wordmark with an 11px gap
- Playful interaction: the leaf rotates 8° and scales 1.06 on hover — the logo is allowed to be alive

**Don't:** square-crop the leaf, recolor the wordmark accent, or separate "Spruce" and "MySite" onto different lines.

---

## 3. Color Palette

The palette is warm, earthy, and café-inspired — cream paper, terracotta clay, honey, sage. It deliberately avoids "tech blue."

### Primary colors

| Name | Hex | CSS token | Role |
|---|---|---|---|
| Cream | `#FBF4E7` | `--cream` | Page background, default canvas |
| Cream 2 | `#F3E7D2` | `--cream-2` | Secondary surfaces (FAQ toggles) |
| Paper | `#FFFDF6` | `--paper` | Cards, chips, elevated surfaces |
| Ink | `#241A12` | `--ink` | Headlines, body text, dark sections |
| Ink Soft | `#5A4A3B` | `--ink-soft` | Secondary/supporting text |

### Accent colors

| Name | Hex | CSS token | Role |
|---|---|---|---|
| Terracotta | `#D9582F` | `--terracotta` | **Primary accent.** CTAs, links, section tags, wordmark accent, stat numbers |
| Terracotta Dark | `#B23F1B` | `--terracotta-d` | Button hover states, CTA shadows |
| Honey | `#E9A33F` | `--honey` | Star ratings, underline flourishes, marquee ✺ symbol, map pin |
| Honey Soft | `#F2C97C` | `--honey-soft` | Glows, halos, card corner accents |
| Sage | `#6F7C4C` | `--sage` | Trust/nature accent. Icon tiles, eyebrow dots, "Keys" section background |
| Sage Dark | `#4E5934` | `--sage-d` | Eyebrow text, gradient partner for sage |
| Blush | `#EAC8A2` | `--blush` | Quote marks, soft decorative moments |
| Violet | `#7C4DE0` | `--violet` | **Sparingly.** Custom cursor and the italic "equation" line only — the one unexpected color that signals mindset/magic |

### Utility tokens

| Token | Value | Role |
|---|---|---|
| `--line` | `rgba(36,26,18,.14)` | Hairline borders on cards and chips |
| `--shadow` | `0 24px 60px -28px rgba(58,38,20,.45)` | Signature warm, soft drop shadow |
| `--r` | `22px` | Default card corner radius |
| Theme color | `#FBF4E7` | Browser chrome / `theme-color` meta |

### Color usage rules
- Cream is the default background; never pure white pages
- Terracotta is the only CTA color. One primary CTA style, everywhere: "Book A Call"
- Dark sections (`--ink` background) are used as rhythm breaks: the marquee and the "Lead Engine" process section. Cream text on ink, with honey/terracotta highlights
- Sage owns "trust and stewardship" moments (the Keys section, contact icons, location card)
- Violet appears in exactly two places (cursor, equation line). Do not expand its use — its rarity is the point
- Atmosphere: pages carry a fixed grain texture (5% opacity noise) plus soft radial gradient washes of honey, terracotta, and sage. Surfaces should feel like warm paper, not flat screens

---

## 4. Typography

Two typefaces, loaded from Google Fonts:

### Fraunces (serif) — Display voice
- **Used for:** All headings (h1–h4), the wordmark, stat numbers, quote marks, the italic equation line, marquee text, FAQ questions
- **Weights:** 400–700; italics at 500–600 for expressive moments
- **Character:** Warm, editorial, slightly retro — the "human" in the brand
- **Settings:** line-height 1.05, letter-spacing −0.01em on headings

### Hanken Grotesk (sans-serif) — Working voice
- **Used for:** Body copy, navigation, buttons, labels, lists
- **Weights:** 400–800
- **Settings:** Base 18px, line-height 1.6

### Type scale (as implemented)

| Element | Size | Notes |
|---|---|---|
| Hero h1 | `clamp(2.9rem, 7vw, 6rem)` | Includes a smaller intro line ("Hi, I'm Christian 👋") at 0.42em, weight 500 |
| Section title | `clamp(2rem, 4.5vw, 3.4rem)` | Fraunces 600 |
| Section tag (eyebrow) | 0.78rem | Weight 800, uppercase, letter-spacing 0.14em, terracotta |
| Lead paragraph | 1.18rem | Ink-soft color, max-width 30em |
| Card h3 | 1.55rem | |
| Body | 1rem–1.12rem | |
| Fine print / chips | 0.78–0.92rem | Weight 600–700 |

### Typographic flourishes
- Key words in headlines are *italicized in terracotta* with a hand-drawn honey underline SVG beneath
- Stat numbers are large Fraunces figures (3.1rem) in terracotta
- Emphasis is done with weight and color, never with ALL-CAPS body text (uppercase is reserved for tiny eyebrow labels)

---

## 5. Voice & Tone

The SpruceMySite voice is **Aussie-warm, plain-spoken, and quietly confident**. It sounds like a mate explaining tech over coffee — never like an agency deck.

### Voice pillars

1. **Local and human.** Australian idiom is used naturally: "flat white," "takes a sickie," "your trusted local mate." Location (Bondi Junction, Sydney) is worn proudly.
2. **Empathy before expertise.** Copy names the client's pain in their own words first: "You Didn't Quit Your 9-To-5 To Troubleshoot DNS Records On A Sunday Night."
3. **Domestic metaphors for tech.** The recurring frame is the *house*: "Get Your Digital House In Order," "Your Digital Front Door Is Locked, Lit, And Ready For Guests," "Hold The Keys." Tech jargon is translated into home care.
4. **Playfully anti-panic.** Support is "Don't-Panic Support." The tone defuses tech anxiety with light humor, never sarcasm at the client's expense.
5. **Concrete outcomes.** Every promise ends in a tangible result: leads, bookings, time back. "Turn Your Website Into A 24/7 Sales Rep That Never Takes A Sickie."

### Style rules
- **Title Case Headlines** — the site sets headlines and even lead sentences in Title Case. Keep it.
- First person singular for Christian ("Hi, I'm Christian 👋"), first person plural for the service ("We build...")
- Emoji are allowed as punctuation accents (👋 ☕) — one per moment, never strings of them
- Contractions always ("you're," "don't," "let's")
- Short sentences win. If a sentence needs a second breath, split it
- CTAs are invitations, not commands: "Book A Call," "Let's Grab A (Virtual) Coffee"

### Words we use / avoid

| Use | Avoid |
|---|---|
| Digital house, front door, keys | Synergy, leverage, solutions |
| Mate, local, Sydney, Bondi | World-class, cutting-edge |
| Less burnout, more leads | ROI-maximizing, growth-hacking |
| Don't-panic, sorted, handled | Enterprise-grade, disruptive |

---

## 6. UI Components & Shape Language

**Shape language: soft, rounded, pill-shaped.** Nothing sharp.

| Component | Spec |
|---|---|
| **Primary button** | Terracotta fill, white text, weight 700, 60px pill radius, 13×24px padding, arrow icon. Hover: lifts −3px, darkens to terracotta-dark, shadow deepens |
| **Ghost button** | Transparent, 2px ink border, pill. Hover: inverts to ink fill with cream text |
| **Cards** | Paper background, 1px `--line` border, 22px radius, warm shadow, 36px padding. Honey-soft radial glow in the top-right corner. Hover: lift |
| **Chips / pills** | Paper, pill radius (50px), weight 700, small (0.86rem) |
| **Eyebrow labels** | Pill with sage dot, uppercase, sage-dark text |
| **Icon tiles** | Rounded squares (10–18px radius), terracotta or sage fill, white glyph |
| **Dark feature bands** | Ink or sage background, 34px radius, inset from page edges (margin 0 26px) — sections float like cards |
| **FAQ accordion** | Paper rows, 18px radius, Fraunces questions, terracotta plus-circle toggle |
| **Layout** | Max-width 1200px, 26px side padding |

---

## 7. Motion & Interaction

Motion is **gentle, organic, and continuous** — things float, spin slowly, and drift like a lived-in room.

- **Custom cursor:** violet ring + dot (desktop only), grows to 74px over interactive elements. Signature quirk of the site
- **Float:** decorative chips bob ±14px on 5–6.5s ease-in-out loops, with staggered delays
- **Marquee:** the brand-words band scrolls continuously (28s loop), tilted −1.4°, pauses on hover
- **Dashed orbit rings** spin at 38s/60s around the hero 3D stage
- **Hover lifts:** buttons and cards translate up 3–8px with deepening shadows
- **Underline reveals:** nav links draw a terracotta underline left-to-right on hover
- **Scroll reveals:** GSAP + ScrollTrigger; sections fade/slide in once (`.reveal` class)
- **Rule of thumb:** durations 0.25–0.4s for interactions; multi-second loops for ambience; always ease-in-out. No hard bounces, no flashing

---

## 8. Imagery & Iconography

- **Icons:** inline SVG, stroke-based (stroke-width ~2–2.4), rounded caps and joins, drawn in the current text color. No icon fonts, no filled glyph sets
- **Decorative symbols:** the eight-point star ✺ (honey) as marquee separator; hand-drawn underline squiggles; map pin built from brand shapes
- **3D element:** the hero features an interactive Three.js coin/leaf with a honey halo — playful, tactile, invites spinning ("⟳ spin me" hint)
- **Photography:** minimal. The brand leans on color, type, and texture instead of stock photos. When photos are used, they should be warm-toned and people-first

---

## 9. Digital Standards (carry into everything we ship)

- **Locale:** `en-AU` — Australian English spelling everywhere (customise, optimise, colour in copy)
- **SEO/meta:** every page ships a canonical URL, meta description, Open Graph + Twitter Card tags, and JSON-LD (`ProfessionalService` + `Person` + `WebSite` graph)
- **Business facts (for consistency):**
  - Name: SpruceMySite
  - Founder: Christian Alba — Web Designer & Digital Marketing Specialist
  - Location: Bondi Junction, NSW 2022, Australia
  - Phone: +61 433 092 621
  - Email: info@sprucemysite.com.au
  - Hours: Mon–Sat, 9:00–20:00
  - Socials: facebook.com/sprucemysite · instagram.com/sprucemysite · linkedin.com/in/christian-alba
- **Rating display:** ★★★★★ stars always in honey
- **AI-search ready:** robots.txt welcomes GPTBot, ClaudeBot, PerplexityBot etc.; `llms.txt` is published

---

## 10. Quick Reference Card

```
BACKGROUND   #FBF4E7  cream          TYPE  Headings: Fraunces 600
SURFACE      #FFFDF6  paper                Body: Hanken Grotesk 400 / 18px
TEXT         #241A12  ink            SHAPE 22px cards · 60px pill buttons
TEXT-SOFT    #5A4A3B  ink-soft       VOICE Aussie-warm · Title Case ·
CTA          #D9582F  terracotta           house metaphors · "Book A Call"
GOLD         #E9A33F  honey          MOTION floaty, slow, ease-in-out
TRUST        #6F7C4C  sage           QUIRK  violet cursor · tilted marquee
MAGIC        #7C4DE0  violet (rare)         · spinning hero coin
```

**The one-sentence test:** if it doesn't feel like *a warm café where a mate calmly fixes your website while you have a flat white*, it's off-brand.

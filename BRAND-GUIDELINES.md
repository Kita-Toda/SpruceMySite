# SpruceMySite — Brand Guidelines

**Version 1.2 · 12 August 2026**
Extracted from the live website (www.sprucemysite.com.au) and codebase. This document is the single source of truth for how SpruceMySite looks, sounds, and behaves across every touchpoint.

> **v1.2 changelog —** **The terracotta conflict is closed.** The site adopted the logo's `#C9603C`, replacing `#D9582F` in the token and in seven hardcoded copies of the same colour, with `--terracotta-d` retuned from `#B23F1B` to `#A24728` so the hover step still lands right — §3.2 and §3.3 record exactly what moved and what it cost. Plus an accuracy pass: every claim in §3–§9 re-checked against `src/`. Corrections to §2.4 (the OG cover now needs a re-export on three counts — it still carries the retired terracotta, it's set in a sans rather than Fraunces, and its CTA says "Book A Free Call"), §3.5 (violet is used in five places, not two; honey stars and blush quote marks are dormant, not live), §6 (icon-tile fills, FAQ toggle, plus a new list of styled-but-unrendered components), §7 (float distance), §8 (**the hero 3D object is a violet coffee mug, not a coin/leaf**) and §9 (the phone number is no longer displayed on the contact card, but still ships in the schema). The other v1.1 open item — the **unnamed logo fonts (§4.0)** — is still open, and can only be closed by reading them off the original design file.
>
> **v1.1 changelog —** The circular `Spruce My Site` logo replaced the old leaf mark. Its colours and typography are now recorded in §2, §3 and §4, sampled pixel-by-pixel from `public/spruce_logo_1_transparent.png` rather than eyeballed. **The logo and the website do not currently use the same terracotta, the same black, or the same fonts.** Every divergence is marked ⚠️ below. Nothing about the site's CSS was changed — this release documents the gap, it doesn't close it. See §3.3 for the decision that closes it.

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

### 2.1 The primary mark

A **circular badge lockup**: a solid almond disc carrying the wordmark stacked on three lines — "Spruce" (black) / "*My*" (terracotta italic) / "Site" (black) — with a spaced-capitals tagline beneath.

**Tagline, set inside the mark:** `LOCAL SITES. REAL REVENUE`
*(Note: no full stop after "REVENUE" — that's how the artwork reads, keep it.)*

| Asset | File | Size | Usage |
|---|---|---|---|
| Badge — large | `/public/spruce_logo_1_transparent.png` | 1798 × 1800, transparent | Master artwork. Print, social avatars, anything above ~400px |
| Badge — small | `/public/spruce_logo_2_transparent.png` | 998 × 998, transparent | Same lockup, tighter margin (the disc fills more of the frame). Better for small on-screen use |
| Social/OG image | `/og-cover.jpg` | 1200 × 630 | Link previews on Facebook, LinkedIn, X — see §2.4 |

Both PNGs are the same artwork; they differ only in how much clear space sits around the disc. Neither is a web-optimised size — see 2.3.

**Lockup rules:**
- **The badge is drawn artwork, not live text. Never re-typeset it.** Don't rebuild it in Fraunces to "match the site" — that would change the letterforms (§4.0).
- Always circular. Never square-crop, never crop the disc edge, never place it on a coloured tile — it carries its own almond field and is supplied transparent so it sits on any background.
- Don't recolour any part, don't restack the three lines onto one, don't drop the tagline, don't set the tagline separately in another font.
- Minimum size **44px**; below that the tagline becomes unreadable mush. If you need smaller, a tagline-free variant must be drawn — one does not exist yet.

### 2.2 The web wordmark (separate thing — keep both straight)

The site's nav and footer set the name as **live HTML text**, not the badge:

- Fraunces, weight 600, ~1.32rem
- "Spruce" in ink, "MySite" in terracotta — ⚠️ note the web wordmark reads "Spruce**MySite**" on one line, while the badge reads "Spruce / My / Site" on three
- Sits right of the brand mark with an 11px gap
- Playful interaction: the mark rotates 8° and scales 1.06 on hover — the logo is allowed to be alive

**Don't:** recolour the wordmark accent, or split "Spruce" and "MySite" onto different lines.

### 2.3 Derived web assets — ✅ generated 2026-08-12

The old leaf assets were deleted; all five code references have been repointed and these derivatives generated from `spruce_logo_2_transparent.png` (the tighter crop scales better small):

| File | Size | Used by |
|---|---|---|
| `/logo-mark.png` | 114×114, 11 KB | Nav + footer mark, displayed at 38px (3× for retina) |
| `/logo-mark.webp` | 114×114, 5 KB | Same, preferred format via `<picture>` |
| `/favicon.png` | 64×64, 5 KB | Browser tab |
| `/apple-touch-icon.png` | 180×180, 15 KB | iOS home screen. **Flattened onto cream** — iOS has no alpha channel and renders transparency black |
| `/og-cover.jpg` | 1200×630, 64 KB | All link previews + schema `image` |

**Never reference the two master PNGs from the site** — at 99 KB / 62 KB they're 10–20× too heavy for a 38px mark. They are source artwork.

**When the logo changes, all five must be regenerated.** Nothing derives them automatically at build time.

> ⚠️ **Known weakness: the badge is a poor favicon.** At 16–32px the three stacked words and the tagline collapse into unreadable marks — it survives as "an almond circle with dark smudges," recognisable by colour alone. This is inherent to a text-heavy badge, not a fixable export setting. **A simplified favicon variant should be drawn** — a single letterform or a mark, on the almond disc. Until that exists the current favicon is functional but not good.

### 2.4 The OG cover

`og-cover.jpg` is the image behind every Facebook, LinkedIn and X share, and the `image` in the business schema. Regenerated 2026-08-12 for two reasons: the old one used the retired leaf logo, **and it displayed a "5/5 Google Reviews" stat that was never substantiated** — the same fabricated-rating problem removed from the site itself (`MARKETING-PLAN.md` §3 P0 #1–2). It had been going out on every share.

Current layout: cream field · terracotta left rule · sage eyebrow pill ("WEB DESIGN • SYDNEY") · "Get Your Digital House In **Order.**" · one-line subhead · three **substantiable** stats (10+ Years Experience · 7-10 Days To Launch · Mon-Sat 9am-8pm Support) · blush quarter-disc bottom-right · badge top-right on clean cream · ink footer bar with the domain and a CTA.

**Rule: every figure on this image must be defensible.** It is an advertisement under Australian Consumer Law exactly like the site is.

**⚠️ Three things on it are off-brand.** All are cosmetic, none is urgent, and they share one fix — a single re-export closes all three at once:

- **Its terracotta is the retired one.** The left rule, "Order." and the CTA text sample as `#D9582F`, the colour the site dropped on 2026-08-12 (§3.3). The image was drawn to match the old palette, and a colour baked into a JPEG doesn't move when a CSS variable does. The badge in the corner is unaffected — it was always `#C9603C`, which is precisely why the rest of the image now disagrees with it.
- **It is set entirely in a sans-serif.** "Get Your Digital House In Order." is a heavy grotesque, not Fraunces. The brand's display voice — the warm editorial serif that carries every headline on the site — is absent from the single image that represents the brand on Facebook, LinkedIn and X. The headline should be Fraunces 600–700 with "Order." in terracotta italic, matching the hero.
- **Its CTA reads "Book A Free Call."** Everywhere else the CTA is **"Book A Call"** (§5). "Free" is an extra claim on the one asset that gets shared out of context, and it breaks the one-CTA-everywhere rule. Make it "Book A Call".

---

## 3. Color Palette

The palette is warm, earthy, and café-inspired — cream paper, terracotta clay, honey, sage. It deliberately avoids "tech blue."

### 3.1 Logo colors (sampled from the artwork — start here)

Four colors, and only four. Measured pixel-by-pixel from `spruce_logo_1_transparent.png`; percentages are share of the mark's opaque area. `spruce_logo_2_transparent.png` returns the **same four hexes**; its shares differ by up to 0.3 points because the disc fills more of the frame.

| Name | Hex | Where in the mark | Share |
|---|---|---|---|
| **Almond** | `#E7CDB0` | The disc itself | 93.1% |
| **Black** | `#000000` | "Spruce" and "Site" | 4.7% |
| **Logo Terracotta** | `#C9603C` | "*My*" | 1.4% |
| **Ink** | `#231A13` | The `LOCAL SITES. REAL REVENUE` tagline | 0.4% |

Everything else in the file is anti-aliasing on the letter edges. The mark has no gradient, no shadow, no texture — it is four flat colors on transparency.

**On that fourth one:** `#231A13` is the site's existing `--ink` (`#241A12`) off by one unit per channel — export rounding, not a decision. **Treat them as the same color and do not mint a new token for it.** The tagline is already on-palette.

### 3.2 Where the logo and the site once disagreed — ✅ resolved 2026-08-12

v1.1 recorded three divergences between the badge artwork and the site CSS. **The terracotta conflict is now closed: the site moved to the logo's colour.** The other two stand, deliberately.

| | Logo | Site CSS | Status |
|---|---|---|---|
| **Terracotta** | `#C9603C` | `#C9603C` (`--terracotta`) | ✅ **Matched.** The site was `#D9582F`; it now uses the logo's value everywhere. See §3.3 |
| **Headline black** | `#000000` pure | `#241A12` (`--ink`) warm near-black | ⚠️ **Still different, and that's fine.** The site deliberately avoids pure black; the badge is drawn artwork and keeps its own. Never introduce `#000000` into the UI to "match the logo" |
| **Almond field** | `#E7CDB0` | *no equivalent* | ⚠️ **Still logo-only.** Nearest is `--blush` `#EAC8A2` (warmer, more saturated); `--cream-2` `#F3E7D2` is much lighter. Almond is a genuinely distinct colour, and it stays inside the badge — don't mint a UI token for it unless a real need appears |

### 3.3 The terracotta resolution — what changed and why

**Decision (2026-08-12, owner's call): the site moved to the logo.** The logo was the harder thing to change — it's already on exports, socials and anything printed — so the cheaper side moved.

What was actually edited. It was more than the one variable, because the same colour was hardcoded in six atmosphere gradients and one 3D light:

| Location | Was | Now |
|---|---|---|
| `--terracotta` in `global.css` | `#D9582F` | `#C9603C` |
| 5 × `rgba()` washes in `global.css` (body gradient, hero halo, orbit ring two, Lead Engine glow, one card glow) | `rgba(217,88,47,…)` | `rgba(201,96,60,…)` |
| 1 × `rgba()` wash in `ServiceLayout.astro` | `rgba(217,88,47,.4)` | `rgba(201,96,60,.4)` |
| Three.js rim light in `index.astro` | `0xd9582f` | `0xc9603c` |

**Contrast effect — a wash, not a regression.** White on the terracotta button went **3.90 → 4.02**, terracotta text on cream went **3.56 → 3.68**, terracotta on ink went **4.37 → 4.24**. Nothing crossed the 4.5 AA threshold in either direction. Terracotta text at body size was already short of AA before this change and still is — that is a **pre-existing, separate issue**, and the fix is size and weight (terracotta is safe for large headings, stat figures and eyebrow labels; it should not carry small body copy on cream).

**`--terracotta-d` was retuned to match — ✅ done.** The hover/shadow colour was `#B23F1B`, drawn against the old accent. Left alone it would have been *more* saturated than the new base, so hovering would drift toward the punchier retired orange instead of stepping straight down in lightness. It is now **`#A24728`**, which rebuilds the original relationship at the new saturation:

| | Hue | Saturation | Lightness | White contrast |
|---|---|---|---|---|
| Base `#C9603C` | 15.3° | 56.6% | 51.2% | 4.02 |
| Old hover `#B23F1B` | 14.3° | **73.7%** ← the mismatch | 40.2% | 5.80 |
| **New hover `#A24728`** | 15.2° | 60.4% | 39.6% | **6.05** |

Hover is now a clean −11.6 point drop in lightness at the same hue, exactly as the original pair behaved. Contrast on the hovered button improved as a side effect.

### 3.4 Primary colors *(site CSS — current)*

| Name | Hex | CSS token | Role |
|---|---|---|---|
| Cream | `#FBF4E7` | `--cream` | Page background, default canvas |
| Cream 2 | `#F3E7D2` | `--cream-2` | Secondary surfaces (FAQ toggles) |
| Paper | `#FFFDF6` | `--paper` | Cards, chips, elevated surfaces |
| Ink | `#241A12` | `--ink` | Headlines, body text, dark sections |
| Ink Soft | `#5A4A3B` | `--ink-soft` | Secondary/supporting text |

### 3.5 Accent colors *(site CSS — current)*

| Name | Hex | CSS token | Role |
|---|---|---|---|
| Terracotta | `#C9603C` | `--terracotta` | **Primary accent.** CTAs, links, section tags, wordmark accent, stat numbers. ✅ *Identical to the logo's terracotta as of 2026-08-12 — see §3.3* |
| Terracotta Dark | `#A24728` | `--terracotta-d` | Button hover states, CTA shadows. Retuned 2026-08-12 to keep the same hue and lightness step as the new base — see §3.3 |
| Honey | `#E9A33F` | `--honey` | Hand-drawn underline flourish, marquee ✺ symbol, map pin, third stat number, third card icon tile. *Also the reserved color for star ratings — but no stars render anywhere today, see §9* |
| Honey Soft | `#F2C97C` | `--honey-soft` | Glows, halos, card corner accents, dark-section eyebrows, the "Keys" key art |
| Sage | `#6F7C4C` | `--sage` | Trust/nature accent. Icon tiles, eyebrow dots, "Keys" section background |
| Sage Dark | `#4E5934` | `--sage-d` | Eyebrow text, gradient partner for sage |
| Blush | `#EAC8A2` | `--blush` | Oversized testimonial quote marks. *Currently dormant — the testimonials section renders nothing, see §6* |
| Violet | `#7C4DE0` | `--violet` | **Sparingly.** The unexpected color that signals mindset/magic. Five places only, listed below |

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
- Violet appears in exactly five places, and nowhere else. Do not expand the list — its rarity is the point:
  1. The custom cursor ring and dot
  2. The italic "equation" line in the hero
  3. The ceramic of the hero 3D coffee mug (§8)
  4. The fourth stack card's icon tile and heading (`.stackcard:nth-child(4)`)
  5. The fourth feature card's icon on service pages (`ServiceLayout.astro`)
- Atmosphere: pages carry a fixed grain texture (5% opacity noise) plus soft radial gradient washes of honey, terracotta, and sage. Surfaces should feel like warm paper, not flat screens

---

## 4. Typography

### 4.0 ⚠️ The logo does not use the website's typefaces

Worth stating plainly. The colour half of the logo-vs-site gap closed in §3.3; the type half did not, and it can't until the fonts are identified. The badge is set in **two faces that appear nowhere else in the brand**, and they are not Fraunces or Hanken Grotesk.

**Logo display face — "Spruce" / "*My*" / "Site"**
A heavy, high-contrast serif. Observed characteristics:
- Pronounced **ball terminals** on `r`, `c`, `y` and the `S`
- **Bracketed, tapered serifs** — curved joins, not slab-square
- Strong thick/thin stroke modulation; near-vertical stress
- Very heavy weight (Bold–Black range), tight fit
- A true italic for "*My*" — genuinely drawn, not slanted, with a looped `y` descender

**Logo tagline face — `LOCAL SITES. REAL REVENUE`**
A **geometric sans in caps**, bold weight, very wide tracking (roughly 0.2em). Near-circular `O`, straight-legged `R`, even-armed `E`.

> 🔴 **Unresolved — I can't name either font, and I won't guess in a document that calls itself a source of truth.** Typeface identity cannot be established reliably from a flattened PNG; several families share these features. My *unconfirmed* hunches are Playfair Display (display) and Montserrat (tagline) — both extremely common defaults — but **do not write those into anything until confirmed.**
>
> **You can settle this in ten seconds:** open the original design file (this looks like a Canva export) and read the two font names off the text layers. Send them over and I'll fill this section in properly.

**How the two systems relate:** Fraunces and the logo serif are cousins, not twins — both warm editorial serifs, but Fraunces is softer and deliberately wonky where the logo face is more formal and higher-contrast. Hanken Grotesk is a neo-grotesque; the tagline face is geometric. Close enough to coexist, not close enough to call identical.

**The rule, either way:** the badge is fixed artwork (§2.1) and keeps its own typography. **Never set body copy, headings or UI in the logo's fonts, and never rebuild the logo in Fraunces.** Logos are drawn; interfaces are typeset. Those are different jobs.

---

### 4.1 Website typefaces

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
3. **Domestic metaphors for tech.** The recurring frame is the *house*: "Get Your Digital House In Order," "Your Digital Front Door Stays Locked, Lit, And Ready For Guests," "Hold The Keys." Tech jargon is translated into home care.
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
| **Icon tiles** | Rounded squares (10–18px radius), white glyph. Fill cycles by position: terracotta → sage → honey → violet → ink |
| **Dark feature bands** | Ink or sage background, 34px radius, inset from page edges (margin 0 26px; 14px on mobile) — sections float like cards |
| **FAQ accordion** | Paper rows, 18px radius, Fraunces 600 questions (1.18rem). Toggle is a cream-2 circle with a terracotta `+` that rotates 45° and inverts to a terracotta fill when open |
| **Layout** | Max-width 1200px, 26px side padding |

### ⚠️ Dormant components — styled but not rendered

Two components exist with full styling and are **not on the live page**. Anything below that describes them is describing latent code, not something a visitor sees:

- **Testimonials (`Reviews.astro`)** — the `quotes` array is empty, so the section renders nothing. Its three fabricated testimonials were removed 2026-08-12. This is why blush quote marks and honey review stars appear in the CSS but nowhere on screen. Restoring it needs a real, permissioned client quote.
- **Quote form (`Quote.astro`)** — commented out of `index.astro` on 2026-08-12 at the owner's request. It was the site's **only form** and the entry point to the Formspree → n8n → GoHighLevel pipeline. With it hidden, the only conversion paths are the "Book A Call" booking widget and the email link in the contact card.

---

## 7. Motion & Interaction

Motion is **gentle, organic, and continuous** — things float, spin slowly, and drift like a lived-in room.

- **Custom cursor:** violet ring + dot (desktop only), grows to 74px over interactive elements. Signature quirk of the site
- **Float:** decorative chips rise 14px and settle back on 5–6.5s ease-in-out loops, with staggered delays
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
- **3D element:** the hero stage holds an interactive **Three.js coffee mug with rising steam** — violet ceramic (`#7C4DE0`), dark coffee, warm key light with a terracotta rim light. It sits on a honey-soft → terracotta radial halo, inside two dashed orbit rings. Drag to spin it; the prompt reads **"⟳ Drag To Spin"**. The mug is the brand's café metaphor made literal — it is not a coin, a leaf, or a logo shape, and shouldn't be redrawn as one
  - **It must fail softly.** WebGL is unavailable on plenty of real devices (blocklisted GPUs, hardware acceleration off, some corporate and privacy configurations). The hero renders without it — halo, rings and floating chips carry the stage on their own. Never let the 3D object become load-bearing for the page
- **Photography:** minimal. The brand leans on color, type, and texture instead of stock photos. When photos are used, they should be warm-toned and people-first

---

## 9. Digital Standards (carry into everything we ship)

- **Locale:** `en-AU` — Australian English spelling everywhere (customise, optimise, colour in copy)
- **SEO/meta:** every page ships a canonical URL, meta description, Open Graph + Twitter Card tags, and JSON-LD (`ProfessionalService` + `Person` + `WebSite` graph)
- **Business facts (for consistency):**
  - Name: SpruceMySite
  - Founder: Christian Alba — Web Designer & Digital Marketing Specialist
  - Location: Bondi Junction, NSW 2022, Australia
  - Phone: +61 433 092 621 — ⚠️ **published, but not displayed.** Removed from the contact card 2026-08-12 at the owner's request; it still ships in the JSON-LD `telephone` field (`Layout.astro`) and in `llms.txt`. If the number is meant to be private, those two also need to change; if it's meant to be public, it should go back on the card as a tappable `tel:` link. Right now it's neither
  - Email: info@sprucemysite.com.au
  - Hours: Mon–Sat, 9:00–20:00
  - Socials: facebook.com/sprucemysite · instagram.com/sprucemysite · linkedin.com/in/christian-alba
- **Rating display:** ⚠️ **No star glyphs anywhere until real Google reviews exist.** Five stars beside a trust line reads as a 5-star rating whether or not a number is attached — that is the claim, not the decoration. When genuine reviews exist, stars render in honey and must match the actual score. *(Swept and cleared 2026-08-12: hero, stat bar, testimonials and OG cover all previously carried an unearned rating.)*
- **AI-search ready:** robots.txt welcomes GPTBot, ClaudeBot, PerplexityBot etc.; `llms.txt` is published

---

## 10. Quick Reference Card

**THE LOGO** — circular badge, 4 flat colors, fixed artwork
```
DISC         #E7CDB0  almond         TYPE  Heavy ball-terminal serif
"Spruce/Site"#000000  black                + geometric caps sans (tagline)
"My"         #C9603C  logo terracotta      ⚠️ both fonts UNCONFIRMED — §4.0
TAGLINE      #231A13  ink (= --ink)  RULE  never re-typeset · never recolour
```

**THE WEBSITE** — current CSS
```
BACKGROUND   #FBF4E7  cream          TYPE  Headings: Fraunces 600
SURFACE      #FFFDF6  paper                Body: Hanken Grotesk 400 / 18px
TEXT         #241A12  ink            SHAPE 22px cards · 60px pill buttons
TEXT-SOFT    #5A4A3B  ink-soft       VOICE Aussie-warm · Title Case ·
CTA          #C9603C  terracotta ✅        house metaphors · "Book A Call"
GOLD         #E9A33F  honey          MOTION floaty, slow, ease-in-out
TRUST        #6F7C4C  sage           QUIRK  violet cursor · tilted marquee
MAGIC        #7C4DE0  violet (5 uses)       · spinning hero coffee mug
```
✅ **The terracottas now match** — the site adopted the logo's `#C9603C` on 2026-08-12 (§3.3). The logo still uses pure black where the site uses warm ink; that one is deliberate and stays.

**Still open:** the two logo fonts are unidentified (§4.0), the badge makes a poor favicon at 16–32px (§2.3), and `og-cover.jpg` needs a re-export — retired terracotta, sans-serif headline, "Book A Free Call" CTA (§2.4).

**The one-sentence test:** if it doesn't feel like *a warm café where a mate calmly fixes your website while you have a flat white*, it's off-brand.

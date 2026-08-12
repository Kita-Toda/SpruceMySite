# SpruceMySite — Brand Guidelines

**Version 1.1 · 12 August 2026**
Extracted from the live website (www.sprucemysite.com.au) and codebase. This document is the single source of truth for how SpruceMySite looks, sounds, and behaves across every touchpoint.

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

Current layout: cream field · terracotta left rule · sage eyebrow pill · "Get Your Digital House In **Order.**" · one-line subhead · three **substantiable** stats (10+ Years Experience · 7-10 Days To Launch · Mon-Sat 9am-8pm Support) · badge top-right on clean cream · ink footer bar with domain and CTA.

**Rule: every figure on this image must be defensible.** It is an advertisement under Australian Consumer Law exactly like the site is.

---

## 3. Color Palette

The palette is warm, earthy, and café-inspired — cream paper, terracotta clay, honey, sage. It deliberately avoids "tech blue."

### 3.1 Logo colors (sampled from the artwork — start here)

Four colors, and only four. Measured pixel-by-pixel from `spruce_logo_1_transparent.png`; percentages are share of the mark's opaque area. `spruce_logo_2_transparent.png` returns identical values.

| Name | Hex | Where in the mark | Share |
|---|---|---|---|
| **Almond** | `#E7CDB0` | The disc itself | 93.1% |
| **Black** | `#000000` | "Spruce" and "Site" | 4.7% |
| **Logo Terracotta** | `#C9603C` | "*My*" | 1.4% |
| **Ink** | `#231A13` | The `LOCAL SITES. REAL REVENUE` tagline | 0.4% |

Everything else in the file is anti-aliasing on the letter edges. The mark has no gradient, no shadow, no texture — it is four flat colors on transparency.

**On that fourth one:** `#231A13` is the site's existing `--ink` (`#241A12`) off by one unit per channel — export rounding, not a decision. **Treat them as the same color and do not mint a new token for it.** The tagline is already on-palette.

### 3.2 ⚠️ Where the logo and the site disagree

Two real conflicts, not rounding:

| | Logo | Site CSS | Gap |
|---|---|---|---|
| **Terracotta** | `#C9603C` | `#D9582F` (`--terracotta`) | Logo's is **darker, duller, browner** (R −16, G +8, B +13). Side by side they read as two different oranges — this is the one people will notice |
| **Headline black** | `#000000` pure | `#241A12` (`--ink`) warm near-black | The site deliberately avoids pure black; the logo's main words use it |
| **Almond field** | `#E7CDB0` | *no equivalent* | Nearest is `--blush` `#EAC8A2`, which is warmer and more saturated. `--cream-2` `#F3E7D2` is much lighter. **Almond is a genuinely new color** |

### 3.3 The open decision — which way does this resolve?

The doc can't answer this; you have to. Three coherent options:

1. **Site moves to the logo.** Change `--terracotta` to `#C9603C` sitewide. One CSS variable, ~5 minutes, and everything matches forever. Cost: the site's accent gets noticeably muddier, and terracotta is the CTA color — it's the most-seen color on the site.
2. **Logo moves to the site.** Re-export the badge with `#D9582F` and `#241A12`. Keeps the punchier accent on buttons. Cost: re-exporting artwork, and every copy already in circulation is now the old version.
3. **Both stand, deliberately.** Add **Almond `#E7CDB0`** as a real palette token, and write the rule that the badge is fixed artwork with its own slightly deeper terracotta. Legitimate — plenty of brands run a logo palette distinct from a UI palette — but only if it's a choice, not a drift.

**My recommendation: option 1.** The logo is the harder thing to change (it's already on exports, socials and anything printed), `#C9603C` still passes contrast as a CTA color, and one variable is the cheapest possible fix. But it's your eye and your brand — say the word and I'll make whichever change you pick.

Until you decide, **§3.4/§3.5 below remain the truth for anything you build on the website**, and §3.1 remains the truth for the logo.

### 3.4 Primary colors *(site CSS — current, unchanged)*

| Name | Hex | CSS token | Role |
|---|---|---|---|
| Cream | `#FBF4E7` | `--cream` | Page background, default canvas |
| Cream 2 | `#F3E7D2` | `--cream-2` | Secondary surfaces (FAQ toggles) |
| Paper | `#FFFDF6` | `--paper` | Cards, chips, elevated surfaces |
| Ink | `#241A12` | `--ink` | Headlines, body text, dark sections |
| Ink Soft | `#5A4A3B` | `--ink-soft` | Secondary/supporting text |

### 3.5 Accent colors *(site CSS — current, unchanged)*

| Name | Hex | CSS token | Role |
|---|---|---|---|
| Terracotta | `#D9582F` | `--terracotta` | **Primary accent.** CTAs, links, section tags, wordmark accent, stat numbers. ⚠️ *Not the logo's terracotta — see §3.2* |
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

### 4.0 ⚠️ The logo does not use the website's typefaces

Worth stating plainly, because it's the second half of the §3.2 problem. The badge is set in **two faces that appear nowhere else in the brand**, and they are not Fraunces or Hanken Grotesk.

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

**THE LOGO** — circular badge, 4 flat colors, fixed artwork
```
DISC         #E7CDB0  almond         TYPE  Heavy ball-terminal serif
"Spruce/Site"#000000  black                + geometric caps sans (tagline)
"My"         #C9603C  logo terracotta      ⚠️ both fonts UNCONFIRMED — §4.0
TAGLINE      #231A13  ink (= --ink)  RULE  never re-typeset · never recolour
```

**THE WEBSITE** — current CSS, unchanged
```
BACKGROUND   #FBF4E7  cream          TYPE  Headings: Fraunces 600
SURFACE      #FFFDF6  paper                Body: Hanken Grotesk 400 / 18px
TEXT         #241A12  ink            SHAPE 22px cards · 60px pill buttons
TEXT-SOFT    #5A4A3B  ink-soft       VOICE Aussie-warm · Title Case ·
CTA          #D9582F  terracotta ⚠️        house metaphors · "Book A Call"
GOLD         #E9A33F  honey          MOTION floaty, slow, ease-in-out
TRUST        #6F7C4C  sage           QUIRK  violet cursor · tilted marquee
MAGIC        #7C4DE0  violet (rare)         · spinning hero coin
```
⚠️ **The two terracottas are different** (`#C9603C` logo vs `#D9582F` site) and the logo uses pure black where the site uses warm ink. **Unresolved — §3.3 has the options and my recommendation.**

**The one-sentence test:** if it doesn't feel like *a warm café where a mate calmly fixes your website while you have a flat white*, it's off-brand.

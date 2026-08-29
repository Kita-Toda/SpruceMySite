# SEO / AEO / GEO Scorecard — SpruceMySite

**URL:** https://www.sprucemysite.com.au
**Date:** 2026-08-18
**Method:** Agentic SEO skill (live fetch + 18 verification scripts) + LLM analysis
**Findings verified:** 13 raw → 13 verified, 0 dropped (`finding_verifier.py`)
**Previous audit:** [SEO-AEO-GEO-AUDIT-2026-08-13.md](SEO-AEO-GEO-AUDIT-2026-08-13.md)

> **Note on filenames:** the skill mandates `FULL-AUDIT-REPORT.md` and `ACTION-PLAN.md`. Both exist in this repo marked *historical record* / *superseded by MARKETING-PLAN.md*, and the 2026-08-13 audit deliberately did not overwrite them. Same call here — this dated file is the deliverable.

> **Deploy parity verified.** All 8 live pages are byte-identical to local `dist/` (SHA-1 match on every URL). Everything below describes what is actually serving.

---

## The Three Scores

| | 2026-08-13 | 2026-08-18 | Δ |
|---|---|---|---|
| **SEO** — traditional search | 74 | **73** | ▼ 1 |
| **AEO** — answer engines | 69 | **87** | ▲ 18 |
| **GEO** — AI search / LLM citation | 69 | **77** | ▲ 8 |
| *Composite (skill default weights)* | *74* | ***73*** | *▼ 1* |

**Read the SEO number carefully — it is not a regression.** The four P0 fixes all landed and all worked; AEO gained 18 points and GEO 8. SEO went down 1 point because last audit's Performance score of 55 was labelled *Hypothesis* (PageSpeed was unavailable). This audit measured the render path directly and found **876 KB of render-blocking code in `<head>`, 791 KB of it third-party**. Performance is now 35, Confirmed. The site did not get slower — the previous score was optimistic.

---

## Delta vs. 2026-08-13 — all 13 prior findings

| # | Finding | Status |
|---|---|---|
| F1 | No `dateModified`/`datePublished` | ✅ **Fixed** — 8/8 pages carry both in the `WebPage` node |
| F2 | Homepage body copy in Title Case | ✅ **Fixed** — sentence case throughout |
| F5 | Accordion `+` glyph inside heading text | ✅ **Fixed** — 0 headings end in `+`; drawn via CSS `::before` |
| F6 | 2 of 4 home FAQ answers not extractable | ✅ **Fixed** — `answer_block_scanner.py` 100/100, 4 of 4 |
| F9 | No GBP link, no map | ✅ **Fixed** — `hasMap` + `sameAs` + visible footer link, 8/8 pages |
| F3 | Thin corpus — 8 URLs, no blog | 🔴 **Open** — unchanged |
| F4 | E-E-A-T signals weak | ⚠️ **Open** — `eeat_signal_checker.py` still 25/100 |
| F7 | No high-trust external citations | ⚠️ **Open** — `citation_readiness.py` 80/100, 7 claims, 0 `<cite>`/`<blockquote>` |
| F8 | `llms-full.txt` missing | ⚠️ **Open** — unchanged |
| F10 | Zero published reviews | ⚠️ **Open** — unchanged |
| F11 | Titles 65–77 chars, descriptions 170–183 | ⚠️ **Open** — unchanged, not in P0 scope |
| F12 | No Content-Security-Policy header | ⚠️ **Open** — still the only missing header of 6 |
| F13 | Homepage lacks `Service`/`BreadcrumbList` | ℹ️ **Open** — home graph 4 nodes vs. 6 on service pages |

**5 fixed, 8 open.** Every P0 was verified against live HTML, not just source.

---

## 🔴 The headline finding — N1

### 876 KB of render-blocking code in `<head>` — 791 KB of it third-party

Four third-party resources load in `<head>` with **no `async`, no `defer`, and no `preconnect`**, from an origin the browser has never seen. Together with the first-party CSS bundle, every one of them blocks first paint.

| Resource | Size | Pages affected | Source |
|---|---|---|---|
| `three.min.js` (r128) | **603,445 B** | Homepage only | `src/pages/index.astro:21` |
| `gsap.min.js` (3.12.5) | 72,214 B | **All 8** | `src/layouts/Layout.astro:352` |
| `ScrollTrigger.min.js` | 43,380 B | **All 8** | `src/layouts/Layout.astro:353` |
| `animate.min.css` (4.1.1) | 71,750 B | **All 8** | `src/layouts/Layout.astro:350` |
| *plus* `Footer.By2ZoiKZ.css` (first-party) | 105,895 B | All 8 | Astro bundle |
| **Third-party blocking (homepage)** | **790,789 B ≈ 791 KB** | | |
| **Total blocking (homepage, incl. first-party CSS)** | **896,684 B ≈ 876 KB** | | |
| **Total blocking (every other page)** | **293,239 B ≈ 286 KB** | | |

**Why this is the biggest SEO problem on the site.** Mobile-first indexing has been 100% since July 2024, and Core Web Vitals are a confirmed ranking signal. On a mid-tier phone on 4G, 876 KB of blocking payload before first paint puts LCP in the 4–6 s range — well past the 2.5 s "good" threshold. This is very likely why the site's performance has never scored well.

**What makes it worse than the raw number suggests:**

- **`three.js` is 603 KB — 69% of the homepage's blocking weight — to render a decorative 3D coffee cup** (`src/pages/index.astro:117-141`: a `CylinderGeometry` mug, `TorusGeometry` handle, `CircleGeometry` coffee surface). It is a brand flourish sitting directly in front of the LCP element.
- **`animate.css` ships 71.7 KB for exactly three classes.** A grep of the entire codebase finds only `animate__animated`, `animate__fadeInUp`, and `animate__pulse` in use. Those three rules are perhaps 40 lines of CSS.
- **No `preconnect` to `cdnjs.cloudflare.com`** (N2). Only `fonts.googleapis.com` and `fonts.gstatic.com` are hinted. Four blocking requests pay full DNS + TCP + TLS on an unhinted origin — roughly 200–300 ms of dead time on mobile before a single byte arrives.
- **None of these are in `package.json`** (N4). `three` and `gsap` are not dependencies, so Astro cannot bundle, tree-shake, or version them. `three.js r128` shipped in 2021 — it is four-plus years behind, pinned by a hand-written `<script>` tag with an SRI hash.

### The fix, in impact order

1. **Add `defer` to all three scripts.** One attribute each in `Layout.astro:352-353` and `index.astro:21`. Nothing here needs to run before parse — GSAP animations and the Three.js scene both initialise on DOM ready. This alone removes ~719 KB from the blocking path.
2. **Lazy-load `three.js` behind an `IntersectionObserver`,** or drop the 3D cup for a static WebP/poster image on mobile. 603 KB for a decorative element above the fold is the single worst byte-per-value trade on the site.
3. **Replace `animate.css` with ~40 lines of local CSS.** Copy the three keyframe rules into `global.css`. Saves 71.7 KB and one blocking request on all 8 pages.
4. **Add `<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>`** — a one-line stopgap worth 200–300 ms while the above lands.
5. **Move `gsap`/`three` into `package.json`** so Astro bundles and versions them. Removes the third-party origin entirely and lets you drop the hand-maintained SRI hashes.

Steps 1, 3 and 4 are roughly 20 minutes of work and cut homepage blocking weight from 876 KB to ~106 KB plus the Google Fonts stylesheet — eliminating the third-party blocking path entirely.

---

## SEO — 73/100

| Category | Weight | Score | Prev | Weighted |
|---|---|---|---|---|
| Technical SEO | 26% | 86 | 88 | 22.4 |
| Content Quality | 21% | 55 | 55 | 11.6 |
| On-Page SEO | 16% | 80 | 80 | 12.8 |
| Schema / Structured Data | 16% | 88 | 82 | 14.1 |
| Performance (CWV) | 11% | **35** | 55* | 3.9 |
| Image Optimization | 10% | 80 | 80 | 8.0 |
| **Total** | | | | **72.6 → 73** |

\* Previously *Hypothesis* confidence. Now **Confirmed** by direct measurement of the render path.

**Still working, re-verified this audit**

- ✅ Apex → www via a single 308, 577 ms total, no chains or loops
- ✅ Self-referencing canonicals on all 8 pages; all indexable, HTTP 200
- ✅ `lang="en-AU"`, `charset=UTF-8`, correct viewport
- ✅ Security 85/100 — HSTS with `preload`, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- ✅ `sitemap.xml` valid, 8 URLs, all resolving
- ✅ Social meta — full Open Graph set, `summary_large_image`, `og:image` declared 1200×630 and **actually** 1200×630
- ✅ Internal linking — 66 links across 8 pages, avg 8.2/page, no orphans, descriptive anchors
- ✅ URL quality 100/100; a11y 92/100
- ✅ **Schema up 6 points** — `datePublished`/`dateModified` on all 8 `WebPage` nodes, GBP as `hasMap` + `sameAs`

**Costing points**

| # | Issue | Evidence | Severity |
|---|---|---|---|
| N1 | 876 KB render-blocking in `<head>`, 791 KB third-party | See above | 🔴 Critical |
| F3 | Thin corpus — 8 URLs, no blog | `sitemap.xml`; service pages 903–967 words | 🔴 Critical |
| N2 | No `preconnect` for `cdnjs.cloudflare.com` | 4 blocking requests to unhinted origin | ⚠️ Warning |
| N3 | `animate.css` 71.7 KB for 3 classes | Only `animate__animated`, `__fadeInUp`, `__pulse` used | ⚠️ Warning |
| N4 | `three`/`gsap` unbundled, r128 is 4+ yrs old | Absent from `package.json` | ⚠️ Warning |
| F4 | E-E-A-T weak | `eeat_signal_checker.py` 25/100 | ⚠️ Warning |
| F11 | Titles 65–77 chars, descriptions 170–183 | `website-maintenance-sydney` title 77 | ⚠️ Warning |
| F12 | No Content-Security-Policy | `vercel.json` — 6 headers, no CSP | ⚠️ Warning |
| N5 | LinkedIn URL 301-redirects | `curl` w/ browser UA returns 301 | ℹ️ Info |

### On F11 — titles and descriptions

Every service page overshoots SERP display width. Google truncates around 60 chars / ~155 chars.

| Page | Title | Desc |
|---|---|---|
| `website-maintenance-sydney` | **77** | 170 |
| `google-analytics-setup-sydney` | **74** | **171** |
| `local-seo-sydney` | **73** | **183** |
| `lead-generation-sydney` | **69** | **172** |
| `web-design-sydney` | **65** | 172 |
| `/` (home) | 48 ✅ | 120 ✅ |

The homepage is correctly sized — the service pages are the outlier. Every one ends in `| SpruceMySite`, which costs 15 chars of the budget and is the least useful part of the string. Dropping the brand suffix on service pages alone fixes four of the five titles.

---

## AEO — 87/100 (▲ 18)

| Sub-category | Score | Prev | Notes |
|---|---|---|---|
| Question-format content & headings | 95 | 82 | 24 question-form H3s, all clean |
| Direct answer extractability | 95 | 62 | `answer_block_scanner.py` **100/100, 4 of 4** |
| Structured data for answers | 92 | 78 | `speakable` + `dateModified` on all pages |
| Entity / knowledge panel signals | 75 | 60 | GBP linked; still no reviews |
| Voice & local answer readiness | 78 | 65 | NAP + hours + geo + `hasMap` |
| **Total** | **87** | 69 | |

**This is the site's biggest win.** The P0 batch did exactly what it set out to do:

- ✅ `answer_block_scanner.py` homepage: **90 → 100**, 2 of 4 answers → **4 of 4**
- ✅ **0 of 24** headings now end in `+` (was 24 of 24)
- ✅ Homepage body copy in sentence case — answer engines can now quote it verbatim
- ✅ Freshness: `datePublished 2026-06-29` / `dateModified 2026-08-13` on all 8 pages
- ✅ GBP linked via the permanent `?cid=` form as `hasMap` **and** `sameAs`
- ✅ **Still no `FAQPage` schema** — correct. Restricted to government/healthcare authority sites since Aug 2023; the real-`<h3>` pattern here is the right one.

**Remaining**

| # | Issue | Evidence | Severity |
|---|---|---|---|
| F10 | Zero published reviews | `Reviews.astro` `quotes` array empty | ⚠️ Warning |
| F13 | Homepage lacks `Service`/`BreadcrumbList` | 4 graph nodes vs. 6 on service pages | ℹ️ Info |

**On F10:** the testimonials were removed 2026-08-12 because they were fabricated — the correct and legally necessary call under ACL s18/s29. The fix remains **collecting real, permissioned Google reviews**, not adding `Review`/`aggregateRating` schema, which would recreate the same problem in machine-readable form.

---

## GEO — 77/100 (▲ 8)

| Sub-category | Weight | Score | Prev | Weighted |
|---|---|---|---|---|
| AI crawler policy | 15% | 95 | 95 | 14.3 |
| `llms.txt` quality | 15% | 85 | 85 | 12.8 |
| Citation readiness | 20% | 80 | 75 | 16.0 |
| Entity clarity | 20% | 80 | 70 | 16.0 |
| Content corpus depth | 20% | 45 | 45 | 9.0 |
| Freshness signals | 10% | **85** | 40 | 8.5 |
| **Total** | | | | **76.5 → 77** |

**Working — still the site's standout area**

- ✅ **Best-in-class `robots.txt`**, re-verified: 9 citation-driving crawlers allowed (GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, anthropic-ai, FacebookBot); 3 training-only scrapers blocked (Bytespider, CCBot, Amazonbot)
- ✅ `llms.txt` **95/100** — services, founder, contact, NAP, key pages
- ✅ **Freshness 40 → 85** — the single biggest GEO gain, straight from the F1 fix
- ✅ **Entity clarity 70 → 80** — GBP link connects the site and the Maps listing as one entity
- ✅ Consistent NAP across `llms.txt`, schema, and visible copy

**Costing points**

| # | Issue | Evidence | Severity |
|---|---|---|---|
| F3 | Corpus depth — 8 URLs, nothing uniquely citable | No original data or research | 🔴 Critical |
| F7 | No high-trust external citations | 0 `<cite>`/`<blockquote>`/footnotes across 18 external links | ⚠️ Warning |
| F8 | `llms-full.txt` missing | `llms_txt_checker.py` | ⚠️ Warning |

**The core GEO problem is unchanged and is now the main ceiling.** Crawler policy and `llms.txt` are near-perfect — the doors are wide open. Corpus depth is 45; there is little inside worth quoting. An LLM asked *"who does web design in Bondi Junction?"* can find this site and has no distinctive fact to attribute to it.

---

## Score history

| Audit | Date | Composite |
|---|---|---|
| v1 | 2026-06-29 | 22 |
| v2 | 2026-06-30 | 69 |
| v3 | 2026-06-30 | 72 |
| v4 | 2026-08-13 | 74 |
| **v5 (this)** | **2026-08-18** | **73** |

---

## Prioritised fixes

### P0 — do this week

| # | Fix | File | Effort | Impact |
|---|---|---|---|---|
| 1 | Add `defer` to `gsap`, `ScrollTrigger`, `three` | `Layout.astro:352-353`, `index.astro:21` | 5 min | **−719 KB blocking** |
| 2 | Replace `animate.css` with ~40 lines local CSS | `Layout.astro:350`, `global.css` | 15 min | −71.7 KB, −1 request, all 8 pages |
| 3 | `preconnect` to `cdnjs.cloudflare.com` | `Layout.astro` | 1 min | −200–300 ms mobile |
| 4 | Trim service-page titles to ≤60 chars | 5 × `src/pages/*/index.astro` | 20 min | SERP CTR |
| 5 | Trim service-page descriptions to ≤155 chars | same 5 files | 20 min | SERP CTR |

**Items 1–3 together take under 25 minutes and remove all 791 KB of third-party blocking weight**, leaving only the 106 KB first-party CSS bundle and the Google Fonts stylesheet. Highest score-per-hour on the site by a wide margin.

> **Verified safe:** the three inline `<head>` scripts (gtag init, Meta Pixel, GA4 section tracking) contain no `gsap`/`THREE` references, and the only consumer of both libraries is the body-end `type="module"` bundle, which executes after head `defer` scripts in document order. Adding `defer` will not break the animations.

### P1 — this month

| # | Fix | Why |
|---|---|---|
| 6 | Lazy-load or drop `three.js` on mobile | Removes the last 603 KB; biggest single LCP win |
| 7 | Add `Content-Security-Policy` to `vercel.json` | Closes F12; last missing security header |
| 8 | Move `gsap`/`three` into `package.json` | Bundling, tree-shaking, version control; kills the third-party origin |
| 9 | Add a visible author byline + credentials to About | E-E-A-T 25 → 60+; F4 |
| 10 | Publish `llms-full.txt` | F8; cheap GEO points |

### P2 — the real ceiling

| # | Fix | Why |
|---|---|---|
| 11 | **Start publishing content** | F3 is flagged Critical in *both* SEO and GEO. 8 URLs is the binding constraint on both scores — no amount of technical polish moves past it. |
| 12 | Collect real Google reviews | F10; unblocks entity/knowledge-panel signals lawfully |
| 13 | Add `Service` + `BreadcrumbList` to homepage graph | F13; parity with service pages |
| 14 | Cite primary sources in service-page copy | F7; GEO citation readiness |

---

## Carried forward from 2026-08-13 — still unverified

> ⚠️ **Google Business Profile location.** The previous audit found Google's resolved URL for the listing carries place coordinates `-3.5578576, 134.8354214` — **Papua, Indonesia**, ~5,500 km from Bondi Junction — and opens at the zoom-3 whole-world view. The site's schema says `-33.8918, 151.2512` (correct).
>
> **This still has not been checked and remains the highest-stakes open item on the account.** If the listing genuinely has no Sydney location set, it cannot rank in the Bondi Junction map pack at all — which would outweigh every finding in this report. It cannot be confirmed from outside; Maps renders addresses client-side.
>
> **Action: Google Business Profile → Info → Location / Service area.** Five minutes to check.

---

## Environment limitations

| Check | Status | Effect on this report |
|---|---|---|
| **PageSpeed Insights / CrUX field data** | ❌ Rate-limited by Google API on both attempts (skill caps retries at one) | No lab LCP/INP/CLS numbers. **Mitigated:** the render path was measured directly — blocking resource count, actual transfer sizes, `<head>` positions, and missing `async`/`defer`. The N1 finding is Confirmed on that basis; only the *specific* LCP figure would come from PSI. Re-run `pagespeed.py` with an API key for exact numbers. |

### Script false positives — recorded so they are not re-litigated

Three scripts flagged issues that are **not real**. Verified by hand against the served HTML:

| Script | Reported | Reality |
|---|---|---|
| `validate_schema.py` | "Block 1: Missing @type" on all 8 pages | **False positive.** Schema uses the `@graph` wrapper (`@context` + `@graph`), so the top-level object correctly has no `@type`. All nodes inside carry theirs. Schema is valid on all 8 pages. |
| `mobile_render_checker.py` | "[critical] Missing or incomplete viewport meta tag" | **False positive.** `<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">` is present and correct. The checker appears not to parse `viewport-fit=cover`. |
| `broken_links.py` | LinkedIn profile `[999] broken` | **False positive** — HTTP 999 is LinkedIn's bot block. With a browser UA it returns **301**, logged separately as N5 (minor: update to the redirect target). |
| `image_inventory.py` | Meta Pixel `<noscript>` img "missing-alt" | **False positive.** `alt=""` is present and is the correct value for a 1×1 tracking pixel. |

---

## Bottom line

The four P0 fixes from five days ago worked, and worked well — **AEO +18, GEO +8**, with answer extraction, freshness signals, and the GBP entity link all verified against live HTML rather than source.

What this audit adds is one finding the previous one could not see because PageSpeed was down: **876 KB of render-blocking code in `<head>` — 791 KB of it third-party, and 603 KB of that a decorative 3D coffee cup.** Roughly 25 minutes of work (`defer`, local `animate.css`, `preconnect`) clears the entire third-party blocking path.

Beyond that, nothing technical is meaningfully broken. The plumbing is genuinely good. **The ceiling is content** — F3 is the only finding flagged Critical in both the SEO and GEO columns, and it has been open since June.

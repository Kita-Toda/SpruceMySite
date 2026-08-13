# SEO / AEO / GEO Scorecard — SpruceMySite

**URL:** https://www.sprucemysite.com.au
**Date:** 2026-08-13
**Method:** Agentic SEO skill (live fetch + 12 verification scripts) + LLM analysis
**Findings verified:** 13 raw → 13 verified, 0 dropped (`finding_verifier.py`)

> **Note on filenames:** the skill mandates `FULL-AUDIT-REPORT.md` and `ACTION-PLAN.md`. Both already exist in this repo and are explicitly marked *historical record* / *superseded by MARKETING-PLAN.md*. They were **not** overwritten; this dated file is the deliverable instead.

---

## The Three Scores

| | Score | Rating |
|---|---|---|
| **SEO** — traditional search | **74 / 100** | Good |
| **AEO** — answer engines (snippets, PAA, voice) | **69 / 100** | Needs Improvement |
| **GEO** — AI search / LLM citation | **69 / 100** | Needs Improvement |
| *Composite (skill default weights)* | *74 / 100* | *Good — up from 72 on 2026-06-30* |

The technical foundation is genuinely strong. Every point being lost is lost on **content depth, freshness, and proof** — not on plumbing.

---

## SEO — 74/100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 26% | 88 | 22.9 |
| Content Quality | 21% | 55 | 11.6 |
| On-Page SEO | 16% | 80 | 12.8 |
| Schema / Structured Data | 16% | 82 | 13.1 |
| Performance (CWV) | 11% | 55* | 6.1 |
| Image Optimization | 10% | 80 | 8.0 |
| **Total** | | | **74.5** |

\* Hypothesis confidence — see Environment Limitations.

**What's working**

- ✅ Apex → www resolves cleanly via a single 308; no chains, no loops
- ✅ Self-referencing canonicals on all 6 indexable pages
- ✅ `meta robots: index, follow, max-image-preview:large, max-snippet:-1` — correctly opens the door to rich snippets
- ✅ `lang="en-AU"`, correct viewport, charset
- ✅ Security 85/100 — HSTS with `preload`, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- ✅ `sitemap.xml` valid, 8 URLs, all resolving
- ✅ One H1 per page, clean H2/H3 hierarchy, descriptive internal anchor text
- ✅ Schema graph on every page: `ProfessionalService` + `Person` + `WebSite` + `WebPage`; service pages add `Service` + `BreadcrumbList`
- ✅ Social meta 85/100 — full Open Graph set, `summary_large_image` Twitter card

**What's costing points**

| # | Issue | Evidence | Severity |
|---|---|---|---|
| F3 | Thin corpus — 8 URLs, no blog | `sitemap.xml`; service pages 903–967 words, home 1307 | 🔴 Critical |
| F4 | E-E-A-T signals weak | `eeat_signal_checker.py` 25/100 — no author, no credentials, no first-hand experience markers | ⚠️ Warning |
| F11 | Titles 65–77 chars, descriptions 170–183 chars | `website-maintenance-sydney` title 77 chars | ⚠️ Warning |
| F12 | No Content-Security-Policy header | `security_headers.py` — only missing header of 6 | ⚠️ Warning |
| F13 | Homepage lacks `Service` / `BreadcrumbList` | Home graph has 4 nodes vs. 6 on service pages | ℹ️ Info |

---

## AEO — 69/100

Answer Engine Optimization: featured snippets, People Also Ask, voice results, knowledge panel.

| Sub-category | Score | Notes |
|---|---|---|
| Question-format content & headings | 82 | 24 question-form H3s sitewide (4 per service page, 4 on home) |
| Direct answer extractability | 62 | Title Case prose; only 2 of 4 home answers extracted |
| Structured data for answers | 78 | `speakable` present on all pages; no `dateModified` |
| Entity / knowledge panel signals | 60 | 3 `sameAs` profiles; no GBP link; no reviews |
| Voice & local answer readiness | 65 | NAP + hours + geo in schema; no map, no GBP |
| **Total** | **69** | |

**What's working**

- ✅ FAQ questions are **real `<h3>` headings**, not divs — the single most important AEO structural signal, and the June commit that fixed this was the right call
- ✅ `speakable` schema (`SpeakableSpecification`) on homepage and all 5 service pages
- ✅ `answer_block_scanner.py` scores 90/100; answers are the right length (30–47 words — the snippet sweet spot)
- ✅ Service page questions are in natural sentence case and phrased the way people actually search ("Do I need a physical Sydney address to rank locally?")
- ✅ **No `FAQPage` schema** — correct. FAQPage rich results have been restricted to government and healthcare authority sites since Aug 2023. The heading-based approach here is the right pattern, and adding FAQPage would be a downgrade.
- ✅ NAP, opening hours and `GeoCoordinates` all present in `ProfessionalService`

**What's costing points**

| # | Issue | Evidence | Severity |
|---|---|---|---|
| F2 | Homepage body copy in Title Case | `src/components/FAQ.astro:10` — *"We Flip The Script With Our Accelerated..."* | 🔴 Critical |
| F1 | No `dateModified` anywhere | Zero matches across 6 live pages and `src/` | 🔴 Critical |
| F5 | Accordion `+` glyph inside heading text | All 24 questions extract as `"...in 7–10 days?+"` | ⚠️ Warning |
| F6 | 2 of 4 home FAQ answers not extractable | `answer_block_scanner.py` returned 2 direct answers for 4 questions | ⚠️ Warning |
| F9 | No GBP link, no map embed | `local_seo_checker.py` | ⚠️ Warning |
| F10 | Zero published reviews | `Reviews.astro` — `quotes` array empty | ⚠️ Warning |

**On F2 (Title Case):** this is the highest-leverage AEO fix on the site. Answer engines extract and re-read your sentences. "We Flip The Script With Our Accelerated Framework" is not a sentence a machine will confidently quote back to a user. The five service pages are already in sentence case — the homepage is the outlier.

**On F10 (reviews):** the testimonials were removed on 2026-08-12 because they were fabricated, which was the correct and legally necessary call under ACL s18/s29. The fix is **collecting real, permissioned Google reviews** — not adding `Review`/`aggregateRating` schema, which would recreate the same problem in a machine-readable form.

---

## GEO — 69/100

Generative Engine Optimization: being retrieved and cited by ChatGPT, Claude, Perplexity, Google AI Overviews.

| Sub-category | Weight | Score | Weighted |
|---|---|---|---|
| AI crawler policy | 15% | 95 | 14.3 |
| `llms.txt` quality | 15% | 85 | 12.8 |
| Citation readiness | 20% | 75 | 15.0 |
| Entity clarity | 20% | 70 | 14.0 |
| Content corpus depth | 20% | 45 | 9.0 |
| Freshness signals | 10% | 40 | 4.0 |
| **Total** | | | **69.0** |

**What's working — this is the site's standout area**

- ✅ **Best-in-class `robots.txt`.** 9 citation-driving crawlers explicitly allowed (GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, anthropic-ai, FacebookBot); 3 training-only scrapers blocked (Bytespider, CCBot, Amazonbot). That is a deliberate, correct policy — allow what cites you, block what only harvests you.
- ✅ **`llms.txt` scores 95/100** — structured, accurate, covers services, founder, contact, NAP and all key pages. Most sites in this category have nothing here.
- ✅ Clean entity graph: named founder (`Person` → `worksFor` → `ProfessionalService`), `knowsAbout`, `areaServed` with `City`/`Suburb` nodes, ABN in the footer
- ✅ 3 valid `sameAs` profiles (LinkedIn, Facebook, Instagram)
- ✅ Consistent NAP between `llms.txt`, schema, and visible page content — AI engines cross-check this

**What's costing points**

| # | Issue | Evidence | Severity |
|---|---|---|---|
| F3 | Corpus depth — 8 URLs, nothing uniquely citable | No original data, research, or reference content | 🔴 Critical |
| F1 | No freshness signals | No `dateModified`/`datePublished` anywhere | 🔴 Critical |
| F7 | No high-trust external citations | `citation_readiness.py`: 0 trusted external links, 0 `<cite>`/`<blockquote>`, 0 footnotes across 16 external links | ⚠️ Warning |
| F8 | `llms-full.txt` missing | `llms_txt_checker.py` | ⚠️ Warning |

**The core GEO problem:** the site is *perfectly readable* by AI crawlers and gives them almost nothing worth quoting. Crawler policy and `llms.txt` are near-perfect (the doors are wide open); corpus depth is 45 (there's little inside). An LLM asked "who does web design in Bondi Junction?" can find this site — but has no distinctive fact, figure, or original insight to attribute to it.

---

## Score Comparison vs. June

| Audit | Date | Composite |
|---|---|---|
| v1 | 2026-06-29 | 22/100 |
| v2 | 2026-06-30 | 69/100 |
| v3 | 2026-06-30 | 72/100 |
| **v4 (this)** | **2026-08-13** | **74/100** |

The +2 since June comes from the real-headings FAQ fix and `speakable` schema (commit `be45b4b`). Both landed in the AEO column.

---

## Prioritised Fixes

### P0 — highest score impact per hour

| # | Fix | File | Status |
|---|---|---|---|
| 1 | Add `datePublished`/`dateModified` to the `WebPage` node on all pages | `src/layouts/Layout.astro` | ✅ Done 2026-08-13 |
| 2 | Rewrite homepage body copy from Title Case to sentence case | `src/components/*.astro` | ✅ Done 2026-08-13 |
| 3 | Move the accordion `+` out of heading text into CSS | `src/components/FAQ.astro` + service pages | ✅ Done 2026-08-13 |
| 4 | Link the Google Business Profile from the footer and add it to `sameAs` | `src/components/Footer.astro`, schema graph | ✅ Done 2026-08-13 |

#### P0 implementation notes (2026-08-13)

**1 — Dates.** Added optional `datePublished`/`dateModified` props to `Layout.astro`, spread into the `WebPage` node using the same conditional pattern as `speakable`, and threaded through `ServiceLayout` and `PolicyLayout`. Values are passed per page rather than derived automatically, deliberately: a build timestamp makes every deploy claim every page changed, and `git log` on the source file returns the clone date under Vercel's shallow clone. Both are false freshness. **These dates must be updated by hand when a page's copy changes** — there is a comment in `Layout.astro` saying so.

Values: all six content pages `datePublished 2026-06-29` (first commit), `dateModified 2026-08-13`. Policy pages `2026-07-16` for both.

**2 — Casing.** Converted homepage prose to sentence case: `.lead`, `.equation`, all `.sec-sub` standfirsts, service card and step paragraphs, About list items, all 11 Analytics tool descriptions, and all 4 FAQ questions and answers. **Casing only — not one word or punctuation mark changed**, so no copy re-review is needed. Proper nouns and named offerings keep their caps ("Launch-in-a-Week", "Self-Service Vault", "Don't Panic", Google Ads, GDPR).

Left in Title Case deliberately: H1, section H2s, card/step H3s, nav links, button labels, stat labels, marquee chips and pills. These are display headings and UI labels, and the service pages use Title Case H2s too — body copy was the outlier, not headings. (Minor nit not actioned: the homepage capitalises minor words in H2s — "Everything To Get Your Digital House In Order" — where service pages use proper Title Case with minor words lowercase. Cosmetic, no AEO impact.)

**3 — Plus glyph.** The `<span class="plus">` is now empty with `aria-hidden="true"`, and the character is drawn by `.q .plus::before{content:"+"}` in `global.css`. Chose this over restyling `button::after` because it leaves every existing layout and rotation rule untouched, and avoids the screen-reader problem of a bare `content:"+"`. 24 spans across 6 files.

**4 — Google Business Profile.** Resolved the share link `https://maps.app.goo.gl/qiLGyHgXZ3HzEfVB6` to its canonical identifiers:

| | |
|---|---|
| Listing name | SpruceMySite |
| CID | `16561133347934804073` (hex `0xe5d4f70909879869`) |
| Google KG entity | `/g/11tt94ml6s` |
| Canonical URL | `https://maps.google.com/?cid=16561133347934804073` |

Used the `?cid=` form rather than the share link or a knowledge-panel URL — it's permanent, session-independent and locale-independent. Added as `hasMap` **and** in `sameAs` on the `ProfessionalService` node (`hasMap` is the correct schema.org property for this; `sameAs` is the identity claim). Deliberately **not** added to the `Person` node — the listing is the business, not Christian.

Visible links: a Maps pin in the footer socials on all 8 pages, plus the Contact "Find Us In Bondi Junction" card, which is now an anchor to the profile. Linked rather than embedding a Maps iframe — an embed costs a third-party request and LCP on mobile for the same connection signal.

> ⚠️ **Verify your GBP location — likely a real problem.** Google's own resolved URL for this listing carries the place coordinates `!3d-3.5578576!4d134.8354214`. That is **-3.5578, 134.8354 — Papua, Indonesia**, roughly 5,500 km from Bondi Junction. The site's schema says `-33.8918, 151.2512` (correct). The map also opens at zoom 3, the whole-world view Google uses when it has no confident location.
>
> This does not affect the links just added — the CID identifies the listing regardless. But if the listing genuinely has no Sydney location set, it cannot rank in the Bondi Junction map pack at all, which would make it the single largest local-search problem on the account and would explain a lot. Check **Google Business Profile → Info → Location / Service area** and set the service area to Sydney. I could not confirm this from outside: Maps renders its address client-side and the static HTML carries no address field.

**Verified against the built output (`npm run build`, 8 pages, clean):**

| Check | Before | After |
|---|---|---|
| `answer_block_scanner` — homepage | 90, 2 of 4 answers | **100, 4 of 4** |
| `answer_block_scanner` — 5 service pages | not measured | **100 each, all answers extracted** |
| FAQ headings ending in `+` | 24 | **0** |
| Pages with `dateModified` in JSON-LD | 0 | **8 of 8** |
| `validate_schema.py` across all 8 pages | valid | **valid** |
| Pages linking the GBP (`hasMap` + `sameAs` + visible) | 0 | **8 of 8** |

F6 ("only 2 of 4 homepage answers extractable") turned out to be **caused by** F5 — the trailing `+` was breaking question detection on two of the four headings. Fixing the glyph resolved both. F6 is closed, not a scanner artifact after all.

Changes are in the working tree and **not committed** — the build is verified but nothing is deployed yet, so the live scores are unchanged until you ship.

### P1 — this month

| # | Fix | Effort | Impact |
|---|---|---|---|
| 5 | Generate `llms-full.txt` from the 5 service pages (`llms_txt_generator.py`) | 20 min | GEO +3 |
| 6 | Trim titles to <60 chars and meta descriptions to <160 | 30 min | SEO +3 |
| 7 | Verify all 4 homepage FAQ answers are DOM-adjacent to their headings and not hidden at parse time | 30 min | AEO +3 |
| 8 | Add a visible author byline + real About page with experience markers | 2 hrs | SEO +5 |
| 9 | Add CSP header allowing GA4/GTM/Meta Pixel origins | `vercel.json` | 30 min | SEO +1 |

### P2 — the real ceiling

| # | Fix | Impact |
|---|---|---|
| 10 | Collect 5–10 real permissioned Google reviews, then restore `Reviews.astro` | AEO +6, GEO +4 |
| 11 | Publish 6–10 genuinely useful Sydney-specific resource pages with original data | GEO +12, SEO +8 |
| 12 | Cite authoritative sources (ABS, Google docs, ACCC) with `<cite>` where factual claims are made | GEO +4 |

**Realistic ceiling:** P0+P1 alone puts you at roughly **SEO 82 / AEO 82 / GEO 76**. Breaking 85 on GEO requires P2 #11 — there is no schema or config shortcut for having something worth citing.

---

## Environment Limitations

- **Core Web Vitals not measured.** `pagespeed.py` was rate-limited by the Google PageSpeed Insights API on both attempts (retry cap reached per skill rule 11). Performance is scored **55 (Hypothesis)** carried forward from the stale v3 baseline of 2026-06-30. Re-run with an API key to confirm:
  ```
  python3 ~/.claude/skills/seo/scripts/pagespeed.py https://www.sprucemysite.com.au/ --strategy mobile
  ```

## Suppressed Script False Positives

Recorded so they aren't re-raised in a future audit:

- `local_seo_checker.py` reports **"LocalBusiness nodes: 0"** — false. The site uses `ProfessionalService`, a valid `LocalBusiness` subtype. The script does not walk the schema.org subtype hierarchy.
- `entity_checker.py` matched **Wikidata Q15062202** — that is a Uruguayan footballer, a name collision. Do **not** add Wikidata/Wikipedia to `sameAs`; no such entries exist for this business.
- `sitemap_checker.py` reports **two 404s** for `/sitemap_index.xml` and `/sitemap-index.xml` — those are the checker probing filename variants. `/sitemap.xml` resolves correctly with 8 URLs. Not an issue.

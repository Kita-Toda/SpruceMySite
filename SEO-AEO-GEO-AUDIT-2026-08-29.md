# SEO / AEO / GEO Scorecard — SpruceMySite

**URL:** https://www.sprucemysite.com.au
**Date:** 2026-08-29
**Method:** Agentic SEO skill (live fetch + verification scripts) + controlled A/B render measurement
**Previous audit:** [SEO-AEO-GEO-AUDIT-2026-08-18.md](SEO-AEO-GEO-AUDIT-2026-08-18.md)
**Commit under test:** `00f1f95` — deployed and verified live

> **Filenames:** the skill mandates `FULL-AUDIT-REPORT.md` / `ACTION-PLAN.md`. Both exist in this repo marked *historical record*. The 2026-08-13 and 2026-08-18 audits deliberately did not overwrite them; same call here. This dated file is the deliverable.

---

## The Three Scores

| | 2026-08-13 | 2026-08-18 | 2026-08-29 | Δ |
|---|---|---|---|---|
| **SEO** — traditional search | 74 | 73 | **79** | ▲ 6 |
| **AEO** — answer engines | 69 | 87 | **87** | — |
| **GEO** — AI search / LLM citation | 69 | 77 | **78** | ▲ 1 |

**SEO is up 6 on technical and on-page work alone.** AEO is flat and GEO moved 1 point, because both are now gated almost entirely by content, which this cycle did not touch.

---

## What changed since 2026-08-18

All eight code-fixable findings from the last audit are closed. Verified against live HTML and live response headers, not source.

| # | Finding | Prev | Status |
|---|---|---|---|
| N1 | 876 KB render-blocking in `<head>`, 791 KB third-party | 🔴 Critical | ✅ **Fixed** — `third_party_script_audit.py`: **blocking third-party 3 → 0** |
| N2 | No `preconnect` for `cdnjs.cloudflare.com` | ⚠️ | ✅ **Fixed** — present on all 8 pages |
| N3 | `animate.css` 71.7 KB for 3 classes | ⚠️ | ✅ **Fixed** — replaced by a 40-line local subset |
| F11 | Titles 65–77 chars, descriptions 170–183 | ⚠️ | ✅ **Fixed** — titles 48–55, descriptions 120–144 |
| F12 | No Content-Security-Policy | ⚠️ | ✅ **Fixed** — `security_headers.py`: **85 → 100/100** |
| F8 | `llms-full.txt` missing | ⚠️ | ✅ **Fixed** — HTTP 200, 37,064 B, regenerated each build |
| N5 | LinkedIn URL 301-redirects | ℹ️ | ⚠️ **Not a real finding** — see correction below |
| N4 | `three`/`gsap` unbundled | ⚠️ | 🔵 **Deferred by decision** — see below |

### Render-blocking weight, homepage

| | Before | After |
|---|---|---|
| `three.min.js` | 603,445 B blocking | deferred |
| `gsap.min.js` | 72,214 B blocking | deferred |
| `ScrollTrigger.min.js` | 43,380 B blocking | deferred |
| `animate.min.css` | 71,750 B blocking | deleted |
| First-party `_astro` CSS | 105,895 B blocking | 106,516 B blocking |
| **Total blocking** | **896,684 B** | **106,516 B** |

**−88.1%. All 790,789 B of third-party blocking is gone.** The only remaining blocking resources are the first-party CSS bundle and the Google Fonts stylesheet.

### Measured effect — controlled A/B

PageSpeed Insights was unavailable (daily quota exhausted, HTTP 429, both via the skill script and direct API call). Instead the pre-fix commit `555ad60` was rebuilt from a git worktree and both builds were served locally and measured in the same headless Chromium, alternating, 4 runs each:

| First Contentful Paint | run 1 | run 2 | run 3 | run 4 | median |
|---|---|---|---|---|---|
| **Before** (`555ad60`) | 176 ms | 184 ms | 256 ms | 252 ms | **218 ms** |
| **After** (`00f1f95`) | 152 ms | 164 ms | 132 ms | 152 ms | **152 ms** |

**FCP median −31%.** Confidence: `Confirmed` for the measurement, `Likely` for real-world magnitude.

> **This understates the real gain.** Both builds ran against a warm browser cache, so "before" never paid the 791 KB download cost — the 31% is the parser-blocking wait alone. On a cold mobile connection the third-party download is the dominant term, and it is now entirely off the critical path.

---

## SEO — 79/100 (▲ 6)

| Category | Weight | Score | Prev | Weighted | Confidence |
|---|---|---|---|---|---|
| Technical SEO | 26% | **92** | 86 | 23.9 | Confirmed |
| Content Quality | 21% | 55 | 55 | 11.6 | Confirmed |
| On-Page SEO | 16% | **90** | 80 | 14.4 | Confirmed |
| Schema / Structured Data | 16% | **87** | 88 | 13.9 | Confirmed |
| Performance (CWV) | 11% | **70** | 35 | 7.7 | **Likely** |
| Image Optimization | 10% | 80 | 80 | 8.0 | Confirmed |
| **Total** | | | | **79.5 → 79** | |

**Technical 86 → 92.** CSP was the last missing header; `security_headers.py` now returns **100/100** with all 6 present. Re-verified: apex→www single 308 with no chains, self-referencing canonicals, all 8 pages indexable HTTP 200, `url_quality.py` 100/100, `a11y_seo_checker.py` 92/100, `font_audit.py` 0 issues, `cache_compression_checker.py` 0 issues, sitemap valid with 8 URLs, `internal_links.py` 74 links across 9 pages, avg 8.2/page, no orphans.

**On-Page 80 → 90.** Every service page now fits SERP display width. Dropping the `| SpruceMySite` suffix bought back 15 characters on each.

| Page | Title | Prev | Desc | Prev |
|---|---|---|---|---|
| `/` | 48 | 48 | 120 | 120 |
| `web-design-sydney` | **50** | 65 | **144** | 172 |
| `website-maintenance-sydney` | **50** | 65 | **140** | 170 |
| `local-seo-sydney` | **54** | 73 | **140** | 183 |
| `lead-generation-sydney` | **54** | 69 | **143** | 172 |
| `google-analytics-setup-sydney` | **55** | 74 | **137** | 171 |

**Performance 35 → 70, `Likely` not `Confirmed`.** The 35 was driven almost wholly by the blocking finding, which is now 88% resolved and measured. It is not higher because three.js (≈121 KB gzipped) still downloads on every homepage visit, the 106 KB first-party CSS bundle still blocks, and the Google Fonts stylesheet still blocks. Without a PSI run there is no lab LCP/INP/CLS figure — re-run `pagespeed.py` with an API key to convert this to `Confirmed`.

**Schema 88 → 87.** Structurally unchanged and healthy: 21 nodes, `rich_results_guard.py` reports **0 errors**. The single point comes off for the stale `dateModified` (below).

**Content 55, unchanged.** Nothing in this cycle touched content. Corpus is still 8 URLs at 889–1,302 words. `readability.py`: Flesch 65.2, grade 7.9, avg sentence 14.9 words — appropriate for the audience and not a deduction.

---

## AEO — 87/100 (unchanged)

| Sub-category | Score | Prev | Notes |
|---|---|---|---|
| Question-format content & headings | 95 | 95 | 24 question-form H3s |
| Direct answer extractability | 95 | 95 | `answer_block_scanner.py` **100/100, 4 of 4** |
| Structured data for answers | 90 | 92 | `speakable` intact; `dateModified` now stale |
| Entity / knowledge panel signals | 75 | 75 | Still no reviews |
| Voice & local answer readiness | 78 | 78 | NAP + hours + geo + `hasMap` |
| **Total** | **87** | 87 | |

AEO was fixed in the 2026-08-18 cycle and is holding. The remaining ceiling is **F10 — zero published reviews**, which cannot be fixed in code. Adding `Review`/`aggregateRating` schema without real permissioned reviews would recreate the fabricated-testimonial problem that was correctly removed on 2026-08-12, in machine-readable form. The fix is collecting real Google reviews.

Still correctly **no `FAQPage` schema** — restricted to government/healthcare authority sites since August 2023.

---

## GEO — 78/100 (▲ 1)

| Sub-category | Weight | Score | Prev | Weighted |
|---|---|---|---|---|
| AI crawler policy | 15% | 95 | 95 | 14.3 |
| `llms.txt` quality | 15% | **95** | 85 | 14.3 |
| Citation readiness | 20% | 80 | 80 | 16.0 |
| Entity clarity | 20% | 80 | 80 | 16.0 |
| Content corpus depth | 20% | 45 | 45 | 9.0 |
| Freshness signals | 10% | 85 | 85 | 8.5 |
| **Total** | | | | **78.0 → 78** |

**`llms.txt` 85 → 95** — `llms_txt_checker.py` now reports `llms-full.txt: ✅ Found`. The file is generated from the built HTML at deploy time by `tools/generate-llms-full.mjs`, so the corpus an LLM reads cannot drift from the copy on the pages.

**Crawler policy re-verified, still best-in-class:** 9 citation-driving crawlers explicitly allowed (GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, anthropic-ai, FacebookBot); 3 training-only scrapers fully blocked (Bytespider, CCBot, Amazonbot).

**Only +1, and that is the real story.** GEO is capped by **corpus depth at 45**. The doors are wide open and there is still little inside worth quoting. `llms-full.txt` makes the existing 8 pages easier to ingest; it does not add a single citable fact. An LLM asked *"who does web design in Bondi Junction?"* can find this site and still has no distinctive claim to attribute to it.

---

## New findings this audit

### 🔴 F3 — Thin corpus (carried, still the binding constraint)

8 URLs, no blog, no original data. **Flagged Critical in both the SEO and GEO columns, open since June.** Content Quality has sat at 55 and corpus depth at 45 across four consecutive audits. No further technical work moves either number.

### ⚠️ N6 — `dateModified` is now stale (new, introduced by `00f1f95`)

**Evidence:** all 8 pages serve `"dateModified":"2026-08-13"`, but titles, descriptions, `global.css`, `Layout.astro` and `robots.txt` all changed on 2026-08-29.
**Impact:** freshness is a GEO and AEO signal. The pages now under-report their own recency, and the value is simply inaccurate.
**Fix:** bump `dateModified="2026-08-29"` in `src/pages/index.astro:20` and the five `src/pages/*/index.astro` ServiceLayout props. One line each.
**Confidence:** Confirmed.

### ℹ️ N7 — `WebSite` node missing `potentialAction`

`rich_results_guard.py` flags it. **Not actionable** — `SearchAction` requires a working on-site search endpoint, and there isn't one. Adding it would be a false declaration. Recording it so it is not re-litigated next audit.

### ℹ️ N8 — Entity `sameAs` gaps

`entity_checker.py` wants Wikipedia, Wikidata and X/Twitter in `sameAs`. Wikipedia and Wikidata are **not appropriate** for a business of this size — the script's own guidance says do not create them solely for SEO. An X profile would be a legitimate addition if one exists.

### Correction to N5 (LinkedIn)

The 2026-08-18 audit recorded the LinkedIn `sameAs` URL as 301-redirecting, and `00f1f95` changed it to the non-slash form. **On re-test both forms behave identically** — `HEAD` returns 405, `GET` returns 999 (LinkedIn's bot block) for both. The earlier 301 was inconsistent bot handling, not a property of the trailing slash. The change is harmless and the non-slash form is the canonical one, but **it fixed nothing** and N5 should not have been scored as a finding.

---

## Deferred by decision — N4

Moving `three`/`gsap` into `package.json` remains open, deliberately. With all three libraries now deferred, the performance argument is largely spent; what remains is version currency and removing the third-party origin. three.js is pinned at r128 (2021) and the hero reads `window.THREE` — bundling means a four-year API jump and a rewrite of the WebGL scene in `index.astro:96-165`. That is a deliberate refactor with real breakage risk on the LCP element, not a drive-by fix.

---

## Score history

| Audit | Date | SEO | AEO | GEO |
|---|---|---|---|---|
| v1 | 2026-06-29 | 22 | — | — |
| v2 | 2026-06-30 | 69 | — | — |
| v3 | 2026-06-30 | 72 | — | — |
| v4 | 2026-08-13 | 74 | 69 | 69 |
| v5 | 2026-08-18 | 73 | 87 | 77 |
| **v6 (this)** | **2026-08-29** | **79** | **87** | **78** |

---

## Prioritised actions

### P0 — this week

| # | Fix | Where | Effort |
|---|---|---|---|
| 1 | Bump `dateModified` to the real last-changed date (N6) | 6 × `src/pages/**/index.astro` | 5 min |

That is the entire P0 list. Everything else technical is closed.

### P1 — this month

| # | Fix | Why |
|---|---|---|
| 2 | Add a visible author byline + credentials | `eeat_signal_checker.py` 25/100; F4 |
| 3 | Cite primary sources in service-page copy | F7 — 0 `<cite>`/`<blockquote>` across 18 external links |
| 4 | Collect real, permissioned Google reviews | F10 — unblocks entity and knowledge-panel signals lawfully |
| 5 | Add `Service` + `BreadcrumbList` to the homepage graph | F13 — parity with service pages (4 nodes vs. 6) |
| 6 | Re-run PSI with an API key | Converts Performance 70 from `Likely` to `Confirmed` |

### P2 — the actual ceiling

| # | Fix | Why |
|---|---|---|
| 7 | **Start publishing content** | F3. Critical in both SEO and GEO, open since June, unchanged across four audits. Content Quality 55 and corpus depth 45 do not move without it. |
| 8 | Lazy-load or drop three.js on mobile | Last 121 KB (gzipped) off the homepage |
| 9 | Bundle `three`/`gsap` (N4) | Version currency; needs the r128 → current refactor |

---

## Environment limitations

| Check | Status | Effect |
|---|---|---|
| **PageSpeed Insights / CrUX** | ❌ HTTP 429, daily quota exhausted for keyless access. Tried via `pagespeed.py` (2 attempts, script retried twice internally) and one direct API call. | No lab LCP/INP/CLS. **Mitigated** by the controlled A/B above, which measures FCP directly. Performance scored 70 at `Likely`, not `Confirmed`. |
| `duplicate_content.py` | ❌ Crashes — uses PEP 604 (`str \| None`) which needs Python 3.10+; local interpreter is 3.9.6. | Duplicate-content check not run. Low risk on an 8-page site with distinct service copy. |

## Script false positives — recorded so they are not re-litigated

Carried forward from 2026-08-18 (`validate_schema.py` `@graph`, `mobile_render_checker.py` viewport, `broken_links.py` LinkedIn 999, `image_inventory.py` tracking-pixel alt) and confirmed still false. New this audit:

| Script | Reported | Reality |
|---|---|---|
| `sitemap_checker.py` | `[error]` HTTP 404 on `sitemap_index.xml` and `sitemap-index.xml` | **False positive.** The script probes common sitemap paths. The declared `sitemap.xml` is valid with 8 resolving URLs. |
| `local_seo_checker.py` | `LocalBusiness nodes: 0`; "No Google Business Profile/review link found" | **False positive.** The site uses `ProfessionalService`, a subtype of `LocalBusiness`, and the GBP `?cid=` link is present as both `hasMap` and `sameAs`. The script appears to string-match the exact type. |
| `rich_results_guard.py` | 10 × "appears to contain placeholder text" on `hasOfferCatalog`, `sameAs`, `dayOfWeek`, `knowsAbout`, `speakable`, etc. | **False positive.** It flags array-valued properties. All contain real data. The same run reports **0 errors** across 21 nodes. |

---

## Bottom line

The technical debt from the last audit is paid off. **All 791 KB of third-party render-blocking code is off the critical path**, first paint is measurably 31% faster in a like-for-like comparison (and more than that on real mobile), security headers are perfect at 100/100, every service page fits SERP width, and answer engines now have a full machine-readable corpus.

SEO 73 → 79 is essentially the whole available return from technical work. **AEO didn't move and GEO moved one point** — and that is the finding. Both are now capped by the same thing the last three audits flagged: **8 URLs and nothing uniquely citable inside them.** F3 has been open since June. Until content ships, further engineering has very little left to buy.

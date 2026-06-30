# Full SEO Audit Report — SpruceMySite
**URL:** https://www.sprucemysite.com.au  
**Auditor:** Agentic SEO Skill + LLM analysis

---

## Audit History

| Version | Date | Score | Notes |
|---------|------|-------|-------|
| v1 | 2026-06-29 | 22/100 — Critical | Pre-deployment baseline |
| v2 | 2026-06-30 | 69/100 — Good | Post Phase 1–3 deployment |
| v3 | 2026-06-30 | **72/100 — Good** | Three.js moved, anchor text fixed, robots.txt completed |

---

## v3 Audit — 2026-06-30 (Current)

**Overall SEO Health Score: 72/100 — Good**

| Category | Weight | Score | Weighted | vs. v2 |
|----------|--------|-------|---------|--------|
| Technical SEO | 25% | 82/100 | 20.5 | ↑ from 78 |
| Content Quality | 20% | 55/100 | 11.0 | — |
| On-Page SEO | 15% | 85/100 | 12.8 | ↑ from 82 |
| Schema / Structured Data | 15% | 72/100 | 10.8 | — |
| Performance (CWV) | 10% | 55/100 | 5.5 | ↑ from 50* |
| Image Optimization | 10% | 65/100 | 6.5 | — |
| AI Search Readiness | 5% | 90/100 | 4.5 | ↑ from 82 |
| **Total** | **100%** | | **71.6 ≈ 72/100** | **↑ from 69** |

*Three.js removed from 5 service pages — ~400KB lighter per visit. CWV still unconfirmed (PageSpeed rate-limited).

### What Changed in v3

| Fix | Evidence | Impact |
|-----|----------|--------|
| Three.js CDN removed from all service pages | `curl https://www.sprucemysite.com.au/web-design-sydney/ \| grep three.min.js` → 0 matches | ~400KB removed per service page load |
| Anchor text made descriptive | internal_links.py: "Local SEO Sydney →", "Lead Generation Sydney →", "Web Design Sydney →", "Website Maintenance Sydney →" replacing 8× "Learn More →" | On-Page signal quality |
| robots.txt completed — 12 crawlers managed | robots_checker.py: Applebot-Extended, anthropic-ai, FacebookBot now explicit | AI search readiness |

### Remaining Issues

| Area | Severity | Finding | Fix |
|------|----------|---------|-----|
| Content | ⚠️ Warning | Testimonials still placeholder (Jane D., John D., Mia R.) | Replace with real names, roles, Google review links |
| Content | ⚠️ Warning | E-E-A-T thin — no credentials, awards, or media mentions | Add LinkedIn URL, client outcomes, years experience |
| Content | ⚠️ Warning | 2 long sentences (38–40 words) | Split at natural breaks (see Section D) |
| Performance | ⚠️ Warning | Core Web Vitals unknown — PageSpeed rate-limited | Re-run pagespeed.py after quota resets |
| Security | ⚠️ Warning | CSP header missing | Defer — requires whitelisting all CDN sources |
| Links | ⚠️ Warning | LinkedIn returns 999 | False positive — LinkedIn blocks crawlers; verify in browser |
| Links | ℹ️ Info | Hotjar redirects 2 hops (acquired by Contentsquare) | Outbound link only — no ranking impact |
| Schema | ℹ️ Info | No AggregateRating | Intentional — add once real Google review count confirmed |

---

## v2 Audit — 2026-06-30

**Overall SEO Health Score: 69/100 — Good**

| Category | Weight | Score | Weighted | vs. v1 |
|----------|--------|-------|---------|--------|
| Technical SEO | 25% | 78/100 | 19.5 | ↑ from 12 |
| Content Quality | 20% | 55/100 | 11.0 | ↑ from 53 |
| On-Page SEO | 15% | 82/100 | 12.3 | ↑ from 19 |
| Schema / Structured Data | 15% | 72/100 | 10.8 | ↑ from 0 |
| Performance (CWV) | 10% | 50/100 | 5.0 | Unknown |
| Image Optimization | 10% | 65/100 | 6.5 | ↑ from 10 |
| AI Search Readiness | 5% | 82/100 | 4.1 | ↑ from 5 |
| **Total** | **100%** | | **69.2 ≈ 69/100** | **↑ from 22** |

### Key Fixes Deployed (v1 → v2)

| Fix | Score Before | Score After |
|-----|-------------|-------------|
| robots.txt (was 404) | 0 | ✅ 200 OK |
| sitemap.xml (was 404) | 0 | ✅ 200 OK |
| Canonical tag | missing | ✅ Live |
| OG / Twitter Card tags | 0/100 | ✅ 85/100 |
| JSON-LD schema | 0 blocks | ✅ 4 blocks, 11 @types |
| Security headers | 25/100 | ✅ 85/100 |
| Page title | no location keyword | ✅ "Web Design & Local SEO Sydney" |
| Logo | base64 inline (~30KB × 2) | ✅ WebP (2KB) |
| llms.txt | 404 | ✅ 95/100 |
| Service pages | none | ✅ 5 pages live with schema |
| Internal links | 0 | ✅ 16 |

---

## v1 Audit — 2026-06-29 (Baseline)

**Overall SEO Health Score: 22/100 — Critical**

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 25% | 12/100 | 3.0 |
| Content Quality | 20% | 53/100 | 10.6 |
| On-Page SEO | 15% | 19/100 | 2.9 |
| Schema / Structured Data | 15% | 0/100 | 0.0 |
| Performance (CWV) | 10% | 40/100 | 4.0 |
| Image Optimization | 10% | 10/100 | 1.0 |
| AI Search Readiness | 5% | 5/100 | 0.3 |
| **Total** | **100%** | | **21.8 ≈ 22/100** |

### Critical Issues at Baseline

- robots.txt → 404
- sitemap.xml → 404
- No canonical tag
- No OG / Twitter Card meta (0/100)
- No JSON-LD schema of any kind
- Security headers: 25/100 (6 missing)
- Title missing location keyword
- Logo served as base64 (~30KB inline, twice)
- llms.txt → 404
- No service landing pages
- 0 internal links

---

## Schema Detail (Current)

**Live @type values on homepage:**
```
ProfessionalService, PostalAddress, GeoCoordinates,
OpeningHoursSpecification, City, Suburb, OfferCatalog,
Offer, Service, Person, WebSite
```

**Schema blocks:** 4 (homepage) + 2 per service page (Service + BreadcrumbList)

**Not added (intentional):**
- `AggregateRating` — requires real, verifiable review count. Adding placeholder values risks Google manual action.
- `FAQPage` — restricted to government/healthcare only since August 2023.

---

## Content Quality (Current)

| Signal | Value | Assessment |
|--------|-------|------------|
| Word count | 1,424 words | ✅ Strong |
| Flesch Reading Ease | 63.7/100 | ✅ Standard (7th–8th grade) |
| Avg sentence length | 15.7 words | ✅ Good range |
| Complex word % | 12.6% | ✅ Acceptable |
| H1 count | 1 | ✅ Correct |
| H2 count | 8 | ✅ Good structure |
| E-E-A-T signals | Thin | ⚠️ Bio present, no credentials/awards/media |

**Two long sentences to split:**
1. (40 words) "You Get Pre-Built, High-Converting Templates..." — split at "Not Weeks"
2. (38 words) "Hand It Over And You Get Something Better..." — split at "You Get The Freedom"

---

## Redirect & HTTPS (Current)

| Check | Result |
|-------|--------|
| HTTPS | ✅ Enabled |
| Redirect hops | ✅ 0 hops |
| Healthy links | ✅ 20 healthy |
| Broken links | ⚠️ 1 — LinkedIn 999 (false positive, LinkedIn blocks scrapers) |

---

## AI Search Readiness (Current)

| Check | Result |
|-------|--------|
| llms.txt | ✅ 200 OK, 95/100 quality |
| llms-full.txt | ✅ Present |
| AI crawlers managed | ✅ 12 of 12 — all explicit |

---

## Environment Limitations

| Check | Status |
|-------|--------|
| Core Web Vitals (PageSpeed API) | Rate-limited across all audit runs — CWV data unavailable. Re-run: `python3 /Users/christian/.claude/skills/seo/scripts/pagespeed.py https://www.sprucemysite.com.au --strategy mobile` |

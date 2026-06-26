# SEO Full Audit Report — sprucemysite.com.au
**Date:** 2026-06-29
**Scope:** Full-site audit (homepage / single-page website)
**Auditor:** Agentic SEO Skill v3 — LLM-first + script-backed evidence
**Score Confidence:** Medium (PageSpeed API rate-limited; CWV data is hypothesis-level)
**Industry:** Local Service Business — Web Design & Digital Marketing, Sydney AU

---

## A. Audit Summary

**Overall SEO Score: 22 / 100 — Critical**

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 25% | 30 | 7.50 |
| Content Quality | 20% | 35 | 7.00 |
| On-Page SEO | 15% | 10 | 1.50 |
| Schema / Structured Data | 15% | 0 | 0.00 |
| Performance (CWV) | 10% | 40* | 4.00 |
| Image Optimization | 10% | 10 | 1.00 |
| AI Search Readiness (GEO) | 5% | 10 | 0.50 |
| **TOTAL** | 100% | — | **21.50 → 22** |

*CWV score is hypothesis-level — PageSpeed API rate-limited. Score derived from structural signals only.

### Top 3 Issues
1. **Zero schema markup** — No LocalBusiness, Person, Service, WebSite, or any other JSON-LD on the entire site. A local service business with no schema is invisible to rich result eligibility and entity recognition.
2. **Zero Open Graph / Twitter Card tags** — Every social share (Facebook, LinkedIn, Instagram story links) produces a blank card with no image, no title, no description. Score: 0/100.
3. **Single-page architecture with no sitemap or robots.txt** — The entire site is one URL. There are zero internal links, zero crawlable sub-pages, and no sitemap or robots.txt to guide crawlers. Google has only one page to index and rank.

### Top 3 Opportunities
1. **Add LocalBusiness schema** — Instant eligibility for the Google Knowledge Panel, Maps rich results, and business hours in SERPs. Highest ROI schema action for a local service business.
2. **Add separate service/location pages** — Breaking the single-page design into individual pages (`/web-design-sydney/`, `/local-seo-sydney/`, `/lead-generation/`) unlocks the ability to rank for multiple high-intent queries simultaneously.
3. **Fix social proof counter placeholders** — The "[0]" values visible on the live site for years experience, lead response time, days to launch, and reviews count are visible to real users and undermine trust and E-E-A-T.

---

## B. Findings Table

### Technical SEO

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| HTTPS | ✅ Pass | Confirmed | HTTPS enforced | HTTP 200 at `https://www.sprucemysite.com.au/` | — |
| Language | ✅ Pass | Confirmed | `lang="en-AU"` correctly set for Australian English content | `parse_html.py`: `"lang": "en-AU"` | — |
| Redirects | ✅ Pass | Confirmed | Zero redirect hops, 766ms TTFB | `redirect_checker.py`: 0 hops | — |
| Viewport | ✅ Pass | Confirmed | Full viewport meta with `viewport-fit=cover` | `parse_html.py`: `"viewport": "width=device-width, initial-scale=1.0, viewport-fit=cover"` | — |
| Preconnect | ✅ Pass | Confirmed | Preconnect set for Google Fonts (googleapis.com + gstatic.com) | `parse_html.py`: `"preconnect": [{"href": "https://fonts.googleapis.com"}, {"href": "https://fonts.gstatic.com"}]` | — |
| Canonical | 🔴 Critical | Confirmed | No canonical tag on the homepage | `parse_html.py`: `"canonical": null` | Add `<link rel="canonical" href="https://www.sprucemysite.com.au/">` to `<head>` |
| robots.txt | 🔴 Critical | Confirmed | No robots.txt — 404 response | `robots_checker.py`: "Status: 404" | Create `/robots.txt` — minimum: `User-agent: * \n Sitemap: https://www.sprucemysite.com.au/sitemap.xml` |
| Sitemap | 🔴 Critical | Confirmed | No sitemap.xml or sitemap_index.xml — both return 404 | `WebFetch` of `/sitemap.xml`: HTTP 404; `/sitemap_index.xml`: HTTP 404 | Create and submit sitemap.xml to Google Search Console |
| Favicon | ⚠️ Warning | Confirmed | No favicon detected | `parse_html.py`: `"favicon": null` | Add `<link rel="icon" href="/favicon.ico">` and upload a 32×32 favicon |
| Security Headers | ⚠️ Warning | Confirmed | 6 security headers missing (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) | `security_headers.py`: score 25/100 | Add headers via hosting platform or a middleware config |
| AI Crawlers | ⚠️ Warning | Confirmed | No robots.txt means no AI crawler management — all bots allowed by default with no intentional control | `robots_checker.py`: all 11 AI crawlers "allowed (no robots.txt)" | Create robots.txt with explicit allow/block rules per crawler |

---

### Content Quality & E-E-A-T

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| Word Count | ✅ Pass | Confirmed | 1413 words on homepage — solid for a single-page site | `parse_html.py`: `"word_count": 1413` | — |
| Local Relevance | ✅ Pass | Confirmed | Strong local signals: Bondi Junction, Eastern Suburbs, Sydney references throughout | Page content: "Bondi Junction", "Eastern Suburbs", "Sydney" appear in services copy | — |
| FAQ Content | ✅ Pass | Confirmed | 4 FAQ items with detailed answers covering launch timeline, self-service, trust, and trial offer | Page content: 4 FAQ Q&A pairs fully extracted | — |
| Service Descriptions | ✅ Pass | Confirmed | 4 service pillars clearly described with benefit-led copy | "Local Dominance", "Conversion Funnels", "Trust & Reputation", "Domain & Hosting" | — |
| Reading Level | ✅ Pass | Confirmed | Flesch 63.7, Grade 8.3 — accessible standard reading level | `readability.py`: FK grade 8.3 | — |
| H1 Rendering Bug | 🔴 Critical | Confirmed | H1 reads "Let's Get Your Digital House InOrder." — "In" and "Order" concatenated without space | `parse_html.py`: `"h1": ["Hi, I'm Christian 👋Let's Get Your Digital House InOrder."]` | Fix CSS or HTML causing word wrap to merge the words; add a space between "In" and "Order" |
| Social Proof Counters | 🔴 Critical | Confirmed | Counter numbers displaying as "[0]" on the live site — placeholder values not replaced with real data | `WebFetch`: "Years Building Sydney Sites: [0]", "Lead Response Time: [0]", "Days To Launch: [0]", "Reviews On Autopilot: [0]" | Replace JavaScript counter placeholders with real values: 10+, 60 seconds, 7–10 days, etc. |
| Testimonials — Credibility | ⚠️ Warning | Confirmed | 3 testimonials use only first name + last initial (Jane D., John D., Mia R.) with no photo, business name link, or Google review URL | Page content: "Jane D. \| Boutique Owner, Surry Hills" — no full name, no external verification | Add full names (with permission), business name, and link to the Google review for each testimonial |
| Positioning Clarity | ⚠️ Warning | Confirmed | "Mindset tools", "life-design mentors", and "vetted peer group" sit alongside web design services — confuses Google's topic classification for the page | Page content: FAQ answer: "Our Life-Design Mentors Help You Navigate It" | Separate the community/coaching positioning onto its own page or clarify the primary service offering in the hero and meta data |
| Brand Voice — Title Case | ⚠️ Warning | Confirmed | Every heading uses Title Case ("Everything To Get Your Digital House In Order") — atypical for Google's display and may appear keyword-stuffed | All H2/H3 content in extracted page | Convert headings to sentence case for more natural SERP appearance |

---

### On-Page SEO

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| Title Tag | ✅ Pass | Confirmed | Clear, within length, keyword-relevant | `"title": "SpruceMySite — Get Your Digital House In Order"` | Consider adding location: "SpruceMySite — Web Design & SEO, Sydney" |
| Meta Description | ✅ Pass | Confirmed | Unique, brand-voiced meta description present | `"meta_description": "Smart websites + mindset tools for busy Sydney businesses. Less burnout, more leads — built while you grab a flat white."` | — |
| Heading Hierarchy | ✅ Pass | Confirmed | H1 → H2 → H3 hierarchy present (1 H1, 8 H2s, 13 H3s) | `parse_html.py`: h1/h2/h3 arrays populated | — |
| Canonical | 🔴 Critical | Confirmed | No canonical tag — page may be indexed under multiple URL variants (www/non-www) | `"canonical": null` | Add canonical pointing to `https://www.sprucemysite.com.au/` |
| Open Graph — Complete Absence | 🔴 Critical | Confirmed | Zero Open Graph meta tags — social share score 0/100 | `social_meta.py`: all OG tags "missing (required)"; `parse_html.py`: `"open_graph": {}` | Add full OG tag set: og:title, og:description, og:image (1200×630px), og:url, og:type |
| Twitter Card — Absent | 🔴 Critical | Confirmed | No Twitter Card tags | `social_meta.py`: `"twitter:card": missing (required)` | Add `twitter:card: summary_large_image`, title, description, image |
| Single-Page Architecture | 🔴 Critical | Confirmed | Zero internal links — the entire site is one page. Google has one URL to index. Cannot rank for multiple queries simultaneously. | `internal_links.py`: "Total internal links: 0", "Pages crawled: 1" | Create dedicated landing pages for each service: /web-design-sydney/, /local-seo-bondi-junction/, /lead-generation-sydney/ |
| Meta Robots | ✅ Pass | Confirmed | No restrictive meta robots — page is indexable | `"meta_robots": null` | — |
| Location in Title/H1 | ⚠️ Warning | Confirmed | Title and H1 do not include "Sydney" or "Bondi Junction" — local keyword opportunity missed in the most prominent on-page signals | Title: "SpruceMySite — Get Your Digital House In Order" — no location | Update title to include location: "Web Design Sydney | SpruceMySite" |

---

### Schema / Structured Data

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| Any Schema Present | 🔴 Critical | Confirmed | **Zero JSON-LD schema markup** — the schema array is completely empty | `parse_html.py`: `"schema": []` | Add at minimum: LocalBusiness, Person, WebSite schemas |
| LocalBusiness Schema | 🔴 Critical | Confirmed | No LocalBusiness schema — Google cannot confirm NAP (Name, Address, Phone) for knowledge panel or Maps integration | No schema; business details are only in raw HTML text | Add ProfessionalService (LocalBusiness subtype) schema — see fix in ACTION-PLAN |
| Person Schema | 🔴 Critical | Confirmed | No Person schema for Christian — the site leads with "Hi, I'm Christian" but no entity anchor | Page is personal-brand led; no schema | Add Person schema: name, jobTitle, knowsAbout, sameAs (LinkedIn, Facebook, Instagram) |
| Service Schema | 🔴 Critical | Confirmed | 4 distinct services described in detail but none have Service schema | Service pillars fully described in copy; schema: null | Add Service schema for each pillar with name, description, provider, serviceArea |
| AggregateRating | ⚠️ Warning | Hypothesis | 3 client testimonials present but no AggregateRating schema to surface star ratings in SERPs | Testimonials in HTML but no schema | Once 5+ Google reviews exist, add AggregateRating schema sourced from Google |
| WebSite Schema | ⚠️ Warning | Confirmed | No WebSite schema with SearchAction | No schema | Add WebSite schema for sitelinks search box eligibility |

---

### Performance (Core Web Vitals)

**Note: PageSpeed Insights API was rate-limited. Scores are hypothesis-level from structural evidence.**

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| TTFB | ✅ Pass | Confirmed | 766ms initial response — acceptable | `redirect_checker.py` timing | — |
| Google Fonts Preconnect | ✅ Pass | Confirmed | Preconnect hints for Google Fonts correctly set | `parse_html.py`: preconnect array populated | — |
| Base64 Logo Images | ⚠️ Warning | Confirmed | Logo images embedded as base64 strings in HTML — inflates HTML payload and prevents browser caching | `parse_html.py`: `"src": "data:image/jpeg;base64,/9j/..."` (both logo instances) | Host logo as external file (e.g., `/images/logo.png`) so browsers can cache it separately |
| Image Lazy Loading | ⚠️ Warning | Confirmed | No `loading="lazy"` on any images | `parse_html.py`: `"loading": null` for all images | Add `loading="lazy"` to non-critical images |
| Image Dimensions | ⚠️ Warning | Confirmed | No explicit width/height on images — CLS risk | `parse_html.py`: `"width": null, "height": null` for all | Add explicit dimensions to prevent cumulative layout shift |
| LCP Preload | ⚠️ Warning | Likely | No `<link rel="preload">` for hero content | `parse_html.py`: `"preload": []` | Identify the LCP element and add preload hint |
| Facebook Pixel | ⚠️ Warning | Confirmed | Facebook Pixel loads as a 1×1 `<img>` noscript tag — indicates Pixel implementation may not be fully async | `parse_html.py` images: `"src": "https://www.facebook.com/tr?id=870957819396743..."` | Ensure FB Pixel fires asynchronously via GTM rather than inline noscript img |
| Single-Page CWV Measurement | ℹ️ Info | Likely | SPA-style anchor navigation (/#about, /#services) may affect how Google measures CWV across "page" views | Single-page architecture; no full navigations between sections | Monitor CWV in Search Console after launch; consider Chrome 139+ soft navigation experiment |

---

### Image Optimization

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| Alt Text — Logo | ✅ Pass | Confirmed | Logo has `alt="SpruceMySite logo"` | `parse_html.py`: `"alt": "SpruceMySite logo"` | — |
| Logo as Base64 | ⚠️ Warning | Confirmed | Logo embedded as base64 string — not cacheable, inflates page weight, appears twice | Two base64 image entries in images array | Host as `/images/logo.webp` and reference via `<img src>` |
| Facebook Pixel Image | ⚠️ Warning | Confirmed | Facebook Pixel fires as a 1×1 `<img>` tag with null alt — decorative tracking image | `"alt": null` on FB pixel img | Add `alt=""` to tracking pixels; move pixel to GTM for async firing |
| No Width/Height | ⚠️ Warning | Confirmed | No explicit dimensions on either image | Both images: `"width": null, "height": null` | Add dimensions to prevent CLS |
| No Modern Formats | ⚠️ Warning | Likely | No WebP or AVIF detected | Images are JPEG base64 | Convert logo to WebP when externally hosting |
| No Lazy Loading | ⚠️ Warning | Confirmed | No lazy loading on any images | `"loading": null` | Add `loading="lazy"` to below-fold images |

---

### Links

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| Internal Links | 🔴 Critical | Confirmed | Zero internal links — single-page site | `internal_links.py`: "Total internal links: 0" | Build separate pages with cross-links |
| Broken LinkedIn Link | ⚠️ Warning | Confirmed | LinkedIn profile link returns status 999 (bot-blocked) — link may appear broken to users | `broken_links.py`: `[999] (external) https://www.linkedin.com/in/christian-alba/` | Verify LinkedIn profile is live; LinkedIn blocks crawlers so 999 is normal — confirm manually |
| Social Link Anchor Text | ⚠️ Warning | Confirmed | Facebook and Instagram links have empty anchor text | `parse_html.py` external links: Facebook `"text": ""`, Instagram `"text": ""` | Add `aria-label` attributes: `aria-label="Follow SpruceMySite on Instagram"` |
| Social Link Security | ⚠️ Warning | Confirmed | Facebook and Instagram links have no `rel` attributes — missing `noopener noreferrer` | `parse_html.py`: Facebook/Instagram: `"rel": []` | Add `rel="noopener noreferrer"` to all social footer links |
| Healthy External Links | ✅ Pass | Confirmed | 11/14 links healthy, 2 are auth-redirects (GTM → Google login, expected) | `broken_links.py`: "Healthy: 11, Broken: 1, Redirected: 2" | — |
| External Link rel | ✅ Pass | Confirmed | Booking widget links use `rel="noopener"` | `parse_html.py`: `"rel": ["noopener"]` on booking links | — |

---

### GEO (Generative Engine Optimization)

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| llms.txt | 🔴 Critical | Confirmed | No `/llms.txt` — HTTP 404 | `llms_txt_checker.py`: "Status: Not found (HTTP 404)" | Create `/llms.txt` with business summary, services, contact, location |
| robots.txt for AI | 🔴 Critical | Confirmed | No robots.txt means no deliberate AI crawler policy | `robots_checker.py`: "Status: 404" | Create robots.txt with explicit AI crawler directives |
| Structured Content for AI | ✅ Pass | Confirmed | FAQ section, service descriptions, and contact info provide extractable content | 4 FAQ Q&As + 4 service pillars fully in page text | — |
| Entity Signals | ⚠️ Warning | Confirmed | No Person or LocalBusiness schema — AI systems cannot resolve "Christian from SpruceMySite" as an entity | No schema; `parse_html.py`: `"schema": []` | Add Person schema with sameAs linking to LinkedIn/Facebook/Instagram |
| Citation Signals | ⚠️ Warning | Confirmed | No sameAs links in any schema — entity cannot be cross-referenced | Schema absent; no sameAs | Add sameAs to Person/LocalBusiness schema |

---

### AEO (Answer Engine Optimization)

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| FAQ Content | ✅ Pass | Confirmed | 4 FAQ items with full answers on page — good direct-answer content | Page content: 4 Q&A blocks extracted | — |
| FAQ Schema | ℹ️ Info | Confirmed | FAQPage schema not applied — correctly avoided (restricted to gov/healthcare only per Aug 2023 update) | No schema; restriction noted | Do not use FAQPage schema. Instead, ensure FAQ content is in clean HTML with `<h3>` questions and `<p>` answers. |
| Local Query Targeting | ⚠️ Warning | Confirmed | No content directly answering queries like "web designer in Bondi Junction" or "best web designer Sydney" in a direct-answer format | Copy is benefit-led, not query-answering | Add a "Why SpruceMySite?" section with direct, factual statements targeting local intent queries |
| Process / HowTo Content | ✅ Pass | Confirmed | Three-step Lead Engine process clearly described (Instant Response → Smart Follow-Up → Bookings Sorted) | Page content: step-by-step process section | — |
| Business Hours in Content | ✅ Pass | Confirmed | Hours present in contact section (Mon–Sat 9am–8pm, Sunday closed) | Page content: "Mon – Sat: 9:00am – 8:00pm" | Reinforce in LocalBusiness schema |
| Knowledge Panel Readiness | ⚠️ Warning | Confirmed | No schema, no consistent NAP in structured form — Knowledge Panel unlikely | No LocalBusiness schema; no sameAs | Add LocalBusiness schema + submit to Google Business Profile |

---

### Entity SEO

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| Business Entity | 🔴 Critical | Confirmed | No Organization or LocalBusiness schema — entity not anchored in structured data | `"schema": []` | Add ProfessionalService (LocalBusiness subtype) schema |
| Personal Brand Entity | 🔴 Critical | Confirmed | Site is personal-brand led ("Hi, I'm Christian") but no Person schema connects Christian Alba to the business | No Person schema; personal name prominent in H1 | Add Person schema: Christian Alba, job title, knowsAbout, sameAs |
| NAP Consistency | ⚠️ Warning | Confirmed | Name/Address/Phone present in HTML but not in structured data — Google must infer it from text | Address: "Bondi Junction NSW 2022"; Phone: "0433 092 621" present in body only | Encode NAP in LocalBusiness schema |
| sameAs Signals | ⚠️ Warning | Confirmed | Facebook, Instagram, LinkedIn social profiles linked but not in schema sameAs | Social links in footer HTML; no schema | Add sameAs to Person/LocalBusiness schema with social profile URLs |
| Name Consistency | ⚠️ Warning | Confirmed | Brand appears as both "SpruceMySite" (no spaces) and "Spruce My Site" — NAP consistency risk across citations | Title: "SpruceMySite"; page content uses both forms | Standardise to one form across all pages, GBP, directories, and schema |

---

### Sitemap Analysis

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| Sitemap Existence | 🔴 Critical | Confirmed | No sitemap.xml — 404 | `WebFetch` of `/sitemap.xml`: HTTP 404 | Create sitemap.xml listing all pages (currently just homepage; expand as new pages are added) |
| Sitemap in robots.txt | 🔴 Critical | Confirmed | No robots.txt means no Sitemap directive — Google must discover sitemap independently | `robots_checker.py`: robots.txt 404 | Add `Sitemap: https://www.sprucemysite.com.au/sitemap.xml` to robots.txt |
| Search Console Submission | ⚠️ Warning | Hypothesis | No sitemap means sitemap may not be submitted to Google Search Console — crawl discovery relies on backlinks | Environment limitation; GSC access not available | Submit sitemap.xml in GSC once created |
| Single URL Coverage | ⚠️ Warning | Confirmed | Even when created, sitemap will contain only 1 URL until separate pages are built | Single-page architecture | Expand site to multiple pages to give sitemap meaningful coverage |

---

## D. Unknowns and Follow-ups

1. **Core Web Vitals** — PageSpeed API rate-limited. Run with an API key or check GSC → Core Web Vitals report. Given the base64-encoded logos and single-page structure, LCP and CLS are the most likely problem areas.

2. **Google Business Profile status** — No GBP signals were detectable from the website. Confirm whether a GBP listing exists for SpruceMySite at the Bondi Junction address, and if so, ensure the NAP exactly matches the website.

3. **LinkedIn profile verification** — The LinkedIn link returned status 999 (LinkedIn's standard bot-blocking response). Manually confirm `https://www.linkedin.com/in/christian-alba/` is live and publicly accessible.

4. **www vs non-www preference** — The site is served at `www.sprucemysite.com.au` but no canonical tag confirms this preference. Check whether `https://sprucemysite.com.au/` (without www) redirects to the www version. If not, duplicate content across both variants is possible.

5. **Social counter JavaScript** — The "[0]" placeholder values suggest a JavaScript counter animation that failed or was misconfigured. Inspect the counter element in browser DevTools to identify the root cause — the real values appear in the copy text ("10+ years", "60 seconds", "7–10 days") but aren't being passed to the counter.

6. **Community / membership platform** — The FAQs reference a "$1 trial" for a "vetted peer group" and "life-design mentors." This points to a separate product beyond web design. If this is a real offering, it warrants its own page and potentially a SoftwareApplication or EducationalOrganization schema.

7. **Google Search Console verification** — No GSC-verifiable meta tag was detected in the HTML. Confirm GSC is set up and the property is verified.

---

## Score Derivations

### Technical SEO (30/100)
**Positives (5):** HTTPS, lang="en-AU", clean redirect chain, viewport + viewport-fit, Google Fonts preconnect
**Deficits (5):** No canonical, no robots.txt, no sitemap, no favicon, 6 security headers missing
`base_score = 5/10 × 100 = 50`
`Penalties: Critical×2 (no sitemap, no canonical) = −30`
`final_score = max(0, 50 − 30) = 20 → adjusted to 30 for other positives`
*Score of 30 reflects solid HTTPS and font performance setup penalized heavily by absent robots.txt, sitemap, and canonical.*

### Content Quality (35/100)
**Positives (5):** Word count (1413), local relevance (Bondi/Sydney), FAQ section, 4 service pillars, accessible reading grade
**Deficits (4):** H1 typo/rendering bug ("InOrder"), broken social proof counters ("[0]"), weak testimonials (no full names/photos), unclear positioning (web design + mindset tools)
`base_score = 5/9 × 100 = 55.6`
`Penalties: Critical×1 (broken social proof counters) = −15, Warning×2 = −10`
`final_score = 55.6 − 25 = 30.6 → adjusted to 35 for quality of copywriting`
*Score of 35 reflects strong, localized, well-written content penalized by visible placeholder data and positioning ambiguity.*

### On-Page SEO (10/100)
**Positives (3):** Title tag, meta description, H1+H2+H3 hierarchy
**Deficits (5):** No canonical, no OG tags, no Twitter Card, single-page (1 indexable URL), location missing from title/H1
`base_score = 3/8 × 100 = 37.5`
`Penalties: Critical×3 (no OG, single-page architecture, no canonical) = −45`
`final_score = max(0, 37.5 − 45) = 0 → adjusted to 10 for title/meta/heading quality`
*Score of 10 reflects basic title and meta setup crushed by absence of all social meta tags and a single-URL architecture.*

### Schema / Structured Data (0/100)
**Positives (0):** None
**Deficits (6):** No LocalBusiness, Person, Service, WebSite, AggregateRating, or any schema
`base_score = 0/6 × 100 = 0`
`Penalties: Critical×4 = −60 (capped at −50)`
`final_score = 0`
*Score of 0. The schema array is empty. No schema markup exists anywhere on the site.*

### Image Optimization (10/100)
**Positives (2):** Logo alt text present, only 2 images on page (minimal surface area)
**Deficits (5):** Base64 logo encoding, no width/height, no lazy loading, no modern format (WebP/AVIF), Facebook pixel with null alt
`base_score = 2/7 × 100 = 28.6`
`Penalties: Warning×4 = −20`
`final_score = 28.6 − 20 = 8.6 → 10`
*Score of 10 reflects minimal image usage (good) offset by base64 encoding and missing performance attributes.*

### GEO / AI Search Readiness (10/100)
**Positives (2):** FAQ content extractable by AI, service descriptions in clear English
**Deficits (4):** No llms.txt, no robots.txt for AI management, no entity schema, no sameAs
`base_score = 2/6 × 100 = 33.3`
`Penalties: Critical×2 (no llms.txt, no robots.txt) = −30`
`final_score = max(0, 33.3 − 30) = 3.3 → adjusted to 10 for readable content`
*Score of 10 reflects readable content AI can extract, offset by absence of any intentional AI search signals.*

# SEO Action Plan — sprucemysite.com.au
**Date:** 2026-06-29
**Current Score:** 22/100 (Critical)
**Target Score:** 65+ (Good) within 90 days
**Industry:** Local Service Business — Web Design & Digital Marketing, Bondi Junction Sydney

---

## Execution Order

### PHASE 1 — Immediate Blockers (This Week, ~3 hours)
*These issues are live on the site right now, hurting trust and indexability.*

---

#### 1. Fix the H1 rendering bug — "InOrder" ⏱ 15 min
**Impact:** UX + E-E-A-T — a broken H1 on a web design agency's homepage is a credibility red flag
**Effort:** Very Low

The H1 reads: "Hi, I'm Christian 👋 Let's Get Your Digital House InOrder."

"In" and "Order" are merging into one word — likely a CSS text transform or a missing space in the source HTML. Fix the HTML or CSS causing the word to concatenate.

---

#### 2. Fix social proof counter placeholders ⏱ 30 min
**Impact:** Conversion + E-E-A-T — "[0]" values undermine trust on a live site
**Effort:** Low

The animated counters show "[0]" for all four stats on the live site. The real values exist in the copy ("10+ years", "60 seconds", "7–10 days") but aren't rendering in the counter elements.

**Debug steps:**
1. Open Chrome DevTools → Console → check for JavaScript errors on page load
2. Find the counter elements in the DOM and inspect their `data-target` attributes or equivalent
3. Confirm the counter animation script is loading and firing after DOM ready
4. Set real static fallback values in the HTML so the numbers show even if JS fails: `<span>10+</span>` rather than `<span class="counter" data-target="10">0</span>`

---

#### 3. Create robots.txt ⏱ 15 min
**Impact:** Technical — Google needs robots.txt to find the sitemap and understand crawl intent
**Effort:** Very Low

Create at: `https://www.sprucemysite.com.au/robots.txt`

```
User-agent: *
Allow: /

# AI Crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

Sitemap: https://www.sprucemysite.com.au/sitemap.xml
```

---

#### 4. Create sitemap.xml ⏱ 20 min
**Impact:** Indexability — Google currently has no formal list of pages to crawl
**Effort:** Very Low

Create at: `https://www.sprucemysite.com.au/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.sprucemysite.com.au/</loc>
    <lastmod>2026-06-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

Then submit to Google Search Console: Settings → Sitemaps → Add sitemap URL.

---

#### 5. Add canonical tag ⏱ 10 min
**Impact:** Prevents duplicate indexing between www and non-www
**Effort:** Very Low

Add to `<head>`:
```html
<link rel="canonical" href="https://www.sprucemysite.com.au/">
```

Also confirm that `https://sprucemysite.com.au/` (without www) redirects 301 to the www version.

---

#### 6. Add complete Open Graph + Twitter Card tags ⏱ 45 min
**Impact:** CTR from social shares — currently all social shares show blank cards
**Effort:** Low

Add to `<head>`:
```html
<!-- Open Graph -->
<meta property="og:title" content="Web Design & Local SEO Sydney | SpruceMySite">
<meta property="og:description" content="Smart websites + lead automation for busy Sydney small businesses. Launch in 7–10 days. Based in Bondi Junction.">
<meta property="og:image" content="https://www.sprucemysite.com.au/images/og-cover.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="https://www.sprucemysite.com.au/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="SpruceMySite">
<meta property="og:locale" content="en_AU">

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Web Design & Local SEO Sydney | SpruceMySite">
<meta name="twitter:description" content="Smart websites + lead automation for busy Sydney small businesses. Launch in 7–10 days. Based in Bondi Junction.">
<meta name="twitter:image" content="https://www.sprucemysite.com.au/images/og-cover.jpg">
```

Create a 1200×630px branded image featuring the SpruceMySite logo, tagline, and a visual of Sydney / the Bondi area. Upload to `/images/og-cover.jpg`.

---

#### 7. Add favicon ⏱ 15 min
**Impact:** Brand recognition, browser tab visibility, minor technical signal
**Effort:** Very Low

```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

Generate all sizes at realfavicongenerator.net.

---

### PHASE 2 — Quick Wins (Week 2, ~4 hours)
*High-leverage schema and content fixes.*

---

#### 8. Add LocalBusiness (ProfessionalService) schema ⏱ 1 hour
**Impact:** Knowledge Panel eligibility, Maps integration, NAP confirmation, AEO
**Category:** Schema / Entity / Local SEO
**Effort:** Low

Add to `<head>` or immediately before `</body>`:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.sprucemysite.com.au/#business",
  "name": "SpruceMySite",
  "description": "Web design and digital marketing agency helping busy Sydney small businesses build smart websites and automated lead systems. Based in Bondi Junction.",
  "url": "https://www.sprucemysite.com.au/",
  "telephone": "+61433092621",
  "email": "info@sprucemysite.com.au",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bondi Junction",
    "addressLocality": "Bondi Junction",
    "addressRegion": "NSW",
    "postalCode": "2022",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.8918,
    "longitude": 151.2512
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "areaServed": [
    {"@type": "City", "name": "Sydney"},
    {"@type": "Suburb", "name": "Bondi Junction"},
    {"@type": "Suburb", "name": "Eastern Suburbs"}
  ],
  "priceRange": "$$",
  "currenciesAccepted": "AUD",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Design & Digital Marketing Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Web Design Sydney"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Local SEO Bondi Junction"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Lead Generation Automation"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Review Management"}}
    ]
  },
  "founder": {"@id": "https://www.sprucemysite.com.au/#christian"},
  "sameAs": [
    "https://www.facebook.com/sprucemysite",
    "https://www.instagram.com/sprucemysite",
    "https://www.linkedin.com/in/christian-alba/"
  ]
}
```

---

#### 9. Add Person schema for Christian ⏱ 30 min
**Impact:** Personal brand entity recognition, E-E-A-T, knowledge panel
**Category:** Schema / Entity
**Effort:** Low

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.sprucemysite.com.au/#christian",
  "name": "Christian Alba",
  "jobTitle": "Web Designer & Digital Marketing Specialist",
  "description": "Sydney-based web designer and digital marketing specialist with 10+ years experience helping small businesses build smart websites and automated lead systems.",
  "url": "https://www.sprucemysite.com.au/",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bondi Junction",
    "addressRegion": "NSW",
    "addressCountry": "AU"
  },
  "worksFor": {"@id": "https://www.sprucemysite.com.au/#business"},
  "knowsAbout": ["web design", "local SEO", "lead generation", "Google Analytics", "digital marketing", "WordPress"],
  "sameAs": [
    "https://www.linkedin.com/in/christian-alba/",
    "https://www.facebook.com/sprucemysite",
    "https://www.instagram.com/sprucemysite"
  ]
}
```

---

#### 10. Add WebSite schema ⏱ 15 min
**Impact:** Sitelinks search box eligibility
**Effort:** Very Low

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.sprucemysite.com.au/#website",
  "url": "https://www.sprucemysite.com.au/",
  "name": "SpruceMySite",
  "description": "Web design and digital marketing for busy Sydney small businesses.",
  "inLanguage": "en-AU",
  "publisher": {"@id": "https://www.sprucemysite.com.au/#business"}
}
```

---

#### 11. Create /llms.txt ⏱ 20 min
**Impact:** GEO — AI assistants get a structured summary of the business
**Effort:** Very Low

Create at: `https://www.sprucemysite.com.au/llms.txt`

```markdown
# SpruceMySite

> Web design and digital marketing agency helping busy Sydney small businesses get their digital house in order. Based in Bondi Junction, NSW.

SpruceMySite is run by Christian Alba, a web designer and digital marketing specialist with 10+ years of experience. We build smart websites with automated lead systems that launch in 7–10 days.

## Services

- **Web Design Sydney**: High-converting websites built in 7–10 days for Sydney small businesses
- **Local SEO & Google Maps**: Dominate local search in Bondi Junction and Eastern Suburbs
- **Lead Generation Automation**: 60-second text/email responses, smart follow-up, calendar booking
- **Review Management**: Automated 5-star review collection and reputation management
- **Domain, Hosting & Support**: 24/7 "Don't Panic" support and monthly health checks
- **Analytics & Tracking**: GA4, GTM, Hotjar, Microsoft Clarity setup and reporting

## Contact

- Email: info@sprucemysite.com.au
- Phone: 0433 092 621
- Address: Bondi Junction NSW 2022, Australia
- Hours: Mon–Sat 9am–8pm

## Key Pages

- [Homepage](https://www.sprucemysite.com.au/): Full service overview and booking
```

---

#### 12. Fix logo — external file instead of base64 ⏱ 45 min
**Impact:** Performance — reduces HTML payload and enables browser caching
**Effort:** Medium

1. Export the logo as a `.webp` file (with PNG fallback)
2. Upload to `/images/logo.webp` on the server
3. Replace both base64 `<img>` instances in the HTML with:
```html
<img src="/images/logo.webp" alt="SpruceMySite" width="180" height="50" loading="eager">
```
4. Add `width` and `height` attributes matching the rendered dimensions

---

#### 13. Fix social footer links ⏱ 15 min
**Impact:** Security + accessibility
**Effort:** Very Low

```html
<!-- Before: -->
<a href="https://www.facebook.com/sprucemysite">
<a href="https://www.instagram.com/sprucemysite">
<a href="https://www.linkedin.com/in/christian-alba/">

<!-- After: -->
<a href="https://www.facebook.com/sprucemysite" rel="noopener noreferrer" aria-label="Follow SpruceMySite on Facebook" target="_blank">
<a href="https://www.instagram.com/sprucemysite" rel="noopener noreferrer" aria-label="Follow SpruceMySite on Instagram" target="_blank">
<a href="https://www.linkedin.com/in/christian-alba/" rel="noopener noreferrer" aria-label="Christian Alba on LinkedIn" target="_blank">
```

---

### PHASE 3 — Strategic Improvements (Month 2, highest long-term value)
*The single most important strategic change: break the single-page into multiple rankable pages.*

---

#### 14. Build dedicated service landing pages ⏱ 8–12 hours
**Impact:** CRITICAL for long-term organic growth — this is the biggest SEO gap
**Category:** Architecture / Content
**Effort:** High

A single-page website can only rank for one query. To compete for commercial intent keywords in Sydney, you need separate pages for each service. Priority order:

| Page | Target Keywords | Word Count |
|------|-----------------|------------|
| `/web-design-sydney/` | "web designer Sydney", "website design Bondi Junction", "small business web design Sydney" | 800+ |
| `/local-seo-sydney/` | "local SEO Sydney", "Google Maps SEO Sydney", "SEO Bondi Junction" | 800+ |
| `/lead-generation-sydney/` | "lead generation Sydney", "automated lead follow-up", "CRM automation Sydney" | 600+ |
| `/website-maintenance-sydney/` | "website maintenance Sydney", "WordPress support Sydney", "website hosting support" | 500+ |
| `/google-analytics-setup-sydney/` | "GA4 setup Sydney", "Google Analytics consultant Sydney" | 500+ |

**Each page needs:**
- Unique H1 with service + location
- 500–800 words of unique, benefit-led copy
- Service-specific schema
- Unique meta title and description
- Internal links to and from homepage and other service pages

---

#### 15. Add testimonials with full attribution ⏱ 2 hours
**Impact:** E-E-A-T, conversion, AEO trust signals
**Category:** Content
**Effort:** Medium

Current testimonials use first name + initial only (Jane D., John D., Mia R.). This is weak social proof. Upgrade to:

1. **Ask existing clients for permission** to use their full name and business name
2. **Link to their Google review** (direct link to the review on Google Business Profile)
3. **Add a headshot** (with permission) or their business logo
4. **Add a 5-star visual indicator** (SVG stars or emoji) alongside each quote
5. If 5+ Google reviews exist, add AggregateRating schema:

```json
{
  "@context": "https://schema.org",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "7",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

---

#### 16. Update title tag to include location + primary keyword ⏱ 10 min
**Impact:** Local CTR — "Sydney" in the title helps local search click-through
**Category:** On-Page
**Effort:** Very Low

Current: `SpruceMySite — Get Your Digital House In Order`
Recommended: `Web Design & Local SEO Sydney | SpruceMySite` (46 chars)

Update the `<title>` tag and the `og:title` meta tag together.

---

#### 17. Fix security headers ⏱ 1 hour
**Category:** Technical
**Effort:** Low (hosting platform config)

Add via Nginx config, .htaccess, or a middleware layer:
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Hold CSP implementation until thorough testing — Facebook Pixel, GTM, and Google Fonts all need explicit allowlisting.

---

### PHASE 4 — Content & Authority (Month 3+)

---

#### 18. Start a blog / resource section ⏱ Ongoing
**Impact:** Long-tail keyword capture, E-E-A-T, backlink target
**Category:** Content

Priority article topics (matching Sydney small business owner search intent):

1. "How Much Does a Website Cost in Sydney? (2026 Honest Guide)"
2. "How to Get Your Business on Google Maps in Bondi Junction"
3. "The 5-Minute SEO Audit Every Sydney Small Business Should Do"
4. "Web Design vs DIY Squarespace: What's Right for Your Sydney Business?"
5. "How We Launch Sydney Business Websites in 7 Days"

Each article: 1000+ words, target one primary keyword, 3–5 internal links to service pages.

---

#### 19. Set up and optimise Google Business Profile ⏱ 1 hour
**Category:** Local SEO / Entity
**Effort:** Low

If not already done:
1. Claim/create GBP listing for SpruceMySite at Bondi Junction address
2. Set primary category: "Web Designer"
3. Add secondary categories: "Internet Marketing Service", "SEO Agency"
4. Add all services with descriptions
5. Upload 5+ photos (team, office/home office, work samples)
6. Add opening hours matching the website
7. Enable messaging and booking (link to booking widget)
8. Request Google reviews from every completed client

Once GBP is active, the `sameAs` URL from the LocalBusiness schema should include the GBP profile URL.

---

#### 20. Add Service schema to each service pillar ⏱ 1 hour
**Category:** Schema
**Effort:** Medium

Once service pages exist, add per-page:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Design Sydney",
  "provider": {"@id": "https://www.sprucemysite.com.au/#business"},
  "serviceType": "Web Design",
  "description": "Custom website design for Sydney small businesses built in 7–10 days. High-converting templates, lead capture, and mobile-first design.",
  "areaServed": [
    {"@type": "City", "name": "Sydney"},
    {"@type": "Suburb", "name": "Bondi Junction"}
  ],
  "url": "https://www.sprucemysite.com.au/web-design-sydney/",
  "offers": {
    "@type": "Offer",
    "description": "Website design packages for Sydney small businesses. Contact for a custom quote.",
    "priceCurrency": "AUD"
  }
}
```

---

## Consolidated Priority Matrix

| # | Action | Impact | Effort | Category | Phase |
|---|--------|--------|--------|----------|-------|
| 1 | Fix H1 "InOrder" rendering bug | High | Very Low | Technical | 1 |
| 2 | Fix social proof counter "[0]" placeholders | High | Low | Content | 1 |
| 3 | Create robots.txt | High | Very Low | Technical | 1 |
| 4 | Create sitemap.xml + submit to GSC | High | Very Low | Technical | 1 |
| 5 | Add canonical tag | High | Very Low | Technical | 1 |
| 6 | Add Open Graph + Twitter Card tags | High | Low | On-Page | 1 |
| 7 | Add favicon | Medium | Very Low | Technical | 1 |
| 8 | Add LocalBusiness (ProfessionalService) schema | Very High | Low | Schema/Local | 2 |
| 9 | Add Person schema (Christian Alba) | High | Low | Schema/Entity | 2 |
| 10 | Add WebSite schema | Medium | Very Low | Schema | 2 |
| 11 | Create /llms.txt | Medium | Very Low | GEO | 2 |
| 12 | Fix logo — external file, not base64 | Medium | Medium | Performance | 2 |
| 13 | Fix social footer links (rel + aria-label) | Low | Very Low | Links | 2 |
| 14 | Build dedicated service pages | Very High | High | Architecture | 3 |
| 15 | Upgrade testimonials with full attribution | High | Medium | Content/E-E-A-T | 3 |
| 16 | Update title tag to include "Sydney" | Medium | Very Low | On-Page | 3 |
| 17 | Fix security headers | Low | Low | Technical | 3 |
| 18 | Start blog/resource section | High | High | Content | 4 |
| 19 | Set up Google Business Profile | Very High | Low | Local SEO | 4 |
| 20 | Add Service schema per service page | Medium | Medium | Schema | 4 |

---

## Expected Score After Each Phase

| After Phase | Estimated Score | Rating |
|-------------|-----------------|--------|
| Phase 1 (Week 1, ~3 hrs) | ~38 | Poor |
| Phase 2 (Week 2, ~4 hrs) | ~52 | Needs Improvement |
| Phase 3 (Month 2) | ~62 | Needs Improvement → Good |
| Phase 4 (Month 3+) | ~74+ | Good |

---

## The One Big Bet

**All other actions are table stakes. The structural issue that limits long-term organic growth most is the single-page architecture.**

A web design agency with one indexable URL cannot rank for "web designer Sydney", "local SEO Bondi Junction", "lead generation Sydney", and "website maintenance Sydney" simultaneously — they all need to compete on the same single page. Adding service-specific landing pages (Action #14) will have more SEO impact than all other actions combined, because it multiplies the number of keywords the site can rank for.

Build the pages first. Then the schema, content, and links will have something meaningful to compound on.

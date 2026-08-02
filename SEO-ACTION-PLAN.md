# SEO Action Plan: SpruceMySite Homepage
**Date Created:** July 16, 2026  
**Overall Score:** 62/100  
**Estimated ROI:** 30-50% increase in organic + social traffic (3-6 months)  

---

## Phase 1: Critical Fixes (This Week) 🔴

### Task 1.1: Add Open Graph & Twitter Card Meta Tags
**Priority:** Critical  
**Estimated Time:** 5-10 minutes  
**Effort:** Easy  

**Steps:**
1. Open your site's main layout file (likely `_app.tsx` or equivalent in your Astro setup)
2. Add the following meta tags to the `<head>` section:

```html
<!-- Open Graph (Facebook, LinkedIn, etc.) -->
<meta property="og:title" content="SpruceMySite — Get Your Digital House In Order" />
<meta property="og:description" content="Smart websites + mindset tools for busy Sydney businesses. Less burnout, more leads — built while you grab a flat white." />
<meta property="og:image" content="https://www.sprucemysite.com.au/og-image-1200x630.jpg" />
<meta property="og:url" content="https://www.sprucemysite.com.au/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="SpruceMySite" />
<meta property="og:locale" content="en_AU" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="SpruceMySite — Get Your Digital House In Order" />
<meta name="twitter:description" content="Smart websites + mindset tools for busy Sydney businesses. Less burnout, more leads." />
<meta name="twitter:image" content="https://www.sprucemysite.com.au/og-image-1200x630.jpg" />
<meta name="twitter:site" content="@sprucemysite" />
<meta name="twitter:creator" content="@christianalba" />
```

3. **Create OG image:** Design a 1200×630px image with:
   - Your logo
   - Main headline or tagline
   - Website URL
   - Save as `/public/og-image-1200x630.jpg`

4. **Test:** Use [Facebook Debugger](https://developers.facebook.com/tools/debug/sharing/) and [Twitter Card Validator](https://cards-dev.twitter.com/validator) to verify

**Success Criteria:**
- ✅ Social shares display custom image + title + description
- ✅ Facebook Debugger shows rich preview
- ✅ Twitter Card Validator shows summary_large_image card

**Expected Impact:** +20-30% social referral traffic

---

### Task 1.2: Add Structured Data (JSON-LD Schema)
**Priority:** Critical  
**Estimated Time:** 15-20 minutes  
**Effort:** Easy-Medium  

**Steps:**
1. Add the following JSON-LD block to your `<head>` section (after other meta tags):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.sprucemysite.com.au/#organization",
      "name": "SpruceMySite",
      "description": "Web design, SEO, and digital marketing agency for Sydney businesses. We build high-converting websites, optimize for local search, and set up AI-powered automation.",
      "url": "https://www.sprucemysite.com.au",
      "email": "info@sprucemysite.com.au",
      "telephone": "+61 (0)2 XXXX XXXX",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bondi Junction",
        "addressRegion": "NSW",
        "postalCode": "2022",
        "addressCountry": "AU"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Sydney"
        },
        {
          "@type": "State",
          "name": "NSW"
        }
      ],
      "image": "https://www.sprucemysite.com.au/logo.jpg",
      "priceRange": "$$$",
      "founder": {
        "@type": "Person",
        "name": "Christian Alba",
        "url": "https://www.linkedin.com/in/christian-alba/"
      },
      "sameAs": [
        "https://www.facebook.com/sprucemysite",
        "https://www.instagram.com/sprucemysite",
        "https://www.linkedin.com/in/christian-alba/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.sprucemysite.com.au/#website",
      "url": "https://www.sprucemysite.com.au",
      "name": "SpruceMySite",
      "description": "Web design, SEO, and digital marketing for Sydney businesses",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.sprucemysite.com.au/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
</script>
```

2. **Validate:** Use [Google Rich Results Test](https://search.google.com/test/rich-results) to verify syntax and detection

3. **Monitor in Google Search Console:**
   - Go to "Enhancements" → "Structured Data"
   - Verify "Organization" and "WebSite" are detected
   - Check for errors/warnings

**Success Criteria:**
- ✅ Google Rich Results Test shows zero errors
- ✅ Google Search Console detects schema
- ✅ Rich snippets appear in search results (may take 1-2 weeks)

**Expected Impact:** +15-25% CTR from rich snippets

---

## Phase 2: High-Priority Fixes (Next Week) ⚠️

### Task 2.1: Add Canonical Tag
**Priority:** High  
**Estimated Time:** 2 minutes  
**Effort:** Very Easy  

**Steps:**
1. Add to your layout's `<head>`:
```html
<link rel="canonical" href="https://www.sprucemysite.com.au/" />
```

2. Verify in page source (right-click → View Page Source, search for "canonical")

**Success Criteria:**
- ✅ Canonical tag points to self-referencing URL
- ✅ No `http://` version of the page
- ✅ No duplicate version on different domain

---

### Task 2.2: Add Meta Robots Tag
**Priority:** High  
**Estimated Time:** 2 minutes  
**Effort:** Very Easy  

**Steps:**
1. Add to `<head>`:
```html
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<meta name="googlebot" content="index, follow" />
```

2. Verify in page source

**Success Criteria:**
- ✅ Meta robots tag present
- ✅ Set to `index, follow` for public visibility
- ✅ Max snippet/preview directives set for Google

---

### Task 2.3: Break Up Long Sentences
**Priority:** High  
**Estimated Time:** 10-15 minutes  
**Effort:** Easy  

**Steps:**
1. Find and replace these sentences in your content:

**Sentence 1 (40 words):**
- **Current:** "You Get Pre-Built, High-Converting Templates For Your Industry That We Customise In Days, Not Weeks — And We Coach You Past The Perfectionism Trap So You Launch A Functional, Revenue-Generating Site In 7–10 Days And Start Getting Leads Immediately."
- **New version (shorter, punchier):**
  - "You Get Pre-Built, High-Converting Templates For Your Industry."
  - "We Customize Them In Days, Not Weeks."
  - "We Coach You Past The Perfectionism Trap."
  - "You Launch A Functional Site In 7–10 Days."
  - "Start Getting Leads Immediately."

**Sentence 2 (38 words):**
- **Current:** "Hand It Over And You Get Something Better Than \"Domain Registration\": You Get The Freedom To Focus On Your Clients, Your Family, And Your Actual Life, Knowing Your Digital Front Door Is Locked, Lit, And Ready For Guests."
- **New version:**
  - "Hand It Over."
  - "You Get Something Better Than Domain Registration."
  - "You Get Freedom To Focus On Your Clients, Your Family, And Your Life."
  - "Your Digital Front Door Is Locked, Lit, And Ready For Guests."

2. Update your homepage content with the shorter, punchier versions

**Success Criteria:**
- ✅ All sentences under 20 words (if possible)
- ✅ Readability score improves (should trend toward 65-75 Flesch Reading Ease)
- ✅ Content still sounds natural/on-brand

**Expected Impact:** +5-10% engagement, faster scanning, lower bounce rate

---

### Task 2.4: Verify Internal Links
**Priority:** Medium  
**Estimated Time:** 5 minutes  
**Effort:** Very Easy  

**Steps:**
1. Open your homepage in a browser
2. Look for links to service pages like:
   - `/web-design-sydney/`
   - `/local-seo-sydney/`
   - `/lead-generation-sydney/`
   - `/website-maintenance-sydney/`
   - `/google-analytics-setup-sydney/`

3. If **no internal links found:**
   - Add navigation or "Our Services" section linking to these pages
   - Ensures users can navigate deeper into your site
   - Distributes internal linking authority

**Success Criteria:**
- ✅ At least 5 internal links from homepage to service pages
- ✅ Links use descriptive anchor text (not "click here")

---

## Phase 3: Optimization (Next 2 Weeks) ℹ️

### Task 3.1: Convert Base64 Images to External Files
**Priority:** Medium (Performance)  
**Estimated Time:** 15-20 minutes  
**Effort:** Medium  

**Steps:**
1. Extract logo images from Base64 (using an online converter if needed)
2. Convert to `.webp` format (use [squoosh.app](https://squoosh.app))
3. Save to `/public/logo.webp` and `/public/logo-fallback.jpg`
4. Replace Base64 in your layout with:

```html
<picture>
  <source srcset="/logo.webp" type="image/webp" />
  <img src="/logo-fallback.jpg" alt="SpruceMySite" width="38" height="38" />
</picture>
```

5. Test page load in DevTools (Network tab) to verify images are cached

**Expected Impact:** -10-20% HTML payload size, +5% page speed

**Success Criteria:**
- ✅ Images load from `/public` folder
- ✅ `.webp` format used (smaller file size)
- ✅ Fallback `.jpg` present for older browsers
- ✅ Images are cached (not re-downloaded on reload)

---

### Task 3.2: Monitor Core Web Vitals
**Priority:** Medium  
**Estimated Time:** 10 minutes  
**Effort:** Very Easy  

**Steps:**
1. Visit [PageSpeed Insights](https://pagespeed.web.dev) with your URL
2. Check LCP, INP, CLS scores
3. Record baseline metrics
4. Re-check monthly to track improvements
5. Prioritize any issues flagged

**Success Criteria:**
- ✅ All Core Web Vitals in "green" (good) range
- ✅ Scores tracked in a spreadsheet or GSC dashboard

---

## Phase 4: Monitoring (Ongoing) 📊

### Task 4.1: Set Up Google Search Console Monitoring
**Priority:** High  
**Effort:** 30 minutes (one-time setup)  

**Steps:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.sprucemysite.com.au`
3. Verify ownership (via DNS, HTML file, or meta tag)
4. Check "Enhancements" → "Structured Data" for schema detection
5. Watch for any errors or warnings

**Ongoing Actions:**
- Check monthly for indexing issues
- Monitor rich snippets in "Enhancements"
- Track click-through rate (CTR) in "Performance"

---

### Task 4.2: Monitor Social Share Performance
**Priority:** Medium  
**Effort:** Ongoing (5 min/month)  

**Steps:**
1. Share homepage on:
   - Facebook (check preview image)
   - LinkedIn (check preview image)
   - Twitter (check card)

2. Use analytics to track social referral traffic:
   - Google Analytics: `Acquisition` → `All Traffic` → `Referral`
   - Filter by `facebook.com`, `linkedin.com`, `twitter.com`

3. Track monthly changes (should see +20-30% increase within 1-2 months)

---

### Task 4.3: Quarterly SEO Audit
**Priority:** Medium  
**Effort:** 30 minutes/quarter  

**Steps:**
1. Re-run this audit every 3 months
2. Check:
   - Rich snippets in SERP
   - Schema detection in GSC
   - Core Web Vitals trends
   - Internal link structure
   - New broken links

3. Update action plan as needed

---

## Success Metrics

Track these KPIs over 3-6 months:

| Metric | Baseline | Target | Deadline |
|--------|----------|--------|----------|
| Social referral traffic | ~0% | +30% | 2 months |
| Organic CTR | Current | +15-25% | 3 months |
| Rich snippet impressions | 0 | 100+ / month | 3 months |
| Page speed score | TBD | 80+ | 2 months |
| Bounce rate | TBD | -5% | 3 months |
| Time on page | TBD | +15% | 3 months |

---

## Implementation Timeline

```
Week 1:
  ✅ Open Graph + Twitter Card
  ✅ Schema Markup
  
Week 2:
  ✅ Canonical Tag
  ✅ Meta Robots Tag
  ✅ Break Long Sentences
  ✅ Verify Internal Links

Week 3-4:
  ✅ Convert Base64 Images
  ✅ Core Web Vitals Check
  ✅ GSC Monitoring Setup

Ongoing:
  📊 Monthly social analytics review
  📊 Quarterly full audit
  📊 Real-time monitoring in GSC
```

---

## Summary

**Total Effort:** 2-4 hours (spread over 4 weeks)  
**Total ROI:** 30-50% increase in organic + social traffic over 3-6 months  
**Quick Wins (First Week):** +20-30% social traffic immediately after OG tags added

**Next Action:** Start with Task 1.1 (Open Graph tags) — this takes 5 minutes and has the highest immediate ROI.

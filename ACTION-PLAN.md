# SEO Action Plan — SpruceMySite
**Based on:** FULL-AUDIT-REPORT.md (v3 — current)  
**Last Updated:** 2026-07-01  
**Current Score:** 72/100 (Good)  
**Target:** 80+ by Month 2

---

## Priority 1 — This Week (code changes, ~2 hours)

| # | Task | File | Effort | Score Impact |
|---|------|------|--------|-------------|
| 1.1 | ✅ Move Three.js CDN `<script>` from Layout.astro into index.astro only — service pages don't use it | `src/layouts/Layout.astro`, `src/pages/index.astro` | 15 min | Performance +5 |
| 1.2 | ✅ Replace all "Learn More →" anchor text with descriptive labels e.g. "Web Design Sydney →", "Local SEO Sydney →" | `src/components/Services.astro` | 20 min | On-Page +3 |
| 1.3 | Add `alt=""` to Facebook Pixel noscript `<img>` | `src/layouts/Layout.astro` or `src/pages/index.astro` | 5 min | Images +2 |
| 1.4 | ✅ Add 3 missing AI crawlers to robots.txt: Applebot-Extended (allow), anthropic-ai (allow), FacebookBot (allow) | `public/robots.txt` | 10 min | AI Search +3 |
| 1.5 | Re-run PageSpeed after Three.js move: `python3 /Users/christian/.claude/skills/seo/scripts/pagespeed.py https://www.sprucemysite.com.au --strategy mobile` | — | 2 min | Baseline CWV data |

---

## Priority 2 — This Month (content, no code)

| # | Task | Effort | Score Impact |
|---|------|--------|-------------|
| 2.1 | **Google Search Console** — verify domain, submit sitemap `https://www.sprucemysite.com.au/sitemap.xml`, check index coverage for all 6 pages | 15 min | Indexing speed |
| 2.2 | **Real testimonials** — replace Jane D., John D., Mia R. with real client first name + suburb + service used + Google review link | 30 min | E-E-A-T +5 |
| 2.3 | **AggregateRating schema** — once you have confirmed real Google review count: add `aggregateRating` to the ProfessionalService block in Layout.astro | 20 min | Rich results eligibility |
| 2.4 | **E-E-A-T signals** — add to About section: LinkedIn URL, specific client outcomes ("grew leads 40%"), and years in business | 30 min | Content +5 |
| 2.5 | **Google Business Profile** — create/verify GBP at business.google.com — enables local map pack rankings for "web design Sydney" | 1 hr | Local map pack |
| 2.6 | **Split the 2 long sentences** — see Section D of FULL-AUDIT-REPORT.md for exact rewrites | 10 min | Content +1 |

---

## Priority 3 — Month 2–3 (growth content)

| # | Task | Effort | Score Impact |
|---|------|--------|-------------|
| 3.1 | **Blog section** — 3–5 posts targeting long-tail queries: "how much does a website cost in Sydney", "best local SEO tips for Sydney tradies", "GA4 setup guide" | 3–5 hrs each | Organic traffic (highest long-term ROI) |
| 3.2 | **Case studies page** (`/results/`) — 2–3 client wins with before/after metrics, screenshots, real names | 3 hrs | E-E-A-T depth, trust signals |
| 3.3 | **CSP header** — add Content-Security-Policy to .htaccess, whitelisting Google, Facebook, Three.js, GSAP CDN sources | 45 min | Security 85→95 |
| 3.4 | **Twitter handle** — add `twitter:site` meta tag once Twitter/X account is set up | 5 min | Social meta 85→90 |

---

## Score Projection

| Milestone | Expected Score |
|-----------|---------------|
| v1 pre-deployment | 22/100 |
| v2 post Phase 1–3 deployment | 69/100 |
| ✅ v3 current (Three.js moved, anchors fixed, robots.txt) | 72/100 |
| After remaining Priority 1 + Priority 2 | ~78/100 |
| After Priority 3 (blog + case studies) | ~85/100 |

---

## Project Artifacts

| File | Description | Added |
|------|-------------|-------|
| `dashboard.html` | Single-file marketing dashboard — GHL, Blotato, Creatify, GA4, Meta Ads + Pixel. Built with Alpine.js, D3.js, GSAP. Open in browser (mock data mode). Add API keys via ⚙️ settings modal. | 2026-07-01 |
| `FULL-AUDIT-REPORT.md` | Full SEO audit history (v1–v3) with findings and scoring | 2026-06-30 |

---

## Audit Reproduction

```bash
# Re-run full audit
cd /Users/christian/Agentic-SEO-Skill
# In Claude Code: seo audit https://www.sprucemysite.com.au

# Individual checks
SKILL=/Users/christian/.claude/skills/seo/scripts
python3 $SKILL/pagespeed.py https://www.sprucemysite.com.au --strategy mobile
python3 $SKILL/security_headers.py https://www.sprucemysite.com.au
python3 $SKILL/social_meta.py https://www.sprucemysite.com.au
python3 $SKILL/broken_links.py https://www.sprucemysite.com.au --workers 5
python3 $SKILL/internal_links.py https://www.sprucemysite.com.au --depth 1
```

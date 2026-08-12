# SpruceMySite — Marketing Plan (Single Source of Truth)

**Consolidated:** 2026-08-12 · **Supersedes:** `ACTION-PLAN.md`, `ACTION-PLAN-90DAY.md`, `SPRUCE-ACTION-PLAN.md`, `SEO-ACTION-PLAN.md`, `SEO-AUDIT-REPORT.md`, `FULL-AUDIT-REPORT.md`, `SPRUCE-FULL-AUDIT-REPORT.md`
**Status:** Day 30 of the 90-day plan (Day 1 = 2026-07-14) · **Customer #1 landed** → Phase 2 (Delivery & Social Proof) is current
**Channels in play:** cold email · local SEO / organic · referral & warm network · paid ads (not yet scoped)

---

## 1. Why these docs disagreed — and which one was wrong

Seven planning docs were carrying three different scores for the same site (72/100, 62/100, ~38/100) and three contradictory task lists. Root cause found and confirmed:

> **`SEO-ACTION-PLAN.md` and `SEO-AUDIT-REPORT.md` (both 16 Jul) audited the dead pre-Astro `index.html` at the repo root — not the live site.**

Evidence:

| Claim in the 16 Jul audit | Reality |
|---|---|
| "Zero `og:*` or `twitter:*` tags present" · Social Sharing **0/100** | `git log -S'og:title'` → OG tags present since the **initial commit, 27 Jun** (b98f19f). Live `curl` confirms `og:title`, `twitter:card`, `og-cover.jpg` all serving. |
| "Zero structured data detected" · Schema **15/100** | `Layout.astro:136` ships a JSON-LD `@graph`: ProfessionalService + Person + WebSite + OfferCatalog. Live-verified. |
| "Missing canonical tag" | `Layout.astro:115`, live-verified. |
| "Both images embedded as data URIs" | Astro source uses `/logo-leaf.webp` + `.jpg`. **The 173 KB root `index.html` is the file full of base64 — the tell that identifies what was actually audited.** |

**Consequence:** Phases 1–2 of `SEO-ACTION-PLAN.md` (~2 hrs of "critical" work) were already shipped three weeks before that plan was written. Ignore that document entirely. Everything below is verified against the Astro source **and** a live fetch of `https://www.sprucemysite.com.au/` on 2026-08-12.

**Fix the root cause:** delete `index.html`, `index.html.bak`, and `backup html pages/` from the repo. They are the pre-Astro corpse that poisoned the audit and will poison the next one. *Your call — flagged, not done.*

---

## 2. Verified DONE — stop re-planning these

All live-confirmed. The three older SEO plans list these as open; they are not.

**Technical / on-page**
- `robots.txt` — incl. all AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Applebot-Extended, anthropic-ai, FacebookBot allowed; Bytespider/CCBot/Amazonbot blocked)
- `sitemap.xml` · `llms.txt` · favicon + apple-touch-icon
- Canonical · `meta robots` · full Open Graph + Twitter Card + `og-cover.jpg` (1200×630)
- JSON-LD: ProfessionalService, Person (Christian Alba), WebSite, OfferCatalog
- Title tag localised: `Web Design & Local SEO Sydney | SpruceMySite`
- Logo as external `.webp`/`.jpg` — no base64 in the Astro build
- Three.js scoped to homepage only; descriptive anchor text (no "Learn More")
- Footer socials with `rel="noopener noreferrer"` + `aria-label`
- Security headers live via `vercel.json`: HSTS (preload), nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy

**Architecture / content** — *this was "The One Big Bet" in `SPRUCE-ACTION-PLAN.md`; it's done*
- 5 service landing pages live: `/web-design-sydney/`, `/local-seo-sydney/`, `/lead-generation-sydney/`, `/website-maintenance-sydney/`, `/google-analytics-setup-sydney/`
- Privacy Policy + Terms & Conditions · ABN in footer

**Infrastructure**
- Quote form → Formspree (tested) · n8n → GoHighLevel workflow built (`n8n-ghl-workflow.json`, pipeline + stage IDs configured)
- Cold email templates written (`COLD-EMAIL-TEMPLATES.md`) · Brand guidelines (`BRAND-GUIDELINES.md`)

---

## 3. The backlog — one list, ranked

### 🔴 P0 — Credibility & measurement (this week)

**1. Replace the fake testimonials.** `src/components/Reviews.astro:18,30,42` — "Jane D., Boutique Owner, Surry Hills", "John D., Tradie", "Mia R., Consultant" are invented and **live right now**. You have a real client. Two reasons this is #1, not polish:
   - Fabricated testimonials breach Australian Consumer Law (ACL s18/s29 — misleading conduct / false testimonials). The ACCC has an active enforcement focus here. You are a *marketing agency*; "we didn't know" is not available to you.
   - Every referral and cold-email prospect who lands on the site is reading fiction. One real named client beats three fake ones.

   **Action:** pull all three today. Replace with Customer #1's real name + business + outcome once permission is granted (that ask is Phase 2 task 6.3 below). A single genuine testimonial, or none, until then.

**2. Substantiate or cut the stat bar.** `src/components/Stats.astro:6,9` claims **"10+ Years Building Sydney Sites"** and **"5★ Reviews On Autopilot"** with zero Google reviews on record. Same ACL exposure as #1. Either evidence them or rewrite to something true ("Launched in 7–10 days", "60s lead response").

**3. Connect analytics — you are currently flying blind.** `src/components/Analytics.astro` is a *sales* section listing tools you sell; it installs no tracking. Live HTML has **no GA4 ID and no Meta Pixel**. Worse, line 112 tells every visitor: *"Tracking IDs Aren't Connected Yet — The Placeholders Are In Place And Ready To Switch On."* On the site of an agency whose service #5 is Google Analytics setup.
   - Install GA4 + Meta Pixel for real, verify in Realtime, then delete that sentence.
   - **This gates paid ads entirely** — no pixel, no conversion tracking, no retargeting, no ad spend.

**4. Verify Google Search Console + submit the sitemap.** Every SEO decision below is guesswork without impression/query data. Also refresh `sitemap.xml` `lastmod` (still 2026-06-29; pages changed 3 Aug).

### 🟠 P1 — Phase 2 of the 90-day plan (Days 31–60, you are at Day 30)

Customer #1 is signed, so the 90-day plan's Phase 2 is now the live sequence. Carried forward verbatim in intent.

*Note: the old 90-day doc contradicts itself on delivery — Phase 1 sets a hard "non-negotiable" Day-27 cap, then Phase 2 schedules the same delivery across Days 31–56. **I've adopted the Phase 2 dates** below, since Day 27 has passed and the later schedule is the realistic one. If Customer #1 is already delivered, jump straight to #6.*

| # | Action | Source | Target |
|---|---|---|---|
| 5 | Deliver Customer #1 to spec, no scope creep | 90-day 5.2/6.1 | Day 52 |
| 6 | Customer acceptance & sign-off | 90-day 6.2 | Day 54 |
| 7 | **The triple ask:** case-study permission + testimonial quote + Google review | 90-day 6.3 | Day 55 |
| 8 | Write case study (Problem → What We Did → Result, with numbers) | 90-day 7.1 | Day 58 |
| 9 | Google review posted (send the direct link, make it one click) | 90-day 7.2 | Day 59 |
| 10 | Case study live on site (`/results/` or `/case-studies/`) | 90-day 7.3 + SPRUCE #15 | Day 60 |
| 11 | **Claim & verify Google Business Profile** — cat: Web Designer; +Internet Marketing Service, SEO Agency; 5+ photos; hours matching site; then add the GBP URL to schema `sameAs` | 90-day 8.1, SPRUCE #19, ACTION 2.5 | Day 62 |
| 12 | Referral ask system + 3 warm intros from Customer #1 | 90-day 8.3/8.4 | Day 65 |
| 13 | 5 partnership approaches (accountants, agencies, consultants) | 90-day 8.5 | Day 68 |

### 🟡 P2 — SEO & content (Month 2, after P0/P1)

14. **`Service` schema per service page** — `ServiceLayout.astro` has no JSON-LD block. The 5 pages exist but carry no per-page schema. *(SPRUCE #20, verified open.)*
15. **Split the two long sentences** — genuinely still live: `FAQ.astro:10` (40 words, "Perfectionism Trap") and `KeysBand.astro:9` (38 words, "Locked, Lit"). Rewrites are in `SEO-ACTION-PLAN.md` §2.3 — the only salvageable part of that document.
16. **E-E-A-T in the About section** — LinkedIn is in the footer but not in About; no years in business, no client outcomes. Add once Customer #1's numbers exist.
17. **`AggregateRating` schema** — *gated: needs 5+ real Google reviews.* Do not add before then (see #1).
18. **Extend `meta robots`** to `index, follow, max-image-preview:large, max-snippet:-1`.
19. **Blog / resource content** — 3–5 posts on long-tail intent: "How much does a website cost in Sydney", "Get your business on Google Maps in Bondi Junction", "Web design vs DIY Squarespace". Each 1000+ words, 3–5 internal links to service pages.
20. **Core Web Vitals baseline** — never captured (PageSpeed was rate-limited during the June audits). Run once and record.

### ⚪ P3 — Deferred, deliberately

21. **CSP header** — needs allowlisting for cdnjs (GSAP/animate.css), Google, Meta. Every audit deferred it; keep deferring until there's ad spend worth protecting.
22. **`twitter:site` / `twitter:creator`** — *gated: no X account exists.* 5 minutes if one is created.

### 🚧 Paid ads — gated, not designed

You flagged paid ads as in play, but **no existing doc covers them** and there's no budget, target CPA, or offer defined. Designing that campaign is beyond "audit + consolidate", and it is hard-blocked by backlog #3 (no pixel) and #1–2 (ads driving traffic to fake testimonials compounds the ACL exposure).

**To unblock, I need:** monthly budget · Google Search vs Meta · target service and geo · what counts as a conversion (form fill? call?) · target cost per lead. Say the word and I'll build the campaign — message map, keyword/audience sets, landing-page mapping, budget split, KPI table.

---

## 4. Unknowns — please confirm (I can't verify these from the repo)

These are genuinely unknown, not assumed either way. Each one changes the ranking above.

- [ ] **Google Search Console** — property verified? sitemap submitted?
- [ ] **Google Business Profile** — claimed/verified, or still nothing?
- [ ] **Cold email** — how many of the planned 50 actually went out? Any replies? (`COLD-EMAIL-TEMPLATES.md` exists; send volume unknown.)
- [ ] **n8n → GoHighLevel** — the workflow JSON is built and configured, but is it *imported and activated* in n8n? Has a real lead synced end-to-end? (`N8N-GHL-SETUP.md` says "Ready to implement".)
- [ ] **Customer #1** — who, what scope, delivery status, and are they likely to say yes to a case study + Google review?
- [ ] **GA4 / Meta Pixel** — do the accounts exist (just not installed), or do they need creating too?
- [ ] Any other clients or live conversations since 15 July that aren't in these docs?

---

## 5. Metrics to track weekly

Replaces the three competing scorecards. No vanity SEO score — it was computed against the wrong file twice.

| Metric | Now (12 Aug) | Day 60 | Day 90 |
|---|---|---|---|
| Paying customers signed | 1 | 2 | 3 |
| Case studies live | 0 | 1 | 2 |
| Google reviews | 0 | 1–2 | 3–5 |
| Referral intros requested | ? | 3 | 9+ |
| Partnership conversations | ? | 5 | 2–3 committed |
| Cold emails sent | ? | 50 | 75+ |
| **Analytics installed** | **No** | Yes | Yes |
| GSC impressions / clicks | unmeasured | baseline set | trending |
| Fake testimonials live | **3** | **0** | **0** |

Keep the Friday check-in template from `ACTION-PLAN-90DAY.md` §"Weekly Check-in Template" — it's good, unchanged, and the only part of that doc still doing work.

---

## 6. Doc hygiene

| File | Disposition |
|---|---|
| `MARKETING-PLAN.md` | **This file. The only live plan.** |
| `ACTION-PLAN-90DAY.md` | Superseded — Phase 2/3 tasks carried into §3 above; keep for the check-in template + warm-lead history |
| `ACTION-PLAN.md`, `SPRUCE-ACTION-PLAN.md` | Superseded — open items carried forward; the rest verified done |
| `SEO-ACTION-PLAN.md`, `SEO-AUDIT-REPORT.md` | **Superseded and unreliable** — audited the wrong file. Only §2.3 (sentence rewrites) is salvageable |
| `FULL-AUDIT-REPORT.md`, `SPRUCE-FULL-AUDIT-REPORT.md` | Historical audit trail (v1–v3). Keep as record; don't action |
| `COLD-EMAIL-TEMPLATES.md`, `BRAND-GUIDELINES.md`, `N8N-GHL-SETUP.md`, `CODE-VERIFICATION-METHODOLOGY.md` | **Still current** — reference material, not plans |
| `index.html`, `index.html.bak`, `backup html pages/` | **Recommend deleting** — root cause of the bad audit |

**Verification method:** every "done" claim above was checked against the Astro source *and* a live fetch, per `CODE-VERIFICATION-METHODOLOGY.md`. No claim here rests on a previous document's say-so.

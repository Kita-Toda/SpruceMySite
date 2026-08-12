# SpruceMySite — Marketing Plan (Single Source of Truth)

**Consolidated:** 2026-08-12 · **Supersedes:** `ACTION-PLAN.md`, `ACTION-PLAN-90DAY.md`, `SPRUCE-ACTION-PLAN.md`, `SEO-ACTION-PLAN.md`, `SEO-AUDIT-REPORT.md`, `FULL-AUDIT-REPORT.md`, `SPRUCE-FULL-AUDIT-REPORT.md`
**Status:** Day 30 of the 90-day plan (Day 1 = 2026-07-14) · **Customer #1 landed** → Phase 2 (Delivery & Social Proof) is current
**Channels in play:** cold email · local SEO / organic · referral & warm network · paid ads (not yet scoped)
**Last worked:** 2026-08-12 — P0 #1, #2 and the sitemap half of #4 closed; P2 #15 and #18 closed; P2 #14 found already done; legacy root HTML deleted; Brevo audited and 3 cold-email drafts staged (§3b). **Everything still open needs a login, not a commit** — GA4, Meta Pixel, GSC, GBP and email-domain auth. **→ §3a is the step-by-step runbook for all five.**

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

**Fix the root cause:** ✅ **DONE 2026-08-12, on your say-so.** `index.html`, `index.html.bak` and `backup html pages/` are deleted. The pre-Astro corpse that poisoned two audits is gone; the next audit can only find the live Astro source.

> ⚠️ **All three were gitignored, i.e. untracked — `git checkout` will NOT bring them back.** A full copy was archived outside the repo first:
> `…/scratchpad/legacy-html-archive-2026-08-12/`
> Scratchpad is session-scoped and will be cleaned up. **If you want these kept permanently, copy that folder somewhere durable now.** Nothing in the Astro build referenced them (checked), so nothing broke — the build passes.

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

**0. ~~🚨 Logo assets would break the deploy.~~ ✅ FIXED 2026-08-12.** The deleted `logo-leaf.*` / `og-cover.jpg` had five live references (`Nav.astro`, `Footer.astro`, favicon, `og:image`/`twitter:image`, schema `image`). All repointed at the new badge; web-sized derivatives generated (`logo-mark.png/.webp`, `favicon.png`, `apple-touch-icon.png`); build verified with zero dangling references. Detail in `BRAND-GUIDELINES.md` §2.3.

   **Bonus credibility fix caught in passing:** the old `og-cover.jpg` — the image on *every* Facebook/LinkedIn/X share and in the business schema — carried a **"5/5 Google Reviews"** stat. Same fabricated-rating problem as P0 #1 and #2, still going out on every link share three weeks after those were fixed. The regenerated cover replaces it with substantiable figures (10+ Years Experience · 7-10 Days To Launch · Mon-Sat 9am-8pm Support). *This is the third place that unearned rating was hiding — worth assuming there's a fourth.*

   **Full sweep done 2026-08-12** — all 6 live pages fetched and scanned, plus every repo file, `llms.txt`, the n8n→GHL workflow and the Brevo templates. **Four instances total, all now cleared:**

   | # | Where | What it claimed | Status |
   |---|---|---|---|
   | 1 | `Reviews.astro` | 3 invented testimonials, 5 stars each | ✅ removed (`6af88b7`) |
   | 2 | `Stats.astro` | "5★ Reviews On Autopilot" | ✅ reworded (`888178c`) |
   | 3 | `og-cover.jpg` | "5/5 Google Reviews" on every share | ✅ regenerated (`df9dece`) |
   | 4 | **`Hero.astro:23`** | **★★★★★ above the fold, beside "Trusted By Busy Sydney Small-Business Owners"** | ✅ **removed 2026-08-12** |

   **#4 was the worst of the four and had survived all three previous fixes.** Five honey stars sat directly under the hero CTAs — the first thing every visitor and every cold-email prospect saw. No number was attached, which is exactly why it slipped through text-based checks, but five gold stars beside a trust line *is* a rating claim. Replaced with `📍 Bondi Junction Based · 10+ Years Building Sydney Sites` — both facts substantiated by the Person schema and your published address.

   **Also fixed:** `llms.txt` told AI crawlers the homepage contains "testimonials" — untrue since they were removed. Now reads "FAQs".

   **Judgement calls left as-is** (defensible, but you should know they exist):
   - `Services.astro:20,40` — "5-Star Review Machine On Repeat" and "Live 5-Star Google Review Widget". These describe a service *sold to clients*, not SpruceMySite's own rating, so they're legitimate. ⚠️ But "Machine On Repeat" reads as a guaranteed 5-star outcome. Softening to "Review Collection On Autopilot" would remove the implied guarantee.
   - `Reviews.astro:31` — the star block is **hardcoded to 5** inside the render loop. Currently harmless (the array is empty), but the first real testimonial you add will automatically display 5 stars regardless of what the client actually gave you. Make it a per-quote field before adding anyone.
   - `SPRUCE-ACTION-PLAN.md` ~line 392 — a **copy-paste-ready `AggregateRating` block with invented `ratingValue: 5.0` / `reviewCount: 7`**. Superseded doc, but the snippet is live-looking and one paste from publishing a fake rating in structured data. Warning banner added at the top of that file.
   - `n8n-ghl-workflow.json:87` — `googleRating` / `reviewCount` are **clean**: they map the *prospect's* rating into GHL for lead scoring, not any claim about you.

   **Still open (minor):** the badge makes a poor favicon — at 16–32px the stacked words collapse into unreadable marks. A simplified single-letterform variant should be drawn. Functional today, not good. See `BRAND-GUIDELINES.md` §2.3.

**1. ~~Replace the fake testimonials.~~ ✅ DONE 2026-08-12** (commit `6af88b7`). All three invented quotes ("Jane D.", "John D.", "Mia R.") are pulled. `Reviews.astro` now holds an empty `quotes` array and renders nothing; the section is unmounted from `index.astro` and the Nav link removed. Restore instructions are in the file header.

   **Still open — the refill:** one *real* permissioned quote from Customer #1, gated on the triple ask (P1 #7 below). Rendering resumes automatically the moment an entry is added to the array. Until then the site shows no testimonials, which is the correct state — fabricated ones breach ACL s18/s29 (misleading conduct / false testimonials), an active ACCC enforcement focus, and "we didn't know" is not available to a marketing agency.

**2. ~~Substantiate or cut the stat bar.~~ ✅ DONE 2026-08-12.** `Stats.astro` presented four service specs as company performance statistics. Reworded, not deleted — three were true claims mislabelled:
   - "10+ Years Building Sydney Sites" → **"Years' Industry Experience"**. The 10+ years is Christian's personal experience (already asserted in the Person schema, `Layout.astro:78`); the old label implied SpruceMySite itself had traded 10 years. *Unverified by me — it's your own standing claim in two places. Confirm it's accurate.*
   - "Lead Response Time" → **"Auto-Reply To Your New Leads"**. 60s is the spec of the lead engine you *build for clients* (`LeadEngine.astro:15`), not a measured SpruceMySite metric. **Still gated on the n8n → GHL workflow actually being activated** — see §4.
   - "Days To Launch" — unchanged. A forward-looking offer, consistent with the FAQ.
   - "5★ Reviews On Autopilot" → **"6 Days A Week You Can Reach Us"**. The old figure read as SpruceMySite's own rating with zero reviews on record. The review service is still sold in `Services.astro`; it just can't appear as a rating. The replacement is substantiated by your published Mon–Sat 9am–8pm hours in the schema.

   A comment in `Stats.astro` now records the rule for whoever edits it next.

**3. Connect analytics — you are currently flying blind.** `src/components/Analytics.astro` is a *sales* section listing tools you sell; it installs no tracking. Live HTML has **no GA4 ID and no Meta Pixel**. Worse, line 112 tells every visitor: *"Tracking IDs Aren't Connected Yet — The Placeholders Are In Place And Ready To Switch On."* On the site of an agency whose service #5 is Google Analytics setup.
   - Install GA4 + Meta Pixel for real, verify in Realtime, then delete that sentence.
   - **This gates paid ads entirely** — no pixel, no conversion tracking, no retargeting, no ad spend.

**4. Verify Google Search Console + submit the sitemap.** Every SEO decision below is guesswork without impression/query data. **This half is on you — I can't verify or claim a GSC property.**

   *`sitemap.xml` half is ✅ DONE 2026-08-12:* `lastmod` refreshed to each page's actual last-change date (homepage 12 Aug, service pages 27 Jun, policies 3 Aug) rather than a blanket today, and the two **missing** URLs — `/privacy-policy/` and `/terms-and-conditions/` — were added. The sitemap had been advertising 6 of the site's 8 pages.

### 🟠 P1 — Phase 2 of the 90-day plan (Days 31–60, you are at Day 30)

Customer #1 is signed, so the 90-day plan's Phase 2 is now the live sequence. Carried forward verbatim in intent.

*Note: the old 90-day doc contradicts itself on delivery — Phase 1 sets a hard "non-negotiable" Day-27 cap, then Phase 2 schedules the same delivery across Days 31–56. **I've adopted the Phase 2 dates** below, since Day 27 has passed and the later schedule is the realistic one. If Customer #1 is already delivered, jump straight to #6.*

### My recommendation on Customer #1 (you asked, 2026-08-12)

You didn't need to tell me the delivery status, because the advice is the same either way. Four points, in order of how time-sensitive they are:

**1. Capture the before-metrics THIS WEEK — before anything ships.** This is the one that expires. Task #8 says "case study with numbers", but a number needs a baseline, and the baseline is destroyed the moment the new site goes live. Screenshot and record right now: their current site (full-page grab), current Google rankings for 3–5 target terms, current monthly enquiry volume (just ask them — "roughly how many enquiries a month are you getting now?"), current GBP photo/review count. Ten minutes of work today that you cannot do at all in three weeks. **Nothing else in the existing plan covers this, and it's why I'd rank it above the rest.**

**2. Delivery *is* the marketing task right now.** With one customer, no reviews and no case study, there's no top-of-funnel worth optimising — every P2 SEO item is a bet that pays out in months, while Customer #1 pays out in a testimonial, a review, a case study and referrals. Don't let the backlog below pull you off delivery. If you only do one thing this fortnight, ship them.

**3. Move the triple ask earlier — to the acceptance conversation itself, not Day 55.** The plan schedules sign-off (#6, Day 54) and the ask (#7, Day 55) as separate events. Make them one. The moment a client says "this is great" is peak goodwill, and it decays fast — a week later you're a vendor sending a favour request. Ask in the room, in this order: **(a)** case-study permission, **(b)** a testimonial quote, **(c)** the Google review. Reverse order kills it — the review is the biggest ask because it's public and permanent.

**4. Make the review one click.** Send the direct GBP review link by SMS *while you're still with them*, not in a follow-up email. Which means **GBP verification (#11 / §3a D) needs to be started now, not at Day 62** — it takes days to verify by post, and if it isn't live at acceptance you lose the single best moment to ask.

**Net effect on the schedule below:** #11 (GBP) moves **before** #7–#9, and a new #4a lands this week. The rest holds.

| # | Action | When |
|---|---|---|
| **4a** | **Capture Customer #1's before-state** — site screenshots, rankings for 3–5 terms, current monthly enquiry count, GBP baseline | **This week — expires at launch** |
| **11 (moved up)** | Start GBP claim + verification so the review link exists before acceptance | **Start now** (post takes days) |
| 5 | Deliver Customer #1 to spec, no scope creep | as scheduled |
| 6+7 (merged) | Acceptance **and** the triple ask, same conversation | at handover |

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

14. ~~**`Service` schema per service page.**~~ ✅ **ALREADY DONE — my earlier entry was wrong.** I checked `ServiceLayout.astro` and stopped there. The layout has no JSON-LD block, but it doesn't need one: it exposes a `<slot name="head">`, and **all five** service pages pass their own `@graph` through it — a `Service` node (with `provider` `@id`-linked to `#business` in the root graph, `areaServed`, `serviceType`, `audience`) plus a `BreadcrumbList`. Verified in source and in `dist/`. Nothing to do. *(SPRUCE #20 was stale too.)*
15. ~~**Split the two long sentences.**~~ ✅ DONE 2026-08-12. `FAQ.astro:10` (40 words) and `KeysBand.astro:9` (38 words) are now 3 sentences each, longest ~20 words. Adapted from `SEO-ACTION-PLAN.md` §2.3, but not taken literally — that doc chopped them into five 6-word fragments and used US "Customize". Kept the site's Title Case and AU spelling. Build verified.
16. **E-E-A-T in the About section** — LinkedIn is in the footer but not in About; no years in business, no client outcomes. Add once Customer #1's numbers exist.
17. **`AggregateRating` schema** — *gated: needs 5+ real Google reviews.* Do not add before then (see #1).
18. ~~**Extend `meta robots`**~~ ✅ DONE 2026-08-12. `Layout.astro:114` now serves `index, follow, max-image-preview:large, max-snippet:-1` across all 8 pages. Build verified.
19. **Blog / resource content** — 3–5 posts on long-tail intent: "How much does a website cost in Sydney", "Get your business on Google Maps in Bondi Junction", "Web design vs DIY Squarespace". Each 1000+ words, 3–5 internal links to service pages.
20. **Core Web Vitals baseline** — never captured (PageSpeed was rate-limited during the June audits). Run once and record.

### ⚪ P3 — Deferred, deliberately

21. **CSP header** — needs allowlisting for cdnjs (GSAP/animate.css), Google, Meta. Every audit deferred it; keep deferring until there's ad spend worth protecting.
22. **`twitter:site` / `twitter:creator`** — *gated: no X account exists.* 5 minutes if one is created.

### 🚧 Paid ads — gated, not designed

You flagged paid ads as in play, but **no existing doc covers them** and there's no budget, target CPA, or offer defined. Designing that campaign is beyond "audit + consolidate", and it is hard-blocked by backlog #3 (no pixel) and #1–2 (ads driving traffic to fake testimonials compounds the ACL exposure).

**To unblock, I need:** monthly budget · Google Search vs Meta · target service and geo · what counts as a conversion (form fill? call?) · target cost per lead. Say the word and I'll build the campaign — message map, keyword/audience sets, landing-page mapping, budget split, KPI table.

---

## 3a. Install runbook — the remaining P0, step by step

Everything left in P0 lives outside this repo and needs your logins. This is the exact sequence. **Each block says what you do vs. what I do** — hand me the IDs and the code side is minutes.

**Ground rule, non-negotiable:** no placeholder IDs get committed. The site currently *tells visitors* the tracking isn't connected (`Analytics.astro:112`) — shipping fake IDs to silence that would be the same failure twice. Code goes in only when a real ID exists.

### A. GA4 — gates everything measurable

| Step | Who | Detail |
|---|---|---|
| A1 | **You** | analytics.google.com → check if a property for sprucemysite.com.au already exists. If yes, skip to A3. |
| A2 | **You** | If not: Admin → Create property. Name "SpruceMySite", timezone **Australia/Sydney**, currency AUD. Business objective: "Generate leads". |
| A3 | **You** | Admin → Data streams → Web → `https://www.sprucemysite.com.au`. Leave Enhanced Measurement **on**. Copy the **Measurement ID** (`G-XXXXXXXXXX`). |
| A4 | **Me** | Paste it here and I add the gtag snippet to `Layout.astro` `<head>` — one place, covers all 8 pages. |
| A5 | **You** | Load the live site, check GA4 → Reports → **Realtime** shows your visit. Nothing counts until you see yourself. |
| A6 | **Me** | Mark the Quote form submit as a **conversion event** (`generate_lead`) — the only GA4 number that matters here is leads, not pageviews. |
| A7 | **Me** | Delete the "Tracking IDs Aren't Connected Yet" line at `Analytics.astro:112`. **Only after A5 passes.** |

### B. Meta Pixel — only needed if you'll run Meta ads

Skip entirely if paid is Google-only. If yes:

- **B1 (you)** business.facebook.com → Events Manager → check for an existing pixel. Create one if not ("SpruceMySite"). Copy the **Pixel ID** (15–16 digits).
- **B2 (me)** Base pixel into `Layout.astro`, plus a `Lead` event on Quote form submit.
- **B3 (you)** Verify with the *Meta Pixel Helper* Chrome extension on the live site.
- **B4 (both)** Domain verification in Business Settings — needs a DNS TXT record or a meta tag. Tell me which and I'll add the tag if that's the route.

### C. Google Search Console — needed before any SEO judgement

- **C1 (you)** search.google.com/search-console → Add property. **Use the Domain property** (`sprucemysite.com.au`), not URL-prefix — it covers www, non-www, http and https in one.
- **C2 (you)** Verification is a DNS TXT record at your registrar. *(If you'd rather use the HTML-file method, send me the file and I'll drop it in `public/` — but Domain + DNS is the better property type, so try that first.)*
- **C3 (you)** Once verified: Sitemaps → submit `https://www.sprucemysite.com.au/sitemap.xml`. It is current as of 12 Aug and now lists all 8 pages.
- **C4 (you)** Also submit under Settings → Crawl stats nothing needed; just check **Pages → Indexed** in ~1 week. Expect all 8. Anything excluded, send me the reason string.
- **C5 (me)** Once ~2 weeks of query data exists, I'll pull the real keyword baseline — that replaces every guess in §3 P2.

### D. Google Business Profile — the highest-ROI item on this page for local

For "web designer Bondi Junction"-type searches, GBP outranks anything on-site. Detail already specced at P1 #11.

- **D1 (you)** business.google.com → claim. Primary category **Web Designer**; secondary **Internet Marketing Service**, **Search Engine Optimization Agency**.
- **D2 (you)** Hours **must match** the schema: Mon–Sat 9am–8pm. 5+ photos. Service area: Sydney.
- **D3 (you)** Postcard/phone verification — this takes days, so **start it before the others**; it's the only step with a mandatory wait.
- **D4 (me)** Once live, add the GBP URL to `sameAs` in the `ProfessionalService` node (`Layout.astro`), linking the site and the listing.

### E. Email sending domain — do this before any cold email goes out

**Target address: `info@sprucemysite.com.au`** (your instruction, 2026-08-12 — and it's the right call: `info@` is already the canonical contact address everywhere else on the site — `Layout.astro` schema, `Contact.astro`, `Quote.astro`, both policy pages, `llms.txt`, `BRAND-GUIDELINES.md`. One address, everywhere. My earlier `christian@` suggestion was wrong and is withdrawn.)

Your Brevo sender is currently `sprucemysite@gmail.com`. Sending business mail "from" a gmail.com address via Brevo fails DMARC alignment and lands in spam or gets rejected outright — Gmail and Yahoo both enforce this for bulk senders now.

- **E1 (you)** Brevo → Senders, Domains & Dedicated IPs → **Authenticate `sprucemysite.com.au`**. Brevo gives you SPF, DKIM and DMARC records to add at your registrar.
- **E2 (you)** Add and verify the sender **`info@sprucemysite.com.au`**. Brevo emails a confirmation link to that inbox, so it must be able to receive mail before you start.
- **E3 (you)** Point the three staged drafts (§3b) at that sender **and set reply-to to `info@sprucemysite.com.au`**. Nothing sends until you do.

**Suggested order:** D3 first (it waits on post), then C, then A, then E, then B if Meta is in scope.

---

## 3b. Brevo — audited and staged (2026-08-12)

You asked for the cold-email track staged, not sent. Done. **Nothing has been sent and nothing can send itself.**

**Baseline found — the account is effectively empty:**

| | |
|---|---|
| Plan | Free — **300 emails/day** cap |
| Senders | 1 — `sprucemysite@gmail.com` → **must become `info@sprucemysite.com.au`**, see §3a E |
| Lists | 1 — "Your first list", **1 contact** |
| Campaigns ever sent | **0** |
| Templates | 0 → **3, created today** |

**Staged (all `isActive: false` = draft, tagged `cold-outreach-draft`):**

1. **Cold Outreach A** — Service Providers · *"Quick question about your site [FIRST_NAME]"*
2. **Cold Outreach B** — Local Businesses · *"[BUSINESS_NAME] + Local Google ranking"*
3. **Cold Outreach C** — Startups & Solopreneurs · *"[STARTUP_NAME] — web + early traction"*

> 🔧 **Manual step — the templates' sender/reply-to still say `sprucemysite@gmail.com`.** The Brevo integration available here can *create* templates but has no update or delete operation, so I can't change this from my side. It's 3 quick edits in the UI: **Campaigns → Templates → [each template] → Settings → set From and Reply-to to `info@sprucemysite.com.au` → Save.** Do it after E2 verifies that sender. The message *bodies* need no change — they carry the name, address and website, and never print an email address.

Copy is verbatim from `COLD-EMAIL-TEMPLATES.md` with three deliberate changes:

- **`[BRACKETS]` kept as-is**, not converted to Brevo merge tags. The source doc's workflow is manual per-prospect personalisation, and a visible `[FIRST_NAME]` in a mis-sent email is obviously broken — a silent empty merge tag is not. *Say the word if you'd rather have real merge fields.*
- **Signature block added** — real name, business address, website. The Spam Act 2003 requires accurate sender identification on commercial electronic messages.
- **Opt-out line added** — *"If this isn't relevant, just reply 'no thanks' and I won't follow up again."* The Act requires a functional unsubscribe, and transactional templates don't get Brevo's automatic unsubscribe footer.

> ⚠️ **Two things to know before you send.** (1) Brevo's Anti-Abuse Policy prohibits cold/unsolicited lists on marketing campaigns — sending bulk cold outreach as Brevo *campaigns* risks account suspension. These are staged as **transactional templates**, i.e. one-to-one sends, which fits both Brevo's rules and the source doc's own advice ("send from your real email, not a bot"). (2) Australian B2B cold email is legal under the Spam Act's **inferred consent** carve-out only when the address is conspicuously published, relates to that person's role, and your message is relevant to it — plus accurate ID and working opt-out, both now in the templates. Scraped or bought lists don't qualify. **The send decision is yours; I've made the drafts compliant, not the list.**

---

## 4. Unknowns — please confirm (I can't verify these from the repo)

These are genuinely unknown, not assumed either way. Each one changes the ranking above.

- [ ] **Google Search Console** — property verified? sitemap submitted?
- [ ] **Google Business Profile** — claimed/verified, or still nothing?
- [ ] **Cold email** — how many of the planned 50 actually went out? Any replies? *Partially answered 2026-08-12: **through Brevo, zero** — the account has never sent a campaign (§3b). Manual sends from Gmail are still unaccounted for, so the number I need from you is "how many did you send by hand".*
- [ ] **n8n → GoHighLevel** — the workflow JSON is built and configured, but is it *imported and activated* in n8n? Has a real lead synced end-to-end? (`N8N-GHL-SETUP.md` says "Ready to implement".)
- [ ] **Customer #1** — who, what scope, delivery status, and are they likely to say yes to a case study + Google review?
- [ ] **GA4 / Meta Pixel / GSC / GBP** — do the accounts exist (just not installed), or do they need creating too? *Live-verified 2026-08-12: the site itself serves **no** gtag, no GTM and no Meta Pixel, and still displays the "Tracking IDs Aren't Connected Yet" line. Account existence is the open half — **§3a is the runbook that covers both paths**, so it's actionable either way.*
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
| ~~Fake testimonials live~~ | ~~3~~ **0 ✅** | 0 | 0 |
| Real testimonials live | 0 | 1 | 2 |

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
| ~~`index.html`, `index.html.bak`, `backup html pages/`~~ | ✅ **Deleted 2026-08-12** — root cause of the bad audit. Archived copy noted in §1 |

**Verification method:** every "done" claim above was checked against the Astro source *and* a live fetch, per `CODE-VERIFICATION-METHODOLOGY.md`. No claim here rests on a previous document's say-so.

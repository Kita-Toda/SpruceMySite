# Cold Email Templates — SpruceMySite

**Version 2 · 13 August 2026**

Three opening templates for three prospect types, plus one follow-up. Personalise the [BRACKETS] for each prospect.

> **v2 changelog —** Every template now carries the Spam Act sender-identification block and opt-out line (v1 had neither, which made it unsendable as written — see §4). Copy rewritten to the brand voice in `BRAND-GUIDELINES.md` §5. Both negging openers removed. One follow-up template added. The booking link is now in the emails. Success metrics replaced — v1's 25% reply target was roughly ten times reality and would have made a healthy channel look like a failure.

---

## 1. The four templates

Each one is short on purpose. One ask, one link, no attachments, plain text — these are one-to-one sends and should read like it.

[RESEARCH_LINE] is the part that does the work. One specific, **true** sentence proving you looked at their business before writing. If you can't write that line, don't send the email.

---

### Template A: Service Providers (accountants, marketers, consultants)

**Subject:** [BUSINESS_NAME] — one thought on your site

Hi [FIRST_NAME],

[RESEARCH_LINE]

I'm Christian. I build websites for small service businesses around Sydney, out of Bondi Junction — ten years of it now. Most of my clients are people who are excellent at their actual job and would rather not lose a Sunday to their website.

Is yours doing what you want it to, or is it one of those things that's been on the list a while?

If it'd help to talk it through, here's fifteen minutes in my calendar:
https://api.sprucemysite.com.au/widget/booking/IDovJNXAiGWPcSZOYddc

If this isn't relevant, just reply "no thanks" and I won't follow up again.

Christian Alba
SpruceMySite · Web design & digital marketing
Bondi Junction NSW 2022 · sprucemysite.com.au
ABN 31 567 153 201

---

### Template B: Local Businesses (tradies, salons, retail)

**Subject:** [BUSINESS_NAME] and the Google Maps side of things

Hi [FIRST_NAME],

[RESEARCH_LINE]

I'm Christian — I build websites and set up local search for small businesses around Sydney, based in Bondi Junction.

With most [INDUSTRY] businesses the work is the unglamorous Google side: the Business Profile, the map listing, making sure the website actually backs it up. It's the bit almost nobody gets around to doing properly.

Where do most of your customers come from at the moment — Google, or word of mouth?

Fifteen minutes if you want to talk it over:
https://api.sprucemysite.com.au/widget/booking/IDovJNXAiGWPcSZOYddc

If this isn't relevant, just reply "no thanks" and I won't follow up again.

Christian Alba
SpruceMySite · Web design & digital marketing
Bondi Junction NSW 2022 · sprucemysite.com.au
ABN 31 567 153 201

---

### Template C: Startups & Solopreneurs

**Subject:** [STARTUP_NAME] — the website side

Hi [FIRST_NAME],

[RESEARCH_LINE]

I'm Christian, I build websites for founders and small teams in Sydney, from Bondi Junction. The brief is usually some version of "make it clear what we actually do" — which is mostly clarity and trust, not flash.

Where's the site at for you right now — DIY, back burner, or sorted?

Fifteen minutes if it's useful:
https://api.sprucemysite.com.au/widget/booking/IDovJNXAiGWPcSZOYddc

If this isn't relevant, just reply "no thanks" and I won't follow up again.

Christian Alba
SpruceMySite · Web design & digital marketing
Bondi Junction NSW 2022 · sprucemysite.com.au
ABN 31 567 153 201

---

### Template D: The one follow-up

Send **once**, about four business days after the opener, and only to people who never replied. Reply to your original email so it threads.

**Subject:** Re: [ORIGINAL_SUBJECT]

Hi [FIRST_NAME],

Floating this back up in case it got buried — no stress either way.

[ONE_SENTENCE] — the single most useful thing from the first email, said differently.

https://api.sprucemysite.com.au/widget/booking/IDovJNXAiGWPcSZOYddc

If it's a no, "no thanks" is a perfectly good reply and I'll leave you to it.

Christian Alba
SpruceMySite · Web design & digital marketing
Bondi Junction NSW 2022 · sprucemysite.com.au
ABN 31 567 153 201

**Two follow-ups is where cold outreach starts annoying people. One is plenty.** After this, they go back in the pile — not into a third email.

---

## 2. How to use these

1. **Pick the template that matches their business**, then write the [RESEARCH_LINE] first. If you can't say something specific and true about them, they're not a prospect yet.
2. **Replace every [BRACKET].** A visible [FIRST_NAME] in a sent email is the most expensive typo in outreach.
3. **Keep the compliance block intact.** Signature and opt-out line are not optional and not decoration — see §4.
4. **One ask, one link.** Don't add a second CTA, a PDF, or a portfolio dump.
5. **Send from `info@sprucemysite.com.au`**, one to one, as a real email from a real person.

### Don't say

The site had to have fabricated claims stripped out of it (`MARKETING-PLAN.md` §3). Cold email is an advertisement under Australian Consumer Law in exactly the same way, and it's worse than the website: it arrives unsolicited, in writing, with your name on it.

- **No ranking or results promises.** Not "we'll get you on page one", not "you'll get more leads". Describe the work, not the outcome.
- **No invented numbers.** No "our clients see 40% more enquiries" — there is no such data.
- **No stars, ratings, or testimonials** until real ones exist. Same rule as the website.
- **No fake familiarity.** No "just following up on my last email" when there wasn't one, no "as discussed".

The two claims you can make freely, because both are substantiated: **10+ years** and **Bondi Junction**.

---

## 3. Sending rules

These aren't preferences — most of them come from decisions already made in `docs/designs/90day-sales-plan-ceo-review.md` (risks R3 and R4).

**Before the first batch:**

- [ ] **Re-stage the three Brevo drafts against this version.** ⚠️ They were created from the **v1 copy** — the negging openers and the rest of it. Fixing only the sender and hitting send would put v1 back in front of real prospects. Bodies must be replaced by hand from §1 above.
- [ ] Sender is `info@sprucemysite.com.au`, verified. *(Brevo's three staged templates still say `sprucemysite@gmail.com` — three edits in the UI, see `MARKETING-PLAN.md` §3b.)*
- [ ] SPF, DKIM and DMARC verified for the sending domain.
- [ ] One test send through mail-tester.com, scoring 8+.

> **On re-staging: edit the existing drafts in the Brevo UI, don't have them recreated.** The Brevo integration available here can create templates but has no update or delete operation — so generating "fixed" copies would leave you with six templates and no way to remove the stale three. Same reason the sender fix is a manual step. There is also now a fourth template (D, the follow-up) that was never staged at all.

**Every batch after that:**

- **5–10 emails a day, maximum.** A cold domain that suddenly sends 20+ a day gets filed as spam, and spam-foldering is invisible — you'll think nobody's interested when nobody's receiving.
- **One to one, never as a Brevo campaign.** Brevo's anti-abuse policy prohibits cold lists on marketing campaigns; sending these as campaigns risks the account.
- **Honour every opt-out within 5 business days.** Tag them in GHL. "No thanks" means never again — including the follow-up, and including next quarter.

**The list rule.** Australian B2B cold email is lawful under the Spam Act's *inferred consent* carve-out only when the address is **conspicuously published**, **relates to that person's role**, and **your message is relevant to that role**. A business's published contact address qualifies. Scraped lists, bought lists, and personal addresses don't. If you're unsure whether an address qualifies, it doesn't.

---

## 4. Why the compliance block is in every template

The Spam Act 2003 (Cth) requires every commercial electronic message to carry **accurate sender identification** and a **functional unsubscribe**. There's no exemption for B2B, for one-to-one sends, or for "it's just an intro". ACMA enforcement is active and the penalties are material.

- **Sender ID** — the signature block: real name, business name, address, website, ABN.
- **Unsubscribe** — the opt-out line. It's plain English rather than a link because these are one-to-one sends and a "no thanks" reply is a functional opt-out. It's worded identically to the Brevo drafts on purpose; keep it that way.

`legal/sprucemysite-legal-review.md` §8 covers the related exposure when you send on a *client's* behalf, which is a different problem with a different fix (a warranty in the ToS).

---

## 5. What to expect

**v1 of this doc targeted a 25% reply rate. That was roughly ten times reality**, and the damage runs one way: you'd hit a perfectly healthy 3%, conclude cold email doesn't work, and stop.

Planning assumptions for well-targeted, personalised, low-volume B2B outreach — these are conservative planning figures, not measured industry data:

| Stage | Plan for | Out of 60 emails |
|---|---|---|
| Replies of any kind | 2–6% | 1–4 |
| Of those, actually interested | roughly a third | 0–1 |
| Calls booked | — | 0–1 |

*The 90-day CEO review (R7) sets the "Cold Reply Rate" benchmark at 4–6%. The range here starts lower on purpose — 4% is a reasonable target to be measured against, 2% is what a first batch off a new domain can genuinely look like. Both are the same order of magnitude. Neither is 25%.*

**Read that honestly: one batch of 60 might produce a single conversation, and that is a normal result, not a failed experiment.** Volume and consistency are what make this channel work, not a clever subject line.

Two things follow from that:

- **A "no thanks" is a good outcome.** It's a clean opt-out, it costs you nothing, and it keeps you compliant. Count replies, not just positive ones.
- **Judge the channel at 200+ sends, not 20.** At 5–10 a day, 60 emails is one to two weeks of work. Track sent / replied / interested / booked in the spreadsheet, per template, so you can tell which one is actually pulling.

### If it's not working

After 100+ well-researched sends with near-zero replies, change **one** variable at a time, in this order:

1. **The list.** Wrong people is the most common cause by a distance, and no copy fixes it.
2. **The [RESEARCH_LINE].** Generic opener means it reads as a mailshot regardless of what follows.
3. **The subject line.** Test [BUSINESS_NAME] + one concrete thing against the current versions.
4. **The ask.** A fifteen-minute call is a real commitment to a stranger; "worth me sending you a couple of thoughts?" is smaller.

Copy is last on that list for a reason. It's the thing everyone rewrites first and the thing that matters least.

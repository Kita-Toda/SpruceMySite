# SpruceMySite — Legal Pack Review

**Reviewed:** 2 August 2026
**Documents:** Terms of Service, Privacy Policy, Return & Refund Policy, EULA
**Jurisdiction:** New South Wales, Australia

> **Not legal advice.** This is a structured gap analysis prepared to be handed to a NSW commercial lawyer. Suggested wording below is a starting point for that conversation, not settled drafting.

---

## Priority order

| # | Issue | Document | Risk |
|---|---|---|---|
| 1 | ToS and EULA contradict on code ownership | ToS §5 / EULA §1, §7 | **Critical** |
| 2 | "AS IS" disclaimer with no ACL carve-out | EULA §5 | **Critical** |
| 3 | Unfair contract terms exposure | EULA §6, §7; ToS §7 | **Critical** |
| 4 | No retainer/subscription terms at all | ToS (whole) | **Critical** |
| 5 | GST registration status hard-coded | ToS §4 | High |
| 6 | Refund Policy misstates the ACL | Refund §1 | High |
| 7 | No client data ownership / exit provisions | ToS (missing) | High |
| 8 | No Spam Act warranty and indemnity | ToS (missing) | High |
| 9 | No suspension right for non-payment | ToS §4, §7 | Medium |
| 10 | Refund Policy conflicts with ToS on termination | Refund §3 / ToS §7 | Medium |
| 11 | Unfilled placeholder | ToS §3 | Medium |
| 12 | "Work for Hire" — US concept | ToS §5 | Medium |
| 13 | Wrong tech stack described | EULA §3, ToS §5 | Low |
| 14 | Missing boilerplate | All | Low |
| 15 | No ABN / entity type stated | All | Low |

---

## 1. Code ownership contradiction — **Critical**

**ToS §5:** *"the Client shall own the final delivered website design and code"*
**EULA §1:** *"grants the Client a non-exclusive, perpetual, worldwide, royalty-free license to use, modify, and distribute"*
**EULA §7:** *"This license terminates automatically if the Client breaches any terms"*

Ownership and licence are mutually exclusive. You cannot own something and simultaneously hold a revocable licence to it. Worse, EULA §7 means a client who breaches any term — including a late payment — loses the legal right to run their own website. That is both internally incoherent and an obvious unfair-term candidate.

Contract ambiguity is construed against the drafter (*contra proferentem*). That's you.

**Pick one model.**

**Model A — Client owns (recommended for a $1,997/mo retainer; it's what clients think they're buying):**

> On payment in full of all amounts owing for a project, SpruceMySite assigns to the Client all intellectual property rights in the bespoke design and code created specifically for that project ("Project Materials").
>
> Project Materials do not include SpruceMySite Background IP, being any tools, libraries, components, templates, code or know-how owned or developed by SpruceMySite independently of the project. SpruceMySite grants the Client a perpetual, worldwide, non-exclusive, irrevocable, royalty-free licence to use SpruceMySite Background IP solely as incorporated in the delivered website. This licence survives termination of the agreement.
>
> Project Materials do not include third-party or open-source components, which remain subject to their own licences.

Then **delete the EULA entirely**, or reduce it to a short "Background IP Licence" schedule. Two documents describing the same rights differently is a liability, not thoroughness.

**Model B — You own, client licenses:** viable but a harder sell, and inconsistent with your current ToS. If you go this way, the licence must be irrevocable so a payment dispute never takes a client's website offline.

---

## 2. "AS IS" warranty disclaimer — **Critical**

**EULA §5** disclaims all warranties including merchantability and fitness for purpose, with no ACL carve-out.

Two problems:

1. Under the ACL, a business acquiring services for **under $100,000** is a "consumer" (threshold raised from $40,000 on 1 July 2021). Nearly every client you will sign is covered. The consumer guarantees — due care and skill, fitness for purpose, reasonable time — cannot be excluded.
2. Representing that those rights don't exist is itself a contravention (ACL s29(1)(m)). The ACCC has pursued this specific conduct — Valve, Fitbit and others — with substantial penalties.

Your ToS §6 has the right hedge. The EULA doesn't, and a client reading the EULA has no reason to import the ToS wording.

**Add to every liability and warranty clause across all four documents:**

> Nothing in this agreement excludes, restricts or modifies any guarantee, warranty, right or remedy conferred by the Competition and Consumer Act 2010 (Cth), including the Australian Consumer Law, which cannot lawfully be excluded, restricted or modified. To the extent permitted by law, SpruceMySite's liability for breach of a non-excludable guarantee in relation to services is limited, at SpruceMySite's option, to resupplying the services or paying the cost of having them resupplied.

Then delete the bare "AS IS" sentence.

---

## 3. Unfair contract terms — **Critical**

Your documents are standard form contracts offered to small businesses. The regime that applies:

- Since **9 November 2023**, proposing, applying or relying on an unfair term is **prohibited** — not merely voidable — and attracts civil penalties.
- Small business threshold: fewer than **100 employees** OR turnover under **$10 million**. The old $300,000 / $1 million contract-value cap was **removed entirely**.
- Body corporate penalty: the greater of **$100 million** (doubled from $50m in March 2026), three times the benefit, or 30% of adjusted turnover. Individuals: **$2.5 million** per contravention.
- **Each unfair term in each contract is a separate contravention.** A flawed template used across every client multiplies exposure.

Realistically nobody is fining a Bondi Junction agency $100M. The practical risk is a client voiding the term mid-dispute, or a Fair Trading complaint. But the fix is cheap and the exposure is asymmetric.

**Terms in your pack that would be tested:**

| Term | Problem | Fix |
|---|---|---|
| EULA §6 — client indemnifies you, uncapped | One-way, unlimited, no proportionality | Make it mutual; carve out your own negligence; cap at a stated figure |
| EULA §7 — licence auto-terminates on any breach | Disproportionate; kills their website over a minor breach | Delete, or limit to material unremedied breach after 30 days' notice |
| ToS §7 — termination consequences only stated for client | Asymmetric | State what happens if *you* terminate: refund unearned fees, hand over work-in-progress |
| ToS §6 — cap at fees paid, no ACL carve-out | Enforceable but needs the savings clause | Add the wording in §2 above |
| ToS §4 — 1.5%/month compounding from day 7 | ≈19.6% p.a.; arguably a penalty | "1.5% per month calculated daily from 14 days after the invoice date, or the maximum rate permitted by law, whichever is lower" |

---

## 4. No retainer terms — **Critical**

Your core offer is the **Venue Growth System at $1,997/month**. The ToS is written entirely for one-off projects: deposit, completion, delivery.

Nothing in the pack addresses:

- Minimum term and what happens after it
- Notice period to cancel (30 days? 60?)
- Auto-renewal, and the disclosure required to make it fair
- Billing in advance vs arrears; failed payment handling
- Pausing or suspending the retainer
- Annual price increases
- What "included" means each month, and what's a variation
- **What happens to client data and assets on exit** — see §7 below

Every one of these becomes a fight the first time a client leaves. Get them written before you sign anyone, not after.

**Minimum additions:**

> **Term.** The Retainer runs for an initial term of [3] months and continues month to month thereafter until cancelled.
>
> **Cancellation.** Either party may cancel on 30 days' written notice, effective at the end of the then-current billing month. Fees for the notice period remain payable. Fees already paid for a completed month are not refundable, as the services for that month have been supplied.
>
> **Billing.** Fees are payable monthly in advance by direct debit or card. If a payment fails, SpruceMySite may suspend services after 7 days' written notice, and will resume promptly on payment.
>
> **Price.** SpruceMySite may increase the monthly fee once in any 12-month period on 60 days' written notice. If the Client does not accept the increase, the Client may cancel before it takes effect without further charge.

---

## 5. GST statement — High

**ToS §4:** *"Sprucemysite is not registered for GST."*

You must register within 21 days of your GST turnover reaching or expecting to reach **$75,000**. That's four Venue Growth System clients. Hard-coding a turnover fact into a public document you'll forget to update creates a live misstatement the moment you cross the line — and clients who need to claim input tax credits will price off it.

**Replace with:**

> All fees are exclusive of GST. Where GST applies, it will be added to the invoiced amount and shown separately. SpruceMySite's current GST registration status is stated on each tax invoice.

---

## 6. Refund Policy misstates the ACL — High

**Refund §1:** *"digital services and custom software development are generally considered 'non-returnable' once work has commenced, as they are not physical goods."*

There is no "non-returnable" category for services under the ACL. Consumer guarantees apply to services regardless of whether they're digital, custom, or already started. Telling a client otherwise in a published policy risks being misleading conduct in its own right — the same s29(1)(m) problem as the EULA.

**Replace §1 with:**

> Because our services are custom-built for each client, we do not offer refunds for change of mind once work has commenced. This does not affect your rights under the Australian Consumer Law, which continue to apply. Where we fail to meet a consumer guarantee, you are entitled to a remedy — see section 2.

---

## 7. Client data ownership and exit — High, missing entirely

You run client CRM, booking and automation infrastructure through GoHighLevel. Nothing in the pack says who owns what when a client leaves. In agency work this is the most common cause of an ugly exit.

**Needs to be written down:**

- **Contact database** — the client's, unambiguously. State it.
- **Export on exit** — you'll provide a CSV export of their contacts, bookings and message history within [10] business days of termination, once accounts are settled.
- **Tracking / SMS phone numbers** — who owns the number, and whether it ports out.
- **The GHL sub-account** — is it under your agency licence? If so, say plainly that the sub-account cannot transfer, but the data can be exported. Clients assume otherwise and are furious when they find out at the wrong moment.
- **Domain and hosting** — who holds the registration; how it transfers.
- **Retention window** — how long you keep their data after exit before deleting it.
- **Third-party dependency** — if GoHighLevel materially changes its pricing or terms, or ceases operating, what happens to the retainer.

---

## 8. Spam Act warranty and indemnity — High, missing

If you send email or SMS campaigns through GHL on a venue's behalf, you are the sender or at minimum an accessory. The Spam Act 2003 (Cth) requires consent, sender identification and a functional unsubscribe. ACMA penalties are material and enforcement is active.

Right now that risk sits entirely with you, because nothing in the pack pushes it back to the client whose list it is.

**Add to the ToS:**

> **Client Content and Contacts.** The Client warrants that: (a) all content it supplies is owned by it or properly licensed, and does not infringe any third party's rights; and (b) it holds all consents required under the Spam Act 2003 (Cth), the Do Not Call Register Act 2006 (Cth) and the Privacy Act 1988 (Cth) for any contact list it supplies or directs SpruceMySite to message on its behalf.
>
> The Client indemnifies SpruceMySite against any claim, penalty, loss or cost arising from a breach of this warranty, except to the extent caused by SpruceMySite's own negligence or breach.

---

## 9. No suspension right for non-payment — Medium

**ToS §7** lets you terminate on 14 days' notice, but gives you no right to stop work on day 8 of an unpaid invoice. Termination is a blunt remedy — you usually want the leverage of suspension without ending the relationship.

> **Suspension.** If an invoice remains unpaid 14 days after its due date, SpruceMySite may suspend all or part of the services on 7 days' written notice, and may withhold delivery of work in progress, until payment is received. Suspension does not relieve the Client of the obligation to pay amounts owing.

---

## 10. Refund Policy vs ToS conflict — Medium

- **ToS §7:** on client termination, you're entitled to payment for all work completed to that date.
- **Refund §3:** if work has commenced, the deposit is non-refundable to cover administrative costs and reserved time.

If you've done $300 of work against a $1,000 deposit, these give different answers. A non-refundable deposit that exceeds your actual loss is also vulnerable as a penalty.

**Align both to:**

> On termination, SpruceMySite is entitled to be paid for all work performed up to the termination date, plus any non-recoverable third-party costs already incurred. Any balance of a deposit exceeding that amount will be refunded within 14 days.

---

## 11–15. Smaller items

**11. Placeholder.** ToS §3: "[Number] business days". Suggest **5**.

**12. "Work for Hire".** ToS §5. A US Copyright Act concept with no equivalent under the Copyright Act 1968 (Cth). Replace with *"unless otherwise agreed in writing."* If you mean an NDA, name it as a confidentiality agreement.

**13. Wrong tech stack.**
- EULA §3 lists WordPress, React, Bootstrap. You build on **Astro**.
- ToS §5 refers to *"libraries, frameworks, or third-party plugins owned by Sprucemysite."* Astro is MIT-licensed open source. You don't own it and can't grant rights in it. Separate "SpruceMySite Background IP" from "open-source components" — they're governed differently.
- If you ever ship GPL-licensed code (WordPress core, most plugins), the EULA §2 redistribution restriction conflicts with the GPL and would be unenforceable as to those components.

**14. Missing boilerplate.** No confidentiality (either direction), force majeure, severability, entire agreement, waiver, notices, assignment, or **precedence clause**. The last one matters: ToS §2 says the SOW governs scope, but nothing says which document wins on conflict. Add:

> If there is any inconsistency, the signed Statement of Work prevails over these Terms to the extent of the inconsistency.

**15. Entity details.** No ABN, no entity type, no registered address anywhere in the pack. Two consequences:

- Contracts should name the legal entity precisely. "Sprucemysite" and "SpruceMySite" are used inconsistently across the four documents — pick one and define it once.
- **If you're a sole trader rather than a Pty Ltd, every liability cap in these documents sits in front of your personal assets.** Worth a conversation with your accountant before the first retainer is signed, alongside professional indemnity cover.

---

## Acceptance mechanism

**ToS §1:** *"By engaging our services, you agree to be bound by these Terms."*

That's weak. If a dispute turns on whether the client ever saw the Terms, you want evidence. Have the SOW carry a line immediately above the signature block:

> I have read and agree to the SpruceMySite Terms of Service at sprucemysite.com.au/terms, version [X] dated [date], a copy of which is attached.

Attach it. Version it. Keep the signed copy.

---

## Suggested sequence

1. Fill the placeholders and publish the Privacy Policy — it's blocking Stripe, Google Ads and Meta.
2. Resolve the ownership contradiction (§1) and delete or shrink the EULA.
3. Add the ACL savings clause everywhere (§2).
4. Draft the retainer terms (§4) and the data/exit provisions (§7) — you need these before the first Venue Growth System client signs.
5. Fix GST wording and the Refund Policy misstatement (§5, §6).
6. Then take the whole pack to a NSW commercial lawyer for a review, with this list attached. A couple of hours of their time against a fixed agenda is far cheaper than a drafting brief from scratch.

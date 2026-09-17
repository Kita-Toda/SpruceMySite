# SpruceMySite

Astro static site for sprucemysite.com.au — web design & digital marketing services, Bondi Junction, Sydney. Deployed static build lives in `dist/`. Lead capture: Quote form (Formspree) + n8n → GoHighLevel CRM sync.

## Blog (`/blog/`)

Ten posts live at `www.sprucemysite.com.au/blog/<slug>/` — a subdirectory, not a
subdomain, so their authority accrues to the main domain.

- `src/data/posts.mjs` is the manifest and the single source of truth. The hub
  (`src/pages/blog/index.astro`), `tools/generate-sitemap.mjs` and
  `tools/generate-llms-full.mjs` all read from it.
- Post bodies are hand-written standalone HTML at
  `src/pages/blog/<slug>/index.html` — they do NOT go through `Layout.astro`,
  so they carry their own stylesheet and load analytics from
  `public/js/blog-analytics.js` (a deliberate mirror of the inline block in
  `Layout.astro` — change the GA4/Meta IDs in both).
- To add a post: write the HTML, add its manifest entry, run
  `node tools/build-blog-posts.mjs` (idempotent — it applies the shared head,
  schema, breadcrumb and Keep Reading blocks), then `npm run build`.
- `public/llms.txt` is hand-curated: add the post there too.
- `dist/sitemap.xml` is generated at build. Don't hand-edit it.

## Dependencies

`npm audit` must stay at zero. It runs as part of `npm run check` — deliberately
NOT as part of `npm run build`, because a newly published advisory must never
block a production deploy of unrelated work.

When an advisory appears:

1. **Upgrade the parent first.** Every advisory this repo has ever had came in
   transitively through `astro`, and the fix was already inside the semver range
   in `package.json` — only `package-lock.json` was stale. `npm update astro`
   was the whole fix.
2. **`overrides` is a last resort**, for when the parent has no fixed release.
   An override beats the parent's own range, so a stale one can pin a
   *vulnerable* version that npm would otherwise have fixed by itself.
3. **Delete overrides once the parent catches up.** Test by removing them and
   re-running `npm audit`. On 2026-09-17 all seven were found dead this way.

**The actual failure mode, recorded honestly.** On 2026-09-17 six advisories
were open. Dependabot had *already* opened a PR for every one of them — #12
(svgo), #13 (astro), #15 (js-yaml), #16 (sharp), some sitting for over a week.
Detection and delivery both worked. Nothing merged them. So the thing to fix is
the reviewing habit, not the tooling: **when a Dependabot security PR arrives,
merge it or supersede it deliberately.**

`.github/dependabot.yml` adds *version* updates (routine bumps, which Dependabot
does not do without config) so the lockfile can't drift between advisories. That
is a secondary benefit, not the fix. Its header carries the full post-mortem,
including the correction to the first, wrong version of this explanation.

Note that config also generates PRs that can break the build: TypeScript majors
are pinned back because `@astrojs/check@0.9.10` peer-requires `^5 || ^6`.

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore
- Author a backlog-ready spec/issue → invoke /spec

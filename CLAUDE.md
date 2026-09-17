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

`.github/dependabot.yml` opens grouped update PRs weekly so the lockfile can't
drift far enough for this to recur. Its header records the full post-mortem.

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

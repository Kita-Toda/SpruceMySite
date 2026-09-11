import { defineConfig } from 'astro/config';

// No adapter, on purpose.
//
// Vercel's "Install Vercel Web Analytics" bot (b4c29ed) added
// `adapter: vercel({ webAnalytics: { enabled: true } })` here. Reverted: the
// adapter moves the build output from `dist/` to `.vercel/output/static`, and
// `npm run build` then runs tools/generate-sitemap.mjs and
// tools/generate-llms-full.mjs, both of which write into `dist/` — so
// sitemap.xml and llms-full.txt would land in a directory that is no longer
// deployed.
//
// Analytics needs none of it. Layout.astro mounts <Analytics /> and
// <SpeedInsights /> from the Astro entry points of @vercel/analytics and
// @vercel/speed-insights, and the blog hub and posts carry the equivalent
// script tags; all of them load from /_vercel/..., which Vercel's edge serves
// for any project with the feature switched on in the dashboard, adapter or
// not.
export default defineConfig({ output: 'static' });

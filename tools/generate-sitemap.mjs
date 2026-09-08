/**
 * Generates dist/sitemap.xml.
 *
 * Replaces the hand-maintained public/sitemap.xml, which was already one post
 * behind reality the moment the /blog/ section landed. The blog half of the
 * file is derived from src/data/posts.mjs, so adding a post to that manifest
 * is the only step needed to get it indexed.
 *
 * The static half stays a hand-written list on purpose: `lastmod` has to be
 * the date the page's CONTENT changed, and nothing on disk knows that. A build
 * timestamp would claim all eight pages changed on every deploy, and a git
 * mtime would report the clone date under Vercel's shallow checkout. Same
 * reasoning as the dateModified prop on Layout.astro — update these by hand
 * when you edit a page, and they are never wrong.
 */
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { postsByDate, SITE, path as postPath } from '../src/data/posts.mjs';

const DIST = 'dist';

/** [path, lastmod, changefreq, priority] */
const STATIC = [
  ['/', '2026-09-08', 'weekly', '1.0'],
  ['/web-design-sydney/', '2026-08-29', 'monthly', '0.9'],
  ['/local-seo-sydney/', '2026-08-29', 'monthly', '0.9'],
  ['/lead-generation-sydney/', '2026-08-29', 'monthly', '0.8'],
  ['/website-maintenance-sydney/', '2026-08-29', 'monthly', '0.8'],
  ['/google-analytics-setup-sydney/', '2026-08-29', 'monthly', '0.8'],
  ['/privacy-policy/', '2026-08-03', 'yearly', '0.3'],
  ['/terms-and-conditions/', '2026-08-03', 'yearly', '0.3'],
];

// The hub gets the freshest post's date: it is a listing, so its content
// genuinely changes the day a post is added to it.
const hubLastmod = postsByDate[0]?.modified ?? '2026-09-08';

const entries = [
  ...STATIC,
  ['/blog/', hubLastmod, 'weekly', '0.8'],
  ...postsByDate.map((p) => [postPath(p.slug), p.modified, 'monthly', '0.7']),
];

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  entries
    .map(
      ([path, lastmod, changefreq, priority]) =>
        '  <url>\n' +
        `    <loc>${SITE}${path}</loc>\n` +
        `    <lastmod>${lastmod}</lastmod>\n` +
        `    <changefreq>${changefreq}</changefreq>\n` +
        `    <priority>${priority}</priority>\n` +
        '  </url>'
    )
    .join('\n') +
  '\n</urlset>\n';

const outPath = join(DIST, 'sitemap.xml');
await writeFile(outPath, xml, 'utf8');
console.log(`[sitemap] wrote ${outPath} — ${entries.length} URLs`);

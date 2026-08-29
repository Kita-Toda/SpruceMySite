/**
 * Generates dist/llms-full.txt — the long-form companion to public/llms.txt.
 *
 * Runs as a postbuild step against the built HTML rather than shipping a
 * hand-written file in public/, so the corpus an LLM reads can never drift
 * from the copy that is actually on the pages.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const SITE = 'https://www.sprucemysite.com.au';
const DIST = 'dist';

const PAGES = [
  ['index.html', '/', 'Homepage'],
  ['web-design-sydney/index.html', '/web-design-sydney/', 'Web Design Sydney'],
  ['local-seo-sydney/index.html', '/local-seo-sydney/', 'Local SEO Sydney'],
  ['lead-generation-sydney/index.html', '/lead-generation-sydney/', 'Lead Generation Sydney'],
  ['website-maintenance-sydney/index.html', '/website-maintenance-sydney/', 'Website Maintenance Sydney'],
  ['google-analytics-setup-sydney/index.html', '/google-analytics-setup-sydney/', 'Google Analytics Setup Sydney'],
];

const decode = (s) =>
  s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));

/** Strip a built page down to headings + prose, preserving heading level. */
function extract(html) {
  let s = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ');

  const body = s.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  s = body ? body[1] : s;

  // Tag headings with a sentinel so the level survives tag-stripping.
  s = s.replace(/<h([1-4])[^>]*>/gi, (_, n) => '\n\nHLEVEL' + n + ':');
  s = s.replace(/<\/(p|li|h[1-4]|div|section|td|th)>/gi, '\n');
  s = s.replace(/<[^>]+>/g, ' ');
  s = decode(s);

  const out = [];
  for (const raw of s.split('\n')) {
    const line = raw.replace(/\s+/g, ' ').trim();
    if (!line) continue;
    const h = line.match(/^HLEVEL([1-4]):\s*(.*)$/);
    if (h) {
      const title = h[2].trim();
      if (title) out.push('\n' + '#'.repeat(Math.min(Number(h[1]) + 1, 6)) + ' ' + title);
    } else if (line.length > 2) {
      out.push(line);
    }
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

const header = [
  '# SpruceMySite — Full Content',
  '',
  '> Long-form companion to ' + SITE + '/llms.txt. Contains the complete text of',
  '> every page on the site, generated from the built HTML at deploy time.',
  '',
  'Business: SpruceMySite',
  'Operator: Christian Alba, Web Designer & Digital Marketing Specialist',
  'Location: Bondi Junction NSW 2022, Australia',
  'Service area: Sydney — Eastern Suburbs, Inner West, Northern Beaches',
  'Email: info@sprucemysite.com.au',
  'Phone: +61 433 092 621',
  'Hours: Monday–Saturday, 9:00am–8:00pm AEST',
  'Generated: ' + new Date().toISOString().slice(0, 10),
  '',
  '---',
  '',
].join('\n');

const parts = [header];

for (const [file, path, label] of PAGES) {
  let html;
  try {
    html = await readFile(join(DIST, file), 'utf8');
  } catch {
    console.warn('[llms-full] skipped missing ' + file);
    continue;
  }
  parts.push('## ' + label + '\nURL: ' + SITE + path + '\n\n' + extract(html) + '\n\n---\n');
}

const outPath = join(DIST, 'llms-full.txt');
await writeFile(outPath, parts.join('\n'), 'utf8');
console.log('[llms-full] wrote ' + outPath);

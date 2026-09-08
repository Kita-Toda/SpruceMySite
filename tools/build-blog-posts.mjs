/**
 * One-shot codemod that brought the ten hand-written posts under
 * src/pages/blog/ up to the same head/schema/linking standard as the rest of
 * the site. Kept in the repo so the next post can be run through it rather
 * than hand-copied: it is idempotent — re-running over an already-processed
 * file replaces the generated blocks instead of stacking a second copy.
 *
 * It edits the source files IN PLACE under src/pages/blog/<slug>/index.html.
 * It is NOT part of `npm run build`; run it deliberately:
 *
 *     node tools/build-blog-posts.mjs
 *
 * Everything it needs about a post comes from src/data/posts.mjs.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { posts, bySlug, SITE, url as postUrl, path as postPath } from '../src/data/posts.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BLOG = join(ROOT, 'src/pages/blog');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Word count of the article PROSE, for BlogPosting.wordCount and for the
 * "N min read" byline. Everything from the closing CTA card onward is
 * furniture — the booking pitch, the related-service box, the tag pills —
 * and counting it would inflate both numbers by 60-80 words a post.
 */
function wordCount(html) {
  const body = html.match(/<article class="body">([\s\S]*?)<\/article>/);
  if (!body) return undefined;
  let inner = body[1];
  for (const marker of ['<div class="cta-card">', '<div class="related">', '<div class="tags">']) {
    const i = inner.indexOf(marker);
    if (i > -1) { inner = inner.slice(0, i); break; }
  }
  const text = inner
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ');
  return text.split(/\s+/).filter((w) => /[a-z0-9]/i.test(w)).length;
}

/* --------------------------------------------------------------------------
 * The shared organisation / author nodes.
 *
 * These repeat the @ids minted on the homepage (Layout.astro) so a crawler
 * that has seen both pages merges them into one entity rather than two. They
 * are spelled out in full here rather than referenced by bare @id because a
 * blog post has to stand on its own: an @id pointing at a node defined on
 * some other page resolves to nothing when this page is parsed in isolation,
 * which is exactly how an AI answer engine reads it.
 *
 * IF THE BUSINESS DETAILS CHANGE they change in Layout.astro too.
 * ----------------------------------------------------------------------- */
const publisherNode = {
  '@type': 'ProfessionalService',
  '@id': SITE + '/#business',
  name: 'SpruceMySite',
  url: SITE + '/',
  logo: { '@type': 'ImageObject', url: SITE + '/logo-mark.png', width: 114, height: 114 },
  image: SITE + '/og-cover.jpg',
  telephone: '+61433092621',
  email: 'info@sprucemysite.com.au',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bondi Junction',
    addressLocality: 'Bondi Junction',
    addressRegion: 'NSW',
    postalCode: '2022',
    addressCountry: 'AU',
  },
  areaServed: [
    { '@type': 'City', name: 'Sydney' },
    { '@type': 'Suburb', name: 'Bondi Junction' },
    { '@type': 'Suburb', name: 'Eastern Suburbs' },
  ],
  sameAs: [
    'https://www.facebook.com/sprucemysite',
    'https://www.instagram.com/sprucemysite',
    'https://www.linkedin.com/in/christian-alba',
    'https://maps.google.com/?cid=16561133347934804073',
  ],
};

const authorNode = {
  '@type': 'Person',
  '@id': SITE + '/#christian',
  name: 'Christian Alba',
  jobTitle: 'Web Designer & Digital Marketing Specialist',
  description:
    'Sydney-based web designer and digital marketing specialist with 10+ years of experience helping small businesses build smart websites and automated lead systems.',
  url: SITE + '/',
  worksFor: { '@id': SITE + '/#business' },
  knowsAbout: ['web design', 'local SEO', 'lead generation', 'Google Analytics', 'digital marketing', 'WordPress'],
  sameAs: ['https://www.linkedin.com/in/christian-alba', 'https://www.facebook.com/sprucemysite'],
};

function schemaFor(p, words) {
  const u = postUrl(p.slug);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': u + '#article',
        headline: p.headline,
        alternativeHeadline: p.title,
        description: p.description,
        url: u,
        mainEntityOfPage: { '@id': u + '#webpage' },
        isPartOf: { '@id': SITE + '/blog/#blog' },
        inLanguage: 'en-AU',
        datePublished: p.published,
        dateModified: p.modified,
        author: { '@id': SITE + '/#christian' },
        publisher: { '@id': SITE + '/#business' },
        image: { '@type': 'ImageObject', url: SITE + '/og-cover.jpg', width: 1200, height: 630 },
        articleSection: p.category,
        keywords: p.keywords.join(', '),
        ...(words ? { wordCount: words } : {}),
        timeRequired: 'PT' + p.readingMinutes + 'M',
        about: { '@id': SITE + '/#business' },
        // The dek and opening paragraph are written as self-contained
        // sentences, which is what makes them safe to read aloud out of
        // context. Same convention as Layout.astro's WebPage node.
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.dek', '.lead'] },
      },
      {
        '@type': 'WebPage',
        '@id': u + '#webpage',
        url: u,
        name: p.title,
        description: p.description,
        inLanguage: 'en-AU',
        isPartOf: { '@id': SITE + '/#website' },
        breadcrumb: { '@id': u + '#breadcrumb' },
        datePublished: p.published,
        dateModified: p.modified,
      },
      {
        '@type': 'WebSite',
        '@id': SITE + '/#website',
        url: SITE + '/',
        name: 'SpruceMySite',
        inLanguage: 'en-AU',
        publisher: { '@id': SITE + '/#business' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': u + '#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: SITE + '/blog/' },
          { '@type': 'ListItem', position: 3, name: p.title, item: u },
        ],
      },
      publisherNode,
      authorNode,
    ],
  };
}

/* ---------------------------- head block ------------------------------- */
function headBlock(p, words) {
  const tags = p.keywords.map((k) => `<meta property="article:tag" content="${esc(k)}">`).join('\n');
  return `<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.title)} | SpruceMySite">
<meta name="twitter:description" content="${esc(p.description)}">
<meta name="twitter:image" content="${SITE}/og-cover.jpg">
<meta property="og:site_name" content="SpruceMySite">
<meta property="og:locale" content="en_AU">
<meta property="og:image" content="${SITE}/og-cover.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="SpruceMySite — web design and digital marketing, Bondi Junction Sydney">
<meta property="article:published_time" content="${p.published}">
<meta property="article:modified_time" content="${p.modified}">
<meta property="article:author" content="Christian Alba">
<meta property="article:section" content="${esc(p.category)}">
${tags}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<script type="application/ld+json">
${JSON.stringify(schemaFor(p, words), null, 2)}
</script>`;
}

/* ------------------------- breadcrumb + related ------------------------- */
function crumbs(p) {
  return `      <nav class="crumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="/blog/">Blog</a>
        <span aria-hidden="true">/</span>
        <span class="here">${esc(p.title)}</span>
      </nav>
`;
}

function keepReading(p) {
  const cards = p.related
    .map((slug) => {
      const r = bySlug[slug];
      return `        <a class="kr-card" href="${postPath(r.slug)}">
          <span class="kr-cat">${esc(r.category)}</span>
          <span class="kr-title">${esc(r.headline)}</span>
          <span class="kr-desc">${esc(r.description)}</span>
          <span class="kr-more">Read the article <span aria-hidden="true">&rarr;</span></span>
        </a>`;
    })
    .join('\n');

  return `    <section class="keep-reading" aria-labelledby="kr-h">
      <h2 id="kr-h">Keep Reading</h2>
      <div class="kr-grid">
${cards}
      </div>
      <p class="kr-all"><a href="/blog/"><span aria-hidden="true">&larr;</span> All articles on the SpruceMySite blog</a></p>
    </section>
`;
}

/* ------------------------------- styles -------------------------------- */
const EXTRA_CSS = `
/* ---------- breadcrumb + keep reading (added with the /blog/ section) ---------- */
.crumbs{display:flex; flex-wrap:wrap; gap:8px; align-items:center; font-size:13.5px; color:var(--ink-soft); padding:26px 0 0}
.crumbs a{color:var(--ink-soft); text-decoration:none; font-weight:600}
.crumbs a:hover{color:var(--terracotta-d); text-decoration:underline}
.crumbs span[aria-hidden]{opacity:.4}
.crumbs .here{color:var(--ink); font-weight:600}
@media (max-width:560px){ .crumbs .here{display:none} .crumbs span[aria-hidden]:last-of-type{display:none} }

.keep-reading{margin:10px 0 0; padding-top:34px; border-top:1px solid var(--line)}
.keep-reading h2{font-size:24px; margin-bottom:.8em}
.kr-grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px}
.kr-card{
  display:flex; flex-direction:column; gap:7px; text-decoration:none;
  background:var(--paper); border:1px solid var(--line); border-radius:16px;
  padding:20px 20px 18px; transition:transform .18s ease, box-shadow .18s ease;
}
.kr-card:hover{transform:translateY(-3px); box-shadow:var(--shadow)}
.kr-cat{font-size:11.5px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:var(--sage-d)}
.kr-title{font-family:"Fraunces",Georgia,serif; font-weight:600; font-size:17.5px; line-height:1.25; color:var(--ink)}
.kr-desc{font-size:14px; color:var(--ink-soft); line-height:1.5}
.kr-more{margin-top:auto; padding-top:8px; font-size:13.5px; font-weight:700; color:var(--terracotta-d)}
.kr-all{margin:22px 0 0; font-size:14.5px; font-weight:600}
.kr-all a{color:var(--terracotta-d); text-decoration:none}
.kr-all a:hover{text-decoration:underline}

.foot-links a{color:var(--ink-soft); text-decoration:none; opacity:.75; transition:opacity .2s, color .2s}
.foot-links a:hover{opacity:1; color:var(--terracotta-d)}
.foot-legal a{color:var(--ink-soft); text-decoration:underline; text-underline-offset:2px}
`;

/* ------------------------------ the footer ------------------------------ */
const FOOTER = `<footer class="site">
  <div class="wrap-wide foot-row">
    <div>
      <strong style="font-family:'Fraunces',serif; font-size:17px; color:var(--ink)">SpruceMySite</strong>
      <div class="foot-links" style="margin-top:8px">
        <a href="/web-design-sydney/">Web Design</a>
        <a href="/local-seo-sydney/">Local SEO</a>
        <a href="/lead-generation-sydney/">Lead Generation</a>
        <a href="/website-maintenance-sydney/">Maintenance</a>
        <a href="/google-analytics-setup-sydney/">Analytics</a>
        <a href="/blog/">Blog</a>
      </div>
    </div>
    <div class="foot-legal">Copyright 2026 · SpruceMySite · ABN 31 567 153 201 · Bondi Junction, Sydney · <a href="/privacy-policy/">Privacy Policy</a> · <a href="/terms-and-conditions/">Terms &amp; Conditions</a></div>
  </div>
</footer>`;

const ANALYTICS = `<script defer src="/js/blog-analytics.js"></script>`;
const NOSCRIPT_PIXEL = `<noscript><img height="1" width="1" style="display:none" alt=""
  src="https://www.facebook.com/tr?id=870957819396743&amp;ev=PageView&amp;noscript=1"></noscript>`;

/* ------------------------------ the codemod ----------------------------- */
let changed = 0;
for (const p of posts) {
  const file = join(BLOG, p.slug, 'index.html');
  let html = await readFile(file, 'utf8');
  const before = html;
  const words = wordCount(html);

  // 1. Indexing + icon meta, straight after the viewport tag.
  html = html.replace(
    /<meta name="viewport"[^>]*>\n(?:<meta name="robots"[\s\S]*?<link rel="apple-touch-icon"[^>]*>\n)?/,
    (m) =>
      m.split('\n')[0] +
      '\n<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">\n' +
      '<meta name="author" content="Christian Alba">\n' +
      '<meta name="theme-color" content="#FBF4E7">\n' +
      '<link rel="icon" type="image/png" href="/favicon.png" sizes="64x64">\n' +
      '<link rel="apple-touch-icon" href="/apple-touch-icon.png">\n'
  );

  // 2. Social meta + JSON-LD: replace everything from twitter:card to the end
  //    of the ld+json block in one go, so re-runs can never double up.
  const headRe = /<meta name="twitter:card"[\s\S]*?<\/script>/;
  if (!headRe.test(html)) throw new Error('no twitter:card..</script> span in ' + p.slug);
  html = html.replace(headRe, headBlock(p, words));

  // 3. Analytics, last thing in the head.
  if (!html.includes('/js/blog-analytics.js')) {
    html = html.replace('</head>', ANALYTICS + '\n</head>');
  }
  if (!html.includes('facebook.com/tr?id=')) {
    html = html.replace('<body>', '<body>\n\n' + NOSCRIPT_PIXEL);
  }

  // 4. Site-internal links in the BODY go root-relative; the booking widget
  //    lives on another host and stays absolute. Scoped to the body on
  //    purpose — the canonical and og:url in the head must stay absolute.
  {
    const cut = html.indexOf('<body');
    if (cut === -1) throw new Error('no <body> in ' + p.slug);
    html =
      html.slice(0, cut) +
      html.slice(cut).replace(/href="https:\/\/www\.sprucemysite\.com\.au\//g, 'href="/');
  }

  // 5. Extra CSS, once.
  if (!html.includes('.keep-reading{')) {
    html = html.replace(/\n<\/style>/, EXTRA_CSS + '</style>');
  }

  // 6. Visible breadcrumb above the hero. Any previous one is stripped first
  //    so a re-run replaces it rather than stacking a second.
  html = html.replace(/[ \t]*<nav class="crumbs"[\s\S]*?<\/nav>\n/, '');
  html = html.replace(/(\n)([ \t]*<div class="hero">)/, (_m, nl, hero) => nl + crumbs(p) + hero);

  // 7. Byline: full name, a machine-readable date, and the derived reading
  //    time (see the note on readingMinutes in src/data/posts.mjs).
  html = html.replace(
    /<strong style="color:var\(--ink\)">Christian(?:, | Alba, )SpruceMySite<\/strong> · (?:<time datetime="[^"]*">)?(\d+ \w+ \d{4})(?:<\/time>)?/,
    (_m, d) => `<strong style="color:var(--ink)">Christian Alba, SpruceMySite</strong> · <time datetime="${p.published}">${d}</time>`
  );
  html = html.replace(/· \d+ min read</, `· ${p.readingMinutes} min read<`);

  // 8. Keep-reading block after the article, then the rebuilt footer. Same
  //    strip-then-insert shape as the breadcrumb, for the same reason.
  html = html.replace(/[ \t]*<section class="keep-reading"[\s\S]*?<\/section>\n/, '');
  const tailRe = /\n[ \t]*<\/article>\n\s*<\/div>\n<\/main>/;
  if (!tailRe.test(html)) throw new Error('no </article></div></main> tail in ' + p.slug);
  html = html.replace(tailRe, '\n    </article>\n\n' + keepReading(p) + '  </div>\n</main>');
  html = html.replace(/<footer class="site">[\s\S]*?<\/footer>/, FOOTER);

  if (html !== before) changed++;
  await writeFile(file, html, 'utf8');
  console.log(`[blog] ${p.slug} — ${words} words`);
}
console.log(`[blog] ${changed}/${posts.length} files updated`);

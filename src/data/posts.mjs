/**
 * The blog index — one entry per post under /blog/.
 *
 * Single source of truth for everything that has to agree across files: the
 * hub page (src/pages/blog/index.astro), the sitemap generator and
 * llms-full.txt (tools/). The post bodies themselves are hand-written static
 * HTML in src/pages/blog/<slug>/index.html; this file describes them, it does
 * not render them.
 *
 * WHEN YOU ADD A POST: add the .html under src/pages/blog/<slug>/index.html,
 * add its entry here, and run `npm run build`. The hub, sitemap and llms files
 * pick it up on their own. `related` is hand-picked rather than derived from
 * `category` — a Local SEO post is often better paired with a review or lead
 * post than with the next Local SEO one, and topical proximity is the whole
 * point of the internal links.
 *
 * `readingMinutes` is DERIVED, not chosen: it is the prose word count over
 * 200wpm, floored at 2. The posts shipped claiming "6 min read" on ~350-480
 * words of body copy, which is a ~2 minute read; the byline and the
 * BlogPosting.timeRequired both now say 2 because a reading time that flatters
 * the article is a claim a reader checks against the scrollbar in one second.
 * If a post is genuinely expanded to 1,200+ words, re-derive this — the
 * word counts are printed by `node tools/build-blog-posts.mjs`.
 *
 * `modified` is the date the COPY changed, not the date the file was touched.
 * Bump it when you edit a post's words; leave it alone for a typo or a style
 * tweak. Same rule as the dateModified prop on Layout.astro — a date that runs
 * ahead of the content is worse than no date at all.
 */

export const SITE = 'https://www.sprucemysite.com.au';

export const posts = [
  {
    slug: 'how-to-get-found-on-google-maps-sydney',
    title: 'How To Get Found On Google Maps In Sydney',
    headline: "If You're Not On The Map, You Don't Exist.",
    description:
      'How Sydney small businesses actually get found on Google Maps — Google Business Profile setup, local SEO fundamentals, and what google maps SEO really means.',
    category: 'Local SEO',
    published: '2026-09-08',
    modified: '2026-09-08',
    readingMinutes: 2,
    service: { name: 'Local SEO Sydney', url: '/local-seo-sydney/' },
    keywords: ['Local SEO Sydney Small Business', 'Google Business Profile Sydney', 'Google Maps SEO Sydney'],
    related: ['best-local-seo-tools-for-sydney-tradies', 'google-review-strategy-sydney', 'diy-seo-vs-hiring-an-agency-sydney'],
  },
  {
    slug: 'best-local-seo-tools-for-sydney-tradies',
    title: 'The Best Local SEO Tools For Sydney Tradies',
    headline: 'Local SEO Tools Every Sydney Tradie Should Know About',
    description:
      "The local SEO tools worth a Sydney tradie's time — Google Business Profile, review tools and rank tracking — and how they actually move your ranking.",
    category: 'Local SEO',
    published: '2026-09-08',
    modified: '2026-09-08',
    readingMinutes: 2,
    service: { name: 'Local SEO Sydney', url: '/local-seo-sydney/' },
    keywords: ['Google Ranking For Tradies', 'Local SEO For Tradies Sydney', 'Tradie Website SEO Australia'],
    related: ['how-to-get-found-on-google-maps-sydney', 'diy-seo-vs-hiring-an-agency-sydney', 'google-review-strategy-sydney'],
  },
  {
    slug: 'diy-seo-vs-hiring-an-agency-sydney',
    title: 'DIY SEO vs Hiring An Agency In Sydney: An Honest Comparison',
    headline: "DIY SEO Or Hire An Agency? Here's The Honest Answer.",
    description:
      'What DIY SEO actually costs in time vs hiring a Sydney agency — the real trade-offs, no scare tactics, so you can make the call that suits your business.',
    category: 'Local SEO',
    published: '2026-09-08',
    modified: '2026-09-08',
    readingMinutes: 2,
    service: { name: 'Local SEO Sydney', url: '/local-seo-sydney/' },
    keywords: ['Local SEO Agency Vs Doing It Yourself', 'SEO Agency Sydney Cost', 'DIY SEO Australia Small Business'],
    related: ['best-local-seo-tools-for-sydney-tradies', 'how-to-get-found-on-google-maps-sydney', 'choosing-a-web-designer-in-sydney'],
  },
  {
    slug: 'google-review-strategy-sydney',
    title: 'A Google Review Strategy That Works For Sydney Small Business',
    headline: 'A Google Review Strategy That Actually Works',
    description:
      'How to automate google review requests, get more 5-star reviews and handle the odd bad one — a real review strategy for Sydney small business, no begging required.',
    category: 'Trust & Reputation',
    published: '2026-09-08',
    modified: '2026-09-08',
    readingMinutes: 2,
    service: { name: 'Local SEO Sydney', url: '/local-seo-sydney/' },
    keywords: ['Automate Google Review Requests', 'Get More Google Reviews Australia', '5 Star Review Strategy Small Business Sydney'],
    related: ['how-to-get-found-on-google-maps-sydney', 'best-local-seo-tools-for-sydney-tradies', 'how-to-stop-losing-leads-after-hours'],
  },
  {
    slug: 'how-to-stop-losing-leads-after-hours',
    title: 'How To Stop Losing Leads After Hours',
    headline: "Your Competitor Isn't Better. They Just Replied Faster.",
    description:
      'Why leads go cold within minutes, and how a 60-second automated reply system stops Sydney small businesses losing enquiries after hours.',
    category: 'Lead Generation',
    published: '2026-09-08',
    modified: '2026-09-08',
    readingMinutes: 2,
    service: { name: 'Lead Generation Sydney', url: '/lead-generation-sydney/' },
    keywords: ['60 Second Lead Reply System', 'Lead Response Automation Small Business', 'Automated Lead Follow Up Australia'],
    related: ['signs-your-website-is-killing-your-leads', 'google-review-strategy-sydney', 'reduce-small-business-tech-overwhelm'],
  },
  {
    slug: 'signs-your-website-is-killing-your-leads',
    title: '7 Signs Your Sydney Website Is Quietly Killing Your Leads',
    headline: 'Is Your Website Actually Costing You Customers?',
    description:
      'A website audit checklist for Sydney small business — why your site might not be getting enquiries, and how to check your real conversion rate.',
    category: 'Website Audit',
    published: '2026-09-08',
    modified: '2026-09-08',
    readingMinutes: 2,
    service: { name: 'Lead Generation Sydney', url: '/lead-generation-sydney/' },
    keywords: ['Website Audit Sydney Small Business', 'Why Is My Website Not Getting Enquiries', 'Website Conversion Rate Australia'],
    related: ['how-to-stop-losing-leads-after-hours', 'choosing-a-web-designer-in-sydney', 'website-launch-in-a-week-guide'],
  },
  {
    slug: 'choosing-a-web-designer-in-sydney',
    title: 'How To Choose A Web Design Agency In Sydney',
    headline: 'Choosing A Web Designer In Sydney? Read This First.',
    description:
      'A practical checklist for Sydney small business owners hiring a web designer — portfolio red flags, pricing questions, and what ongoing support should include.',
    category: 'Web Design',
    published: '2026-09-08',
    modified: '2026-09-08',
    readingMinutes: 2,
    service: { name: 'Web Design Sydney', url: '/web-design-sydney/' },
    keywords: ['Web Design Sydney Small Business', 'How To Choose Web Design Agency Sydney', 'Web Designer Sydney Checklist'],
    related: ['website-launch-in-a-week-guide', 'wordpress-vs-website-builder-small-business', 'signs-your-website-is-killing-your-leads'],
  },
  {
    slug: 'website-launch-in-a-week-guide',
    title: 'Website Launch In A Week: A Realistic Guide For Sydney Businesses',
    headline: "You Can Launch A Website In A Week. Here's How.",
    description:
      'What a fast website launch in Australia actually requires — a realistic 7-10 day timeline, what to prep, and what not to cut corners on.',
    category: 'Launch & Build',
    published: '2026-09-08',
    modified: '2026-09-08',
    readingMinutes: 2,
    service: { name: 'Web Design Sydney', url: '/web-design-sydney/' },
    keywords: ['Launch Website In 7 Days', 'Fast Website Launch Australia', 'Quick Website Build Sydney'],
    related: ['choosing-a-web-designer-in-sydney', 'wordpress-vs-website-builder-small-business', 'signs-your-website-is-killing-your-leads'],
  },
  {
    slug: 'wordpress-vs-website-builder-small-business',
    title: 'WordPress vs Website Builder: What Should Sydney Small Business Use?',
    headline: 'WordPress, Squarespace, Or Something Else Entirely?',
    description:
      'A no-nonsense comparison of WordPress vs website builders like Squarespace and Wix for small Australian businesses — what actually matters beyond ease of use.',
    category: 'Platform Choice',
    published: '2026-09-08',
    modified: '2026-09-08',
    readingMinutes: 2,
    service: { name: 'Website Maintenance Sydney', url: '/website-maintenance-sydney/' },
    keywords: ['Best Website Builder Sydney', 'Website Platform Comparison Small Business', 'WordPress Vs Squarespace Australia'],
    related: ['choosing-a-web-designer-in-sydney', 'reduce-small-business-tech-overwhelm', 'website-launch-in-a-week-guide'],
  },
  {
    slug: 'reduce-small-business-tech-overwhelm',
    title: 'How To Reduce Small Business Tech Overwhelm',
    headline: "You Don't Need To Understand Your Website. You Just Need It To Work.",
    description:
      'Practical ways Sydney small business owners can cut tech stress — what to outsource, what to ignore, and what website management should actually cost you in time.',
    category: 'Maintenance',
    published: '2026-09-08',
    modified: '2026-09-08',
    readingMinutes: 2,
    service: { name: 'Website Maintenance Sydney', url: '/website-maintenance-sydney/' },
    keywords: ['Website Management Sydney', 'Small Business Tech Stress Australia', 'Outsource Website Management'],
    related: ['wordpress-vs-website-builder-small-business', 'website-launch-in-a-week-guide', 'how-to-stop-losing-leads-after-hours'],
  },
];

/** Posts newest-first, then in the hand-set order above. Used by the hub. */
export const postsByDate = [...posts].sort((a, b) => b.published.localeCompare(a.published));

export const bySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));

export const url = (slug) => `${SITE}/blog/${slug}/`;
export const path = (slug) => `/blog/${slug}/`;

/** Distinct categories in first-appearance order — the hub's filter chips. */
export const categories = [...new Set(posts.map((p) => p.category))];

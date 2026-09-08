/**
 * Analytics for the /blog/ section.
 *
 * WHY THIS FILE EXISTS: the ten blog posts are hand-written static HTML, not
 * Astro pages, so they never pass through Layout.astro and would otherwise
 * carry no GA4 tag, no Meta pixel and no CTA tracking at all — blog traffic
 * would be invisible in both dashboards.
 *
 * THIS IS A MIRROR OF THE INLINE BLOCK IN src/layouts/Layout.astro. The IDs
 * and the event names below must match it. If you change the GA4 property or
 * the Meta pixel, change it in BOTH places. It is a separate file rather than
 * an import because Layout.astro's copy is deliberately `is:inline` (see the
 * comments there) and static .html pages cannot import Astro components.
 *
 * Loaded with `defer`, which runs it after the parser finishes and before
 * DOMContentLoaded — early enough for a pageview, late enough not to block
 * the first render. Served from this origin, so it satisfies the
 * `script-src 'self'` in vercel.json.
 *
 * Both IDs are disclosed by name in the privacy policy §5.
 */
(function () {
  var GA4_ID = 'G-BGDW47PVSF';
  var META_PIXEL_ID = '870957819396743';

  /* ------------------------------- GA4 -------------------------------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('js', new Date());
  gtag('config', GA4_ID);

  var ga = document.createElement('script');
  ga.async = true;
  ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
  document.head.appendChild(ga);

  /* ---------------------------- Meta pixel ---------------------------- */
  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');

  /* -------------------------- CTA click events -------------------------
   * One delegated listener, same as the main site. `page_section` is what
   * tells you whether a booking click came from the sticky header, the CTA
   * card mid-article, or the footer — without it every blog CTA reports
   * identically and you cannot tell which placement earns its space.
   *
   * As on the main site these count INTENT, not completed bookings: the
   * booking itself finishes on GoHighLevel's domain, which we can't see.
   * Don't report book_call_click as "bookings".
   * ------------------------------------------------------------------- */
  function section(el) {
    if (el.closest('header')) return 'blog-nav';
    if (el.closest('footer')) return 'blog-footer';
    if (el.closest('.cta-card')) return 'blog-cta-card';
    if (el.closest('.related')) return 'blog-related-service';
    if (el.closest('.keep-reading')) return 'blog-keep-reading';
    if (el.closest('article.body')) return 'blog-body';
    return 'blog-other';
  }

  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || typeof t.closest !== 'function') return;
    var a = t.closest('a[href]');
    if (!a) return;

    var href = a.getAttribute('href') || '';
    var gaEvent, metaEvent;

    if (href.indexOf('/widget/booking/') > -1) {
      gaEvent = 'book_call_click'; metaEvent = 'Lead';
    } else if (href.indexOf('mailto:') === 0) {
      gaEvent = 'email_click'; metaEvent = 'Contact';
    } else if (href.indexOf('tel:') === 0) {
      gaEvent = 'phone_click'; metaEvent = 'Contact';
    } else {
      return;
    }

    var where = section(a);
    var label = (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 100);

    // Both libraries use sendBeacon, so these survive the navigation that
    // follows. Guarded because an ad blocker removes either one.
    if (typeof gtag === 'function') {
      gtag('event', gaEvent, { link_url: href, link_text: label, page_section: where });
    }
    if (typeof fbq === 'function') {
      fbq('track', metaEvent, { content_name: gaEvent, content_category: where });
    }
  }, true);
})();

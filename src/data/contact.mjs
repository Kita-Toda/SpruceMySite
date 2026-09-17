// Single source of truth for the phone number, the booking link and the wording
// of the booking CTA. These were hardcoded in 13 places across Hero, Nav,
// Contact, the five service pages and the blog hub; changing the CTA copy meant
// finding all 13. Import from here instead.
//
// NOT covered by this file: the ten blog posts at src/pages/blog/<slug>/index.html
// are hand-written standalone HTML that never goes through Astro, so they can't
// import anything. Their CTAs are applied by tools/build-blog-posts.mjs, which
// reads the same constants from this file — run it after changing BOOK_CTA.

export const BOOKING_URL = 'https://api.sprucemysite.com.au/widget/booking/IDovJNXAiGWPcSZOYddc';

// Phone. PHONE_HREF is the E.164 form so it dials correctly from overseas and
// from a desktop soft-phone; PHONE_DISPLAY is the local form people recognise.
// The same number ships in the ProfessionalService schema (Layout.astro
// "telephone") and in public/llms.txt — change all three together.
export const PHONE_DISPLAY = '0433 092 621';
export const PHONE_HREF = 'tel:+61433092621';

// Booking CTA copy.
//
// DELIBERATELY DURATION-NEUTRAL. The GoHighLevel widget this links to books a
// 30-MINUTE slot. Any copy here that promises "15 minutes" is a false statement
// about the service until that slot is changed in GHL — don't add a number to
// this string without checking the widget first. (Owner's call, 2026-09-17: the
// slot may move to 15 min later; when it does, update this one constant, re-run
// `node tools/build-blog-posts.mjs`, and every CTA on the site follows.)
export const BOOK_CTA = 'Book Your Free Growth Call';

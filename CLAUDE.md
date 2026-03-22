# CLAUDE.md — Ebb & Flow Web

## About
Website for **Ebb & Flow**, a massage therapy studio in Washington, DC
owned by Natalie Gamble (LMT, CMLDT, MMP, CST). Specializes in Lymphatic Drainage and
Oncology Massage. The site showcases services, credentials, and contact options.

## Tech Stack
- **Next.js 16** (App Router, Turbopack, Server Components + Client Components)
- **React 19**
- **Tailwind CSS 3** for styling (utility-first, custom restricted color palette)
- **@headlessui/react v2** for accessible UI components (Dialog, Popover, Transition)
- **@heroicons/react v2** for icons (import from `24/outline` and `24/solid`)
- **@vercel/analytics** + **@next/third-parties** (Google Analytics)
- No backend — static site with contact links (phone, email, text)

## Development
```bash
npm run dev         # Dev server at http://localhost:3000
npm run build       # Production build to .next/
npm start           # Serve production build
npm run lint        # ESLint (Next.js config)
```

## Project Structure
```
app/
├── globals.css                    # Tailwind directives + animations
├── layout.js                      # Root layout (fonts, providers, header, analytics, JSON-LD)
├── page.js                        # Home page
├── not-found.js                   # 404 page
├── sitemap.js                     # Dynamic sitemap generation
├── about/page.js
├── faq/page.js
├── privacy-policy/page.js
├── terms-and-conditions/page.js
└── services/
    ├── lymphatic/
    │   ├── manual-lymphatic-drainage/page.js
    │   ├── pre-post-op-lymphatic-massage/page.js
    │   ├── lymphedema-lipedema-management/page.js
    │   ├── fertility-ivf-support-massage/page.js
    │   └── pregnancy-postpartum-lymphatic-massage/page.js
    ├── oncology-massage/page.js
    └── craniosacral-therapy/page.js

src/
├── assets/
│   ├── fonts/          # SaturdayScriptOblique.otf
│   ├── images/         # ng.jpeg
│   └── logos/          # Brand logo variants
├── components/
│   ├── Header.js       # Fixed nav with logo and "Schedule" button (client)
│   ├── Info.js         # Landing section (client)
│   ├── AboutMe.js      # About page (client)
│   ├── FAQ.js          # FAQ with scroll-spy accordion (client)
│   ├── ServicePage.js  # Shared service layout (client)
│   ├── Footer.js       # Availability, location, links (client)
│   ├── Schedule.js     # Contact modal content (client)
│   ├── ScheduleModal.js        # Schedule modal wired to context (client)
│   ├── TransitionProvider.js   # Page transition state machine (client)
│   ├── DropRevealOverlay.js    # Teardrop animation overlay (client)
│   ├── TransitionLink.js       # Link with transition animation (client)
│   ├── Cautions.js             # Amber caution box
│   ├── PrivacyPolicy.js        # Privacy page content (client)
│   ├── TermsAndConditions.js   # Terms page content (client)
│   └── [7 modality pages]     # ManualLymphaticDrainage, PrePostOperativeLymphatic, etc.
├── config/
│   ├── seo.js          # SEO data per route (title, description)
│   ├── booking.js      # Booking URLs per route
│   ├── routeColors.js  # DropReveal color per route
│   ├── themes.js       # Theme config (blue/purple/gray) per service
│   └── faqData.js      # FAQ section data
├── context/
│   └── ScheduleContext.js  # Schedule modal state (client)
├── ui/
│   ├── Button.js           # Reusable button variants (client)
│   ├── Modal.js            # Headless UI Dialog wrapper (client)
│   └── ScheduleButton.js   # Schedule button + Mobile FAB (client)
└── utils/
    └── classNames.js   # Conditional Tailwind class helper
```

## Design & Theme
- Clean, minimalist, professional aesthetic
- Custom Tailwind palette: blue (#5D739C), gray (#808080), purple (#9277AB)
- Inter font via `next/font/google`, Saturday Script via `next/font/local`
- Light gray background, responsive (mobile-first with `sm:` breakpoints)
- DropReveal page transition: teardrop falls → color wash → fade reveal

## Conventions
- Server Components for pages (generateMetadata for SEO)
- `'use client'` directive on all interactive components
- `useTransitionNavigate()` hook for animated page navigation
- `useSchedule()` context hook for schedule modal
- `@/*` path alias maps to project root (jsconfig.json)
- `classNames()` helper in `src/utils/classNames.js`
- Images imported as ES modules (use `.src` for img tags)

## SEO Guidelines
- Every page uses `generateMetadata()` in its `page.js` — data from `src/config/seo.js`
- Maintain proper heading hierarchy: one `<h1>` per page, then `<h2>`, `<h3>`, etc.
- Use semantic HTML elements (`<main>`, `<section>`, `<nav>`, `<header>`) with `aria-label`
- When adding new routes, add to `src/config/seo.js`, `app/sitemap.js`, and `src/config/routeColors.js`
- JSON-LD structured data in `app/layout.js`
- Contact links: `tel:+18505293740`, `sms:+18505293740`, `mailto:user@example.com`
- All images must have descriptive `alt` text

## Deployment
- Hosted on **Vercel** (Next.js framework preset)
- Vercel Analytics auto-detected (no env vars needed)
- Google Analytics via `@next/third-parties` (gaId: G-08T80CNSW3)
- Redirects in `next.config.js` (8 legacy URL redirects)

# CLAUDE.md — Ebb & Flow Web

## About
Single-page website for **Ebb & Flow**, a mobile massage therapy studio in Austin, TX
owned by Natalie Gamble (LMT, CMLDT, MMP). Specializes in Lymphatic Drainage and
Oncology Massage. The site showcases services, credentials, and contact options.

## Tech Stack
- **React 18** (Create React App)
- **Tailwind CSS 3** for styling (utility-first, custom restricted color palette)
- **@headlessui/react** for accessible UI components (Dialog, Popover, Transition)
- **@heroicons/react** for icons
- No routing library — single page app
- No backend — static site with contact links (phone, email, text)

## Development
```bash
npm start           # Dev server at http://localhost:3000
npm run build       # Production build to ./build
npm test            # Jest + React Testing Library
```

## Project Structure
```
src/
├── assets/
│   ├── images/         # ng.jpeg, Austin Texas.png
│   ├── logos/          # Brand logo variants (gray-blue, purple-blue, white)
│   └── name-logos/     # Named logo variants (11 files)
├── components/
│   ├── App.js          # Main app, manages schedule modal state
│   ├── Header.js       # Fixed nav with logo and "Schedule" button
│   ├── Info.js         # Landing section: photo, credentials, services, location
│   └── Schedule.js     # Contact modal (Text/Call/Email)
├── utils/
│   ├── classNames.js   # Shared classNames() helper for conditional Tailwind classes
│   ├── reportWebVitals.js
│   └── vitals.js       # Vercel Analytics integration
├── index.js            # React entry point
├── index.css           # Tailwind directives + global styles
├── App.test.js         # CRA test file
└── setupTests.js       # CRA test config
```

## Design & Theme
- Clean, minimalist, professional aesthetic
- Custom Tailwind palette: blue (#5D739C), gray (#808080), purple (#9277AB)
- Inter font (loaded from rsms.me CDN)
- Light gray background, responsive (mobile-first with `sm:` breakpoints)

## Conventions
- Functional components with hooks
- `classNames()` helper in `src/utils/classNames.js` for conditional Tailwind classes
- ESLint via CRA defaults (react-app preset)
- Images imported as ES modules
- Vercel Analytics enabled in production

## SEO Guidelines
- Every page/route must have a unique `<title>` — set via `useEffect` in `App.js`
- Maintain proper heading hierarchy: one `<h1>` per page, then `<h2>`, `<h3>`, etc.
- Use semantic HTML elements (`<main>`, `<section>`, `<nav>`, `<header>`) with `aria-label` where appropriate
- When adding new routes, add them to `public/sitemap.xml` and update the title map in `App.js`
- Keep JSON-LD structured data in `public/index.html` up to date (services, pricing, contact info)
- Contact links must use proper format: `tel:+18505293740`, `sms:+18505293740`, `mailto:user@example.com` (no spaces)
- All images must have descriptive `alt` text
- Meta description in `index.html` should be 120-160 characters with relevant keywords

## Deployment
- Hosted on **Vercel**
- Analytics via `REACT_APP_VERCEL_ANALYTICS_ID` in `.env.production`

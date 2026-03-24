# WaslaSoft Clone (React)

A React + Vite single-page application that recreates the WaslaSoft marketing site with multiple routed pages, shared layout components, and responsive styling.

## Tech Stack

- React 19
- React Router 7
- Vite 8
- ESLint 9
- Plain CSS (global + page-level styles)
- Font Awesome + Google Fonts (loaded from CDN in `index.html`)

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/products` | Products |
| `/features` | Features |
| `/company` | Company |
| `/partners` | Partners |
| `/faq` | FAQ |
| `/blog` | Blog |
| `/contact` | Contact |

## Project Structure

```text
.
├── public/
│   ├── images/
│   ├── assets/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Features.jsx
│   │   ├── Company.jsx
│   │   ├── Partners.jsx
│   │   ├── FAQ.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js `^20.19.0` or `>=22.12.0`
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Create production build in `dist/`
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Cloudflare Deploy Notes

- `wrangler.toml` configures static asset deployment from `dist/`.
- SPA routing fallback is handled by `assets.not_found_handling = "single-page-application"`.
- Do not add `/* /index.html 200` back into `_redirects`; Cloudflare Worker deployments reject that rule with `code: 10021`.

## Styling Notes

- `src/index.css` contains most shared styling for layout, sections, and components.
- `src/pages/Home.css`, `Contact.css`, `FAQ.css`, and `Partners.css` add page-specific styles.
- `src/App.css` currently exists but is empty.

## Current Status

- Layout and content pages are implemented and routed.
- Most pages are currently content-first/static UI (no backend/API integration).
- Contact and newsletter forms are presentational only.
- Several links still point to legacy `.html` paths or `#` placeholders and should be migrated to router-aware links.
- The mobile hamburger markup is present, but menu toggle behavior is not wired to React state yet.

## Customization

- Update brand copy and CTA text in `src/pages/*.jsx`.
- Replace logos and imagery inside `public/images`.
- Adjust theme colors and spacing in `src/index.css`.

# Clarity — Landing Page

A conversion-focused landing page for **Clarity**, a collaborative spreadsheet replacement for mid-sized businesses.

## Overview

Clarity is a real-time data-management and workflow platform designed to replace spreadsheets for teams of 20–500 employees. This landing page targets operations managers, finance leads, and CEOs, driving them toward a free-trial sign-up or demo request.

## Tech Stack

- Vanilla HTML5, CSS3, and JavaScript (ES2020+)
- No frameworks, no libraries, no dependencies
- Google Fonts — Inter (400, 500, 600, 700, 800)

## Project Structure

```
clarity-landing/
├── index.html          # All HTML markup
├── css/
│   ├── reset.css       # Minimal modern reset
│   ├── variables.css   # All CSS design tokens (50+ custom properties)
│   └── styles.css      # All layout and component styles
├── js/
│   └── main.js         # All interactivity (7 init functions)
└── assets/             # Empty — all visuals are CSS-only
```

## Sections

1. **Navigation** — Fixed top bar with logo, links, CTA, and mobile hamburger menu
2. **Hero** — Full-width headline, sub-copy, dual CTA buttons, trust nudge
3. **Social Proof** — 4-stat strip (10,000+ teams, 98% satisfaction, 4.9/5 rating, <5 min onboarding)
4. **Features** — 4-card grid: Real-Time Collaboration, Smart Formulas, Role-Based Access, One-Click Reports
5. **How It Works** — 3-step horizontal flow: Connect, Invite, Work
6. **Testimonials** — 3 customer quotes with star ratings and author avatars
7. **Pricing** — 3-tier grid: Starter ($0), Pro ($29/mo, featured), Enterprise (custom)
8. **Final CTA** — Centered conversion block with primary and sales CTAs
9. **Footer** — Brand column, Product, Company, and Legal link columns

## JavaScript Features

- `initNavScroll()` — Adds blur effect to nav on scroll
- `initMobileMenu()` — Hamburger toggle with ARIA state management
- `initSmoothScroll()` — Offset-aware smooth scrolling for all anchor links
- `initAnimations()` — IntersectionObserver scroll animations with stagger delays
- `initTypewriter()` — Cycling typewriter effect in the hero heading
- `initModal()` — Sign-up modal with focus trap, ESC-to-close, and form validation
- `initPricingToggle()` — Monthly/annual billing toggle

## Design Principles

- Dark mode only — flat dark surfaces, no gradient backgrounds
- Accent color: `#22C55E` (green)
- Typography: Inter across all weights
- Mobile-first responsive CSS with breakpoints at 480px, 768px, 1024px, and 1280px
- WCAG AA accessible — visible focus rings, ARIA labels, semantic HTML

## Running Locally

No build step required. Open `index.html` directly in a browser or serve with any static file server:

```bash
npx serve .
```

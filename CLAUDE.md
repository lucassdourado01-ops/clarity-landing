# CLAUDE.md — Clarity Landing Page

> This file is the authoritative specification for the Clarity landing page project.
> A Claude Code agent reading only this file must be able to build the complete,
> production-ready landing page without asking any questions.

---

## 1. Project Overview & Goal

**Product name:** Clarity
**Tagline:** "Spreadsheets are holding your team back. Clarity isn't."
**Product description:** A collaborative data-management and workflow platform built to replace spreadsheets for mid-sized businesses (20–500 employees). It offers real-time collaboration, smart formulas, role-based access, and one-click reporting.

**Goal of this landing page:** Convert mid-sized business decision-makers (ops managers, finance leads, CEOs) into free-trial sign-ups or demo requests. The page must communicate clarity of value, trust, and ease of adoption.

**Design philosophy:** Dark mode only, premium SaaS aesthetic, high contrast, no gradients on backgrounds (flat dark surfaces), subtle purple accent system. The page must feel calm and confident — not flashy.

**No frameworks.** No React, Vue, Angular, Tailwind, Bootstrap, or any CSS/JS framework of any kind. Everything is hand-crafted vanilla HTML, CSS, and JavaScript.

---

## 2. File & Folder Structure

The complete project must match this exact tree. Do not create any other files.

```
clarity-landing/
├── CLAUDE.md
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── (empty — no image assets are required; all visuals are CSS-only)
```

**File responsibilities:**

| File | Responsibility |
|---|---|
| `index.html` | All HTML markup. Links all CSS files (reset → variables → styles) and the JS file. |
| `css/reset.css` | Minimal modern reset (box-sizing, margin/padding zero, img max-width). |
| `css/variables.css` | All CSS custom properties (design tokens). No rules, only `:root { }`. |
| `css/styles.css` | All layout, component, and utility styles. Imports nothing — relies on cascade order. |
| `js/main.js` | All interactivity: nav scroll behavior, mobile menu toggle, smooth scroll, scroll animations. `defer` attribute handles load order. |

---

## 3. Design Token Table (CSS Custom Properties)

Define all of the following inside `:root { }` in `css/variables.css`. No other values are permitted in `css/styles.css` — all colors, spacing, typography, and radii must reference these variables.

### 3.1 Color Tokens

| Variable | Value | Usage |
|---|---|---|
| `--color-bg` | `#0A0A0F` | Page background, outer shell |
| `--color-surface` | `#13131A` | Cards, nav bar, footer, input fields |
| `--color-surface-raised` | `#1C1C27` | Hover states on cards, modals |
| `--color-border` | `#2A2A3D` | Subtle dividers, card borders, input borders |
| `--color-accent` | `#6C63FF` | Primary CTA buttons, active states, highlights |
| `--color-accent-hover` | `#857DFF` | Hover state for accent-colored elements |
| `--color-accent-muted` | `rgba(108, 99, 255, 0.15)` | Accent tint backgrounds (feature icons, badges) |
| `--color-text-primary` | `#F0F0FF` | Headings, primary body text |
| `--color-text-secondary` | `#A0A0B8` | Subheadings, supporting copy, labels |
| `--color-text-disabled` | `#505068` | Placeholders, disabled elements |
| `--color-success` | `#4ADE80` | Checkmarks in pricing, positive indicators |
| `--color-warning` | `#FACC15` | Star ratings in testimonials |
| `--color-danger` | `#F87171` | Error states |
| `--color-white` | `#FFFFFF` | Text on accent-colored buttons |

### 3.2 Typography Tokens

| Variable | Value | Usage |
|---|---|---|
| `--font-family-base` | `'Inter', system-ui, -apple-system, sans-serif` | All body and UI text |
| `--font-family-display` | `'Inter', system-ui, sans-serif` | Headings (same family, different weight) |
| `--font-size-xs` | `0.75rem` | 12px — labels, legal text |
| `--font-size-sm` | `0.875rem` | 14px — secondary copy, captions |
| `--font-size-base` | `1rem` | 16px — default body |
| `--font-size-md` | `1.125rem` | 18px — lead paragraphs |
| `--font-size-lg` | `1.25rem` | 20px — card headings |
| `--font-size-xl` | `1.5rem` | 24px — section subheadings |
| `--font-size-2xl` | `2rem` | 32px — section headings |
| `--font-size-3xl` | `2.75rem` | 44px — hero subheading |
| `--font-size-4xl` | `3.75rem` | 60px — hero main heading |
| `--font-weight-regular` | `400` | Body text |
| `--font-weight-medium` | `500` | Labels, nav links |
| `--font-weight-semibold` | `600` | Card headings, button text |
| `--font-weight-bold` | `700` | Section headings |
| `--font-weight-extrabold` | `800` | Hero heading |
| `--line-height-tight` | `1.15` | Display headings |
| `--line-height-snug` | `1.35` | Sub-headings |
| `--line-height-normal` | `1.6` | Body text |
| `--line-height-loose` | `1.8` | Long-form paragraphs |

### 3.3 Spacing Tokens

Use an 8px base grid.

| Variable | Value |
|---|---|
| `--space-1` | `0.25rem` (4px) |
| `--space-2` | `0.5rem` (8px) |
| `--space-3` | `0.75rem` (12px) |
| `--space-4` | `1rem` (16px) |
| `--space-5` | `1.25rem` (20px) |
| `--space-6` | `1.5rem` (24px) |
| `--space-8` | `2rem` (32px) |
| `--space-10` | `2.5rem` (40px) |
| `--space-12` | `3rem` (48px) |
| `--space-16` | `4rem` (64px) |
| `--space-20` | `5rem` (80px) |
| `--space-24` | `6rem` (96px) |

### 3.4 Layout Tokens

| Variable | Value | Usage |
|---|---|---|
| `--container-max` | `1200px` | Max width for all content wrappers |
| `--container-padding` | `var(--space-6)` | Horizontal padding on containers |
| `--nav-height` | `72px` | Fixed navbar height |

### 3.5 Border & Radius Tokens

| Variable | Value |
|---|---|
| `--radius-sm` | `6px` |
| `--radius-md` | `10px` |
| `--radius-lg` | `16px` |
| `--radius-xl` | `24px` |
| `--radius-full` | `9999px` |
| `--border-width` | `1px` |

### 3.6 Shadow Tokens

| Variable | Value |
|---|---|
| `--shadow-sm` | `0 1px 3px rgba(0, 0, 0, 0.4)` |
| `--shadow-md` | `0 4px 16px rgba(0, 0, 0, 0.5)` |
| `--shadow-lg` | `0 8px 32px rgba(0, 0, 0, 0.6)` |
| `--shadow-accent` | `0 4px 24px rgba(108, 99, 255, 0.3)` |

### 3.7 Transition Tokens

| Variable | Value |
|---|---|
| `--transition-fast` | `150ms ease` |
| `--transition-base` | `250ms ease` |
| `--transition-slow` | `400ms ease` |

---

## 4. Section-by-Section Specification

### Layout Rules (All Sections)

- Every section uses a `.container` wrapper: `max-width: var(--container-max); margin: 0 auto; padding: 0 var(--container-padding);`
- Default section vertical padding: `var(--space-24)` top and bottom on desktop, `var(--space-16)` on mobile.
- Sections alternate surface colors: odd sections use `--color-bg`, even sections use `--color-surface`.
- All headings use `letter-spacing: -0.02em`.

---

### Section 1 — Navigation (`<nav>`)

**BEM block:** `nav`

**Behavior:**
- Fixed to top of viewport (`position: fixed; top: 0; left: 0; width: 100%; z-index: 100`).
- Height: `var(--nav-height)`.
- Background: `var(--color-surface)` with `border-bottom: var(--border-width) solid var(--color-border)`.
- On scroll (JS): when `window.scrollY > 50`, add class `nav--scrolled` which applies `backdrop-filter: blur(12px)` and increases border-bottom opacity to full.
- Body must have `padding-top: var(--nav-height)` to prevent content from hiding under the fixed nav.

**Left side — Logo:**
- Text logo: `<span class="nav__logo">Clarity</span>`
- Font: `var(--font-size-xl)`, `var(--font-weight-bold)`, color `var(--color-accent)`.
- No image/SVG required.

**Center — Links (desktop only, hidden on mobile):**
- Anchor links to page sections. Exact link text and `href` targets:
  - "Features" → `#features`
  - "How It Works" → `#how-it-works`
  - "Testimonials" → `#testimonials`
  - "Pricing" → `#pricing`
- Class: `nav__link`. Color: `var(--color-text-secondary)`. On hover: `var(--color-text-primary)`. Transition: `var(--transition-fast)`.

**Right side:**
- "Sign In" link: `nav__link nav__link--signin`. Same color as nav links.
- "Start Free" CTA button: `btn btn--accent btn--sm`. Text: "Start Free". Href: `#pricing`.

**Mobile menu:**
- On screens `< 768px`: hide center links and "Sign In". Show hamburger button (`nav__hamburger`).
- Hamburger: three horizontal bars (`<span>` elements), color `var(--color-text-primary)`.
- When hamburger is clicked (JS), add `nav--open` class to `<nav>`. This reveals a full-width dropdown (`nav__mobile-menu`) absolutely positioned below the nav bar, background `var(--color-surface)`, containing all nav links stacked vertically plus the "Start Free" button.
- Hamburger transforms to an X when `nav--open` is active.

---

### Section 2 — Hero (`<section id="hero">`)

**BEM block:** `hero`
**Background:** `var(--color-bg)`
**Vertical padding:** `var(--space-24)` top, `var(--space-20)` bottom.
**Layout:** Single column, centered text (`text-align: center`), max-width `800px` on the text container, centered with `margin: 0 auto`.

**Content (in order):**

1. **Eyebrow label:**
   - `<p class="hero__eyebrow">Spreadsheet Replacement for Modern Teams</p>`
   - Font size: `var(--font-size-sm)`, color: `var(--color-accent)`, weight: `var(--font-weight-semibold)`.
   - Background: `var(--color-accent-muted)`, padding: `var(--space-2) var(--space-4)`, border-radius: `var(--radius-full)`.
   - Displayed as `inline-block`, centered.
   - Margin-bottom: `var(--space-6)`.

2. **Main heading:**
   - `<h1 class="hero__heading">Stop Managing Data.<br>Start Understanding It.</h1>`
   - Font size: `var(--font-size-4xl)` (desktop), `var(--font-size-3xl)` (≤768px), `var(--font-size-2xl)` (≤480px).
   - Weight: `var(--font-weight-extrabold)`.
   - Line height: `var(--line-height-tight)`.
   - Color: `var(--color-text-primary)`.
   - Margin-bottom: `var(--space-6)`.

3. **Sub-heading paragraph:**
   - `<p class="hero__sub">Clarity replaces your team's tangled spreadsheets with a real-time, collaborative workspace built for mid-sized businesses — without the enterprise price tag.</p>`
   - Font size: `var(--font-size-md)`, color: `var(--color-text-secondary)`, line-height: `var(--line-height-normal)`.
   - Max-width: `600px`, centered.
   - Margin-bottom: `var(--space-10)`.

4. **CTA button group:**
   - `<div class="hero__cta-group">`
   - Button 1 (primary): `<a href="#pricing" class="btn btn--accent btn--lg">Start for Free</a>`
   - Button 2 (secondary): `<a href="#how-it-works" class="btn btn--ghost btn--lg">See How It Works</a>`
   - Gap between buttons: `var(--space-4)`. Display: `flex`, `flex-wrap: wrap`, `justify-content: center`.

5. **Trust nudge:**
   - `<p class="hero__trust">No credit card required &nbsp;·&nbsp; Free forever plan &nbsp;·&nbsp; Setup in 5 minutes</p>`
   - Font size: `var(--font-size-sm)`, color: `var(--color-text-disabled)`.
   - Margin-top: `var(--space-6)`.

**No hero image or illustration.** The visual weight comes from typography alone.

---

### Section 3 — Social Proof Bar (`<section id="social-proof">`)

**BEM block:** `social-proof`
**Background:** `var(--color-surface)`
**Vertical padding:** `var(--space-12)` top and bottom.
**Purpose:** Build instant credibility with a stat strip. No logos — purely numbers.

**Layout:** Horizontal flex row, `justify-content: center`, `gap: var(--space-12)`, wraps on mobile to a 2-column grid.

**Content — exactly 4 stat items (`social-proof__item`):**

| Stat | Label |
|---|---|
| `10,000+` | Teams worldwide |
| `98%` | Customer satisfaction |
| `4.9/5` | Average rating |
| `< 5 min` | Average onboarding time |

**Each item structure:**
```html
<div class="social-proof__item">
  <span class="social-proof__number">10,000+</span>
  <span class="social-proof__label">Teams worldwide</span>
</div>
```

- Number: font-size `var(--font-size-2xl)`, weight `var(--font-weight-bold)`, color `var(--color-accent)`.
- Label: font-size `var(--font-size-sm)`, color `var(--color-text-secondary)`.
- Item text-align: center.
- Dividers between items on desktop: `border-right: 1px solid var(--color-border)` on all but last.

---

### Section 4 — Features (`<section id="features">`)

**BEM block:** `features`
**Background:** `var(--color-bg)`
**Vertical padding:** standard (`var(--space-24)`).

**Section header:**
- `<h2 class="section__heading">Everything Your Team Needs</h2>`
- `<p class="section__sub">Built for the workflows that spreadsheets were never designed to handle.</p>`
- Centered, max-width `600px`.
- `section__heading`: font-size `var(--font-size-2xl)`, weight `var(--font-weight-bold)`, color `var(--color-text-primary)`, margin-bottom `var(--space-4)`.
- `section__sub`: font-size `var(--font-size-base)`, color `var(--color-text-secondary)`, margin-bottom `var(--space-16)`.

**Feature grid:**
- CSS Grid: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`, gap `var(--space-6)`.
- Exactly **4 feature cards** (`features__card`).

**Card style:**
- Background: `var(--color-surface)`.
- Border: `var(--border-width) solid var(--color-border)`.
- Border-radius: `var(--radius-lg)`.
- Padding: `var(--space-8)`.
- Transition: `var(--transition-base)`.
- On hover: `background: var(--color-surface-raised); border-color: var(--color-accent); transform: translateY(-2px); box-shadow: var(--shadow-md)`.

**Card structure:**
```html
<div class="features__card animate-on-scroll">
  <div class="features__icon" aria-hidden="true">⚡</div>
  <h3 class="features__title">Real-Time Collaboration</h3>
  <p class="features__body">...</p>
</div>
```

- `features__icon`: 48×48px, background `var(--color-accent-muted)`, border-radius `var(--radius-md)`, display flex, centered. Use a simple Unicode character. Color of icon: `var(--color-accent)`. Font-size `1.5rem`.
- `features__title`: font-size `var(--font-size-lg)`, weight `var(--font-weight-semibold)`, color `var(--color-text-primary)`, margin: `var(--space-4) 0 var(--space-3)`.
- `features__body`: font-size `var(--font-size-base)`, color `var(--color-text-secondary)`, line-height `var(--line-height-normal)`.

**The 4 feature cards (exact copy):**

**Card 1 — Real-Time Collaboration**
- Icon: `⚡` (U+26A1)
- Title: `Real-Time Collaboration`
- Body: `Every edit, comment, and update is synced instantly across your entire team. No more emailing spreadsheet versions back and forth. Everyone always works on the same source of truth.`

**Card 2 — Smart Formulas**
- Icon: `∑` (U+2211)
- Title: `Smart Formulas`
- Body: `Write in plain English or use our formula assistant to build complex calculations in seconds. Clarity automatically suggests corrections and explains what each formula does.`

**Card 3 — Role-Based Access**
- Icon: `🔒` (U+1F512)
- Title: `Role-Based Access`
- Body: `Control exactly who can view, edit, or export every table, column, and row. Finance sees finance. Sales sees sales. Your data stays where it belongs.`

**Card 4 — One-Click Reports**
- Icon: `📊` (U+1F4CA)
- Title: `One-Click Reports`
- Body: `Turn any view into a polished PDF or shareable dashboard link instantly. Scheduled reports land in stakeholder inboxes automatically — no manual exports required.`

---

### Section 5 — How It Works (`<section id="how-it-works">`)

**BEM block:** `how-it-works`
**Background:** `var(--color-surface)`
**Vertical padding:** standard.

**Section header:**
- Heading: `How Clarity Works`
- Sub: `Three steps from sign-up to a fully migrated, collaborative workspace.`

**Layout:** Three steps in a horizontal row on desktop (`display: flex; gap: var(--space-8)`). On mobile (< 768px): single column stack.

**Step connector line (desktop only):**
- Between step cards, render a horizontal dashed line using a pseudo-element or wrapper element: `border-top: 1px dashed var(--color-border)` absolutely positioned at the midpoint of the step number circles.

**Each step (`how-it-works__step`):**
```html
<div class="how-it-works__step animate-on-scroll">
  <div class="how-it-works__number" aria-hidden="true">1</div>
  <h3 class="how-it-works__title">Connect Your Data</h3>
  <p class="how-it-works__body">...</p>
</div>
```

- `how-it-works__number`: 56×56px circle, background `var(--color-accent)`, color `var(--color-white)`, font-size `var(--font-size-xl)`, font-weight `var(--font-weight-bold)`, centered with flexbox.
- `how-it-works__title`: font-size `var(--font-size-lg)`, weight `var(--font-weight-semibold)`, color `var(--color-text-primary)`, margin: `var(--space-5) 0 var(--space-3)`.
- `how-it-works__body`: font-size `var(--font-size-base)`, color `var(--color-text-secondary)`, line-height `var(--line-height-normal)`.
- Step text-align: center on desktop.

**The 3 steps (exact copy):**

**Step 1 — Connect Your Data**
Import your existing spreadsheets from Excel or Google Sheets in one click. Clarity reads your structure and automatically detects column types, relationships, and formulas.

**Step 2 — Invite Your Team**
Add teammates by email and assign roles in under a minute. Clarity sends onboarding nudges so your team is productive from day one — no training sessions required.

**Step 3 — Work Without Limits**
Collaborate in real time, build reports, set automations, and share insights — all inside Clarity. Your spreadsheet days are officially over.

---

### Section 6 — Testimonials (`<section id="testimonials">`)

**BEM block:** `testimonials`
**Background:** `var(--color-bg)`
**Vertical padding:** standard.

**Section header:**
- Heading: `Trusted by Teams Like Yours`
- Sub: `Here's what mid-sized business leaders say after switching to Clarity.`

**Layout:** Three testimonial cards in a CSS Grid: `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`, gap `var(--space-6)`.

**Card style:**
- Background: `var(--color-surface)`.
- Border: `var(--border-width) solid var(--color-border)`.
- Border-radius: `var(--radius-lg)`.
- Padding: `var(--space-8)`.

**Card structure:**
```html
<div class="testimonials__card animate-on-scroll">
  <div class="testimonials__stars" aria-label="5 out of 5 stars">
    <span aria-hidden="true">★★★★★</span>
  </div>
  <blockquote class="testimonials__quote">
    <p>"..."</p>
  </blockquote>
  <div class="testimonials__author">
    <div class="testimonials__avatar" aria-hidden="true">JM</div>
    <div>
      <p class="testimonials__name">Jordan Mills</p>
      <p class="testimonials__role">Head of Operations, Fieldstone Co.</p>
    </div>
  </div>
</div>
```

- `testimonials__stars`: color `var(--color-warning)`, font-size `var(--font-size-base)`, margin-bottom `var(--space-4)`.
- `testimonials__quote p`: font-size `var(--font-size-base)`, color `var(--color-text-secondary)`, line-height `var(--line-height-loose)`, font-style italic.
- `testimonials__avatar`: 44×44px circle, background `var(--color-accent-muted)`, color `var(--color-accent)`, font-size `var(--font-size-sm)`, font-weight `var(--font-weight-semibold)`, display flex, centered. Contains 2-letter initials.
- `testimonials__name`: font-size `var(--font-size-sm)`, weight `var(--font-weight-semibold)`, color `var(--color-text-primary)`.
- `testimonials__role`: font-size `var(--font-size-xs)`, color `var(--color-text-secondary)`.
- Author layout: `display: flex; align-items: center; gap: var(--space-3); margin-top: var(--space-6)`.

**The 3 testimonials (exact copy):**

**Testimonial 1:**
- Stars: 5
- Quote: "We replaced 14 shared Google Sheets with one Clarity workspace. The time we've saved on weekly reporting alone paid for the Pro plan in the first month. I genuinely can't believe we waited this long."
- Name: Jordan Mills
- Role: Head of Operations, Fieldstone Co.
- Initials: JM

**Testimonial 2:**
- Stars: 5
- Quote: "The role-based access was the feature that sold our CFO. Sensitive salary data in the same platform as the marketing team's campaign tracker — and nobody sees what they shouldn't. That's exactly what we needed."
- Name: Priya Sharma
- Role: Finance Director, Luminar Health
- Initials: PS

**Testimonial 3:**
- Stars: 5
- Quote: "Onboarding 40 people sounds terrifying but Clarity's invite flow is genuinely the best I've ever used. Our team was running their own reports within a week. Zero IT involvement."
- Name: Marcus Webb
- Role: CEO, Trellworth Solutions
- Initials: MW

---

### Section 7 — Pricing (`<section id="pricing">`)

**BEM block:** `pricing`
**Background:** `var(--color-surface)`
**Vertical padding:** standard.

**Section header:**
- Heading: `Simple, Transparent Pricing`
- Sub: `No hidden fees. No per-seat surprises. Start free and grow when you're ready.`

**Layout:** Three pricing cards in a CSS Grid: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`, gap `var(--space-6)`, align-items `stretch`.

The **Pro card** is visually elevated:
- Border: `2px solid var(--color-accent)` (instead of `1px solid var(--color-border)`).
- Box-shadow: `var(--shadow-accent)`.
- It contains a "Most Popular" badge.

**Card structure:**
```html
<div class="pricing__card pricing__card--pro animate-on-scroll">
  <div class="pricing__badge">Most Popular</div>
  <h3 class="pricing__tier">Pro</h3>
  <div class="pricing__price">
    <span class="pricing__amount">$29</span>
    <span class="pricing__period">/month</span>
  </div>
  <p class="pricing__users">Up to 50 users</p>
  <ul class="pricing__features" role="list">
    <li class="pricing__feature">
      <span class="pricing__check" aria-hidden="true">✓</span> Feature text
    </li>
  </ul>
  <a href="#" class="btn btn--accent btn--full">Get Started</a>
</div>
```

**Exact pricing card content:**

**Tier 1 — Starter**
- Badge: none
- Tier name: `Starter`
- Amount: `$0`
- Period: `/month`
- Users: `Up to 5 users`
- CTA button: `btn btn--ghost btn--full`, text: "Start for Free", href: `#`
- Features list (6 items):
  1. 5 workspaces
  2. Real-time collaboration
  3. 100 MB storage
  4. Basic formulas
  5. Community support
  6. CSV import/export

**Tier 2 — Pro** (featured/elevated)
- Badge: `Most Popular`
- Tier name: `Pro`
- Amount: `$29`
- Period: `/month`
- Users: `Up to 50 users`
- CTA button: `btn btn--accent btn--full`, text: "Start Pro Trial", href: `#`
- Features list (8 items):
  1. Unlimited workspaces
  2. Real-time collaboration
  3. 50 GB storage
  4. Smart formulas + AI assist
  5. Role-based access control
  6. One-click PDF reports
  7. Email & chat support
  8. Everything in Starter

**Tier 3 — Enterprise**
- Badge: none
- Tier name: `Enterprise`
- Amount: `Custom`
- Period: ` pricing`
- Users: `Unlimited users`
- CTA button: `btn btn--ghost btn--full`, text: "Contact Sales", href: `mailto:sales@clarity.app`
- Features list (8 items):
  1. Unlimited everything
  2. SSO & SAML integration
  3. Advanced audit logs
  4. Custom data retention
  5. Dedicated account manager
  6. SLA guarantee
  7. On-premise deployment option
  8. Everything in Pro

**Pricing token styles:**
- `pricing__badge`: position `absolute`, top `-14px`, left `50%`, transform `translateX(-50%)`. Background `var(--color-accent)`. Color `var(--color-white)`. Font-size `var(--font-size-xs)`. Weight `var(--font-weight-semibold)`. Padding `var(--space-1) var(--space-3)`. Border-radius `var(--radius-full)`. White-space `nowrap`.
- Card: `position: relative` to contain the badge.
- `pricing__tier`: font-size `var(--font-size-lg)`, weight `var(--font-weight-semibold)`, color `var(--color-text-secondary)`, margin-bottom `var(--space-4)`.
- `pricing__amount`: font-size `var(--font-size-3xl)`, weight `var(--font-weight-extrabold)`, color `var(--color-text-primary)`.
- `pricing__period`: font-size `var(--font-size-sm)`, color `var(--color-text-secondary)`.
- `pricing__users`: font-size `var(--font-size-sm)`, color `var(--color-text-secondary)`, margin: `var(--space-2) 0 var(--space-6)`.
- `pricing__features`: list-style none, padding 0, margin-bottom `var(--space-8)`, display flex, flex-direction column, gap `var(--space-3)`.
- `pricing__feature`: display flex, align-items flex-start, gap `var(--space-3)`, font-size `var(--font-size-sm)`, color `var(--color-text-secondary)`.
- `pricing__check`: color `var(--color-success)`, font-weight bold, flex-shrink 0.

---

### Section 8 — Final CTA (`<section id="cta">`)

**BEM block:** `cta-final`
**Background:** `var(--color-bg)`
**Vertical padding:** standard.
**Layout:** Single column, centered, max-width `680px`, `margin: 0 auto`, `text-align: center`.

**Content:**
1. `<h2 class="cta-final__heading">Your spreadsheet era is over.</h2>`
   - Font-size `var(--font-size-2xl)` (desktop), `var(--font-size-xl)` (mobile).
   - Weight `var(--font-weight-bold)`, color `var(--color-text-primary)`, margin-bottom `var(--space-4)`.
2. `<p class="cta-final__sub">Join 10,000+ teams that made the switch. Set up your first Clarity workspace in minutes — completely free.</p>`
   - Font-size `var(--font-size-md)`, color `var(--color-text-secondary)`, margin-bottom `var(--space-10)`.
3. CTA button group (same structure as hero):
   - Button 1: `<a href="#pricing" class="btn btn--accent btn--lg">Start for Free — No Card Needed</a>`
   - Button 2: `<a href="mailto:sales@clarity.app" class="btn btn--ghost btn--lg">Talk to Sales</a>`
4. `<p class="cta-final__legal">By signing up you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>`
   - Font-size `var(--font-size-xs)`, color `var(--color-text-disabled)`, margin-top `var(--space-6)`.
   - Links: color `var(--color-text-secondary)`, underline, no hover color change.

---

### Section 9 — Footer (`<footer>`)

**BEM block:** `footer`
**Background:** `var(--color-surface)`
**Border-top:** `var(--border-width) solid var(--color-border)`.
**Vertical padding:** `var(--space-12)` top, `var(--space-8)` bottom.

**Layout:** Two rows.

**Row 1 — 4-column flex grid (desktop), stacked on mobile:**

| Column | Content |
|---|---|
| Brand (col 1, wider) | Logo `Clarity` (same style as nav), tagline `"The smarter way to work with data."` in `var(--color-text-secondary)` |
| Product (col 2) | Heading "Product" + links: Features, How It Works, Pricing, Changelog |
| Company (col 3) | Heading "Company" + links: About, Blog, Careers, Press |
| Legal (col 4) | Heading "Legal" + links: Privacy Policy, Terms of Service, Cookie Policy, Security |

- Column heading: font-size `var(--font-size-sm)`, weight `var(--font-weight-semibold)`, color `var(--color-text-primary)`, margin-bottom `var(--space-4)`.
- Links: display block, font-size `var(--font-size-sm)`, color `var(--color-text-secondary)`, line-height `var(--line-height-loose)`, no underline, on hover color `var(--color-text-primary)`.
- Brand column: `flex: 2` (takes double width). Other columns: `flex: 1`.

**Row 2 — Copyright bar:**
- `<p class="footer__copy">© 2026 Clarity, Inc. All rights reserved.</p>`
- Font-size `var(--font-size-xs)`, color `var(--color-text-disabled)`.
- Border-top: `var(--border-width) solid var(--color-border)`, margin-top `var(--space-10)`, padding-top `var(--space-6)`.
- All footer anchor `href` values: `#` (no real URLs needed).

---

## 5. Technical Rules

### HTML Rules

- MUST use semantic HTML5 elements: `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h6>`, `<blockquote>`, `<ul>`, `<li>`.
- MUST have exactly one `<h1>` on the page (in the hero).
- MUST include `lang="en"` on the `<html>` element.
- MUST include `<meta name="description">` with content: `"Clarity is the collaborative spreadsheet replacement for mid-sized businesses. Real-time editing, smart formulas, and role-based access — free to start."`.
- MUST include `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- MUST include `<meta charset="UTF-8">`.
- MUST include `<meta name="color-scheme" content="dark">`.
- MUST preconnect to Google Fonts and load Inter (weights 400, 500, 600, 700, 800) with `&display=swap`.
- MUST use `<link rel="stylesheet">` tags in this order: `css/reset.css`, `css/variables.css`, `css/styles.css`.
- MUST load `js/main.js` with `defer` attribute at end of `<body>`.
- MUST NOT use `<div>` where a semantic element is appropriate.
- MUST NOT use inline styles for anything except dynamically computed JS values.
- MUST NOT use `<table>` elements for layout.
- MUST NOT use deprecated HTML attributes (`align`, `border` on tables, etc.).
- All interactive elements (buttons, links) MUST have accessible names.
- The `<title>` tag MUST be: `Clarity — Spreadsheet Replacement for Modern Teams`.

### CSS Rules

- MUST follow BEM naming: `.block__element--modifier`.
- MUST use CSS custom properties (tokens from Section 3) for all color, spacing, typography, and radius values. Raw values (e.g., `#6C63FF`, `16px`) MUST NOT appear in `styles.css`.
- MUST be mobile-first: write base styles for mobile, override with `@media (min-width: ...)` for larger screens.
- Breakpoints in use:
  - Mobile base: `< 480px`
  - Small: `min-width: 480px`
  - Tablet: `min-width: 768px`
  - Desktop: `min-width: 1024px`
  - Wide: `min-width: 1280px`
- MUST NOT use `!important` anywhere.
- MUST NOT use CSS frameworks or utility-class libraries.
- MUST NOT use CSS `float` for layout. Use flexbox or grid.
- MUST use `transition` on all interactive state changes (hover, focus).
- Focus styles MUST be visible: `outline: 2px solid var(--color-accent); outline-offset: 3px`. Never use `outline: none` without a replacement.
- `box-sizing: border-box` MUST be applied universally in `reset.css`.
- Font smoothing: `body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }` in `styles.css`.
- MUST include `@media (prefers-reduced-motion: reduce)` to disable all `transform` and `transition` animations for users who prefer reduced motion.

### Button Component Rules (`.btn`)

Define a complete button system in `styles.css`. All rules below are required.

**Base `.btn`:**
- `display: inline-flex; align-items: center; justify-content: center`
- `font-family: var(--font-family-base); font-weight: var(--font-weight-semibold); text-decoration: none`
- `border-radius: var(--radius-md); border: 2px solid transparent; cursor: pointer`
- `transition: background var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast)`
- `white-space: nowrap`

**`.btn--accent`:**
- Background: `var(--color-accent)`, color: `var(--color-white)`, border-color: `var(--color-accent)`.
- Hover: background `var(--color-accent-hover)`, border-color `var(--color-accent-hover)`, box-shadow `var(--shadow-accent)`.

**`.btn--ghost`:**
- Background: `transparent`, color: `var(--color-text-primary)`, border-color: `var(--color-border)`.
- Hover: border-color `var(--color-accent)`, color `var(--color-accent)`.

**Size modifiers:**
- `.btn--sm`: `padding: var(--space-2) var(--space-4); font-size: var(--font-size-sm)`.
- `.btn--lg`: `padding: var(--space-4) var(--space-8); font-size: var(--font-size-base)`.
- Default (no modifier): `padding: var(--space-3) var(--space-6); font-size: var(--font-size-base)`.

**`.btn--full`:** `width: 100%; display: flex`.

### JavaScript Rules

- MUST use ES2020+ syntax (`const`, `let`, arrow functions, optional chaining, template literals).
- MUST NOT use `var`.
- MUST NOT use jQuery or any library.
- MUST attach event listeners with `addEventListener`, never inline `onclick` attributes in HTML.
- MUST NOT block the main thread — no synchronous `fetch`, no heavy DOM operations on ready.
- MUST NOT contain `console.log` statements in final code.

**Required JS behaviors (all in `main.js`):**

**1. `initNavScroll()`**
Listen to `window.scroll` (passive listener). When `scrollY > 50`, add `nav--scrolled` class to `<nav>`. Remove when `scrollY <= 50`.

**2. `initMobileMenu()`**
Toggle `nav--open` class on `<nav>` when hamburger button is clicked. When `nav--open` is added, set `aria-expanded="true"` on the hamburger button; when removed, set `aria-expanded="false"`. Close the menu when any `.nav__link` inside the mobile menu is clicked.

**3. `initSmoothScroll()`**
For all anchor tags whose `href` starts with `#`, prevent default and use `window.scrollTo({ top: targetElement.offsetTop - 72, behavior: 'smooth' })`. The `72` is `NAV_HEIGHT` (define as a constant).

**4. `initAnimations()`**
Use `IntersectionObserver` with threshold `0.15`. Observe all elements with class `animate-on-scroll`. When they intersect, add class `is-visible`.

In CSS:
```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity var(--transition-slow), transform var(--transition-slow);
}
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

Apply `animate-on-scroll` class to: all `.features__card`, all `.how-it-works__step`, all `.testimonials__card`, all `.pricing__card`.

### Performance Rules

- Google Fonts URL MUST include `&display=swap`.
- CSS files MUST NOT contain `@import` (they are linked in `<head>` in order).
- MUST NOT load any third-party scripts (analytics, chat widgets, etc.).
- MUST NOT use base64-encoded images in CSS.
- JS MUST be in a single file loaded with `defer`. No inline `<script>` blocks in HTML.

### Accessibility Rules (WCAG AA)

- All text must have a contrast ratio of at least 4.5:1 against its background.
- All interactive elements must be keyboard-navigable with visible focus indicators.
- `<nav>` MUST have `aria-label="Main navigation"`.
- Mobile hamburger `<button>` MUST have `aria-label="Open navigation menu"` and `aria-expanded="false"` (toggled by JS).
- All `<section>` elements MUST have an `id` attribute.
- Star ratings MUST use `aria-label="5 out of 5 stars"` on the container and `aria-hidden="true"` on the star characters.
- Pricing feature checkmarks MUST use `aria-hidden="true"` on the `✓` character.
- Feature and step icons MUST use `aria-hidden="true"`.
- Color MUST NOT be the only means of conveying information.

---

## 6. Naming Conventions

### BEM CSS Naming

Pattern: `.block__element--modifier`

| Concept | Example |
|---|---|
| Block | `.nav`, `.hero`, `.features`, `.pricing` |
| Element | `.nav__link`, `.hero__heading`, `.features__card` |
| Modifier on block | `.nav--scrolled`, `.nav--open` |
| Modifier on element | `.nav__link--signin`, `.pricing__card--pro` |
| State class (JS-applied) | `.is-visible`, `.is-active`, `.is-open` |
| Utility classes | `.btn`, `.btn--accent`, `.btn--lg`, `.btn--full` |
| Shared layout helpers | `.container`, `.section__heading`, `.section__sub` |

- Block names: lowercase, hyphenated.
- Never use camelCase in CSS class names.
- Never nest BEM blocks inside each other's class names.

### JavaScript Naming

| Type | Convention | Example |
|---|---|---|
| Init functions | camelCase, verb-noun | `initNavScroll`, `initMobileMenu` |
| Event handlers | `handle` prefix | `handleNavScroll`, `handleMenuToggle` |
| Variables | camelCase | `navElement`, `isMenuOpen` |
| Constants | SCREAMING_SNAKE_CASE | `NAV_HEIGHT`, `SCROLL_THRESHOLD` |
| DOM query results | camelCase, descriptive | `mobileMenuButton`, `allNavLinks` |

- Guard all DOM queries: `if (!element) return;` before using any queried element.
- Prefer `document.querySelector` / `document.querySelectorAll` over `getElementById`.

---

## 7. Verification Checklist

Before considering the build complete, every item below must pass.

### HTML Structure
- [ ] `<!DOCTYPE html>` is present
- [ ] `<html lang="en">` is set
- [ ] `<title>` is exactly: `Clarity — Spreadsheet Replacement for Modern Teams`
- [ ] `<meta charset="UTF-8">` is present
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1.0">` is present
- [ ] `<meta name="color-scheme" content="dark">` is present
- [ ] `<meta name="description">` is present with the specified content
- [ ] Google Fonts preconnect links are present, URL includes `&display=swap`
- [ ] CSS is loaded in order: `reset.css` → `variables.css` → `styles.css`
- [ ] `main.js` is loaded with `defer`
- [ ] Exactly one `<h1>` exists on the page
- [ ] All 9 sections are present with correct `id` attributes: `hero`, `social-proof`, `features`, `how-it-works`, `testimonials`, `pricing`, `cta`, plus `<nav>` and `<footer>`
- [ ] `<nav>` has `aria-label="Main navigation"`
- [ ] Mobile hamburger button has `aria-label` and `aria-expanded`

### Design Tokens
- [ ] `css/variables.css` contains all tokens from Section 3
- [ ] No raw hex color values appear in `css/styles.css`
- [ ] No raw pixel spacing values appear in `css/styles.css`

### Navigation
- [ ] Logo text "Clarity" appears in accent color
- [ ] All 4 nav links are present with correct `href` targets
- [ ] "Start Free" button uses `btn--accent btn--sm`
- [ ] Nav becomes `nav--scrolled` on scroll
- [ ] Mobile menu is hidden by default on `< 768px`
- [ ] Hamburger button is visible on `< 768px`

### Hero
- [ ] Eyebrow label is present and styled as a pill
- [ ] `<h1>` text matches spec exactly
- [ ] Sub-heading copy is present
- [ ] Both CTA buttons are present
- [ ] Trust nudge line is present

### Social Proof
- [ ] Exactly 4 stat items are present
- [ ] All numbers and labels match the spec

### Features
- [ ] Exactly 4 feature cards are present
- [ ] Each card has icon, title, and body copy matching the spec
- [ ] Cards have hover animation (translateY + border accent)
- [ ] `animate-on-scroll` class is on each card

### How It Works
- [ ] Exactly 3 steps are present
- [ ] Each step has a numbered circle, title, and body matching the spec
- [ ] `animate-on-scroll` class is on each step

### Testimonials
- [ ] Exactly 3 testimonial cards are present
- [ ] Each card has stars, quote, avatar (initials), name, and role matching the spec
- [ ] Stars have `aria-label`
- [ ] Star characters have `aria-hidden="true"`

### Pricing
- [ ] Exactly 3 pricing cards: Starter, Pro, Enterprise
- [ ] Starter: $0/month, 5 users, 6 features, ghost button
- [ ] Pro: $29/month, 50 users, 8 features, accent button, "Most Popular" badge, elevated border + shadow
- [ ] Enterprise: Custom pricing, unlimited users, 8 features, ghost button, `mailto:` href
- [ ] `pricing__badge` is absolutely positioned above Pro card
- [ ] Checkmarks use `aria-hidden="true"`

### Final CTA
- [ ] Heading, sub, both buttons, and legal copy are all present
- [ ] Legal links use `<a href="#">`

### Footer
- [ ] Logo and tagline are in brand column
- [ ] All 3 link columns (Product, Company, Legal) are present with correct links
- [ ] Copyright row reads `© 2026 Clarity, Inc. All rights reserved.`

### CSS & Responsive
- [ ] Mobile-first media queries are used
- [ ] Page is usable and readable at 375px viewport width
- [ ] No horizontal scrollbar at any viewport width ≥ 320px
- [ ] All cards stack to single column on mobile
- [ ] `@media (prefers-reduced-motion: reduce)` disables animations

### JavaScript
- [ ] `initNavScroll` works correctly
- [ ] `initMobileMenu` toggles menu and `aria-expanded`
- [ ] `initSmoothScroll` intercepts all `#` anchor clicks with nav offset
- [ ] `initAnimations` uses `IntersectionObserver` and applies `is-visible`
- [ ] No `var` declarations exist in `main.js`
- [ ] No inline `onclick` handlers exist in `index.html`
- [ ] No `console.log` statements in `main.js`

### Accessibility
- [ ] Tab through the entire page — every interactive element receives a visible focus ring
- [ ] All text passes WCAG AA contrast (4.5:1 minimum)
- [ ] Color is not the sole differentiator for any information
- [ ] No `outline: none` without a custom focus style replacement

### Performance
- [ ] No render-blocking scripts
- [ ] No third-party scripts are loaded
- [ ] No `@import` in any CSS file

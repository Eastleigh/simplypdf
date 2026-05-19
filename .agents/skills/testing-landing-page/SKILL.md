---
name: testing-landing-page
description: Test the SimplyPDF landing page end-to-end. Use when verifying UI changes to the Phase 1 landing page sections.
---

# Testing SimplyPDF Landing Page

## Prerequisites

- Node.js and npm installed
- Run `npm install` in the repo root

## Start Dev Server

```bash
cd /home/ubuntu/repos/simplypdf
npm run dev
```

Server runs at `http://localhost:3000`.

## Sections to Verify (9 total)

1. **Navbar** — Fixed glassmorphism nav with SimplyPDF logo, 4 nav links (Features, Trends, AI Builder, Pricing), "Get Started Free" button. On mobile (<768px), shows hamburger menu.
2. **Hero** — Badge "AI-Powered Business Discovery", heading containing "profitable businesses", two CTAs, stats strip with 4 cards (12,000+, 3,400+, $2.4M+, 24hrs).
3. **Features** — 6-card grid with section heading "Everything PDFTrendLab should have been".
4. **Trend Dashboard** — Bloomberg Terminal-style table with 5 trend rows. Row #1 should be "AI Prompt Packs" at +340%. Platform pills (TikTok, Etsy, etc.) and "Live — 847 trends tracked" indicator.
5. **AI Builder** — Interactive demo. Left side: 4 prompt buttons + text input. Right side: chat panel with empty state. Clicking a prompt triggers demo conversation with user message + AI response containing 6 deliverables (Niche, Platform, First Product, Brand Name, TikTok Hooks, Email Sequence).
6. **Social Proof** — Live activity feed (5 items) + 6 testimonial cards with revenue figures and star ratings.
7. **Pricing** — 3 tiers: Starter ($29 one-time), Pro ($49/month, "Most Popular" badge), Enterprise ($299/month). "30-day money-back guarantee" text at bottom.
8. **Final CTA** — "Stop scrolling. Start earning." heading, "Start Free Today" button, trust badges.
9. **Footer** — Brand, 3 link columns (Product, Resources, Company), social links.

## Key Interactive Tests

### Navigation Scroll
Click each nav link (Features, Trends, AI Builder, Pricing) and verify the page scrolls to the corresponding `#anchor` section.

### AI Builder Demo
1. Scroll to AI Builder section
2. Verify empty state shows sparkle icon + "Click a prompt or type your business goal"
3. Click first prompt button ("I want a faceless TikTok business")
4. Verify chat panel shows user message + AI response with 6 animated deliverable items
5. Verify "Unlock Full AI Builder" button appears

### Mobile Hamburger Menu
1. Open Chrome DevTools (F12) → toggle device toolbar (Ctrl+Shift+M)
2. Set viewport to ~400px width
3. Verify hamburger icon (3 lines) replaces desktop nav links
4. Click hamburger → verify dropdown shows: Features, Trends, AI Builder, Pricing, "Get Started Free"
5. Click X button → verify menu closes

## Build & Lint Checks

```bash
npm run build   # Should pass with 0 errors
npm run lint    # Should pass with 0 warnings
```

## Tips

- Framer Motion animations are triggered by `whileInView` with `viewport={{ once: true }}`. If an animation doesn't fire, scroll the section fully into view.
- The trend dashboard table hides Platform and Competition columns on mobile — only Trend, Growth, and Est. Revenue are shown.
- The AI Builder demo is a static mockup (not connected to a real AI API). It always shows the same hardcoded response regardless of which prompt is clicked.
- All content is demo/placeholder data. No backend or database is connected in Phase 1.

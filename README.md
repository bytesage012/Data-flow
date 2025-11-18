# DATAFLOW — Case Study / Agency Template

This folder contains a fundraising/donation landing page used as a case study and prototype by the agency.

Why this exists
- Purpose: Demonstrate a donation-focused UX pattern (impact metrics, donation tiers, gallery and a focused donation modal) that the agency can reuse across client projects.
- Note: `DataFlow/src/App.jsx` is currently a copy of the HopeFoundation campaign demo. If you plan to publish distinct case studies, update the content and branding.

Tech stack
- React + Vite + Tailwind CSS

How to run

```bash
npm install
npm run dev
```

Conversion & implementation notes
- The prototype uses `IntersectionObserver` to animate impact counters when visible.
- Donation modal is a client-side mock — integrate a payment gateway and server-side endpoints before going live.

Recommended agency workflow
1. Extract shared components (`ImpactMetrics`, `DonationSidebar`, `DonationModal`, `ProgressBar`) into a small component library.
2. Parameterize content via JSON or a headless CMS so each case study only needs content updates.
3. Add integration tests for analytics and donation flows.


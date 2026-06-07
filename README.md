# Tempus — Time Travel

A grief-tech mobile app prototype that lets people revisit meaningful moments through AR glasses. Built with React + Vite + TypeScript from Figma designs.

🔗 **Live:** https://minjilee816-rgb.github.io/time-travel/

## What's in the app

25+ connected screens across these flows:

- **Onboarding** — Welcome, Create account, Verify email, Consent
- **Glasses pairing** — Pair intro → Scanning → Found → Connected → Quick guide
- **Home** — Greeting + 4 ways to start a memory + bottom tab bar
- **Entry flows**
  - Step-by-step form → Confirm trip
  - Photo picker → EXIF auto-detect
  - Talk it through (real chat) → Collected
  - Voice mode (listening) → Parsed result
- **Travel experience** — Take a breath → Live in memory → Welcome back
- **Visits / History** — List, detail, watch recording, your note (journal)

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/`.

## Stack

- React 19 + TypeScript
- Vite
- React Router (HashRouter for GitHub Pages compatibility)
- Plain CSS (no design-system library) — design tokens in `src/index.css`

## Deploy

Pushes to `main` auto-deploy to GitHub Pages via `.github/workflows/deploy.yml`.

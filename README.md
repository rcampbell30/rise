# Rise Mobility

Rise Mobility is a UK-focused mobility buying guide for people comparing practical home-support products without being spoken to in a clinical or patronising way.

The current site starts with seat lift cushions and expands into broader home-independence guidance for bathroom safety, walking aids, bedroom support and daily living products.

## Live site

Live URL: https://rise-mobility.netlify.app

## Current status

Rise is a polished affiliate-style buying guide, not a fake ecommerce store.

It does not include:

- Cart or checkout flows.
- Fake customer accounts.
- Fake reviews.
- Fake support numbers.
- Fake warranty claims.
- Medical-device claims.
- Guaranteed safety or fall-prevention wording.

It does include:

- A dignified landing page for mobility support at home.
- A sourced “Why This Matters” section.
- Seat lift cushion product guidance.
- A buying checklist.
- Suitability guidance for who these products may or may not help.
- A practical guide hub for related home-independence categories.
- Transparent retailer-link wording.
- SEO metadata, Open Graph metadata and FAQ schema.
- robots.txt and sitemap.xml.

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Lucide icons
- Netlify static deployment

The app lives inside `/app`.

## Deployment

Use these Netlify settings:

```text
Base directory: app
Build command: npm run build
Publish directory: dist
```

This repository also includes a root `netlify.toml` so Netlify can build the app from `/app` and publish `/app/dist` automatically.

## Local development

```bash
cd app
npm install
npm run dev
```

## Production build

```bash
cd app
npm run build
```

## Content principles

Rise should stay:

- dignified
- calm
- practical
- anti-patronising
- safety-aware
- affiliate-transparent

Avoid language such as:

- elderly
- helpless
- life-changing
- guaranteed
- risk-free
- medical device
- prevents falls

Use careful wording such as “may support confidence”, “can make everyday movement easier”, and “check with a professional if pain, recovery, frailty or falls risk is involved.”

## Current retailer links

Product and guide links currently use plain Amazon UK search URLs.

Later, once the domain and Amazon Associates setup are ready, these can be replaced with approved affiliate links and proper affiliate disclosure.

## Next upgrades

- Add a custom domain.
- Add approved Amazon Associates links.
- Add a dedicated affiliate disclosure page.
- Add standalone guide pages for:
  - Seat lift cushions.
  - Bathroom safety.
  - Walking aids.
  - Bedroom support.
  - Daily living aids.
- Add screenshots to this README.
- Add a content/update policy so readers know when guides are reviewed.

## Important safety note

Rise provides general buying guidance only. It is not medical advice. If a product may affect mobility, falls risk, pain, recovery or a medical condition, readers should speak to a GP, occupational therapist, physiotherapist or another qualified professional before buying.

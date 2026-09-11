# EVA ACRODANCE AND ART — Static Website

> **Static-site notice:** The legacy documentation below is obsolete. The deployable project is frontend-only: it has no `server/` directory, database, API, authentication, or runtime secrets. Use `npm install` and `npm run build` at this repository root; GitHub Actions deploys `client/dist` to GitHub Pages.

A premium, performance-focused website for EVA ACRODANCE AND ART — professional acrobat,
aerial artist, performer and coach. Built with React (Vite), Tailwind CSS and Framer Motion
on the frontend, and Express + MongoDB (Mongoose) on the backend for booking/training
enquiries.

## Project structure

```
eva-acro-arts/
├── client/     React + Vite frontend (the public website)
└── server/     Express API for booking/training enquiries
```

## Quick start (local development)

You'll need Node.js 18+ installed.

### 1. Start the backend

```bash
cd server
npm install
cp .env.example .env    # only if .env doesn't already exist
npm run dev              # or: npm start
```

The API runs on **http://localhost:5050** by default.

**About the database:** the server is built around MongoDB (via Mongoose), but if you leave
`MONGODB_URI` blank in `.env`, it automatically falls back to a local JSON file
(`server/src/data/inquiries.json`) so you can develop and test the whole site immediately
without setting up a database. When you're ready for production, create a free
[MongoDB Atlas](https://www.mongodb.com/atlas) cluster (or use any MongoDB host), paste the
connection string into `MONGODB_URI` in `.env`, and restart the server — no code changes
needed.

### 2. Start the frontend

In a second terminal:

```bash
cd client
npm install
npm run dev
```

The site runs on **http://localhost:5173** by default and is already configured (via
`client/.env`) to talk to the API at `http://localhost:5050`.

Open http://localhost:5173 in your browser.

### 3. Try it end-to-end

Fill out the booking form on the site (either "Book a Performance" or "Enquire About
Training") and submit it. You should see a success message, and the enquiry will be saved
to `server/src/data/inquiries.json` (or MongoDB, once configured). You can view saved
enquiries at any time by visiting **http://localhost:5050/api/inquiries** in your browser
(this is an internal endpoint for future admin tooling — see "Security notes" below).

## What's included

- **Cinematic homepage** — hero, intro, about, training, professional performances, a
  trailer video section, an editorial gallery with filtering + lightbox, merchandise
  "coming soon", and a dual-intent booking form (Book a Performance / Enquire About
  Training).
- **Real client photography** — every image on the site is one of the client-supplied
  photos, optimized (resized, compressed, converted to WebP with JPEG fallback) and
  organized by section. A couple of images had a third-party studio watermark cropped out
  where they're used prominently.
- **Trailer video** — the supplied cinematic trailer (with title cards and audio) is
  presented in a dedicated "Watch" section with a click-to-play poster (never autoplays
  with sound), compressed for web delivery (12MB → ~5MB) without a visible quality loss.
- **Accessibility** — semantic HTML, skip-to-content link, visible focus states, alt text
  on every image, keyboard-operable gallery lightbox, `prefers-reduced-motion` support
  throughout (parallax, floating particles and the decorative ring all disable
  automatically).
- **SEO basics** — per-page title/meta description, Open Graph + Twitter card tags,
  canonical URL, structured data (schema.org `PerformingGroup`).
- **Security** — Helmet security headers, a strict CORS allowlist, two layers of rate
  limiting, server-side validation and sanitization (express-validator) on every field, and
  a honeypot field to quietly filter bot spam without CAPTCHAs.
- **Editable content** — anything the client hasn't provided yet (bio, phone number, social
  links, age ranges, etc.) is marked with clear `[ADD ...]` placeholders in
  `client/src/data/content.js` rather than invented. Update that one file to fill them in.

## Deploying to production

1. **Frontend:** `cd client && npm run build` produces a static `dist/` folder you can
   deploy anywhere (Vercel, Netlify, S3 + CloudFront, etc.). Set `VITE_API_URL` in your
   hosting provider's environment settings to your deployed API's URL before building.
2. **Backend:** deploy the `server/` folder to any Node host (Render, Railway, Fly.io, a
   VPS, etc.). Set the environment variables from `.env.example` in your host's dashboard —
   especially `MONGODB_URI` (a real database, not the file-store fallback) and
   `CLIENT_ORIGIN` (your deployed frontend's URL, so CORS allows it).
3. Never commit a real `.env` file — `.gitignore` already excludes it.

## Security notes for the client / next developer

- The `GET /api/inquiries` endpoint has no authentication yet. It's not linked from the
  public site, but it **should not be exposed on the public internet without adding an
  authentication layer first** (e.g. an admin login) before launch. It exists as a
  foundation for a future admin dashboard.
- All secrets (database URIs, future API keys) belong in `.env` files, which are already
  git-ignored. Never hard-code credentials into source files.

## Future scalability

The codebase is intentionally structured so these can be added later without a rewrite:
- **Admin dashboard** — manage bookings, gallery, videos, classes, merchandise.
- **E-commerce** — the Merchandise section is a "coming soon" showcase today; the
  component and data structure are ready to be swapped for real products, a cart and
  checkout when the client is ready to sell.
- **Analytics** — key interactions (Book Performance clicks, training enquiries, form
  submissions, gallery opens) are natural event hooks to wire up to any analytics tool.

## Content still needed from the client

Search `client/src/data/content.js` for `[ADD ...]` to find every placeholder — including
Eva's bio, contact email/phone, social media links, and class age ranges. Nothing has been
fabricated (no invented years of experience, awards, or client names).

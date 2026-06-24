# Jibrin Site + Journal

This repository now runs as a **Next.js App Router** project deployed on Vercel.

It includes:
- the main `jbxxnn.com` homepage positioned around operational systems for service businesses
- the journal at `/journal`
- individual journal entries at `/:slug`
- the clinic lead system landing page at `/clinic-lead-system`
- the lead capture form API at `/api/audit-submit`

## Project structure

- `app/page.js` — main homepage
- `app/journal/page.js` — journal index
- `app/[slug]/page.js` — journal post routes
- `app/clinic-lead-system/page.js` — clinic lead system page
- `app/api/audit-submit/route.js` — Google Sheets form capture route
- `lib/posts.js` — journal post data
- `components/` — shared UI pieces
- `public/assets/` — static assets

## Local development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Tests

```bash
npm test
```

## Notes

- `/wordpress` redirects to `/`
- `/lead-capture-system` redirects to `/clinic-lead-system`
- form submissions still use Google Sheets via the server route

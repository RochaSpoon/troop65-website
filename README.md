# Troop 65 Long Beach website

The website for Boy Scout Troop 65 of Long Beach, California. It replaces the Google Site at t65.org.

- **Webmasters (scouts):** read [WEBMASTER.md](WEBMASTER.md). All editing happens in Studio at `/studio`.
- **Account owner:** read [MAINTAINER.md](MAINTAINER.md) for hosting, setup, logins, and the domain.

## Stack

Next.js (App Router) with TypeScript and Tailwind, hosted on Vercel Hobby. Content lives in Sanity (free plan), with Studio embedded at `/studio`. Publishing in Studio calls `/api/revalidate`, which refreshes the site without a deploy.

## Develop

```bash
npm install
cp .env.example .env.local   # optional: without a Sanity project ID the site uses content/seed.json
npm run dev
```

| Path | What it is |
|---|---|
| `app/(site)/` | Public pages and the `/troop` section |
| `app/studio/` | Embedded Sanity Studio |
| `app/api/revalidate/` | Webhook Sanity calls on publish |
| `sanity/` | Content model, Studio layout, queries |
| `content/seed.json` | Starting content, taken from the old site |
| `scripts/import-to-sanity.mjs` | Copies the starting content and photos into Sanity (`npm run import-content`) |
| `scrape/` | The crawl of the old t65.org: text, original images, links, and `INVENTORY.md` |

# Troop 65 Website (Long Beach, CA)

A recruitment-first, mobile-first website for Troop 65 — built with Next.js
(App Router), TypeScript, and Tailwind CSS. Public pages are the front door;
`/members` is a simpler area for current-member logistics.

## Running it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content (no code required)

Almost everything a non-technical webmaster needs to change lives in plain
TypeScript data files under `/content` — arrays and objects of strings, not
JSX. Open a file, edit the text between quotes, save, commit, push. Vercel
redeploys automatically on every push to `main`.

| File | Controls |
|---|---|
| `content/site-config.ts` | Troop name, meeting day/time/location, contact email/phone, chartering org/council, Google Maps embed |
| `content/stats.ts` | The homepage "quick stats" strip (years active, scout count, Eagle count, outings/year) |
| `content/events.ts` | Every campout/service project/ceremony — powers both the homepage highlights and the Activities page. Set `isPast: false` for anything upcoming; flip to `true` once it happens |
| `content/leadership.ts` | Adult leader names/roles/bios and the youth leadership position descriptions |
| `content/testimonials.ts` | Quotes from Scouts/parents |
| `content/announcements.ts` | Members-area announcements and the Forms & Permission Slips list |

Every placeholder value that needs a real fact is marked `TODO` or wrapped in
`[Brackets]` — search the `content/` folder for `TODO` to find all of them.

## Replacing placeholder images

Every image on the site currently points at [placehold.co](https://placehold.co),
a service that generates a solid-color box with descriptive text baked in —
so instead of gray boxes, you'll see exactly what photo belongs where (e.g.
"Photo: Joshua Tree campout"). To swap one in:

1. Drop your real photo in `/public/images/...` (subfolders already exist:
   `hero/`, `activities/`, `highlights/`, `leadership/`, `logo/`).
2. Change that item's `src` field from the `placehold.co` URL to your local
   path, e.g. `/images/activities/joshua-tree-2026.jpg`.
3. Update the neighboring `alt` text to actually describe the photo.

Image locations, by file:
- **Hero photo** (homepage): `components/home/Hero.tsx`
- **Event/recap photos**: `content/events.ts` (one per event)
- **Adult leader headshots**: `content/leadership.ts`
- **About page photo**: `app/about/page.tsx`
- **Patch logo** (header/footer/favicon): already real — `public/images/logo/troop-65-patch.jpg`

Recommended photo specs: landscape, ≥1600px wide for hero/event photos,
square ≥480px for headshots. Next.js optimizes and resizes automatically —
don't hand-compress before uploading.

## Design system

Colors, type, shadows, and easing all live as CSS custom properties in
`app/globals.css` (`@theme` block) — this is the single source of truth for
the palette (Plague Purple `#610081`, Trail Gold, Parchment, Ink, Stone) and
type scale (Big Shoulders Display for headings, Public Sans for body).
Change a value there and it updates everywhere.

## The `/members` section

`/members` is intentionally simpler and undesigned relative to the public
site, and un-indexed (`robots: noindex`) — it's for logistics, not
recruitment. It has **no authentication**, by design: nothing on it is
personal data (rosters/advancement records deliberately live in Scoutbook
instead, see `app/members/roster/page.tsx`), so a plain unlisted route was
judged the right tradeoff of simplicity vs. protection. If that changes,
the cleanest upgrade path is Vercel Routing Middleware with a shared
password gate — ask your webmaster or re-run this project's setup assistant
to add it.

## Contact form

`components/forms/InquiryForm.tsx` is a plain HTML form (no JavaScript, no
backend code) that posts to [Formspree](https://formspree.io) — a free
service that forwards submissions to an inbox. It won't deliver anything
until you:

1. Create a free Formspree account and a new form.
2. Replace `FORMSPREE_ENDPOINT` in that file with the ID Formspree gives you.

Until then, the form still renders correctly and the "prefer email?" mailto
link beneath it always works.

## Deploying

See **Deployment** below for the exact GitHub + Vercel steps.

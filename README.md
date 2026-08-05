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
| `content/site-config.ts` | Troop name, meeting day/time/location, contact email, chartering org/council, Google Maps embed |
| `content/stats.ts` | The homepage "quick stats" strip (years active, scout count, Eagle count, patrol count) |
| `content/events.ts` | Every campout/service project/ceremony — powers both the homepage highlights and the Activities page. Set `isPast: false` for anything upcoming; flip to `true` once it happens |
| `content/highlights.ts` | The 3 real photos featured in the homepage "Recent Activity" grid |
| `content/patrols.ts` | The 4 patrols, their leaders, and descriptions |
| `content/leadership.ts` | Adult leader names/roles/bios and the named youth leadership positions |
| `content/testimonials.ts` | Quotes from Scouts/parents |
| `content/announcements.ts` | Members-area announcements and the Forms & Permission Slips list |

Every placeholder value that needs a real fact is marked `TODO` or wrapped in
`[Brackets]` — search the `content/` folder for `TODO` to find all of them.
Most facts (meeting schedule, council, real events, patrol names, youth
leader names) were pulled from t65.org and are current as of Aug 2026 —
re-check that site periodically since this won't auto-sync.

## Adding real photos

The homepage hero, stat band, photo grid, "Why Troop 65" section, and
testimonial all use real photos from the Camp Baker (Oregon) 2026 summer
camp trip, in `public/images/activities/camp-baker-2026/`. A few event
cards on the Activities page still use labeled [placehold.co](https://placehold.co)
stand-ins (e.g. "Photo: Firestone Camporee") until real photos exist for
those events.

**To import a new batch of phone photos** (handles HEIC files and the
Pixel "Motion Photo" exports that are secretly HEIC data wearing a `.jpg`
extension — both break naive copy-paste):

```bash
npm install --no-save heic-convert sharp
node scripts/import-photos.mjs "path/to/photo folder" "public/images/activities/some-event-2026" some-event
```

This resizes to a 2400px max dimension, compresses, and renames
sequentially (`some-event-01.jpg`, `some-event-02.jpg`, ...). Then:

1. Point a `content/events.ts` entry's `image.src` (or `content/highlights.ts`)
   at the new path.
2. Write real `alt` text describing the photo.
3. `npm uninstall heic-convert sharp` isn't necessary — `--no-save` already
   kept them out of `package.json`; they just won't persist to a fresh `npm install`
   elsewhere, which is fine since they're only needed for this one-off import step.

Other images to swap when you have them:
- **Adult leader headshots**: `content/leadership.ts`
- **Patch logo** (header/footer/favicon): already real — `public/images/logo/troop-65-patch.jpg`

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

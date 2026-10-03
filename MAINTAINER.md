# Maintainer guide

For the adult who owns the Troop 65 website accounts. Everything runs on free plans. The monthly cost should be $0.

## Where everything lives

| Piece | Service | Plan | What it holds |
|---|---|---|---|
| Code | GitHub, `rochaspoon/troop65-website` | Free | The website's code. Layout, colors, and fonts are only changeable here. |
| Hosting | Vercel | Hobby (free) | Builds the code from GitHub and serves the site. Every push to `main` redeploys. |
| Content | Sanity | Free | All page text, photos, officers, links, and announcements. Edited in Studio at `/studio`. |
| Calendar | Google Calendar (`bsatroop65longbeach@t65.org`, `scoutwebmaster@t65.org`) | Workspace | Embedded on the Troop page. Must stay public. |
| Visit form | Google Forms | Workspace | The "Visit a meeting" button. Its address is in Studio under **Site settings**. |

How a change reaches the site: the webmaster clicks **Publish** in Studio. Sanity calls the site's webhook (`/api/revalidate`), which clears the cached pages. The next visitor sees the new content. No deploy is needed.

If Sanity is ever unreachable or not set up, the site falls back to the starting content in `content/seed.json`, so it never goes blank.

## One-time setup

Do these in order. It takes about 30 minutes.

### 1. Create the Sanity project

1. Sign in at **sanity.io/manage** with a troop-owned email (not a scout's personal account).
2. **Create new project.** Name it `Troop 65 website`. Choose the **Free** plan. Use the dataset name `production` and make it **public**. Everything on the site is public anyway.
3. Copy the **Project ID** shown at the top.
4. Under **API > CORS origins**, add each address below with **Allow credentials** checked:
   - `http://localhost:3000`
   - your Vercel address (from step 2 below, like `https://troop65-website.vercel.app`)
   - `https://t65.org` and `https://www.t65.org` (add these when you move the domain)
5. Under **API > Tokens**, create a token named `import` with **Editor** permissions. Copy it somewhere safe for step 3, and delete it when you're done.

### 2. Put the site on Vercel

1. Sign in at **vercel.com** with GitHub. Stay on the **Hobby** plan.
2. **Add New > Project**, then pick `rochaspoon/troop65-website`. Vercel detects Next.js. Leave the build settings alone.
3. Before clicking Deploy, open **Environment Variables** and add:

   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_SANITY_PROJECT_ID` | the Project ID from step 1 |
   | `NEXT_PUBLIC_SANITY_DATASET` | `production` |
   | `SANITY_REVALIDATE_SECRET` | a long random string (make one at passwordsgenerator.net or run `openssl rand -hex 32`) |
   | `NEXT_PUBLIC_SITE_URL` | your Vercel address for now. Change it to `https://t65.org` when you move the domain. |

4. Click **Deploy**. Note the address Vercel gives you and add it to the Sanity CORS list (step 1.4).

### 3. Import the starting content

On a computer with Node.js 20 or newer:

```bash
git clone https://github.com/rochaspoon/troop65-website.git
cd troop65-website
npm install
NEXT_PUBLIC_SANITY_PROJECT_ID=yourid SANITY_API_WRITE_TOKEN=yourtoken npm run import-content
```

This uploads every photo and creates all the pages, officers, links, and announcements in Sanity. Run it again any time and it skips anything that already exists. Add `-- --replace` only if you want to wipe Studio edits and go back to the starting content.

Then delete the `import` token in Sanity.

### 4. Connect the publish webhook

1. In **sanity.io/manage**, open the project, then **API > Webhooks > Create webhook**.
2. Fill in:
   - **Name:** `Revalidate site`
   - **URL:** `https://YOUR-SITE/api/revalidate`
   - **Dataset:** `production`
   - **Trigger on:** Create, Update, Delete
   - **Filter:** leave empty
   - **Projection:** `{_type}`
   - **HTTP method:** POST
   - **Secret:** the same `SANITY_REVALIDATE_SECRET` you set on Vercel
   - Leave **Trigger webhook when drafts are modified** off
3. Save. Test it: change a word in Studio, publish, reload the site after about 10 seconds.

If changes don't show up, open the webhook in Sanity and check **Attempts log**. A `401` means the secrets don't match.

## Add a new webmaster login

1. **sanity.io/manage**, open the project, then **Members > Invite members**.
2. Enter the scout's email and choose the **Editor** role. Editors can change content but not project settings.
3. They accept the email invite and log in at `t65.org/studio`.
4. When a webmaster ages out, remove them from **Members**.

The free plan limits how many members a project can have. Remove old webmasters before inviting new ones if you hit the limit.

Give them **WEBMASTER.md**. It covers everything they need.

## Point t65.org at Vercel (later)

The domain still points at the old Google Site. Don't change it until the new site is ready and reviewed.

1. In Vercel, open the project, then **Settings > Domains**. Add `t65.org` and `www.t65.org`. Vercel shows the exact DNS records it wants (usually an **A** record for `t65.org` and a **CNAME** for `www`).
2. Find where t65.org's DNS is managed. It's the registrar where the domain was bought, or Google Workspace if it was bought through Google. Log in there.
3. **Remove** only the records that point at Google Sites: A records to `216.239.32.21`, `216.239.34.21`, `216.239.36.21`, `216.239.38.21`, and any `www` CNAME to `ghs.googlehosted.com`.
4. **Add** the records Vercel showed you.
5. **Do not touch the MX, TXT, or other mail records.** The troop's `@t65.org` email and calendars depend on them.
6. Wait for Vercel's Domains page to show both domains as valid (minutes to a few hours). Vercel sets up HTTPS by itself.
7. Then:
   - In Vercel, change `NEXT_PUBLIC_SITE_URL` to `https://t65.org` and redeploy.
   - In Sanity, add `https://t65.org` and `https://www.t65.org` to CORS origins.
   - Change the Sanity webhook URL to `https://t65.org/api/revalidate`.
   - In Google Sites, remove the custom URL from the old site so it stops claiming the domain.
8. Submit `https://t65.org/sitemap.xml` in Google Search Console, so the site shows up for searches like "Boy Scout troop Long Beach".

## Changing the design or code

Layout, colors, and fonts are in the code on purpose, so they can't be broken from Studio.

- Colors: `app/globals.css` (sampled from `public/logo.png`: purple `#7109A1`, gold `#FFB308`)
- Fonts: `app/layout.tsx` (Big Shoulders and Public Sans, self-hosted by Next.js)
- Pages: `app/(site)/`
- What Studio can edit: `sanity/schemaTypes/`
- Starting content: `content/seed.json`

Run it locally with `npm run dev` and open `http://localhost:3000`. Push to `main` to deploy.

## Staying at $0

- **Vercel Hobby** is free for non-commercial sites. Don't add paid add-ons.
- Photos are resized by **Sanity's image CDN**, not Vercel's image optimizer, so Vercel's image limits aren't used up.
- **Sanity Free** includes more storage and traffic than a troop site needs. If Sanity ever emails about limits, delete old unused photos in Studio's media.

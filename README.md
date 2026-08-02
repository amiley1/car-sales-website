# Alex Miley JDM

A one-page marketing site built in plain HTML/CSS with Alpine.js for interactivity.
Brand name is set — but the colors, copy, photos, and stock listings are still
placeholders. Swap them for the real thing before launch.

## Before going live

1. **Branding** — update the CSS variables
   at the top of `styles.css` (`--accent`, `--bg`, etc.) with your real colors.
2. **Photos** — the hero, before/after, gallery, stock, car detail, and
   Instagram/YouTube sections currently render dashed placeholder blocks
   instead of images. Replace the `.compare-layer`, `.carousel-slide`,
   `.car-photo`, `.car-gallery-slide`, `.reel-card`, and `.video-card`
   placeholder markup with real `<img>`/`<video>` content.
3. **Forms** — this site posts to Formspree (works on any static host,
   including GitHub Pages). In `script.js`, replace `FORM_ENDPOINTS.enquiry`
   and `FORM_ENDPOINTS.careers` with your real Formspree endpoint URLs
   (create a free account at formspree.io, one form per endpoint).
   - If you ever move hosting to Netlify, you can instead wire these up as
     real Netlify Forms (add `data-netlify="true"` + a hidden form clone of
     each form, and post to `/` instead of Formspree) — ask if you want that
     version.
4. **Stock** — edit `stock.json` directly to add/remove/update listings. No
   build step needed; every page fetches it at runtime. One JSON file drives
   three views:
   - Homepage `#stock` section — the 6 most recently posted listings
     (`stockSection({ limit: 6 })` in `script.js`), with a "View all stock"
     link out to the full page.
   - `stock.html` — every listing, with type filter + sort
     (`stockSection({})`, no limit).
   - `car.html?slug=...` — one listing's full detail page (photo gallery,
     full description, specs). Each card's photo/title link there using its
     `slug` field.

   Each entry supports: `slug`, `title`, `type`, `price`, `status`
   (`available` / `on hold` / `sold`), `year`, `odometer`, `transmission`,
   `fuel`, `location`, `blurb` (short card excerpt), `full_description`
   (full text, `\n` for paragraph breaks), `photos` (array — first one shows
   on cards, all of them in the detail page's gallery), and `posted` (ISO
   date, drives the "6 most recent" / "Newest listed" sort).

   **Syncing from Facebook Marketplace**: this mirrors the two-skill pipeline
   from the BNR Motorsports project (`facebook-marketplace-sync` archives
   your live listings into `assets/stock-sync/manifest.json` with photos +
   full descriptions; a second step turns that into the site). For this
   project, that second step needs to produce `stock.json` in the schema
   above instead of BNR's hardcoded HTML — ask Claude to convert a synced
   `manifest.json` into this format whenever you've got fresh listings.
5. **Compliance guide copy** — the per-state roadworthy info in `script.js`
   (`COMPLIANCE_STATES`) is a general guide, not legal advice — double check
   current rules with each state's road authority before publishing.
6. **Policy links** — the footer "Privacy Policy" / "Terms & Conditions"
   links are `#` placeholders; point them at real pages.

## Running locally

It's static — just open `index.html` in a browser, or serve the folder with
any static file server (needed for `stock.json` to load via `fetch`, since
some browsers block `fetch` on `file://`):

```bash
npx serve .
```

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, etc.) — there's no
build step.

# Alex Miley JDM

A one-page marketing site built in plain HTML/CSS with Alpine.js for interactivity.
Brand name is set. Stock (`stock.json` + `assets/stock-sync/`) is real, synced
from the seller's Facebook Marketplace listings. The hero, before/after,
gallery, and Instagram/YouTube sections still use placeholder blocks/copy —
swap those for the real thing before launch.

## Before going live

1. **Branding** — update the CSS variables
   at the top of `styles.css` (`--accent`, `--bg`, etc.) with your real colors.
2. **Photos** — the hero, before/after, gallery, and Instagram/YouTube
   sections still render dashed placeholder blocks instead of images/video —
   replace the `.compare-layer`, `.carousel-slide`, `.reel-card`, and
   `.video-card` markup with real content. Stock and car-detail photos are
   already real (synced from Facebook Marketplace, see point 4).
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

   Each entry supports: `slug`, `title`, `type` (used for the filter chips —
   currently "R32 GT-R" / "Supra"), `make`, `model`, `chassisCode`, `engine`,
   `drivetrain`, `condition`, `colour`, `doors` (feed the spec table on the
   detail page), `price`, `status` (`available` / `on hold` / `sold`), `year`,
   `odometer`, `transmission`, `fuel`, `location`, `blurb` (short card
   excerpt), `full_description` (full text, `\n` per line), `features`
   (array — shown as chips on the detail page), `photos` (array — first one
   shows on cards, all of them in the detail page's gallery), and `posted`
   (ISO date, drives the "6 most recent" / "Newest listed" sort).

   **Syncing from Facebook Marketplace**: this mirrors the two-skill pipeline
   from the BNR Motorsports project — `facebook-marketplace-sync` archives
   the seller's live listings into `assets/stock-sync/manifest.json` with
   photos + full descriptions (already run once; see that folder for the 5
   current real listings). Converting a fresh `manifest.json` into
   `stock.json`'s schema above is a manual step — ask Claude to do it
   whenever you've re-synced and have new/changed listings. Note: Facebook
   blurs photos on "Out of Stock" listings in the public view, and front-on
   shots often include a visible number plate — check new photos for that
   before publishing (several were skipped for this reason already).
5. **Compliance guide copy** — the per-state roadworthy info in `script.js`
   (`COMPLIANCE_STATES`) is a general guide, not legal advice — double check
   current rules with each state's road authority before publishing.
6. **Legal pages** — `terms.html` and `privacy.html` are a strong starting
   draft (as-is sale terms, ACL carve-out, Formspree data disclosure) but
   still have bracketed placeholders (`[Business Name]`, `[insert ABN]`,
   etc.) and should be reviewed by a solicitor before you rely on them.

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

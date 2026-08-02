# Alex Miley JDM

A one-page marketing site built in plain HTML/CSS with Alpine.js for interactivity.
Brand name is set — but the colors, copy, photos, and stock listings are still
placeholders. Swap them for the real thing before launch.

## Before going live

1. **Branding** — update the CSS variables
   at the top of `styles.css` (`--accent`, `--bg`, etc.) with your real colors.
2. **Photos** — the hero, before/after, gallery and stock sections currently
   render dashed placeholder blocks instead of images. Replace the
   `.compare-layer`, `.carousel-slide`, and `.car-photo` placeholder markup in
   `index.html` with real `<img>` tags.
3. **Forms** — this site posts to Formspree (works on any static host,
   including GitHub Pages). In `script.js`, replace `FORM_ENDPOINTS.enquiry`
   and `FORM_ENDPOINTS.careers` with your real Formspree endpoint URLs
   (create a free account at formspree.io, one form per endpoint).
   - If you ever move hosting to Netlify, you can instead wire these up as
     real Netlify Forms (add `data-netlify="true"` + a hidden form clone of
     each form, and post to `/` instead of Formspree) — ask if you want that
     version.
4. **Stock** — edit `stock.json` directly to add/remove/update listings. No
   build step needed; the page fetches it at runtime.
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

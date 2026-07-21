# Fable Garden test
A zero-install static one-fable website built with HTML, CSS, vanilla JavaScript, local SVG, browser APIs, and LocalStorage.

## Open it
Download or clone this folder, open `fable-garden-test`, and double-click `index.html`. No server is required; regular deferred scripts and relative paths work under `file://`.

## Features
Search is local against `js/data.js`. Favorites (`fable-garden-favorites`), recent reading (`fable-garden-recent`), and theme choice (`fable-garden-theme`) are browser-local and fail safely when storage is blocked. The page includes responsive navigation, share/copy controls, print styles, accessibility support, SVG assets, metadata, schemas, sitemap, and browser tests at `tests.html`.

## Configure and deploy
Edit `js/config.js` to change the site name, `hello@example.com`, and `https://example.com`. Also replace the example domain in HTML canonicals/Open Graph/schema, `robots.txt`, and `sitemap.xml`. Upload the folder to any static host; a local server is optional, never required.

## Extend
Follow `docs/CONTENT_GUIDE.md`: add original public-domain-aware content to `js/data.js`, create a page with nested relative paths and unique SEO metadata, then update navigation and sitemap. See `docs/SEO_GUIDE.md` and `docs/MANUAL_TESTS.md`.

## Policy and limitations
Traditional plots are public domain; this wording, commentary, organization, and SVG art are original. There is one fable, no backend or accounts, browser-local favorites, local search, email-link contact, and public SEO results only after public deployment.

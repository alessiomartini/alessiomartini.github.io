# Copilot instructions for this repo

## Purpose
Help coding agents make useful, low-risk edits to this static personal
website (`alessiomartini.github.io`).

## Big picture
- Single-user GitHub Pages site: static HTML/CSS/JS served as-is from
  `main`, no build toolchain or package manager.
- All page content lives in one data file, [`data/content.js`](../data/content.js),
  which [`js/main.js`](../js/main.js) renders into the empty section
  containers defined in [`index.html`](../index.html).

## Key files
- `index.html` — page shell, structure, section IDs. Edit only for
  structural/layout changes.
- `css/style.css` — all styling, including the light/dark theme via CSS
  variables in `:root` and `:root[data-theme="dark"]`.
- `js/main.js` — rendering functions (one per section) plus theme toggle,
  mobile nav, and scroll-spy behavior.
- `data/content.js` — the `SITE` object: bio, research interests,
  education/courses, teaching, publications, resources, contacts. This is
  the file to edit for almost any content change.
- `pdfs/` — CV and thesis PDFs linked from the page.

## Patterns & conventions
- Content changes go in `data/content.js` only — do not hardcode content
  into `index.html` or `js/main.js`.
- Each render function in `js/main.js` reads one key of `SITE` and injects
  markup into a matching `#id` in `index.html`; keep that one-to-one
  mapping when adding a new section.
- Dark mode is attribute-driven (`data-theme="dark"` on `<html>`), applied
  before first paint by the inline script in `<head>` to avoid a flash.

## Developer workflow
- Preview: `python3 -m http.server 8000` from the repo root, then open
  `http://localhost:8000/` (plain `file://` can block `<script>` module
  loading / fetches in some browsers).
- No tests or build/lint step exists.

## Agent guidance
- Do not introduce a build step or package.json without explicit approval.
- Keep commits focused: content (`data/content.js`), structure
  (`index.html`), style (`css/style.css`), behavior (`js/main.js`).
- If a change affects publishing/deploy behavior, confirm first — this is
  a live personal site.

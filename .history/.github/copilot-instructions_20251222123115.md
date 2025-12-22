# Copilot instructions for this repo

Purpose
- Help coding agents make useful, low-risk edits to this static personal website.

Big picture
- This is a single-user GitHub Pages site (repository name ends with `.github.io`) serving static HTML/CSS/JS from the `main` branch.
- No build toolchain or package manager is present — source files are served as-is.

Key files & folders
- Home page: [index.html](index.html)
- Global styles: [styles.css](styles.css)
- JavaScript: [js/](js/) — e.g. [js/custom.js](js/custom.js) and [js/form.js](js/form.js)
- Content snippets: [data/](data/) (plain `.txt` files such as [data/biography.txt](data/biography.txt))
- Legacy/theme assets: [OLD/css/](OLD/css/) and [OLD/js/](OLD/js/) (preserved historical assets; do not remove without checking references)
- Legacy server-side: [OLD/contact.php](OLD/contact.php) exists but is not wired into the static site by default.

Patterns & conventions (discoverable)
- Edits are typically direct HTML/CSS/JS changes; there is no build step. Update [index.html](index.html) for structural changes.
- Content is kept as plain text in `data/`. When updating content, check where the file is referenced in the HTML before changing format.
- Styling occurs in `styles.css` (root) and older theme files under `OLD/css/`. Prefer updating `styles.css` for current site-wide styles.
- JavaScript behavior lives in `js/`; small DOM-driven scripts are in `js/custom.js`. Use browser DevTools to test interactions.

Developer workflows (how to preview/test changes)
- Quick preview: open [index.html](index.html) in a browser (file://) or serve locally from the repo root, e.g.:

  python -m http.server 8000

- Debugging: use browser DevTools console and network tab. For form-related issues, inspect [js/form.js](js/form.js) and the legacy [OLD/contact.php](OLD/contact.php).

Version control & deployment
- Site is the repository used for GitHub Pages user site. Pushing to `main` will update the live site (standard GitHub Pages behavior for user repos named `<username>.github.io`).
- Keep commits small and focused: content edits (data/*.txt), markup changes ([index.html](index.html)), style tweaks ([styles.css](styles.css)), and JS fixes (js/...).

Agent guidance & safe edit rules
- Do not introduce new tooling or build steps without explicit developer approval (no package.json, no npm installs).
- Avoid removing files in `OLD/` unless you confirm they are unused; they may be kept for history or reference.
- When changing content in `data/`, preserve plain-text format and character encoding (UTF-8). If you change a filename or format, update any references in HTML/JS.
- For visual or behavioral changes, include a short testing instruction in the commit message (example: "Preview at http://localhost:8000 — verify header nav works on mobile").

Examples (concrete edits)
- Fix site header link text: edit [index.html](index.html) — search for the `<header>` block.
- Update biography paragraph: edit [data/biography.txt](data/biography.txt) and then verify where it's included in [index.html](index.html).
- Tweak site colors: update [styles.css](styles.css) and test in multiple browsers.

If uncertain or missing context
- Ask maintainer before adding build tools or removing legacy assets.
- If a change touches publishing/deploy behavior, request confirmation (this is a user GitHub Pages site).

Request for feedback
- If any important local workflow or file reference is missing, tell me what to inspect and I will update this guidance.

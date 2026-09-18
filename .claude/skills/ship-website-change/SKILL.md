---
name: ship-website-change
description: Standard workflow for shipping any content/style/behavior change to this site (data/content.js, css/style.css, js/*.js) - verify, bump cache-busting, commit, push, confirm live. Use whenever a change to those files is ready to be published, not mid-edit.
---
This repo (alessiomartini/alessiomartini.github.io) has no build step, linter,
or test suite — this workflow is the closest thing to a release checklist.
Full context lives in `CLAUDE.md`; this skill is the repeatable procedure.

1. **Syntax-check every `.js` file touched.** `node --check <file>.js`. (A
   PostToolUse hook already runs this automatically after each Edit/Write,
   but re-run by hand after a batch of edits to be sure.)

2. **Test locally in a real browser**, not just "it didn't crash":
   - `python3 -m http.server 8000` from the repo root (plain `file://` can
     block `<script>`/`fetch` loading).
   - Headless Chromium is available at `/opt/pw-browsers/chromium`
     (Playwright) — load the affected page, check for console errors, and
     look at the actual section that changed. For anything visual, take a
     screenshot and look at it before calling the change done.

3. **Bump cache-busting.** If `data/content.js` or any `js/*.js` file
   changed, bump its `?v=N` query string on **every** HTML file that
   includes it (`index.html`, `education.html`, `projects.html`,
   `course.html`, `extra-things.html`). Skipping this means visitors keep
   seeing a stale cached copy after deploy — it's the single most common
   mistake to make here.

4. **Commit and push.**
   `git add -A && git commit -m "..." && git push`. If working on a PR
   branch, open/update the PR; GitHub Pages deploys automatically on push
   to `main`, no CI step.

5. **Confirm the live site reflects the change** after deploy (or note
   explicitly if you can't reach the live domain from this environment).

Don't skip step 3 silently — if unsure whether a change touched
`data/content.js` or `js/*.js`, check with `git diff --stat` before
committing.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal/professional website of Alessio Martini (physics MSc student,
graduating 24 June 2026 from the University of Amsterdam, ITFA; BSc from
Milano-Bicocca). Plain HTML/CSS/JS, **no build step**, deployed via GitHub
Pages on push to `main`. Owner communicates in Italian; content is written
in English.

## Commands

There is no package manager, build tool, bundler, or test suite — do not
introduce one (npm, a bundler, a linter config, etc.) without explicit
approval; this is a live personal site, not an app.

- **Syntax-check JS after any edit**: `node --check <file>.js` (e.g.
  `node --check data/content.js`, `node --check js/main.js`). This is the
  closest thing to a lint/build step this repo has. A PostToolUse hook
  (`.claude/hooks/check-js-syntax.py`, wired in `.claude/settings.json`)
  already runs this automatically after every Edit/Write to a `.js` file
  and blocks on failure — running it by hand is a backup, not a
  requirement.
- **Shipping a change**: use the `ship-website-change` skill (or follow
  "Workflow for any content/style change" below) — verify, bump
  cache-busting, commit, push, confirm live.
- **Preview locally**: `python3 -m http.server 8000` from the repo root,
  then open `http://localhost:8000/` (plain `file://` can block
  `<script>`/`fetch` loading in some browsers).
- **Verify a change in a real browser**: headless Chromium is available at
  `/opt/pw-browsers/chromium` (Playwright) — use it to load the affected
  page, check for console errors, and actually look at the section you
  changed, not just confirm the page loads.
- **Deploy**: `git push` to `main` — GitHub Pages builds and publishes
  automatically, no CI step. Confirm the live site reflects the change
  after pushing.

## Architecture

- **`data/content.js`** — single source of truth. Defines a global `SITE`
  object with these top-level keys: `profile`, `courses`, `bio`, `cvs`,
  `education`, `teaching`, `projects`, `resources`, `contacts`, `elsewhere`,
  `extraThings`. Content changes belong here, not hardcoded into the HTML
  or renderer files.
- **`js/main.js`** — shared renderer, included on every page. Each render
  function is guarded with `if (document.getElementById(...))` so the same
  script safely serves `index.html`, `education.html`, `projects.html`,
  `course.html` and `extra-things.html` — it only renders what the current
  page actually has containers for. One render function per `SITE` key;
  keep that one-to-one mapping when adding a new section. Also handles
  theme toggle, mobile nav, and scroll-spy.
- **`js/course.js`** — renders `course.html?id=<slug>` from
  `SITE.courses[slug]`. Course schema:
  `{ title, subtitle?, professor, professorHref?, meta?, links: [{label, href}], sections: [{heading, body}] }`.
  Course detail pages intentionally do **not** show lecture times/room
  numbers — only a "When & where" section (month/year + university).
- **`js/extra-things.js`** — renders the "Extra Things I Did" page from
  `SITE.extraThings` (`sports`, `music`, `projects`, `adventures`).
- **`css/style.css`** — all styling, light/dark theme via CSS variables in
  `:root` / `:root[data-theme="dark"]`. Dark mode is attribute-driven
  (`data-theme="dark"` on `<html>`), applied before first paint by an
  inline script in each page's `<head>` to avoid a flash.
- **Cache-busting**: every `<script src="data/content.js?v=N">` and
  `<script src="js/main.js?v=N">` tag must have `?v=N` bumped on **every**
  edit to that file, across **all** HTML files that include it
  (`index.html`, `education.html`, `projects.html`, `course.html`,
  `extra-things.html`). Forgetting this means visitors keep seeing a stale
  cached copy after deploy.

## Pages

- `index.html` — hero + `#about` `#teaching` `#resources` `#cv` `#contact`
  (same-page anchors, sticky header nav). Footer has an `#elsewhere-note`
  (discreet "elsewhere" mentions, e.g. brother's business) above the
  copyright line.
- `education.html` — full Education & Courses accordion. Top-level groups:
  "Seminars, Workshops & Extra Courses" (open-ended, `subgroups` by rough
  period — since graduating / during the Master's / between Bachelor's and
  Master's / during the Bachelor's / during High School — this is where
  new seminars/workshops keep landing, degree or no degree), "Master's
  Degree", "Bachelor's Degree" (`subgroups` by year: Third/Second/First),
  "High School Courses". A group either has flat `items` or
  `subgroups: [{heading, items}]` — `renderEducation` in `js/main.js`
  handles both, and only renders a summary meta line when the group has a
  `place` and/or `years`. Individual items can carry an optional `place`
  tag (rendered as `(Place)`) for groups that mix locations.
- `projects.html` — one full-width row per project: description on the
  left, screenshot(s) on the right. Each project item supports an optional
  `screenshots: [path, ...]` array (paths under `images/projects/<slug>/`,
  slug = the last path segment of its `repo` URL when it has one); when
  present, a carousel (arrows + dots, only shown when there's more than
  one shot) lets visitors step through them in place, and clicking opens a
  full-size lightbox synced to the carousel's position. Portrait (phone)
  screenshots are auto-detected at load time (`naturalHeight >
  naturalWidth`) and rendered with `object-fit: contain` in a taller box
  instead of the desktop-site `cover` crop — don't reuse the 16:10 cover
  box for phone screenshots, they'll get cut off.
  For projects with a live `href`, `.github/workflows/capture-screenshots.yml`
  (+ `.github/scripts/capture-screenshots.js`) runs a headless Chromium in
  CI — this sandbox has no outbound network access to the live sites
  itself — and walks down the page taking one shot per screenful (up to 4,
  stopping early if the page stops scrolling) into
  `images/projects/<slug>/1.png`, `2.png`, etc. It's wired to fire on any
  push to this branch that touches the workflow or script file, or run
  manually from the Actions tab; after a run, pull the new commit and
  update the matching project's `screenshots` array. For apps with no
  public URL (native/self-hosted), there's no automated path — ask the
  owner for real screenshots (or, for a runnable local web app, run it
  locally against fake/seed data — never real personal data — and
  screenshot that) rather than fabricating or guessing paths.
- `course.html?id=<slug>` — generic per-course detail template.
- `extra-things.html` — Sports / Music / Projects / Adventures, each item
  supports a `media: []` array (`{type, src, alt?}`) for future images/
  video; currently empty everywhere (owner will supply media later —
  explicitly deferred, don't chase this unprompted).

All pages share the same header/nav. Same-page section links (`#about`
etc.) are visually separated from cross-page links (`education.html` etc.)
by a `.nav-sep` divider; cross-page nav links get a `.nav-page-link::after`
"↗" marker.

## Conventions / design decisions (owner's explicit preferences)

- **No underlined blue links.** All inline links use `.text-link`
  (bold text, `border-bottom: 1px solid transparent`, color/border only
  on `:hover`). Global `a { text-decoration: none; }`.
- **Professor/person name links**: priority order for durability —
  1) Google Scholar or InspireHEP author page, 2) a verified personal
  academic homepage, 3) a data-rich official profile (ResearchGate, an
  institutional "faces of X" bio), 4) a thin university directory page
  only as last resort. Never fabricate/guess a URL — if nothing verifiable
  turns up (e.g. Sonia Brivio), leave the existing link as-is (or the item
  unlinked) and say so rather than guessing. Names should be spelled out
  in full, not abbreviated (e.g. "Jasper van Wezel", not "J. van Wezel").
- **Discreet mentions**: the "elsewhere" section (currently just a note
  about his brother Daniele Martini's consulting startup — transportation
  engineer & business consultant) is meant to stay low-key, near Contact,
  not prominent.
- **Sticky header**: `position: sticky; top: 0` + smooth-scroll anchors.
  `.section` and `.hero` both need `scroll-margin-top: var(--header-height)`
  (currently `80px`, real measured header height ~63px) so the header never
  overlaps a section heading after an anchor-nav click. If the header's
  visual height changes, re-check this.
- **Contact cards**: label/value spans must be `display: block` (not
  inline) or `text-overflow: ellipsis` silently does nothing and long
  values (e.g. Stack Overflow) overflow the card.
- Don't add features/abstractions beyond what's asked (e.g. Projects
  auto-sync from GitHub repos was suggested once and explicitly deferred —
  "lasciamo così per ora" — don't build it unprompted).
- If a change affects publishing/deploy behavior (not just page content or
  styling), confirm with the owner first — this is a live personal site.

## Workflow for any content/style change

1. Edit `data/content.js` / `css/style.css` / `js/*.js` as needed.
2. `node --check <file>.js` on any JS touched.
3. Test locally (see Commands above) — check console errors and actually
   look at the affected page/section, not just "it didn't crash."
4. Bump `?v=N` cache-busting for every changed `data/content.js` / `js/*.js`
   across every HTML file that includes it.
5. `git add -A && git commit -m "..."`, push, and confirm the live site
   reflects the change after GitHub Pages deploys.

## Repo / session note

This repo is `alessiomartini/alessiomartini.github.io`. If you're a fresh
Claude Code session, make sure your GitHub repo scope for this session is
actually this repo (not some other project) before pushing anything.

# alessiomartini.github.io — context for Claude

Personal/professional website of Alessio Martini (physics MSc student,
graduating 24 June 2026 from the University of Amsterdam, ITFA; BSc from
Milano-Bicocca). Plain HTML/CSS/JS, **no build step**, deployed via GitHub
Pages on push to `main`. Owner communicates in Italian; content is written
in English.

## Architecture

- **`data/content.js`** — single source of truth. Defines a global `SITE`
  object with these top-level keys: `profile`, `courses`, `bio`, `cvs`,
  `education`, `teaching`, `projects`, `resources`, `contacts`, `elsewhere`,
  `extraThings`.
- **`js/main.js`** — shared renderer, included on every page. Each render
  function is guarded with `if (document.getElementById(...))` so the same
  script safely serves `index.html`, `education.html`, `projects.html`,
  `course.html` and `extra-things.html` — it only renders what the current
  page actually has containers for. Also handles theme toggle, mobile nav,
  scroll-spy.
- **`js/course.js`** — renders `course.html?id=<slug>` from
  `SITE.courses[slug]`. Course schema:
  `{ title, subtitle?, professor, professorHref?, meta?, links: [{label, href}], sections: [{heading, body}] }`.
  Course detail pages intentionally do **not** show lecture times/room
  numbers — only a "When & where" section (month/year + university).
- **`js/extra-things.js`** — renders the "Extra Things I Did" page from
  `SITE.extraThings` (`sports`, `music`, `projects`, `adventures`).
- **`css/style.css`** — all styling, light/dark theme via CSS variables in
  `:root` / `:root[data-theme="dark"]`.
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
- `education.html` — full Education & Courses accordion (grouped by
  programme: Master's Courses, Master's Seminars, Bachelor's, etc.).
- `projects.html` — project cards. Each project item supports an optional
  `screenshots: [path, ...]` array (paths under `images/projects/<slug>/`);
  when present, a thumbnail strip renders at the top of the card and opens
  a full-size lightbox (with prev/next when there's more than one) on
  click. Screenshots are supplied by the owner — Claude Code on the web has
  no outbound network access to capture them itself, so don't fabricate or
  guess screenshot paths that don't exist in the repo.
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
  turns up (e.g. Sonia Brivio), leave the existing link as-is and say so
  rather than guessing. Names should be spelled out in full, not
  abbreviated (e.g. "Jasper van Wezel", not "J. van Wezel").
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

## Workflow for any content/style change

1. Edit `data/content.js` / `css/style.css` / `js/*.js` as needed.
2. `node --check <file>.js` on any JS touched.
3. Test locally: `python3 -m http.server 8000` in the repo root, then
   verify in a real browser or headless Chromium (Playwright is available
   at `/opt/pw-browsers/chromium`) — check console errors and actually look
   at the affected page/section, not just "it didn't crash."
4. Bump `?v=N` cache-busting for every changed `data/content.js` / `js/*.js`
   across every HTML file that includes it.
5. `git add -A && git commit -m "..."` , `git push -u origin main`.
6. GitHub Pages deploys automatically on push to `main` — no CI/build step,
   but it's worth a moment to confirm the live site reflects the change.

## Repo / session note

This repo is `alessiomartini/alessiomartini.github.io`. If you're a fresh
Claude Code session, make sure your GitHub repo scope for this session is
actually this repo (not some other project) before pushing anything.

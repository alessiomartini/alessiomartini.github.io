# Roadmap

<!--
Single file for todos, ideas, decisions and diary, read by Projects Overview
(https://alessiomartini.github.io/projects-overview/). Protocol: templates/ROADMAP.md of projects-overview.
-->

## Done
- [x] The «Tutti i progetti» button of the Feedback widget (e.g. in education.html) leads to the Projects page of the personal site (`projects.html`), not to projects-overview (private, in Italian); canonical widget updated, `?v=5` (note from the site, 2026-11-09)
- [x] Personal site generated from `data/content.js`, light/dark theme
- [x] Projects Overview in the Projects page (card + button at the top)

## Content
- [ ] Images and videos in the "Extra Things I Did" section (`media: []` in `data/content.js`): some from the old Google Sites site, the others from Google Photos (see idea `google-photos-cleanup` in projects-overview)

## Ideas
- [ ] Extra Things I Did: review the photos one by one and put back only those without compromising things and with the friends' consent (or a part with access only for Alessio)
- [x] Projects section more convenient for *reaching* the projects (today, to get to e.g. music-library one has to scroll a lot; `data/content.js`). Options:
  - order them by most clicked (would need counting clicks, e.g. Worker + D1 as for feedback)
  - smaller/compact grid cards
  - separate page, only names + links without descriptions, with little scrolling

- [x] Visitors' note/feedback on a Cloudflare database (details below): done with the shared widget `js/notes-widget.js` (single D1 `site-notes`, option 2), on all pages

### Idea: user note/feedback on a shared Cloudflare database

The site currently has no way for a visitor to leave
feedback — no endpoint, no worker, no table. The idea, to be
evaluated and not yet decided, is to add a small widget (e.g. a fixed
button in a corner of the page, or a section at the bottom of the page)
that lets people write a free note ("what doesn't work", "what you would
like to see", etc.) and send it.

**Storage: never `localStorage`/client-side** — a note saved only in the
visitor's browser would never be read by anyone. It must be saved in a
database.

Two options for storage, still to be chosen:

1. **D1 dedicated to this site** (pattern already used by other projects of
   Alessio: `ear-training`, `geopolitics-atlas`, `eating-amsterdam`,
   `markets-first-principles` — each already has its own D1 + Worker with
   a `notes` table). Pros: total isolation, a bug in one site's worker
   does not touch the others. Cons: one more Cloudflare account/infrastructure
   to maintain for each site.
2. **Single D1 shared by all of Alessio's sites**, behind a single
   Cloudflare Worker, with a table like
   `notes(id, site TEXT, page TEXT, text TEXT, created_at, ...)` — the
   `site` column tells where a note comes from (e.g. `"alessiomartini.github.io"`
   vs `"amsterdam-events"` etc.), and the Worker applies a CORS allowlist per
   domain (one origin per site). Pros: a single account/infrastructure to
   maintain instead of N, a single place to read all the notes of all
   the sites. Cons: a bug in the shared worker would break note collection
   everywhere instead of staying isolated to one site.

In any case, minimum limits to respect:

- [x] No user account required to leave a note.
- [ ] (to verify in the `site-notes` Worker, the widget only has the honeypot) Reasonable rate limit per bucket/IP or per random identifier of the
  browser (to discourage spam without requiring login).
- [x] The note is written "blind": whoever sends it cannot re-read it
  publicly afterwards — only the site's author (Alessio) reads it, behind a
  token, as `eating-amsterdam` already does.

Implementation note for this repo in particular: being a static site
with no build step and no backend of its own, the widget here would be
just a small form in `index.html` (or on all pages, via
`js/main.js`) that does a `fetch()` POST to the endpoint of the chosen
Worker — no new dependency or build step to introduce on the frontend side.

This is only documentation of the idea: do not implement until
explicitly asked.

## Decisions and things tried

- **Projects reachable (2026-10-19)**: made a compact index of chips at the top of `projects.html` (generated from `SITE.projects`, grouped by category, with a "Back to index" link at the bottom). Not done: ordering by clicks (would require a backend to count clicks) and a separate names+links page (the compact index is enough).

This file collects ideas that are **not implemented yet** — ready for a
future Claude Code session (or Alessio) to pick up. It is not a roadmap
with deadlines, just a place to avoid losing ideas and to record what has
already been explicitly deferred/rejected so nobody re-proposes it.

### Explicitly deferred / rejected (don't build unprompted)

- **Auto-sync Projects from GitHub repos.** Suggested once, owner said
  "lasciamo così per ora" (leave it as is for now). `projects.html` stays
  manually curated in `data/content.js`.
- **Media for "Extra Things I Did".** Each item already has an empty
  `media: []` array ready to take `{type, src, alt?}` entries — owner will
  supply photos/videos later. 2026-10-19: now a todo (see "## Content").

## Log
- 2026-11-21: 🤖 ROADMAP translated to English (language rule: projects in English or bilingual EN/IT).
- 2026-11-14: 🤖 ticked the visitors' feedback idea (already done with the site-notes widget; the rate limit in the Worker is still to verify); notes from the site brought into the ROADMAP; fix of the «Tutti i progetti» link of the Feedback widget towards `projects.html`
- 2026-11-07: Extra Things I Did: removed the 6 links to Google Photos photos/videos and the friends' names (privacy); the links are saved outside the repo, in Dati-personali.
- 2026-11-06: added the Feedback button (`js/notes-widget.js`, POST to the site-notes Worker with local queue) to all pages; site-notes deploy needed. canonical notes widget v2 (site-notes/widget) in place of the old feedback. notes widget aligned to the final version (key#field migration, dedupe), ?v=3.
- 2026-11-02: Projects: added Saved Films (film-salvati), removed Job News (merged into Job Research Website); completeness check across the 3 lists; added World Economies Map, Course Exercises (single card) and 5 private tools (Site Notes, Google Tasks CLI, Life Log, CV Sources, Anki Decks); made Physics Lab 2, Intro to C and liquid fragmentation report public and linked them in the Course Exercises card; World Economies Map: private for a reason (data copyright, author's reply pending)
- 2026-10-19: 🤖 quick chip index at the top of Projects (generated from content.js, with anchors on the cards); installable as a standalone app from the phone (manifest with its own name, icon and scope); todo: media for "Extra Things I Did" (Google Sites + Google Photos)
- 2026-10-18: added the ideas from IDEE.md (single protocol)
- 2026-10-18: FUTURE-ARCHITECTURE.md merged into ROADMAP.md (single protocol)
- 2026-10-15: created the roadmap for Projects Overview; added Projects Overview to the Projects page (card and button at the top)

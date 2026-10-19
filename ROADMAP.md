# Roadmap

<!--
Unico file per todo, idee, decisioni e diario, letto da Projects Overview
(https://alessiomartini.github.io/projects-overview/). Protocollo: templates/ROADMAP.md di projects-overview.
-->

## Fatto
- [x] Sito personale generato da `data/content.js`, tema chiaro/scuro
- [x] Projects Overview nella pagina Projects (scheda + pulsante in alto)

## Contenuti
- [ ] Immagini e video nella sezione "Extra Things I Did" (`media: []` in `data/content.js`): alcune dal vecchio sito su Google Sites, le altre da Google Photos (vedi idea `google-photos-cleanup` in projects-overview)

## Idee
- [x] Sezione Projects più comoda per *raggiungere* i progetti (oggi per arrivare per es. a music-library bisogna scrollare tanto; `data/content.js`). Opzioni:
  - ordinarli per i più cliccati (servirebbe contare i click, es. Worker + D1 come per il feedback)
  - schede a griglia più piccole/compatte
  - pagina a parte, solo nomi + link senza descrizioni, con poco scroll

- [ ] Nota/feedback dei visitatori su database Cloudflare (dettagli sotto)

### Idea: nota/feedback utente su database Cloudflare condiviso

Il sito non ha oggi nessun modo per un visitatore di lasciare un
feedback — nessun endpoint, nessun worker, nessuna tabella. L'idea, da
valutare e non ancora decisa, e' aggiungere un piccolo widget (es. un
pulsante fisso in un angolo della pagina, o una sezione a fondo pagina)
che permetta di scrivere una nota libera ("cosa non funziona", "cosa
vorresti vedere", ecc.) e inviarla.

**Storage: mai `localStorage`/client-side** — una nota salvata solo nel
browser del visitatore non la leggerebbe mai nessuno. Va salvata in un
database.

Due opzioni per lo storage, ancora da scegliere:

1. **D1 dedicato a questo sito** (pattern gia' usato da altri progetti di
   Alessio: `ear-training`, `geopolitics-atlas`, `eating-amsterdam`,
   `markets-first-principles` — ognuno ha gia' il proprio D1 + Worker con
   una tabella `notes`). Pro: isolamento totale, un bug nel worker di un
   sito non tocca gli altri. Contro: un account/infrastruttura Cloudflare
   in piu' da mantenere per ogni sito.
2. **D1 unico condiviso fra tutti i siti di Alessio**, dietro un unico
   Worker Cloudflare, con una tabella tipo
   `notes(id, site TEXT, page TEXT, text TEXT, created_at, ...)` — la
   colonna `site` distingue la provenienza (es. `"alessiomartini.github.io"`
   vs `"amsterdam-events"` ecc.), e il Worker applica un allowlist CORS per
   dominio (un'origine per sito). Pro: un solo account/infrastruttura da
   mantenere invece di N, un solo posto dove leggere tutte le note di tutti
   i siti. Contro: un bug nel worker condiviso romperebbe la raccolta note
   ovunque invece di restare isolato a un sito.

In ogni caso, limiti minimi da rispettare:

- [ ] Nessun account utente richiesto per lasciare una nota.
- [ ] Rate limit ragionevole per bucket/IP o per identificativo casuale del
  browser (per scoraggiare spam senza richiedere login).
- [ ] La nota va scritta "alla cieca": chi la invia non puo' rileggerla
  pubblicamente dopo — solo l'autore del sito (Alessio) la legge, dietro un
  token, come gia' fa `eating-amsterdam`.

Nota implementativa per questo repo in particolare: essendo un sito
statico senza build step e senza backend proprio, il widget qui sarebbe
solo un piccolo form in `index.html` (o in tutte le pagine, via
`js/main.js`) che fa una `fetch()` POST verso l'endpoint del Worker
scelto — nessuna nuova dipendenza o build step da introdurre lato
frontend.

Questa e' solo documentazione dell'idea: non implementare finche' non
viene chiesto esplicitamente.

## Decisioni e cose provate

- **Projects raggiungibili (2026-10-19)**: fatto un indice compatto di chip in cima a `projects.html` (generato da `SITE.projects`, raggruppato per categoria, con link "Back to index" in fondo). Non fatti: ordinamento per click (richiederebbe un backend per contare i click) e pagina separata solo nomi+link (l'indice compatto basta).

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
  supply photos/videos later. 2026-10-19: now a todo (see "## Contenuti").

## Log
- 2026-10-19: 🤖 indice rapido a chip in cima a Projects (generato da content.js, con ancore sulle schede); installabile come app a sé dal telefono (manifest con nome, icona e perimetro propri); todo: media per "Extra Things I Did" (Google Sites + Google Photos)
- 2026-10-18: aggiunte le idee da IDEE.md (protocollo unico)
- 2026-10-18: FUTURE-ARCHITECTURE.md unito in ROADMAP.md (protocollo unico)
- 2026-10-15: creata la roadmap per Projects Overview; aggiunto Projects Overview alla pagina Projects (scheda e pulsante in alto)

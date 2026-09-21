# Future architecture / ideas

This file collects ideas that are **not implemented yet** — ready for a
future Claude Code session (or Alessio) to pick up. It is not a roadmap
with deadlines, just a place to avoid losing ideas and to record what has
already been explicitly deferred/rejected so nobody re-proposes it.

## Explicitly deferred / rejected (don't build unprompted)

- **Auto-sync Projects from GitHub repos.** Suggested once, owner said
  "lasciamo così per ora" (leave it as is for now). `projects.html` stays
  manually curated in `data/content.js`.
- **Media for "Extra Things I Did".** Each item already has an empty
  `media: []` array ready to take `{type, src, alt?}` entries — owner will
  supply photos/videos later. Don't chase this unprompted.

## Idea: nota/feedback utente su database Cloudflare condiviso

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

- Nessun account utente richiesto per lasciare una nota.
- Rate limit ragionevole per bucket/IP o per identificativo casuale del
  browser (per scoraggiare spam senza richiedere login).
- La nota va scritta "alla cieca": chi la invia non puo' rileggerla
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

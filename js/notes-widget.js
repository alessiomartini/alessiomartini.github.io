/**
 * site-notes widget v2 — the one feedback/notes box used by every site of Alessio.
 * Vanilla JS, no dependencies, injects its own HTML + CSS. See README.md in this folder.
 *
 * Fixed button bottom right -> panel with a textarea + "Invia" and, below, the notes written
 * from this browser (localStorage). Each note shows only its state: "2713 inviata" or
 * "non ancora inviata" (resent at page load, when the network is back, and when the panel opens).
 * No delete button, no "done" checkbox. Write-only: nothing is ever read back from the server.
 *
 * Usage:  <script src="js/notes-widget.js?v=2" data-site="my-repo-name"></script>
 * Options (data-* on the script tag): data-site (required), data-label ("Feedback"),
 *   data-lang ("it" default | "en"), data-legacy ("key1,key2": old localStorage keys to migrate).
 * Optional JS hook: window.SiteNotes.setContext(function () { return {filter: ...}; })
 */
(function () {
  'use strict';
  if (window.SiteNotes && window.SiteNotes.version) return;

  var VERSION = '2.0.0';
  var BASE = 'https://site-notes.alemarti-2001.workers.dev/';
  var MAX_TEXT = 2000, MAX_KEPT = 100, LOCK_MS = 15000;

  var script = document.currentScript || document.querySelector('script[data-site][src*="notes-widget"]');
  var cfg = (script && script.dataset) || {};
  var SITE = cfg.site;
  if (!SITE) { console.error('notes-widget: data-site is missing'); return; }
  var T = ({
    it: { label: 'Feedback', title: 'Bug o suggerimento? La pagina viene allegata in automatico.', ph: 'Cosa cambieresti?',
      send: 'Invia', empty: 'Scrivi qualcosa prima.', none: 'Nessuna nota scritta da questo browser.', sent: '\u2713 inviata', unsent: 'non ancora inviata', list: 'Le tue note' },
    en: { label: 'Feedback', title: 'Bug or suggestion? The page is attached automatically.', ph: 'What would you change?',
      send: 'Send', empty: 'Write something first.', none: 'No notes written from this browser.', sent: '\u2713 sent', unsent: 'not sent yet', list: 'Your notes' }
  })[cfg.lang === 'en' ? 'en' : 'it'];
  if (cfg.label) T.label = cfg.label;

  var URL_ = BASE + SITE + '/notes';
  var KEY = 'site-notes.list.' + SITE, LOCK = 'site-notes.lock.' + SITE;
  var contextFn = null, busy = false;

  // ?sono-alessio marks this browser as Alessio's (author 'alessio'); shared by all github.io sites. A label, not a login.
  function author() {
    try {
      if (new URLSearchParams(location.search).has('sono-alessio')) localStorage.setItem('site-notes.author', 'alessio');
      return localStorage.getItem('site-notes.author') || undefined;
    } catch (e) { return undefined; }
  }

  // ---- storage -------------------------------------------------------------------------------
  function read() { try { var l = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(l) ? l : []; } catch (e) { return []; } }
  function write(list) { try { localStorage.setItem(KEY, JSON.stringify(list.slice(-MAX_KEPT))); } catch (e) {} }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

  // Old per-site storage (queues, lists, local-only copies) -> the single list. Each item is copied
  // once, then the old key is removed, so nothing is lost and nothing is duplicated.
  // Items flagged as already sent (sent:true, pending:false) stay "2713 inviata"; the others are resent.
  function migrate() {
    var keys = ['site-notes.pending.' + SITE].concat((cfg.legacy || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean));
    var list = read(), changed = false;
    keys.forEach(function (k) {
      var raw; try { raw = localStorage.getItem(k); } catch (e) { return; }
      if (raw === null) return;
      var parsed; try { parsed = JSON.parse(raw); } catch (e) { parsed = null; }
      var items = Array.isArray(parsed) ? parsed : parsed && Array.isArray(parsed.notes) ? parsed.notes : null;
      if (!items) { try { localStorage.removeItem(k); } catch (e) {} return; }
      items.forEach(function (o) {
        var text = o && (o.text || o.body);
        if (!text || typeof text !== 'string') return;
        var at = o.at || o.ts || o.createdAt || Date.now();
        if (typeof at === 'string') at = Date.parse(at) || Date.now();
        var ctx = o.context;
        list.push({ id: uid(), text: text.slice(0, MAX_TEXT), page: String(o.page || (o.context && o.context.page) || '/').slice(0, 200),
          context: ctx == null ? null : typeof ctx === 'string' ? ctx : JSON.stringify(ctx), at: at,
          sent: o.sent === true || o.pending === false });
      });
      try { localStorage.removeItem(k); } catch (e) {}
      changed = true;
    });
    if (changed) { list.sort(function (a, b) { return a.at - b.at; }); write(list); }
  }

  // ---- sending -------------------------------------------------------------------------------
  function post(n) {
    return fetch(URL_, { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: n.text, page: n.page, context: n.context || undefined, author: author(), website: '' }) })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); });
  }
  function flush() {
    if (busy) return Promise.resolve();
    var lock = +(localStorage.getItem(LOCK) || 0); // another tab is already sending
    if (Date.now() - lock < LOCK_MS) return Promise.resolve();
    var todo = read().filter(function (n) { return !n.sent; });
    if (!todo.length) return Promise.resolve();
    busy = true;
    try { localStorage.setItem(LOCK, String(Date.now())); } catch (e) {}
    var chain = Promise.resolve(), tried = {};
    todo.forEach(function (n) {
      tried[n.id] = 1;
      chain = chain.then(function () {
        return post(n).then(function () {
          write(read().map(function (x) { return x.id === n.id ? Object.assign(x, { sent: true }) : x; }));
          render();
        });
      });
    });
    return chain.catch(function () {}).then(function () {
      busy = false; try { localStorage.removeItem(LOCK); } catch (e) {} render();
      // a note written while we were sending (and not tried yet)
      if (read().some(function (n) { return !n.sent && !tried[n.id]; })) return flush();
    });
  }

  // ---- UI ------------------------------------------------------------------------------------
  var css = '.sn-w{position:fixed;right:14px;bottom:calc(14px + env(safe-area-inset-bottom,0px));z-index:2147483000;font:14px/1.4 system-ui,-apple-system,"Segoe UI",sans-serif;' +
    '--sn-bg:#fff;--sn-fg:#222;--sn-mut:#666;--sn-bd:#888;--sn-ok:#1b7a3d;--sn-warn:#b25e00;--sn-btn:#f2f2f2}' +
    '@media(prefers-color-scheme:dark){.sn-w{--sn-bg:#1e1e1e;--sn-fg:#eee;--sn-mut:#aaa;--sn-bd:#777;--sn-ok:#5fd18a;--sn-warn:#ffb454;--sn-btn:#333}}' +
    'html[data-theme=dark] .sn-w{--sn-bg:#1e1e1e;--sn-fg:#eee;--sn-mut:#aaa;--sn-bd:#777;--sn-ok:#5fd18a;--sn-warn:#ffb454;--sn-btn:#333}' +
    'html[data-theme=light] .sn-w{--sn-bg:#fff;--sn-fg:#222;--sn-mut:#666;--sn-bd:#888;--sn-ok:#1b7a3d;--sn-warn:#b25e00;--sn-btn:#f2f2f2}' +
    '.sn-w,.sn-w *{box-sizing:border-box}.sn-w a{text-decoration:none;color:inherit;font-weight:700}' +
    '.sn-t{display:block;margin-left:auto;border:1px solid var(--sn-bd);border-radius:999px;background:var(--sn-bg);color:var(--sn-fg);padding:8px 14px;font:inherit;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.25)}' +
    '.sn-p{position:absolute;right:0;bottom:46px;width:min(360px,calc(100vw - 28px));max-height:min(75vh,560px);overflow:auto;background:var(--sn-bg);color:var(--sn-fg);border:1px solid var(--sn-bd);border-radius:10px;padding:12px;box-shadow:0 4px 16px rgba(0,0,0,.3)}' +
    '.sn-p[hidden]{display:none}.sn-p label{display:block;margin-bottom:6px;font-weight:600}' +
    '.sn-p textarea{display:block;width:100%;font:inherit;font-size:16px;color:var(--sn-fg);background:var(--sn-bg);border:1px solid var(--sn-bd);border-radius:6px;padding:6px;resize:vertical}' +
    '.sn-hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}' +
    '.sn-r{display:flex;gap:8px;align-items:center;margin:8px 0}.sn-r button{font:inherit;color:var(--sn-fg);background:var(--sn-btn);border:1px solid var(--sn-bd);border-radius:6px;padding:5px 14px;cursor:pointer}' +
    '.sn-s{font-size:12px;color:#b00020}.sn-h{margin:10px 0 4px;font-size:12px;color:var(--sn-mut);font-weight:600}' +
    '.sn-l{list-style:none;margin:0;padding:0}.sn-l li{padding:6px 0;border-top:1px solid color-mix(in srgb,var(--sn-bd) 40%,transparent)}' +
    '.sn-x{white-space:pre-wrap;overflow-wrap:anywhere}.sn-m{display:flex;gap:8px;font-size:12px;color:var(--sn-mut)}' +
    '.sn-ok{color:var(--sn-ok)}.sn-no{color:var(--sn-warn)}.sn-none{font-size:12px;color:var(--sn-mut)}';

  var root, toggle, panel, text, status, listEl, hp;
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.textContent = html; return e; }
  function fmt(at) { try { return new Date(at).toLocaleDateString(undefined, { day: 'numeric', month: 'short' }); } catch (e) { return ''; } }

  function render() {
    if (!listEl) return;
    var notes = read().slice().reverse();
    listEl.textContent = '';
    toggle.dataset.unsent = String(notes.filter(function (n) { return !n.sent; }).length);
    if (!notes.length) { listEl.appendChild(el('li', 'sn-none', T.none)); return; }
    notes.forEach(function (n) {
      var li = el('li'), m = el('div', 'sn-m');
      li.appendChild(el('div', 'sn-x', n.text));
      m.appendChild(el('span', n.sent ? 'sn-ok' : 'sn-no', n.sent ? T.sent : T.unsent));
      m.appendChild(el('span', '', fmt(n.at)));
      li.appendChild(m); listEl.appendChild(li);
    });
  }

  function setOpen(o) {
    panel.hidden = !o; toggle.setAttribute('aria-expanded', String(o));
    if (o) { status.textContent = ''; render(); flush(); text.focus(); }
  }

  function context() {
    var c = { viewport: innerWidth + 'x' + innerHeight };
    if (location.search) c.search = location.search;
    try { var x = contextFn && contextFn(); if (typeof x === 'string') c.extra = x; else if (x && typeof x === 'object') Object.assign(c, x); } catch (e) {}
    return JSON.stringify(c).slice(0, 1500);
  }

  function submit() {
    var body = text.value.trim();
    if (!body) { status.textContent = T.empty; text.focus(); return; }
    if (hp.value) return; // honeypot filled: a bot
    status.textContent = '';
    write(read().concat([{ id: uid(), text: body.slice(0, MAX_TEXT), page: (location.pathname + location.hash).slice(0, 200),
      context: context(), at: Date.now(), sent: false }]));
    text.value = ''; render(); flush();
  }

  function build() {
    if (document.querySelector('.sn-w')) return;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    root = el('div', 'sn-w');
    toggle = el('button', 'sn-t', T.label); toggle.type = 'button'; toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-controls', 'sn-panel');
    panel = el('div', 'sn-p'); panel.id = 'sn-panel'; panel.hidden = true; panel.setAttribute('role', 'region'); panel.setAttribute('aria-label', T.label);
    var lab = el('label', '', T.title); lab.htmlFor = 'sn-text';
    text = el('textarea'); text.id = 'sn-text'; text.rows = 4; text.maxLength = MAX_TEXT; text.placeholder = T.ph;
    var h = el('div', 'sn-hp'); h.setAttribute('aria-hidden', 'true'); hp = el('input'); hp.type = 'text'; hp.tabIndex = -1; hp.autocomplete = 'off'; hp.name = 'website'; h.appendChild(hp);
    var row = el('div', 'sn-r'), send = el('button', '', T.send); send.type = 'button';
    status = el('span', 'sn-s'); status.setAttribute('role', 'status'); row.appendChild(send); row.appendChild(status);
    var hd = el('div', 'sn-h', T.list); listEl = el('ul', 'sn-l');
    [lab, text, h, row, hd, listEl].forEach(function (c) { panel.appendChild(c); });
    root.appendChild(panel); root.appendChild(toggle); document.body.appendChild(root);
    toggle.addEventListener('click', function () { setOpen(panel.hidden); });
    send.addEventListener('click', submit);
    text.addEventListener('keydown', function (e) { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) submit(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { setOpen(false); toggle.focus(); } });
    window.addEventListener('storage', function (e) { if (e.key === KEY) render(); });
    window.addEventListener('online', flush);
    render();
  }

  window.SiteNotes = { version: VERSION, site: SITE, setContext: function (fn) { contextFn = fn; }, flush: flush };
  function start() { author(); migrate(); build(); flush(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

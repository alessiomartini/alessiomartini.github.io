/**
 * "Feedback" button: bug reports and suggestions, POSTed to the shared site-notes Worker
 * (repo alessiomartini/site-notes, one D1 for all sites, site = "alessiomartini.github.io"). Write-only: nothing
 * is read back here; Claude reads the notes from the D1 and turns them into ROADMAP items.
 * A copy stays in localStorage until the server accepted it (resent at the next page load).
 * Self-contained: injects its own markup and CSS. Same API as markets-first-principles/public/js/notes-widget.js.
 */
(function () {
  'use strict';
  var SITE = 'alessiomartini.github.io';
  var URL_ = 'https://site-notes.alemarti-2001.workers.dev/' + SITE + '/notes';
  var KEY = 'site-notes.pending.' + SITE;
  if (document.querySelector('.sn-widget')) return;

  // ?sono-alessio marks this browser as Alessio's: author 'alessio' in site-notes. A label, not a login.
  function author() {
    try {
      if (new URLSearchParams(location.search).has('sono-alessio')) localStorage.setItem('site-notes.author', 'alessio');
      return localStorage.getItem('site-notes.author') || undefined;
    } catch (e) { return undefined; }
  }
  function queue(list) {
    try { if (list) localStorage.setItem(KEY, JSON.stringify(list.slice(-20))); return JSON.parse(localStorage.getItem(KEY) || '[]'); }
    catch (e) { return []; }
  }
  function post(note) {
    return fetch(URL_, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(note) })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); });
  }
  // Send notes left over from earlier failures; a note leaves the queue only after the server accepted it.
  function flush() {
    queue().forEach(function (n) {
      post(n).then(function () { queue(queue().filter(function (q) { return q.text !== n.text || q.at !== n.at; })); }, function () {});
    });
  }
  author();
  flush();

  var css = document.createElement('style');
  css.textContent =
    '.sn-widget{position:fixed;right:14px;bottom:14px;z-index:2147483000;font:14px/1.4 system-ui,sans-serif;color:#222}' +
    '.sn-toggle{border:1px solid #888;border-radius:999px;background:#fff;color:#222;padding:8px 14px;font:inherit;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.2)}' +
    '.sn-panel{position:absolute;right:0;bottom:44px;width:min(320px,calc(100vw - 28px));background:#fff;border:1px solid #888;border-radius:10px;padding:12px;box-shadow:0 4px 16px rgba(0,0,0,.25)}' +
    '.sn-panel[hidden]{display:none}.sn-panel label{display:block;margin-bottom:6px;font-weight:600}' +
    '.sn-panel textarea{box-sizing:border-box;width:100%;font:inherit;color:#222;background:#fff;border:1px solid #888;border-radius:6px;padding:6px}' +
    '.sn-hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}' +
    '.sn-row{display:flex;gap:8px;align-items:center;margin-top:8px}.sn-row button{font:inherit;color:#222;background:#f2f2f2;border:1px solid #888;border-radius:6px;padding:4px 10px;cursor:pointer}' +
    '.sn-status{font-size:12px}.sn-status[data-k=error]{color:#b00020}';
  document.head.appendChild(css);

  var root = document.createElement('div');
  root.className = 'sn-widget';
  root.innerHTML =
    '<button type="button" class="sn-toggle" aria-expanded="false">Feedback</button>' +
    '<div class="sn-panel" hidden>' +
    '<label for="sn-text">Bug or suggestion? The page is attached automatically.</label>' +
    '<textarea id="sn-text" rows="5" maxlength="2000" placeholder="What should change?"></textarea>' +
    '<div class="sn-hp" aria-hidden="true"><input id="sn-web" type="text" tabindex="-1" autocomplete="off"></div>' +
    '<div class="sn-row"><button type="button" class="sn-send">Send</button><button type="button" class="sn-cancel">Cancel</button>' +
    '<span class="sn-status" role="status"></span></div></div>';
  document.body.appendChild(root);

  var toggle = root.querySelector('.sn-toggle'), panel = root.querySelector('.sn-panel'),
      text = root.querySelector('#sn-text'), web = root.querySelector('#sn-web'),
      send = root.querySelector('.sn-send'), status = root.querySelector('.sn-status');
  function say(m, k) { status.textContent = m; status.dataset.k = k || ''; }
  function setOpen(o) { panel.hidden = !o; toggle.setAttribute('aria-expanded', String(o)); if (o) { say(''); text.focus(); } }
  toggle.addEventListener('click', function () { setOpen(panel.hidden); });
  root.querySelector('.sn-cancel').addEventListener('click', function () { text.value = ''; setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) setOpen(false); });

  send.addEventListener('click', function () {
    var body = text.value.trim();
    if (!body) { say('Write something first.', 'error'); return; }
    var note = { text: body, page: (location.pathname + location.hash).slice(0, 200), website: web.value, author: author(),
      context: JSON.stringify({ viewport: innerWidth + 'x' + innerHeight, search: location.search || undefined }), at: Date.now() };
    send.disabled = true; say('Sending…');
    post(note).then(function () {
      text.value = ''; say('Sent, thank you.');
      setTimeout(function () { if (!panel.hidden) setOpen(false); }, 900);
    }, function (err) {
      queue(queue().concat([note])); // kept locally, resent at the next page load
      say('Server unreachable (' + err.message + '): saved here, will be resent.', 'error');
    }).then(function () { send.disabled = false; });
  });
})();

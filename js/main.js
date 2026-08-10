// Renders index.html from the SITE object defined in data/content.js.
(function () {
  "use strict";

  const ICONS = {
    mail: '<rect x="3" y="5" width="18" height="14" rx="2" fill="none"/><path d="M3 7l9 6 9-6" fill="none"/>',
    github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.84.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.53 9.53 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" fill="currentColor" stroke="none"/>',
    stackoverflow: '<path d="M6 21v-6h13v6H6z" fill="none"/><path d="M8 17h9M7.5 13.5l8.7 1.8M8.4 10l8.2 3.5M9.8 6.6l7.6 4.9" fill="none"/>',
    code: '<path d="M8 7 3 12l5 5M16 7l5 5-5 5" fill="none"/>',
    chevron: '<path d="M9 6l6 6-6 6" fill="none"/>',
  };

  function svg(name, cls) {
    return `<svg class="${cls || "icon"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
  }

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function renderHero(profile) {
    document.getElementById("hero-photo").src = profile.photo;
    document.getElementById("hero-photo").alt = profile.name;
    document.getElementById("hero-name").textContent = profile.name;
    document.getElementById("hero-tagline").textContent = profile.tagline;
    document.getElementById("hero-intro").textContent = profile.intro;
    document.getElementById("hero-cv").href = profile.cv;
  }

  function renderBio(bio) {
    const container = document.getElementById("bio-text");
    container.innerHTML = bio.paragraphs.map((p) => `<p>${p}</p>`).join("");
  }

  function renderResearch(research) {
    const container = document.getElementById("research-text");
    const bullets = research.bullets.map((b) => `<li>${b}</li>`).join("");
    container.innerHTML =
      `<p>${research.intro}</p><ul>${bullets}</ul>` +
      research.outro.map((p) => `<p>${p}</p>`).join("");
  }

  function renderEducation(groups) {
    const container = document.getElementById("education-list");
    groups.forEach((group, index) => {
      const details = el("details", "");
      if (index === 0) details.open = true;
      const items = group.items.map((item) => `<li>${item}</li>`).join("");
      details.innerHTML = `
        <summary>
          <span>${group.group}<br><span class="meta">${group.place} &middot; ${group.years}</span></span>
          ${svg("chevron", "chevron")}
        </summary>
        <ul>${items}</ul>
      `;
      container.appendChild(details);
    });
  }

  function renderTeaching(teaching) {
    const container = document.getElementById("teaching-list");
    teaching.assistant.forEach((t) => {
      const card = el(
        "div",
        "card",
        `<div class="role">${t.role}</div><h4>${t.course}</h4><p>${t.person} &middot; ${t.place} (${t.year})</p>`
      );
      container.appendChild(card);
    });
    container.parentElement.appendChild(el("p", "note-card", teaching.note));
  }

  function renderPublications(publications) {
    document.getElementById("publications-intro").textContent = publications.intro;
    const list = document.getElementById("publications-list");
    publications.items.forEach((pub) => {
      const li = el("li");
      const target = pub.external ? ' target="_blank" rel="noopener noreferrer"' : "";
      li.innerHTML = `<a href="${pub.href}"${target}>${pub.title}</a>`;
      list.appendChild(li);
    });
  }

  function renderResources(resources) {
    const notes = document.getElementById("resources-notes");
    resources.lectureNotes.forEach((n) => {
      notes.appendChild(el("li", "", `<strong>${n.title}</strong> — ${n.author}`));
    });

    const articles = document.getElementById("resources-articles");
    resources.articles.forEach((a) => {
      articles.appendChild(el("li", "", `<strong>${a.title}</strong> — ${a.author}`));
    });

    const educators = document.getElementById("resources-educators");
    resources.educators.forEach((edu) => {
      const li = el("li");
      li.innerHTML = `<a href="${edu.href}" target="_blank" rel="noopener noreferrer">${edu.name}</a>`;
      educators.appendChild(li);
    });
  }

  function renderContact(contacts) {
    const list = document.getElementById("contact-list");
    contacts.forEach((c) => {
      const li = el("li");
      const isMail = c.icon === "mail";
      li.innerHTML = `
        <a href="${c.href}"${isMail ? "" : ' target="_blank" rel="noopener noreferrer"'}>
          ${svg(c.icon)}
          <span class="contact-text">
            <span class="contact-label">${c.label}</span><br>
            <span class="contact-value">${c.value}</span>
          </span>
        </a>
      `;
      list.appendChild(li);
    });
  }

  function setupThemeToggle() {
    const btn = document.getElementById("theme-toggle");
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  function setupMobileNav() {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("site-nav");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  function setupScrollSpy() {
    const links = Array.from(document.querySelectorAll(".site-nav a"));
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = `#${entry.target.id}`;
          links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === id));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHero(SITE.profile);
    renderBio(SITE.bio);
    renderResearch(SITE.research);
    renderEducation(SITE.education);
    renderTeaching(SITE.teaching);
    renderPublications(SITE.publications);
    renderResources(SITE.resources);
    renderContact(SITE.contacts);

    document.getElementById("year").textContent = new Date().getFullYear();

    setupThemeToggle();
    setupMobileNav();
    setupScrollSpy();

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise().catch((err) => console.error("MathJax typeset error:", err));
    }
  });
})();

// Renders index.html from the SITE object defined in data/content.js.
(function () {
  "use strict";

  const ICONS = {
    mail: '<rect x="3" y="5" width="18" height="14" rx="2" fill="none"/><path d="M3 7l9 6 9-6" fill="none"/>',
    github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.84.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.53 9.53 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" fill="currentColor" stroke="none"/>',
    stackoverflow: '<path d="M6 21v-6h13v6H6z" fill="none"/><path d="M8 17h9M7.5 13.5l8.7 1.8M8.4 10l8.2 3.5M9.8 6.6l7.6 4.9" fill="none"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v10H2z" fill="none"/><circle cx="4" cy="4" r="1" fill="currentColor"/>',
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

  function escapeAttr(str) {
    return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
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
    container.innerHTML =
      bio.intro.join("") + `<h3>${bio.researchHeading}</h3>` + bio.research.join("");
  }

  function renderEducation(groups) {
    const container = document.getElementById("education-list");
    groups.forEach((group, index) => {
      const details = el("details", "");
      if (index === 0) details.open = true;
      const items = group.items
        .map((item) => {
          if (typeof item === "string") return `<li>${item}</li>`;
          const isExternal = item.courseHref && item.courseHref.startsWith("http");
          const nameHtml = item.courseHref
            ? `<a class="text-link" href="${item.courseHref}"${isExternal ? ' target="_blank" rel="noopener noreferrer"' : ""}>${item.name}</a>`
            : item.name;
          const profHtml = item.professor
            ? item.professorHref
              ? ` — <a class="text-link" href="${item.professorHref}" target="_blank" rel="noopener noreferrer">${item.professor}</a>`
              : ` — ${item.professor}`
            : "";
          return `<li>${nameHtml}${profHtml}</li>`;
        })
        .join("");
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
      const personHtml = t.personHref
        ? `<a class="text-link" href="${t.personHref}" target="_blank" rel="noopener noreferrer">${t.person}</a>`
        : t.person;
      const card = el(
        "div",
        "card",
        `<div class="role">${t.role}</div><h4>${t.course}</h4><p>${personHtml} &middot; ${t.place} (${t.year})</p>`
      );
      container.appendChild(card);
    });
    container.parentElement.appendChild(el("p", "note-card", teaching.note));
  }

  function renderProjects(categories) {
    const container = document.getElementById("projects-list");
    categories.forEach((category) => {
      const group = el("div", "project-group");
      const heading = el("h3", "project-category", category.category);
      group.appendChild(heading);

      const list = el("div", "project-cards");
      category.items.forEach((project) => {
        const screenshots = project.screenshots || [];
        const card = el("div", `project-card-row${screenshots.length ? "" : " no-media"}`);
        const visitLink = project.href
          ? `<a class="btn btn-ghost btn-sm" href="${project.href}" target="_blank" rel="noopener noreferrer">Visit project</a>`
          : "";
        const repoLink = project.repo
          ? `<a class="project-source" href="${project.repo}" target="_blank" rel="noopener noreferrer">Source</a>`
          : "";
        const typeTag = project.type ? `<span class="project-type project-type-${project.type.toLowerCase()}">${project.type}</span>` : "";
        const statusTag = project.status ? `<span class="project-status project-status-${project.status.toLowerCase().replace(/\s+/g, "-")}">${project.status}</span>` : "";

        const media = screenshots.length
          ? `<div class="project-media" data-shots="${encodeURIComponent(JSON.stringify(screenshots))}" data-index="0" data-name="${escapeAttr(project.name)}">
              <button type="button" class="project-media-img-btn">
                <img class="project-media-img" src="${screenshots[0]}" alt="${escapeAttr(project.name)} screenshot 1">
              </button>
              ${
                screenshots.length > 1
                  ? `
                    <button type="button" class="project-media-arrow project-media-prev" aria-label="Previous screenshot">&lsaquo;</button>
                    <button type="button" class="project-media-arrow project-media-next" aria-label="Next screenshot">&rsaquo;</button>
                    <div class="project-media-dots">
                      ${screenshots.map((_, i) => `<span class="project-media-dot${i === 0 ? " active" : ""}"></span>`).join("")}
                    </div>
                  `
                  : ""
              }
            </div>`
          : "";

        card.innerHTML = `
          <div class="project-info">
            <h4>${project.name}</h4>
            <div class="project-tags">${typeTag}${statusTag}</div>
            <p>${project.description}</p>
            <div class="project-links">
              ${visitLink}
              ${repoLink}
            </div>
          </div>
          ${media}
        `;
        list.appendChild(card);
      });
      group.appendChild(list);
      container.appendChild(group);
    });
  }

  function setupProjectMedia(openLightbox) {
    document.querySelectorAll(".project-media").forEach((media) => {
      const shots = JSON.parse(decodeURIComponent(media.dataset.shots));
      const name = media.dataset.name;
      const img = media.querySelector(".project-media-img");
      const dots = media.querySelectorAll(".project-media-dot");

      function setIndex(i) {
        const index = (i + shots.length) % shots.length;
        media.dataset.index = String(index);
        img.src = shots[index];
        img.alt = `${name} screenshot ${index + 1}`;
        dots.forEach((dot, di) => dot.classList.toggle("active", di === index));
      }

      const prev = media.querySelector(".project-media-prev");
      const next = media.querySelector(".project-media-next");
      if (prev) prev.addEventListener("click", () => setIndex(Number(media.dataset.index) - 1));
      if (next) next.addEventListener("click", () => setIndex(Number(media.dataset.index) + 1));
      dots.forEach((dot, i) => dot.addEventListener("click", () => setIndex(i)));

      media.querySelector(".project-media-img-btn").addEventListener("click", () => {
        openLightbox(shots, Number(media.dataset.index), name);
      });
    });
  }

  function renderResources(resources) {
    const educators = document.getElementById("resources-educators");
    resources.educators.forEach((edu) => {
      const li = el("li");
      li.innerHTML = `<a href="${edu.href}" target="_blank" rel="noopener noreferrer">${edu.name}</a>`;
      educators.appendChild(li);
    });
  }

  function renderCVs(cvs) {
    const container = document.getElementById("cv-list");
    cvs.forEach((cv) => {
      const item = el("div", "cv-item");
      item.innerHTML = `
        <h4>${cv.title}</h4>
        <p>${cv.description}</p>
        <a href="${cv.href}" target="_blank" rel="noopener noreferrer">${cv.linkText || "Download PDF"}</a>
      `;
      container.appendChild(item);
    });
  }

  function renderElsewhere(items) {
    const container = document.getElementById("elsewhere-note");
    container.innerHTML = items
      .map((item) => {
        const target = item.external ? ' target="_blank" rel="noopener noreferrer"' : "";
        return `${item.description} <a class="text-link" href="${item.href}"${target}>${item.linkText}</a>`;
      })
      .join(" &middot; ");
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
            <span class="contact-label">${c.label}</span>
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

  function setupProjectLightbox() {
    const lightbox = el(
      "div",
      "project-lightbox",
      `
        <button type="button" class="project-lightbox-close" aria-label="Close">&times;</button>
        <button type="button" class="project-lightbox-nav project-lightbox-prev" aria-label="Previous screenshot">&lsaquo;</button>
        <img class="project-lightbox-img" src="" alt="">
        <button type="button" class="project-lightbox-nav project-lightbox-next" aria-label="Next screenshot">&rsaquo;</button>
        <div class="project-lightbox-count"></div>
      `
    );
    document.body.appendChild(lightbox);

    const img = lightbox.querySelector(".project-lightbox-img");
    const count = lightbox.querySelector(".project-lightbox-count");
    let shots = [];
    let index = 0;
    let name = "";

    function show() {
      img.src = shots[index];
      img.alt = `${name} screenshot ${index + 1}`;
      count.textContent = shots.length > 1 ? `${index + 1} / ${shots.length}` : "";
    }

    function open(newShots, startIndex, projectName) {
      shots = newShots;
      index = startIndex;
      name = projectName;
      show();
      lightbox.classList.add("open");
      document.body.classList.add("no-scroll");
    }

    function close() {
      lightbox.classList.remove("open");
      document.body.classList.remove("no-scroll");
    }

    function step(delta) {
      index = (index + delta + shots.length) % shots.length;
      show();
    }

    lightbox.querySelector(".project-lightbox-close").addEventListener("click", close);
    lightbox.querySelector(".project-lightbox-prev").addEventListener("click", () => step(-1));
    lightbox.querySelector(".project-lightbox-next").addEventListener("click", () => step(1));
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });

    return { open };
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
    // Each page only has some of these containers — main.js is shared
    // across index.html, education.html and projects.html.
    if (document.getElementById("hero-photo")) renderHero(SITE.profile);
    if (document.getElementById("bio-text")) renderBio(SITE.bio);
    if (document.getElementById("education-list")) renderEducation(SITE.education);
    if (document.getElementById("teaching-list")) renderTeaching(SITE.teaching);
    if (document.getElementById("projects-list")) {
      renderProjects(SITE.projects);
      const lightbox = setupProjectLightbox();
      setupProjectMedia(lightbox.open);
    }
    if (document.getElementById("resources-educators")) renderResources(SITE.resources);
    if (document.getElementById("cv-list")) renderCVs(SITE.cvs);
    if (document.getElementById("elsewhere-note")) renderElsewhere(SITE.elsewhere);
    if (document.getElementById("contact-list")) renderContact(SITE.contacts);

    document.getElementById("year").textContent = new Date().getFullYear();

    setupThemeToggle();
    setupMobileNav();
    setupScrollSpy();
  });
})();

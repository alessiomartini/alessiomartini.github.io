// Renders extra-things.html from SITE.extraThings, defined in data/content.js.
(function () {
  "use strict";

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function renderSimpleList(containerId, items) {
    const container = document.getElementById(containerId);
    items.forEach((item) => {
      const li = el("li");
      if (typeof item === "string") {
        li.textContent = item;
      } else {
        li.innerHTML = `${item.text}${item.note ? `<span class="et-note">${item.note}: <a href="${item.noteHref}" target="_blank" rel="noopener noreferrer">${item.noteLinkText || "link"}</a></span>` : ""}`;
      }
      container.appendChild(li);
    });
  }

  function renderProjects(projects) {
    const container = document.getElementById("et-projects");
    const cardGrid = el("div", "et-card-list");

    projects.forEach((project) => {
      if (project.items) {
        // Sub-list style entry (Opel Corsa, Handstands all around, Bivouacs, ???)
        const card = el("div", "card et-sublist-card");
        const listItems = project.items
          .map((item) => {
            if (typeof item === "string") return `<li>${item}</li>`;
            return `<li>${item.text} — <a href="${item.href}" target="_blank" rel="noopener noreferrer">photo</a></li>`;
          })
          .join("");
        card.innerHTML = `
          <h4>${project.title}</h4>
          ${listItems ? `<ul>${listItems}</ul>` : ""}
          ${project.note ? `<p class="et-empty-note">${project.note}</p>` : ""}
        `;
        container.appendChild(card);
        return;
      }

      // Simple photo+description card
      const card = el("div", "card et-card");
      const photo = project.photo
        ? `<img class="et-card-photo" src="${project.photo}" alt="${project.title}" loading="lazy">`
        : `<div class="et-card-photo-pending">Photo pending</div>`;
      const note = project.note
        ? `<span class="et-note"><a href="${project.noteHref}" target="_blank" rel="noopener noreferrer">${project.note}</a></span>`
        : "";
      card.innerHTML = `
        ${photo}
        <div class="et-card-body">
          <h4>${project.title}</h4>
          <p>${project.description}</p>
          ${note}
        </div>
      `;
      cardGrid.appendChild(card);
    });

    container.appendChild(cardGrid);
  }

  function renderAdventures(adventures) {
    const container = document.getElementById("et-adventures");
    adventures.forEach((adv) => {
      const card = el("div", "card et-card");
      const photo = adv.photo
        ? `<img class="et-card-photo" src="${adv.photo}" alt="${adv.title}" loading="lazy">`
        : `<div class="et-card-photo-pending">Photo pending</div>`;
      card.innerHTML = `
        ${photo}
        <div class="et-card-body">
          <h4>${adv.title}</h4>
          <p>${adv.description}</p>
        </div>
      `;
      container.appendChild(card);
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

  document.addEventListener("DOMContentLoaded", () => {
    renderSimpleList("et-sports", SITE.extraThings.sports);
    renderSimpleList("et-music", SITE.extraThings.music);
    renderProjects(SITE.extraThings.projects);
    renderAdventures(SITE.extraThings.adventures);

    document.getElementById("year").textContent = new Date().getFullYear();

    setupThemeToggle();
  });
})();

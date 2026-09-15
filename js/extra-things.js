// Renders extra-things.html from SITE.extraThings, defined in data/content.js.
// Loaded alongside js/main.js, which handles the shared header behaviours
// (theme toggle, mobile nav, scroll spy) — this file only renders content.
(function () {
  "use strict";

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  // Renders a card's media block. `media` is an optional array of
  // { type: "image" | "video", src, alt? } — supports zero, one, or many
  // items (some entries will eventually have several photos, or a video).
  function mediaHtml(media, title) {
    if (!media || media.length === 0) {
      return `<div class="et-card-photo-pending">Photo pending</div>`;
    }
    const items = media
      .map((m) =>
        m.type === "video"
          ? `<video src="${m.src}" controls preload="metadata"></video>`
          : `<img src="${m.src}" alt="${m.alt || title}" loading="lazy">`
      )
      .join("");
    return `<div class="et-card-media">${items}</div>`;
  }

  function renderSimpleList(containerId, items) {
    const container = document.getElementById(containerId);
    items.forEach((item) => {
      const li = el("li");
      if (typeof item === "string") {
        li.textContent = item;
      } else {
        const note = item.note
          ? `<span class="et-note">${item.note}: <a class="text-link" href="${item.noteHref}" target="_blank" rel="noopener noreferrer">${item.noteLinkText || "link"}</a></span>`
          : "";
        li.innerHTML = `${item.text}${note}`;
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
            return `<li>${item.text} — <a class="text-link" href="${item.href}" target="_blank" rel="noopener noreferrer">photo</a></li>`;
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

      // Simple media+description card
      const card = el("div", "card et-card");
      const note = project.note
        ? `<span class="et-note"><a class="text-link" href="${project.noteHref}" target="_blank" rel="noopener noreferrer">${project.note}</a></span>`
        : "";
      card.innerHTML = `
        ${mediaHtml(project.media, project.title)}
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
      card.innerHTML = `
        ${mediaHtml(adv.media, adv.title)}
        <div class="et-card-body">
          <h4>${adv.title}</h4>
          <p>${adv.description}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderSimpleList("et-sports", SITE.extraThings.sports);
    renderSimpleList("et-music", SITE.extraThings.music);
    renderProjects(SITE.extraThings.projects);
    renderAdventures(SITE.extraThings.adventures);
  });
})();

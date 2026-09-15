// Renders course.html from SITE.courses[id], defined in data/content.js.
// The course is picked with a ?id=<slug> query parameter, e.g.
// course.html?id=lattice-gauge-theory.
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const id = new URLSearchParams(window.location.search).get("id");
    const course = id && SITE.courses[id];

    if (!course) {
      document.getElementById("course-title").textContent = "Course not found";
      document.getElementById("course-meta").textContent = "This course page doesn't exist — go back to Education.";
      return;
    }

    document.title = `${course.title} | Alessio Martini`;
    document.getElementById("course-title").textContent = course.title;

    if (course.subtitle) {
      const subtitle = document.getElementById("course-subtitle");
      subtitle.textContent = course.subtitle;
      subtitle.hidden = false;
    }

    const professorHtml = course.professorHref
      ? `<a class="text-link" href="${course.professorHref}" target="_blank" rel="noopener noreferrer">${course.professor}</a>`
      : course.professor;
    document.getElementById("course-meta").innerHTML = `${professorHtml}${course.meta ? ` &middot; ${course.meta}` : ""}`;

    const linksContainer = document.getElementById("course-links");
    (course.links || []).forEach((link) => {
      const a = document.createElement("a");
      a.className = "btn btn-ghost btn-sm";
      a.href = link.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = link.label;
      linksContainer.appendChild(a);
    });

    const sectionsContainer = document.getElementById("course-sections");
    course.sections.forEach((section) => {
      const block = document.createElement("div");
      block.className = "course-section";
      block.innerHTML = `<h3>${section.heading}</h3><div class="prose">${section.body}</div>`;
      sectionsContainer.appendChild(block);
    });
  });
})();

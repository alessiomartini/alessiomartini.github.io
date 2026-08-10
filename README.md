# alessiomartini.github.io

Personal & professional website of Alessio Martini — plain HTML/CSS/JS, no
build step, deployed directly via GitHub Pages.

## Structure

```
index.html          Page shell: header/nav, hero, empty section containers
css/style.css        All styling, incl. light/dark theme (CSS variables)
js/main.js           Renders every section from data/content.js, handles
                      the theme toggle, mobile nav and scroll-spy
data/content.js       Single source of truth for all page content
foto_alessio.jpg      Profile photo used in the hero section
physics.svg           Favicon / brand icon
pdfs/                 CV and thesis PDFs linked from the page
```

## Editing content

Everything you see on the page — bio, research interests, courses,
teaching, publications, resources, contacts — comes from the `SITE` object
in [`data/content.js`](data/content.js). To update the site:

1. Open `data/content.js`.
2. Edit the relevant array/field (e.g. add a course to `education`, a link
   to `publications.items`, or a row to `contacts`).
3. Save and refresh — `js/main.js` re-renders everything from that object,
   no other file needs to change.

Only touch `index.html` for structural changes (new sections, layout), and
`css/style.css` for visual changes (colors live in the `:root` and
`:root[data-theme="dark"]` blocks at the top of the file).

## Previewing locally

Serve the directory over local HTTP (plain `file://` can block script
loading in some browsers):

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Deployment

This is a GitHub Pages user site (`<username>.github.io`): pushing to
`main` publishes the live site automatically, no CI step required.

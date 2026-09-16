// One-off utility run by .github/workflows/capture-screenshots.yml.
// Loads SITE from data/content.js (a plain browser global, not a module) and
// screenshots the live URL of every project that has one, so a human/Claude
// can wire the results into `screenshots: [...]` in data/content.js afterwards.
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..", "..");

function loadSite() {
  const file = path.join(ROOT, "data", "content.js");
  // Top-level `const` in a vm context stays in its own lexical scope and
  // never lands on the sandbox object, so rewrite it to `var` just for
  // this read-only parse.
  const code = fs.readFileSync(file, "utf8").replace("const SITE", "var SITE");
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.SITE;
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function slugFor(project) {
  if (project.repo) {
    const parts = project.repo.replace(/\/$/, "").split("/");
    return parts[parts.length - 1];
  }
  return slugify(project.name);
}

(async () => {
  const SITE = loadSite();
  const targets = [];
  SITE.projects.forEach((category) => {
    category.items.forEach((project) => {
      if (project.href) targets.push(project);
    });
  });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const results = [];
  for (const project of targets) {
    const slug = slugFor(project);
    const dir = path.join(ROOT, "images", "projects", slug);
    fs.mkdirSync(dir, { recursive: true });
    const outPath = path.join(dir, "1.png");
    try {
      console.log(`Capturing "${project.name}" -> ${project.href}`);
      await page.goto(project.href, { waitUntil: "load", timeout: 30000 });
      await page.waitForTimeout(2000); // let fonts/late content settle
      await page.screenshot({ path: outPath });
      results.push({ name: project.name, slug, ok: true });
      console.log(`  saved ${path.relative(ROOT, outPath)}`);
    } catch (err) {
      results.push({ name: project.name, slug, ok: false, error: err.message });
      console.error(`  FAILED: ${err.message}`);
    }
  }

  await browser.close();

  console.log("\nSummary:");
  results.forEach((r) => console.log(`  ${r.ok ? "OK  " : "FAIL"} ${r.name} (${r.slug})${r.error ? " - " + r.error : ""}`));

  if (results.some((r) => !r.ok)) process.exitCode = 1;
})();

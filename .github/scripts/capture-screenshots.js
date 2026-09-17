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

  const MAX_SHOTS = 4;

  const results = [];
  for (const project of targets) {
    const slug = slugFor(project);
    const dir = path.join(ROOT, "images", "projects", slug);
    fs.mkdirSync(dir, { recursive: true });
    try {
      console.log(`Capturing "${project.name}" -> ${project.href}`);
      await page.goto(project.href, { waitUntil: "load", timeout: 30000 });
      await page.waitForTimeout(2000); // let fonts/late content settle

      // Walk down the page taking one shot per screenful, to show different
      // sections/features rather than just the hero. Sites with little or no
      // scroll (dashboards, maps that fill the viewport) naturally stop after
      // shot 1 because scrollY stops advancing.
      let shotCount = 0;
      let lastScrollY = -1;
      for (let i = 0; i < MAX_SHOTS; i++) {
        const scrollY = await page.evaluate((step) => {
          window.scrollTo(0, step * window.innerHeight * 0.92);
          return window.scrollY;
        }, i);
        if (i > 0 && scrollY <= lastScrollY + 40) break; // didn't actually move -> no more content
        lastScrollY = scrollY;
        await page.waitForTimeout(400);
        shotCount++;
        await page.screenshot({ path: path.join(dir, `${shotCount}.png`) });
      }

      // Clean up any stale shots from a previous run with more screenfuls.
      fs.readdirSync(dir)
        .filter((f) => /^\d+\.png$/.test(f) && Number(f.split(".")[0]) > shotCount)
        .forEach((f) => fs.unlinkSync(path.join(dir, f)));

      results.push({ name: project.name, slug, ok: true, shots: shotCount });
      console.log(`  saved ${shotCount} screenshot(s) to ${path.relative(ROOT, dir)}/`);
    } catch (err) {
      results.push({ name: project.name, slug, ok: false, error: err.message });
      console.error(`  FAILED: ${err.message}`);
    }
  }

  await browser.close();

  console.log("\nSummary:");
  results.forEach((r) => console.log(`  ${r.ok ? `OK   (${r.shots} shot(s))` : "FAIL"} ${r.name} (${r.slug})${r.error ? " - " + r.error : ""}`));

  if (results.some((r) => !r.ok)) process.exitCode = 1;
})();

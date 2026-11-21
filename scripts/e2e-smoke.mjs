import assert from "node:assert/strict";
import { spawn, execFileSync } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm } from "node:fs/promises";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright-core";

const baseURL = process.env.BASE_URL || "http://127.0.0.1:4173";
const shots = process.env.SHOTS_DIR || join(homedir(), "shots");
const chromePath =
  process.env.CHROME_PATH ||
  execFileSync("which", ["google-chrome"], { encoding: "utf8" }).trim();
await mkdir(shots, { recursive: true });
const profile = await mkdtemp(join(shots, "chrome-smoke-"));
const chrome = spawn(
  chromePath,
  [
    "--headless=new",
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--no-first-run",
    "--no-default-browser-check",
    "--remote-debugging-port=0",
    `--user-data-dir=${profile}`,
    "about:blank",
  ],
  { stdio: "ignore" },
);
let browser;
const errors = [];
const paths = [];
try {
  let port;
  for (let attempt = 0; attempt < 100; attempt++) {
    try {
      port = Number(
        (await readFile(join(profile, "DevToolsActivePort"), "utf8")).split(
          "\n",
        )[0],
      );
      break;
    } catch {
      if (chrome.exitCode !== null)
        throw Error(`Chrome exited ${chrome.exitCode}`);
      await new Promise((r) => setTimeout(r, 100));
    }
  }
  assert(port, "Chrome CDP endpoint did not become ready");
  browser = await chromium.connectOverCDP(`http://127.0.0.1:${port}`);
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    acceptDownloads: true,
  });
  const page = await context.newPage();
  context.on("page", (p) => {
    p.on("pageerror", (e) => errors.push(e.message));
    p.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
  });
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  async function screenshot(name) {
    const path = join(shots, `${name}.png`);
    await page.screenshot({ path, fullPage: true });
    paths.push(path);
  }
  async function nav(index) {
    await page.getByTestId(`nav-${index}`).click();
    await page.locator("h1").waitFor();
  }
  async function select(key, value) {
    await page.getByTestId(`filter-${key}`).selectOption(value);
  }
  async function cells() {
    return page
      .getByTestId("heatmap-cell")
      .evaluateAll((nodes) =>
        nodes.map((n) => Number(n.getAttribute("data-count"))),
      );
  }
  await page.goto(baseURL, { waitUntil: "networkidle" });
  assert.match(await page.title(), /Cloud9 VALORANT Scout/);
  assert(
    (await page.getByTestId("insight-card").count()) >= 3,
    "Dashboard must show at least three insights",
  );
  await screenshot("01-coach-dashboard");
  console.log("PASS app loads; dashboard has 3+ evidence-backed insights");

  await nav(1);
  await select("map", "Ascent");
  const before = await cells();
  assert.equal(before.length, 576, "Density uses a fine 24×24 grid");
  await select("map", "Bind");
  const afterMap = await cells();
  assert.notDeepEqual(
    before,
    afterMap,
    "Map filter must change heatmap counts",
  );
  await select("team", "Ember Vale Esports");
  const afterTeam = await cells();
  assert.notDeepEqual(
    afterMap,
    afterTeam,
    "Team filter must change heatmap counts",
  );
  assert(afterTeam.reduce((a, b) => a + b, 0) > 0);
  console.log(
    `PASS shared filters change heatmap counts: map changes ${before.filter((n, i) => n !== afterMap[i]).length} cells; team changes ${afterMap.filter((n, i) => n !== afterTeam[i]).length} cells (${afterTeam.reduce((a, b) => a + b, 0)} casts in final slice)`,
  );
  await select("team", "all");
  assert(
    (await cells()).reduce((a, b) => a + b, 0) >
      afterTeam.reduce((a, b) => a + b, 0),
  );
  await select("team", "Nova Ridge");
  const shapes = [];
  for (const map of ["Ascent", "Bind", "Haven", "Lotus", "Sunset"]) {
    await select("map", map);
    shapes.push(
      await page
        .locator(".site-shape")
        .evaluateAll((nodes) =>
          nodes.map((n) => n.getAttribute("points")).join("|"),
        ),
    );
    if (map === "Bind")
      assert.equal(await page.getByTestId("map-teleporter").count(), 2);
    if (map === "Lotus")
      assert.equal(await page.getByTestId("map-door").count(), 2);
    await screenshot(`02-map-${map.toLowerCase()}`);
  }
  assert.equal(
    new Set(shapes).size,
    5,
    "Every map has different site geometry",
  );
  await select("map", "Bind");
  await page
    .getByRole("button", { name: "Sentinel setups", exact: true })
    .click();
  assert.equal(
    await page.getByTestId("filter-abilityType").inputValue(),
    "sentinel",
  );
  const sentinelCount = (await cells()).reduce((a, b) => a + b, 0);
  await page.getByRole("button", { name: "All utility", exact: true }).click();
  assert((await cells()).reduce((a, b) => a + b, 0) > sentinelCount);
  await page.getByRole("button", { name: "Hard counts", exact: true }).click();
  assert.equal((await cells()).length, 144, "Counts use a readable 12×12 grid");
  assert((await page.locator(".cell-count").count()) > 0);
  await page.getByLabel("Cast points").check();
  assert((await page.locator(".schematic circle").count()) > 0);
  await screenshot("02b-hard-counts");
  await page.getByRole("button", { name: "Density", exact: true }).click();
  await page.getByLabel("Cast points").uncheck();
  await screenshot("02-utility-heatmap");
  await select("abilityType", "flash");
  assert.equal(
    (await cells()).reduce((a, b) => a + b, 0),
    0,
  );
  await nav(0);
  assert.match(await page.locator("main").innerText(), /No observations/);
  await select("abilityType", "all");
  console.log(
    "PASS density/counts, cast points, quick filters and empty state",
  );

  await nav(2);
  assert(
    (await page.getByTestId("operator-card").count()) > 0,
    "Operator cards render",
  );
  assert.match(await page.locator("main").innerText(), /Death w\/o first kill/);
  assert((await page.locator(".timing-chart").count()) > 0);
  assert((await page.locator("table").count()) >= 2);
  await screenshot("03-operator-profiler");
  console.log(
    "PASS Operator profiles, timing charts, economy and hold map render",
  );
  await nav(3);
  await screenshot("04-anti-strat-generator");
  assert((await page.locator(".counter").count()) >= 3);
  const cards = await page
    .locator(".insight-card")
    .evaluateAll((nodes) =>
      nodes.map((n) => ({
        insight: n.querySelector("h3").textContent,
        counter: n.querySelector(".counter").textContent,
      })),
    );
  assert(
    cards.every((c) => !c.counter.includes(c.insight)),
    "Counters must not repeat the insight text",
  );
  await nav(4);
  assert.equal(await page.getByTestId("filter-team").inputValue(), "Cloud9");
  await screenshot("05-self-scout");
  await nav(5);
  assert.equal(
    await page.getByTestId("filter-team").inputValue(),
    "Nova Ridge",
  );
  await screenshot("06-scout-report");
  const download = async (button, name) => {
    const event = page.waitForEvent("download");
    await page.getByTestId(button).click();
    const file = await event;
    const path = join(shots, name);
    await file.saveAs(path);
    return path;
  };
  const jsonPath = await download("export-json", "cloud9-scout-report.json");
  const report = JSON.parse(await readFile(jsonPath, "utf8"));
  assert.equal(report.opponent, "Nova Ridge");
  assert.equal(report.map, "Bind");
  assert.equal(report.top3Tendencies.length, 3);
  assert.match(report.dataLabel, /SAMPLE \/ DEMO/);
  const htmlPath = await download("export-html", "cloud9-scout-report.html");
  const html = await readFile(htmlPath, "utf8");
  assert.match(html, /SAMPLE \/ DEMO DATA/);
  assert.match(html, /<svg/);
  assert(!html.includes("@import"));
  const standalone = await context.newPage();
  const outbound = [];
  standalone.on("request", (r) => {
    if (/^https?:/.test(r.url())) outbound.push(r.url());
  });
  await standalone.goto(pathToFileURL(htmlPath).href);
  assert.match(await standalone.locator("body").innerText(), /Nova Ridge/);
  assert.equal(
    await standalone
      .locator(".report-paper")
      .evaluate((el) => getComputedStyle(el).backgroundColor),
    "rgb(255, 255, 255)",
  );
  assert.deepEqual(outbound, []);
  const standaloneShot = join(shots, "07-standalone-html.png");
  await standalone.screenshot({ path: standaloneShot, fullPage: true });
  paths.push(standaloneShot);
  await standalone.close();
  await page.evaluate(() => {
    window.__printCalled = false;
    window.print = () => {
      window.__printCalled = true;
    };
  });
  await page.getByTestId("export-print").click();
  assert(
    await page.evaluate(() => window.__printCalled),
    "Print action invokes window.print",
  );
  await page.emulateMedia({ media: "print" });
  assert.equal(
    await page
      .locator(".view-nav")
      .evaluate((el) => getComputedStyle(el).display),
    "none",
  );
  assert(await page.getByTestId("scout-report").isVisible());
  await screenshot("08-print-report");
  const pdfPath = join(shots, "cloud9-scout-report.pdf");
  const pdf = await page.pdf({
    path: pdfPath,
    preferCSSPageSize: true,
    printBackground: true,
  });
  const pageCount = [...pdf.toString("latin1").matchAll(/\/Type\s*\/Page\b/g)]
    .length;
  assert.equal(pageCount, 1, "Print report must fit one A4 page");
  await page.emulateMedia({ media: "screen" });
  console.log(
    "PASS HTML + JSON downloads, standalone offline HTML, print action and single-page A4 PDF",
  );

  await page.getByRole("button", { name: /Data [−+]/ }).click();
  await page.getByTestId("data-file").setInputFiles({
    name: "invalid.csv",
    mimeType: "text/csv",
    buffer: Buffer.from("eventType,matchId\nability,m"),
  });
  await page.getByRole("alert").waitFor();
  assert.match(await page.getByRole("status").innerText(), /not applied/);
  await page
    .getByTestId("data-file")
    .setInputFiles(resolve("public/sample-grid-export.csv"));
  await page
    .getByRole("status")
    .filter({ hasText: /Loaded/ })
    .waitFor();
  assert.match(await page.locator(".data-panel").innerText(), /10 casts/);
  await screenshot("09-data-panel");
  const imported = await readFile(
    resolve("public/sample-grid-export.csv"),
    "utf8",
  );
  await page.getByTestId("data-file").setInputFiles({
    name: "custom.csv",
    mimeType: "text/csv",
    buffer: Buffer.from(
      imported
        .replaceAll("Nova Ridge", "Custom Team")
        .replaceAll("Cloud9", "Custom Team"),
    ),
  });
  await page
    .getByRole("status")
    .filter({ hasText: /Loaded custom/ })
    .waitFor();
  await page.getByRole("button", { name: /Reset filters/ }).click();
  assert.equal(
    await page.getByTestId("filter-team").inputValue(),
    "Custom Team",
  );
  await nav(4);
  assert.equal(await page.getByTestId("filter-team").inputValue(), "Cloud9");
  assert.match(await page.locator("main").innerText(), /No observations/);
  await page
    .getByRole("button", { name: "Reset to sample data", exact: true })
    .click();
  await page.getByRole("button", { name: /Data [−+]/ }).click();
  await nav(1);
  await select("map", "Bind");
  await page.setViewportSize({ width: 390, height: 844 });
  assert(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    "Mobile layout must not overflow",
  );
  await screenshot("10-mobile-heatmap");
  console.log(
    "PASS import errors preserve workspace, CSV load/reset, mobile layout without overflow",
  );
  assert.deepEqual(errors, [], "No console errors or uncaught exceptions");
  console.log("PASS no browser console errors or uncaught exceptions");
  console.log(`Screenshots:\n${paths.join("\n")}`);
  console.log(`Artifacts:\n${htmlPath}\n${jsonPath}\n${pdfPath}`);
} finally {
  if (browser) await browser.close();
  chrome.kill("SIGTERM");
  await rm(profile, {
    recursive: true,
    force: true,
    maxRetries: 5,
    retryDelay: 100,
  });
}

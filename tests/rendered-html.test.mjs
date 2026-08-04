import assert from "node:assert/strict";
import test from "node:test";

const routes = [
  "/",
  "/business/epc-contractor",
  "/business/pre-engineered-metal-building",
  "/business/steel-structure-fabrication",
  "/business/building-envelope",
  "/business/bipv",
  "/products/steel-structure-system",
  "/products/building-enclosure-system-in-architecture",
  "/company-profile",
  "/blog",
  "/contact",
];

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
}

async function render(worker, path) {
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("all public pages expose complete, unique SEO markup", async () => {
  const worker = await loadWorker();
  const titles = new Set();

  for (const path of routes) {
    const response = await render(worker, path);
    assert.equal(response.status, 200, `${path} should render`);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];

    assert.ok(title, `${path} needs a title`);
    assert.ok(!titles.has(title), `${path} needs a unique title`);
    titles.add(title);
    assert.match(html, /<meta name="description" content="[^"].+?"/i, `${path} needs a description`);
    assert.match(html, /<link rel="canonical" href="https?:\/\/[^"]+"/i, `${path} needs a canonical URL`);
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `${path} needs exactly one H1`);
    assert.match(html, /application\/ld\+json/i, `${path} needs structured data`);
    assert.doesNotMatch(html, /Your site is taking shape|Project imagery is currently represented|Sample form/i);
  }
});

test("navigation and multilingual controls are crawlable and accessible", async () => {
  const worker = await loadWorker();
  const html = await (await render(worker, "/")).text();
  assert.match(html, /href="\/business\/epc-contractor"/);
  assert.match(html, /href="\/products\/building-enclosure-system-in-architecture"/);
  assert.match(html, /href="\/company-profile"/);
  assert.match(html, /href="\/blog"/);
  assert.match(html, /href="\/contact"/);
  assert.match(html, /id="site-language"/);
  assert.match(html, /简体中文/);
  assert.match(html, /Español/);
  assert.match(html, /العربية/);
});

test("unknown pages return a real 404", async () => {
  const worker = await loadWorker();
  const response = await render(worker, "/this-page-does-not-exist");
  assert.equal(response.status, 404);
});

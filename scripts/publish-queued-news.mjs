import { cp, mkdir, readdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const locales = ["en", "zh", "es", "fr", "de", "pt", "ja", "ko"];
const dateInShanghai = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
const parse = (source) => {
  const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!match) throw new Error("article.md must begin with JSON front matter enclosed by --- lines.");
  return JSON.parse(match[1]);
};
function validate(article) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug ?? "")) throw new Error("Invalid slug.");
  if (!article.publishAt || Number.isNaN(Date.parse(article.publishAt))) throw new Error("A valid publishAt is required.");
  if (!article.translations?.en) throw new Error("An English translation is required as the fallback locale.");
  for (const locale of Object.keys(article.translations)) {
    if (!locales.includes(locale)) throw new Error(`Unsupported locale: ${locale}.`);
    const t = article.translations?.[locale];
    if (!t?.title || !t?.excerpt || !t?.seoTitle || !t?.seoDescription || !Array.isArray(t.body) || t.body.length < 5) throw new Error(`Incomplete ${locale} translation (title, excerpt, SEO fields and at least 5 sections are required).`);
  }
}
const queueRoot = path.join(root, "news-queue");
for (const dateEntry of await readdir(queueRoot, { withFileTypes: true }).catch(() => [])) {
  if (!dateEntry.isDirectory() || dateEntry.name > dateInShanghai) continue;
  const dated = path.join(queueRoot, dateEntry.name);
  for (const item of await readdir(dated, { withFileTypes: true })) {
    if (!item.isDirectory()) continue;
    const source = path.join(dated, item.name);
    try {
      const article = parse(await readFile(path.join(source, "article.md"), "utf8")); validate(article);
      const destination = path.join(root, "content", "news", article.slug); await mkdir(destination, { recursive: true });
      await writeFile(path.join(destination, "article.json"), `${JSON.stringify(article, null, 2)}\n`);
      if (article.cover) { const target = path.join(root, "public", "images", "news", article.slug); await mkdir(target, { recursive: true }); await cp(path.join(source, article.cover), path.join(target, article.cover)); }
      const archive = path.join(root, "news-published", dateEntry.name, item.name); await mkdir(path.dirname(archive), { recursive: true }); await rename(source, archive);
      console.log(`Published ${article.slug}`);
    } catch (error) {
      const failed = path.join(root, "news-failed", dateEntry.name, item.name); await mkdir(path.dirname(failed), { recursive: true }); await rename(source, failed);
      console.error(`Rejected ${item.name}: ${error.message}`);
    }
  }
}

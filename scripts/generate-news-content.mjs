import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { validateSeo, formatSeoReport } from "../lib/news-seo.mjs";

const NEWS_LOCALES = ["en", "zh", "es", "fr", "de", "pt", "ja", "ko"];

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) args[argv[i].slice(2)] = argv[++i] || "";
  }
  return args;
}

function buildArticle(args) {
  const translations = {};

  for (const locale of NEWS_LOCALES) {
    const title = args[`${locale}-title`];
    const excerpt = args[`${locale}-excerpt`];
    const seoTitle = args[`${locale}-seotitle`];
    const seoDesc = args[`${locale}-seodesc`];
    const bodyJson = args[`${locale}-body`];
    const faqJson = args[`${locale}-faq`];

    if (!title) continue;

    let body = [];
    if (bodyJson) {
      try { body = JSON.parse(bodyJson); } catch { body = []; }
    }

    let faq;
    if (faqJson) {
      try { faq = JSON.parse(faqJson); } catch { faq = undefined; }
    }

    translations[locale] = { title, excerpt: excerpt || "", seoTitle: seoTitle || "", seoDescription: seoDesc || "", body, faq };
  }

  const tags = args.tags ? args.tags.split(",").map((t) => t.trim()).filter(Boolean) : [];

  return {
    slug: args.slug,
    publishAt: `${args.date}T09:00:00+08:00`,
    category: args.category || "EPC Contracting",
    author: args.author || "Megasteel Editorial Team",
    tags,
    translations,
  };
}

const args = parseArgs(process.argv.slice(2));

if (!args.topic || !args.date || !args.slug) {
  console.error("Missing required args: --topic, --date (YYYY-MM-DD), --slug");
  console.error("Usage: node scripts/generate-news-content.mjs [options]");
  console.error("Required:");
  console.error("  --topic       Article topic/subject");
  console.error("  --date        Publish date (YYYY-MM-DD)");
  console.error("  --slug        URL slug (lowercase-hyphenated)");
  console.error("  --en-title    English title (required)");
  console.error("  --en-excerpt  English excerpt (50-160 chars)");
  console.error("  --en-seotitle English SEO title (30-60 chars)");
  console.error("  --en-seodesc  English SEO description (120-160 chars)");
  console.error("  --en-body     English body JSON: [{\"heading\":\"...\",\"paragraph\":\"...\"}] (min 5 sections)");
  console.error("  --en-faq      English FAQ JSON: [{\"question\":\"...\",\"answer\":\"...\"}] (optional)");
  console.error("Optional:");
  console.error("  --category    Category: EPC, Steel Structure, PEMB, Building Envelope, BIPV");
  console.error("  --tags        Comma-separated SEO keywords");
  console.error("  --author      Author name");
  console.error("  --{locale}-title/--{locale}-excerpt/--{locale}-seotitle/--{locale}-seodesc/--{locale}-body/--{locale}-faq");
  console.error("    Locale options: en, zh, es, fr, de, pt, ja, ko");
  process.exit(1);
}

const article = buildArticle(args);

if (!article.translations.en?.title) {
  console.error("ERROR: English title (--en-title) is required as the fallback locale.");
  process.exit(1);
}

const seoResult = validateSeo(article);
const report = formatSeoReport(seoResult);

if (!seoResult.valid) {
  console.error("SEO validation FAILED. Content does not meet requirements:\n");
  console.error(report);
  console.error("\nTo fix: adjust the content and re-run. Key rules:");
  console.error("  - title: 10-60 chars");
  console.error("  - excerpt: 50-160 chars");
  console.error("  - seoTitle: 30-60 chars");
  console.error("  - seoDescription: 120-160 chars");
  console.error("  - body: at least 5 sections, each paragraph 80-400 chars");
  process.exit(1);
}

if (seoResult.warnings.length > 0) {
  console.warn("SEO warnings (not blocking but recommended to address):\n");
  console.warn(report);
}

const dateDir = args.date;
const articleDir = path.join(process.cwd(), "news-queue", dateDir, args.slug);
await mkdir(articleDir, { recursive: true });
await writeFile(path.join(articleDir, "article.md"), `${JSON.stringify(article, null, 2)}\n`);

console.log("Article generated successfully.");
console.log(`   Path: news-queue/${dateDir}/${args.slug}/article.md`);
console.log(`   SEO Score: ${seoResult.score}/100`);
console.log(`   Slug: ${args.slug}`);
console.log(`   Publish Date: ${dateDir}`);
console.log(`   Locales: ${Object.keys(article.translations).join(", ")}`);

if (seoResult.warnings.length > 0) {
  console.log(`\n${seoResult.warnings.length} warning(s) - review and improve if possible:`);
  for (const w of seoResult.warnings) {
    console.log(`   - [${w.field}] ${w.message}`);
  }
}

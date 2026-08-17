import { readFile } from "node:fs/promises";
import path from "node:path";
import { validateSeo, formatSeoReport } from "../lib/news-seo.mjs";

async function run() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.log("Codex News Pipeline - End-to-end publishing workflow");
    console.log("\nUsage: npm run news:seo-check <path-to-article.md>");
    console.log("\nWorkflow:");
    console.log("  1. Read lib/news.ts for NEWS structure");
    console.log("  2. Generate article.md with content following the template");
    console.log("  3. Write to news-queue/YYYY-MM-DD/slug/article.md");
    console.log("  4. Run: npm run news:seo-check <path>");
    console.log("  5. If errors: fix content, retry step 4");
    console.log("  6. If valid: npm run news:publish");
    console.log("  7. Confirm article appears on site");
    process.exit(0);
  }

  const fullPath = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
  let content;
  try {
    content = await readFile(fullPath, "utf8");
  } catch {
    console.error("ERROR: Cannot read file at \"" + filePath + "\".");
    process.exit(1);
  }

  const match = content.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!match) {
    console.error("ERROR: article.md must begin with JSON front matter enclosed by --- lines.");
    process.exit(1);
  }

  let article;
  try {
    article = JSON.parse(match[1]);
  } catch (e) {
    console.error("ERROR: Invalid JSON in front matter: " + e.message);
    process.exit(1);
  }

  const result = validateSeo(article);
  console.log(formatSeoReport(result));

  if (!result.valid) {
    console.error("\nSEO VALIDATION FAILED - Codex must fix the following errors and re-run:");
    for (const e of result.errors) {
      console.error("  - [" + e.field + "] " + e.message);
      if (e.suggestion) console.error("    Fix: " + e.suggestion);
    }
    if (result.warnings.length > 0) {
      console.error("\nAlso consider these warnings:");
      for (const w of result.warnings) {
        console.error("  - [" + w.field + "] " + w.message);
      }
    }
    process.exit(1);
  }

  if (result.warnings.length > 0) {
    console.warn("\nAll errors passed, but these warnings should be reviewed:");
    for (const w of result.warnings) {
      console.warn("  - [" + w.field + "] " + w.message);
    }
  }

  console.log("\nSEO VALIDATION PASSED");
  console.log("   Score: " + result.score + "/100");
  console.log("   Next step: run 'npm run news:publish' to publish this article.");
  process.exit(0);
}

run();

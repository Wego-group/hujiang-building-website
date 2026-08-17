const SEO_RULES = {
  title: { min: 10, max: 60, label: "title" },
  excerpt: { min: 50, max: 160, label: "excerpt" },
  seoTitle: { min: 30, max: 60, label: "seoTitle" },
  seoDescription: { min: 120, max: 160, label: "seoDescription" },
  heading: { min: 5, max: 80, label: "heading" },
  paragraph: { min: 80, max: 400, label: "paragraph" },
  faqQuestion: { min: 10, max: 120, label: "faq.question" },
  faqAnswer: { min: 20, max: 300, label: "faq.answer" },
};

function checkLength(locale, field, value, rules) {
  const issues = [];
  const name = `${locale}.${field}`;
  if (!value || value.trim().length === 0) {
    issues.push({ field: name, severity: "error", message: `Missing or empty "${rules.label}".` });
    return issues;
  }
  const len = value.trim().length;
  if (len < rules.min) {
    issues.push({
      field: name,
      severity: "error",
      message: `"${rules.label}" too short (${len} chars, min ${rules.min}).`,
      suggestion: `Write at least ${rules.min} characters.`,
    });
  }
  if (len > rules.max) {
    issues.push({
      field: name,
      severity: "error",
      message: `"${rules.label}" too long (${len} chars, max ${rules.max}).`,
      suggestion: `Trim to ${rules.max} characters or fewer.`,
    });
  }
  return issues;
}

export function validateSeo(article) {
  const errors = [];
  const warnings = [];

  if (!article || typeof article !== "object") {
    return { valid: false, errors: [{ field: "root", severity: "error", message: "Invalid article object." }], warnings, score: 0 };
  }

  if (!article.slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug)) {
    errors.push({ field: "slug", severity: "error", message: `slug "${article.slug}" must be lowercase-hyphenated.` });
  }

  const tags = article.tags ?? [];
  const requiredKeywords = tags.slice(0, 3);

  for (const [locale, translation] of Object.entries(article.translations ?? {})) {
    if (!translation || typeof translation !== "object") {
      errors.push({ field: locale, severity: "error", message: `Translation "${locale}" is missing or invalid.` });
      continue;
    }
    const prefix = locale;

    errors.push(...checkLength(prefix, "title", translation.title, SEO_RULES.title));
    errors.push(...checkLength(prefix, "excerpt", translation.excerpt, SEO_RULES.excerpt));
    errors.push(...checkLength(prefix, "seoTitle", translation.seoTitle, SEO_RULES.seoTitle));
    errors.push(...checkLength(prefix, "seoDescription", translation.seoDescription, SEO_RULES.seoDescription));

    if (article.slug) {
      const slugLower = article.slug.replace(/-/g, " ");
      const titleMatch = slugLower.split(" ").some((w) => (translation.title ?? "").toLowerCase().includes(w));
      if (!titleMatch) {
        warnings.push({
          field: `${prefix}.title`,
          severity: "warning",
          message: "Title does not contain any keyword from the slug. This may hurt SEO relevance.",
          suggestion: `Consider including one of "${slugLower}" in the title.`,
        });
      }
    }

    if (translation.seoTitle && translation.title) {
      const titleWords = translation.title.toLowerCase().split(/\s+/);
      const seoWords = translation.seoTitle.toLowerCase().split(/\s+/);
      const overlap = titleWords.filter((w) => seoWords.includes(w) && w.length > 3).length;
      if (overlap < Math.min(2, Math.floor(titleWords.length / 3))) {
        warnings.push({
          field: `${prefix}.seoTitle`,
          severity: "warning",
          message: "seoTitle shares few keywords with title. They should be closely related.",
          suggestion: "Make seoTitle a variation of the title, not a completely different phrase.",
        });
      }
    }

    if (translation.seoDescription && requiredKeywords.length > 0) {
      const descText = translation.seoDescription.toLowerCase();
      const missing = requiredKeywords.filter((kw) => !descText.includes(kw.toLowerCase()));
      if (missing.length > 0) {
        warnings.push({
          field: `${prefix}.seoDescription`,
          severity: "warning",
          message: `seoDescription missing some article tags: ${missing.join(", ")}`,
          suggestion: `Incorporate "${missing.join(", ")}" naturally into the description.`,
        });
      }
    }

    const body = translation.body;
    if (!Array.isArray(body) || body.length === 0) {
      errors.push({ field: `${prefix}.body`, severity: "error", message: "body must be a non-empty array of sections." });
    } else if (body.length < 5) {
      errors.push({
        field: `${prefix}.body`,
        severity: "error",
        message: `body has only ${body.length} section(s), minimum 5 required.`,
        suggestion: "Add more sections covering different aspects of the topic.",
      });
    }

    if (Array.isArray(body)) {
      for (let i = 0; i < body.length; i++) {
        const s = body[i];
        errors.push(...checkLength(prefix, `body[${i}].heading`, s?.heading, SEO_RULES.heading));
        errors.push(...checkLength(prefix, `body[${i}].paragraph`, s?.paragraph, SEO_RULES.paragraph));
      }
    }

    if (translation.faq && !Array.isArray(translation.faq)) {
      errors.push({ field: `${prefix}.faq`, severity: "error", message: "faq must be an array." });
    }
    if (Array.isArray(translation.faq)) {
      for (let i = 0; i < translation.faq.length; i++) {
        errors.push(...checkLength(prefix, `faq[${i}].question`, translation.faq[i]?.question, SEO_RULES.faqQuestion));
        errors.push(...checkLength(prefix, `faq[${i}].answer`, translation.faq[i]?.answer, SEO_RULES.faqAnswer));
      }
    }
  }

  const score = Math.max(0, Math.round(100 - (errors.length * 15 + warnings.length * 5)));
  return { valid: errors.length === 0, errors, warnings, score };
}

export function formatSeoReport(result) {
  const lines = [];
  lines.push("=== SEO Validation Report ===");
  lines.push(`Score: ${result.score}/100`);
  lines.push(`Valid: ${result.valid ? "YES" : "NO"}`);

  if (result.errors.length > 0) {
    lines.push("\nERRORS (must fix):");
    for (const e of result.errors) {
      lines.push(`  - [${e.field}] ${e.message}`);
      if (e.suggestion) lines.push(`    -> ${e.suggestion}`);
    }
  }

  if (result.warnings.length > 0) {
    lines.push("\nWARNINGS (recommended):");
    for (const w of result.warnings) {
      lines.push(`  - [${w.field}] ${w.message}`);
      if (w.suggestion) lines.push(`    -> ${w.suggestion}`);
    }
  }

  if (result.errors.length === 0 && result.warnings.length === 0) {
    lines.push("\nAll SEO checks passed.");
  }

  lines.push("=============================");
  return lines.join("\n");
}

import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

export const NEWS_LOCALES = ["en", "zh", "es", "fr", "de", "pt", "ja", "ko"] as const;
export type NewsLocale = (typeof NEWS_LOCALES)[number];

export type NewsSection = { heading: string; paragraph: string };
export type NewsFaqItem = { question: string; answer: string };
export type NewsTranslation = {
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  body: NewsSection[];
  faq?: NewsFaqItem[];
};
export type PublishedNewsArticle = {
  slug: string;
  publishAt: string;
  updatedAt?: string;
  category: string;
  author: string;
  cover?: string;
  tags?: string[];
  featured?: boolean;
  readingTimeMinutes?: number;
  canonicalPath?: string;
  translations: Partial<Record<NewsLocale, NewsTranslation>>;
};

const NEWS_ROOT = path.join(process.cwd(), "content", "news");
const safeSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isPublished(article: PublishedNewsArticle) {
  return Number.isFinite(Date.parse(article.publishAt)) && Date.parse(article.publishAt) <= Date.now();
}

/**
 * Shared validation for the editorial queue and future CMS integrations.
 * Keeping this here means the listing page, article page and publisher use
 * the same content contract instead of silently accepting malformed posts.
 */
export function validateNewsArticle(article: unknown): article is PublishedNewsArticle {
  if (!article || typeof article !== "object") return false;
  const value = article as Partial<PublishedNewsArticle>;
  if (!safeSlug.test(value.slug ?? "")) return false;
  if (!value.category || !value.author || !value.publishAt || Number.isNaN(Date.parse(value.publishAt))) return false;
  if (!value.translations || typeof value.translations !== "object") return false;
  return Object.values(value.translations).some((translation) => {
    if (!translation || typeof translation !== "object") return false;
    const item = translation as Partial<NewsTranslation>;
    return Boolean(item.title && item.excerpt && item.seoTitle && item.seoDescription && Array.isArray(item.body));
  });
}

async function readArticle(slug: string): Promise<PublishedNewsArticle | null> {
  if (!safeSlug.test(slug)) return null;
  try {
    const raw = await readFile(path.join(NEWS_ROOT, slug, "article.json"), "utf8");
    const article = JSON.parse(raw) as PublishedNewsArticle;
    return validateNewsArticle(article) && article.slug === slug && isPublished(article) ? article : null;
  } catch {
    return null;
  }
}

export async function getPublishedNews(): Promise<PublishedNewsArticle[]> {
  try {
    const entries = await readdir(NEWS_ROOT, { withFileTypes: true });
    const articles = await Promise.all(entries.filter((entry) => entry.isDirectory()).map((entry) => readArticle(entry.name)));
    return articles.filter((article): article is PublishedNewsArticle => article !== null)
      .sort((a, b) => Date.parse(b.publishAt) - Date.parse(a.publishAt));
  } catch {
    return [];
  }
}

export async function getPublishedNewsArticle(slug: string) {
  return readArticle(slug);
}

export function getNewsTranslation(article: PublishedNewsArticle, locale: NewsLocale = "en") {
  return article.translations[locale] ?? article.translations.en ?? Object.values(article.translations)[0];
}

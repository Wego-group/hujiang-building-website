import type { MetadataRoute } from "next";
import { routeSeo, SITE_URL } from "./seo";
import { getPublishedNews } from "../lib/news";
import { localePath, locales } from "../lib/i18n";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Only update this date when the corresponding static page content changes.
  // A build timestamp makes every URL look freshly edited to crawlers.
  const siteLastModified = new Date("2026-08-12T00:00:00+08:00");
  const publicPaths = Object.keys(routeSeo).filter((path) => path !== "/blog");
  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) => publicPaths.map((path) => ({
    url: `${SITE_URL}${localePath(locale, path) === "/" ? "" : localePath(locale, path)}`,
    lastModified: siteLastModified,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.startsWith("/business/") || path.startsWith("/products/") ? 0.9 : 0.7,
  })));
  const articles = await getPublishedNews();
  return [...staticEntries, ...locales.flatMap((locale) => articles.map((article) => ({
    url: `${SITE_URL}${localePath(locale, `/news/${article.slug}`)}`,
    lastModified: new Date(article.updatedAt ?? article.publishAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })))];
}

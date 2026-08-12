import type { MetadataRoute } from "next";
import { routeSeo, SITE_URL } from "./seo";
import { getPublishedNews } from "../lib/news";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = [...Object.keys(routeSeo), "/zh", "/es", "/ru"].map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/blog" ? "weekly" : path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.startsWith("/business/") || path.startsWith("/products/") ? 0.9 : 0.7,
  }));
  const articles = await getPublishedNews();
  return [...staticEntries, ...articles.map((article) => ({
    url: `${SITE_URL}/news/${article.slug}`,
    lastModified: new Date(article.updatedAt ?? article.publishAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))];
}

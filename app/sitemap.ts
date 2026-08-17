import type { MetadataRoute } from "next";
import { routeSeo, SITE_URL } from "./seo";
import { NEWS_LOCALES, getPublishedNews } from "../lib/news";
import { isLocale, localePath, locales, localeMeta } from "../lib/i18n";

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
  const makeAlternates = (path: string) => Object.fromEntries(locales.map((locale) => [
    localeMeta[locale].htmlLang,
    `${SITE_URL}${localePath(locale, path) === "/" ? "" : localePath(locale, path)}`,
  ]));

  const localizedStaticEntries: MetadataRoute.Sitemap = staticEntries.map((entry) => {
    const relativePath = entry.url.replace(SITE_URL + "/", "").replace(SITE_URL, "");
    const localeName = relativePath.split("/")[0];
    const path = isLocale(localeName) && localeName !== "en"
      ? "/" + relativePath.slice(localeName.length)
      : "/" + relativePath;
    return { ...entry, alternates: { languages: makeAlternates(path || "/"), "x-default": SITE_URL + (path === "/" ? "" : path) } };
  });

  const newsEntries: MetadataRoute.Sitemap = articles.flatMap((article) =>
    NEWS_LOCALES.flatMap((locale) => {
      if (!article.translations[locale]) return [];
      const path = `/news/${article.slug}`;
      return [{
        url: `${SITE_URL}${localePath(locale as (typeof locales)[number], path)}`,
        lastModified: new Date(article.updatedAt ?? article.publishAt),
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: { languages: makeAlternates(path), "x-default": SITE_URL + path },
      }];
    }),
  );
  return [...localizedStaticEntries, ...newsEntries];
}
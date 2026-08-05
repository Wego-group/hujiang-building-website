import type { MetadataRoute } from "next";
import { routeSeo, SITE_URL } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return Object.keys(routeSeo).filter((path) => path !== "/blog").map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/blog" ? "weekly" : path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.startsWith("/business/") || path.startsWith("/products/") ? 0.9 : 0.7,
  }));
}

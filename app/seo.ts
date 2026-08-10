import type { Metadata } from "next";

export const SITE_NAME = "Megasteel";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.chinamegasteel.com").replace(/\/$/, "");
export const DEFAULT_OG_IMAGE = "/images/hero.png";

export const homepageLanguageUrls = {
  en: SITE_URL,
  "zh-CN": `${SITE_URL}/zh`,
  es: `${SITE_URL}/es`,
  ru: `${SITE_URL}/ru`,
  "x-default": SITE_URL,
};

type SeoEntry = {
  title: string;
  description: string;
  image?: string;
};

export const routeSeo: Record<string, SeoEntry> = {
  "/": {
    title: "Megasteel | Industrial Steel Building & EPC Solutions",
    description: "Megasteel delivers EPC contracting, pre-engineered metal buildings, structural steel fabrication, curtain walls and BIPV solutions for industrial and logistics facilities.",
    image: "/images/hero.png",
  },
  "/business/epc-contractor": {
    title: "Industrial EPC Contractor for Steel Buildings | Megasteel",
    description: "Integrated engineering, procurement and construction services for industrial steel buildings, logistics parks, factories and modern warehouses.",
    image: "/images/epc-hero-project.png",
  },
  "/business/pre-engineered-metal-building": {
    title: "Pre-Engineered Metal Building Manufacturer | Megasteel",
    description: "Custom PEMB systems for warehouses, factories and logistics facilities, supported by structural design, steel fabrication, delivery and project management.",
    image: "/images/pemb-hero-factory.png",
  },
  "/business/steel-structure-fabrication": {
    title: "Structural Steel Fabrication Company | Megasteel",
    description: "Digitally coordinated structural steel cutting, welding, surface treatment, inspection and modular packaging for industrial building projects.",
    image: "/images/fabrication-hero-factory.png",
  },
  "/business/building-envelope": {
    title: "Curtain Wall & Building Envelope Systems | Megasteel",
    description: "Integrated curtain wall and building envelope design, engineering, sample approval, fabrication and site installation for durable, efficient facades.",
    image: "/images/curtain-wall-hero.png",
  },
  "/business/bipv": {
    title: "BIPV Roofing & Building Integrated Photovoltaics | Megasteel",
    description: "BIPV roof, facade and curtain wall solutions coordinated with steel structures, waterproofing, electrical systems and industrial construction.",
    image: "/images/bipv-hero-factory.png",
  },
  "/products/steel-structure-system": {
    title: "Steel Structure Systems for Industrial Buildings | Megasteel",
    description: "Lightweight portal frames, large-span steel structures, heavy-crane systems and multi-storey steel frames engineered for industrial operations.",
    image: "/images/steel-system-hero.png",
  },
  "/products/building-enclosure-system-in-architecture": {
    title: "Building Enclosure, Roof & Wall Systems | Megasteel",
    description: "Explore metal roof, wall cladding, TPO, standing seam and insulated enclosure systems for durable, weather-resistant industrial buildings.",
    image: "/images/enclosure-use-metal-cladding.png",
  },
  "/company-profile": {
    title: "About Megasteel | Company Profile & Qualifications",
    description: "Learn about Megasteel's integrated engineering, manufacturing and construction capability, qualifications, strategic customers and global market coverage.",
    image: "/images/company-profile-hero.png",
  },
  "/blog": {
    title: "Megasteel News | Industrial Construction Insights",
    description: "Read Megasteel company news, project updates and technical insights about industrial steel buildings, EPC delivery, envelopes and BIPV.",
    image: "/images/news-hero.png",
  },
  "/contact": {
    title: "Contact Megasteel | Request a Building Project Quote",
    description: "Contact Megasteel to discuss an industrial building, EPC, PEMB, steel fabrication, curtain wall or BIPV project and request a tailored quotation.",
    image: "/images/contact-page-hero.png",
  },
};

export function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  return `/${pathname.replace(/^\/+|\/+$/g, "")}`;
}

export function metadataFor(pathname: string): Metadata {
  const path = normalizePath(pathname);
  const seo = routeSeo[path] ?? {
    title: "Megasteel | Integrated Industrial Building Solutions",
    description: "Integrated engineering, manufacturing and construction solutions for industrial steel buildings.",
    image: DEFAULT_OG_IMAGE,
  };
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  const image = `${SITE_URL}${seo.image ?? DEFAULT_OG_IMAGE}`;

  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: {
      canonical,
      languages: path === "/" ? homepageLanguageUrls : { en: canonical, "x-default": canonical },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: seo.title,
      description: seo.description,
      url: canonical,
      images: [{ url: image, width: 1920, height: 1080, alt: seo.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [image],
    },
  };
}

export function breadcrumbSchema(pathname: string, pageTitle: string) {
  const path = normalizePath(pathname);
  const parts = path.split("/").filter(Boolean);
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }];
  parts.forEach((part, index) => {
    const itemPath = `/${parts.slice(0, index + 1).join("/")}`;
    items.push({
      "@type": "ListItem",
      position: index + 2,
      name: index === parts.length - 1 ? pageTitle : part.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
      item: `${SITE_URL}${itemPath}`,
    });
  });
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
}

import type { Metadata } from "next";
import { ContactRail } from "../components/contact-rail";
import { GlobalHeader } from "../components/global-header";
import { ScrollAnimations } from "../components/scroll-animations";
import { SiteFooter } from "../components/site-footer";
import { StructuredData } from "../components/structured-data";
import { breadcrumbSchema, metadataFor, SITE_URL } from "../seo";

export const metadata: Metadata = metadataFor("/sitemap.html");

const groups = [
  {
    title: "Business Solutions",
    links: [
      ["EPC Contractor", "/business/epc-contractor"],
      ["Pre-Engineered Metal Building", "/business/pre-engineered-metal-building"],
      ["Steel Structure Fabrication", "/business/steel-structure-fabrication"],
      ["Building Envelope", "/business/building-envelope"],
      ["Mega-BIPV", "/business/bipv"],
    ],
  },
  {
    title: "Products & Systems",
    links: [
      ["Steel Structure System", "/products/steel-structure-system"],
      ["Building Enclosure System", "/products/building-enclosure-system-in-architecture"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Company Profile", "/company-profile"],
      ["News", "/blog"],
      ["Contact Us", "/contact"],
    ],
  },
  {
    title: "Information",
    links: [
      ["Sitemap", "/sitemap.html"],
      ["Privacy Policy", "/privacy-policy.html"],
    ],
  },
] as const;

export default function SitemapPage() {
  return (
    <main className="legal-page">
      <StructuredData data={[
        breadcrumbSchema("/sitemap.html", "Sitemap"),
        { "@context": "https://schema.org", "@type": "WebPage", "@id": `${SITE_URL}/sitemap.html#webpage`, name: "Sitemap", url: `${SITE_URL}/sitemap.html` },
      ]} />
      <GlobalHeader active="about" />
      <ScrollAnimations />
      <header className="legal-hero">
        <div className="wide-container reveal-on-scroll">
          <span className="eyebrow">MEGASTEEL DIRECTORY</span>
          <h1>Sitemap</h1>
          <p>Browse Megasteel's industrial construction services, steel building systems, company information and contact resources.</p>
        </div>
      </header>
      <section className="legal-content">
        <div className="wide-container sitemap-sections">
          {groups.map((group) => (
            <section className="sitemap-card reveal-on-scroll" key={group.title}>
              <h2>{group.title}</h2>
              <nav aria-label={group.title}>
                {group.links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
              </nav>
            </section>
          ))}
        </div>
      </section>
      <SiteFooter />
      <ContactRail />
    </main>
  );
}

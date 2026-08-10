import type { Metadata } from "next";
import { EpcContactSection } from "../components/business-detail-page";
import { GlobalHeader, MegaSteelWordmark } from "../components/global-header";
import { ScrollAnimations } from "../components/scroll-animations";
import { metadataFor, breadcrumbSchema, SITE_URL } from "../seo";
import { StructuredData } from "../components/structured-data";

type NewsItem = {
  number: string;
  category: string;
  title: string;
  summary: string;
  image?: string;
  href: string;
  publishedAt?: string;
  modifiedAt?: string;
  author?: string;
};

const newsItems: NewsItem[] = [];
const blogBaseMetadata = metadataFor("/blog");

export const metadata: Metadata = {
  ...blogBaseMetadata,
  robots: {
    index: true,
    follow: true,
  },
};

const featuredStory = newsItems[0];
const archiveItems = newsItems.slice(1);

const newsArticleSchemas = newsItems.map((item) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${SITE_URL}${item.href}#article`,
  url: `${SITE_URL}${item.href}`,
  headline: item.title,
  description: item.summary,
  articleSection: item.category,
  ...(item.image ? { image: `${SITE_URL}${item.image}` } : {}),
  ...(item.publishedAt
    ? { datePublished: item.publishedAt, dateModified: item.modifiedAt ?? item.publishedAt }
    : {}),
  author: item.author
    ? { "@type": "Person", name: item.author }
    : { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  mainEntityOfPage: { "@id": `${SITE_URL}${item.href}#webpage` },
}));

export default function BlogPage() {
  return (
    <main className="news-page-shell">
      <StructuredData data={[
        breadcrumbSchema("/blog", "NEWS"),
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE_URL}/blog#webpage`,
          url: `${SITE_URL}/blog`,
          name: "Megasteel News",
          description: "Megasteel company news, project updates and industrial construction insights.",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#organization` },
        },
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${SITE_URL}/blog#collection`,
          name: "Megasteel News",
          url: `${SITE_URL}/blog`,
          description: "Megasteel company news, project updates and industrial construction insights.",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#organization` },
        },
        ...newsArticleSchemas,
      ]} />
      <GlobalHeader active="blog" />
      <ScrollAnimations />

      <section className="news-page-hero">
        <img src="/images/news-hero.png" alt="Megasteel news editorial workspace" />
        <div className="news-page-hero-shade" />
        <div className="wide-container news-page-hero-copy">
          <h1>NEWS</h1>
        </div>
      </section>

      {(featuredStory || archiveItems.length > 0) && (
        <section className="news-archive patterned">
          <div className="wide-container section-padding">
            {featuredStory && (
              <>
                <header className="news-archive-heading">
                  <span aria-hidden="true">01</span>
                  <div>
                    <small>NEWS CENTRE</small>
                    <h2>Megasteel News</h2>
                  </div>
                </header>

                <div className="news-feature-shell">
                  <div className="news-feature-image">
                    {featuredStory.image && <img src={featuredStory.image} alt={featuredStory.title} />}
                  </div>
                  <div className="news-feature-copy">
                    <small>{featuredStory.category}</small>
                    <h3>{featuredStory.title}</h3>
                    <p>{featuredStory.summary}</p>
                    <a href={featuredStory.href}>Read More</a>
                  </div>
                </div>
              </>
            )}

            {archiveItems.length > 0 && (
              <div className="news-card-grid">
                {archiveItems.map((item) => (
                  <article className="news-card-shell" key={item.number + item.title}>
                    <div className="news-card-thumb">
                      {item.image && <img src={item.image} alt={item.title} />}
                    </div>
                    <div className="news-card-body">
                      <b>{item.number}</b>
                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>
                      <a href={item.href}>Read More</a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <EpcContactSection />

      <footer>
        <div className="wide-container footer-grid">
          <div>
            <MegaSteelWordmark />
            <p>Integrated industrial construction solutions.</p>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="tel:+8619553105520">0086-19553105520 (WHATSAPP/WECHAT)</a>
            <a href="mailto:megasteelstructure@126.com">megasteelstructure@126.com</a>
            <address>No.1068, Chongde 7th Avenue, Economic and Technological Development Zone, Dezhou City, Shandong Province</address>
          </div>
          <div>
            <h3>Business</h3>
            <a href="/business/epc-contractor">EPC Contractor</a>
            <a href="/business/pre-engineered-metal-building">Metal Buildings</a>
            <a href="/business/steel-structure-fabrication">Steel Fabrication</a>
            <a href="/business/bipv">Mega-BIPV</a>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="/products/steel-structure-system">Products</a>
            <a href="/company-profile">About Us</a>
            <a href="/blog">NEWS</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="wide-container copyright">
          <span>© 2026 MEGASTEEL. All rights reserved.</span>
          <span>www.chinamegasteel.com</span>
        </div>
      </footer>

      <a className="email-us" href="mailto:megasteelstructure@126.com">
        Email Us
      </a>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { EpcContactSection } from "../components/business-detail-page";
import { GlobalHeader, MegaSteelWordmark } from "../components/global-header";
import { ScrollAnimations } from "../components/scroll-animations";
import { StructuredData } from "../components/structured-data";
import { FooterLegalLinks } from "../components/footer-legal-links";
import { breadcrumbSchema, metadataFor, SITE_URL } from "../seo";
import { getPublishedNews, getNewsTranslation } from "../../lib/news";

export const metadata: Metadata = metadataFor("/news");

export default async function NewsPage() {
  const articles = await getPublishedNews();
  return <main className="news-page-shell">
    <StructuredData data={[breadcrumbSchema("/news", "NEWS"), { "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${SITE_URL}/news#collection`, url: `${SITE_URL}/news`, name: "Megasteel News", description: "Megasteel company news, project updates and industrial construction insights." }]} />
    <GlobalHeader active="blog" /><ScrollAnimations />
    <section className="news-page-hero"><Image src="/images/news-hero.png" alt="Megasteel news editorial workspace" fill priority sizes="100vw" /><div className="news-page-hero-shade" /><div className="wide-container news-page-hero-copy"><h1>NEWS</h1></div></section>
    <section className="news-archive patterned"><div className="wide-container section-padding">
      <header className="news-archive-heading"><span aria-hidden="true">01</span><div><small>NEWS CENTRE</small><h2>Megasteel News</h2></div></header>
      {articles.length ? <div className="news-card-grid">{articles.map((article, index) => { const t = getNewsTranslation(article); return <article className="news-card-shell" key={article.slug}><div className="news-card-thumb">{article.cover && <img src={article.cover} alt={t?.title ?? article.slug} />}</div><div className="news-card-body"><b>{String(index + 1).padStart(2, "0")}</b><small>{article.category} · {new Date(article.publishAt).toLocaleDateString("en-US")}</small><h3>{t?.title}</h3><p>{t?.excerpt}</p><a href={`/news/${article.slug}`}>Read More</a></div></article>})}</div> : <div className="news-empty-state"><h3>News &amp; Insights</h3><p>New company news, project updates and technical insights will appear here when published.</p></div>}
    </div></section>
    <EpcContactSection />
    <footer><div className="wide-container footer-grid"><div><MegaSteelWordmark /><p>Integrated industrial construction solutions.</p><FooterLegalLinks /></div><div><h3>Contact</h3><a href="tel:+8619553105520">0086-19553105520 (WHATSAPP/WECHAT)</a><a href="mailto:sales@chinamegasteel.com">sales@chinamegasteel.com</a><address>No.1068, Chongde 7th Avenue, Economic and Technological Development Zone, Dezhou City, Shandong Province</address></div><div><h3>Business</h3><a href="/business/epc-contractor">EPC Contractor</a><a href="/business/pre-engineered-metal-building">Metal Buildings</a><a href="/business/steel-structure-fabrication">Steel Fabrication</a><a href="/business/bipv">Mega-BIPV</a></div><div><h3>Quick Links</h3><a href="/products/steel-structure-system">Products</a><a href="/company-profile">About Us</a><a href="/news">NEWS</a><a href="/contact">Contact</a></div></div></footer>
  </main>;
}

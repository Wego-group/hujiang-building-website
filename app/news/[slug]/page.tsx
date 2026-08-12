import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EpcContactSection } from "../../components/business-detail-page";
import { GlobalHeader } from "../../components/global-header";
import { ScrollAnimations } from "../../components/scroll-animations";
import { StructuredData } from "../../components/structured-data";
import { FooterLegalLinks } from "../../components/footer-legal-links";
import { breadcrumbSchema, metadataFor, SITE_URL } from "../../seo";
import { getNewsTranslation, getPublishedNews, getPublishedNewsArticle } from "../../../lib/news";

export async function generateStaticParams() {
  const articles = await getPublishedNews();
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublishedNewsArticle(slug);
  const translation = article && getNewsTranslation(article);
  if (!article || !translation) return metadataFor("/news");
  const canonical = `/news/${article.slug}`;
  return {
    title: translation.seoTitle,
    description: translation.seoDescription,
    alternates: { canonical },
    openGraph: { type: "article", url: `${SITE_URL}${canonical}`, title: translation.seoTitle, description: translation.seoDescription, images: article.cover ? [article.cover] : ["/images/news-hero.png"], publishedTime: article.publishAt, modifiedTime: article.updatedAt ?? article.publishAt, authors: [article.author] },
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getPublishedNewsArticle(slug);
  const translation = article && getNewsTranslation(article);
  if (!article || !translation) notFound();
  const canonical = `/news/${article.slug}`;
  const articleSchema = { "@context": "https://schema.org", "@type": "NewsArticle", "@id": `${SITE_URL}${canonical}#article`, headline: translation.title, description: translation.seoDescription, image: article.cover ? [`${SITE_URL}${article.cover}`] : [`${SITE_URL}/images/news-hero.png`], datePublished: article.publishAt, dateModified: article.updatedAt ?? article.publishAt, author: { "@type": "Person", name: article.author }, publisher: { "@type": "Organization", name: "Megasteel", url: `${SITE_URL}/#organization` }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${canonical}` } };
  return <main className="news-detail-page">
    <StructuredData data={[breadcrumbSchema(canonical, translation.title), articleSchema]} />
    <GlobalHeader active="blog" /><ScrollAnimations />
    <section className="news-detail-hero"><div className="wide-container"><small>NEWS &amp; INSIGHTS</small><h1>{translation.title}</h1><p>{translation.excerpt}</p><div className="news-detail-meta">{article.category} · {new Date(article.publishAt).toLocaleDateString("en-US")} · {article.readingTimeMinutes ?? Math.max(3, Math.ceil(translation.body.length * 1.5))} min read</div></div></section>
    <article className="news-detail-content wide-container section-padding">
      {article.cover && <img className="news-detail-cover" src={article.cover} alt={translation.title} />}
      <div className="news-detail-body">{translation.body.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.paragraph}</p></section>)}</div>
      {translation.faq?.length ? <section className="news-detail-faq"><h2>Frequently Asked Questions</h2>{translation.faq.map((item) => <div className="news-detail-faq-item" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</section> : null}
    </article>
    <EpcContactSection />
    <footer className="site-footer"><div className="wide-container"><FooterLegalLinks /></div></footer>
  </main>;
}

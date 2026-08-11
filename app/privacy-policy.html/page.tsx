import type { Metadata } from "next";
import { ContactRail } from "../components/contact-rail";
import { GlobalHeader } from "../components/global-header";
import { ScrollAnimations } from "../components/scroll-animations";
import { SiteFooter } from "../components/site-footer";
import { StructuredData } from "../components/structured-data";
import { breadcrumbSchema, metadataFor, SITE_URL } from "../seo";

export const metadata: Metadata = metadataFor("/privacy-policy.html");

const sections = [
  ["Information We Collect", "When you contact Megasteel through this website, we may collect the contact details and project information you provide, such as your name, company, email address, telephone number and enquiry details."],
  ["How We Use Information", "We use submitted information to respond to enquiries, assess project requirements, provide requested information and improve the relevance, security and operation of this website."],
  ["Information Sharing", "We do not sell personal information. Information may be shared with authorised Megasteel personnel and service providers only when needed to respond to an enquiry, operate the website or meet applicable legal obligations."],
  ["Data Retention and Security", "We retain enquiry information only for as long as reasonably necessary for the purposes described in this policy. We use appropriate organisational and technical measures to protect information, but no online transmission or storage method is completely secure."],
  ["Cookies and Analytics", "This website may use essential technologies and, where enabled, analytics services to understand website usage and improve performance. You can manage cookies through your browser settings."],
  ["Your Choices", "You may contact us to request access to, correction of or deletion of personal information you have provided, subject to applicable law and reasonable identity verification."],
  ["Contact", "For privacy questions or requests, please email megasteelstructure@126.com or call 0086-19553105520."],
] as const;

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <StructuredData data={[
        breadcrumbSchema("/privacy-policy.html", "Privacy Policy"),
        { "@context": "https://schema.org", "@type": "WebPage", "@id": `${SITE_URL}/privacy-policy.html#webpage`, name: "Privacy Policy", url: `${SITE_URL}/privacy-policy.html` },
      ]} />
      <GlobalHeader active="about" />
      <ScrollAnimations />
      <header className="legal-hero">
        <div className="wide-container reveal-on-scroll">
          <span className="eyebrow">MEGASTEEL INFORMATION</span>
          <h1>Privacy Policy</h1>
          <p>This policy explains how Megasteel handles information submitted through www.chinamegasteel.com.</p>
        </div>
      </header>
      <section className="legal-content">
        <div className="wide-container legal-content-grid">
          <aside className="legal-index" aria-label="Privacy policy sections">
            <p>ON THIS PAGE</p>
            {sections.map(([title]) => <a href={`#${title.toLowerCase().replaceAll(" ", "-")}`} key={title}>{title}</a>)}
          </aside>
          <article className="legal-copy reveal-on-scroll">
            <p><strong>Last updated: August 11, 2026.</strong></p>
            {sections.map(([title, copy]) => <section id={title.toLowerCase().replaceAll(" ", "-")} key={title}><h2>{title}</h2><p>{copy}</p></section>)}
          </article>
        </div>
      </section>
      <SiteFooter />
      <ContactRail />
    </main>
  );
}

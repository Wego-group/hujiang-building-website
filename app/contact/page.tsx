import type { Metadata } from "next";
import { EpcContactSection } from "../components/business-detail-page";
import { GlobalHeader, MegaSteelWordmark } from "../components/global-header";
import { ScrollAnimations } from "../components/scroll-animations";
import { metadataFor } from "../seo";
import { StructuredData } from "../components/structured-data";
import { breadcrumbSchema, SITE_URL } from "../seo";

export const metadata: Metadata = metadataFor("/contact");

export default function ContactPage() {
  return (
    <main className="contact-page-shell">
      <StructuredData data={[
        breadcrumbSchema("/contact", "Contact Us"),
        { "@context": "https://schema.org", "@type": "ContactPage", name: "Contact Megasteel", url: `${SITE_URL}/contact`, about: { "@id": `${SITE_URL}/#organization` } },
      ]} />
      <GlobalHeader active="contact" />
      <ScrollAnimations />

      <section className="contact-page-hero">
        <img src="/images/contact-page-hero.png" alt="Megasteel contact support team" />
        <div className="contact-page-hero-shade" />
        <div className="wide-container contact-page-hero-copy">
          <h1>Contact Us</h1>
        </div>
      </section>

      <div id="wechat"><EpcContactSection plain /></div>

      <footer>
        <div className="wide-container footer-grid">
          <div><MegaSteelWordmark /><p>Integrated industrial construction solutions.</p></div>
          <div><h3>Contact</h3><a href="tel:+8619553105520">0086-19553105520 (WHATSAPP/WECHAT)</a><a href="mailto:megasteelstructure@126.com">megasteelstructure@126.com</a><address>No.1068, Chongde 7th Avenue, Economic and Technological Development Zone, Dezhou City, Shandong Province</address></div>
          <div><h3>Quick Links</h3><a href="/#business">Business</a><a href="/#products">Products</a><a href="/company-profile">About Us</a><a href="/blog">NEWS</a></div>
          <div><h3>Contact Page</h3><a href="/contact">Contact Us</a><a href="mailto:megasteelstructure@126.com">Email</a><a href="tel:+8619553105520">Phone</a></div>
        </div>
        <div className="wide-container copyright"><span>© 2026 MEGASTEEL. Sample company information.</span><span>Replace with verified registration and policy links.</span></div>
      </footer>

      <a className="email-us" href="mailto:megasteelstructure@126.com">Email Us</a>
    </main>
  );
}

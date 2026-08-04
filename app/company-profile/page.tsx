import type { Metadata } from "next";
import { EpcContactSection } from "../components/business-detail-page";
import { GlobalHeader, MegaSteelWordmark } from "../components/global-header";
import { ScrollAnimations } from "../components/scroll-animations";
import { metadataFor } from "../seo";
import { StructuredData } from "../components/structured-data";
import { breadcrumbSchema, SITE_URL } from "../seo";

export const metadata: Metadata = metadataFor("/company-profile");

const cards = [
  {
    title: "About Us",
    copy:
      "Megasteel is a high-tech enterprise established in 2007, offering design, manufacture and construction of industrial steel structure buildings. Focusing on the industry and modern warehousing sectors, we provide customers with construction-related services from general construction contracting, steel structure contracting, curtain wall contracting and intelligent manufacturing. It has established a good reputation and strong project operation ability in logistics and industrial construction and other fields.",
  },
  {
    title: "Corporate Culture",
    copy:
      "Mission: Create value for clients, achieve physical and spiritual abundance of all employees and make contribution to social progress.\n\nValue: Treat people with integrity, be responsible for results, work pragmatically, keep constant learning, encourage teamwork spirit.",
  },
  {
    title: "Elite Team",
    copy:
      "The founders and chief management staff are all from the top multinational enterprises in the industry, deeply rooted in the industry for more than two decades, with strong professional ability and rich experience and resources.",
  },
];

const certificates = [
  {
    image: "/images/certificate-01.png",
    title: "Shanghai Megasteel Buildings Light Steel Structure Engineering Designer-Class B",
    alt: "Shanghai Megasteel Buildings light steel structure engineering designer class B certificate",
  },
  {
    image: "/images/certificate-02.png",
    title: "Vietnam Megaspace Construction General Construction Contracting Grade a Certificate",
    alt: "Vietnam Megaspace construction general contracting qualification certificate",
  },
  {
    image: "/images/certificate-03.png",
    title: "Shanghai Megaspace Construction General Construction Contracting Grade a Certificate",
    alt: "Shanghai Megaspace general construction contracting grade A certificate",
  },
  {
    image: "/images/certificate-04.png",
    title: "Shanghai Megasteel Buildings Class A Steel Structure Engineering Contractor",
    alt: "Shanghai Megasteel Buildings class A steel structure engineering contractor certificate",
  },
  {
    image: "/images/certificate-05.png",
    title: "Shandong Megasteel Construction General Construction",
    alt: "Shandong Megasteel Construction general construction qualification certificate",
  },
];

const strategicCustomersImage = "/images/enclosure-strategic-customers-grid.png";

const marketCoverageStats = [
  {
    icon: "/images/company-market-icon-founded.png",
    value: "2007",
    label: "Founded in 2007",
  },
  {
    icon: "/images/company-market-icon-area.png",
    value: "20,000,000+",
    label: "More than 20 million square meters were completed",
  },
  {
    icon: "/images/company-market-icon-experience.png",
    value: "25+",
    label: "Over 25 years of professional experience",
  },
  {
    icon: "/images/company-market-icon-markets.png",
    value: "35+",
    label: "More than 30 provinces and overseas markets",
  },
  {
    icon: "/images/company-market-icon-projects.png",
    value: "600+",
    label: "More than 600 projects were completed",
  },
  {
    icon: "/images/stat-satisfaction.webp",
    value: "95%+",
    label: "Customer satisfaction rate is over 95%",
  },
];

export default function CompanyProfilePage() {
  return (
    <main className="company-profile-page">
      <StructuredData data={[
        breadcrumbSchema("/company-profile", "Company Profile"),
        { "@context": "https://schema.org", "@type": "AboutPage", name: "About Megasteel", url: `${SITE_URL}/company-profile`, about: { "@id": `${SITE_URL}/#organization` } },
      ]} />
      <GlobalHeader active="about" />
      <ScrollAnimations />

      <section className="company-profile-hero">
        <img src="/images/company-profile-hero.png" alt="Megasteel team collaboration" />
        <div className="company-profile-hero-shade" />
        <div className="wide-container company-profile-hero-copy">
          <h1>About Megasteel</h1>
          <p>
            Founded in 2007, Megasteel is a high-tech enterprise specializing in the design, manufacture,
            and construction of industrial steel structures. It excels in general construction, steel structure
            contracting, curtain wall contracting, and intelligent manufacturing. With a stellar reputation,
            its leadership boasts over two decades of experience from top multinational firms.
          </p>
        </div>
      </section>

      <section className="company-profile-section patterned">
        <div className="wide-container product-system-pad">
          <header className="company-profile-heading">
            <span aria-hidden="true">01</span>
            <h2>Company Profile</h2>
          </header>

          <div className="company-profile-grid">
            {cards.map((card) => (
              <article className="company-profile-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>
                  {card.copy.split("\n\n").map((block) => (
                    <span key={block}>
                      {block}
                      <br />
                      <br />
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-profile-section company-profile-certificates patterned">
        <div className="wide-container product-system-pad">
          <header className="company-profile-heading">
            <span aria-hidden="true">02</span>
            <h2>Licenses &amp; Certificates</h2>
          </header>

          <div className="company-certificate-grid">
            {certificates.map((certificate) => (
              <article className="company-certificate-card" key={certificate.title}>
                <div className="company-certificate-frame">
                  <img
                    className="company-certificate-paper"
                    src={certificate.image}
                    alt={certificate.alt}
                  />
                  <img
                    className="company-certificate-cover"
                    src="/images/certificate-frame.png"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <h3>{certificate.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-profile-section company-profile-customers patterned">
        <div className="wide-container product-system-pad">
          <header className="company-profile-heading">
            <span aria-hidden="true">03</span>
            <h2>Strategic Customers</h2>
          </header>

          <div className="company-strategic-grid">
            <img
              src={strategicCustomersImage}
              alt="Strategic customer wall including GLP, ESR, Goodman, NewEase, Vanke, SLP, BW Industrial, JD Logistics, Vip.com, Suning, Bosch, Siemens, adidas, IKEA, Prologis and other customer brands."
            />
          </div>
        </div>
      </section>

      <section className="company-market-coverage">
        <div className="company-market-map-wrap">
          <img
            className="company-market-map"
            src="/images/company-market-map.png"
            alt="Megasteel market coverage map across China and overseas markets"
          />
          <div className="company-market-panel">
            <header className="company-market-heading">
              <span aria-hidden="true">04</span>
              <h2>Market Coverage</h2>
            </header>

            <div className="company-market-stats">
              {marketCoverageStats.map((item) => (
                <article key={item.value + item.label}>
                  <div className="company-market-icon">
                    <img src={item.icon} alt="" aria-hidden="true" />
                  </div>
                  <b>{item.value}</b>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            <a href="/products">Products</a>
            <a href="/company-profile">About Us</a>
            <a href="/blog">NEWS</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="wide-container copyright">
          <span>©2026 MEGASTEEL. Sample company information.</span>
          <span>Replace with verified registration and policy links.</span>
        </div>
      </footer>

      <a className="email-us" href="mailto:megasteelstructure@126.com">
        Email Us
      </a>
    </main>
  );
}

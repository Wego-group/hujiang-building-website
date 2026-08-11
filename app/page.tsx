import type { Metadata } from "next";
import { GlobalHeader, MegaSteelWordmark } from "./components/global-header";
import { ProjectShowcase } from "./components/project-showcase";
import { ScrollAnimations } from "./components/scroll-animations";
import { StructuredData } from "./components/structured-data";
import { FooterLegalLinks } from "./components/footer-legal-links";
import { metadataFor, SITE_URL } from "./seo";

export const metadata: Metadata = metadataFor("/");

const businessItems = [
  [
    "EPC Contractor",
    "Megaspace, established at the end of 2017, specializes in comprehensive contracting for superior industrial and logistics construction projects and has swiftly entered markets both at home and abroad.",
  ],
  [
    "Pre-Engineered Metal Building",
    "With 20 years of expertise in prefabricated steel construction, Megasteel executes 50+ projects yearly, catering to elite clients such as Fortune 500 and China's Top 500 companies. This track record has solidified its position as a trusted leader in the field.",
  ],
  [
    "Steel Structure Fabrication",
    "Covering 162,000 square meters (116,000 sqm built-up area), Megasteel’s Intelligent Assembly Base utilizes cutting-edge technology in prefabricated steel structures and high-performance cladding systems, achieving an annual output of 250,000 tons.",
  ],
  [
    "Megasky",
    "At Megasky, we deliver complete curtain wall integration - from design to installation - creating sustainable, energy-efficient buildings. Our expertise ensures clients receive the most practical and efficient solutions tailored to their specific needs.",
  ],
  [
    "Mega-BIPV",
    "Dedicated to innovating Mega-BIPV technology, we implement distributed photovoltaic systems in industrial and logistics facilities to produce sustainable energy. Our roof-integrated solutions provide safe, efficient power generation while meeting clients’ green energy requirements.",
  ],
];

function SectionTitle({ number, children, light = false }: { number: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`section-title ${light ? "section-title-light" : ""}`}>
      <span>{number}</span>
      <h2>{children}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Megasteel | Industrial Steel Building Solutions",
        description: "Megasteel delivers integrated industrial steel building, EPC, fabrication, building envelope and BIPV solutions.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      }} />
      <GlobalHeader active="home" />
      <ScrollAnimations />

      <section className="reference-hero" id="home">
        <img src="/images/hero.png" alt="Megasteel industrial construction campus" />
        <div className="hero-shade" />
        <div className="wide-container hero-copy">
          <h1>
            <span>Building the Future of Industry</span>
            <span>&amp; Logistics with Megasteel</span>
          </h1>
          <p>Megasteel unites strategy, engineering, digital fabrication and construction into one high-performance delivery platform for complex industrial buildings.</p>
        </div>
      </section>

      <section className="solutions patterned" id="products">
        <div className="wide-container section-padding">
          <SectionTitle number="01">Megasteel Design and Building Solutions for You</SectionTitle>
          <p className="section-intro">Megasteel creates performance-led industrial architecture through integrated structural systems, advanced envelopes and disciplined project delivery.</p>

          <div className="product-row">
            <div className="ring-image">
              <img src="/images/steel-frame-circle.png" alt="Steel structure frame under construction" />
            </div>
            <div className="product-copy">
              <span className="product-icon structure" aria-hidden="true">
                <i />
              </span>
              <div>
                <h3>Steel Structure System</h3>
                <p>High-performance prefabricated steel structures for industrial, commercial and logistics applications, combining engineering precision, rapid site assembly and long-term durability.</p>
                <div className="feature-box">
                  <span>Light-Weight Gabled Frames Structure System</span>
                  <span>Big-Span Gabled Frames Structure System</span>
                  <span>Heavy Crane Structure System</span>
                  <span>Multi-storey Steel Frame Structure</span>
                </div>
                <a className="round-button" href="/products/steel-structure-system">
                  View More <i>→</i>
                </a>
              </div>
            </div>
          </div>

          <div className="product-row reverse">
            <div className="ring-image">
              <img src="/images/factory-campus-circle.png" alt="Modern industrial factory campus" />
            </div>
            <div className="product-copy">
              <span className="product-icon enclosure" aria-hidden="true">
                <i />
              </span>
              <div>
                <h3>Building Enclosure System</h3>
                <p>A complete envelope system integrating high-strength materials, weatherproofing and thermal performance for durable, airtight and energy-efficient industrial buildings.</p>
                <div className="feature-box">
                  <span>Wide-Seam Roof System</span>
                  <span>TPO Roof System</span>
                  <span>Standing Seam Roof System</span>
                  <span>Sandwich Panel System</span>
                  <span>Metal Cladding Insulation System</span>
                  <span>Decorative Wall Plate Series</span>
                </div>
                <a className="round-button" href="/products/building-enclosure-system-in-architecture">
                  View More <i>→</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="business-wall" id="business">
        <img className="business-bg" src="/images/steel-grinding.jpg" alt="Steel structure fabrication workshop" />
        <div className="business-overlay" />
        <div className="wide-container business-heading">
          <SectionTitle number="02" light>
            How We Design and Build Your Construction Project Successfully
          </SectionTitle>
        </div>
        <div className="business-columns">
          {businessItems.map(([name, copy]) => (
            <article key={name}>
              <div>
                <h3>{name}</h3>
                <p>{copy}</p>
                <a href="/contact">View More →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects patterned" id="projects">
        <div className="wide-container section-padding">
          <SectionTitle number="03">Innovative Construction Projects by Megasteel</SectionTitle>
          <p className="section-intro">Year to date we have completed more than 20 million square meters steel buildings, more than 600 projects and geographically distributed in more than 35 provinces and cities in domestic as well as foreign countries. Our customer satisfaction rate is over 95%.</p>
          <ProjectShowcase />
        </div>
      </section>

      <section className="about" id="about">
        <div className="wide-container section-padding">
          <SectionTitle number="04">About Megasteel</SectionTitle>
          <p className="section-intro about-intro">
            Megasteel, a high-tech design and build construction contractor established in 2007, specializes in the design, manufacture, and construction of industrial steel structure buildings. Focusing on industry and modern warehousing, we provide comprehensive construction services, including general construction contracting, steel structure contracting, curtain wall contracting, and steel structure fabrication.
            <br />
            <br />
            We have built a strong reputation and demonstrated robust project operation capabilities in logistics, industrial construction, and other fields. Our founders and chief management staff hail from top multinational enterprises in the industry, bringing over two decades of deep-rooted expertise, strong professional skills, and rich experience and resources.
          </p>
          <div className="about-grid">
            <div className="statistics">
              <div><span className="stat-icon"><img src="/images/stat-founded.webp" alt="" /></span><b>2007</b><span>Founded in 2007</span></div>
              <div><span className="stat-icon"><img src="/images/stat-area.webp" alt="" /></span><b>20,000,000+</b><span>More than 20 million square meters were completed</span></div>
              <div><span className="stat-icon"><img src="/images/stat-experience.webp" alt="" /></span><b>25+</b><span>Over 25 years of professional experience</span></div>
              <div><span className="stat-icon"><img src="/images/stat-markets.webp" alt="" /></span><b>35+</b><span>More than 30 provinces and overseas markets</span></div>
              <div><span className="stat-icon"><img src="/images/stat-projects.webp" alt="" /></span><b>600+</b><span>More than 600 projects were completed</span></div>
              <div><span className="stat-icon"><img src="/images/stat-satisfaction.webp" alt="" /></span><b>95%+</b><span>Customer satisfaction rate is over 95%</span></div>
            </div>
            <div className="about-pill">
              <img src="/images/about-reference.webp" alt="Megasteel reception and office" />
            </div>
          </div>
        </div>
      </section>

      <section className="client-network" id="global-network">
        <div className="wide-container client-network-heading">
          <SectionTitle number="05">Trusted Across Global Industry</SectionTitle>
          <p className="section-intro">A client-distribution module showing Megasteel’s reach across industrial, logistics and commercial building sectors.</p>
        </div>
        <div className="client-map" aria-label="Megasteel global customer distribution map">
          <img src="/images/client-distribution-map.png" alt="Megasteel customers distributed across the global map" />
        </div>
      </section>

      <section className="contact-cta" id="contact">
        <div className="wide-container cta-card">
          <img src="/images/steel-laser.jpg" alt="Precision laser cutting steel components" />
          <div className="cta-overlay" />
          <div>
            <h2>
              Build the future of industry with your
              <br />
              integrated partner, Megasteel.
            </h2>
            <p>Turn your next facility into a clearer, faster and more dependable delivery programme.</p>
          </div>
          <a className="round-button light-button" href="/contact">Contact Us</a>
        </div>
      </section>

      <footer>
        <div className="wide-container footer-grid">
          <div>
            <MegaSteelWordmark />
            <p>Integrated industrial construction solutions.</p>
            <FooterLegalLinks />
          </div>
          <div>
            <h3>Contact</h3>
            <a href="tel:+8619553105520">0086-19553105520 (WHATSAPP/WECHAT)</a>
            <a href="mailto:megasteelstructure@126.com">megasteelstructure@126.com</a>
            <address>No.1068, Chongde 7th Avenue, Economic and Technological Development Zone, Dezhou City, Shandong Province</address>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#business">Business</a>
            <a href="#products">Products</a>
            <a href="#about">About Us</a>
            <a href="/blog">News</a>
          </div>
          <div>
            <h3>Quick Contact</h3>
            <a href="https://wa.me/8619553105520" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="/contact#wechat">WeChat: 19553105520</a>
            <a href="mailto:megasteelstructure@126.com">Email</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
        <div className="wide-container copyright">
          <span>© 2026 MEGASTEEL. All rights reserved.</span>
          <span>www.chinamegasteel.com</span>
        </div>
      </footer>

      <a className="email-us" href="mailto:megasteelstructure@126.com">Email Us</a>
    </main>
  );
}

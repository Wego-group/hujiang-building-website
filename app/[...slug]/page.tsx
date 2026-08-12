import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { GlobalHeader, MegaSteelWordmark } from "../components/global-header";
import { BusinessDetailPage, businessDetailPages, businessFaqSchemaMap } from "../components/business-detail-page";
import { ProductSystemDetailPage, productSystemPages } from "../components/product-system-detail-page";
import { StructuredData } from "../components/structured-data";
import { breadcrumbSchema, metadataFor, SITE_URL } from "../seo";
import { FooterLegalLinks } from "../components/footer-legal-links";

type Active = "business" | "products" | "projects" | "about" | "blog" | "contact";

type PageData = {
  eyebrow: string;
  title: string;
  summary: string;
  active: Active;
  image: string;
  metrics: [string, string][];
  capabilities: [string, string][];
};

const pages: Record<string, PageData> = {
  "products/steel-structure-system": page(
    "STEEL STRUCTURE SYSTEM",
    "Structure Optimized for Span, Load and Speed",
    "From lightweight portal frames to heavy-crane and multi-storey systems, each solution is engineered around the building's real operating demands.",
    "products",
    "/images/project-01.jpg",
  ),
  "products/building-enclosure-system": page(
    "BUILDING ENCLOSURE SYSTEM",
    "Roof and Wall Systems that Work as One",
    "High-performance roof, wall and insulation assemblies are coordinated to control water, air, heat and long-term maintenance.",
    "products",
    "/images/project-02.jpg",
  ),
  blog: page(
    "NEWS",
    "Megasteel News",
    "Megasteel updates, project stories and technical publishing will be presented through the future-ready NEWS framework.",
    "blog",
  ),
  contact: page(
    "CONTACT",
    "Start with the Building You Need to Achieve",
    "Share the location, intended use, target area and programme. Our team will turn those inputs into a clear first-step strategy.",
    "contact",
    "/images/project-02.jpg",
  ),
};

function page(
  eyebrow: string,
  title: string,
  summary: string,
  active: Active,
  image = "/images/hero.png",
): PageData {
  return {
    eyebrow,
    title,
    summary,
    active,
    image,
    metrics: [
      ["01", "Strategy & feasibility"],
      ["02", "Digital engineering"],
      ["03", "Precision manufacturing"],
      ["04", "Controlled delivery"],
    ],
    capabilities: [
      ["Performance-led design", "Every decision is tested against operations, lifecycle value, buildability and risk."],
      ["Connected delivery data", "One coordinated digital model links design intent with quantities, fabrication and installation."],
      ["Quality without hand-off gaps", "Clear ownership and traceability protect the project from factory floor to final handover."],
    ],
  };
}

export function generateStaticParams() {
  return [...new Set([...Object.keys(pages), ...Object.keys(businessDetailPages), ...Object.keys(productSystemPages)])].map(
    (key) => ({ slug: key.split("/") }),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  return metadataFor(`/${slug.join("/")}`);
}

export default async function LayeredPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const key = slug.join("/");
  const pathname = `/${key}`;

  if (key === "products") notFound();
  if (key === "products/building-enclosure-system") redirect("/products/building-enclosure-system-in-architecture");
  if (key === "about" || key === "about/video" || key === "about/catalog") redirect("/company-profile");
  if (key === "projects" || key.startsWith("projects/")) redirect("/");

  const businessDetail = businessDetailPages[key];
  if (businessDetail) {
    const faqs = businessFaqSchemaMap[key] ?? businessDetail.faqs;
    return (
      <>
        <StructuredData
          data={[
            breadcrumbSchema(pathname, businessDetail.title),
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": `${SITE_URL}${pathname}#webpage`,
              url: `${SITE_URL}${pathname}`,
              name: businessDetail.title,
              description: businessDetail.summary,
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: businessDetail.title,
              description: businessDetail.summary,
              url: `${SITE_URL}${pathname}`,
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: "Worldwide",
              serviceType: businessDetail.eyebrow,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map(([question, answer]) => ({
                "@type": "Question",
                name: question,
                acceptedAnswer: { "@type": "Answer", text: answer },
              })),
            },
          ]}
        />
        <BusinessDetailPage data={businessDetail} />
      </>
    );
  }

  const productSystemDetail = productSystemPages[key];
  if (productSystemDetail) {
    return (
      <>
        <StructuredData
          data={[
            breadcrumbSchema(pathname, productSystemDetail.title),
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": `${SITE_URL}${pathname}#webpage`,
              url: `${SITE_URL}${pathname}`,
              name: productSystemDetail.title,
              description: productSystemDetail.summary,
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              name: productSystemDetail.title,
              description: productSystemDetail.summary,
              image: `${SITE_URL}${productSystemDetail.heroImage}`,
              brand: { "@type": "Brand", name: "Megasteel" },
              url: `${SITE_URL}${pathname}`,
            },
          ]}
        />
        <ProductSystemDetailPage data={productSystemDetail} />
      </>
    );
  }

  const data = pages[key];
  if (!data) notFound();

  const crumbs = slug.map((part, index) => ({
    label: part.replaceAll("-", " "),
    href: `/${slug.slice(0, index + 1).join("/")}`,
  }));

  return (
    <main className="layer-page">
      <GlobalHeader active={data.active} />

      <section className="layer-hero">
        <img src={data.image} alt={`${data.title} overview`} />
        <div className="layer-hero-shade" />
        <div className="wide-container layer-hero-content">
          <p className="eyebrow">{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <p>{data.summary}</p>
          <div className="breadcrumb">
            <a href="/">Home</a>
            {crumbs.map((crumb) => (
              <span key={crumb.href}>
                {" / "}
                <a href={crumb.href}>{crumb.label}</a>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="layer-intro">
        <div className="wide-container layer-intro-grid">
          <div className="layer-kicker">
            <span>01</span>
            <small>OUR APPROACH</small>
            <h2>Complexity, organized into one clear delivery system.</h2>
          </div>
          <div className="layer-lead">
            <p>{data.summary}</p>
            <p>
              Megasteel organizes planning, engineering, fabrication and delivery into one connected process so
              project owners can move from concept to execution with less friction and stronger control.
            </p>
            <a className="round-button" href="/contact">
              Discuss a Project <i>→</i>
            </a>
          </div>
        </div>
        <div className="wide-container layer-image-frame">
          <img src={data.image} alt={`${data.eyebrow.toLowerCase()} capability`} />
          <span>MEGASTEEL / INTEGRATED DELIVERY</span>
        </div>
      </section>

      <section className="layer-metrics">
        <div className="wide-container">
          <div className="layer-metric-grid">
            {data.metrics.map(([number, label]) => (
              <div key={number}>
                <b>{number}</b>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="layer-capabilities patterned">
        <div className="wide-container">
          <div className="layer-section-heading">
            <span>02</span>
            <small>VALUE SYSTEM</small>
            <h2>Designed around outcomes, not isolated services.</h2>
          </div>
          <div className="capability-card-grid">
            {data.capabilities.map(([title, copy], index) => (
              <article key={title}>
                <b>0{index + 1}</b>
                <div className="capability-symbol">
                  <i />
                  <i />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <a href="/contact">Learn more →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {data.active === "contact" ? (
        <section className="contact-panel" id="contact">
          <div className="wide-container contact-panel-grid">
            <div>
              <p className="eyebrow dark">PROJECT ENQUIRY</p>
              <h2>Tell us what you are planning.</h2>
              <p>
                Share the building type, location, target area and delivery goals. Our team will help you shape the
                next step clearly.
              </p>
            </div>
            <form>
              <label>
                Name
                <input placeholder="Your name" />
              </label>
              <label>
                Company
                <input placeholder="Company name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="name@company.com" />
              </label>
              <label>
                Project location
                <input placeholder="City / Country" />
              </label>
              <label className="full">
                Project brief
                <textarea placeholder="Building type, area and target schedule" />
              </label>
              <button type="button">
                Send Enquiry <span>→</span>
              </button>
            </form>
          </div>
        </section>
      ) : (
        <section className="contact-cta layer-cta" id="contact">
          <div className="wide-container cta-card">
            <img src="/images/project-01.jpg" alt="" />
            <div className="cta-overlay" />
            <div>
              <h2>Move from ambition to a buildable strategy.</h2>
              <p>Start a focused conversation with the Megasteel project team.</p>
            </div>
            <a className="round-button light-button" href="/contact">
              Contact Us <i>→</i>
            </a>
          </div>
        </section>
      )}

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
            <a href="mailto:sales@chinamegasteel.com">sales@chinamegasteel.com</a>
            <address>No.1068, Chongde 7th Avenue, Economic and Technological Development Zone, Dezhou City, Shandong Province</address>
          </div>
          <div>
            <h3>Business</h3>
            <a href="/business/epc-contractor">EPC Contractor</a>
            <a href="/business/pre-engineered-metal-building">Metal Buildings</a>
            <a href="/business/steel-structure-fabrication">Steel Fabrication</a>
            <a href="/business/bipv">BIPV</a>
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

      <a className="email-us" href="mailto:sales@chinamegasteel.com">
        Email Us
      </a>
    </main>
  );
}

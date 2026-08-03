import { GlobalHeader, MegaSteelWordmark } from "../components/global-header";
import { BusinessDetailPage, businessDetailPages } from "../components/business-detail-page";
import { ProductSystemDetailPage, productSystemPages } from "../components/product-system-detail-page";

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
  products: page("PRODUCT SYSTEMS", "Engineered Components. Complete Building Performance.", "A coordinated family of structural and envelope systems gives designers more freedom while protecting cost, quality and programme.", "products"),
  "products/steel-structure-system": page("STEEL STRUCTURE SYSTEM", "Structure Optimized for Span, Load and Speed", "From lightweight portal frames to heavy-crane and multi-storey systems, each solution is modeled around the building’s real operating demands.", "products", "/images/project-01.jpg"),
  "products/building-enclosure-system": page("BUILDING ENCLOSURE SYSTEM", "Roof and Wall Systems that Work as One", "High-performance roof, wall and insulation assemblies are coordinated to control water, air, heat and long-term maintenance.", "products", "/images/project-02.jpg"),
  "projects/logistics": page("LOGISTICS PROJECTS", "Infrastructure for Faster, Smarter Distribution", "High-throughput warehouses and distribution campuses planned around circulation, automation, storage density and future expansion.", "projects"),
  "projects/industrial": page("INDUSTRIAL PROJECTS", "Production Environments Built Around the Process", "Manufacturing buildings that integrate equipment loads, utility routes, clean operations and safe material flow from the first design decision.", "projects", "/images/project-03.jpg"),
  "projects/commercial": page("COMMERCIAL PROJECTS", "Industrial Intelligence with Public-Facing Quality", "Workplaces, showrooms and mixed-use destinations combine engineering discipline with refined architectural character.", "projects", "/images/project-02.jpg"),
  "projects/overseas": page("OVERSEAS PROJECTS", "Global Standards. Local Delivery Intelligence.", "International project teams coordinate codes, supply chains and on-site execution through one consistent quality framework.", "projects"),
  about: page("ABOUT MEGASTEEL", "Engineering Confidence into Every Building", "Megasteel brings together designers, engineers, fabricators and builders around one standard: make complex projects clearer and more dependable.", "about", "/images/project-01.jpg"),
  "about/video": page("VIDEO CENTRE", "See How Ideas Become Buildings", "Explore factory processes, construction milestones, engineering workshops and the people behind each delivery.", "about", "/images/project-03.jpg"),
  "about/catalog": page("COMPANY CATALOGUE", "Capabilities, Systems and Delivery Standards", "A structured overview of Megasteel’s integrated services, product systems and quality framework, ready for your downloadable catalogue link.", "about", "/images/project-02.jpg"),
  blog: page("INSIGHTS", "Ideas for Better Industrial Buildings", "Technical guidance, project intelligence and practical perspectives for owners, consultants and delivery teams.", "blog"),
  contact: page("CONTACT", "Start with the Building You Need to Achieve", "Share the location, intended use, target area and programme. Our team will turn those inputs into a clear first-step strategy.", "contact", "/images/project-02.jpg"),
};

function page(eyebrow: string, title: string, summary: string, active: Active, image = "/images/hero.png"): PageData {
  return {
    eyebrow, title, summary, active, image,
    metrics: [["01", "Strategy & feasibility"], ["02", "Digital engineering"], ["03", "Precision manufacturing"], ["04", "Controlled delivery"]],
    capabilities: [
      ["Performance-led design", "Every decision is tested against operations, lifecycle value, buildability and risk."],
      ["Connected delivery data", "One coordinated digital model links design intent with quantities, fabrication and installation."],
      ["Quality without hand-off gaps", "Clear ownership and traceability protect the project from factory floor to final handover."],
    ],
  };
}

export function generateStaticParams() {
  return [...new Set([...Object.keys(pages), ...Object.keys(businessDetailPages), ...Object.keys(productSystemPages)])].map((key) => ({ slug: key.split("/") }));
}

export default async function LayeredPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const key = slug.join("/");
  const businessDetail = businessDetailPages[key];
  if (businessDetail) return <BusinessDetailPage data={businessDetail} />;
  const productSystemDetail = productSystemPages[key];
  if (productSystemDetail) return <ProductSystemDetailPage data={productSystemDetail} />;
  const data = pages[key] ?? page("MEGASTEEL", "Integrated Building Intelligence", "A premium, coordinated approach to industrial design and construction.", "business");
  const crumbs = slug.map((part, index) => ({ label: part.replaceAll("-", " "), href: `/${slug.slice(0, index + 1).join("/")}` }));

  return (
    <main className="layer-page">
      <GlobalHeader active={data.active} />

      <section className="layer-hero">
        <img src={data.image} alt="" />
        <div className="layer-hero-shade" />
        <div className="wide-container layer-hero-content">
          <p className="eyebrow">{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <p>{data.summary}</p>
          <div className="breadcrumb"><a href="/">Home</a>{crumbs.map((crumb) => <span key={crumb.href}>／ <a href={crumb.href}>{crumb.label}</a></span>)}</div>
        </div>
      </section>

      <section className="layer-intro">
        <div className="wide-container layer-intro-grid">
          <div className="layer-kicker"><span>01</span><small>OUR APPROACH</small><h2>Complexity, organized into one clear delivery system.</h2></div>
          <div className="layer-lead"><p>{data.summary}</p><p>The layout, images and copy on these pages are original replacements designed to feel more premium than the reference while preserving the same information depth and navigation hierarchy.</p><a className="round-button" href="/contact">Discuss a Project <i>↗</i></a></div>
        </div>
        <div className="wide-container layer-image-frame"><img src={data.image} alt={`${data.eyebrow.toLowerCase()} capability`} /><span>MEGASTEEL / INTEGRATED DELIVERY</span></div>
      </section>

      <section className="layer-metrics">
        <div className="wide-container">
          <div className="layer-metric-grid">{data.metrics.map(([number, label]) => <div key={number}><b>{number}</b><span>{label}</span></div>)}</div>
        </div>
      </section>

      <section className="layer-capabilities patterned">
        <div className="wide-container">
          <div className="layer-section-heading"><span>02</span><small>VALUE SYSTEM</small><h2>Designed around outcomes, not isolated services.</h2></div>
          <div className="capability-card-grid">{data.capabilities.map(([title, copy], index) => <article key={title}><b>0{index + 1}</b><div className="capability-symbol"><i /><i /></div><h3>{title}</h3><p>{copy}</p><a href="/contact">Learn more ↗</a></article>)}</div>
        </div>
      </section>

      {data.active === "contact" ? (
        <section className="contact-panel" id="contact">
          <div className="wide-container contact-panel-grid">
            <div><p className="eyebrow dark">PROJECT ENQUIRY</p><h2>Tell us what you are planning.</h2><p>Replace the sample contact information and connect this visual form to your preferred email or CRM.</p></div>
            <form><label>Name<input placeholder="Your name" /></label><label>Company<input placeholder="Company name" /></label><label>Email<input type="email" placeholder="name@company.com" /></label><label>Project location<input placeholder="City / Country" /></label><label className="full">Project brief<textarea placeholder="Building type, area and target schedule" /></label><button type="button">Send Enquiry <span>↗</span></button></form>
          </div>
        </section>
      ) : (
        <section className="contact-cta layer-cta" id="contact">
          <div className="wide-container cta-card"><img src="/images/project-01.jpg" alt="" /><div className="cta-overlay" /><div><h2>Move from ambition to a buildable strategy.</h2><p>Start a focused conversation with the Megasteel project team.</p></div><a className="round-button light-button" href="/contact">Contact Us <i>↗</i></a></div>
        </section>
      )}

      <footer>
        <div className="wide-container footer-grid">
          <div><MegaSteelWordmark /><p>Integrated industrial construction solutions.</p></div>
          <div><h3>Contact</h3><a href="tel:+864008888888">+86 400 888 8888</a><a href="mailto:contact@example.com">contact@example.com</a><address>Sample address: No. 88 Example Road, Shanghai, China</address></div>
          <div><h3>Business</h3><a href="/business/epc-contractor">EPC Contractor</a><a href="/business/pre-engineered-metal-building">Metal Buildings</a><a href="/business/steel-structure-fabrication">Steel Fabrication</a><a href="/business/bipv">BIPV</a></div>
          <div><h3>Quick Links</h3><a href="/products">Products</a><a href="/projects">Projects</a><a href="/about">About Us</a><a href="/blog">Insights</a></div>
        </div>
        <div className="wide-container copyright"><span>© 2026 MEGASTEEL. Sample company information.</span><span>Replace with verified registration and policy links.</span></div>
      </footer>
      <a className="email-us" href="mailto:contact@example.com">Email Us</a>
    </main>
  );
}

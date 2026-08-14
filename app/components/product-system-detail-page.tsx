import { GlobalHeader, MegaSteelWordmark } from "./global-header";
import Image from "next/image";
import { ScrollAnimations } from "./scroll-animations";
import { EpcContactSection } from "./business-detail-page";
import { FooterLegalLinks } from "./footer-legal-links";

type ProductItem = [string, string, string];

type ProductSystemPage = {
  eyebrow: string;
  title: string;
  summary: string;
  heroImage: string;
  choices: ProductItem[];
  uses: [string, string][];
  advantages: [string, string, string][];
  protectionTitle: string;
  protectionImage: string;
  protections: [string, string][];
  testimonialTitle: string;
  testimonials: [string, string][];
  compactChoices?: boolean;
  steelReferenceLayout?: boolean;
  enclosureChoiceLayout?: boolean;
  enclosureUsesLayout?: boolean;
};

const steel: ProductSystemPage = {
  eyebrow: "STEEL STRUCTURE SYSTEM",
  title: "Steel Structure System",
  summary:
    "Megasteel delivers high-strength prefabricated steel structures for industrial, commercial, and logistics facilities. Using advanced welding, galvanization, and modular design, we ensure durability, corrosion resistance, and fast installation. Our solutions are customizable, cost-effective, and comply with international safety standards, supporting sustainable and long-lasting construction.",
  heroImage: "/images/steel-system-hero.png",
  compactChoices: true,
  steelReferenceLayout: true,
  choices: [
    [
      "Light-Weight Gabled Frames Structure System",
      "A lightweight gabled frame creates economical clear-span space for manufacturing plants, warehouses, truck terminals and retail buildings. The system can be optimized around building width, clear height, roof slope, local loads and future operating requirements.",
      "/images/steel-system-light-frame.png",
    ],
    [
      "Extremely-High, Big-Span Gabled Frames Structure System",
      "For buildings above 18 metres or spans beyond 48 metres, a large-span rigid frame provides open internal volume for high-rack warehouses, aircraft hangars, sports facilities and other specialist industrial buildings.",
      "/images/steel-system-big-span.png",
    ],
    [
      "Heavy Crane Structure System",
      "Heavy-crane steel structures are engineered for cranes above 20 tons, suspended cranes above 3 tons, or working classifications A5 and higher. Typical applications include machinery, metallurgy, shipbuilding and equipment-fabrication plants.",
      "/images/steel-system-heavy-crane.png",
    ],
    [
      "Multi-storey Steel Frame Structure",
      "A multi-storey steel frame supports offices, factories and warehouses that require fast construction, low structural self-weight and reliable seismic performance. Recyclable steel components also support adaptable, lower-waste building delivery.",
      "/images/steel-system-multistorey.png",
    ],
  ],
  uses: [
    ["Extremely-high, Big-span Portal Frame Structure System", "/images/steel-use-big-span.png"],
    ["Heavy Crane Structure System", "/images/steel-use-heavy-crane.png"],
    ["Light-weight Portal Frame Structure System", "/images/steel-use-light-frame.png"],
    ["Multi-Storey Frame Structure System", "/images/steel-use-multistorey.png"],
  ],
  advantages: [
    [
      "Strength & Durability",
      "Megasteel's high-grade steel offers exceptional load-bearing capacity, ensuring structural integrity even under extreme conditions. Advanced anti-corrosion coatings and seismic-resistant designs enhance longevity for harsh climates and disaster-prone regions.",
      "/images/business-steel-beams-a.jpg",
    ],
    [
      "Cost & Time Efficiency",
      "Precision-engineered prefabricated components streamline assembly and can reduce construction time by up to 50%. Lower on-site labour, reduced material waste and optimized logistics translate to cost savings without compromising quality.",
      "/images/steel-laser.jpg",
    ],
    [
      "Eco-Friendly & Customizable",
      "Made from recyclable materials with lower carbon emissions, the system supports sustainable construction. Flexible designs adapt to industrial warehouses, logistics facilities and modern commercial spaces.",
      "/images/project-02.jpg",
    ],
  ],
  protectionTitle: "How Megasteel Protects Steel Structure System from Corrosion?",
  protectionImage: "/images/steel-corrosion-roof.png",
  protections: [
    [
      "Advanced Coatings",
      "High-performance epoxy, polyurethane and zinc-rich primers create a protective barrier against moisture and chemicals.",
    ],
    [
      "Hot-Dip Galvanization",
      "Steel components are immersed in molten zinc to form a durable, corrosion-resistant layer for harsh environments.",
    ],
    [
      "Cathodic Protection",
      "Sacrificial anodes or impressed-current systems prevent electrochemical corrosion in underground and marine applications.",
    ],
    [
      "Weather-Resistant Materials",
      "Corrosion-resistant alloys and drainage-conscious detailing minimize water retention and extend service life.",
    ],
  ],
  testimonialTitle: "What Our Clients Say About Our Building Enclosure System",
  testimonials: [
    [
      "Only Shandong Hujiang Intelligent Assembly is able to fulfill these exacting standards for collaboration and shipment.",
      "Weifang GoerTek Bonded Zone Project",
    ],
    [
      "The first logistics park project in China to receive the highest certification rating for net zero carbon buildings.",
      "Dongguan Xinsha Logistics Park",
    ],
    [
      "In a time crunch, consider what customers want, offer excellence and efficiency, and deliver early.",
      "Tuhu Car Maintenance South China Intelligent Operation and Settlement Center Project",
    ],
    [
      "The best timetable is created efficiently, with integrity and the customer's needs first.",
      "Changzhou Ideal Automobile Project",
    ],
  ],
};

const enclosure: ProductSystemPage = {
  eyebrow: "BUILDING ENCLOSURE SYSTEM",
  title: "Building Enclosure System",
  summary:
    "Megasteel provides high-performance building enclosures integrating advanced cladding, insulation and weatherproofing technologies. Our precision-engineered systems offer superior thermal efficiency, air and water tightness, durability and fast installation. Customizable designs meet architectural requirements for modern industrial, commercial and logistics facilities.",
  heroImage: "/images/curtain-wall-hero.png",
  enclosureChoiceLayout: true,
  enclosureUsesLayout: true,
  choices: [
    [
      "Vertical Wall Plate Series",
      "Standing seam roof system has excellent water-proof and wind-resistance capacity. Plate feature: Concealed interlocking series classic american 360-degree standing seam roof system recommended yield strength >= 280MPa.",
      "/images/enclosure-choice-vertical-wall.png",
    ],
    [
      "Australia Type Wide Dark Button Roof System",
      "Clip concealment series, classical australia clip, concealment roof system, no damage to coatingsand paintings, better wind up-lift resistance, recommended yield strength >= 550MPa.",
      "/images/enclosure-choice-australia-roof.png",
    ],
    [
      "TPO Roof System",
      "Open floor decking series usually be used for flexibleexcellent type-b decking pass global FM approve strength >= 230Mpa.",
      "/images/enclosure-choice-tpo-roof.png",
    ],
    [
      "ZIP-Lock Curved Surface System",
      "The leading vertical lock edge curved surface system can produce positive, negative, and fan-shaped plates; PVDF coating is usually used; the coating can be made of aluminum magnesium alloy, aluminum plate, aluminum zinc coated steel plate, etc.",
      "/images/enclosure-choice-zip-lock.png",
    ],
    [
      "Wall Vertical Planking Series",
      "High-tensile corrugated panel with the best comprehensive performance. Usually be used for wall and roof panels recommended yieid strength >= 280MPa.",
      "/images/enclosure-choice-wall-planking.png",
    ],
    [
      "Horizontal Paved Wall Plates Type",
      "Panel rib series perect over lapping; panel imported from north europe looks magnificent usually be used for transversely paved wall panels recommended yield strength >= 280MPa.",
      "/images/enclosure-choice-horizontal-wall.png",
    ],
    [
      "Internal Wall Plate Type",
      "Panel rib series panels can be curved to a certain extent usually be used for both externaI and internal wall panels recommended yield strength >= 280Mpa.",
      "/images/enclosure-choice-internal-wall.png",
    ],
    [
      "Decorative Wall Plates Type",
      "Panel rib series material width is not required, easy to be curved and overlapped usually be used for transversely-paved wall panels recommended yield strength >= 280MPa.",
      "/images/enclosure-choice-decorative-wall.png",
    ],
  ],
  uses: [
    ["Australia Type Wide Dark Button Roof System", "/images/enclosure-use-australia-roof.png"],
    ["Decorative Wall Plates Type", "/images/enclosure-use-decorative-wall.png"],
    ["Horizontal Paved Wall Plates Type", "/images/enclosure-use-horizontal-wall.png"],
    ["Internal Wall Plate Type", "/images/enclosure-use-internal-wall.png"],
    ["Metal Cladding Insulation Plate System", "/images/enclosure-use-metal-cladding.png"],
  ],
  advantages: [
    [
      "Expertise & Proven Track Record",
      "Founded in 2007, Megasteel brings over 17 years of experience in steel structure engineering, backed by a management team with decades of expertise from top multinational firms, ensuring reliable and high-quality solutions.",
      "/images/fabrication-hero-factory.png",
    ],
    [
      "End-to-End Solutions",
      "From design and fabrication to construction and smart manufacturing, Megasteel offers full-service EPC capabilities, covering industrial steel structures, warehouses, and curtain walls—streamlining projects with a single trusted provider.",
      "/images/business-steel-workshop.jpg",
    ],
    [
      "Industry-Leading Innovation",
      "Specializing in logistics and industrial construction, Megasteel combines cutting-edge technology with cost-effective building systems, delivering durable, energy-efficient, and high-performance enclosures tailored to modern demands.",
      "/images/curtain-wall-hero.png",
    ],
  ],
  protectionTitle: "How Megasteel Ensures the Durability of a Building Enclosure System?",
  protectionImage: "/images/enclosure-durability-roof.png",
  protections: [
    [
      "High-Quality Materials",
      "Megasteel uses certified, corrosion-resistant steel and advanced cladding materials, meeting international standards like ASTM and EN 1090 for long-lasting performance.",
    ],
    [
      "Precision Engineering & Fabrication",
      "Leveraging cutting-edge CAD/CAM technology and CNC machinery, every component is fabricated with tight tolerances to ensure structural integrity and weather resistance.",
    ],
    [
      "Rigorous Quality Control",
      "Each phase, from material inspection to final assembly, undergoes strict testing, including load-bearing, wind resistance, and waterproofing checks, following ISO-certified protocols.",
    ],
    [
      "Expert Installation & Maintenance",
      "Skilled technicians trained in modern construction techniques ensure proper sealing, joint reinforcement, and post-construction maintenance, maximizing lifespan.",
    ],
  ],
  testimonialTitle: "What Our Clients Say About Our Building Enclosure System",
  testimonials: [
    [
      "Only Shandong Huijiang Intelligent Assembly can meet such high requirements for shipping and cooperation.",
      "Weifang GoerTek Bonded Zone Project",
    ],
    [
      'The first logistics park project in China to achieve the highest level of "net zero carbon building certification evaluation system"',
      "Dongguan Xinsha Logistics Park",
    ],
    [
      "Race against time, think what customers want, deliver with high quality and efficiency, and deliver ahead of schedule.",
      "Tuhu Car Maintenance South China Intelligent Operation and Settlement Center Project",
    ],
    [
      "Efficiently creating the best schedule; Integrity service, customer first.",
      "Changzhou Ideal Automobile Project",
    ],
  ],
};

export const productSystemPages: Record<string, ProductSystemPage> = {
  "products/steel-structure-system": steel,
  "products/building-enclosure-system": enclosure,
  "products/building-enclosure-system-in-architecture": enclosure,
};

export function ProductSystemDetailPage({ data }: { data: ProductSystemPage }) {
  return (
    <main className={`product-system-page ${data.steelReferenceLayout ? "steel-reference-layout" : ""}`}>
      <GlobalHeader active="products" />
      <ScrollAnimations />

      <section className="product-system-hero">
        <Image src={data.heroImage} alt={`${data.title} for industrial buildings`} fill priority sizes="100vw" />
        <div className="product-system-hero-shade" />
        <div className="wide-container product-system-hero-copy">
          <p className="eyebrow">{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <p>{data.summary}</p>
        </div>
      </section>

      {data.enclosureChoiceLayout ? (
        <EnclosureChoiceSection data={data} />
      ) : (
        <section className="product-system-choice patterned">
          <div className="wide-container product-system-pad">
            <ProductHeading number="01" title={`Megasteel ${data.title} for Choice`} />
            <div className={`product-choice-list ${data.compactChoices ? "compact" : ""}`}>
              {data.choices.map(([title, copy, image], index) => (
                <article className={index % 2 ? "reverse" : ""} key={title}>
                  <div className="product-choice-image">
                    <img src={image} alt={title} />
                    {!data.compactChoices && <span>IMAGE PLACEHOLDER</span>}
                  </div>
                  <div className="product-choice-copy">
                    <b>{String(index + 1).padStart(2, "0")}</b>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.enclosureUsesLayout ? (
        <EnclosureUsesSection data={data} />
      ) : (
        <section className="product-system-uses">
          <div className="wide-container product-system-pad">
            <ProductHeading number="02" title={`Uses of Megasteel ${data.title}`} light={data.steelReferenceLayout} />
            <div className="product-use-grid">
              {data.uses.map(([title, image]) => (
                <article key={title}>
                  <img src={image} alt="" />
                  <div>
                    <i aria-hidden="true" />
                    <h3>{title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.enclosureChoiceLayout ? (
        <EnclosureAdvantagesSection data={data} />
      ) : (
        <section className="product-system-advantages">
          <div className="wide-container product-system-pad">
            <ProductHeading number="03" title={`Why Choose Megasteel ${data.title}?`} light={!data.steelReferenceLayout} />
            <div className="product-advantage-grid">
              {data.advantages.map(([title, copy, image]) => (
                <article key={title}>
                  <img src={image} alt="" />
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.enclosureChoiceLayout ? (
        <EnclosureProtectionSection data={data} />
      ) : (
        <section className="product-system-protection patterned">
          <div className="wide-container product-system-pad">
            <ProductHeading number="04" title={data.protectionTitle} />
            <div className="product-protection-layout">
              <div className="product-protection-image">
                <img src={data.protectionImage} alt="" />
                <span>REPLACEABLE IMAGE</span>
              </div>
              <div className="product-protection-list">
                {data.protections.map(([title, copy], index) => (
                  <article key={title}>
                    <b>{String(index + 1).padStart(2, "0")}</b>
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {data.enclosureChoiceLayout ? (
        <EnclosureTestimonialsSection data={data} />
      ) : (
        <section className="product-system-testimonials">
          <div className="wide-container product-system-pad">
            <ProductHeading number="05" title={data.testimonialTitle} />
            <div className="product-testimonial-list">
              {data.testimonials.map(([quote, client]) => (
                <blockquote key={client}>
                  <p>
                    <b aria-hidden="true">“</b>
                    {quote}
                  </p>
                  <cite>
                    <i aria-hidden="true" />
                    {client}
                  </cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {(data.steelReferenceLayout || data.enclosureChoiceLayout) && <EpcContactSection />}

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

      <a className="email-us" href="mailto:sales@chinamegasteel.com">
        Email Us
      </a>
    </main>
  );
}

function ProductHeading({ number, title, light = false }: { number: string; title: string; light?: boolean }) {
  return (
    <header className={`product-system-heading ${light ? "light" : ""}`}>
      <span aria-hidden="true">{number}</span>
      <h2>{title}</h2>
    </header>
  );
}

function EnclosureChoiceSection({ data }: { data: ProductSystemPage }) {
  return (
    <section className="product-system-choice patterned enclosure-choice-layout">
      <div className="wide-container product-system-pad">
        <ProductHeading number="01" title={`Megasteel ${data.title} for Choice`} />
        <div className="enclosure-choice-shell">
          <div className="enclosure-choice-grid">
            {data.choices.map(([title, copy, image]) => (
              <article className="enclosure-choice-card" key={title}>
                <div className="enclosure-choice-visual">
                  <img src={image} alt={title} />
                  <div className="enclosure-choice-hover">
                    <p>{copy}</p>
                  </div>
                </div>
                <div className="enclosure-choice-bottom">
                  <h3>{title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EnclosureUsesSection({ data }: { data: ProductSystemPage }) {
  return (
    <section className="product-system-uses enclosure-uses-reference">
      <div className="enclosure-uses-heading">
        <ProductHeading number="02" title={`Uses of Megasteel ${data.title}`} light />
      </div>
      <div className="enclosure-uses-grid">
        {data.uses.map(([title, image]) => (
          <article className="enclosure-use-card" key={title}>
            <img src={image} alt={title} />
            <div className="enclosure-use-overlay" />
            <div className="enclosure-use-copy">
              <h3>{title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EnclosureAdvantagesSection({ data }: { data: ProductSystemPage }) {
  return (
    <section className="product-system-advantages enclosure-advantages-reference">
      <div className="wide-container product-system-pad">
        <ProductHeading number="03" title="Why Choose Megasteel Building Enclosure System?" />
        <div className="enclosure-advantage-grid">
          {data.advantages.map(([title, copy]) => (
            <article className="enclosure-advantage-card" key={title}>
              <div className="enclosure-advantage-copy">
                <h3>{title}</h3>
                <span aria-hidden="true" />
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnclosureProtectionSection({ data }: { data: ProductSystemPage }) {
  return (
    <section className="product-system-protection patterned enclosure-protection-reference">
      <div className="wide-container product-system-pad">
        <div className="enclosure-protection-header">
          <ProductHeading number="04" title={data.protectionTitle} />
        </div>
        <div className="enclosure-protection-layout">
          <div className="enclosure-protection-image">
            <img src={data.protectionImage} alt={data.protectionTitle} />
          </div>
          <div className="enclosure-protection-list">
            {data.protections.map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EnclosureTestimonialsSection({ data }: { data: ProductSystemPage }) {
  return (
    <section className="product-system-testimonials enclosure-testimonials-reference">
      <div className="wide-container product-system-pad">
        <div className="enclosure-testimonials-header">
          <ProductHeading number="05" title={data.testimonialTitle} />
        </div>
        <div className="enclosure-testimonial-list">
          {data.testimonials.map(([quote, client]) => (
            <blockquote key={client}>
              <p>
                <b aria-hidden="true">“</b>
                {quote}
              </p>
              <cite>{client}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}


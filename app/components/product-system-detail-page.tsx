import { GlobalHeader, MegaSteelWordmark } from "./global-header";
import { ScrollAnimations } from "./scroll-animations";
import { EpcContactSection } from "./business-detail-page";

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
};

const steel: ProductSystemPage = {
  eyebrow: "STEEL STRUCTURE SYSTEM",
  title: "Steel Structure System",
  summary: "Megasteel delivers high-strength prefabricated steel structures for industrial, commercial, and logistics facilities. Using advanced welding, galvanization, and modular design, we ensure durability, corrosion resistance, and fast installation. Our solutions are customizable, cost-effective, and comply with international safety standards, supporting sustainable and long-lasting construction.",
  heroImage: "/images/steel-system-hero.png",
  compactChoices: true,
  steelReferenceLayout: true,
  choices: [
    ["Light-Weight Gabled Frames Structure System", "A lightweight gabled frame creates economical clear-span space for manufacturing plants, warehouses, truck terminals and retail buildings. The system can be optimized around building width, clear height, roof slope, local loads and future operating requirements.", "/images/steel-system-light-frame.png"],
    ["Extremely-High, Big-Span Gabled Frames Structure System", "For buildings above 18 metres or spans beyond 48 metres, a large-span rigid frame provides open internal volume for high-rack warehouses, aircraft hangars, sports facilities and other specialist industrial buildings.", "/images/steel-system-big-span.png"],
    ["Heavy Crane Structure System", "Heavy-crane steel structures are engineered for cranes above 20 tons, suspended cranes above 3 tons, or working classifications A5 and higher. Typical applications include machinery, metallurgy, shipbuilding and equipment-fabrication plants.", "/images/steel-system-heavy-crane.png"],
    ["Multi-storey Steel Frame Structure", "A multi-storey steel frame supports offices, factories and warehouses that require fast construction, low structural self-weight and reliable seismic performance. Recyclable steel components also support adaptable, lower-waste building delivery.", "/images/steel-system-multistorey.png"],
  ],
  uses: [["Extremely-high, Big-span Portal Frame Structure System", "/images/steel-use-big-span.png"], ["Heavy Crane Structure System", "/images/steel-use-heavy-crane.png"], ["Light-weight Portal Frame Structure System", "/images/steel-use-light-frame.png"], ["Multi-Storey Frame Structure System", "/images/steel-use-multistorey.png"]],
  advantages: [
    ["Strength & Durability", "Megasteel’s high-grade steel offers exceptional load-bearing capacity, ensuring structural integrity even under extreme conditions. Advanced anti-corrosion coatings and seismic-resistant designs enhance longevity for harsh climates and disaster-prone regions.", "/images/business-steel-beams-a.jpg"],
    ["Cost & Time Efficiency", "Precision-engineered prefabricated components streamline assembly and can reduce construction time by up to 50%. Lower on-site labour, reduced material waste and optimized logistics translate to cost savings without compromising quality.", "/images/steel-laser.jpg"],
    ["Eco-Friendly & Customizable", "Made from recyclable materials with lower carbon emissions, the system supports sustainable construction. Flexible designs adapt to industrial warehouses, logistics facilities and modern commercial spaces.", "/images/project-02.jpg"],
  ],
  protectionTitle: "How Megasteel Protects Steel Structure System from Corrosion?",
  protectionImage: "/images/steel-corrosion-roof.png",
  protections: [["Advanced Coatings", "High-performance epoxy, polyurethane and zinc-rich primers create a protective barrier against moisture and chemicals."], ["Hot-Dip Galvanization", "Steel components are immersed in molten zinc to form a durable, corrosion-resistant layer for harsh environments."], ["Cathodic Protection", "Sacrificial anodes or impressed-current systems prevent electrochemical corrosion in underground and marine applications."], ["Weather-Resistant Materials", "Corrosion-resistant alloys and drainage-conscious detailing minimize water retention and extend service life."]],
  testimonialTitle: "What Our Clients Say About Our Building Enclosure System",
  testimonials: [["Only Shandong Hujiang Intelligent Assembly is able to fulfill these exacting standards for collaboration and shipment.", "Weifang GoerTek Bonded Zone Project"], ["The first logistics park project in China to receive the highest certification rating for net zero carbon buildings.", "Dongguan Xinsha Logistics Park"], ["In a time crunch, consider what customers want, offer excellence and efficiency, and deliver early.", "Tuhu Car Maintenance South China Intelligent Operation and Settlement Center Project"], ["The best timetable is created efficiently, with integrity and the customer’s needs first.", "Changzhou Ideal Automobile Project"]],
};

const enclosure: ProductSystemPage = {
  eyebrow: "BUILDING ENCLOSURE SYSTEM",
  title: "Building Enclosure System",
  summary: "Megasteel provides high-performance building enclosures integrating advanced cladding, insulation and weatherproofing technologies. Our precision-engineered systems offer superior thermal efficiency, air and water tightness, durability and fast installation. Customizable designs meet architectural requirements for modern industrial, commercial and logistics facilities.",
  heroImage: "/images/curtain-wall-hero.png",
  choices: [
    ["Vertical Wall Plate Series", "The classic American 360° standing-seam roof system provides excellent waterproofing and wind resistance through concealed interlocking panels, with recommended yield strength of at least 280 MPa.", "/images/curtain-wall-project-01.png"],
    ["Australia Type Wide Dark Button Roof System", "A concealed clip roof system that avoids damage to coatings and provides strong wind-uplift resistance, with recommended yield strength of at least 550 MPa.", "/images/pemb-project-02.png"],
    ["TPO Roof System", "Open floor-decking systems provide a flexible, high-performance deck solution with global FM approval and recommended yield strength of at least 230 MPa.", "/images/pemb-project-03.png"],
    ["ZIP-Lock Curved Surface System", "A leading vertical lock-edge curved system capable of producing positive, negative and fan-shaped panels in PVDF-coated aluminum-magnesium alloy, aluminum or aluminum-zinc coated steel.", "/images/curtain-wall-project-02.png"],
    ["Stainless Steel Roof System", "A durable architectural roof solution for demanding environments where corrosion resistance, clean detailing and long service life are priorities.", "/images/project-02.jpg"],
    ["Bearing Plate System", "High-tensile corrugated panels provide strong comprehensive performance for roof and wall applications, with recommended yield strength of at least 280 MPa.", "/images/business-steel-beams-b.jpg"],
    ["Wall Vertical Planking Series", "North-European panel rib profiles create precise overlaps and a refined appearance for vertically installed external wall panels.", "/images/curtain-wall-project-03.png"],
    ["Horizontal Paved Wall Plates Type", "Panel rib series can be curved to a defined extent and used for external and internal horizontal wall applications.", "/images/curtain-wall-project-04.png"],
    ["Internal Wall Plate Type", "Flexible ribbed panels are easy to curve and overlap, providing a practical solution for internal wall and lining applications.", "/images/curtain-wall-project-05.png"],
    ["Decorative Wall Plates Type", "Decorative metal wall panels combine profile depth, colour and installation flexibility for expressive architectural envelopes.", "/images/curtain-wall-project-06.png"],
    ["Metal Cladding Insulation Plates System", "European PU and rock-wool cladding production lines provide PUR and PIR hard-foam cores with B1 fire performance. The system can reduce building energy consumption by up to 40%.", "/images/project-03.jpg"],
    ["Sandwich Panel System", "Factory-produced insulated sandwich panels unite finish, thermal insulation and enclosure performance in one quickly installed component.", "/images/pemb-project-01.png"],
  ],
  uses: [["Australia Type Wide Dark Button Roof System", "/images/pemb-project-02.png"], ["Decorative Wall Plates Type", "/images/curtain-wall-project-06.png"], ["Horizontal Paved Wall Plates Type", "/images/curtain-wall-project-04.png"], ["Internal Wall Plate Type", "/images/curtain-wall-project-05.png"], ["Metal Cladding Insulation Plate System", "/images/project-03.jpg"]],
  advantages: [
    ["Expertise & Proven Track Record", "Founded in 2007, Megasteel brings extensive steel-structure engineering experience, supported by a management team with decades of expertise from leading multinational firms.", "/images/fabrication-hero-factory.png"],
    ["End-to-End Solutions", "From design and fabrication to construction and intelligent manufacturing, Megasteel provides integrated EPC capability for industrial steel structures, warehouses and curtain walls.", "/images/business-steel-workshop.jpg"],
    ["Industry-Leading Innovation", "Megasteel combines advanced technology with cost-effective building systems to deliver durable, energy-efficient and high-performance envelopes for modern industrial and logistics buildings.", "/images/curtain-wall-hero.png"],
  ],
  protectionTitle: "How Megasteel Ensures the Durability of a Building Enclosure System?",
  protectionImage: "/images/steel-laser.jpg",
  protections: [["High-Quality Materials", "Certified corrosion-resistant steel and advanced cladding materials meet international standards such as ASTM and EN 1090."], ["Precision Engineering & Fabrication", "CAD/CAM technology and CNC machinery fabricate each component to tight tolerances for structural integrity and weather resistance."], ["Rigorous Quality Control", "Material inspection, load-bearing, wind-resistance and waterproofing checks are completed under controlled quality procedures."], ["Expert Installation & Maintenance", "Skilled technicians coordinate sealing, joint reinforcement, installation quality and post-construction maintenance to maximize service life."]],
  testimonialTitle: "What Our Clients Say About Our Building Enclosure System",
  testimonials: [["Only Shandong Hujiang Intelligent Assembly can meet such high requirements for shipping and cooperation.", "Weifang GoerTek Bonded Zone Project"], ["The first logistics park project in China to achieve the highest level of net zero carbon building certification.", "Dongguan Xinsha Logistics Park"], ["Race against time, understand what customers need, deliver with quality and efficiency, and complete ahead of schedule.", "Tuhu Car Maintenance South China Intelligent Operation and Settlement Center Project"], ["Efficiently creating the best schedule; integrity in service and customer first.", "Changzhou Ideal Automobile Project"]],
};

export const productSystemPages: Record<string, ProductSystemPage> = {
  "products/steel-structure-system": steel,
  "products/building-enclosure-system": enclosure,
  "products/building-enclosure-system-in-architecture": enclosure,
};

export function ProductSystemDetailPage({ data }: { data: ProductSystemPage }) {
  return <main className={`product-system-page ${data.steelReferenceLayout ? "steel-reference-layout" : ""}`}>
    <GlobalHeader active="products" /><ScrollAnimations />
    <section className="product-system-hero"><img src={data.heroImage} alt="" /><div className="product-system-hero-shade" /><div className="wide-container product-system-hero-copy"><p className="eyebrow">{data.eyebrow}</p><h1>{data.title}</h1><p>{data.summary}</p></div></section>
    <section className="product-system-choice patterned"><div className="wide-container product-system-pad"><ProductHeading number="01" title={`Megasteel ${data.title} for Choice`} /><div className={`product-choice-list ${data.compactChoices ? "compact" : ""}`}>{data.choices.map(([title, copy, image], index) => <article className={index % 2 ? "reverse" : ""} key={title}><div className="product-choice-image"><img src={image} alt={title} />{!data.compactChoices && <span>IMAGE PLACEHOLDER</span>}</div><div className="product-choice-copy"><b>{String(index + 1).padStart(2,"0")}</b><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>
    <section className="product-system-uses"><div className="wide-container product-system-pad"><ProductHeading number="02" title={`Uses of Megasteel ${data.title}`} light={data.steelReferenceLayout} /><div className="product-use-grid">{data.uses.map(([title,image]) => <article key={title}><img src={image} alt="" /><div><i aria-hidden="true" /><h3>{title}</h3></div></article>)}</div></div></section>
    <section className="product-system-advantages"><div className="wide-container product-system-pad"><ProductHeading number="03" title={`Why Choose Megasteel ${data.title}?`} light={!data.steelReferenceLayout} /><div className="product-advantage-grid">{data.advantages.map(([title,copy,image]) => <article key={title}><img src={image} alt="" /><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>
    <section className="product-system-protection patterned"><div className="wide-container product-system-pad"><ProductHeading number="04" title={data.protectionTitle} /><div className="product-protection-layout"><div className="product-protection-image"><img src={data.protectionImage} alt="" /><span>REPLACEABLE IMAGE</span></div><div className="product-protection-list">{data.protections.map(([title,copy],index) => <article key={title}><b>{String(index + 1).padStart(2,"0")}</b><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></div></section>
    <section className="product-system-testimonials"><div className="wide-container product-system-pad"><ProductHeading number="05" title={data.testimonialTitle} /><div className="product-testimonial-list">{data.testimonials.map(([quote,client]) => <blockquote key={client}><p><b aria-hidden="true">“</b>{quote}</p><cite><i aria-hidden="true" />{client}</cite></blockquote>)}</div></div></section>
    {data.steelReferenceLayout && <EpcContactSection />}
    <footer><div className="wide-container footer-grid"><div><MegaSteelWordmark /><p>Integrated industrial construction solutions.</p></div><div><h3>Contact</h3><a href="tel:+864008888888">+86 400 888 8888</a><a href="mailto:contact@example.com">contact@example.com</a><address>Sample address: No. 88 Example Road, Shanghai, China</address></div><div><h3>Business</h3><a href="/business/epc-contractor">EPC Contractor</a><a href="/business/pre-engineered-metal-building">Metal Buildings</a><a href="/business/steel-structure-fabrication">Steel Fabrication</a><a href="/business/bipv">Mega-BIPV</a></div><div><h3>Quick Links</h3><a href="/products">Products</a><a href="/about">About Us</a><a href="/blog">NEWS</a><a href="/contact">Contact</a></div></div><div className="wide-container copyright"><span>© 2026 MEGASTEEL. Sample company information.</span><span>Replace with verified registration and policy links.</span></div></footer>
    <a className="email-us" href="mailto:contact@example.com">Email Us</a>
  </main>;
}

function ProductHeading({ number, title, light = false }: { number: string; title: string; light?: boolean }) {
  return <header className={`product-system-heading ${light ? "light" : ""}`}><span aria-hidden="true">{number}</span><h2>{title}</h2></header>;
}

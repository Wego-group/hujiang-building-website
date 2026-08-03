import { GlobalHeader, MegaSteelWordmark } from "../components/global-header";

const projectCards = [
  { title: "Yangtze Delta Smart Logistics Hub", place: "Shanghai, China", area: "128,000 m²", image: "/images/hero.png", type: "Logistics" },
  { title: "High-Performance Fabrication Campus", place: "Shandong, China", area: "96,500 m²", image: "/images/project-01.jpg", type: "Industrial" },
  { title: "Advanced Technology Headquarters", place: "Suzhou, China", area: "72,000 m²", image: "/images/project-02.jpg", type: "Commercial" },
  { title: "Integrated Manufacturing Base", place: "Guangdong, China", area: "210,000 m²", image: "/images/project-03.jpg", type: "Industrial" },
  { title: "Northern Distribution Centre", place: "Beijing, China", area: "88,000 m²", image: "/images/hero.png", type: "Logistics" },
  { title: "Green Energy Industrial Park", place: "Jiangsu, China", area: "156,000 m²", image: "/images/project-02.jpg", type: "Industrial" },
  { title: "Southeast Asia Logistics Campus", place: "Hanoi, Vietnam", area: "145,000 m²", image: "/images/project-03.jpg", type: "Overseas" },
  { title: "Automotive Components Facility", place: "Monterrey, Mexico", area: "64,000 m²", image: "/images/project-01.jpg", type: "Overseas" },
  { title: "Regional Cold-Chain Warehouse", place: "Jakarta, Indonesia", area: "82,000 m²", image: "/images/hero.png", type: "Overseas" },
];

function SiteHeader() {
  return (
    <>
      <header className="reference-header">
        <div className="header-green">
          <div className="wide-container header-info">
            <div className="info-links">
              <a href="tel:+864008888888">☎ +86 400 888 8888</a>
              <a href="mailto:contact@example.com">✉ contact@example.com</a>
              <span className="info-line" />
              <a href="#contact">English⌄</a>
            </div>
          </div>
        </div>
        <nav className="main-navigation" aria-label="Primary navigation">
          <div className="wide-container nav-inner">
            <div className="nav-space" />
            <a href="/">Home</a>
            <a href="/#business">Business</a>
            <a href="/#products">Products</a>
            <a className="current" href="/projects">Projects</a>
            <a href="/#about">About Us</a>
            <a href="/#news">Blog</a>
            <a href="#contact">Contact Us</a>
            <a className="search-dot" href="#project-grid" aria-label="Search">⌕</a>
          </div>
        </nav>
      </header>
      <header className="mobile-header">
        <details>
          <summary>☰</summary>
          <nav><a href="/">Home</a><a href="/#business">Business</a><a href="/#products">Products</a><a href="/projects">Projects</a><a href="/#about">About Us</a><a href="#contact">Contact Us</a></nav>
        </details>
      </header>
    </>
  );
}

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <GlobalHeader active="projects" />

      <section className="projects-hero">
        <img src="/images/hero.png" alt="Industrial building project portfolio" />
        <div className="projects-hero-overlay" />
        <div className="wide-container projects-hero-copy">
          <p className="eyebrow">BUILDING PROJECTS</p>
          <h1>Megasteel Building Projects</h1>
          <p>Integrated steel-building delivery for industrial, logistics and commercial developments across China and international markets.</p>
          <div className="breadcrumb"><a href="/">Home</a><span>／</span><b>Projects</b></div>
        </div>
      </section>

      <section className="project-network">
        <div className="wide-container network-layout">
          <div className="network-copy">
            <span className="project-index">01</span>
            <p className="eyebrow dark">PROJECT FOOTPRINT</p>
            <h2>From China to the World</h2>
            <p className="network-intro">Our project network connects design, fabrication and on-site delivery teams across major industrial markets. The locations and figures below are editable examples for your verified project portfolio.</p>
            <div className="network-stats">
              <div><b>600+</b><span>Projects delivered</span></div>
              <div><b>20M+</b><span>Square metres</span></div>
              <div><b>35+</b><span>Markets covered</span></div>
              <div><b>95%+</b><span>Client satisfaction</span></div>
            </div>
          </div>
          <div className="map-stage" aria-label="Project delivery map">
            <img src="/images/world-map.svg" alt="World map showing sample project locations" />
            <span className="map-dot dot-mexico"><i />Mexico<small>Monterrey</small></span>
            <span className="map-dot dot-china"><i />China<small>Shanghai · Shandong</small></span>
            <span className="map-dot dot-vietnam"><i />Vietnam<small>Hanoi</small></span>
            <span className="map-dot dot-indonesia"><i />Indonesia<small>Jakarta</small></span>
            <span className="map-dot dot-europe"><i />Europe<small>Regional partners</small></span>
          </div>
        </div>
      </section>

      <section className="project-catalog patterned" id="project-grid">
        <div className="wide-container project-catalog-inner">
          <div className="catalog-heading">
            <div><span className="project-index">02</span><p className="eyebrow dark">SELECTED WORK</p><h2>Explore Our Building Portfolio</h2></div>
            <p>Filter-style navigation follows the same multi-level information hierarchy as the reference project page.</p>
          </div>

          <div className="project-filters">
            <div><b>Business</b><button className="active">All</button><button>EPC Contractor</button><button>Pre-Engineered Metal Building</button><button>Steel Fabrication</button><button>Megasky Curtain Wall</button><button>Mega-BIPV</button></div>
            <div><b>Type</b><button className="active">All</button><button>Logistics</button><button>Industrial</button><button>Commercial</button></div>
            <div><b>Location</b><button className="active">All</button><button>China</button><button>Overseas</button></div>
          </div>

          <div className="project-card-grid">
            {projectCards.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-image"><img src={project.image} alt={project.title} /><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="project-card-copy">
                  <small>{project.type}</small>
                  <h3>{project.title}</h3>
                  <p><span>⌖ {project.place}</span><span>▱ {project.area}</span></p>
                  <a href="#contact" aria-label={`View ${project.title}`}>View Project <i>↗</i></a>
                </div>
              </article>
            ))}
          </div>
          <button className="load-projects">Load More Projects <span>＋</span></button>
        </div>
      </section>

      <section className="contact-cta project-cta" id="contact">
        <div className="wide-container cta-card">
          <img src="/images/project-01.jpg" alt="" />
          <div className="cta-overlay" />
          <div><h2>Ready to elevate your next building project?</h2><p>Share the project location, intended use and planned area to receive a tailored solution.</p></div>
          <a className="round-button light-button" href="mailto:contact@example.com">Contact Us <i>↗</i></a>
        </div>
      </section>

      <footer>
        <div className="wide-container footer-grid">
          <div><MegaSteelWordmark /><p>Integrated industrial construction solutions.</p></div>
          <div><h3>Contact</h3><a href="tel:+864008888888">+86 400 888 8888</a><a href="mailto:contact@example.com">contact@example.com</a><address>Sample address: No. 88 Example Road, Shanghai, China</address></div>
          <div><h3>Business</h3><a href="/#business">EPC Contractor</a><a href="/#business">Metal Buildings</a><a href="/#business">Steel Fabrication</a><a href="/#business">Mega-BIPV</a></div>
          <div><h3>Quick Links</h3><a href="/">Home</a><a href="/#products">Products</a><a href="/projects">Projects</a><a href="/#about">About Us</a></div>
        </div>
        <div className="wide-container copyright"><span>© 2026 MEGASTEEL. Sample company information.</span><span>Map base: Wikimedia Commons · Replace with verified company data.</span></div>
      </footer>
      <a className="email-us" href="mailto:contact@example.com">Email Us</a>
    </main>
  );
}

const slides = [
  [
    { title: "System Design", icon: "/images/epc-strength-operation.png" },
    { title: "Design Review", icon: "/images/epc-strength-turnkey.png" },
    { title: "Detailed Design", icon: "/images/epc-strength-quality.png" },
    { title: "Sample Submission & Approval", icon: "/images/epc-strength-engineering.png" },
  ],
  [
    { title: "Design Review", icon: "/images/epc-strength-turnkey.png" },
    { title: "Site Installation", icon: "/images/epc-strength-operation.png" },
    { title: "Sample Submission & Approval", icon: "/images/epc-strength-engineering.png" },
    { title: "Inspection & Hand Over", icon: "/images/epc-strength-quality.png" },
  ],
];

export function CurtainWallStrengthCarousel() {
  return (
    <section className="pemb-strength-section curtain-wall-strength-section">
      <header className="pemb-strength-heading curtain-wall-strength-heading">
        <span aria-hidden="true">01</span>
        <h2>Why Choose Megasteel as Your Megasky Curtain Wall Supplier</h2>
      </header>
      <div className="wide-container pemb-carousel-shell curtain-wall-carousel-shell">
        <input id="curtain-wall-slide-1" type="radio" name="curtain-wall-capability" defaultChecked />
        <input id="curtain-wall-slide-2" type="radio" name="curtain-wall-capability" />

        <div className="pemb-carousel-viewport curtain-wall-slides" aria-live="polite">
          {slides.map((slide, page) => (
            <div className={`pemb-capability-grid curtain-wall-capability-grid curtain-wall-slide page-${page + 1}`} key={page}>
              {slide.map((item) => <article key={item.title}><span aria-hidden="true" /><h3>{item.title}</h3></article>)}
            </div>
          ))}
        </div>

        <div className="curtain-wall-controls curtain-wall-controls-one">
          <label className="pemb-carousel-arrow previous" htmlFor="curtain-wall-slide-2" aria-label="Previous curtain wall capability page">‹</label>
          <label className="pemb-carousel-arrow next" htmlFor="curtain-wall-slide-2" aria-label="Next curtain wall capability page">›</label>
        </div>
        <div className="curtain-wall-controls curtain-wall-controls-two">
          <label className="pemb-carousel-arrow previous" htmlFor="curtain-wall-slide-1" aria-label="Previous curtain wall capability page">‹</label>
          <label className="pemb-carousel-arrow next" htmlFor="curtain-wall-slide-1" aria-label="Next curtain wall capability page">›</label>
        </div>

        <div className="pemb-carousel-dots curtain-wall-carousel-dots" aria-label="Curtain wall capability pages">
          <label htmlFor="curtain-wall-slide-1" aria-label="Show curtain wall capability page 1" />
          <label htmlFor="curtain-wall-slide-2" aria-label="Show curtain wall capability page 2" />
        </div>
      </div>
    </section>
  );
}

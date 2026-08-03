"use client";

import { useState } from "react";

const slides = [
  [
    "High-Quality Raw Materials for Industrial Steel Structure Fabrication",
    "Shot Blasting and Painting",
    "Automated Mechanical Structure Manufacturing Operations",
    "Modular Packaging",
  ],
  [
    "Shot Blasting and Painting",
    "High-Efficiency and Precision-Oriented Production",
    "Modular Packaging",
  ],
];

export function SteelFabricationStrengthCarousel() {
  const [page, setPage] = useState(0);
  const goTo = (next: number) => setPage((next + slides.length) % slides.length);

  return (
    <section className="pemb-strength-section fabrication-strength-section">
      <header className="pemb-strength-heading">
        <span aria-hidden="true">01</span>
        <h2>Why Choose Megasteel as Your Chinese Structural Steel Fabricator</h2>
      </header>
      <div className="wide-container pemb-carousel-shell">
        <button className="pemb-carousel-arrow previous" type="button" onClick={() => goTo(page - 1)} aria-label="Previous fabrication capability page">‹</button>
        <div className="pemb-carousel-viewport" aria-live="polite">
          <div className={`pemb-capability-grid fabrication-capability-grid page-${page + 1}`} key={page}>
            {slides[page].map((item) => <article key={item}><span aria-hidden="true" /><h3>{item}</h3></article>)}
          </div>
        </div>
        <button className="pemb-carousel-arrow next" type="button" onClick={() => goTo(page + 1)} aria-label="Next fabrication capability page">›</button>
        <div className="pemb-carousel-dots" aria-label="Fabrication capability pages">
          {slides.map((_, index) => <button key={index} type="button" className={index === page ? "active" : ""} onClick={() => goTo(index)} aria-label={`Show fabrication capability page ${index + 1}`} aria-current={index === page ? "true" : undefined} />)}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

type StrengthItem = {
  title: string;
};

const slides: StrengthItem[][] = [
  [
    { title: "Technical Support by Megasteel PEB Building Manufacturer" },
    { title: "Structural & Detail Design of Pre-Engineered Steel Structure" },
    { title: "Optimization & Scheme Analysis on Pre-Engineered Steel Frame" },
    { title: "High-Quality Pre-Engineered Building Systems Manufacturing" },
  ],
  [
    { title: "Structural & Detail Design of Pre-Engineered Steel Structure" },
    { title: "Packaging & Transportation" },
    { title: "High-Quality Pre-Engineered Building Systems Manufacturing" },
    { title: "Project Management & Construction" },
  ],
  [
    { title: "Packaging & Transportation" },
    { title: "After-Sales Service" },
    { title: "Project Management & Construction" },
  ],
];

export function PembStrengthCarousel() {
  const [page, setPage] = useState(0);
  const goTo = (next: number) => setPage((next + slides.length) % slides.length);

  return (
    <section className="pemb-strength-section">
      <header className="pemb-strength-heading">
        <span aria-hidden="true">01</span>
        <h2>Why Choose Megasteel as Your PEMB Supplier</h2>
      </header>
      <div className="wide-container pemb-carousel-shell">
        <button className="pemb-carousel-arrow previous" type="button" onClick={() => goTo(page - 1)} aria-label="Previous capability page">‹</button>
        <div className="pemb-carousel-viewport" aria-live="polite">
          <div className={`pemb-capability-grid page-${page + 1}`} key={page}>
            {slides[page].map((item) => <article key={item.title}><span aria-hidden="true" /><h3>{item.title}</h3></article>)}
          </div>
        </div>
        <button className="pemb-carousel-arrow next" type="button" onClick={() => goTo(page + 1)} aria-label="Next capability page">›</button>
        <div className="pemb-carousel-dots" aria-label="Capability pages">
          {slides.map((_, index) => <button key={index} type="button" className={index === page ? "active" : ""} onClick={() => goTo(index)} aria-label={`Show capability page ${index + 1}`} aria-current={index === page ? "true" : undefined} />)}
        </div>
      </div>
    </section>
  );
}

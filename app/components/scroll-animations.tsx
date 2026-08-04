"use client";

import { useEffect } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

const revealPlan: Array<{ selector: string; direction: RevealDirection; stagger?: number }> = [
  { selector: ".solutions .section-title, .solutions .section-intro", direction: "up", stagger: 90 },
  { selector: ".product-row:not(.reverse) .ring-image", direction: "left" },
  { selector: ".product-row:not(.reverse) .product-copy", direction: "right" },
  { selector: ".product-row.reverse .ring-image", direction: "right" },
  { selector: ".product-row.reverse .product-copy", direction: "left" },
  { selector: ".business-heading", direction: "down" },
  { selector: ".business-columns article", direction: "up", stagger: 90 },
  { selector: ".projects .section-title, .projects .section-intro", direction: "up", stagger: 90 },
  { selector: ".about .section-title, .about .about-intro", direction: "up", stagger: 90 },
  { selector: ".statistics > div", direction: "left", stagger: 100 },
  { selector: ".about-pill", direction: "right" },
  { selector: ".client-network-heading .section-title, .client-network-heading .section-intro", direction: "up", stagger: 90 },
  { selector: ".client-map", direction: "scale" },
  { selector: ".contact-cta .cta-card", direction: "up" },
  { selector: ".business-detail-intro > .wide-container > p", direction: "up" },
  { selector: ".business-detail-metrics > div", direction: "up", stagger: 90 },
  { selector: ".business-detail-heading", direction: "up" },
  { selector: ".business-strength-grid article", direction: "up", stagger: 85 },
  { selector: ".business-case-grid article", direction: "up", stagger: 110 },
  { selector: ".business-quote-grid blockquote", direction: "up", stagger: 140 },
  { selector: ".business-process-list article", direction: "left", stagger: 80 },
  { selector: ".business-faq-list details", direction: "right", stagger: 70 },
  { selector: ".pemb-strength-heading", direction: "up" },
  { selector: ".pemb-capability-grid article", direction: "up", stagger: 90 },
  { selector: ".pemb-testimonial-heading", direction: "up" },
  { selector: ".pemb-testimonial-card", direction: "up", stagger: 120 },
  { selector: ".pemb-seo-heading", direction: "up" },
  { selector: ".pemb-seo-intro", direction: "up" },
  { selector: ".pemb-comparison-table", direction: "scale" },
  { selector: ".pemb-application-grid article", direction: "up", stagger: 90 },
  { selector: ".pemb-cost-grid article", direction: "left", stagger: 90 },
  { selector: ".pemb-selection-note", direction: "up" },
  { selector: ".fabrication-process-grid li", direction: "up", stagger: 85 },
  { selector: ".fabrication-quality-grid article", direction: "up", stagger: 85 },
  { selector: ".fabrication-checklist-table", direction: "scale" },
  { selector: ".epc-faq-heading", direction: "up" },
  { selector: ".epc-faq-static-list article", direction: "up", stagger: 80 },
  { selector: ".bipv-strength-list article", direction: "up", stagger: 90 },
  { selector: ".bipv-seo-heading, .bipv-subheading", direction: "up", stagger: 90 },
  { selector: ".bipv-integration-grid article, .bipv-solution-grid article, .bipv-cost-grid article", direction: "up", stagger: 75 },
  { selector: ".bipv-process-list li", direction: "left", stagger: 75 },
  { selector: ".bipv-selection-note", direction: "up" },
  { selector: ".product-system-heading", direction: "up" },
  { selector: ".product-choice-list article:not(.reverse) .product-choice-image", direction: "left" },
  { selector: ".product-choice-list article:not(.reverse) .product-choice-copy", direction: "right" },
  { selector: ".product-choice-list article.reverse .product-choice-image", direction: "right" },
  { selector: ".product-choice-list article.reverse .product-choice-copy", direction: "left" },
  { selector: ".product-use-grid article", direction: "up", stagger: 90 },
  { selector: ".enclosure-uses-heading .product-system-heading", direction: "up" },
  { selector: ".enclosure-use-card", direction: "up", stagger: 95 },
  { selector: ".enclosure-advantage-grid .enclosure-advantage-card", direction: "up", stagger: 105 },
  { selector: ".enclosure-protection-header .product-system-heading", direction: "up" },
  { selector: ".enclosure-protection-image", direction: "left" },
  { selector: ".enclosure-protection-list article", direction: "right", stagger: 80 },
  { selector: ".enclosure-testimonials-header .product-system-heading", direction: "up" },
  { selector: ".enclosure-testimonial-list blockquote", direction: "up", stagger: 110 },
  { selector: ".product-advantage-grid article", direction: "up", stagger: 120 },
  { selector: ".product-protection-image", direction: "left" },
  { selector: ".product-protection-list article", direction: "right", stagger: 80 },
  { selector: ".product-testimonial-list blockquote", direction: "up", stagger: 110 },
  { selector: ".epc-contact-copy", direction: "left" },
  { selector: ".epc-contact-form", direction: "right" },
  { selector: ".company-profile-hero-copy", direction: "up" },
  { selector: ".company-profile-heading", direction: "up" },
  { selector: ".company-profile-grid article", direction: "up", stagger: 95 },
  { selector: ".company-certificate-grid article", direction: "up", stagger: 85 },
  { selector: ".company-strategic-grid", direction: "up" },
  { selector: ".company-market-heading", direction: "up" },
  { selector: ".company-market-stats article", direction: "up", stagger: 80 },
  { selector: ".footer-grid > *", direction: "up", stagger: 90 },
  { selector: ".copyright > *", direction: "left", stagger: 90 },
];

export function ScrollAnimations() {
  useEffect(() => {
    const elements = new Set<HTMLElement>();

    revealPlan.forEach(({ selector, direction, stagger = 0 }) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        if (elements.has(element)) return;
        elements.add(element);
        element.classList.add("reveal-ready", `reveal-${direction}`);
        element.style.setProperty("--reveal-delay", `${index * stagger}ms`);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-revealed", entry.isIntersecting);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}

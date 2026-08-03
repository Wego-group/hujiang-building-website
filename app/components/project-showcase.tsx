"use client";

import { useEffect, useRef, useState } from "react";

const projectItems = [
  { name: "Suzhou Adidas Project - X", image: "/images/project-adidas.webp" },
  { name: "EMAG, China", image: "/images/project-emag.webp" },
  { name: "Areva Research and Development Building and Restaurant Project", image: "/images/project-areva.webp" },
  { name: "ESR Nanning Xinrong Zhonglang Project", image: "/images/project-esr.webp" },
];

export function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const showProject = (index: number) => {
    setActive((index + projectItems.length) % projectItems.length);
  };

  const project = projectItems[active];

  return (
    <div ref={rootRef} className={`project-showcase ${isVisible ? "is-visible" : ""}`}>
      <div className="project-pill">
        <div className="project-inner project-swap" key={project.name}>
          <h3>{project.name}</h3>
          <img src={project.image} alt={project.name} />
        </div>
      </div>

      <div className="project-dots" aria-label="Project position">
        {projectItems.map((item, index) => (
          <button
            type="button"
            className={index === active ? "active" : ""}
            aria-label={`Show ${item.name}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => showProject(index)}
            key={item.name}
          />
        ))}
      </div>

      <div className="project-list">
        {projectItems.map((item, index) => (
          <button
            type="button"
            className={index === active ? "active" : ""}
            onClick={() => showProject(index)}
            key={item.name}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="project-arrows">
        <button type="button" aria-label="Previous project" onClick={() => showProject(active - 1)}><span className="project-arrow-icon up" aria-hidden="true" /></button>
        <button type="button" aria-label="Next project" onClick={() => showProject(active + 1)}><span className="project-arrow-icon down" aria-hidden="true" /></button>
      </div>
    </div>
  );
}

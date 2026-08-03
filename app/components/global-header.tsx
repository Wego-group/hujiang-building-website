"use client";

import { useEffect, useState } from "react";

type ActiveSection = "home" | "business" | "products" | "projects" | "about" | "blog" | "contact";

const navigation = [
  { label: "Home", href: "/", key: "home" as const },
  {
    label: "Business", href: "/business/epc-contractor", key: "business" as const,
    intro: "Integrated project delivery from concept to completion.",
    children: [
      ["EPC Contractor", "/business/epc-contractor", "Engineering · Procurement · Construction"],
      ["Pre-Engineered Metal Building", "/business/pre-engineered-metal-building", "Fast, precise industrial building systems"],
      ["Steel Structure Fabrication", "/business/steel-structure-fabrication", "High-capacity digital fabrication"],
      ["Megasky Curtain Wall", "/business/building-envelope", "Curtain wall design, engineering and installation"],
      ["Mega-BIPV", "/business/bipv", "BIPV roofing and building-integrated photovoltaic systems"],
    ],
  },
  {
    label: "Products", href: "/products", key: "products" as const,
    intro: "Engineered systems for resilient industrial architecture.",
    children: [
      ["Steel Structure System", "/products/steel-structure-system", "Frames, trusses and multi-storey systems"],
      ["Building Enclosure System", "/products/building-enclosure-system", "Roof and wall envelope solutions"],
    ],
  },
  {
    label: "About Us", href: "/about", key: "about" as const,
    intro: "Engineering culture, manufacturing strength and global service.",
    children: [
      ["Company Profile", "/about", "Who we are and how we work"],
      ["Video Centre", "/about/video", "Factories, teams and project stories"],
      ["Company Catalogue", "/about/catalog", "Capabilities and system portfolio"],
    ],
  },
  { label: "NEWS", href: "/blog", key: "blog" as const },
  { label: "Contact Us", href: "/contact", key: "contact" as const },
];

export function MegaSteelWordmark() {
  return <span className="megasteel-wordmark" aria-label="Megasteel"><b>MEGA</b><em>STEEL</em></span>;
}

export function GlobalHeader({ active = "home" }: { active?: ActiveSection }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frame = 0;

    setCollapsed(lastScrollY > 80);

    const updateHeader = () => {
      frame = 0;
      const nextScrollY = window.scrollY;

      if (nextScrollY < 45) {
        setCollapsed(false);
      } else if (nextScrollY > lastScrollY + 2) {
        setCollapsed(true);
      } else if (nextScrollY < lastScrollY - 2) {
        setCollapsed(false);
      }

      lastScrollY = nextScrollY;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateHeader);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <header className={`reference-header ${collapsed ? "header-collapsed" : ""}`}>
        <div className="header-green">
          <div className="wide-container header-info">
            <a className="logo-box" href="/" aria-label="Megasteel home"><MegaSteelWordmark /></a>
            <div className="info-links">
              <a href="tel:+864008888888"><i>☎</i> +86 400 888 8888</a>
              <a href="mailto:contact@example.com"><i>✉</i> contact@example.com</a>
              <span className="info-line" />
              <a className="language-link" href="/contact"><span>English</span><i className="language-chevron" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <nav className="main-navigation" aria-label="Primary navigation">
          <div className="wide-container nav-inner">
            <div className="nav-space" />
            {navigation.map((item) => (
              <div className={`nav-item ${item.children ? "has-dropdown" : ""}`} key={item.label}>
                <a className={active === item.key ? "current" : ""} href={item.href}>{item.label}{item.children && <span className="nav-chevron">⌄</span>}</a>
                {item.children && (
                  <div className="mega-dropdown">
                    <div className="dropdown-intro"><small>{item.label.toUpperCase()}</small><h3>{item.intro}</h3></div>
                    <div className="dropdown-links">
                      {item.children.map(([label, href, detail], index) => (
                        <a href={href} key={href}><b>{String(index + 1).padStart(2, "0")}</b><span><strong>{label}</strong><small>{detail}</small></span><i>↗</i></a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a className="search-dot" href="/blog" aria-label="Search"><span className="search-icon" aria-hidden="true" /></a>
          </div>
        </nav>
      </header>

      <header className="mobile-header">
        <a href="/" aria-label="Megasteel home"><MegaSteelWordmark /></a>
        <details className="mobile-menu">
          <summary>☰</summary>
          <nav>
            {navigation.map((item) => item.children ? (
              <details key={item.label}><summary>{item.label}<span>＋</span></summary>{item.children.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</details>
            ) : <a href={item.href} key={item.label}>{item.label}</a>)}
          </nav>
        </details>
      </header>
    </>
  );
}

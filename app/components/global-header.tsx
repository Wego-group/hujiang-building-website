"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LanguageSwitcher } from "./language-switcher";

type ActiveSection = "home" | "business" | "products" | "projects" | "about" | "blog" | "contact";

const navigation = [
  { label: "Home", href: "/", key: "home" as const },
  {
    label: "Business",
    href: "/business/epc-contractor",
    key: "business" as const,
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
    label: "Products",
    href: "/products/steel-structure-system",
    key: "products" as const,
    intro: "Engineered systems for resilient industrial architecture.",
    children: [
      ["Steel Structure System", "/products/steel-structure-system", "Frames, trusses and multi-storey systems"],
      ["Building Enclosure System", "/products/building-enclosure-system-in-architecture", "Roof and wall envelope solutions"],
    ],
  },
  { label: "About Us", href: "/company-profile", key: "about" as const },
  { label: "News", href: "/blog", key: "blog" as const },
  { label: "Contact Us", href: "/contact", key: "contact" as const },
];

export function MegaSteelWordmark() {
  return (
    <span className="megasteel-wordmark" aria-label="Megasteel">
      <b>MEGA</b>
      <em>STEEL</em>
    </span>
  );
}

export function GlobalHeader({ active = "home" }: { active?: ActiveSection }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frame = 0;

    const initialFrame = window.requestAnimationFrame(() => setCollapsed(lastScrollY > 80));

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
      window.cancelAnimationFrame(initialFrame);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <header className={`reference-header ${collapsed ? "header-collapsed" : ""}`}>
        <div className="header-green">
          <div className="wide-container header-info">
            <div className="info-links">
              <a href="tel:+8619553105520">
                <i aria-hidden="true">☎</i>
                0086-19553105520 (WHATSAPP/WECHAT)
              </a>
              <a href="mailto:sales@chinamegasteel.com">
                <i aria-hidden="true">✉</i>
                sales@chinamegasteel.com
              </a>
              <span className="info-line" />
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <nav className="main-navigation" aria-label="Primary navigation">
          <div className="wide-container nav-inner">
            <Link className="logo-inline" href="/" aria-label="Megasteel home">
              <MegaSteelWordmark />
            </Link>

            {navigation.map((item) => (
              <div className={`nav-item ${item.children ? "has-dropdown" : ""}`} key={item.label}>
                <Link className={active === item.key ? "current" : ""} href={item.href}>
                  {item.label}
                  {item.children && <span className="nav-chevron">⌄</span>}
                </Link>

                {item.children && (
                  <div className="mega-dropdown">
                    <div className="dropdown-intro">
                      <small>{item.label.toUpperCase()}</small>
                      <h3>{item.intro}</h3>
                    </div>

                    <div className="dropdown-links">
                      {item.children.map(([label, href, detail], index) => (
                        <Link href={href} key={href}>
                          <b>{String(index + 1).padStart(2, "0")}</b>
                          <span>
                            <strong>{label}</strong>
                            <small>{detail}</small>
                          </span>
                          <i>→</i>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </header>

      <header className="mobile-header">
        <Link href="/" aria-label="Megasteel home">
          <MegaSteelWordmark />
        </Link>
        <details className="mobile-menu">
          <summary>☰</summary>
          <nav>
            {navigation.map((item) =>
              item.children ? (
                <details key={item.label}>
                  <summary>
                    {item.label}
                    <span>⌄</span>
                  </summary>
                  {item.children.map(([label, href]) => (
                    <Link href={href} key={href}>
                      {label}
                    </Link>
                  ))}
                </details>
              ) : (
                <Link href={item.href} key={item.label}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </details>
      </header>
    </>
  );
}

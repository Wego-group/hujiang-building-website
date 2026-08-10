import Link from "next/link";
import { GlobalHeader } from "./global-header";
import { ScrollAnimations } from "./scroll-animations";
import { StructuredData } from "./structured-data";
import { SITE_NAME, SITE_URL } from "../seo";

export type LocalizedLandingContent = {
  locale: "zh-CN" | "es" | "ru";
  path: "/zh" | "/es" | "/ru";
  title: string;
  description: string;
  eyebrow: string;
  servicesTitle: string;
  serviceLabel: string;
  services: { title: string; description: string; href: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  copyright: string;
};

export const localizedLandings: Record<"zh" | "es" | "ru", LocalizedLandingContent> = {
  zh: {
    locale: "zh-CN", path: "/zh", title: "麦格钢构：工业钢结构建筑与 EPC 解决方案",
    description: "麦格钢构提供工业钢结构建筑、EPC 总承包、预制金属建筑、钢结构加工、建筑围护和 BIPV 光伏一体化解决方案。",
    eyebrow: "工业建筑一体化解决方案", servicesTitle: "为工业项目提供一体化交付", serviceLabel: "核心服务",
    services: [
      { title: "EPC 总承包", description: "统筹工程设计、采购、施工与交付，为工业和物流设施建立单一责任窗口。", href: "/business/epc-contractor" },
      { title: "预制金属建筑", description: "面向厂房、仓库和物流园的高效 PEMB 建筑系统，兼顾结构、安全与施工效率。", href: "/business/pre-engineered-metal-building" },
      { title: "钢结构与围护系统", description: "协调钢结构加工、屋面、幕墙与建筑围护，形成耐久、高性能的工业建筑。", href: "/products/steel-structure-system" },
    ],
    ctaTitle: "准备开始您的工业建筑项目？", ctaText: "告诉我们您的项目需求，我们的团队将协助您规划工程、采购与施工的下一步。", ctaLabel: "联系我们", copyright: "工业建筑一体化解决方案。",
  },
  es: {
    locale: "es", path: "/es", title: "Megasteel: soluciones EPC y edificios industriales de acero",
    description: "Megasteel ofrece soluciones para edificios industriales de acero: contratación EPC, edificios metálicos prefabricados, fabricación, envolventes y BIPV.",
    eyebrow: "Soluciones integradas para construcción industrial", servicesTitle: "Entrega integrada para proyectos industriales", serviceLabel: "Servicios principales",
    services: [
      { title: "Contratación EPC", description: "Coordinamos ingeniería, compras, construcción y entrega con un único punto de responsabilidad.", href: "/business/epc-contractor" },
      { title: "Edificios metálicos prefabricados", description: "Sistemas PEMB eficientes para fábricas, almacenes y parques logísticos.", href: "/business/pre-engineered-metal-building" },
      { title: "Estructura y envolvente", description: "Fabricación de acero, cubiertas y envolventes coordinadas para edificios industriales durables.", href: "/products/steel-structure-system" },
    ],
    ctaTitle: "¿Listo para su próximo proyecto industrial?", ctaText: "Comparta sus requisitos y nuestro equipo le ayudará a definir los próximos pasos de ingeniería, compras y construcción.", ctaLabel: "Contáctenos", copyright: "Soluciones integradas de construcción industrial.",
  },
  ru: {
    locale: "ru", path: "/ru", title: "Megasteel: EPC и стальные конструкции для промышленных зданий",
    description: "Megasteel предлагает EPC-подряд, быстровозводимые металлические здания, изготовление стальных конструкций, ограждающие системы и BIPV.",
    eyebrow: "Комплексные решения для промышленного строительства", servicesTitle: "Комплексная реализация промышленных проектов", serviceLabel: "Основные услуги",
    services: [
      { title: "EPC-подряд", description: "Координируем проектирование, закупки, строительство и сдачу объекта с единой ответственностью.", href: "/business/epc-contractor" },
      { title: "Быстровозводимые здания", description: "Эффективные PEMB-системы для заводов, складов и логистических парков.", href: "/business/pre-engineered-metal-building" },
      { title: "Стальные конструкции и оболочка", description: "Согласовываем изготовление стали, кровлю и ограждающие системы для долговечных зданий.", href: "/products/steel-structure-system" },
    ],
    ctaTitle: "Готовы начать промышленный проект?", ctaText: "Расскажите о ваших требованиях — команда Megasteel поможет определить следующие шаги по проектированию, закупкам и строительству.", ctaLabel: "Связаться с нами", copyright: "Комплексные решения для промышленного строительства.",
  },
};

export function LocalizedLanding({ content }: { content: LocalizedLandingContent }) {
  const pageUrl = `${SITE_URL}${content.path}`;
  return <main lang={content.locale} className="localized-landing">
    <StructuredData data={{ "@context": "https://schema.org", "@type": "WebPage", name: content.title, description: content.description, url: pageUrl, inLanguage: content.locale, isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#organization` } }} />
    <GlobalHeader active="home" />
    <ScrollAnimations />
    <section className="reference-hero localized-hero" aria-labelledby="localized-title">
      <img src="/images/hero.png" alt="Industrial steel building by Megasteel" />
      <div className="reference-hero__shade" />
      <div className="site-shell hero-copy reveal-on-scroll"><p className="localized-eyebrow">{content.eyebrow}</p><h1 id="localized-title">{content.title}</h1><p>{content.description}</p><Link href="/contact" className="pill-button">{content.ctaLabel}<span aria-hidden="true">↗</span></Link></div>
    </section>
    <section className="section localized-services-section" aria-labelledby="localized-services-title"><div className="site-shell">
      <div className="section-title reveal-on-scroll"><span>01</span><p>{content.serviceLabel}</p><h2 id="localized-services-title">{content.servicesTitle}</h2></div>
      <div className="localized-services">{content.services.map((service, index) => <article className="localized-service-card reveal-on-scroll" key={service.title}><b>{String(index + 1).padStart(2, "0")}</b><h2>{service.title}</h2><p>{service.description}</p><Link href={service.href}>Megasteel <span aria-hidden="true">→</span></Link></article>)}</div>
    </div></section>
    <section className="localized-contact-cta" aria-label={content.ctaTitle}><div className="site-shell"><div className="cta-band reveal-on-scroll"><div><h2>{content.ctaTitle}</h2><p>{content.ctaText}</p></div><Link href="/contact" className="pill-button pill-button--light">{content.ctaLabel}<span aria-hidden="true">↗</span></Link></div></div></section>
    <footer className="localized-footer"><div className="site-shell">© {new Date().getFullYear()} {SITE_NAME}. {content.copyright}</div></footer>
  </main>;
}

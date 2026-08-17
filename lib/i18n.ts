export const locales = ["en", "zh", "es", "fr", "de", "pt", "ru", "ar", "ja", "ko", "it", "tr"] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { label: string; htmlLang: string; ogLocale: string; dir?: "rtl" }> = {
  en: { label: "English", htmlLang: "en", ogLocale: "en_US" },
  zh: { label: "简体中文", htmlLang: "zh-CN", ogLocale: "zh_CN" },
  es: { label: "Español", htmlLang: "es", ogLocale: "es_ES" },
  fr: { label: "Français", htmlLang: "fr", ogLocale: "fr_FR" },
  de: { label: "Deutsch", htmlLang: "de", ogLocale: "de_DE" },
  pt: { label: "Português", htmlLang: "pt", ogLocale: "pt_PT" },
  ru: { label: "Русский", htmlLang: "ru", ogLocale: "ru_RU" },
  ar: { label: "العربية", htmlLang: "ar", ogLocale: "ar", dir: "rtl" },
  ja: { label: "日本語", htmlLang: "ja", ogLocale: "ja_JP" },
  ko: { label: "한국어", htmlLang: "ko", ogLocale: "ko_KR" },
  it: { label: "Italiano", htmlLang: "it", ogLocale: "it_IT" },
  tr: { label: "Türkçe", htmlLang: "tr", ogLocale: "tr_TR" },
};

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return isLocale(first) && first !== "en" ? first : "en";
}

export function localePath(locale: Locale, pathname = "/") {
  const suffix = pathname === "/" ? "" : pathname.startsWith("/") ? pathname : `/${pathname}`;
  return locale === "en" ? (suffix || "/") : `/${locale}${suffix}`;
}

export function withoutLocalePrefix(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (isLocale(parts[0]) && parts[0] !== "en") parts.shift();
  return `/${parts.join("/")}`.replace(/\/$/, "") || "/";
}

const ui = {
  en: ["Home", "Business", "Products", "About Us", "News", "Contact Us", "English"],
  zh: ["首页", "业务领域", "产品系统", "关于我们", "新闻中心", "联系我们", "简体中文"],
  es: ["Inicio", "Servicios", "Productos", "Nosotros", "Noticias", "Contáctenos", "Español"],
  fr: ["Accueil", "Services", "Produits", "À propos", "Actualités", "Contact", "Français"],
  de: ["Startseite", "Leistungen", "Produkte", "Über uns", "News", "Kontakt", "Deutsch"],
  pt: ["Início", "Serviços", "Produtos", "Sobre nós", "Notícias", "Contato", "Português"],
  ru: ["Главная", "Услуги", "Продукты", "О компании", "Новости", "Контакты", "Русский"],
  ar: ["الرئيسية", "الخدمات", "المنتجات", "من نحن", "الأخبار", "اتصل بنا", "العربية"],
  ja: ["ホーム", "事業", "製品", "会社案内", "ニュース", "お問い合わせ", "日本語"],
  ko: ["홈", "사업", "제품", "회사 소개", "뉴스", "문의하기", "한국어"],
  it: ["Home", "Servizi", "Prodotti", "Chi siamo", "Notizie", "Contatti", "Italiano"],
  tr: ["Ana Sayfa", "Hizmetler", "Ürünler", "Hakkımızda", "Haberler", "İletişim", "Türkçe"],
} as const;

export function navigationLabels(locale: Locale) {
  const [home, business, products, about, news, contact, language] = ui[locale];
  return { home, business, products, about, news, contact, language };
}

const seoCopy: Record<Locale, { title: string; description: string }> = {
  en: { title: "Megasteel | Industrial Steel Building & EPC Solutions", description: "Integrated industrial steel building, EPC, fabrication, envelope and BIPV solutions." },
  zh: { title: "麦格钢构｜工业钢结构建筑与 EPC 解决方案", description: "提供工业钢结构建筑、EPC 总承包、制造、围护系统与 BIPV 一体化解决方案。" },
  es: { title: "Megasteel | Edificios industriales de acero y EPC", description: "Soluciones integradas de edificios de acero, EPC, fabricación, envolventes y BIPV." },
  fr: { title: "Megasteel | Bâtiments industriels en acier et EPC", description: "Solutions intégrées de construction acier, EPC, fabrication, enveloppe et BIPV." },
  de: { title: "Megasteel | Industriebauten aus Stahl und EPC", description: "Integrierte Lösungen für Stahlbau, EPC, Fertigung, Gebäudehülle und BIPV." },
  pt: { title: "Megasteel | Edifícios industriais em aço e EPC", description: "Soluções integradas para aço, EPC, fabricação, envoltórias e BIPV." },
  ru: { title: "Megasteel | Промышленные стальные здания и EPC", description: "Комплексные решения для стальных зданий, EPC, производства, оболочек и BIPV." },
  ar: { title: "Megasteel | مباني فولاذية صناعية وحلول EPC", description: "حلول متكاملة للمباني الفولاذية الصناعية وEPC والتصنيع والواجهات وأنظمة BIPV." },
  ja: { title: "Megasteel | 産業用鉄骨建築・EPCソリューション", description: "産業用鉄骨建築、EPC、製造、外装、BIPVの統合ソリューション。" },
  ko: { title: "Megasteel | 산업용 철골 건축 및 EPC 솔루션", description: "산업용 철골 건축, EPC, 제작, 외피 시스템 및 BIPV 통합 솔루션." },
  it: { title: "Megasteel | Edifici industriali in acciaio ed EPC", description: "Soluzioni integrate per acciaio, EPC, fabbricazione, involucro edilizio e BIPV." },
  tr: { title: "Megasteel | Endüstriyel çelik yapılar ve EPC", description: "Çelik yapı, EPC, imalat, yapı kabuğu ve BIPV için entegre çözümler." },
};

export function localizedSeo(locale: Locale, fallbackTitle: string, fallbackDescription: string) {
  if (locale === "en") return { title: fallbackTitle, description: fallbackDescription };
  if (fallbackTitle && fallbackTitle.length > 20) {
    return { title: fallbackTitle, description: fallbackDescription || seoCopy[locale].description };
  }
  return seoCopy[locale];
}

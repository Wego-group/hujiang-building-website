"use client";

import { useEffect, useRef, useState } from "react";

const languages = [
  ["en", "English"], ["zh-CN", "简体中文"], ["es", "Español"], ["fr", "Français"],
  ["de", "Deutsch"], ["pt", "Português"], ["ru", "Русский"], ["ar", "العربية"],
  ["ja", "日本語"], ["ko", "한국어"], ["it", "Italiano"], ["tr", "Türkçe"],
] as const;

// Priority language markets use their own indexable URLs. Other choices remain
// available through the on-page translator until native page copy is prepared.
const indexedLocaleRoutes: Record<string, string> = { en: "/", "zh-CN": "/zh", es: "/es", ru: "/ru" };

declare global {
  interface Window {
    google?: { translate?: { TranslateElement: new (options: Record<string, unknown>, id: string) => void } };
    googleTranslateElementInit?: () => void;
  }
}

function readCurrentLanguage() {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|; )googtrans=\/en\/([^;]+)/);
  return match?.[1] || window.localStorage.getItem("megasteel-language") || "en";
}

function setTranslationCookie(language: string) {
  const value = language === "en" ? "/en/en" : `/en/${language}`;
  document.cookie = `googtrans=${value};path=/;max-age=31536000;SameSite=Lax`;
  if (window.location.hostname.includes(".")) document.cookie = `googtrans=${value};path=/;domain=.${window.location.hostname};max-age=31536000;SameSite=Lax`;
}

function updateDocumentLanguage(language: string) {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
}

export function LanguageSwitcher() {
  const [current, setCurrent] = useState("en");
  const [open, setOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedLanguage = readCurrentLanguage();
    updateDocumentLanguage(storedLanguage);
    const frame = window.requestAnimationFrame(() => setCurrent(storedLanguage));
    if (document.getElementById("google-translate-loader")) return () => window.cancelAnimationFrame(frame);
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      new window.google.translate.TranslateElement({ pageLanguage: "en", includedLanguages: languages.map(([code]) => code).filter((code) => code !== "en").join(","), autoDisplay: false }, "google_translate_element");
    };
    const script = document.createElement("script");
    script.id = "google-translate-loader";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => { if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) setOpen(false); };
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => { document.removeEventListener("mousedown", closeOnOutsideClick); document.removeEventListener("keydown", closeOnEscape); };
  }, []);

  const changeLanguage = (language: string) => {
    setCurrent(language);
    window.localStorage.setItem("megasteel-language", language);
    setTranslationCookie(language);
    updateDocumentLanguage(language);
    const indexedRoute = indexedLocaleRoutes[language];
    if (indexedRoute && window.location.pathname !== indexedRoute) { window.location.assign(indexedRoute); return; }
    const googleSelect = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (googleSelect && language !== "en") { googleSelect.value = language; googleSelect.dispatchEvent(new Event("change")); return; }
    window.location.reload();
  };

  const currentLabel = languages.find(([code]) => code === current)?.[1] ?? "English";
  return <div className="language-switcher notranslate" ref={switcherRef} translate="no">
    <button className="language-trigger" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-haspopup="menu" aria-controls="site-language-menu"><span>{currentLabel}</span><i className="language-chevron" aria-hidden="true" /></button>
    {open && <div className="language-menu" id="site-language-menu" role="menu" aria-label="Select website language">
      {languages.map(([code, label]) => <button type="button" role="menuitemradio" aria-checked={current === code} className={current === code ? "active" : ""} key={code} onClick={() => { changeLanguage(code); setOpen(false); }}>{label}</button>)}
    </div>}
    <div id="google_translate_element" aria-hidden="true" />
  </div>;
}

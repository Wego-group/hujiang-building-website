"use client";

import { useEffect, useState } from "react";

const languages = [
  ["en", "English"],
  ["zh-CN", "简体中文"],
  ["es", "Español"],
  ["fr", "Français"],
  ["de", "Deutsch"],
  ["pt", "Português"],
  ["ru", "Русский"],
  ["ar", "العربية"],
  ["ja", "日本語"],
  ["ko", "한국어"],
  ["it", "Italiano"],
  ["tr", "Türkçe"],
] as const;

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (options: Record<string, unknown>, id: string) => void;
      };
    };
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
  if (window.location.hostname.includes(".")) {
    document.cookie = `googtrans=${value};path=/;domain=.${window.location.hostname};max-age=31536000;SameSite=Lax`;
  }
}

function updateDocumentLanguage(language: string) {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
}

export function LanguageSwitcher() {
  const [current, setCurrent] = useState("en");

  useEffect(() => {
    const storedLanguage = readCurrentLanguage();
    updateDocumentLanguage(storedLanguage);
    const frame = window.requestAnimationFrame(() => setCurrent(storedLanguage));

    if (document.getElementById("google-translate-loader")) {
      return () => window.cancelAnimationFrame(frame);
    }
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: languages.map(([code]) => code).filter((code) => code !== "en").join(","),
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };
    const script = document.createElement("script");
    script.id = "google-translate-loader";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const changeLanguage = (language: string) => {
    setCurrent(language);
    window.localStorage.setItem("megasteel-language", language);
    setTranslationCookie(language);
    updateDocumentLanguage(language);

    const googleSelect = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (googleSelect && language !== "en") {
      googleSelect.value = language;
      googleSelect.dispatchEvent(new Event("change"));
      return;
    }
    window.location.reload();
  };

  return (
    <div className="language-switcher notranslate" translate="no">
      <label className="sr-only" htmlFor="site-language">Select language</label>
      <select id="site-language" value={current} onChange={(event) => changeLanguage(event.target.value)} aria-label="Select website language">
        {languages.map(([code, label]) => <option value={code} key={code}>{label}</option>)}
      </select>
      <i className="language-chevron" aria-hidden="true" />
      <div id="google_translate_element" aria-hidden="true" />
    </div>
  );
}

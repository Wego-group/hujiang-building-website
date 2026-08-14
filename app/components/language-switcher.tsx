"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { localeFromPathname, localeMeta, localePath, locales, withoutLocalePrefix } from "../../lib/i18n";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const current = localeFromPathname(pathname);
  const [open, setOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => { if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) setOpen(false); };
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => { document.removeEventListener("mousedown", closeOnOutsideClick); document.removeEventListener("keydown", closeOnEscape); };
  }, []);

  const changeLanguage = (language: typeof locales[number]) => {
    window.location.assign(localePath(language, withoutLocalePrefix(pathname)));
  };

  const currentLabel = localeMeta[current].label;
  return <div className="language-switcher notranslate" ref={switcherRef} translate="no">
    <button className="language-trigger" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-haspopup="menu" aria-controls="site-language-menu"><span>{currentLabel}</span><i className="language-chevron" aria-hidden="true" /></button>
    {open && <div className="language-menu" id="site-language-menu" role="menu" aria-label="Select website language">
      {locales.map((code) => <button type="button" role="menuitemradio" aria-checked={current === code} className={current === code ? "active" : ""} key={code} onClick={() => { changeLanguage(code); setOpen(false); }}>{localeMeta[code].label}</button>)}
    </div>}
  </div>;
}

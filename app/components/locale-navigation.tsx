"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { localeFromPathname, localeMeta, localePath, withoutLocalePrefix } from "../../lib/i18n";

/** Keeps every existing internal link on the visitor's selected native-language URL. */
export function LocaleNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const locale = localeFromPathname(pathname);
    document.documentElement.lang = localeMeta[locale].htmlLang;
    document.documentElement.dir = localeMeta[locale].dir ?? "ltr";
    document.documentElement.dataset.locale = locale;
    const onClick = (event: MouseEvent) => {
      if (locale === "en" || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname.startsWith("/api/")) return;
      if (localeFromPathname(url.pathname) !== "en") return;
      event.preventDefault();
      router.push(`${localePath(locale, withoutLocalePrefix(url.pathname))}${url.search}${url.hash}`);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname, router]);
  return null;
}

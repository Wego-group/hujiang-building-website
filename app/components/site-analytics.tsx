"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/** Loads GA4 only when a production Measurement ID has been configured. */
export function SiteAnalytics() {
  if (!measurementId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', '${measurementId}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}

function trackLead(method: string, label: string) {
  window.gtag?.("event", "generate_lead", {
    method,
    link_text: label.slice(0, 100),
    page_path: window.location.pathname,
  });
}

/** Captures contact-channel usage without ever sending form fields to analytics. */
export function ConversionTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("a, button") : null;
      if (!target) return;

      const href = target.getAttribute("href") || "";
      const label = target.getAttribute("data-label") || target.getAttribute("aria-label") || target.textContent?.trim() || "contact";
      if (href.startsWith("mailto:")) trackLead("email", label);
      else if (href.startsWith("tel:")) trackLead("phone", label);
      else if (href.includes("wa.me")) trackLead("whatsapp", label);
      else if (href.includes("#wechat")) trackLead("wechat", label);
    };

    const onSubmit = (event: Event) => {
      const form = event.target;
      if (form instanceof HTMLFormElement) trackLead("contact_form", form.getAttribute("aria-label") || "contact form");
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, []);

  return null;
}

/** Sends one small anonymous page-view event per route to the daily report store. */
export function TrafficTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin/")) return;
    const storageKey = "megasteel-visitor-id";
    let visitorId = window.localStorage.getItem(storageKey);
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      window.localStorage.setItem(storageKey, visitorId);
    }
    void fetch("/api/pageview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname, visitor_id: visitorId, language: document.documentElement.lang, referrer: document.referrer }),
      keepalive: true,
    }).catch(() => undefined);
  }, [pathname]);
  return null;
}

import type { Metadata } from "next";
import { LocalizedLanding, localizedLandings } from "../components/localized-landing";
import { homepageLanguageUrls, SITE_URL } from "../seo";
const content = localizedLandings.es;
export const metadata: Metadata = { title: { absolute: content.title }, description: content.description, alternates: { canonical: `${SITE_URL}/es`, languages: homepageLanguageUrls }, openGraph: { type: "website", locale: "es_ES", title: content.title, description: content.description, url: `${SITE_URL}/es`, images: ["/images/hero.png"] } };
export default function SpanishHome() { return <LocalizedLanding content={content} />; }

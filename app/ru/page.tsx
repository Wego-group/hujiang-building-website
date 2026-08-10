import type { Metadata } from "next";
import { LocalizedLanding, localizedLandings } from "../components/localized-landing";
import { homepageLanguageUrls, SITE_URL } from "../seo";
const content = localizedLandings.ru;
export const metadata: Metadata = { title: { absolute: content.title }, description: content.description, alternates: { canonical: `${SITE_URL}/ru`, languages: homepageLanguageUrls }, openGraph: { type: "website", locale: "ru_RU", title: content.title, description: content.description, url: `${SITE_URL}/ru`, images: ["/images/hero.png"] } };
export default function RussianHome() { return <LocalizedLanding content={content} />; }

import type { Metadata } from "next";
import { LocalizedLanding, localizedLandings } from "../components/localized-landing";
import { homepageLanguageUrls, SITE_URL } from "../seo";
const content = localizedLandings.zh;
export const metadata: Metadata = { title: { absolute: content.title }, description: content.description, alternates: { canonical: `${SITE_URL}/zh`, languages: homepageLanguageUrls }, openGraph: { type: "website", locale: "zh_CN", title: content.title, description: content.description, url: `${SITE_URL}/zh`, images: ["/images/hero.png"] } };
export default function ChineseHome() { return <LocalizedLanding content={content} />; }

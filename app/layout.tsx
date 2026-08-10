import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "./components/structured-data";
import { ContactRail } from "./components/contact-rail";
import { ConversionTracker, SiteAnalytics } from "./components/site-analytics";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./seo";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Megasteel | Industrial Steel Building Solutions",
    template: "%s | Megasteel",
  },
  description: "Megasteel provides integrated design, fabrication and construction solutions for industrial, logistics and commercial buildings.",
  applicationName: SITE_NAME,
  keywords: ["industrial steel buildings", "EPC contractor", "pre-engineered metal buildings", "structural steel fabrication", "curtain wall", "BIPV"],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Industrial Construction",
  formatDetection: { email: false, address: false, telephone: false },
  manifest: "/manifest.webmanifest",
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1920, height: 1080, alt: "Megasteel industrial building solutions" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SiteAnalytics />
        <ConversionTracker />
        <StructuredData data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: SITE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/images/logo-schema.svg`,
            description: "Integrated engineering, fabrication and construction solutions for industrial steel buildings.",
            foundingDate: "2007",
            address: {
              "@type": "PostalAddress",
              streetAddress: "No.1068, Chongde 7th Avenue",
              addressLocality: "Dezhou",
              addressRegion: "Shandong",
              addressCountry: "CN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+86-19553105520",
              email: "megasteelstructure@126.com",
              contactType: "sales",
              availableLanguage: ["English", "Chinese", "Spanish", "French", "German", "Portuguese", "Russian", "Arabic", "Japanese", "Korean", "Italian", "Turkish"],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: SITE_NAME,
            publisher: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "en",
          },
        ]} />
        {children}
        <ContactRail />
      </body>
    </html>
  );
}

import Link from "next/link";

export function FooterLegalLinks() {
  return (
    <nav className="footer-legal-links" aria-label="Legal links">
      <Link href="/sitemap.html">Sitemap</Link>
      <Link href="/privacy-policy.html">Privacy Policy</Link>
    </nav>
  );
}

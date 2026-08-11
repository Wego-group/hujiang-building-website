import { MegaSteelWordmark } from "./global-header";
import { FooterLegalLinks } from "./footer-legal-links";

export function SiteFooter() {
  return (
    <footer>
      <div className="wide-container footer-grid">
        <div>
          <MegaSteelWordmark />
          <p>Integrated industrial construction solutions.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="tel:+8619553105520">0086-19553105520</a>
          <a href="mailto:megasteelstructure@126.com">megasteelstructure@126.com</a>
          <address>No. 1068, Chongde 7th Avenue, Economic and Technological Development Zone, Dezhou City, Shandong Province, China</address>
        </div>
        <div>
          <h3>Business</h3>
          <a href="/business/epc-contractor">EPC Contractor</a>
          <a href="/business/pre-engineered-metal-building">Metal Buildings</a>
          <a href="/business/steel-structure-fabrication">Steel Fabrication</a>
          <a href="/business/bipv">Mega-BIPV</a>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a href="/products/steel-structure-system">Products</a>
          <a href="/company-profile">About Us</a>
          <a href="/blog">News</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="wide-container copyright">
        <span>© 2026 MEGASTEEL. All rights reserved.</span>
        <span>www.chinamegasteel.com</span>
        <FooterLegalLinks />
      </div>
    </footer>
  );
}

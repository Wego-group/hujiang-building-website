import Link from "next/link";

const phone = "8619553105520";

export function ContactRail() {
  return (
    <nav className="contact-rail notranslate" aria-label="Quick contact" translate="no">
      <a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" aria-label="Contact Megasteel on WhatsApp" data-label="WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.6 6L0 24l6.4-1.7a11.8 11.8 0 0 0 5.7 1.5h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.5-8.5Zm-8.3 18.3h-.1c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.7 9.7 0 1 1 8.5 4.7Zm5.3-7.3c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2l-1 1.2c-.2.2-.4.2-.7.1-1.7-.8-2.8-1.5-4-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.6l-.9-2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2 2.2 1 3.1 1 4.2.9.7-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.4-.3-.7-.4Z" /></svg>
      </a>
      <Link href="/contact#wechat" aria-label="WeChat contact: 19553105520" data-label="WeChat">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 3C4.3 3 0 6.5 0 10.8c0 2.5 1.4 4.6 3.6 6.1L2.7 20l3.7-1.8c1 .3 2 .5 3.1.5h.5a7.5 7.5 0 0 1-.5-2.7c0-4.1 3.8-7.5 8.7-7.5h.5C17.5 5.3 13.9 3 9.5 3Zm-3 5.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2S7.7 6.3 7.7 7s-.5 1.2-1.2 1.2Zm6.1 0c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2ZM24 16c0-3.5-3.5-6.3-7.8-6.3s-7.8 2.8-7.8 6.3 3.5 6.3 7.8 6.3c.9 0 1.8-.1 2.6-.4l3 1.5-.7-2.6C22.9 19.6 24 17.9 24 16Zm-10.3-1c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Zm5 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Z" /></svg>
      </Link>
      <a href="mailto:megasteelstructure@126.com" aria-label="Email Megasteel" data-label="Email">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm10 9L2.8 6.4 2 7.5V18h20V7.5l-.8-1.1L12 13Zm0-2.5L20.3 6H3.7l8.3 4.5Z" /></svg>
      </a>
      <Link href="/contact" aria-label="Open the Contact Us page" data-label="Contact Us">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 5h2v4h4v2h-4v4h-2v-4H7v-2h4V7Z" /></svg>
      </Link>
    </nav>
  );
}

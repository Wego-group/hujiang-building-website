"use client";

import { FormEvent, useState } from "react";

export function LeadContactForm() {
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [sending, setSending] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setSending(true); setStatus(null);
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(form)) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Please try again.");
      event.currentTarget.reset();
      setStatus({ type: "success", message: "Thank you. Your enquiry has been sent to our team." });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Please try again." });
    } finally { setSending(false); }
  }
  return <form className="epc-contact-form" onSubmit={submit}>
    <label><span>Full Name</span><input required type="text" name="name" placeholder="Full Name" /></label>
    <label><span>Phone</span><input type="tel" name="phone" placeholder="Phone" /></label>
    <label><span>Email</span><input type="email" name="email" placeholder="Email" /></label>
    <label><span>Company</span><input type="text" name="company" placeholder="Company" /></label>
    <label className="full"><span>Project Brief</span><textarea required name="message" placeholder="What can we help you build?" rows={7} /></label>
    <button type="submit" disabled={sending}>{sending ? "Sending…" : "Contact Us"} <i aria-hidden="true">→</i></button>
    {status && <p className={`epc-contact-form-status ${status.type}`} aria-live="polite">{status.message}</p>}
  </form>;
}

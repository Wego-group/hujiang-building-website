import { NextResponse } from "next/server";

export const runtime = "nodejs";

const clean = (value: unknown, limit: number) => typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, limit) : "";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid enquiry." }, { status: 400 });

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 80);
  const email = clean(body.email, 160);
  const company = clean(body.company, 160);
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 4000) : "";
  if (!name || !message || (!phone && !email)) {
    return NextResponse.json({ error: "Please provide your name, enquiry and either a phone number or email address." }, { status: 400 });
  }

  const token = process.env.WXPUSHER_SPT;
  if (!token) return NextResponse.json({ error: "Enquiry notification is not configured yet." }, { status: 503 });

  const content = [
    "<h3>New website enquiry</h3>",
    `<p><b>Name:</b> ${name}</p>`,
    phone ? `<p><b>Phone / WhatsApp:</b> ${phone}</p>` : "",
    email ? `<p><b>Email:</b> ${email}</p>` : "",
    company ? `<p><b>Company:</b> ${company}</p>` : "",
    `<p><b>Project brief:</b><br/>${message.replace(/\n/g, "<br/>")}</p>`,
  ].join("");
  const response = await fetch("https://wxpusher.zjiecode.com/api/send/message/simple-push", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ spt: token, content, contentType: 1, summary: `New Megasteel enquiry — ${name}` }),
  });
  const result = await response.json().catch(() => null) as { code?: number } | null;
  if (!response.ok || result?.code !== 1000) return NextResponse.json({ error: "Unable to deliver the enquiry notification." }, { status: 502 });
  return NextResponse.json({ ok: true });
}

import { chinaDate, clean, clearTraffic, previousChinaDate, readTraffic, trafficStoreConfigured } from "../../../lib/traffic";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value.replace(/[&<>\"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[character] || character));
}

function topEntries(values: string[], limit = 5) {
  const counts = new Map<string, number>();
  values.forEach((value) => counts.set(value || "Unknown", (counts.get(value || "Unknown") || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, limit);
}

function rows(items: [string, number][]) {
  return items.length ? `<ol>${items.map(([label, count]) => `<li>${escapeHtml(label)}: <strong>${count}</strong></li>`).join("")}</ol>` : "<p>No data</p>";
}

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET?.trim();
  if (cronSecret && request.headers.get("authorization") !== `Bearer ${cronSecret}`) return new Response("Unauthorized", { status: 401 });
  if (!trafficStoreConfigured()) return new Response("Traffic store is not configured", { status: 503 });

  const date = previousChinaDate();
  const events = await readTraffic(date);
  const pageViews = events.length;
  const visitors = new Set(events.map((event) => event.visitor_id).filter(Boolean)).size;
  const topPages = topEntries(events.map((event) => event.path));
  const topCountries = topEntries(events.map((event) => event.country));
  const topLanguages = topEntries(events.map((event) => event.language));
  const content = [
    `<h2>Megasteel Website Daily Report | ${escapeHtml(date)}</h2>`,
    `<p><strong>Page views (PV):</strong> ${pageViews}</p>`,
    `<p><strong>Unique visitors (UV):</strong> ${visitors}</p>`,
    "<hr>", "<h3>Top pages</h3>", rows(topPages),
    "<h3>Visitor countries / regions</h3>", rows(topCountries),
    "<h3>Page languages</h3>", rows(topLanguages),
    `<p style="color:#66736d">Statistics use China Standard Time. Records are deleted after successful delivery.</p>`,
  ].join("");

  const token = process.env.WXPUSHER_SPT?.trim();
  if (!token) return new Response("WXPUSHER_SPT is not configured", { status: 503 });
  const response = await fetch("https://wxpusher.zjiecode.com/api/send/message/simple-push", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      spt: token, content, contentType: 1,
      summary: `Megasteel daily report | ${date} | PV ${pageViews} | UV ${visitors}`,
      url: process.env.PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://www.chinamegasteel.com",
    }),
  });
  const result = await response.json().catch(() => null) as { code?: number } | null;
  if (!response.ok || result?.code !== 1000) return new Response("Unable to deliver daily report", { status: 502 });
  await clearTraffic(date);
  return Response.json({ ok: true, date, pageViews, visitors, generatedAt: chinaDate() });
}

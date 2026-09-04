import { chinaDate, clean, parsePageviewBody, recordTraffic, trafficStoreConfigured } from "../../../lib/traffic";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const payload = await parsePageviewBody(request) as Record<string, unknown> | null;
  const path = clean(payload?.path, 500);
  const visitorId = clean(payload?.visitor_id, 80);
  if (!payload || !path.startsWith("/") || path.startsWith("/admin/") || !visitorId) return new Response(null, { status: 204 });
  if (!trafficStoreConfigured()) return new Response(null, { status: 503 });

  await recordTraffic(chinaDate(), {
    path,
    visitor_id: visitorId,
    language: clean(payload.language, 12) || "Unknown",
    country: clean(request.headers.get("x-vercel-ip-country") || request.headers.get("x-country-code") || "Unknown", 100),
    referrer: clean(payload.referrer, 200),
    recorded_at: new Date().toISOString(),
  });
  return new Response(null, { status: 204, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" } });
}

export function GET() {
  return new Response(null, { status: 405, headers: { Allow: "POST" } });
}

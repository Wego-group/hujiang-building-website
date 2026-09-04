const MAX_BODY_BYTES = 4096;
const RETENTION_SECONDS = 172800;

function redisConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url: url.replace(/\/$/, ""), token } : null;
}

async function redis(command: unknown[]) {
  const config = redisConfig();
  if (!config) return null;
  const response = await fetch(config.url, {
    method: "POST",
    headers: { Authorization: `Bearer ${config.token}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
  });
  if (!response.ok) throw new Error(`Traffic store rejected request: ${response.status}`);
  const result = await response.json() as { result?: unknown };
  return result.result;
}

export function trafficStoreConfigured() {
  return Boolean(redisConfig());
}

export function chinaDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit",
  }).format(date);
}

export function previousChinaDate(now = new Date()) {
  return chinaDate(new Date(now.getTime() - 24 * 60 * 60 * 1000));
}

export function clean(value: unknown, maxLength: number) {
  return String(value || "").replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, maxLength);
}

export async function recordTraffic(date: string, event: Record<string, string>) {
  const key = `megasteel:traffic:${date}`;
  await redis(["LPUSH", key, JSON.stringify(event)]);
  await redis(["EXPIRE", key, RETENTION_SECONDS]);
}

export async function readTraffic(date: string) {
  const values = await redis(["LRANGE", `megasteel:traffic:${date}`, "0", "-1"]);
  return (Array.isArray(values) ? values : []).map((value) => {
    try { return JSON.parse(String(value)) as Record<string, string>; } catch { return null; }
  }).filter((event): event is Record<string, string> => Boolean(event));
}

export async function clearTraffic(date: string) {
  await redis(["DEL", `megasteel:traffic:${date}`]);
}

export async function parsePageviewBody(request: Request) {
  const raw = await request.text();
  if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) return null;
  try { return JSON.parse(raw || "{}"); } catch { return null; }
}

# Daily Traffic Report

The site records anonymous page views in a short-lived Upstash Redis list and
sends one WxPusher summary each day. It reports PV, UV, top pages, countries
or regions, and page languages. After successful delivery, the previous day's
records are deleted; this is not a long-term analytics database.

Configure these Vercel Production variables:

- `WXPUSHER_SPT`: the recipient's WxPusher SPT.
- `KV_REST_API_URL`: the Upstash REST URL.
- `KV_REST_API_TOKEN`: the Upstash standard write token, not the read-only token.
- `PUBLIC_SITE_URL`: `https://www.chinamegasteel.com`.
- `CRON_SECRET`: optional long random value if the deployment platform supports passing it to Cron.

The Vercel Cron entry runs at `01:10 UTC` (09:10 China Standard Time). On the
Hobby plan, Vercel may execute it within the scheduled hour rather than at an
exact minute.

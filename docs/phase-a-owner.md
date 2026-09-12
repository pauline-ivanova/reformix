# Phase A — owner checklist (консоли)

Код Phase A уже в репо. Ниже — шаги **только в консолях**, без которых smoke не закрыть.
Канон: [`ops-stack.md`](./ops-stack.md).

**Новые** property/проекты (GA4, Clarity, Bing, CF Analytics…) — только на **`reformix.barcelona@gmail.com`**.  
Уже живые сервисы (Vercel, GitHub, Resend, Telegram, Turnstile) не переносим.

## IDs (зафиксировано 2026-09-12)

| Сервис | ID | Аккаунт |
|--------|-----|---------|
| GA4 Measurement ID | `G-960ZDYC95F` | reformix.barcelona@gmail.com |
| Clarity Project ID | `yh7eoabptq` | reformix.barcelona@gmail.com |
| IndexNow key | `30c04298c93f93b87ea68f0136d8098a` | — (file in `public/`) |
| CF Web Analytics token | `dcf346d4af4740318b3b2eeb43584b92` | reformix.barcelona@gmail.com |

## 1. Vercel env (Production + Preview)

Скопировать из [`.env.example`](../.env.example) и заполнить:

| Key | Где взять |
|-----|-----------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 → Admin → Data stream → Measurement ID (`G-…`) |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Clarity → Settings → Project ID |
| `NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN` | CF → Web Analytics → Manage → token из JS snippet |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | CF → Turnstile → widget для `reformix.barcelona` |
| `RESEND_API_KEY` / `RESEND_FROM_EMAIL` | Resend → API key + verified domain sender |
| `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` | BotFather + chat id |
| `NEXT_PUBLIC_SITE_URL` | `https://www.reformix.barcelona` |

После сохранения env — **Redeploy**.

## 2. Cloudflare

Аккаунт: **`reformix.barcelona@gmail.com`**.

- [x] Turnstile widget (Managed) → keys в Vercel · smoke OK
- [x] **Web Analytics** — site `www.reformix.barcelona` · token в Vercel · beacon live
- [x] **Zone DNS** — NS GoDaddy → `dax.ns.cloudflare.com` / `stephane.ns.cloudflare.com` · Active · orange-cloud A+www
- [x] **WAF / Rate limit** — rule `limit-api-contact` · POST `/api/contact` · 10/10s · Block (Free 1/1)

## 3. GA4 + Clarity smoke

- [x] Accept all → `gtag/js?id=G-960ZDYC95F`, Clarity `yh7eoabptq` + collect
- [x] «Solo necesarias» / analytics off → нет gtag/Clarity scripts (CF Web Analytics остаётся)

### Phase D — lead events (после деплоя кода)

В GA4 property **Reformix Barcelona** (`a407779896` / `p553889600`, Measurement `G-960ZDYC95F`):

1. ~~**Admin → Events** — отметить `form_submit` как Key event~~ ✅ (2026-09-12, property `p553889600`)
2. ~~**Explore → Lead funnel** — steps: `page_view` → `cta_click` → `form_start` → `form_submit`~~ ✅ (2026-09-12)
3. ~~После деплоя Phase D: DebugView / Realtime~~ ✅ dataLayer smoke 2026-09-12: `cta_click` → SPA `page_view` → `form_start` (полный `form_submit` — earlier E2E contact smoke)

Параметры событий: `page_path`, `service`, `cta_id`, `link_url`, `error_type`.

## 4. Form / Resend / Telegram

- [x] `/contacto` — Turnstile token выдан
- [x] E2E form smoke → `POST /api/contact` **200** (`success:true`) · Telegram+Resend path OK (FROM пока `onboarding@resend.dev`)
- [x] Resend domain: GoDaddy DNS (DKIM/SPF/MX send) → **verified**
- [x] Vercel: full `RESEND_API_KEY` (Anatoly Resend) + `RESEND_FROM_EMAIL=Reformix <noreply@reformix.barcelona>` · prod redeploy
- [x] Smoke — branded FROM email OK (`3f315fa0-…`)

## 5. Bing Webmaster + IndexNow

- [x] Microsoft account для `reformix.barcelona@gmail.com` (профиль IS)
- [x] Bing WMT → site verified (`public/BingSiteAuth.xml`) + sitemap `sitemap_index.xml` Submitted
- [x] IndexNow key live
- [x] Live IndexNow POST OK (HTTP 202)
- [x] GHA IndexNow: push → live POST (dispatch `dry_run=true` для preview)

## Готово Phase A

✅ Baseline закрыт 2026-09-12; WAF/NS cutover закрыт 2026-09-12. См. журнал в `ops-stack.md`.

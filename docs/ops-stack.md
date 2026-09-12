# Ops stack — план работ (Reformix)

**Статус:** канон плана · зафиксировано **2026-09-12**  
**Продукт:** lead-gen сайт услуг (лендинги → заявка), не product/learning  
**Owner email (только новые SaaS):** `reformix.barcelona@gmail.com` — новые property/проекты (GA4, Clarity, Bing WMT, CF Web Analytics и т.п.). Уже работающие (Vercel, GitHub, Resend, Telegram, Turnstile) **не мигрируем**.  
**Связано:** [`GDPR_COMPLIANCE_CHECKLIST.md`](../GDPR_COMPLIANCE_CHECKLIST.md) · [`issues/`](../issues/) · content в `A-landings-content/` · [`phase-a-owner.md`](./phase-a-owner.md) · [`phase-b-owner.md`](./phase-b-owner.md) · [`phase-e-owner.md`](./phase-e-owner.md) · [`schema-contracts.md`](./schema-contracts.md) · [`gsc-monitor.md`](./gsc-monitor.md)

---

## Принцип

Не «бесплатный SaaS из 15 сервисов», а **тонкий ops-слой** вокруг уже выбранной платформы:

```text
Vercel (app / SEO / Markdown landings)
+ Cloudflare (DNS / WAF / Turnstile / Web Analytics)  — дожать
+ GitHub (CMS + CI)                                  — content validate + IndexNow
+ GA4 / Clarity (+ Meta Pixel по триггеру ads)
+ Resend + Telegram (заявки)                         — уже в коде
+ Sentry (ошибки — следующий новый SaaS)
+ свои скрипты (IndexNow, GSC snapshot/decay, link suggest, content validate)
```

Новый внешний сервис — только при **явном продуктовом или ops-триггере**, не «на будущее».

Ops **не** отменяет контентный приоритет (лендинги / Ahrefs issues). Phase A–B — фоновые infra-задачи, когда есть слот.

---

## Карта стека (as-is → target)

| Задача | Инструмент | Сейчас | Цель |
|--------|------------|--------|------|
| Hosting / Next / landings | **Vercel** | ✅ | ✅ |
| DNS / WAF / Turnstile / CF Web Analytics | **Cloudflare** | ✅ zone Active + WAF | ✅ |
| Source / CMS | **GitHub** + Cursor + Markdown | ✅ | ✅ не менять на headless CMS |
| CI | **GitHub Actions** | ✅ content validate + IndexNow | ✅ required check later |
| Marketing analytics | **GA4** (+ Meta Pixel по ads) | ✅ consent-gated | ✅ |
| Privacy RUM | **Cloudflare Web Analytics** | ✅ | ✅ |
| UX recordings / heatmaps | **Microsoft Clarity** | ✅ consent-gated | ✅ |
| Lead funnels | **GA4 events** | ✅ code (`cta_click` / form_*) | ✅ Key events в UI |
| Errors | **Sentry** | ✅ EU org + DSN | ✅ без Session Replay |
| Transactional / alerts | **Resend** + **Telegram** | ✅ код | ✅ дожать env/domain |
| SEO discovery | **GSC + Bing** + IndexNow | 🟡 GSC вероятно | ✅ + IndexNow Action |
| SEO hygiene scripts | GSC snapshot/decay, suggest-links | ✅ | ✅ Phase E |
| Schema | JsonLd helpers | ✅ contracts | ✅ shared `@id` · hubs · ContactPage |
| Site search | — | ❌ | ⏸ нет каталога |
| Auth / DB | — | ❌ | ⏸ нет кабинета |
| Redis / shared rate limit | CF WAF | ✅ | `limit-api-contact` на `/api/contact` |

---

## Порядок действий

### Phase A — Baseline visibility + edge (почти 0€)

Параллельно контенту; не блокирует лендинги.

Owner-чеклист консолей: [`phase-a-owner.md`](./phase-a-owner.md).

- [x] **CookieConsent → реальная инициализация** analytics после согласия (`lib/cookie-consent.ts` + bootstrap)
- [x] **GA4** — property на `reformix.barcelona@gmail.com` · `G-960ZDYC95F` → Vercel · consent smoke OK (`gtag/js?id=G-960ZDYC95F`)
- [x] **Microsoft Clarity** — `yh7eoabptq` → Vercel · consent smoke OK (`clarity.ms/tag` + `y.clarity.ms/collect`)
- [x] **Cloudflare Web Analytics** — token `dcf346d4…` → Vercel · beacon live на prod (`static.cloudflareinsights.com`)
- [x] **Cloudflare WAF** — zone Active · NS `dax`/`stephane.ns.cloudflare.com` (GoDaddy custom) · orange-cloud A+www · rate limit `limit-api-contact` POST `/api/contact` (10/10s Block, Free 1/1)
- [x] **Turnstile** — keys в Vercel · widget на `/contacto` smoke OK (token в `cf-turnstile-response`)
- [x] **Resend** — domain `reformix.barcelona` **verified** (аккаунт Anatoly · DNS GoDaddy manual) · `RESEND_FROM_EMAIL=Reformix <noreply@reformix.barcelona>` + full key в Vercel · smoke email OK
- [x] **Telegram** — smoke OK (`reformix_notifications_bot`)
- [x] **Bing Webmaster** — MS account (IS / reformix Gmail) · site verified (`BingSiteAuth.xml`) · sitemap `sitemap_index.xml` Submitted
- [x] **IndexNow** — key live **200** · live POST OK (HTTP 202) · GHA push → live POST (dry-run optional via dispatch)

**Готово Phase A, когда:** consent → GA4+Clarity видны в network; форма с Turnstile; Resend+Telegram доставляют; Bing sitemap OK. ✅ (+ WAF/NS cutover 2026-09-12)

---

### Phase B — Sentry (первый новый SaaS)

Owner-чеклист консолей: [`phase-b-owner.md`](./phase-b-owner.md).

- [x] Org/project Sentry · **EU** · `reformix-barcelona` / `reformix-barcelona` · без Session Replay в SDK
- [x] Next.js SDK: client + server/edge + `instrumentation` + `global-error` · tunnel `/monitoring`
- [x] Env: `NEXT_PUBLIC_SENTRY_DSN` · `SENTRY_ORG` · `SENTRY_PROJECT` · `SENTRY_AUTH_TOKEN` (Vercel Prod/Preview/Dev + `.env.local`)
- [x] Smoke: local capture → issue `REFORMIX-BARCELONA-1` · client needs `NEXT_PUBLIC_SENTRY_ENABLE_DEV` · prod `/sentry-smoke` **404** · source maps OK
- [x] Privacy/cookies: техника / interés legítimo — тексты обновлены
- [x] Filters: `development` off by default; extension / NetworkError noise
- [ ] Опц.: Sentry MCP + GitHub code mapping *(owner)*

**Готово Phase B:** EU org + DSN live + issue в Sentry + prod smoke закрыт ✅

---

### Phase C — GitHub Actions: content validation

Цель: Cursor/agent не задеплоит broken landing.

- [x] Валидатор landings: frontmatter **или** Metadatos SEO / unique `title`+`description` / required sections (Hero + FAQ) — `tools/content/validate.mjs`
- [x] Проверка ссылок на `public/**` images из MD + `app/**` heroes
- [x] Workflow `.github/workflows/content-validate.yml`
- [x] `prebuild` = `npm run content:validate` (deploy gate на Vercel)
- [ ] Required status check на merge — ⏸ пока private free без Pro (как у RUSO)

Локально: `npm run content:validate`.

**Готово Phase C, когда:** сломанный MD падает локально и в CI. ✅ (required check — owner later)

---

### Phase D — Lead signals без PostHog

- [x] **GA4 events** (consent-gated): `cta_click` · `form_start` · `form_submit` · `form_error` · dim `service` / `page_path` (`lib/ga4.ts` + `CtaLink` + `ContactForm`)
- [x] **SPA pageviews** при клиентской навигации (`GaPageViews`)
- [x] Explorations в GA4 UI: **Lead funnel** — `page_view` → `cta_click` → `form_start` → `form_submit` (property `p553889600`)
- [x] Key events в GA4 UI: **`form_submit`** отмечен как key event (property `p553889600`)
- [ ] Go/no-go **PostHog** — только если через 4–8 недель weekly review GA4 упирается (ожидание: **no-go**)

**Готово Phase D (код + GA4 UI key event + funnel).** После деплоя: DebugView / Realtime smoke ≥1 полный путь заявки с `service`.

---

### Phase E — SEO / schema automation (свои скрипты)

После Phase A данных и стабильного контент-ритма.

- [x] **Schema contracts** — shared `@id` Organization / LocalBusiness / WebSite; хабы CollectionPage; ContactPage; legal WebPage; Service/FAQ/Breadcrumb через `provider` `@id` ([`schema-contracts.md`](./schema-contracts.md) · `lib/schema/`)
- [x] `gsc:snapshot` → JSON/CSV (не dashboard) — [`gsc-monitor.md`](./gsc-monitor.md) · **live** `2026-09-12` (31 pages / 588 queries)
- [x] `gsc:decay` — deltas clicks/position (fixtures + unit tests; live decay после 2-го weekly snapshot)
- [x] `seo:suggest-links` — suggest-only over `A-landings-content/`, без auto-insert в MD
- [x] Owner: SA в GSC (`gsc-readonly@…`) + first live snapshot — [`phase-e-owner.md`](./phase-e-owner.md)
- [ ] Owner rhythm: weekly `gsc:snapshot` → `gsc:decay -- --write` (после 2-го live)

**Готово Phase E (код + live API + 1 snapshot).** Второй live snapshot через ≥7 дней → первый live decay.

---

### Phase F — По триггеру (без дат)

| Триггер | Действие |
|---------|----------|
| Крутим Meta ads | Meta Pixel (consent-gated) |
| Большой раздел guías / catalog search нужен | оценить Pagefind / MiniSearch — не раньше |
| Ассетов тысячи / отдельный CDN | R2 |
| Shared counters / AI API между edge | Upstash Redis **или** CF Rate Limiting на новые paths |
| Аккаунты / кабинет клиента | один путь DB (Supabase **или** D1) — не оба |
| GA4 events бесят / нужны session product analytics | PostHog (маловероятно для lead-gen) |

---

## Держим в резерве (не сейчас)

| # | Идея | Почему hold |
|---|------|-------------|
| 1 | **PostHog** | Четвёртый analytics-слой; нет product sessions |
| 2 | **Headless CMS** | Один владелец контента; GitHub+MD достаточно |
| 3 | **Site search SaaS** | Нет поискового каталога |
| 4 | **Supabase / D1 как платформа** | Нет аккаунтов |
| 5 | **Upstash Redis** | Сначала CF WAF на contact |
| 6 | **Unified SEO dashboard** | Сначала snapshots + weekly review |
| 7 | **Zaraz** | После baseline GA4/Clarity/(Meta) |
| 8 | **Авто-вставка internal links** | Только suggest + human review |

---

## Чего не делать

- Подключать PostHog до GA4 + Clarity + Sentry + form events.
- Дублировать rate limiting (in-memory + CF WAF + Redis) без нужды.
- Менять GitHub+Markdown на Sanity/Contentful/Strapi без смены модели владения контентом.
- Строить SEO API dashboard до накопления GSC/Bing/Clarity данных.
- Автоматически править MDX/MD ссылки без review.
- Разворачивать DB «на будущее» рядом с Telegram+Resend.

---

## Как читать приоритет

| Слой | Где правда |
|------|------------|
| Контент лендингов / Ahrefs | `A-landings-content/` · [`issues/`](../issues/) — **главный Do now** |
| GDPR / cookies тексты | [`GDPR_COMPLIANCE_CHECKLIST.md`](../GDPR_COMPLIANCE_CHECKLIST.md) |
| **Этот файл** | новые SaaS + automation вокруг заявок и SEO; Phase A–B параллельно контенту |

---

## Журнал исполнения

| Дата | Что |
|------|-----|
| 2026-09-12 | Канон плана: thin ops; порядок A (consent/GA4/Clarity/CF/Turnstile/Bing) → B Sentry → C content validate → D GA4 lead events → E schema+GSC scripts → F по триггеру. As-is: Vercel + MD CMS + Resend/Telegram/Turnstile code + JsonLd; нет GA4/Clarity/Sentry/GHA. |
| 2026-09-12 | **Phase A:** CF Web Analytics live; Resend domain **verified** + branded FROM + Vercel key swap (аккаунт Anatoly) · smoke email OK. Bing: нет MS account. WAF: NS=GoDaddy. |
| 2026-09-12 | **Bing WMT:** verified via `BingSiteAuth.xml` · sitemap `sitemap_index.xml` Submitted · IndexNow live POST 202 · GHA IndexNow activated. Phase A baseline ✅ (WAF deferred). |
| 2026-09-12 | **Phase B (код):** `@sentry/nextjs` · client/server/edge · tunnel `/monitoring` · smoke non-prod · privacy texts · filters (dev off, extension/network noise). Owner: EU org + Vercel env — [`phase-b-owner.md`](./phase-b-owner.md). |
| 2026-09-12 | **Phase D (код):** GA4 `cta_click` / `form_start` / `form_submit` / `form_error` + SPA `page_view` (`lib/ga4.ts`, `CtaLink`, `GaPageViews`). Owner: mark `form_submit` key event + Exploration funnel. |
| 2026-09-12 | **CF WAF cutover:** zone `reformix.barcelona` на CF Free · NS GoDaddy → `dax.ns.cloudflare.com` / `stephane.ns.cloudflare.com` · Active · orange-cloud A+www (smoke `Server: cloudflare` + `CF-RAY`) · Resend MX/TXT/DKIM DNS-only · rate limit rule `limit-api-contact` (POST `/api/contact`, 10 req / 10s, Block). |
| 2026-09-12 | **CF WAF post-cutover verify (~+20m):** proxy `Server: cloudflare` + `CF-RAY` · Resend domain still verified (DKIM/MX/SPF) · `/contacto` E2E smoke `POST /api/contact` → 200 `success:true`. |
| 2026-09-12 | **Phase C:** `npm run content:validate` · `tools/content/validate*.mjs` · GHA `content-validate.yml` · `prebuild` gate · homepage frontmatter. Required check ⏸. |
| 2026-09-12 | **Phase E (код + live):** schema contracts · hubs/ContactPage/legal · `gsc:*` / `seo:suggest-links` · SA `gsc-readonly@plasma-set-321616` added to GSC `sc-domain:reformix.barcelona` · live snapshot `2026-09-12` (31 pages / 588 queries). Canon [`phase-e-owner.md`](./phase-e-owner.md). Next: 2nd weekly snapshot → live decay. |
| 2026-09-12 | **Phase B close:** Sentry org/project `reformix-barcelona` (EU) · DSN + `SENTRY_*` в Vercel · token `org:ci` · issue `REFORMIX-BARCELONA-1` · prod smoke 404 · prod redeploy. Consent: analytics off → no GA/Clarity; on → `G-960ZDYC95F` + Clarity. dataLayer: `cta_click` → `page_view` → `form_start`. `content:validate` OK. |

---

## Быстрый статус (обновлять при закрытии фазы)

| Phase | Статус |
|-------|--------|
| A — Baseline | ✅ done (WAF Active · NS=Cloudflare) |
| B — Sentry | ✅ EU org + DSN + issue smoke |
| C — Content CI | ✅ done (required check ⏸) |
| D — Lead events | ✅ key event + Lead funnel · dataLayer smoke |
| E — SEO scripts | ✅ code + live snapshot · weekly 2nd → decay |
| F — Triggers | ⏸ wait |

# Phase B — owner checklist (Sentry)

Код SDK уже в репо. Ниже — шаги **в консолях** (Sentry + Vercel), без которых smoke/source maps не закрыть.
Канон: [`ops-stack.md`](./ops-stack.md).

**Новый** org/project — только на **`reformix.barcelona@gmail.com`**.  
Регион данных: **EU** (Frankfurt). DSN должен содержать `ingest.de.sentry.io`.  
**Без Session Replay.**

## 1. Создать org / project ✅ (2026-09-12)

1. ~~Войти~~ под `reformix.barcelona@gmail.com`.
2. ~~EU~~ data storage (`ingest.de.sentry.io`).
3. ~~Project Next.js~~ → `reformix-barcelona`.
4. ~~DSN~~ в Vercel / `.env.local`.
5. ~~Auth Token~~ `vercel-sourcemaps` · scope **`org:ci`** (source maps / releases).
6. Slugs: `SENTRY_ORG=reformix-barcelona` · `SENTRY_PROJECT=reformix-barcelona`.

## 2. Vercel env ✅

| Key | Status |
|-----|--------|
| `NEXT_PUBLIC_SENTRY_DSN` | Production + Preview + Development |
| `SENTRY_ORG` | same |
| `SENTRY_PROJECT` | same |
| `SENTRY_AUTH_TOKEN` | same (sensitive) |

Redeploy prod выполнен 2026-09-12. Локально для полного smoke (server **и** client):
`SENTRY_ENABLE_DEV=true` + `NEXT_PUBLIC_SENTRY_ENABLE_DEV=true` (+ DSN).
Без `NEXT_PUBLIC_*` клиентский SDK в `next dev` остаётся выключен (env не попадает в browser bundle).

## IDs (зафиксировано 2026-09-12)

| Key | Value |
|-----|--------|
| Org slug | `reformix-barcelona` (EU · `*.ingest.de.sentry.io`) |
| Project slug | `reformix-barcelona` |
| Dashboard | https://reformix-barcelona.sentry.io/ |
| DSN | в Vercel `NEXT_PUBLIC_SENTRY_DSN` (+ `.env.local`) |
| Auth token | `SENTRY_AUTH_TOKEN` · org token `vercel-sourcemaps` · scope `org:ci` |

## 3. Smoke

После preview/prod deploy с DSN:

- [x] Local (`SENTRY_ENABLE_DEV` + `NEXT_PUBLIC_SENTRY_ENABLE_DEV` + DSN): `GET /api/sentry-smoke` → `{ ok: true, enabled: true }`
- [x] Local: `POST /api/sentry-smoke?side=capture` → issue **REFORMIX-BARCELONA-1** (`Reformix Sentry smoke: intentional captureException`)
- [x] Local: `POST /api/sentry-smoke?side=server` → issue с `intentional server error` (capture+flush+throw)
- [x] Local: `/sentry-smoke` → client `captureException` + `flush` OK (`intentional client error`)
- [x] Production: `/api/sentry-smoke` и `/sentry-smoke` → **404**
- [x] Source maps: prod build upload OK; stack в issue показывает `app/api/sentry-smoke/route.ts`
- [x] Personal token `cursor-issues-read` (`event:read` + `project:read`) → `.env.local` `SENTRY_READ_TOKEN` (не Vercel; для `sentry-cli issues list`)
- [ ] Preview Vercel Authentication блокирует curl/MCP share URL — smoke через Preview UI / local

Tunnel: `/monitoring` в `next.config` (prod/preview builds).

## 4. Privacy (уже в коде)

Тексты `/cookies` и `/privacidad` обновлены: Sentry = техника / interés legítimo, без Session Replay.

## 5. Опционально

- [ ] Sentry ↔ GitHub code mapping (Seer / suspect commits)
- [ ] Sentry MCP для Cursor (по желанию)

## Готово Phase B

Org EU + DSN/token в Vercel + issue в Sentry + prod smoke 404 ✅ — отметить Phase B в `ops-stack.md`.

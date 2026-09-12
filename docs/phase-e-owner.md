# Phase E — owner checklist (GSC API)

Канон: [`ops-stack.md`](./ops-stack.md) · [`gsc-monitor.md`](./gsc-monitor.md).

**Аккаунт GSC:** `reformix.barcelona@gmail.com` · property `sc-domain:reformix.barcelona`.

## Done (2026-09-12)

- [x] SA user in GSC: `gsc-readonly@plasma-set-321616.iam.gserviceaccount.com` (Full)
- [x] Local key: `secrets/gsc-service-account.json` (gitignored; same SA as RUSO readonly)
- [x] Env: `GSC_SITE_URL=sc-domain:reformix.barcelona` in `.env` / `.env.local`
- [x] `npm run gsc:sites` → sees Reformix property
- [x] First live `npm run gsc:snapshot` → `docs/seo/research/gsc/2026-09-12/` (31 pages / 588 queries)

## Weekly rhythm (owner / agent)

```bash
npm run gsc:snapshot
# … ≥7 days later …
npm run gsc:snapshot
npm run gsc:decay -- --write
npm run seo:suggest-links -- --write
```

Triage alerts manually — **do not** auto-edit MD.

## Готово Phase E (owner close)

Когда есть ≥2 **live** dated snapshots + один live `gsc:decay` report — отметить полностью в `ops-stack.md`.

# GSC monitor — snapshots & content decay (Reformix)

Локальные скрипты Google Search Console API. **Не** unified SEO dashboard (см. [`ops-stack.md`](./ops-stack.md) Phase E).

Snapshots пишутся в `docs/seo/research/gsc/` (каталог **gitignored** — не коммитить выгрузки).

## Prefs

| Env | Назначение |
|-----|------------|
| `GSC_CREDENTIALS_PATH` | JSON service account (default `secrets/gsc-service-account.json`) |
| `GSC_SITE_URL` | `sc-domain:reformix.barcelona` или `https://www.reformix.barcelona/` |
| `GSC_DAYS` | Lookback для `pages` / `queries` (default ~486 ≈ 16 мес.) |
| `GSC_SNAPSHOT_DAYS` | Lookback для `snapshot` (default **28**) |
| `GSC_DECAY_*` | Пороги decay (см. ниже) |

SA email → GSC → Users and permissions (Full или Restricted). Owner: `reformix.barcelona@gmail.com`.

## Commands

```bash
npm run gsc:sites          # список property, видимых SA
npm run gsc:pages          # pages → latest/
npm run gsc:queries        # queries → latest/
npm run gsc:snapshot       # dated JSON+CSV (pages + queries) + latest/
npm run gsc:decay          # compare last two dated folders (stdout markdown)
npm run gsc:decay -- --write
npm run gsc:decay -- --baseline tools/gsc/fixtures/2026-09-01 --current tools/gsc/fixtures/2026-09-08
npm run gsc:test           # unit tests (no API)
```

### Snapshot layout

```text
docs/seo/research/gsc/
  2026-09-12/
    pages.csv | pages.json | pages.meta.json
    queries.csv | queries.json | queries.meta.json
  latest/
  last-snapshot.json
  reports/         # optional decay-*.md|json from --write
```

Weekly rhythm (owner): `gsc:snapshot` → через неделю снова → `gsc:decay -- --write` → triage в Cursor (не auto-edit MD).

## Decay thresholds

| Env | Default | Meaning |
|-----|---------|---------|
| `GSC_DECAY_MIN_IMPRESSIONS` | 50 | Ignore thin URLs |
| `GSC_DECAY_CLICK_DROP_PCT` | 30 | Alert if clicks drop ≥ % |
| `GSC_DECAY_POSITION_WORSE` | 5 | Alert if avg position worsens by ≥ N |
| `GSC_DECAY_IMPRESSION_DROP_PCT` | 40 | Alert if impressions drop ≥ % |
| `GSC_DECAY_FAIL_ON_ALERT` | unset | Set `1` to exit 2 when alerts > 0 |

## Internal-link suggestions

```bash
npm run seo:suggest-links
npm run seo:suggest-links -- --path /reformas-cocinas
npm run seo:suggest-links -- --write
npm run seo:suggest-links:test
```

Suggest-only over `A-landings-content/` (hub = `NN-000-*`). **Never** auto-insert into MD.

## Schema

[`schema-contracts.md`](./schema-contracts.md) · `lib/schema/ids.ts`

## Related

- Ops roadmap: [`ops-stack.md`](./ops-stack.md) Phase E

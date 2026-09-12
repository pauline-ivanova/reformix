# Schema contracts (Reformix)

**Статус:** канон · 2026-09-12  
**Связано:** [`ops-stack.md`](./ops-stack.md) Phase E · `lib/schema/` · [`JsonLd.tsx`](../app/components/common/JsonLd.tsx)

## Принцип

Entity-граф + контракт по типу страницы. Не densest markup.

- FAQ / Review — только из **visible** UI
- Полные Org / LocalBusiness / WebSite — только в **layout** (`/#organization`, `/#localbusiness`, `/#website`)
- Остальные страницы ссылаются через `@id` (`lib/schema/ids.ts`)
- SearchAction — только когда появится реальный site search (Phase F)

## Shared IDs

| `@id` | Тип | Define |
|-------|-----|--------|
| `/#organization` | Organization | Layout |
| `/#localbusiness` | LocalBusiness + HomeAndConstructionBusiness | Layout (`parentOrganization` → Org) |
| `/#website` | WebSite | Layout |
| `{service}/#service` | Service | Spoke landings |
| `{hub}/#collection` | CollectionPage | Hub pages |

## Page contracts

| Страница | Must | Builder |
|----------|------|---------|
| Layout (все) | Organization · LocalBusiness · WebSite | `app/layout.tsx` + `JsonLd.tsx` |
| Home | FAQ · Review (visible testimonials, `itemReviewed` → LocalBusiness; no self-serving AggregateRating) | `app/page.tsx` |
| Hub (`/reformas-integrales`, `/reformas-por-estancia`, `/servicios-tecnicos`, `/reformas-comerciales`) | CollectionPage · ItemList · FAQ · Breadcrumb | `lib/schema/utility-pages.ts` |
| Spoke service | Service · FAQ · Breadcrumb (`provider` → `/#localbusiness`) | `generateServiceSchema` |
| Contacto | ContactPage · ContactPoint · Breadcrumb | `buildContactPageJsonLd` |
| Legal (`/aviso-legal`, `/privacidad`, `/cookies`) | WebPage · about Org · Breadcrumb | `buildLegalPageJsonLd` |

## NEVER

- FAQ / Review не из UI
- Полный LocalBusiness / Organization на каждой странице без `@id`
- Self-serving `AggregateRating` на LocalBusiness (Google rich results fail)
- Fake SearchAction (`/?s=…`) без реального поиска
- Авто-правка MD ссылок без review
- HTML negotiation на `*.xml` sitemap routes (всегда XML)

## Tests

```bash
npm run schema:test
```

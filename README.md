# Reformix Barcelona — Next.js Website

Сайт компании Reformix Barcelona на Next.js (App Router), TypeScript, Tailwind CSS. Деплой на Vercel.

## Технологии

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Markdown** — контент лендингов и проектов
- **Vercel** — хостинг

## Структура проекта

```
reformix.barcelona/
├── app/                      # Next.js App Router (страницы, API, layout)
│   ├── components/           # UI: layout, blocks, analytics, forms, common
│   ├── api/                  # API routes
│   └── proyectos/            # Каталог и карточки проектов
├── content/
│   ├── landings/             # Markdown лендингов (NN-OOO-slug.md)
│   └── proyectos/            # Markdown проектов + исходные фото
├── lib/                      # Утилиты: content, metadata, schema, sitemap, GA, cookies
├── public/                   # Статика (в т.ч. public/images — картинки сайта)
├── assets/source/            # Исходники изображений (не отдаются Next напрямую)
├── docs/                     # Операционные заметки, GDPR, фазы
│   └── guides/               # Промпты и гайды по контенту/SEO
├── tools/                    # CLI: content validate, GSC, IndexNow, link suggestions
├── scripts/                  # Вспомогательные скрипты
└── issues/                   # Трекинг контентных/SEO задач
```

## Установка и запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Контент

### Лендинги

Файлы в `content/landings/` с именем `NN-OOO-slug.md` и YAML frontmatter:

```markdown
---
title: "Заголовок страницы"
description: "Описание для SEO"
---

# Контент страницы
```

Часть URL обслуживается через `app/[slug]` (markdown), часть — через явные `app/<slug>/page.tsx` с блоками. Новые лендинги предпочтительно добавлять в markdown + динамический роут, если хватает шаблона.

### Проекты

Markdown в `content/proyectos/`, изображения — в `content/proyectos/IMG/` (и копии/оптимизации в `public/` по необходимости). Loader: `lib/proyectos-data.ts`.

## Полезные команды

```bash
npm run content:validate   # проверка MD лендингов и ссылок на /images
npm test                   # unit-тесты lib + tools
npm run seo:suggest-links  # предложения внутренних ссылок (только отчёт)
npm run indexnow:preview   # превью URL для IndexNow
```

## SEO

- Метатеги через `lib/metadata-utils.ts`
- Sitemap-ы: `app/sitemap*.xml/`
- `robots.ts`
- JSON-LD в компонентах schema
- IndexNow workflow (см. `docs/ops-stack.md`)

## Деплой

Push в `main` → автоматический деплой на Vercel. `prebuild` запускает `content:validate`.

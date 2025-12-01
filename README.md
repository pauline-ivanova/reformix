# Reformix Barcelona - Next.js Website

Современный сайт для компании Reformix Barcelona, построенный на Next.js 14 и развернутый на Vercel.

## Технологии

- **Next.js 14** - React фреймворк с App Router
- **TypeScript** - Типизированный JavaScript
- **Tailwind CSS** - Utility-first CSS фреймворк
- **Markdown** - Контент хранится в Markdown файлах
- **Vercel** - Хостинг и деплой

## Структура проекта

```
reformix.barcelona/
├── A-landings-content/     # Markdown файлы с контентом страниц
├── app/                    # Next.js App Router
│   ├── components/        # React компоненты
│   │   └── layout/        # Header, Footer
│   ├── layout.tsx         # Корневой layout
│   └── page.tsx           # Главная страница
├── lib/                    # Утилиты
│   ├── content-utils.ts   # Функции для работы с Markdown
│   └── metadata-utils.ts # SEO метаданные
└── public/                 # Статические файлы
```

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите dev-сервер:
```bash
npm run dev
```

3. Откройте [http://localhost:3000](http://localhost:3000) в браузере

## Контент

Контент страниц хранится в папке `A-landings-content/` в формате Markdown. Каждый файл должен иметь frontmatter с метаданными:

```markdown
---
title: "Заголовок страницы"
description: "Описание для SEO"
---

# Контент страницы
```

## Разработка

### Добавление новой страницы

1. Создайте Markdown файл в `A-landings-content/`
2. Создайте соответствующую страницу в `app/` используя динамические роуты
3. Используйте `getContentBySlug()` из `lib/content-utils.ts` для чтения контента

### Компоненты

Компоненты находятся в `app/components/`:
- `layout/` - Header, Footer
- `blocks/` - Блоки контента (Hero, CTA, FAQ и т.д.)

## Деплой

Проект настроен для автоматического деплоя на Vercel. Просто подключите репозиторий к Vercel, и каждый push в main ветку будет автоматически деплоиться.

## SEO

- Автоматическая генерация метатегов
- Sitemap.xml (в разработке)
- Robots.txt (в разработке)
- JSON-LD разметка (в разработке)


# Gmail signature — Irina Smirniakova / Reformix

Адаптация карточной подписи RUSO под бренд **Reformix** (персональная подпись Ирины).

## Title (current)

Имя: `Irina Smirniakova`  
Subtitle: `Reformas y rehabilitación`  
Tagline: `Tu reforma, nuestra responsabilidad.` / `Equipo propio. Trato directo, sin intermediarios.`

CTA: `Presupuesto gratis` → `/contacto?cta=email-signature` · `Guardar contacto` → `.vcf`

Brand colors:
- Primary `#002e7c` (текст, акцент-полоска, иконки)
- CTA `#B84A2A` (terracotta, кнопка)

Icons: PNG **48×48** (Retina), в HTML `width/height` 16 / 14 / 12.

Logo: вертикальный `reformix-logo-vertical-180.png` (из `assets/source/logo-vertical.png`, brand blue на прозрачном). Соцсети не включены.

Layout:
- Tagline only in right column (under contacts)
- Primary row (indented): terracotta button `Presupuesto gratis`
- Secondary row: `Guardar contacto` (.vcf)
- Under card: confidentiality line

## Install in Gmail

1. Задеплой PNG + `.vcf` на прод (`public/email-signature/` → `https://www.reformix.barcelona/email-signature/…`). Без HTTPS картинки в Gmail не появятся.
2. Открой `signature.html` в **Chrome** (Ctrl+F5). Проверь лого + иконки.
3. Выдели карточку и дисклеймер (между HTML-комментариями).
4. Copy (`Ctrl+C`).
5. Gmail → ⚙️ Settings → See all settings → General → Signature → create/edit → paste (`Ctrl+V`).
6. Save changes. Отправь тест себе.

**Important:** Gmail вырезает local / relative / base64. Все `<img src>` — публичные HTTPS.

## Public image host

| Asset | URL |
|---|---|
| Logo | https://www.reformix.barcelona/email-signature/reformix-logo-vertical-180.png |
| WhatsApp | https://www.reformix.barcelona/email-signature/icon-whatsapp-16.png |
| Email | https://www.reformix.barcelona/email-signature/icon-email.png |
| Web | https://www.reformix.barcelona/email-signature/icon-web.png |
| CTA icon | https://www.reformix.barcelona/email-signature/icon-trial-btn.png |
| vCard | https://www.reformix.barcelona/email-signature/irina-smirniakova.vcf |

Источник: эта папка. Зеркало для CDN: `public/email-signature/`.

После смены ассета:

1. `python docs/branding/gmail-signature/_make_assets.py`
2. Скопируй `irina-smirniakova.vcf` в `public/email-signature/` если менял
3. Publish сайта
4. Заново вставь подпись в Gmail

## Files

| File | Use |
|---|---|
| `signature-preview.html` | Local preview (relative images) |
| `signature.html` | Copy source for Gmail (HTTPS URLs) |
| `reformix-logo-vertical-180.png` | Vertical logo (email size) |
| `icon-*.png` | Contact / CTA icons |
| `irina-smirniakova.vcf` | vCard |
| `_make_assets.py` | Regen tint icons |
| `public/email-signature/` | Live CDN mirror |

## Links

- WhatsApp: https://wa.me/34642029572
- Email: reformix.barcelona@gmail.com
- Web: https://www.reformix.barcelona
- CTA: https://www.reformix.barcelona/contacto?cta=email-signature

## Source pattern

RUSO: `C:\Users\anato\Documents\PROJECTS\RUSO\docs\branding\gmail-signature\`

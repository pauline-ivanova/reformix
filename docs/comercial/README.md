# Comercial — propuestas, presupuestos y materiales para clientes

Рабочая папка для регулярной подготовки коммерческих документов Reformix:

- предложения (propuestas)
- сметы / presupuestos
- фактуры (plantilla)
- сопутствующие материалы для клиентов

## Структура

| Папка | Назначение |
| --- | --- |
| `plantillas/` | Шаблоны и общие блоки (тексты, структура сметы, условия, фактура) |
| `clientes/` | Материалы по конкретным клиентам / объектам (подпапка на кейс) |

## Alcance (опросник после заявки)

Шаринг-ссылка для уточнения montaje перед presupuesto:

→ [`alcance-proyecto-montaje.md`](alcance-proyecto-montaje.md) · URL `/alcance-proyecto/montaje-muebles-cocinas`

## Precios (внутренняя модель)

Многослойный расчёт для будущих смет — отдельные колонки, клиенту только PU:

→ [`plantillas/METODOLOGIA_PRECIOS.md`](plantillas/METODOLOGIA_PRECIOS.md)

Кратко: **CYPE/BEDEC** (справочник) → **рынок L/M/H** → **cost** (`known` / `proxy` / `unknown`) → **precio cliente** + **margen от cost** + **k_objeto**. IVA отдельно. Нормативные 13%+6% не используем как коммерческую надбавку.

## Factura

- Шаблон в репо: [`plantillas/FACTURA_Reformix_plantilla.xlsx`](plantillas/FACTURA_Reformix_plantilla.xlsx)
- Шапка: **EMISOR** (данные + контакт + pago) → **CLIENTE**. Реквизиты FACTURA справа (кол. G–I). Пустой край A (~20px).
- Сетка A–I: **Concepto** = C:E; Ud. · Cantidad · Precio · Importe. Итоги: подписи F:G, суммы H:I.
- **Ud.** — выпадающий список (`ud`, `m²`, `ml`, `m`, `h`, `PA`, `kg`, `lote`); можно вписать свою. Источник на скрытом листе `Listas`.
- **Источник заполненных фактур:** Google Drive (копия шаблона → туда заливать рабочие номера). Этот файл в git — эталон дизайна/полей, не архив выставленных счетов.
- Старый макет `FACTURA Luda 104_075800.xlsx` оставлен только как справка; новые фактуры — из `FACTURA_Reformix_plantilla.xlsx`.
- Адреса: в фактуре — **domicilio fiscal** (Concepción Arenal 92, 1-2); на сайте — **oficina** (100). Не смешивать.

## Как работать

1. Новый клиент или объект → папка в `clientes/<slug-или-имя>/`.
2. Общие формулировки и форматы → правим в `plantillas/`.
3. Детали обсуждаем здесь в markdown; финальные PDF/Excel можно класть рядом или ссылать извне.

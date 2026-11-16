# Alcance proyecto — montaje de muebles y cocinas

URL para compartir (después de la solicitud / en el hilo):

`https://www.reformix.barcelona/alcance-proyecto/montaje-muebles-cocinas`

## Uso ops

1. Cliente escribe por web / WhatsApp / email.
2. Si en el formulario eligió **Montaje de muebles y cocinas** (o llegó desde el landing con `?service=montaje-muebles-cocinas`), el mail/Telegram de la solicitud incluye bloque «siguiente paso»: texto sugerido (ES, `Hola {primerNombre}`) + enlace al cuestionario + botón **Pedir detalles por WhatsApp**. El texto del email es seguro si el cliente ve la cita al Responder.
3. Irina responde en **ese** hilo (Responder) o abre WA; si hace falta alcance, usa el cuestionario.
3. El cuestionario llega a **Telegram** (resumen + enlace Google Maps + `.vcf` + archivos) y a **Gmail** con subject:
   `Alcance proyecto — Montaje de muebles y cocinas — {Nombre}`.
4. En el mail/Telegram: botón/enlace **Ver obra en Google Maps** (dirección del paso 3) y adjunto **`.vcf`** para guardar el contacto (Google Contacts / iPhone).
5. Si el cliente dejó email → ack corto automático (`Hemos recibido tu alcance — …`). No lleva la ficha completa.
6. **No responder** al correo de alcance. Contestar al cliente en el hilo original (o WhatsApp). El mail de alcance no lleva Reply-To del cliente a propósito.

## Plantillas (código)

| Canal | Helper |
|--------|--------|
| Resumen Irina (texto plano) | `buildAlcanceSummaryText` |
| Resumen Irina (HTML mail, bloques) | `buildAlcanceSummaryHtml` |
| Resumen Irina (Telegram HTML, bloques) | `buildAlcanceSummaryTelegramHtml` |
| Subject admin | `buildAlcanceEmailSubject` |
| Ack cliente | `buildAlcanceClientAckHtml` / `buildAlcanceClientAckSubject` |
| Maps | `buildAlcanceMapsSearchUrl` |
| Contacto `.vcf` | `buildAlcanceVCard` / `alcanceVCardFilename` |

## Notas

- Página `noindex` / fuera de menú y sitemap.
- Adjuntos opcionales (PDF diseño, fotos, presupuesto tienda).
- Sin ID de CRM en v1: cruzar por nombre / teléfono en Telegram; el `.vcf` acelera guardar el lead.

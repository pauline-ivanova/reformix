# Prompt: página de Proyecto (~500 palabras ES)

**Uso:** Generar o reescribir un informe de obra / caso de proyecto para `reformix.barcelona/proyectos/[slug]`.

Sustituye todos los campos `{…}` antes de generar. No inventes municipio, plazo ni fotos.

---

## Variables

- `{TIPO_INMUEBLE}`: ej. casa familiar de 3 plantas
- `{ZONA}`: municipio o zona (Barcelona, Sabadell, Vallès Occidental…)
- `{TRABAJOS}`: ej. rehabilitación de fachada, pintura exterior
- `{PROBLEMA}`: grietas, pintura suelta, color degradado…
- `{SOLUCION}`: saneado, imprimación, malla, emplaste, pintura rugosa…
- `{RESULTADO}`: fachada sana, color elegido in situ…
- `{PLAZO}`: si se conoce; si no, omitir
- `{ANO}`: año de la obra
- `{SERVICIO_URL}`: ej. `/rehabilitacion-casas`
- `{SLUG}`: `tipo-trabajo-geo-detalle`

---

## Tono (obligatorio)

- Español de España, trato de **tú**
- Cercano y profesional; hilo: **tranquilidad** y trabajo bien hecho
- Sin clichés («líderes», «reforma de tus sueños»)
- Técnica sí, pero envuelta en beneficio para el propietario
- No dirección exacta ni nombre del cliente

---

## Estructura de salida (fija)

1. **Metadatos**
   - Title (45–55 caracteres con espacios): `[Trabajo principal] en [Geo] | Reformix`
   - Meta description (≤150): verbo de transformación + 2–3 beneficios + CTA
   - H1, subtítulo hero (1 frase antes/después)

2. **Ficha rápida** (viñetas, no cuenta en las ~500 palabras): tipo, zona, trabajos, plazo (si hay), año

3. **El reto** (~80–100 palabras)

4. **La solución** (~80–100)

5. **Cómo lo hicimos** (~180–220): etapas claras (retirada → imprimación → alisado + malla → emplaste → pintura → color)

6. **El resultado** (~80–100)

7. **Qué puedes llevarte** (3 bullets, ~40–60 palabras en total)

8. **CTA** + enlace interno a `{SERVICIO_URL}` y a `/contacto`

9. **FAQ** (2–3) solo si salen del proyecto real; si no, omitir

**Total prosa (bloques 3–7):** 450–550 palabras.

---

## Entidades SEO a incluir de forma natural

fachada, grietas, imprimación, malla, emplaste exterior, pintura rugosa, Barcelona / Vallès Occidental / municipio, presupuesto cerrado (si encaja), garantía

---

## Checklist antes de publicar

- [ ] Geo real y consentido
- [ ] 3+ fotos antes y 3+ después con nombre de archivo descriptivo y ALT
- [ ] Enlace a servicio + contacto
- [ ] Schema Article + Breadcrumb (lo genera la app)

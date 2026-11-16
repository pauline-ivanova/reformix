/** Contact form service catalog (optgroups) + landing → service donor map. */

export const ALCANCE_MONTAJE_URL =
  'https://www.reformix.barcelona/alcance-proyecto/montaje-muebles-cocinas';

export const MONTAJE_SERVICE = 'montaje-muebles-cocinas' as const;

export type ContactServiceGroup = {
  label: string;
  options: { value: string; label: string }[];
};

/** Full Tipo de servicio tree (aligned with site navigation). */
export const CONTACT_SERVICE_GROUPS: ContactServiceGroup[] = [
  {
    label: 'Montaje',
    options: [
      {
        value: MONTAJE_SERVICE,
        label: 'Montaje de muebles y cocinas',
      },
    ],
  },
  {
    label: 'Reformas integrales',
    options: [
      {
        value: 'reformas-integrales-pisos',
        label: 'Reformas integrales de pisos',
      },
      { value: 'rehabilitacion-casas', label: 'Rehabilitación de casas' },
      {
        value: 'interiorismo-colaboracion',
        label: 'Interiorismo en colaboración',
      },
      { value: 'reformas-integrales', label: 'Reformas integrales (general)' },
    ],
  },
  {
    label: 'Reformas por estancia',
    options: [
      { value: 'reformas-cocinas', label: 'Reformas de cocinas' },
      { value: 'reformas-banos', label: 'Reformas de baños' },
      { value: 'reformas-salones', label: 'Reformas de salones' },
      { value: 'reformas-habitaciones', label: 'Reformas de habitaciones' },
      {
        value: 'reformas-terrazas-balcones',
        label: 'Reformas de terrazas y balcones',
      },
      { value: 'reformas-recibidores', label: 'Reformas de recibidores' },
      {
        value: 'reformas-por-estancia',
        label: 'Reformas por estancia (general)',
      },
    ],
  },
  {
    label: 'Servicios técnicos',
    options: [
      { value: 'alicatado', label: 'Alicatado y solados' },
      { value: 'pladur', label: 'Pladur y falsos techos' },
      { value: 'ventanas', label: 'Ventanas y aluminio' },
      { value: 'pintura-interior', label: 'Pintura interior' },
      {
        value: 'instalacion-papel-pintado',
        label: 'Instalación de papel pintado',
      },
      {
        value: 'aislamiento-termico-acustico',
        label: 'Aislamiento térmico y acústico',
      },
      { value: 'fontaneria', label: 'Fontanería' },
      { value: 'electricidad', label: 'Electricidad' },
      {
        value: 'calefaccion-climatizacion',
        label: 'Calefacción y climatización',
      },
      { value: 'carpinteria', label: 'Carpintería' },
      { value: 'albanileria', label: 'Albañilería' },
      { value: 'impermeabilizaciones', label: 'Impermeabilizaciones' },
      {
        value: 'servicios-tecnicos',
        label: 'Servicios técnicos (general)',
      },
    ],
  },
  {
    label: 'Reformas comerciales',
    options: [
      { value: 'reformas-oficinas', label: 'Reformas de oficinas' },
      {
        value: 'locales-comerciales-retail',
        label: 'Locales comerciales y retail',
      },
      { value: 'restaurantes-bares', label: 'Restaurantes y bares' },
      {
        value: 'clinicas-centros-sanitarios',
        label: 'Clínicas y centros sanitarios',
      },
      {
        value: 'gimnasios-centros-deportivos',
        label: 'Gimnasios y centros deportivos',
      },
      { value: 'hoteles-alojamientos', label: 'Hoteles y alojamientos' },
      {
        value: 'reformas-comerciales',
        label: 'Reformas comerciales (general)',
      },
    ],
  },
  {
    label: 'Otro',
    options: [{ value: 'otro', label: 'Otro / no lo tengo claro' }],
  },
];

/** Legacy form values → current slugs (old submissions / bookmarks). */
const LEGACY_SERVICE_MAP: Record<string, string> = {
  'reforma-integral': 'reformas-integrales',
  'reforma-cocina': 'reformas-cocinas',
  'reforma-bano': 'reformas-banos',
};

const LABEL_BY_VALUE: Record<string, string> = Object.fromEntries(
  CONTACT_SERVICE_GROUPS.flatMap((g) =>
    g.options.map((o) => [o.value, o.label] as const),
  ),
);

export function normalizeContactService(service?: string | null): string {
  const raw = service?.trim() || '';
  if (!raw) return '';
  return LEGACY_SERVICE_MAP[raw] ?? raw;
}

export function resolveServiceLabel(service?: string): string | null {
  const normalized = normalizeContactService(service);
  if (!normalized) return null;
  return LABEL_BY_VALUE[normalized] ?? normalized;
}

export function isMontajeService(service?: string | null): boolean {
  return normalizeContactService(service) === MONTAJE_SERVICE;
}

/** First token for «Hola Juliana». */
export function firstNameFromFullName(fullName: string): string {
  const first = fullName.trim().split(/\s+/)[0] || '';
  return first;
}

/**
 * Map landing path → contact service (donor).
 * Hub pages map to their «general» option.
 */
export function serviceFromPathname(pathname: string): string {
  const clean = pathname.split('?')[0]?.split('#')[0] ?? '';
  const slug = clean.replace(/\/+$/, '').replace(/^\//, '').split('/')[0] ?? '';
  if (!slug || slug === 'contacto' || slug === 'proyectos') return '';
  if (LABEL_BY_VALUE[slug]) return slug;
  return '';
}

/** Append ?service= from donor path when linking to /contacto. */
export function withContactServiceDonor(
  href: string,
  pathname: string,
): string {
  if (!href.startsWith('/contacto')) return href;
  if (/[?&]service=/.test(href)) return href;

  const service = serviceFromPathname(pathname);
  if (!service) return href;

  const hashIndex = href.indexOf('#');
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';
  const base = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}service=${encodeURIComponent(service)}${hash}`;
}

export function buildMontajeEmailReplyText(fullName: string): string {
  const first = firstNameFromFullName(fullName) || 'hola';
  return [
    `Hola ${first},`,
    '',
    'Gracias por escribirnos. Para preparar un presupuesto cerrado de montaje de muebles y cocinas, necesitamos unos datos del proyecto.',
    '',
    'Puedes completar este breve cuestionario (unos minutos):',
    ALCANCE_MONTAJE_URL,
    '',
    'Un saludo,',
    'Irina',
    'Reformix Barcelona',
  ].join('\n');
}

export function buildMontajeWhatsAppPrefill(fullName: string): string {
  const first = firstNameFromFullName(fullName) || 'hola';
  return `Hola ${first}, soy Irina de Reformix. Para el presupuesto de montaje, ¿puedes completar este cuestionario? ${ALCANCE_MONTAJE_URL} ¡Gracias!`;
}

/** wa.me to the lead's phone with prefilled questionnaire ask. */
export function buildMontajeWhatsAppUrl(
  phone: string,
  fullName: string,
): string | null {
  const cleaned = phone.trim().replace(/[\s\-().]/g, '');
  let digits = cleaned.startsWith('+') ? cleaned.slice(1) : cleaned;
  digits = digits.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) return null;
  if (!cleaned.startsWith('+') && digits.length === 9 && /^[679]/.test(digits)) {
    digits = `34${digits}`;
  }
  const text = buildMontajeWhatsAppPrefill(fullName);
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

/** Client-friendly subject so Reply keeps a natural thread for the lead. */
export function buildContactEmailSubject(name: string, service?: string): string {
  const serviceLabel = resolveServiceLabel(service);
  return serviceLabel
    ? `${serviceLabel} — ${name}`
    : `Consulta Reformix — ${name}`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Client-safe HTML block for admin contact email (may be quoted on Reply). */
export function buildMontajeContactEmailBlock(input: {
  name: string;
  phone: string;
}): string {
  const replyText = buildMontajeEmailReplyText(input.name);
  const waUrl = buildMontajeWhatsAppUrl(input.phone, input.name);
  const waButton = waUrl
    ? `<p style="margin:16px 0 8px;">
        <a href="${escapeHtml(waUrl)}"
           style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:10px 16px;border-radius:8px;font-weight:600;">
          Pedir detalles por WhatsApp
        </a>
      </p>`
    : '';

  return `
    <div style="margin-top:24px;border:1px solid #d1fae5;border-radius:8px;background:#ecfdf5;padding:16px;">
      <p style="margin:0 0 8px;font-weight:700;color:#065f46;">
        Montaje de muebles y cocinas — siguiente paso
      </p>
      <p style="margin:0 0 12px;font-size:13px;color:#047857;">
        Cuestionario:
        <a href="${escapeHtml(ALCANCE_MONTAJE_URL)}" style="color:#047857;font-weight:600;">
          ${escapeHtml(ALCANCE_MONTAJE_URL)}
        </a>
      </p>
      ${waButton}
      <p style="margin:12px 0 6px;font-size:12px;color:#065f46;font-weight:600;">
        Texto sugerido para tu respuesta (mismo hilo — Responder):
      </p>
      <pre style="white-space:pre-wrap;margin:0;padding:12px;background:#fff;border:1px solid #a7f3d0;border-radius:6px;font-size:13px;line-height:1.45;color:#111827;font-family:Arial,sans-serif;">${escapeHtml(replyText)}</pre>
    </div>
  `.trim();
}

/** Telegram HTML follow-up for montaje leads. */
export function buildMontajeContactTelegramHtml(input: {
  name: string;
  phone: string;
}): string {
  const replyText = escapeHtml(buildMontajeEmailReplyText(input.name));
  const waUrl = buildMontajeWhatsAppUrl(input.phone, input.name);
  const parts = [
    '<b>Montaje de muebles y cocinas — siguiente paso</b>',
    `Cuestionario: <a href="${escapeHtml(ALCANCE_MONTAJE_URL)}">abrir cuestionario</a>`,
  ];
  if (waUrl) {
    parts.push(
      `<a href="${escapeHtml(waUrl)}">Pedir detalles por WhatsApp</a>`,
    );
  }
  parts.push('');
  parts.push('<b>Texto sugerido (email, mismo hilo)</b>');
  parts.push(replyText);
  return parts.join('\n');
}

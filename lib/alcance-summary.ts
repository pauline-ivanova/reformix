/** Types, constants and Irina summary helpers for alcance montaje (self-contained for node:test). */

export const ALCANCE_SLUG = 'montaje-muebles-cocinas' as const;
export const ALCANCE_SERVICE_LABEL = 'Montaje de muebles y cocinas';

/** Service-area towns for native `<datalist>` suggestions (typeahead by prefix). */
export const ALCANCE_MUNICIPIO_SUGGESTIONS = [
  'Badalona',
  'Badia del Vallès',
  'Barberà del Vallès',
  'Barcelona',
  'Castellar del Vallès',
  'Castelldefels',
  'Cerdanyola del Vallès',
  'Cornellà de Llobregat',
  'El Prat de Llobregat',
  'Esplugues de Llobregat',
  'Gallifa',
  'Gavà',
  "L'Hospitalet de Llobregat",
  'Matadepera',
  'Montcada i Reixac',
  'Palau-solità i Plegamans',
  'Polinyà',
  'Rellinars',
  'Ripollet',
  'Sabadell',
  'Sant Adrià de Besòs',
  'Sant Boi de Llobregat',
  'Sant Cugat del Vallès',
  'Sant Joan Despí',
  'Sant Just Desvern',
  'Sant Quirze del Vallès',
  'Santa Coloma de Gramenet',
  'Santa Perpètua de Mogoda',
  'Sentmenat',
  'Terrassa',
  'Ullastrell',
  'Viladecans',
] as const;

/** Prefix match for native typeahead — empty / short query → no dropdown. */
export function filterMunicipioSuggestions(
  query: string,
  limit = 6,
): string[] {
  const q = query.trim().toLocaleLowerCase('es');
  if (q.length < 2) return [];
  const matches: string[] = [];
  for (const city of ALCANCE_MUNICIPIO_SUGGESTIONS) {
    if (city.toLocaleLowerCase('es').startsWith(q)) {
      matches.push(city);
      if (matches.length >= limit) break;
    }
  }
  return matches;
}

export const MAX_ALCANCE_FILES = 5;
export const MAX_ALCANCE_FILE_BYTES = 10 * 1024 * 1024;

export const ALCANCE_ALLOWED_MIME = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'application/pdf',
  'image/heic',
  'image/heif',
] as const;

export type AlcanceTipo =
  | 'cocina'
  | 'armarios-vestidor'
  | 'bano'
  | 'salon-otros';

export type AlcanceMarca = 'ikea' | 'leroy' | 'obramat' | 'otra';

export type AlcanceSistema =
  | 'metod'
  | 'pax'
  | 'delinia'
  | 'otro'
  | 'no-lo-se';

export interface AlcanceMontajePayload {
  tipos: AlcanceTipo[];
  marca: AlcanceMarca | '';
  marcaOtra?: string;
  sistema: AlcanceSistema | '';
  sistemaOtro?: string;
  materialEstado:
    | 'en-vivienda'
    | 'en-tienda'
    | 'por-comprar'
    | 'mixto'
    | 'no-lo-se'
    | '';
  desmontar: 'si' | 'no' | 'parcial' | '';
  retiradaResiduos: 'si' | 'no' | 'no-aplica' | '';
  retiradaEmbalajes: 'si' | 'no' | '';
  integracionEspecial: 'no' | 'si' | '';
  integracionCual?: string;
  tipoMontaje: 'completa' | 'parcial' | 'sustitucion' | '';
  distribucion: 'lineal' | 'en-l' | 'en-u' | 'isla' | 'otra' | '';
  encimera: 'no' | 'laminada' | 'piedra' | 'no-lo-se' | '';
  cortes: 'si' | 'no' | 'no-aplica' | '';
  tomas: 'si' | 'no' | 'parcial' | 'no-lo-se' | '';
  fregadero: 'solo-colocar' | 'conexion-tomas' | 'no' | '';
  electrodomesticos: 'solo-encajar' | 'conexion-tomas' | 'no' | '';
  campana: 'si' | 'no' | 'no-hay' | 'no-lo-se' | '';
  armariosCuerpos?: string;
  armariosCorrederas: 'si' | 'no' | '';
  armariosAnclaje: 'si' | 'no' | '';
  armariosRemateTecho: 'si' | 'no' | 'no-lo-se' | '';
  otrosDetalle?: string;
  direccion: string;
  codigoPostal: string;
  municipio: string;
  urgencia: 'sin-prisa' | '2-4-semanas' | 'urgente' | '';
  horario: 'laboral' | 'tardes-fds' | 'a-convenir' | 'no-lo-se' | '';
  habitada: 'si' | 'no' | 'a-ratos' | '';
  medidasModo: 'approx' | 'no-se' | 'adjuntare' | '';
  medidasValor?: string;
  planta?: string;
  ascensor: 'si' | 'no' | '';
  descarga: 'si' | 'no' | '';
  comentarios?: string;
  nombre: string;
  apellidos: string;
  phone: string;
  email?: string;
  privacyConsent: boolean;
}

export const EMPTY_ALCANCE_PAYLOAD: AlcanceMontajePayload = {
  tipos: [],
  marca: '',
  sistema: '',
  materialEstado: '',
  desmontar: '',
  retiradaResiduos: '',
  retiradaEmbalajes: '',
  integracionEspecial: '',
  tipoMontaje: '',
  distribucion: '',
  encimera: '',
  cortes: '',
  tomas: '',
  fregadero: '',
  electrodomesticos: '',
  campana: '',
  armariosCorrederas: '',
  armariosAnclaje: '',
  armariosRemateTecho: '',
  direccion: '',
  codigoPostal: '',
  municipio: '',
  urgencia: '',
  horario: '',
  habitada: '',
  medidasModo: '',
  ascensor: '',
  descarga: '',
  nombre: '',
  apellidos: '',
  phone: '',
  email: '',
  privacyConsent: false,
};

export type AlcanceDraftAnswers = Omit<
  AlcanceMontajePayload,
  'nombre' | 'apellidos' | 'phone' | 'email' | 'privacyConsent'
>;

export function alcanceFullName(
  data: Pick<AlcanceMontajePayload, 'nombre' | 'apellidos'>,
): string {
  return `${data.nombre.trim()} ${data.apellidos.trim()}`.trim();
}

/**
 * Build a `tel:` href for ops (email / clients that link URIs).
 * ES mobiles without country code → +34.
 */
export function buildAlcanceTelHref(phone: string): string | null {
  const raw = phone.trim();
  if (!raw) return null;
  const cleaned = raw.replace(/[\s\-().]/g, '');
  let digits = cleaned.startsWith('+') ? cleaned.slice(1) : cleaned;
  digits = digits.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) return null;
  if (!cleaned.startsWith('+') && digits.length === 9 && /^[679]/.test(digits)) {
    digits = `34${digits}`;
  }
  return `tel:+${digits}`;
}

/** E.164-ish display for Telegram auto-link (+346… / international). */
export function formatAlcancePhoneE164(phone: string): string | null {
  const href = buildAlcanceTelHref(phone);
  if (!href) return null;
  return href.slice('tel:'.length);
}

export function formatAlcanceObraAddress(
  data: Pick<
    AlcanceMontajePayload,
    'direccion' | 'codigoPostal' | 'municipio'
  >,
): string {
  const street = data.direccion.trim();
  const cp = data.codigoPostal.trim();
  const city = data.municipio.trim();
  const locality = [cp, city].filter(Boolean).join(' ');
  return [street, locality].filter(Boolean).join(', ');
}

/** Search URL so ops can open the obra in Google Maps in one tap. */
export function buildAlcanceMapsSearchUrl(
  data: Pick<
    AlcanceMontajePayload,
    'direccion' | 'codigoPostal' | 'municipio'
  >,
): string | null {
  const query = [formatAlcanceObraAddress(data), 'España']
    .filter(Boolean)
    .join(', ');
  if (!query.replace(/España|,|\s/g, '')) return null;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function isValidCodigoPostalES(cp: string): boolean {
  return /^\d{5}$/.test(cp.trim());
}

export function sistemasForMarca(marca: AlcanceMarca | ''): AlcanceSistema[] {
  if (marca === 'ikea') return ['metod', 'pax', 'otro', 'no-lo-se'];
  if (marca === 'leroy') return ['delinia', 'otro', 'no-lo-se'];
  if (marca === 'obramat' || marca === 'otra') return ['otro', 'no-lo-se'];
  return ['metod', 'pax', 'delinia', 'otro', 'no-lo-se'];
}

export function isAlcanceMimeAllowed(mime: string): boolean {
  const normalized = mime.toLowerCase().trim();
  return (ALCANCE_ALLOWED_MIME as readonly string[]).includes(normalized);
}

const TIPO_LABELS: Record<AlcanceTipo, string> = {
  cocina: 'Cocina',
  'armarios-vestidor': 'Armarios / vestidor',
  bano: 'Baño',
  'salon-otros': 'Salón / otros',
};

const LABELS: Record<string, string> = {
  ikea: 'IKEA',
  leroy: 'Leroy Merlin',
  obramat: 'Obramat',
  otra: 'Otra',
  metod: 'METOD',
  pax: 'PAX',
  delinia: 'DELINIA',
  otro: 'Otro',
  'no-lo-se': 'No lo sé',
  'en-vivienda': 'Ya en la vivienda',
  'en-tienda': 'En tienda (pendiente entrega)',
  'por-comprar': 'Por comprar',
  mixto: 'Mixto',
  si: 'Sí',
  no: 'No',
  parcial: 'Parcial',
  'no-aplica': 'No aplica',
  completa: 'Cocina completa',
  sustitucion: 'Sustitución de módulos',
  lineal: 'Lineal',
  'en-l': 'En L',
  'en-u': 'En U',
  isla: 'Isla / península',
  laminada: 'Laminada/madera (montamos)',
  piedra: 'Piedra/cuarzo (marmolistas)',
  'solo-colocar': 'Solo colocar',
  'conexion-tomas': 'Conexión a tomas',
  'solo-encajar': 'Solo encajar',
  'no-hay': 'Sin campana',
  'sin-prisa': 'Sin prisa',
  '2-4-semanas': '2–4 semanas',
  urgente: 'Urgente',
  laboral: 'Horario laboral (L–V diurno)',
  'tardes-fds': 'Solo tardes / fines de semana',
  'a-convenir': 'A convenir',
  'a-ratos': 'A ratos',
  approx: 'Medida aproximada',
  'no-se': 'No sé medidas exactas',
  adjuntare: 'Adjuntaré plano o fotos',
};

function label(value: string | undefined | null): string {
  if (!value) return '—';
  return LABELS[value] ?? value;
}

export function buildAlcanceEmailSubject(fullName: string): string {
  const safe = fullName.trim() || 'Cliente';
  return `Alcance proyecto — ${ALCANCE_SERVICE_LABEL} — ${safe}`;
}

export function buildAlcancePendiente(
  data: AlcanceMontajePayload,
  fileNames: string[],
): string[] {
  const pending: string[] = [];
  const hasCocina = data.tipos.includes('cocina');
  const hasArmarios = data.tipos.includes('armarios-vestidor');

  const pushIfNoSe = (value: string, labelText: string) => {
    if (value === 'no-lo-se') pending.push(`${labelText}: no lo sé`);
  };

  pushIfNoSe(data.materialEstado, 'Estado del material');
  if (hasCocina) {
    pushIfNoSe(data.encimera, 'Encimera');
    pushIfNoSe(data.tomas, 'Tomas agua/electricidad');
    pushIfNoSe(data.campana, 'Campana / conducto');
  }
  if (hasArmarios) {
    pushIfNoSe(data.armariosRemateTecho, 'Remate a techo');
  }

  if (data.medidasModo === 'adjuntare' && fileNames.length === 0) {
    pending.push('Indicó que adjuntaría plano/fotos, pero no hay archivos');
  }

  if (hasCocina && data.tipoMontaje === 'completa' && fileNames.length === 0) {
    pending.push('Cocina completa sin documentación adjunta');
  }

  const pideConexion =
    data.fregadero === 'conexion-tomas' ||
    data.electrodomesticos === 'conexion-tomas';
  if (pideConexion && (data.tomas === 'no' || data.tomas === 'parcial')) {
    pending.push('Pide conexión pero las tomas no están (del todo) preparadas');
  }

  if (data.encimera === 'piedra') {
    pending.push('Encimera de piedra/cuarzo: confirmar marmolistas');
  }

  if (
    data.urgencia === 'urgente' &&
    data.materialEstado &&
    data.materialEstado !== 'en-vivienda'
  ) {
    pending.push('Urgente y el material aún no está en la vivienda');
  }

  if (data.urgencia === 'urgente' && data.horario === 'tardes-fds') {
    pending.push('Urgente con horario solo tardes/fines de semana');
  }

  if (
    data.integracionEspecial === 'si' &&
    !data.integracionCual?.trim() &&
    fileNames.length === 0
  ) {
    pending.push('Integración especial sin modelo ni foto');
  }

  return pending;
}

function campanaLabel(value: string): string {
  if (value === 'si') return 'Sí, conexión al conducto';
  if (value === 'no') return 'No necesita conducto';
  if (value === 'no-hay') return 'Sin campana';
  if (value === 'no-lo-se') return 'No lo sé';
  return label(value);
}

export type AlcanceReviewRow = {
  label: string;
  value: string;
  /** Optional link target (e.g. Google Maps). */
  href?: string;
};

export type AlcanceReviewSection = {
  id: string;
  title: string;
  /** Wizard step to jump to when editing. */
  step: 0 | 1 | 2 | 3;
  rows: AlcanceReviewRow[];
};

/** Structured review blocks for the confirmation UI (and flat text for ops). */
export function buildAlcanceReviewSections(
  data: AlcanceMontajePayload,
  fileNames: string[],
): AlcanceReviewSection[] {
  const tipos = data.tipos.map((t) => TIPO_LABELS[t]).join(', ') || '—';
  const marca =
    data.marca === 'otra' && data.marcaOtra?.trim()
      ? `Otra (${data.marcaOtra.trim()})`
      : label(data.marca);
  const sistema =
    data.sistema === 'otro' && data.sistemaOtro?.trim()
      ? `Otro (${data.sistemaOtro.trim()})`
      : label(data.sistema);
  const docs =
    fileNames.length > 0 ? fileNames.join(', ') : 'Ningún archivo';

  const sections: AlcanceReviewSection[] = [
    {
      id: 'montar',
      title: 'Qué montar',
      step: 0,
      rows: [
        { label: 'Qué montar', value: tipos },
        { label: 'Marca', value: marca },
        { label: 'Sistema / modelo', value: sistema },
        { label: 'Material', value: label(data.materialEstado) },
        { label: 'Desmontar lo viejo', value: label(data.desmontar) },
        {
          label: 'Retirada residuos desmontaje',
          value: label(data.retiradaResiduos),
        },
        {
          label: 'Retirada embalajes nuevos',
          value: label(data.retiradaEmbalajes),
        },
      ],
    },
  ];

  const detalleRows: AlcanceReviewRow[] = [];
  if (data.integracionEspecial) {
    detalleRows.push({
      label: 'Integración especial',
      value: `${label(data.integracionEspecial)}${
        data.integracionCual?.trim() ? ` — ${data.integracionCual.trim()}` : ''
      }`,
    });
  }
  if (data.tipos.includes('cocina')) {
    detalleRows.push(
      { label: 'Tipo de montaje', value: label(data.tipoMontaje) },
      { label: 'Distribución', value: label(data.distribucion) },
      { label: 'Encimera', value: label(data.encimera) },
      { label: 'Cortes fregadero/placa', value: label(data.cortes) },
      { label: 'Tomas agua/luz', value: label(data.tomas) },
      { label: 'Fregadero + grifo', value: label(data.fregadero) },
      { label: 'Electrodomésticos', value: label(data.electrodomesticos) },
      { label: 'Campana', value: campanaLabel(data.campana) },
    );
  }
  if (data.tipos.includes('armarios-vestidor')) {
    detalleRows.push(
      { label: 'Armarios — cuerpos', value: data.armariosCuerpos?.trim() || '—' },
      { label: 'Armarios — correderas', value: label(data.armariosCorrederas) },
      { label: 'Armarios — anclaje', value: label(data.armariosAnclaje) },
      {
        label: 'Armarios — remate a techo',
        value: label(data.armariosRemateTecho),
      },
    );
  }
  if (
    (data.tipos.includes('bano') || data.tipos.includes('salon-otros')) &&
    data.otrosDetalle?.trim()
  ) {
    detalleRows.push({
      label: 'Detalle baño/otros',
      value: data.otrosDetalle.trim(),
    });
  }
  if (detalleRows.length > 0) {
    sections.push({
      id: 'detalles',
      title: 'Detalles del montaje',
      step: 1,
      rows: detalleRows,
    });
  }

  const medidas =
    data.medidasModo === 'approx' && data.medidasValor?.trim()
      ? data.medidasValor.trim()
      : label(data.medidasModo);
  const obra = formatAlcanceObraAddress(data);
  const mapsUrl = buildAlcanceMapsSearchUrl(data);
  const ubicacionRows: AlcanceReviewRow[] = [
    { label: 'Dirección obra', value: obra || '—' },
  ];
  if (mapsUrl) {
    ubicacionRows.push({
      label: 'Google Maps',
      value: 'Abrir en Maps',
      href: mapsUrl,
    });
  }
  ubicacionRows.push(
    { label: 'Urgencia', value: label(data.urgencia) },
    { label: 'Horario', value: label(data.horario) },
    { label: '¿Vives durante el montaje?', value: label(data.habitada) },
    { label: 'Medidas', value: medidas },
    { label: 'Planta', value: data.planta?.trim() || '—' },
    { label: 'Ascensor', value: label(data.ascensor) },
    { label: 'Descarga cerca', value: label(data.descarga) },
  );
  sections.push({
    id: 'ubicacion',
    title: 'Medidas y ubicación',
    step: 2,
    rows: ubicacionRows,
  });

  const docRows: AlcanceReviewRow[] = [
    { label: 'Documentación', value: docs },
  ];
  if (data.comentarios?.trim()) {
    docRows.push({ label: 'Comentarios', value: data.comentarios.trim() });
  }
  sections.push({
    id: 'docs',
    title: 'Documentos',
    step: 3,
    rows: docRows,
  });

  return sections;
}

/** Flat text review for Telegram/email (no ops pendiente block). */
export function buildAlcanceReviewText(
  data: AlcanceMontajePayload,
  fileNames: string[],
): string {
  return buildAlcanceReviewSections(data, fileNames)
    .flatMap((section) =>
      section.rows.map((row) =>
        row.href
          ? `${row.label}: ${row.href}`
          : `${row.label}: ${row.value}`,
      ),
    )
    .join('\n');
}

export function buildAlcanceSummaryText(
  data: AlcanceMontajePayload,
  fileNames: string[],
): string {
  const pendiente = buildAlcancePendiente(data, fileNames);
  const fullName = alcanceFullName(data);
  const review = buildAlcanceReviewText(data, fileNames);

  const phoneE164 = formatAlcancePhoneE164(data.phone);
  const telHref = buildAlcanceTelHref(data.phone);
  const lines = [
    'Nuevo alcance de proyecto',
    `${ALCANCE_SERVICE_LABEL} — ${fullName}`,
    `Nombre: ${data.nombre.trim()} · Apellidos: ${data.apellidos.trim()}`,
    `Tel: ${phoneE164 || data.phone.trim()}${data.email?.trim() ? ` · Email: ${data.email.trim()}` : ''}`,
  ];
  if (telHref) {
    lines.push(`Llamar: ${telHref}`);
  }
  lines.push('', review, '', 'Pendiente de aclarar:');

  if (pendiente.length === 0) {
    lines.push('- (nada crítico detectado)');
  } else {
    for (const item of pendiente) lines.push(`- ${item}`);
  }

  lines.push(
    '',
    `Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}`,
  );

  return lines.join('\n');
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildPendienteLines(
  data: AlcanceMontajePayload,
  fileNames: string[],
): string[] {
  const pendiente = buildAlcancePendiente(data, fileNames);
  if (pendiente.length === 0) return ['(nada crítico detectado)'];
  return pendiente;
}

/** Email HTML: section cards (same blocks as the form Resumen). */
export function buildAlcanceSummaryHtml(
  data: AlcanceMontajePayload,
  fileNames: string[],
): string {
  const fullName = alcanceFullName(data);
  const sections = buildAlcanceReviewSections(data, fileNames);
  const mapsUrl = buildAlcanceMapsSearchUrl(data);
  const obra = formatAlcanceObraAddress(data);
  const telHref = buildAlcanceTelHref(data.phone);
  const phoneE164 = formatAlcancePhoneE164(data.phone);
  const pendiente = buildPendienteLines(data, fileNames);
  const when = new Date().toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
  });

  const callBlock = telHref
    ? `<a href="${escapeHtml(telHref)}" style="display:inline-block;background:#1f2937;color:#fff;text-decoration:none;padding:10px 16px;border-radius:8px;font-weight:600;margin:0 8px 8px 0;">Llamar ${escapeHtml(phoneE164 || data.phone.trim())}</a>`
    : '';
  const mapsBlock = mapsUrl
    ? `<a href="${escapeHtml(mapsUrl)}" style="display:inline-block;background:#d97706;color:#fff;text-decoration:none;padding:10px 16px;border-radius:8px;font-weight:600;margin:0 8px 8px 0;">Ver obra en Google Maps</a>`
    : '';

  const sectionHtml = sections
    .map((section) => {
      const rows = section.rows
        .map((row) => {
          const value = row.href
            ? `<a href="${escapeHtml(row.href)}" style="color:#d97706;font-weight:600;">${escapeHtml(row.value)}</a>`
            : escapeHtml(row.value);
          return `<tr>
            <td style="padding:8px 12px;border-top:1px solid #f3f4f6;color:#6b7280;font-size:13px;width:42%;vertical-align:top;">${escapeHtml(row.label)}</td>
            <td style="padding:8px 12px;border-top:1px solid #f3f4f6;color:#111827;font-size:13px;font-weight:600;vertical-align:top;">${value}</td>
          </tr>`;
        })
        .join('');
      return `
        <div style="margin:16px 0;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
          <div style="background:#f9fafb;padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:700;color:#111827;font-size:14px;">
            ${escapeHtml(section.title)}
          </div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${rows}</table>
        </div>`;
    })
    .join('');

  const pendienteHtml = pendiente
    .map(
      (item) =>
        `<li style="margin:0 0 6px;color:#92400e;">${escapeHtml(item)}</li>`,
    )
    .join('');

  return `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
      <p style="background:#fef3c7;border:1px solid #f59e0b;padding:12px;border-radius:8px;color:#92400e;">
        <strong>No responder a este correo.</strong> Contestar al cliente en el hilo de la solicitud (o WhatsApp).
      </p>
      <h2 style="color:#1a1a1a;border-bottom:2px solid #d97706;padding-bottom:10px;">
        Alcance de proyecto — ${escapeHtml(ALCANCE_SERVICE_LABEL)}
      </h2>
      <p style="margin:12px 0 4px;font-size:15px;color:#111827;">
        <strong>${escapeHtml(fullName)}</strong><br />
        <span style="color:#4b5563;font-size:13px;">
          ${escapeHtml(data.nombre.trim())} · ${escapeHtml(data.apellidos.trim())}<br />
          Tel: ${escapeHtml(phoneE164 || data.phone.trim())}${
            data.email?.trim()
              ? `<br />Email: ${escapeHtml(data.email.trim())}`
              : ''
          }
        </span>
      </p>
      <p style="margin:16px 0 4px;">
        ${callBlock}${mapsBlock}
        ${obra ? `<br /><span style="font-size:12px;color:#6b7280;">${escapeHtml(obra)}</span>` : ''}
      </p>
      <p style="font-size:12px;color:#6b7280;margin:0 0 8px;">
        Adjunto: archivo .vcf para guardar el contacto (Google / iPhone / Outlook).
      </p>
      ${sectionHtml}
      <div style="margin:16px 0;border:1px solid #f59e0b;border-radius:8px;background:#fffbeb;padding:12px;">
        <div style="font-weight:700;color:#92400e;margin-bottom:8px;">Pendiente de aclarar</div>
        <ul style="margin:0;padding-left:18px;">${pendienteHtml}</ul>
      </div>
      <p style="font-size:12px;color:#9ca3af;">Fecha: ${escapeHtml(when)}</p>
    </div>
  `.trim();
}

/**
 * Telegram HTML (subset of tags only: b, a, … — no div/style).
 * Split-friendly: returns one message body under ~4k when possible.
 */
export function buildAlcanceSummaryTelegramHtml(
  data: AlcanceMontajePayload,
  fileNames: string[],
): string {
  const fullName = escapeHtml(alcanceFullName(data));
  const sections = buildAlcanceReviewSections(data, fileNames);
  const mapsUrl = buildAlcanceMapsSearchUrl(data);
  const telHref = buildAlcanceTelHref(data.phone);
  const phoneE164 = formatAlcancePhoneE164(data.phone);
  const pendiente = buildPendienteLines(data, fileNames);
  const when = escapeHtml(
    new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }),
  );

  const parts: string[] = [
    '<b>📋 Alcance proyecto</b>',
    `<b>${escapeHtml(ALCANCE_SERVICE_LABEL)}</b> — ${fullName}`,
    `Nombre: ${escapeHtml(data.nombre.trim())} · Apellidos: ${escapeHtml(data.apellidos.trim())}`,
  ];

  // Telegram HTML only allows http(s) hrefs — use E.164 text for native call/WA link.
  parts.push(`Tel: ${escapeHtml(phoneE164 || data.phone.trim())}`);
  if (telHref) {
    parts.push(`Llamar: ${escapeHtml(telHref)}`);
  }
  if (data.email?.trim()) {
    parts.push(`Email: ${escapeHtml(data.email.trim())}`);
  }
  if (mapsUrl) {
    parts.push(`📍 <a href="${escapeHtml(mapsUrl)}">Google Maps</a>`);
  }

  for (const section of sections) {
    parts.push('');
    parts.push(`<b>${escapeHtml(section.title)}</b>`);
    for (const row of section.rows) {
      if (row.href) {
        parts.push(
          `${escapeHtml(row.label)}: <a href="${escapeHtml(row.href)}">${escapeHtml(row.value)}</a>`,
        );
      } else {
        parts.push(
          `${escapeHtml(row.label)}: ${escapeHtml(row.value)}`,
        );
      }
    }
  }

  parts.push('');
  parts.push('<b>Pendiente de aclarar</b>');
  for (const item of pendiente) {
    parts.push(`• ${escapeHtml(item)}`);
  }
  parts.push('');
  parts.push(`Fecha: ${when}`);

  return parts.join('\n');
}

/** Short client confirmation (only when they provided email). */
export function buildAlcanceClientAckHtml(
  data: Pick<AlcanceMontajePayload, 'nombre'>,
): string {
  const name = escapeHtml(data.nombre.trim() || 'hola');
  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
      <p>Hola ${name},</p>
      <p>Hemos recibido los detalles de tu proyecto de montaje. Te responderemos en la conversación ya abierta (email o WhatsApp).</p>
      <p style="color:#6b7280;font-size:13px;">Reformix Barcelona</p>
    </div>
  `.trim();
}

export function buildAlcanceClientAckSubject(): string {
  return `Hemos recibido tu alcance — ${ALCANCE_SERVICE_LABEL}`;
}

function escapeVCard(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;');
}

function foldVCardLine(line: string): string {
  if (line.length <= 75) return line;
  const chunks: string[] = [];
  let remaining = line;
  chunks.push(remaining.slice(0, 75));
  remaining = remaining.slice(75);
  while (remaining.length) {
    chunks.push(` ${remaining.slice(0, 74)}`);
    remaining = remaining.slice(74);
  }
  return chunks.join('\r\n');
}

export function alcanceVCardFilename(
  nombre: string,
  apellidos: string,
): string {
  const slug = alcanceFullName({ nombre, apellidos })
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
    .slice(0, 40);
  return `contacto-${slug || 'lead'}.vcf`;
}

/** Lead vCard for Irina (Google Contacts / iPhone / Outlook) — same UX as RUSO. */
export function buildAlcanceVCard(
  data: AlcanceMontajePayload,
  submittedAt: Date = new Date(),
): string {
  const fullName = alcanceFullName(data);
  const when = submittedAt.toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
  });
  const obra = formatAlcanceObraAddress(data);
  const mapsUrl = buildAlcanceMapsSearchUrl(data);
  const noteLines = [
    `Alcance proyecto — ${ALCANCE_SERVICE_LABEL}`,
    `Enviado: ${when} (Europe/Madrid)`,
    obra ? `Obra: ${obra}` : null,
    mapsUrl ? `Mapa: ${mapsUrl}` : null,
    'Fuente: reformix.barcelona/alcance-proyecto/montaje-muebles-cocinas',
  ].filter(Boolean) as string[];

  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${escapeVCard(fullName)}`,
    `N:${escapeVCard(data.apellidos.trim())};${escapeVCard(data.nombre.trim())};;;`,
    `TEL;TYPE=CELL:${escapeVCard(data.phone.trim())}`,
  ];

  if (data.email?.trim()) {
    lines.push(`EMAIL;TYPE=INTERNET:${escapeVCard(data.email.trim())}`);
  }

  if (obra) {
    lines.push(
      `ADR;TYPE=WORK:;;${escapeVCard(data.direccion.trim())};${escapeVCard(data.municipio.trim())};;${escapeVCard(data.codigoPostal.trim())};España`,
    );
  }

  if (mapsUrl) {
    lines.push(`URL:${escapeVCard(mapsUrl)}`);
  }

  lines.push(
    `NOTE:${escapeVCard(noteLines.join('\n'))}`,
    'CATEGORIES:Reformix,Alcance montaje',
    'END:VCARD',
  );

  return lines.map(foldVCardLine).join('\r\n');
}

export { TIPO_LABELS, LABELS as ALCANCE_VALUE_LABELS };

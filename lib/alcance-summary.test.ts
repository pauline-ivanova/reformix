import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  ALCANCE_MUNICIPIO_SUGGESTIONS,
  alcanceVCardFilename,
  filterMunicipioSuggestions,
  buildAlcanceClientAckHtml,
  buildAlcanceClientAckSubject,
  buildAlcanceEmailSubject,
  buildAlcanceMapsSearchUrl,
  buildAlcancePendiente,
  buildAlcanceReviewSections,
  buildAlcanceReviewText,
  buildAlcanceSummaryHtml,
  buildAlcanceSummaryTelegramHtml,
  buildAlcanceSummaryText,
  buildAlcanceTelHref,
  buildAlcanceVCard,
  EMPTY_ALCANCE_PAYLOAD,
  formatAlcanceObraAddress,
  formatAlcancePhoneE164,
  isAlcanceMimeAllowed,
  isValidCodigoPostalES,
  MAX_ALCANCE_FILE_BYTES,
  MAX_ALCANCE_FILES,
  sistemasForMarca,
  type AlcanceMontajePayload,
} from './alcance-summary.ts';

function basePayload(
  overrides: Partial<AlcanceMontajePayload> = {},
): AlcanceMontajePayload {
  return {
    ...EMPTY_ALCANCE_PAYLOAD,
    tipos: ['cocina'],
    marca: 'ikea',
    sistema: 'metod',
    materialEstado: 'en-vivienda',
    desmontar: 'no',
    retiradaResiduos: 'no-aplica',
    retiradaEmbalajes: 'si',
    integracionEspecial: 'no',
    tipoMontaje: 'completa',
    distribucion: 'lineal',
    encimera: 'laminada',
    cortes: 'si',
    tomas: 'si',
    fregadero: 'conexion-tomas',
    electrodomesticos: 'conexion-tomas',
    campana: 'no',
    direccion: 'Carrer de Provença 100',
    codigoPostal: '08029',
    municipio: 'Barcelona',
    urgencia: 'sin-prisa',
    horario: 'laboral',
    habitada: 'si',
    medidasModo: 'approx',
    medidasValor: '2,25 m',
    nombre: 'Juliana',
    apellidos: 'Nastaro García',
    phone: '674610599',
    privacyConsent: true,
    ...overrides,
  };
}

describe('ALCANCE_MUNICIPIO_SUGGESTIONS', () => {
  it('covers core service-area towns for datalist typeahead', () => {
    assert.ok(ALCANCE_MUNICIPIO_SUGGESTIONS.includes('Sabadell'));
    assert.ok(ALCANCE_MUNICIPIO_SUGGESTIONS.includes('Barcelona'));
    assert.ok(ALCANCE_MUNICIPIO_SUGGESTIONS.includes('Terrassa'));
    assert.equal(
      [...ALCANCE_MUNICIPIO_SUGGESTIONS].sort((a, b) =>
        a.localeCompare(b, 'es'),
      ).join('|'),
      [...ALCANCE_MUNICIPIO_SUGGESTIONS].join('|'),
    );
  });
});

describe('filterMunicipioSuggestions', () => {
  it('stays quiet until 2 characters, then returns a short prefix list', () => {
    assert.deepEqual(filterMunicipioSuggestions(''), []);
    assert.deepEqual(filterMunicipioSuggestions('S'), []);
    assert.deepEqual(filterMunicipioSuggestions('Sab'), ['Sabadell']);
    assert.ok(filterMunicipioSuggestions('San').length <= 6);
    assert.ok(filterMunicipioSuggestions('San').every((c) => c.startsWith('San')));
  });
});

describe('buildAlcanceEmailSubject', () => {
  it('prefixes Alcance proyecto and includes service + name', () => {
    assert.equal(
      buildAlcanceEmailSubject('Juliana'),
      'Alcance proyecto — Montaje de muebles y cocinas — Juliana',
    );
  });
});

describe('sistemasForMarca', () => {
  it('filters systems by brand', () => {
    assert.deepEqual(sistemasForMarca('ikea'), [
      'metod',
      'pax',
      'otro',
      'no-lo-se',
    ]);
    assert.deepEqual(sistemasForMarca('leroy'), [
      'delinia',
      'otro',
      'no-lo-se',
    ]);
  });
});

describe('file limits helpers', () => {
  it('exposes expected upload caps', () => {
    assert.equal(MAX_ALCANCE_FILES, 5);
    assert.equal(MAX_ALCANCE_FILE_BYTES, 10 * 1024 * 1024);
  });

  it('allowlists MIME types', () => {
    assert.equal(isAlcanceMimeAllowed('application/pdf'), true);
    assert.equal(isAlcanceMimeAllowed('image/jpeg'), true);
    assert.equal(isAlcanceMimeAllowed('application/zip'), false);
  });

  it('validates Spanish postal codes', () => {
    assert.equal(isValidCodigoPostalES('08001'), true);
    assert.equal(isValidCodigoPostalES('8001'), false);
    assert.equal(isValidCodigoPostalES('0800A'), false);
  });
});

describe('buildAlcancePendiente', () => {
  it('flags completa kitchen without docs', () => {
    const pending = buildAlcancePendiente(basePayload(), []);
    assert.ok(pending.some((p) => p.includes('sin documentación')));
  });

  it('flags tomas mismatch with conexion', () => {
    const pending = buildAlcancePendiente(
      basePayload({ tomas: 'no', tipoMontaje: 'parcial' }),
      ['plano.pdf'],
    );
    assert.ok(pending.some((p) => p.includes('tomas')));
  });

  it('flags urgent + material not at home', () => {
    const pending = buildAlcancePendiente(
      basePayload({
        urgencia: 'urgente',
        materialEstado: 'por-comprar',
        tipoMontaje: 'parcial',
      }),
      ['a.pdf'],
    );
    assert.ok(pending.some((p) => p.includes('Urgente')));
  });
});

describe('buildAlcanceReviewSections', () => {
  it('splits answers into editable blocks', () => {
    const sections = buildAlcanceReviewSections(basePayload(), ['diseño.pdf']);
    assert.deepEqual(
      sections.map((s) => s.id),
      ['montar', 'detalles', 'ubicacion', 'docs'],
    );
    assert.equal(sections[0].step, 0);
    assert.equal(sections[1].title, 'Detalles del montaje');
    const maps = sections
      .flatMap((s) => s.rows)
      .find((r) => r.label === 'Google Maps');
    assert.ok(maps?.href?.includes('google.com/maps'));
  });
});

describe('buildAlcanceReviewText', () => {
  it('lists filled answers for client confirmation', () => {
    const text = buildAlcanceReviewText(basePayload(), ['diseño.pdf']);
    assert.match(text, /Qué montar: Cocina/);
    assert.match(text, /Carrer de Provença 100/);
    assert.match(text, /diseño\.pdf/);
    assert.match(text, /Google Maps: https:\/\/www\.google\.com\/maps/);
    assert.doesNotMatch(text, /Pendiente de aclarar/);
  });
});

describe('buildAlcanceSummaryText', () => {
  it('includes contact, maps link, tel: and pendiente block', () => {
    const text = buildAlcanceSummaryText(basePayload(), ['diseño.pdf']);
    assert.match(text, /Juliana Nastaro García/);
    assert.match(text, /Apellidos: Nastaro García/);
    assert.match(text, /Carrer de Provença 100/);
    assert.match(text, /08029 Barcelona/);
    assert.match(text, /Google Maps: https:\/\/www\.google\.com\/maps\/search\/\?api=1&query=/);
    assert.match(text, /Llamar: tel:\+34674610599/);
    assert.match(text, /diseño\.pdf/);
    assert.match(text, /Pendiente de aclarar/);
  });
});

describe('buildAlcanceTelHref', () => {
  it('normalizes ES mobiles to tel:+34…', () => {
    assert.equal(buildAlcanceTelHref('674610599'), 'tel:+34674610599');
    assert.equal(formatAlcancePhoneE164('674 610 599'), '+34674610599');
    assert.equal(buildAlcanceTelHref('+34 674 610 599'), 'tel:+34674610599');
  });
});

describe('obra maps helpers', () => {
  it('formats address and builds a search URL', () => {
    const data = basePayload();
    assert.equal(
      formatAlcanceObraAddress(data),
      'Carrer de Provença 100, 08029 Barcelona',
    );
    const url = buildAlcanceMapsSearchUrl(data);
    assert.ok(url);
    assert.match(url!, /^https:\/\/www\.google\.com\/maps\/search\/\?api=1&query=/);
    assert.match(url!, /Proven%C3%A7a|Provenza|08029/);
  });
});

describe('buildAlcanceSummaryHtml', () => {
  it('renders section blocks plus call/maps CTAs', () => {
    const html = buildAlcanceSummaryHtml(basePayload(), []);
    assert.match(html, /Qué montar/);
    assert.match(html, /Detalles del montaje/);
    assert.match(html, /Medidas y ubicación/);
    assert.match(html, /Pendiente de aclarar/);
    assert.match(html, /Ver obra en Google Maps/);
    assert.match(html, /href="https:\/\/www\.google\.com\/maps\/search\/\?api=1&amp;query=/);
    assert.match(html, /href="tel:\+34674610599"/);
    assert.match(html, /Llamar/);
    assert.match(html, /\.vcf para guardar el contacto/);
    assert.doesNotMatch(html, /<pre[\s>]/);
  });
});

describe('buildAlcanceSummaryTelegramHtml', () => {
  it('uses Telegram-safe HTML section headers', () => {
    const html = buildAlcanceSummaryTelegramHtml(basePayload(), ['diseño.pdf']);
    assert.match(html, /<b>📋 Alcance proyecto<\/b>/);
    assert.match(html, /<b>Qué montar<\/b>/);
    assert.match(html, /<b>Pendiente de aclarar<\/b>/);
    assert.match(html, /Google Maps<\/a>/);
    assert.match(html, /Llamar: tel:\+34674610599/);
    assert.match(html, /diseño\.pdf/);
    assert.doesNotMatch(html, /<div/);
  });
});

describe('client ack template', () => {
  it('uses a stable subject and greets by name', () => {
    assert.equal(
      buildAlcanceClientAckSubject(),
      'Hemos recibido tu alcance — Montaje de muebles y cocinas',
    );
    const html = buildAlcanceClientAckHtml(basePayload());
    assert.match(html, /Hola Juliana/);
    assert.match(html, /conversación ya abierta/);
  });
});

describe('buildAlcanceVCard', () => {
  it('builds an importable vCard with phone, email and obra', () => {
    const vcf = buildAlcanceVCard(
      basePayload({ email: 'juliana@example.com' }),
      new Date('2026-11-16T12:00:00Z'),
    );
    assert.match(vcf, /BEGIN:VCARD/);
    assert.match(vcf, /FN:Juliana Nastaro García/);
    assert.match(vcf, /N:Nastaro García;Juliana;;;/);
    assert.match(vcf, /TEL;TYPE=CELL:674610599/);
    assert.match(vcf, /EMAIL;TYPE=INTERNET:juliana@example.com/);
    assert.match(vcf, /ADR;TYPE=WORK:/);
    assert.match(vcf, /Google Maps|Mapa:/);
    assert.match(vcf, /END:VCARD/);
    assert.equal(
      alcanceVCardFilename('Juliana', 'Nastaro García'),
      'contacto-juliana-nastaro-garcia.vcf',
    );
  });
});

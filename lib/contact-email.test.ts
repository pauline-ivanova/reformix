import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  buildContactEmailSubject,
  buildMontajeContactEmailBlock,
  buildMontajeEmailReplyText,
  buildMontajeWhatsAppUrl,
  firstNameFromFullName,
  isMontajeService,
  resolveServiceLabel,
  serviceFromPathname,
  withContactServiceDonor,
} from './contact-services.ts';

describe('resolveServiceLabel', () => {
  it('maps known service slugs and legacy values', () => {
    assert.equal(resolveServiceLabel('reformas-cocinas'), 'Reformas de cocinas');
    assert.equal(resolveServiceLabel('reforma-cocina'), 'Reformas de cocinas');
    assert.equal(
      resolveServiceLabel('montaje-muebles-cocinas'),
      'Montaje de muebles y cocinas',
    );
  });

  it('returns null when service is missing', () => {
    assert.equal(resolveServiceLabel(undefined), null);
    assert.equal(resolveServiceLabel(''), null);
    assert.equal(resolveServiceLabel('   '), null);
  });

  it('falls back to the raw value for unknown services', () => {
    assert.equal(resolveServiceLabel('pintura'), 'pintura');
  });
});

describe('buildContactEmailSubject', () => {
  it('uses service label and name when service is set', () => {
    assert.equal(
      buildContactEmailSubject('Raquel', 'reformas-cocinas'),
      'Reformas de cocinas — Raquel',
    );
  });

  it('falls back to Consulta Reformix when service is missing', () => {
    assert.equal(
      buildContactEmailSubject('Raquel'),
      'Consulta Reformix — Raquel',
    );
    assert.equal(
      buildContactEmailSubject('Raquel', ''),
      'Consulta Reformix — Raquel',
    );
  });
});

describe('donor path → service', () => {
  it('maps landing slugs', () => {
    assert.equal(
      serviceFromPathname('/montaje-muebles-cocinas'),
      'montaje-muebles-cocinas',
    );
    assert.equal(serviceFromPathname('/reformas-cocinas'), 'reformas-cocinas');
    assert.equal(serviceFromPathname('/contacto'), '');
    assert.equal(serviceFromPathname('/'), '');
  });

  it('appends ?service= to /contacto CTAs from a donor page', () => {
    assert.equal(
      withContactServiceDonor('/contacto#form', '/montaje-muebles-cocinas'),
      '/contacto?service=montaje-muebles-cocinas#form',
    );
    assert.equal(
      withContactServiceDonor(
        '/contacto?service=otro',
        '/montaje-muebles-cocinas',
      ),
      '/contacto?service=otro',
    );
  });
});

describe('montaje notify copy', () => {
  it('personalizes greeting with first name only', () => {
    assert.equal(firstNameFromFullName('Juliana Nastaro García'), 'Juliana');
    assert.match(
      buildMontajeEmailReplyText('Juliana Nastaro'),
      /^Hola Juliana,/,
    );
    assert.doesNotMatch(
      buildMontajeEmailReplyText('Juliana Nastaro'),
      /WhatsApp/,
    );
    assert.ok(isMontajeService('montaje-muebles-cocinas'));
  });

  it('builds wa.me with prefill and email block CTA', () => {
    const wa = buildMontajeWhatsAppUrl('674610599', 'Juliana Nastaro');
    assert.ok(wa?.startsWith('https://wa.me/34674610599?text='));
    assert.match(wa!, /Irina/);
    const html = buildMontajeContactEmailBlock({
      name: 'Juliana Nastaro',
      phone: '674610599',
    });
    assert.match(html, /Pedir detalles por WhatsApp/);
    assert.match(html, /Hola Juliana,/);
    assert.match(html, /alcance-proyecto\/montaje-muebles-cocinas/);
  });
});

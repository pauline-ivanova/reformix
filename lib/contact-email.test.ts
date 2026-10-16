import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  buildContactEmailSubject,
  resolveServiceLabel,
} from './contact-email.ts';

describe('resolveServiceLabel', () => {
  it('maps known service slugs', () => {
    assert.equal(resolveServiceLabel('reforma-cocina'), 'Reforma de Cocina');
    assert.equal(resolveServiceLabel('reforma-bano'), 'Reforma de Baño');
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
      buildContactEmailSubject('Raquel', 'reforma-cocina'),
      'Reforma de Cocina — Raquel'
    );
  });

  it('falls back to Consulta Reformix when service is missing', () => {
    assert.equal(
      buildContactEmailSubject('Raquel'),
      'Consulta Reformix — Raquel'
    );
    assert.equal(
      buildContactEmailSubject('Raquel', ''),
      'Consulta Reformix — Raquel'
    );
  });
});

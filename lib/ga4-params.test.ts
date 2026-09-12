import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { inferServiceFromPath } from './ga4-params.ts'

describe('inferServiceFromPath', () => {
  it('returns empty for home and non-service hubs', () => {
    assert.equal(inferServiceFromPath('/'), '')
    assert.equal(inferServiceFromPath('/contacto'), '')
    assert.equal(inferServiceFromPath('/contacto#form'), '')
    assert.equal(inferServiceFromPath('/cookies'), '')
    assert.equal(inferServiceFromPath('/privacidad'), '')
    assert.equal(inferServiceFromPath('/aviso-legal'), '')
  })

  it('returns service slug from landing paths', () => {
    assert.equal(inferServiceFromPath('/reformas-cocinas'), 'reformas-cocinas')
    assert.equal(inferServiceFromPath('/reformas-cocinas/'), 'reformas-cocinas')
    assert.equal(inferServiceFromPath('/fontaneria?x=1'), 'fontaneria')
  })
})

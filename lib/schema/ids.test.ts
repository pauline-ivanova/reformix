import assert from 'node:assert/strict'
import {
  absoluteSchemaUrl,
  localBusinessRef,
  orgRef,
  providerLocalBusinessRef,
  schemaLocalBusinessId,
  schemaOrgId,
  schemaWebsiteId,
} from './ids.ts'

assert.equal(schemaOrgId(), 'https://www.reformix.barcelona/#organization')
assert.equal(schemaLocalBusinessId(), 'https://www.reformix.barcelona/#localbusiness')
assert.equal(schemaWebsiteId(), 'https://www.reformix.barcelona/#website')
assert.deepEqual(orgRef(), { '@id': schemaOrgId() })
assert.deepEqual(localBusinessRef(), { '@id': schemaLocalBusinessId() })

const provider = providerLocalBusinessRef()
assert.equal(provider['@id'], schemaLocalBusinessId())
assert.equal(absoluteSchemaUrl('/contacto'), 'https://www.reformix.barcelona/contacto')

const prev = process.env.NEXT_PUBLIC_SITE_URL
process.env.NEXT_PUBLIC_SITE_URL = 'https://www.reformix.barcelona/\r\n'
assert.equal(absoluteSchemaUrl('/contacto'), 'https://www.reformix.barcelona/contacto')
process.env.NEXT_PUBLIC_SITE_URL = prev

console.log('schema ids tests: ok')

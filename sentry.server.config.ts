import * as Sentry from '@sentry/nextjs'
import {
  getSentryDsn,
  isSentryEnabled,
  sentryBaseOptions,
  sentryBeforeSend,
} from '@/lib/sentry/shared'

Sentry.init({
  dsn: getSentryDsn(),
  enabled: isSentryEnabled(),
  ...sentryBaseOptions,
  beforeSend: sentryBeforeSend,
})

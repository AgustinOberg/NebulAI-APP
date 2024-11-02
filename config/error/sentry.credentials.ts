import * as Sentry from '@sentry/react-native';

import { env } from '../env';
import { routingInstrumentation } from './sentry.config';

Sentry.init({
  dsn: env.EXPO_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  integrations: [
    new Sentry.ReactNativeTracing({
      routingInstrumentation,
    }),
  ],
});

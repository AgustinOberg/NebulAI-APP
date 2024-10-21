import * as Sentry from '@sentry/react-native';

import { env } from '../env';

Sentry.init({
  dsn: env.EXPO_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});

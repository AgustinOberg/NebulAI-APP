import * as Sentry from '@sentry/react-native';

const { wrap: SentryAppWrap } = Sentry;
export const routingInstrumentation =
  new Sentry.ReactNavigationInstrumentation();

export default SentryAppWrap;

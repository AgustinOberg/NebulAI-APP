import { useNavigationContainerRef } from 'expo-router';
import { useEffect } from 'react';

import { routingInstrumentation } from './sentry.config';

export const useSentryRouter = () => {
  const ref = useNavigationContainerRef();

  useEffect(() => {
    if (ref) {
      routingInstrumentation.registerNavigationContainer(ref);
    }
  }, [ref]);
};

import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';

import { wait } from '@/utils/time.utils';

import { useInit } from './useInit';

export const useSplashScreen = () => {
  const { isLoading } = useInit();
  useEffect(() => {
    if (!isLoading) {
      wait(500).then(() => SplashScreen.hideAsync());
    }
  }, [isLoading]);
  return {
    isLoading,
  };
};

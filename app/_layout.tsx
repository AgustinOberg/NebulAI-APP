import 'react-native-reanimated';
import '@/style/unistyles';

import { QueryClientProvider } from '@tanstack/react-query';
import { SplashScreen, Stack } from 'expo-router';
import React from 'react';
import FlashMessage from 'react-native-flash-message';

import { queryClient } from '@/config/query.config';
import { useSplashScreen } from '@/hooks/useSplashScreen';
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: '(app)/(tabs)',
};

const App = () => {
  const { isLoading } = useSplashScreen();
  if (isLoading) return null;
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#2A1B5F' },
      }}
    >
      <Stack.Screen name="(app)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
      <FlashMessage position="top" />
    </QueryClientProvider>
  );
}

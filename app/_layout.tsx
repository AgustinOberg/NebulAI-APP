import 'react-native-reanimated';
import '@/style/unistyles';

import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import React from 'react';

import { queryClient } from '@/config/query.config';
import { useInit } from '@/hooks/useInit';

export const unstable_settings = {
  initialRouteName: '(app)/(tabs)',
};

const App = () => {
  useInit();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(app)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

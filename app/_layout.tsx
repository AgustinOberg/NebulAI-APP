import 'react-native-reanimated';
import '@/style/unistyles';

import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import React from 'react';

import { queryClient } from '@/config/query.config';
import { useInit } from '@/hooks/useInit';

export const unstable_settings = {
  initialRouteName: '(app)/(challenge)',
};

export default function RootLayout() {
  useInit();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
}

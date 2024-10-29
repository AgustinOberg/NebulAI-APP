import 'react-native-reanimated';
import '@/style/unistyles';

import { QueryClientProvider } from '@tanstack/react-query';
import { SplashScreen, Stack } from 'expo-router';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
export { ErrorBoundary } from 'expo-router';
import '@/config/error/sentry.credentials';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import SentryAppWrap from '@/config/error/sentry.config';
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

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <App />
          <FlashMessage position="bottom" />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

export default SentryAppWrap(RootLayout);

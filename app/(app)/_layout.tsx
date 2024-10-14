import { Redirect, Stack } from 'expo-router';
import React from 'react';

import { useUser } from '@/data/state/user.store';
import { useRefreshSession } from '@/hooks/auth/useRefreshSession';
export const unstable_settings = {
  initialRouteName: '(tabs)',
};
const _layout = () => {
  const { isAuthenticated } = useUser();
  useRefreshSession();
  if (!isAuthenticated) return <Redirect href="/(auth)" />;
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(challenge)" />
      <Stack.Screen
        name="about"
        options={{ presentation: 'transparentModal', animation: 'fade' }}
      />
    </Stack>
  );
};

export default _layout;

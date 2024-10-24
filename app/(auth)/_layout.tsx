import { Redirect, Stack } from 'expo-router';
import React from 'react';

import { useUser } from '@/data/state/user.store';

const _layout = () => {
  const { isAuthenticated } = useUser();
  if (isAuthenticated) return <Redirect href="/(app)" />;
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default _layout;

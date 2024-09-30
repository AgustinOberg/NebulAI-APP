import { Stack } from 'expo-router';
import React from 'react';

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="creation" />
      <Stack.Screen name="attempt" />
    </Stack>
  );
};

export default _layout;

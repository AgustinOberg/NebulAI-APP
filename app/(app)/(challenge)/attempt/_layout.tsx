import { Stack } from 'expo-router';
import React from 'react';
import { useStyles } from 'react-native-unistyles';

import AttemptProvider from '@/data/state/attempt.context';

const _layout = () => {
  const { theme } = useStyles();
  return (
    <AttemptProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.colors.primaryBackground,
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="results" />
      </Stack>
    </AttemptProvider>
  );
};

export default _layout;

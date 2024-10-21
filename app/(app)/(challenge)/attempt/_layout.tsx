import { Stack } from 'expo-router';
import React from 'react';
import { useStyles } from 'react-native-unistyles';

import AttemptCarouselProvider from '@/data/state/attempt-carousel.context';

const _layout = () => {
  const { theme } = useStyles();

  return (
    <AttemptCarouselProvider>
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
    </AttemptCarouselProvider>
  );
};

export default _layout;

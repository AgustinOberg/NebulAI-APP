import 'react-native-reanimated';
import 'react-native-gesture-handler';

import { Stack } from 'expo-router';
import React from 'react';
import { useStyles } from 'react-native-unistyles';

import ChallengeProvider from '@/data/state/challenge.context';

export default function TabLayout() {
  const { theme } = useStyles();

  return (
    <ChallengeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.colors.primaryBackground,
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="choose-difficulty"
          options={{
            contentStyle: { backgroundColor: theme.colors.secondaryBackground },
            animation: 'fade_from_bottom',
          }}
        />
        <Stack.Screen
          name="preparing"
          options={{
            contentStyle: { backgroundColor: theme.colors.primaryText },
            animation: 'fade_from_bottom',
          }}
        />
      </Stack>
    </ChallengeProvider>
  );
}

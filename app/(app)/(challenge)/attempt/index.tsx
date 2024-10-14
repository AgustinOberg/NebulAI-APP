import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import AttemptCarousel from '@/components/challenge/attempt/attempt-carousel';
import AttemptHeader from '@/components/challenge/attempt/attep-header';
import ScreenBackground from '@/components/shared/screen-background';
import { useChallengeList } from '@/data/fetchers/challenge.fetcher';
import { useAttemptCarousel } from '@/hooks/attempt/useAttemptCarousel';

const AttemptScreen = () => {
  const { styles } = useStyles(stylesheet);
  const { currentQuestionIndex } = useAttemptCarousel();
  const { data: challenges } = useChallengeList();
  const closeScreen = () => {
    if (challenges && challenges?.data.length > 0)
      router.replace('/(app)/(tabs)');
    else router.replace('/(app)/(challenge)/creation');
  };
  return (
    <View style={styles.container}>
      <ScreenBackground />
      <View style={styles.crossContainer}>
        <Feather name="x" size={24} color="white" onPress={closeScreen} />
      </View>
      <AttemptHeader step={currentQuestionIndex} />
      <AttemptCarousel />
    </View>
  );
};

export default AttemptScreen;

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flex: 1,
    paddingTop: runtime.insets.top,
  },
  crossContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: theme.sizes.screenPadding - 5,
    marginBottom: 20,
  },
  text: {
    paddingHorizontal: 12,
  },
  button: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    width: '100%',
    marginBottom: runtime.insets.bottom + theme.sizes.footer,
  },
}));

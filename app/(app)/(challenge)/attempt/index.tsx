import React from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import AttemptCarousel from '@/components/chalenge/attempt/attempt-carousel';
import AttemptHeader from '@/components/chalenge/attempt/attep-header';
import ScreenBackground from '@/components/shared/screen-background';
import { useAttemptCarousel } from '@/hooks/attempt/useAttemptCarousel';

const AttemptScreen = () => {
  const { styles } = useStyles(stylesheet);
  const { currentQuestionIndex } = useAttemptCarousel();
  return (
    <View style={styles.container}>
      <ScreenBackground />
      <AttemptHeader step={currentQuestionIndex} />
      <AttemptCarousel />
    </View>
  );
};

export default AttemptScreen;

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flex: 1,
    paddingTop: runtime.insets.top + 20,
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

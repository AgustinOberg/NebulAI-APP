import { router } from 'expo-router';
import { MotiView } from 'moti';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import AnimatedStars from '@/components/shared/animated-stars';
import Button from '@/components/ui/button';
import Text from '@/components/ui/text';
import { useAttempt } from '@/hooks/attempt/useAttempt';
import { getResults } from '@/utils/challenge.utils';

const Results = () => {
  const { styles } = useStyles(stylesheet);
  const { answers, questions } = useAttempt();
  const results = useMemo(
    () => getResults(questions, answers),
    [questions, answers],
  );

  const goToHome = () => {
    router.navigate('/(app)/(tabs)');
  };

  return (
    <View style={styles.screen}>
      <AnimatedStars quantity={20} />
      <View style={styles.container}>
        <View style={styles.results}>
          <MotiView
            from={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 500, delay: 200 }}
          >
            <Text size={16}>Tu resultado es...</Text>
          </MotiView>
          <MotiView
            from={{ opacity: 0, translateY: -50, scale: 0.8 }}
            animate={{ opacity: 1, translateY: 0, scale: 1.5 }}
            transition={{ type: 'timing', duration: 500, delay: 500 * 3 }}
          >
            <Text weight="900" size={60}>
              {results.percentage}%
            </Text>
          </MotiView>
          <MotiView
            from={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 500, delay: 500 * 5 }}
          >
            <>
              <Text size={16} style={styles.description}>
                Contestaste correctamente{' '}
                <Text weight="800">{results.correctAnswers}</Text> de las{' '}
                <Text weight="800">{results.totalQuestions}</Text> preguntas.
              </Text>
            </>
          </MotiView>
        </View>
      </View>
      <MotiView
        style={styles.footer}
        from={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 500, delay: 500 * 5 }}
      >
        <Button variant="tertiary" onPress={goToHome}>
          Ver respuestas
        </Button>
        <Button variant="text" onPress={goToHome}>
          Finalizar
        </Button>
      </MotiView>
    </View>
  );
};

export default Results;

const stylesheet = createStyleSheet((theme, runtime) => ({
  screen: {
    backgroundColor: '#351357',
    flex: 1,
  },
  container: {
    paddingTop: runtime.insets.top + 200,
    paddingHorizontal: theme.sizes.screenPadding,
    flex: 1,
    alignItems: 'center',
    gap: 30,
  },
  animation: {
    height: 140,
    width: 140,
    alignSelf: 'center',
  },
  results: {
    alignItems: 'center',
    width: '60%',
  },
  description: {
    textAlign: 'center',
  },
  footer: {
    zIndex: 999,
    width: '100%',
    marginBottom: runtime.insets.bottom + theme.sizes.footer,
    paddingHorizontal: theme.sizes.screenPadding,
  },
}));

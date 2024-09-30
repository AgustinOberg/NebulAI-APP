import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import AstronautWaving from '@/animations/components/astronaut-waving';
import ScreenBackground from '@/components/shared/screen-background';
import Button from '@/components/ui/button';
import Text from '@/components/ui/text';
import { useAttempt } from '@/hooks/attempt/useAttempt';

const Results = () => {
  const { styles } = useStyles(stylesheet);
  const { answers, questions } = useAttempt();

  const userCorrectAnswers = useMemo(() => {
    return questions.filter((eachQuestion) => {
      const correctOption = eachQuestion.options.find(
        (option) => option.isCorrect,
      );
      return answers[eachQuestion._id] === correctOption?._id;
    });
  }, [answers, questions]);

  const results = useMemo(
    () => ({
      percentage: (
        (userCorrectAnswers.length / questions.length) *
        100
      ).toFixed(0),
      correctAnswers: userCorrectAnswers.length,
      totalQuestions: questions.length,
    }),
    [userCorrectAnswers, questions],
  );

  const goToHome = () => {
    router.replace('/(app)/(challenge)/creation');
  };

  return (
    <>
      <ScreenBackground />
      <View style={styles.container}>
        <View style={styles.animation}>
          <AstronautWaving />
        </View>
        <View style={styles.results}>
          <Text size={16}>Tu resultado es...</Text>
          <Text weight="900" size={60}>
            {results.percentage}%
          </Text>
          <Text size={16} style={styles.description}>
            Contestaste correctamente{' '}
            <Text weight="800">{results.correctAnswers}</Text> de las{' '}
            <Text weight="800">{results.totalQuestions}</Text> preguntas que te
            hice.
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button variant="text" onPress={goToHome}>
          Volver al inicio
        </Button>
      </View>
    </>
  );
};

export default Results;

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    paddingTop: runtime.insets.top + 100,
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
    width: '100%',
    marginBottom: runtime.insets.bottom + theme.sizes.footer,
    paddingHorizontal: theme.sizes.screenPadding,
  },
}));

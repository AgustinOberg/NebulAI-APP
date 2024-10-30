/* eslint-disable max-lines-per-function */
import { router } from 'expo-router';
import { MotiView } from 'moti';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import AnimatedStars from '@/components/shared/animated-stars';
import Button from '@/components/ui/button';
import Text from '@/components/ui/text';
import { useAttempt } from '@/hooks/attempt/useAttempt';
import { useAttemptCarousel } from '@/hooks/attempt/useAttemptCarousel';
import { useLang } from '@/language/useLang';
import { getResults } from '@/utils/challenge.utils';

const Results = () => {
  const { styles } = useStyles(stylesheet);
  const { answers, questions, seeResults, challenge } = useAttempt();
  const { reset: resetCarousel } = useAttemptCarousel();
  const { t } = useLang();
  const results = useMemo(
    () => getResults(questions, answers),
    [questions, answers],
  );

  const goToHome = () => {
    router.replace('/(app)/(tabs)');
  };

  const goToResponses = () => {
    resetCarousel();
    seeResults(challenge, answers);
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
            <Text size={16} translate>
              yourResults
            </Text>
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
              <Text size={16} align="center">
                {t('resultsDescription.answeredCorrectly')}{' '}
                <Text weight="800">{results.correctAnswers}</Text>{' '}
                {t('resultsDescription.outOf')}{' '}
                <Text weight="800">{results.totalQuestions}</Text>{' '}
                {t('resultsDescription.questions')}
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
        <Button
          variant="tertiary"
          onPress={goToResponses}
          eventName="go_to_responses"
          translate
        >
          viewResponses
        </Button>
        <Button
          variant="text"
          onPress={goToHome}
          eventName="finish_challenge"
          translate
        >
          finish
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

  footer: {
    zIndex: 999,
    width: '100%',
    marginBottom: runtime.insets.bottom + theme.sizes.footer,
    paddingHorizontal: theme.sizes.screenPadding,
  },
}));

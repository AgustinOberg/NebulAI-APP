import React, { useMemo } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Button from '@/components/ui/button';
import { useAttempt } from '@/hooks/attempt/useAttempt';
import { useAttemptCarousel } from '@/hooks/attempt/useAttemptCarousel';
import type { Question } from '@/types/challenge';

import AttemptSlide from './attempt-slide';
const { width } = Dimensions.get('window');

const AttemptCarousel = () => {
  const { styles } = useStyles(stylesheet);
  const {
    carouselRef,
    setCurrentQuestionIndex,
    goToPreviousStep,
    goToNextStep,
    currentQuestionIndex,
  } = useAttemptCarousel();
  const { questions, answers } = useAttempt();
  const isCompleted = useMemo(
    () => Object.keys(answers).includes(questions[currentQuestionIndex]._id),
    [answers, currentQuestionIndex, questions],
  );

  const renderItem = ({ item }: { item: Question }) => (
    <View style={[styles.item, { width }]}>
      <AttemptSlide currentQuestion={item} />
    </View>
  );
  return (
    <View style={styles.content}>
      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        scrollEnabled={false}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={(e) => {
          const index = Math.floor(e.nativeEvent.contentOffset.x / width);
          setCurrentQuestionIndex(index);
        }}
        ref={carouselRef}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.footer}>
        {isCompleted && (
          <Animated.View entering={FadeInDown}>
            <Button variant="tertiary" onPress={goToNextStep}>
              Siguiente
            </Button>
          </Animated.View>
        )}
        {currentQuestionIndex !== 0 ? (
          <Animated.View entering={FadeInDown} exiting={FadeOutDown}>
            <Button onPress={goToPreviousStep} variant="text">
              Volver
            </Button>
          </Animated.View>
        ) : (
          <View style={styles.spacer} />
        )}
      </View>
    </View>
  );
};

export default AttemptCarousel;
const stylesheet = createStyleSheet((theme, runtime) => ({
  content: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  item: {
    height: '100%',
    paddingHorizontal: theme.sizes.screenPadding,
  },

  footer: {
    paddingHorizontal: theme.sizes.screenPadding,
    width: '100%',
    marginBottom: runtime.insets.bottom + theme.sizes.footer,
    position: 'absolute',
    bottom: 0,
  },
  spacer: {
    height: 50,
    width: '100%',
  },
}));

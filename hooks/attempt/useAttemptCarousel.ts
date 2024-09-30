import { router } from 'expo-router';

import { useAttemptState } from '@/data/state/attempt.context';
import { useAttempt } from '@/hooks/attempt/useAttempt';

export const useAttemptCarousel = () => {
  const { questions } = useAttempt();

  const { currentQuestionIndex, setCurrentQuestionIndex, carouselRef } =
    useAttemptState();
  const goToNextStep = () => {
    if (currentQuestionIndex === questions.length - 1) {
      return router.replace('/(app)/(challenge)/attempt/results');
    }
    carouselRef.current?.scrollToIndex({
      index: currentQuestionIndex + 1,
      animated: true,
    });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const goToPreviousStep = () => {
    if (currentQuestionIndex === 0) {
      return;
    }
    carouselRef.current?.scrollToIndex({
      index: currentQuestionIndex - 1,
      animated: true,
    });
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return {
    goToNextStep,
    goToPreviousStep,
    carouselRef,
    setCurrentQuestionIndex,
    isFirstQuestion,
    isLastQuestion,
    currentQuestionIndex,
  };
};

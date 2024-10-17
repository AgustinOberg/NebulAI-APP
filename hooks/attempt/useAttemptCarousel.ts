import { router } from 'expo-router';

import { useCreateAttempt } from '@/data/fetchers/attempt.fetcher';
import { useAttemptState } from '@/data/state/attempt.context';
import { useAttempt } from '@/hooks/attempt/useAttempt';

export const useAttemptCarousel = () => {
  const { questions, mode } = useAttempt();

  const { currentQuestionIndex, setCurrentQuestionIndex, carouselRef } =
    useAttemptState();
  const { mutate: createAttempt } = useCreateAttempt();
  const goToNextStep = () => {
    if (currentQuestionIndex === questions.length - 1) {
      if (mode === 'new') createAttempt();
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

  const reset = () => {
    setCurrentQuestionIndex(0);
    carouselRef.current?.scrollToIndex({
      index: 0,
      animated: false,
    });
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
    reset,
  };
};

import { useAttemptStore } from '@/data/state/attempt.store';

export const useAttempt = () => {
  const answers = useAttemptStore((state) => state.answers);
  const completeQuestion = useAttemptStore((state) => state.completeQuestion);
  const questions = useAttemptStore((state) => state.questions);

  // const selectAnswer = (question: Question, selectedAnswerId: string) => {
  //   submitAnswer({ questionId: question._id, answerId: selectedAnswerId });
  // };

  // const goToNextQuestion = () => {
  //   if (currentQuestionIndex < questionList.length - 1) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //   } else {
  //     // router.replace('/(challenge)/result');
  //   }
  // };

  // const goToPreviousQuestion = () => {
  //   if (currentQuestionIndex > 0) {
  //     setCurrentQuestionIndex(currentQuestionIndex - 1);
  //   }
  // };

  // const currentQuestion = useMemo(
  //   () => questionList[currentQuestionIndex],
  //   [currentQuestionIndex, questionList],
  // );

  // const selectedAnswer = useMemo(
  //   () =>
  //     selectedAnswers.find(
  //       (answer) => answer.questionId === currentQuestion._id,
  //     ),
  //   [selectedAnswers, currentQuestion],
  // );

  return {
    questions,
    answers,
    completeQuestion,
  };
};

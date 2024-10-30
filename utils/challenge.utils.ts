import type { Question } from '@/types/challenge';

export const getCorrectAnswers = (
  questions: Question[],
  answers: string[],
): number => {
  return questions.reduce((acc, question) => {
    const correctOptionId = question.options.find(
      (option) => option.isCorrect,
    )?._id;
    return correctOptionId && answers.includes(correctOptionId) ? acc + 1 : acc;
  }, 0);
};

export const getResults = (questions: Question[], answers: string[]) => {
  const totalQuestions = questions.length;
  if (totalQuestions === 0) {
    return {
      percentage: 0,
      correctAnswers: 0,
      totalQuestions,
    };
  }

  const correctAnswersCount = getCorrectAnswers(questions, answers);
  const percentage = Math.round((correctAnswersCount / totalQuestions) * 100);

  return {
    percentage,
    correctAnswers: correctAnswersCount,
    totalQuestions,
  };
};

export const isCorrectAnswer = (question: Question, answer: string) => {
  const correctOption = question.options.find((option) => option.isCorrect);
  return correctOption?._id === answer;
};

export const isQuestionCompleted = (question: Question, answers: string[]) => {
  return question?.options?.some((option) => answers.includes(option._id));
};

interface Answer {
  [questionId: string]: string;
}
import type { Question } from '@/types/challenge';

export const getCorrectAnswers = (questions: Question[], answers: Answer) => {
  return questions.reduce((correctAnswers, eachQuestion) => {
    const correctOption = eachQuestion.options.find(
      (option) => option.isCorrect,
    )?._id;
    if (answers[eachQuestion._id] === correctOption) {
      correctAnswers++;
    }
    return correctAnswers;
  }, 0);
};

export const getResults = (questions: Question[], answers: Answer) => {
  const correctAnswersCount = getCorrectAnswers(questions, answers);
  const totalQuestions = questions.length;

  return {
    percentage: ((correctAnswersCount / totalQuestions) * 100).toFixed(0),
    correctAnswers: correctAnswersCount,
    totalQuestions,
  };
};

export const isCorrectAnswer = (question: Question, answer: string) => {
  const correctOption = question.options.find((option) => option.isCorrect);
  return correctOption?._id === answer;
};

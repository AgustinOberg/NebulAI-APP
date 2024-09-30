import type { StateCreator } from 'zustand';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import type { Question } from '@/types/challenge';

export type Answer = {
  questionId: string;
  answerId: string;
};

interface AttemptState {
  // Properties
  questions: Question[];
  answers: {
    [questionId: string]: string;
  };
  // Methods
  setQuestions: (questions: Question[]) => void;
  completeQuestion: (questionId: string, answerId: string) => void;
}

const storeApi: StateCreator<AttemptState, [['zustand/immer', never]]> = (
  set,
) => ({
  // Properties
  questions: [],
  answers: {},

  // Methods
  setQuestions: (questions) => {
    set((state) => {
      state.questions = questions;
    });
  },
  completeQuestion: (questionId, answerId) => {
    set((state) => {
      state.answers[questionId] = answerId;
    });
  },
});

export const useAttemptStore = create<AttemptState>()(immer(storeApi));

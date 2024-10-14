import type { StateCreator } from 'zustand';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import type { Challenge, Question } from '@/types/challenge';

export type Answer = {
  questionId: string;
  answerId: string;
};

interface AttemptState {
  // Properties
  questions: Question[];
  challengeId?: string;
  answers: {
    [questionId: string]: string;
  };
  // Methods
  setChallenge: (challenge: Challenge) => void;
  completeQuestion: (questionId: string, answerId: string) => void;
  reset: () => void;
}

const storeApi: StateCreator<AttemptState, [['zustand/immer', never]]> = (
  set,
) => ({
  // Properties
  questions: [],
  answers: {},
  challengeId: undefined,

  // Methods
  setChallenge: (challenge) => {
    set((state) => {
      state.questions = challenge.questions;
      state.challengeId = challenge._id;
    });
  },
  completeQuestion: (questionId, answerId) => {
    set((state) => {
      state.answers[questionId] = answerId;
    });
  },
  reset: () => {
    set((state) => {
      state.questions = [];
      state.answers = {};
    });
  },
});

export const useAttemptStore = create<AttemptState>()(immer(storeApi));

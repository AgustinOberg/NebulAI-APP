import type { StateCreator } from 'zustand';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import type { Challenge, Question } from '@/types/challenge';

export type Answer = {
  questionId: string;
  answerId: string;
};

export type AttemptMode = 'new' | 'view';
type ModeArgs = {
  mode: AttemptMode;
  challenge?: Challenge;
  answers?: {
    [questionId: string]: string;
  };
};
interface AttemptState {
  // Properties
  questions: Question[];
  challengeId?: string;
  mode: AttemptMode;
  answers: {
    [questionId: string]: string;
  };
  // Methods
  setChallenge: (challenge: Challenge) => void;
  setMode: (args: ModeArgs) => void;
  completeQuestion: (questionId: string, answerId: string) => void;
  reset: () => void;
}

const storeApi: StateCreator<AttemptState, [['zustand/immer', never]]> = (
  set,
) => ({
  // Properties
  mode: 'new',
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
  setMode: ({ mode, challenge, answers }) => {
    set((state) => {
      state.mode = mode;
      state.challengeId = challenge?._id;
      if (answers) state.answers = answers;
    });
  },
  reset: () => {
    set((state) => {
      state.questions = [];
      state.answers = {};
      state.mode = 'new';
    });
  },
});

export const useAttemptStore = create<AttemptState>()(immer(storeApi));

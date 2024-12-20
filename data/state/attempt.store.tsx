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
  answers?: string[];
};
interface AttemptState {
  // Properties
  questions: Question[];
  challengeId?: string;
  challenge?: Challenge;
  mode: AttemptMode;
  answers: string[];
  // Methods
  setChallenge: (challenge: Challenge) => void;
  setMode: (args: ModeArgs) => void;
  completeQuestion: (answerId: string, question: Question) => void;
  reset: () => void;
}

const storeApi: StateCreator<AttemptState, [['zustand/immer', never]]> = (
  set,
) => ({
  // Properties
  mode: 'new',
  questions: [],
  answers: [],
  challengeId: undefined,
  challenge: undefined,

  // Methods
  setChallenge: (challenge) => {
    set((state) => {
      state.questions = challenge.questions;
      state.challengeId = challenge.id;
      state.challenge = challenge;
    });
  },
  completeQuestion: (answerId, question) => {
    set((state) => {
      const alreadyCompleted = question.options.find((o) =>
        state.answers.includes(o.id),
      );
      if (alreadyCompleted) {
        state.answers = state.answers.filter((a) => a !== alreadyCompleted.id);
        state.answers.push(answerId);
      } else {
        state.answers.push(answerId);
      }
    });
  },
  setMode: ({ mode, challenge, answers }) => {
    set((state) => {
      state.mode = mode;
      state.challengeId = challenge?.id;
      state.questions = challenge?.questions || [];
      if (answers) state.answers = answers;
    });
  },
  reset: () => {
    set((state) => {
      state.questions = [];
      state.answers = [];
      state.mode = 'new';
    });
  },
});

export const useAttemptStore = create<AttemptState>()(immer(storeApi));

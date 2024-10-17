import { router } from 'expo-router';

import { useChallengeById } from '@/data/fetchers/challenge.fetcher';
import { useAttemptStore } from '@/data/state/attempt.store';
import type { Challenge } from '@/types/challenge';

export const useAttempt = () => {
  const answers = useAttemptStore((state) => state.answers);
  const resetAttempt = useAttemptStore((state) => state.reset);
  const completeQuestion = useAttemptStore((state) => state.completeQuestion);
  const setMode = useAttemptStore((state) => state.setMode);
  const mode = useAttemptStore((state) => state.mode);
  const questions = useAttemptStore((state) => state.questions);
  const challengeId = useAttemptStore((state) => state.challengeId);
  const setChallenge = useAttemptStore((state) => state.setChallenge);
  const { mutateAsync: getAttempt, variables, isPending } = useChallengeById();

  const startAttemptById = async (id: string) => {
    const q = await getAttempt(id);
    startAttempt(q);
  };
  const startAttempt = (challenge: Challenge) => {
    resetAttempt();
    setChallenge(challenge);
    router.replace('/(challenge)/attempt');
  };

  const seeResults = (challenge?: Challenge) => {
    setMode({ mode: 'view', challenge, answers });
    router.replace('/(challenge)/attempt');
  };

  return {
    questions,
    answers,
    completeQuestion,
    challengeId,
    startAttempt,
    resetAttempt,
    seeResults,
    mode,
    attemptById: {
      startAttemptById,
      isPending,
      variables,
    },
  };
};

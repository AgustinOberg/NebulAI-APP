import { useChallengeCreation } from '@/data/fetchers/challenge.fetcher';
import { useChallengeState } from '@/data/state/challenge.context';
import type { Challenge } from '@/types/challenge';

export const useChallenge = () => {
  //processDocument
  const { content, difficulty } = useChallengeState();

  const { mutateAsync } = useChallengeCreation();

  const createChallenge = async (callback?: (c: Challenge) => void) => {
    if (!content || !difficulty) return;
    const challenge = await mutateAsync({ content, difficulty });
    if (callback) callback(challenge);
  };

  return {
    createChallenge,
  };
};

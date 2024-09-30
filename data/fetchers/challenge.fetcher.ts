import { useMutation } from '@tanstack/react-query';

import { createChallenge } from '../api/challenge.api';

export const useChallengeCreation = () => {
  return useMutation({
    mutationFn: createChallenge,
  });
};

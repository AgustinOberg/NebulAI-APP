import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/config/query.config';
import { useAttempt } from '@/hooks/attempt/useAttempt';
import { getResults } from '@/utils/challenge.utils';

import { createAttempt } from '../api/attempt.api';

export const useCreateAttempt = () => {
  const { answers, questions, challengeId } = useAttempt();

  return useMutation({
    mutationFn: () =>
      createAttempt({
        answers: Object.values(answers),
        challenge: challengeId!,
        score: parseInt(getResults(questions, answers).percentage, 10),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user-profile'],
      });
    },
  });
};

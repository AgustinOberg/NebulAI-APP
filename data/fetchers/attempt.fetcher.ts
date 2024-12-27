import { useMutation, useQuery } from '@tanstack/react-query';

import { queryClient } from '@/config/query.config';
import { useAttempt } from '@/hooks/attempt/useAttempt';
import { getResults } from '@/utils/challenge.utils';

import { createAttempt, getAttemptByChallengeId } from '../api/attempt.api';

export const useCreateAttempt = () => {
  const { answers, questions, challenge } = useAttempt();

  return useMutation({
    mutationFn: () =>
      createAttempt({
        answers: Object.values(answers),
        challenge: challenge?.id!,
        score: parseInt(
          getResults(questions, answers).percentage.toString(),
          10,
        ),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user-profile'],
      });
    },
  });
};

export const useAttemptByChallengeId = ({
  challengeId,
}: {
  challengeId: string;
}) =>
  useQuery({
    queryKey: ['attempt', challengeId],
    queryFn: () => getAttemptByChallengeId(challengeId),
  });

import privateApi from '@/config/api.config';
import type { Attempt } from '@/types/attempt';

type AttemptCreationBody = {
  score: number;
  answers: string[];
  challenge: string;
};

export const createAttempt = async (body: AttemptCreationBody) => {
  console.log('Creating attempt...');
  console.log(JSON.stringify(body, null, 2));
  const { data } = await privateApi.post<Attempt>('/attempt', body);
  return data;
};

export const getAttemptByChallengeId = async (challengeId: string) => {
  const { data } = await privateApi.get<Attempt[]>(
    `/attempt/challenge/${challengeId}`,
  );
  console.log(JSON.stringify(data));
  return data;
};

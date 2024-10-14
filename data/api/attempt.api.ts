import privateApi from '@/config/api.config';
import type { Attempt } from '@/types/attempt';

type AttemptCreationBody = {
  score: number;
  answers: string[];
  challenge: string;
};

export const createAttempt = async (body: AttemptCreationBody) => {
  const { data } = await privateApi.post<Attempt>('/attempt', body);
  return data;
};

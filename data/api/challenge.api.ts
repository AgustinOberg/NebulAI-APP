import { publicApi } from '@/config/api.config';
import type { Challenge } from '@/types/challenge';

type ChallengeCreationBody = {
  difficulty: number;
  content: string;
};
export const createChallenge = async (body: ChallengeCreationBody) => {
  const { data } = await publicApi.post<Challenge>('/challenge', body);
  return data;
};

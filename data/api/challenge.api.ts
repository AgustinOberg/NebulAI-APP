import privateApi from '@/config/api.config';
import type { Challenge, MinChallenge } from '@/types/challenge';

type ChallengeCreationBody = {
  difficulty: number;
  content: string;
};
export const createChallenge = async (body: ChallengeCreationBody) => {
  const { data } = await privateApi.post<Challenge>('/challenge', body);
  return data;
};

export const getListOfChallenges = async () => {
  const { data } = await privateApi.get<{ data: MinChallenge[] }>(
    '/challenge/all',
  );
  return data;
};

export const getChallengeById = async (id: string) => {
  const { data } = await privateApi.get<Challenge>(`/challenge/${id}`);
  return data;
};

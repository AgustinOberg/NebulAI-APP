import { useMutation, useQuery } from '@tanstack/react-query';

import { queryClient } from '@/config/query.config';

import {
  createChallenge,
  getChallengeById,
  getListOfChallenges,
} from '../api/challenge.api';

export const useChallengeCreation = () => {
  return useMutation({
    mutationFn: createChallenge,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0] === 'challenge-list' ||
          query.queryKey[0] === 'user-profile',
      });
    },
  });
};

export const useChallengeList = () => {
  //TODO: InfinityQuery + Pagination
  return useQuery({
    queryKey: ['challenge-list'],
    queryFn: getListOfChallenges,
  });
};

export const useChallengeById = () => {
  return useMutation({
    mutationFn: getChallengeById,
  });
};

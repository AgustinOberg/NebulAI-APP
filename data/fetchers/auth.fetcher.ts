import { useMutation, useQuery } from '@tanstack/react-query';
import { router } from 'expo-router';

import { getUserProfile, googleAuth, refreshToken } from '../api/auth.api';
import { useUser } from '../state/user.store';

export const useAuthWithGoogle = () => {
  const { setToken } = useUser();
  return useMutation({
    mutationFn: googleAuth,
    onSuccess: ({ token }) => {
      setToken(token);
      router.replace('/(app)');
    },
  });
};

export const useRefreshToken = () => {
  const { setToken } = useUser();
  return useMutation({
    mutationFn: refreshToken,
    onSuccess: (data) => {
      setToken(data.token);
    },
  });
};

export const useUserProfile = () => {
  const { isAuthenticated } = useUser();
  return useQuery({
    queryFn: getUserProfile,
    enabled: isAuthenticated,
    queryKey: ['user-profile'],
    staleTime: Infinity,
  });
};

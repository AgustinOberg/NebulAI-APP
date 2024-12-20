import { useMutation, useQuery } from '@tanstack/react-query';

import { queryClient } from '@/config/query.config';

import {
  getUserProfile,
  googleAuth,
  refreshToken,
  setUserPushNotification,
} from '../api/auth.api';
import { useUser } from '../state/user.store';

export const useAuthWithGoogle = () => {
  const { setToken } = useUser();
  return useMutation({
    mutationFn: googleAuth,
    onSuccess: (data) => {
      if (data) {
        setToken(data.token);
        queryClient.invalidateQueries({ queryKey: ['user-profile'] });
        //router.replace('/(app)');
      }
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

export const useSetUserPushNotification = () => {
  return useMutation({
    mutationFn: setUserPushNotification,
    retry: 0,
  });
};

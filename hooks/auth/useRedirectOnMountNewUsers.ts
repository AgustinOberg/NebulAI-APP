import { router } from 'expo-router';
import { useEffect } from 'react';

import { useUserProfile } from '@/data/fetchers/auth.fetcher';
import { isOldUser } from '@/utils/user.utils';

export const useRedirectOnMountNewUsers = () => {
  const { data: user } = useUserProfile();
  useEffect(() => {
    if (!isOldUser(user)) {
      router.replace('/(app)/(challenge)/creation');
    }
  }, [user]);
};

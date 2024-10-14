import { usePathname } from 'expo-router';
import { useEffect } from 'react';

import { useRefreshToken } from '@/data/fetchers/auth.fetcher';
import { useUser } from '@/data/state/user.store';

export const useRefreshSession = () => {
  const pathName = usePathname();
  const { isAuthenticated } = useUser();
  const { mutate: refreshToken } = useRefreshToken();

  useEffect(() => {
    if (isAuthenticated) refreshToken();
  }, [pathName, refreshToken, isAuthenticated]);
};

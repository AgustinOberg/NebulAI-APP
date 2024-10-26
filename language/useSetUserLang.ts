import { useEffect } from 'react';

import { useUserProfile } from '@/data/fetchers/auth.fetcher';

import { useLang } from './useLang';

export const useSetUserLang = () => {
  const { data: user } = useUserProfile();
  const { changeLanguage, getCurrentLanguage } = useLang();
  useEffect(() => {
    (async () => {
      if (user) {
        const currentLang = await getCurrentLanguage();
        if (currentLang !== user.locale) changeLanguage(user.locale);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
};

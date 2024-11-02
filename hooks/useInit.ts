import { useSentryRouter } from '@/config/error/useSentryRouter';
import { useUserProfile } from '@/data/fetchers/auth.fetcher';
import { useSetUserLang } from '@/language/useSetUserLang';

import { useLoadFonts } from './useLoadFonts';
import { useTrackScreens } from './useScreenChange';

export const useInit = () => {
  const { isLoading: isFontsLoading } = useLoadFonts();
  useSentryRouter();
  useTrackScreens();
  useSetUserLang();
  const { isLoading: isUserProfileLoading } = useUserProfile();

  return {
    isLoading: isFontsLoading || isUserProfileLoading,
  };
};

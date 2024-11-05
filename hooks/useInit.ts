import { useSentryRouter } from '@/config/error/useSentryRouter';
import { useUserProfile } from '@/data/fetchers/auth.fetcher';
import { useAvailableFileTypes } from '@/data/fetchers/config.fetcher';
import { useSetUserLang } from '@/language/useSetUserLang';

import { useLoadFonts } from './useLoadFonts';
import { useTrackScreens } from './useScreenChange';

export const useInit = () => {
  const { isLoading: isFontsLoading } = useLoadFonts();
  useSentryRouter();
  useTrackScreens();
  useSetUserLang();
  useAvailableFileTypes();
  const { isLoading: isUserProfileLoading } = useUserProfile();

  return {
    isLoading: isFontsLoading || isUserProfileLoading,
  };
};

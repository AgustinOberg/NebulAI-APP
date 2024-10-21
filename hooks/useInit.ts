import { useExpoUpdates } from '@/config/expo-updates.config';
import { useUserProfile } from '@/data/fetchers/auth.fetcher';

import { useLoadFonts } from './useLoadFonts';
import { useTrackScreens } from './useScreenChange';

export const useInit = () => {
  const { isLoading: isFontsLoading } = useLoadFonts();
  useExpoUpdates();
  useTrackScreens();
  const { isLoading: isUserProfileLoading } = useUserProfile();

  return {
    isLoading: isFontsLoading || isUserProfileLoading,
  };
};

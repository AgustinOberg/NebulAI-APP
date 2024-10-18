import { useExpoUpdates } from '@/config/expo-updates.config';
import { useUserProfile } from '@/data/fetchers/auth.fetcher';

import { useLoadFonts } from './useLoadFonts';

export const useInit = () => {
  const { isLoading: isFontsLoading } = useLoadFonts();
  useExpoUpdates();
  const { isLoading: isUserProfileLoading } = useUserProfile();

  return {
    isLoading: isFontsLoading || isUserProfileLoading,
  };
};

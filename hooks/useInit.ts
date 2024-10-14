import { useUserProfile } from '@/data/fetchers/auth.fetcher';

import { useLoadFonts } from './useLoadFonts';

export const useInit = () => {
  useLoadFonts();
  useUserProfile();
};

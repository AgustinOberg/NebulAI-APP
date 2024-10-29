import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

import { useChangeLanguage } from '@/data/fetchers/language.fetcher';

export const useChangeLangOnUnmount = () => {
  const { mutate } = useChangeLanguage();

  useEffect(() => {
    return () => {
      AsyncStorage.getItem('language').then((lang) => {
        if (lang) {
          mutate({ language: lang });
        }
      });
    };
  }, [mutate]);
};

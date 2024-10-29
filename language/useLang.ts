import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

export const useLang = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = async (lang: string) => {
    console.log(lang);
    await AsyncStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
  };
  const currentLanguage = i18n.language;
  const getCurrentLanguage = async () => {
    const language = await AsyncStorage.getItem('language');
    return language || currentLanguage;
  };

  return { t, changeLanguage, currentLanguage, getCurrentLanguage };
};

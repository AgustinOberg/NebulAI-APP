import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './locales/en.json';
import translationEs from './locales/es.json';
import translationFr from './locales/fr.json';
import translationIt from './locales/it.json';
import translationPt from './locales/pt.json';
const resources = {
  en: { translation: translationEn },
  es: { translation: translationEs },
  pt: { translation: translationPt },
  fr: { translation: translationFr },
  it: { translation: translationIt },
};

const defaultLanguage = 'en';
const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem('language');
  if (!savedLanguage) {
    const userLang =
      Localization.getLocales()[0].languageCode ?? defaultLanguage;
    if (Object.keys(resources).includes(userLang)) {
      savedLanguage = userLang;
    } else {
      savedLanguage = defaultLanguage;
    }
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: savedLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

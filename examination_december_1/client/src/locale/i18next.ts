import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { APP_RU } from './ru/app';
import { APP_EN } from './en/app';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'ru',
    resources: {
      en: {
        translation: APP_EN
      },
      ru: {
        translation: APP_RU
      }
    }
  });

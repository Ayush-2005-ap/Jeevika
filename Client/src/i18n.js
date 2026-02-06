import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translation files
import enTranslations from './locales/en/translation.json';
import hiTranslations from './locales/hi/translation.json';
import bnTranslations from './locales/bn/translation.json';
import taTranslations from './locales/ta/translation.json';
import teTranslations from './locales/te/translation.json';

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n to react-i18next
  .init({
    resources: {
      en: { translation: enTranslations },
      hi: { translation: hiTranslations },
      bn: { translation: bnTranslations },
      ta: { translation: taTranslations },
      te: { translation: teTranslations },
    },
    fallbackLng: 'en', // Default language
    debug: false,
    interpolation: {
      escapeValue: false, // React already escapes
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
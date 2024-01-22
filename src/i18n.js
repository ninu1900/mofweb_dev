import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';


i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    supportedLngs: ["en","la"],
    ns:['translation'],
    interpolation: {
      escapeValue: false,
    },
    backend:{
      loadPath: `http://172.16.0.163/locales/{{lng}}/{{ns}}.json`,
    }
  });

export default i18n;

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define available languages
export type Language = 'en' | 'am' | 'om';

// Language context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
  tArray: (key) => [key],
});

// Language provider props type
type LanguageProviderProps = {
  children: React.ReactNode;
};

// Import categorized translation files for English
import commonEn from '../locales/en/common.json';
import navigationEn from '../locales/en/navigation.json';
import appEn from '../locales/en/app.json';
import languageEn from '../locales/en/language.json';
import branchesEn from '../locales/en/branches.json';
import homeEn from '../locales/en/home.json';
import coursesEn from '../locales/en/courses.json';
import servicesEn from '../locales/en/services.json';
import instructorsEn from '../locales/en/instructors.json';
import testimonialsEn from '../locales/en/testimonials.json';
import enrollmentEn from '../locales/en/enrollment.json';
import aboutEn from '../locales/en/about.json';
import contactEn from '../locales/en/contact.json';
import footerEn from '../locales/en/footer.json';

// Import categorized translation files for Amharic
import commonAm from '../locales/am/common.json';
import navigationAm from '../locales/am/navigation.json';
import appAm from '../locales/am/app.json';
import languageAm from '../locales/am/language.json';
import branchesAm from '../locales/am/branches.json';
import homeAm from '../locales/am/home.json';
import coursesAm from '../locales/am/courses.json';
import servicesAm from '../locales/am/services.json';

// Import categorized translation files for Oromo
import commonOm from '../locales/om/common.json';
import navigationOm from '../locales/om/navigation.json';
import appOm from '../locales/om/app.json';
import languageOm from '../locales/om/language.json';
import branchesOm from '../locales/om/branches.json';
import homeOm from '../locales/om/home.json';

// Combine all English translations
const enTranslations = {
  ...commonEn,
  nav: navigationEn,
  app: appEn,
  lang: languageEn,
  branch: branchesEn,
  home: homeEn,
  courses: coursesEn,
  services: servicesEn,
  instructors: instructorsEn,
  testimonials: testimonialsEn,
  enrollment: enrollmentEn,
  about: aboutEn,
  contact: contactEn,
  footer: footerEn
};

// Combine all Amharic translations
const amTranslations = {
  ...commonAm,
  nav: navigationAm,
  app: appAm,
  lang: languageAm,
  branch: branchesAm,
  home: homeAm,
  courses: coursesAm,
  services: servicesAm
};

// Combine all Oromo translations
const omTranslations = {
  ...commonOm,
  nav: navigationOm,
  app: appOm,
  lang: languageOm,
  branch: branchesOm,
  home: homeOm
};

const translations: Record<Language, Record<string, any>> = {
  en: enTranslations,
  am: amTranslations,
  om: omTranslations,
};

// Helper function to get nested object value by string path
const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((current, key) => current?.[key], obj);
};

// Language provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Try to get language from localStorage, default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('hirtoli-language') as Language;
      if (savedLang && ['en', 'am', 'om'].includes(savedLang)) {
        return savedLang;
      }
      
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'am') return 'am';
      if (browserLang === 'om') return 'om';
    }
    
    return 'en';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('hirtoli-language', language);
    // Update document language for accessibility
    document.documentElement.lang = language;
    
    // Add appropriate font class to body
    if (language === 'am' || language === 'om') {
      document.body.classList.add(language === 'am' ? 'amharic' : 'oromo');
    } else {
      document.body.classList.remove('amharic', 'oromo');
    }
  }, [language]);

  // Translation function for strings
  const t = (key: string): string => {
    const value = getNestedValue(translations[language], key) || getNestedValue(translations['en'], key) || key;
    return typeof value === 'string' ? value : key;
  };

  // Translation function for arrays
  const tArray = (key: string): string[] => {
    const value = getNestedValue(translations[language], key) || getNestedValue(translations['en'], key);
    return Array.isArray(value) ? value : [key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);

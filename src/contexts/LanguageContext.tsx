
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

// Translation files
import enTranslations from '../locales/en.json';
import amTranslations from '../locales/am.json';
import omTranslations from '../locales/om.json';

const translations: Record<Language, Record<string, string | string[]>> = {
  en: enTranslations,
  am: amTranslations,
  om: omTranslations,
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
    const value = translations[language][key] || translations['en'][key] || key;
    return typeof value === 'string' ? value : key;
  };

  // Translation function for arrays
  const tArray = (key: string): string[] => {
    const value = translations[language][key] || translations['en'][key];
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

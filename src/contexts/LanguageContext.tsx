
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

// Import categorized translation files
import commonEn from '../locales/en/common.json';
import navigationEn from '../locales/en/navigation.json';
import appEn from '../locales/en/app.json';
import languageEn from '../locales/en/language.json';
import branchesEn from '../locales/en/branches.json';
import homeEn from '../locales/en/home.json';

import amTranslations from '../locales/am.json';
import omTranslations from '../locales/om.json';

// Combine all English translations
const enTranslations = {
  ...commonEn,
  nav: navigationEn,
  app: appEn,
  lang: languageEn,
  branch: branchesEn,
  home: homeEn,
  // Add remaining translations from original file
  "home.why_choose_us.title": "Why Choose Hirtoli?",
  "home.why_choose_us.subtitle": "We're committed to providing the highest quality driving education with a focus on safety, confidence, and success. Here's what sets us apart from other driving schools.",
  "home.why_choose_us.rated_badge": "Rated #1 Driving School in Ethiopia",
  "home.why_choose_us.proven_track_record": "Proven Track Record",
  "home.why_choose_us.proven_track_record_desc": "Over 98% of our students pass their driving test on the first attempt, thanks to our comprehensive training methodology and experienced instructors.",
  "home.why_choose_us.student_centered": "Student-Centered Approach",
  "home.why_choose_us.student_centered_desc": "We prioritize each student's individual learning pace and style, ensuring a comfortable and effective learning environment for everyone.",
  "home.why_choose_us.safety_first": "Safety First",
  "home.why_choose_us.safety_first_desc": "All our vehicles are equipped with dual controls and latest safety features. Our instructors are trained in emergency procedures and defensive driving.",
  "home.why_choose_us.flexible_scheduling": "Flexible Scheduling",
  "home.why_choose_us.flexible_scheduling_desc": "Learn at your own pace with morning, afternoon, and weekend classes available to fit your busy lifestyle and work schedule.",
  "home.why_choose_us.certified_excellence": "Certified Excellence",
  "home.why_choose_us.certified_excellence_desc": "ISO 9001:2015 certified with full accreditation from Ethiopian Road Authority and Ministry of Education for quality assurance.",
  "home.why_choose_us.expert_instructors": "Expert Instructors",
  "home.why_choose_us.expert_instructors_desc": "Learn from 50+ certified instructors with extensive experience in both practical driving and theoretical knowledge.",
  "home.why_choose_us.modern_fleet": "Modern Fleet",
  "home.why_choose_us.modern_fleet_desc": "Practice with our fleet of 200+ modern vehicles including manual, automatic, and commercial vehicles for comprehensive training.",
  "home.why_choose_us.complete_materials": "Complete Learning Materials",
  "home.why_choose_us.complete_materials_desc": "Comprehensive study materials including digital guides, practice tests, and video tutorials for theory and practical preparation.",
  "home.why_choose_us.support_24_7": "24/7 Student Support",
  "home.why_choose_us.support_24_7_desc": "Round-the-clock assistance for scheduling, questions, and emergency support to ensure your learning journey is smooth.",
  "home.why_choose_us.ready_title": "Ready to Experience the Difference?",
  "home.why_choose_us.ready_subtitle": "Join thousands of satisfied students who chose Hirtoli for their driving education. Start your journey to confident driving today.",
  "home.why_choose_us.book_consultation": "Book Free Consultation",
  "home.why_choose_us.download_brochure": "Download Brochure"
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

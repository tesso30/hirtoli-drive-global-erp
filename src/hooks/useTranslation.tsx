
import { useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const useTranslation = () => {
  const { t: originalT } = useLanguage();

  const t = useCallback((key: string): string => {
    return originalT(key);
  }, [originalT]);

  return {
    t,
    originalT // Access to original translation function
  };
};

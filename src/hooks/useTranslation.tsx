
import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '../contexts/LanguageContext';

interface TranslationCache {
  [key: string]: {
    [lang: string]: string;
  };
}

export const useTranslation = () => {
  const { language, t: originalT } = useLanguage();
  const [translationCache, setTranslationCache] = useState<TranslationCache>({});
  const [isTranslating, setIsTranslating] = useState(false);

  const translateWithGoogle = useCallback(async (text: string, targetLang: string): Promise<string> => {
    // Check cache first
    const cacheKey = `${text}_${targetLang}`;
    if (translationCache[text]?.[targetLang]) {
      return translationCache[text][targetLang];
    }

    try {
      setIsTranslating(true);
      
      const { data, error } = await supabase.functions.invoke('translate-text', {
        body: {
          text,
          targetLanguage: targetLang === 'am' ? 'am' : targetLang === 'om' ? 'om' : targetLang
        }
      });

      if (error) {
        console.error('Translation error:', error);
        return text; // Fallback to original text
      }

      const translatedText = data?.translatedText || text;
      
      // Cache the translation
      setTranslationCache(prev => ({
        ...prev,
        [text]: {
          ...prev[text],
          [targetLang]: translatedText
        }
      }));

      return translatedText;
    } catch (error) {
      console.error('Translation failed:', error);
      return text; // Fallback to original text
    } finally {
      setIsTranslating(false);
    }
  }, [translationCache]);

  const t = useCallback(async (key: string, fallbackToGoogle = false): Promise<string> => {
    // First try the existing manual translation
    const manualTranslation = originalT(key);
    
    // If we got a translation (not the key itself), return it
    if (manualTranslation !== key) {
      return manualTranslation;
    }

    // If fallbackToGoogle is enabled and we don't have a manual translation
    if (fallbackToGoogle && language !== 'en') {
      try {
        // Get English version as source
        const englishText = originalT(key); // This might still be the key if no English translation exists
        if (englishText !== key) {
          return await translateWithGoogle(englishText, language);
        }
      } catch (error) {
        console.error('Google translation fallback failed:', error);
      }
    }

    return manualTranslation; // Return whatever we have (key or manual translation)
  }, [originalT, language, translateWithGoogle, fallbackToGoogle]);

  return {
    t,
    translateText: translateWithGoogle,
    isTranslating,
    originalT // Access to original translation function
  };
};

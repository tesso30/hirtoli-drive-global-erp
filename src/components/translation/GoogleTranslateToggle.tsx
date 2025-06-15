
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Globe, Loader2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';

const GoogleTranslateToggle: React.FC = () => {
  const { language } = useLanguage();
  const { isTranslating } = useTranslation();
  const [isGoogleTranslateEnabled, setIsGoogleTranslateEnabled] = useState(false);

  const toggleGoogleTranslate = () => {
    setIsGoogleTranslateEnabled(!isGoogleTranslateEnabled);
    // You can add logic here to re-translate the current page content
  };

  if (language === 'en') {
    return null; // Don't show for English since it's the source language
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={toggleGoogleTranslate}
        disabled={isTranslating}
        className="flex items-center gap-2"
      >
        {isTranslating ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Globe className="w-4 h-4" />
        )}
        <span className="text-sm">
          {isGoogleTranslateEnabled ? 'Auto Translate: ON' : 'Auto Translate: OFF'}
        </span>
      </Button>
    </div>
  );
};

export default GoogleTranslateToggle;

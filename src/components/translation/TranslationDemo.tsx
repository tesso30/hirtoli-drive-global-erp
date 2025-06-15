
import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguage } from '../../contexts/LanguageContext';
import { Loader2, Languages } from 'lucide-react';

const TranslationDemo: React.FC = () => {
  const { language } = useLanguage();
  const { translateText, isTranslating } = useTranslation();
  const [inputText, setInputText] = useState('Welcome to Hirtoli Driving School!');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    
    const result = await translateText(inputText, language);
    setTranslatedText(result);
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <Languages className="w-5 h-5 text-hirtoli-green" />
        <h3 className="text-lg font-semibold">Google Translate Demo</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Text to translate (English):
          </label>
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text to translate..."
          />
        </div>
        
        <Button 
          onClick={handleTranslate}
          disabled={isTranslating || !inputText.trim()}
          className="bg-hirtoli-green hover:bg-hirtoli-green/90"
        >
          {isTranslating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Translating...
            </>
          ) : (
            `Translate to ${language === 'am' ? 'Amharic' : language === 'om' ? 'Oromo' : 'English'}`
          )}
        </Button>
        
        {translatedText && (
          <div>
            <label className="block text-sm font-medium mb-2">
              Translation ({language === 'am' ? 'Amharic' : language === 'om' ? 'Oromo' : 'English'}):
            </label>
            <div className="p-3 bg-gray-50 rounded-md border">
              <p className={language === 'am' ? 'amharic' : language === 'om' ? 'oromo' : ''}>
                {translatedText}
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default TranslationDemo;

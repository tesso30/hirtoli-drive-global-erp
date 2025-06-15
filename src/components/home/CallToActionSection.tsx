
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';

const CallToActionSection: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="bg-hirtoli-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('home.cta.title')}</h2>
        <p className="mb-8 max-w-xl mx-auto">{t('home.cta.subtitle')}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-hirtoli-red hover:bg-opacity-90"
            onClick={() => navigate('/contact')}
          >
            {t('home.cta.register')}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-hirtoli-green text-hirtoli-green hover:bg-hirtoli-green hover:text-white transition-all duration-300 transform hover:scale-105"
            onClick={() => navigate('/contact')}
          >
            {t('home.cta.contact')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;

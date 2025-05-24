
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-hirtoli-red to-hirtoli-black text-white py-24">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          {t('home.hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('home.hero.subtitle')}
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-hirtoli-green hover:bg-opacity-90"
            onClick={() => navigate('/register')}
          >
            {t('home.hero.cta')}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-hirtoli-black"
            onClick={() => navigate('/services')}
          >
            Browse Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

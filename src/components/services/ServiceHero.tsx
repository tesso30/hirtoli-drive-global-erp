
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ServiceHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-hirtoli-black to-hirtoli-red text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            {t('nav.services')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Professional driving education tailored to your needs and skill level
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-hirtoli-green">8+</div>
              <p className="text-gray-200">Course Options</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-hirtoli-green">50+</div>
              <p className="text-gray-200">Expert Instructors</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-3xl font-bold text-hirtoli-green">98%</div>
              <p className="text-gray-200">Pass Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;

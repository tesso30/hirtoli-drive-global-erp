
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import ContactMethodIndicators from './ContactMethodIndicators';
import ContactFeatures from './ContactFeatures';
import ContactMethodsGrid from './ContactMethodsGrid';
import ContactStats from './ContactStats';

const ContactHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative bg-gradient-to-br from-hirtoli-green via-green-600 to-hirtoli-black text-white py-32 overflow-hidden"
      role="banner"
      aria-label="Contact Hirtoli Driving School Hero Section"
    >
      {/* Enhanced background decorations with performance optimization */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.25)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_25%,rgba(255,255,255,0.07)_50%,transparent_75%)] bg-[length:100px_100px] animate-[slide_25s_linear_infinite] will-change-transform"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(255,255,255,0.05)_120deg,transparent_240deg)] animate-[spin_50s_linear_infinite] will-change-transform"></div>
      </div>
      
      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/15 rounded-full blur-xl animate-[float_7s_ease-in-out_infinite] will-change-transform" aria-hidden="true"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-hirtoli-red/25 rounded-full blur-2xl animate-[float_9s_ease-in-out_infinite_reverse] will-change-transform" aria-hidden="true"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-[float_8s_ease-in-out_infinite] will-change-transform" aria-hidden="true"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-white/15 to-transparent rounded-full blur-md animate-[float_11s_ease-in-out_infinite] will-change-transform" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Contact method indicators */}
        <ContactMethodIndicators />

        <header className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              {t('contact.title.main') || 'Get in Touch'}
            </span>
            <br />
            <span className="bg-gradient-to-r from-hirtoli-red via-red-300 to-hirtoli-red bg-clip-text text-transparent drop-shadow-lg">
              {t('contact.title.sub') || 'With Us'}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 animate-fade-in opacity-90 leading-relaxed font-medium" style={{ animationDelay: '0.2s' }}>
            {t('contact.description.main') || 'Ready to start your driving journey? We\'re here to help you every step of the way with personalized support and expert guidance.'}
          </p>
          
          <p className="text-lg mb-8 text-gray-200 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
            {t('contact.description.detailed') || 'Whether you have questions about our courses, need to schedule a lesson, or want to visit our facilities, our dedicated multilingual team is available through multiple channels to provide you with personalized assistance and support.'}
          </p>

          {/* Contact features */}
          <ContactFeatures />
        </header>

        {/* Contact methods grid */}
        <ContactMethodsGrid />

        {/* Contact stats */}
        <ContactStats />
      </div>
    </section>
  );
};

export default ContactHero;

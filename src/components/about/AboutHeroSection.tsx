
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Calendar, Users, Award } from 'lucide-react';

const AboutHeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-hirtoli-black to-hirtoli-red text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About Hirtoli Driving School
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Empowering drivers across Ethiopia with quality education, safety, and confidence since 2010
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Calendar className="w-12 h-12 mb-4 text-hirtoli-green" />
              <h3 className="text-2xl font-bold">13+ Years</h3>
              <p className="text-gray-200">Of Excellence</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Users className="w-12 h-12 mb-4 text-hirtoli-green" />
              <h3 className="text-2xl font-bold">15,000+</h3>
              <p className="text-gray-200">Graduates</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Award className="w-12 h-12 mb-4 text-hirtoli-green" />
              <h3 className="text-2xl font-bold">98%</h3>
              <p className="text-gray-200">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;


import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Award, Clock, Shield, GraduationCap, Car, Trophy } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Award className="w-10 h-10 text-hirtoli-red" />,
      title: t('home.features.quality.title'),
      description: t('home.features.quality.desc'),
    },
    {
      icon: <Clock className="w-10 h-10 text-hirtoli-green" />,
      title: t('home.features.flexible.title'),
      description: t('home.features.flexible.desc'),
    },
    {
      icon: <Shield className="w-10 h-10 text-hirtoli-black" />,
      title: t('home.features.vehicles.title'),
      description: t('home.features.vehicles.desc'),
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-hirtoli-red" />,
      title: "Expert Instructors",
      description: "Learn from certified professionals with years of teaching experience and perfect safety records.",
    },
    {
      icon: <Car className="w-10 h-10 text-hirtoli-green" />,
      title: "Latest Technology",
      description: "Practice with modern vehicles equipped with the latest safety features and dual controls.",
    },
    {
      icon: <Trophy className="w-10 h-10 text-hirtoli-black" />,
      title: "High Success Rate",
      description: "98% of our students pass their driving test on the first attempt with our proven methods.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('home.features.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg shadow-md text-center animate-fade-in flex flex-col items-center hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

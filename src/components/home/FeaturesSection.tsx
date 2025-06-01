
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Award, Clock, Shield, GraduationCap, Car, Trophy, Smartphone, Globe, Users2, BookOpen, FileCheck, Headphones } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Award className="w-10 h-10 text-hirtoli-red" />,
      title: t('home.features.quality.title'),
      description: t('home.features.quality.desc'),
      details: t('home.features.quality.desc')
    },
    {
      icon: <Clock className="w-10 h-10 text-hirtoli-green" />,
      title: t('home.features.flexible.title'),
      description: t('home.features.flexible.desc'),
      details: t('home.features.flexible.desc')
    },
    {
      icon: <Shield className="w-10 h-10 text-hirtoli-black" />,
      title: t('home.features.vehicles.title'),
      description: t('home.features.vehicles.desc'),
      details: t('home.features.vehicles.desc')
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-hirtoli-red" />,
      title: t('home.features.expert_instructors'),
      description: t('home.features.expert_instructors_desc'),
      details: t('home.features.expert_instructors_details')
    },
    {
      icon: <Car className="w-10 h-10 text-hirtoli-green" />,
      title: t('home.features.latest_technology'),
      description: t('home.features.latest_technology_desc'),
      details: t('home.features.latest_technology_details')
    },
    {
      icon: <Trophy className="w-10 h-10 text-hirtoli-black" />,
      title: t('home.features.high_success_rate'),
      description: t('home.features.high_success_rate_desc'),
      details: t('home.features.high_success_rate_details')
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-600" />,
      title: t('home.features.digital_learning'),
      description: t('home.features.digital_learning_desc'),
      details: t('home.features.digital_learning_details')
    },
    {
      icon: <Globe className="w-10 h-10 text-purple-600" />,
      title: t('home.features.multi_language'),
      description: t('home.features.multi_language_desc'),
      details: t('home.features.multi_language_details')
    },
    {
      icon: <Users2 className="w-10 h-10 text-orange-500" />,
      title: t('home.features.small_class'),
      description: t('home.features.small_class_desc'),
      details: t('home.features.small_class_details')
    },
    {
      icon: <BookOpen className="w-10 h-10 text-green-600" />,
      title: t('home.features.comprehensive_curriculum'),
      description: t('home.features.comprehensive_curriculum_desc'),
      details: t('home.features.comprehensive_curriculum_details')
    },
    {
      icon: <FileCheck className="w-10 h-10 text-red-500" />,
      title: t('home.features.license_support'),
      description: t('home.features.license_support_desc'),
      details: t('home.features.license_support_details')
    },
    {
      icon: <Headphones className="w-10 h-10 text-indigo-600" />,
      title: t('home.features.student_support'),
      description: t('home.features.student_support_desc'),
      details: t('home.features.student_support_details')
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('home.features.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.features.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl shadow-md text-center animate-fade-in flex flex-col items-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-hirtoli-green group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-hirtoli-green transition-colors">{feature.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{feature.description}</p>
              <p className="text-xs text-gray-500 italic">{feature.details}</p>
            </div>
          ))}
        </div>
        
        {/* Additional feature highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-hirtoli-red to-red-600 text-white p-6 rounded-xl text-center">
            <h4 className="font-bold text-lg mb-2">98%</h4>
            <p className="text-sm">{t('home.stats.pass_rate')}</p>
          </div>
          <div className="bg-gradient-to-br from-hirtoli-green to-green-600 text-white p-6 rounded-xl text-center">
            <h4 className="font-bold text-lg mb-2">15,000+</h4>
            <p className="text-sm">{t('home.stats.students')}</p>
          </div>
          <div className="bg-gradient-to-br from-hirtoli-black to-gray-800 text-white p-6 rounded-xl text-center">
            <h4 className="font-bold text-lg mb-2">13+</h4>
            <p className="text-sm">{t('home.stats.experience')}</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-xl text-center">
            <h4 className="font-bold text-lg mb-2">4.9/5</h4>
            <p className="text-sm">{t('home.stats.rating')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

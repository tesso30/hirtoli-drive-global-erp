
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
      details: "Government certified instructors with continuous professional development"
    },
    {
      icon: <Clock className="w-10 h-10 text-hirtoli-green" />,
      title: t('home.features.flexible.title'),
      description: t('home.features.flexible.desc'),
      details: "Early morning, afternoon, evening, and weekend sessions available"
    },
    {
      icon: <Shield className="w-10 h-10 text-hirtoli-black" />,
      title: t('home.features.vehicles.title'),
      description: t('home.features.vehicles.desc'),
      details: "Regular maintenance checks and comprehensive insurance coverage"
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-hirtoli-red" />,
      title: "Expert Instructors",
      description: "Learn from certified professionals with years of teaching experience and perfect safety records.",
      details: "Multi-lingual instructors fluent in Amharic, English, and Oromo"
    },
    {
      icon: <Car className="w-10 h-10 text-hirtoli-green" />,
      title: "Latest Technology",
      description: "Practice with modern vehicles equipped with the latest safety features and dual controls.",
      details: "GPS tracking, dash cameras, and real-time performance monitoring"
    },
    {
      icon: <Trophy className="w-10 h-10 text-hirtoli-black" />,
      title: "High Success Rate",
      description: "98% of our students pass their driving test on the first attempt with our proven methods.",
      details: "Specialized test preparation and mock exam sessions included"
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-600" />,
      title: "Digital Learning Platform",
      description: "Access theory materials, practice tests, and schedule lessons through our mobile app.",
      details: "Interactive learning modules with progress tracking and gamification"
    },
    {
      icon: <Globe className="w-10 h-10 text-purple-600" />,
      title: "Multi-Language Support",
      description: "Learn in your preferred language with materials available in Amharic, English, and Oromo.",
      details: "Cultural sensitivity training ensures comfortable learning environment"
    },
    {
      icon: <Users2 className="w-10 h-10 text-orange-500" />,
      title: "Small Class Sizes",
      description: "Maximum 4 students per practical session for personalized attention and faster learning.",
      details: "One-on-one sessions available for students with special requirements"
    },
    {
      icon: <BookOpen className="w-10 h-10 text-green-600" />,
      title: "Comprehensive Curriculum",
      description: "Complete driving education covering theory, practical skills, and road safety awareness.",
      details: "Regular curriculum updates based on latest traffic regulations"
    },
    {
      icon: <FileCheck className="w-10 h-10 text-red-500" />,
      title: "License Application Support",
      description: "Full assistance with paperwork, documentation, and license application processes.",
      details: "Direct coordination with licensing authorities for faster processing"
    },
    {
      icon: <Headphones className="w-10 h-10 text-indigo-600" />,
      title: "Student Support Services",
      description: "Dedicated support team available 24/7 for questions, scheduling, and assistance.",
      details: "Multiple contact channels including phone, email, and live chat"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('home.features.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive features and services are designed to provide you with the best possible 
            driving education experience from start to finish.
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
            <p className="text-sm">Success Rate</p>
          </div>
          <div className="bg-gradient-to-br from-hirtoli-green to-green-600 text-white p-6 rounded-xl text-center">
            <h4 className="font-bold text-lg mb-2">15,000+</h4>
            <p className="text-sm">Graduates</p>
          </div>
          <div className="bg-gradient-to-br from-hirtoli-black to-gray-800 text-white p-6 rounded-xl text-center">
            <h4 className="font-bold text-lg mb-2">13+</h4>
            <p className="text-sm">Years Experience</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-xl text-center">
            <h4 className="font-bold text-lg mb-2">4.9/5</h4>
            <p className="text-sm">Student Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

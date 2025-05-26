
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Star, Users, Award } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-hirtoli-red to-hirtoli-black text-white py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-hirtoli-green opacity-20"></div>
      
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        {/* Trust indicators */}
        <div className="flex items-center gap-6 mb-6 text-sm animate-fade-in">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>15,000+ Graduates</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4" />
            <span>98% Pass Rate</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          {t('home.hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('home.hero.subtitle')}
        </p>
        
        {/* Additional hero content */}
        <p className="text-lg mb-8 max-w-3xl text-gray-200 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Learn from Ethiopia's most experienced driving instructors with modern vehicles, 
          flexible scheduling, and comprehensive training programs designed for your success.
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in mb-8" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-hirtoli-green hover:bg-opacity-90 text-lg px-8 py-4"
            onClick={() => navigate('/register')}
          >
            {t('home.hero.cta')}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-hirtoli-black text-lg px-8 py-4"
            onClick={() => navigate('/services')}
          >
            Browse Courses
          </Button>
        </div>

        {/* Special offers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-4xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
            <h3 className="font-semibold mb-2">Free Theory Materials</h3>
            <p className="text-sm text-gray-200">Complete digital study guides included</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
            <h3 className="font-semibold mb-2">Flexible Payment Plans</h3>
            <p className="text-sm text-gray-200">Pay in installments that work for you</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
            <h3 className="font-semibold mb-2">Job Placement Support</h3>
            <p className="text-sm text-gray-200">Career assistance for commercial drivers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

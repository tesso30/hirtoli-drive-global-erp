
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Star, Users, Award, ArrowRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-hirtoli-red via-red-600 to-hirtoli-black text-white py-32 overflow-hidden">
      {/* Advanced background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,166,81,0.3)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-[slide_20s_linear_infinite]"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-hirtoli-green/20 rounded-full blur-2xl animate-[float_8s_ease-in-out_infinite_reverse]"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-[float_7s_ease-in-out_infinite]"></div>
      
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        {/* Trust indicators with enhanced styling */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-8 animate-fade-in">
          {[
            { icon: Star, text: "4.9/5 Rating", color: "text-yellow-400" },
            { icon: Users, text: "15,000+ Graduates", color: "text-blue-300" },
            { icon: Award, text: "98% Pass Rate", color: "text-green-300" }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <item.icon className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
          {t('home.hero.title')}
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 max-w-3xl animate-fade-in opacity-90 leading-relaxed" style={{ animationDelay: '0.2s' }}>
          {t('home.hero.subtitle')}
        </p>
        
        <p className="text-lg mb-10 max-w-4xl text-gray-200 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
          Learn from Ethiopia's most experienced driving instructors with modern vehicles, 
          flexible scheduling, and comprehensive training programs designed for your success.
        </p>

        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in mb-12" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-hirtoli-green to-green-600 hover:from-green-600 hover:to-hirtoli-green text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 group"
            onClick={() => navigate('/register')}
          >
            {t('home.hero.cta')}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-hirtoli-black text-lg px-10 py-6 rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 transform hover:scale-105 group"
            onClick={() => navigate('/services')}
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Browse Courses
          </Button>
        </div>

        {/* Enhanced special offers grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {[
            {
              title: "Free Theory Materials",
              description: "Complete digital study guides included",
              icon: "📚",
              gradient: "from-blue-500/20 to-purple-500/20"
            },
            {
              title: "Flexible Payment Plans",
              description: "Pay in installments that work for you",
              icon: "💳",
              gradient: "from-green-500/20 to-blue-500/20"
            },
            {
              title: "Job Placement Support",
              description: "Career assistance for commercial drivers",
              icon: "🚗",
              gradient: "from-purple-500/20 to-pink-500/20"
            }
          ].map((offer, index) => (
            <div key={index} className={`bg-gradient-to-br ${offer.gradient} backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group`}>
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{offer.icon}</div>
              <h3 className="font-semibold mb-2 text-lg">{offer.title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

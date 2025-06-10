
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Award, Users, Calendar, Target, Shield, Star, CheckCircle, Globe } from 'lucide-react';

const AboutHeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative bg-gradient-to-br from-hirtoli-black via-gray-900 to-hirtoli-red text-white py-32 overflow-hidden"
      role="banner"
      aria-label="About Hirtoli Driving School Hero Section"
    >
      {/* Enhanced background decorations with performance optimization */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,166,81,0.4)_0%,transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.15)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:80px_80px] animate-[slide_30s_linear_infinite] will-change-transform"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(0,166,81,0.1)_90deg,transparent_180deg)] animate-[spin_60s_linear_infinite] will-change-transform"></div>
      </div>
      
      {/* Enhanced floating elements with better performance */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-hirtoli-green/30 rounded-full blur-xl animate-[float_8s_ease-in-out_infinite] will-change-transform" aria-hidden="true"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/15 rounded-full blur-2xl animate-[float_10s_ease-in-out_infinite_reverse] will-change-transform" aria-hidden="true"></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-hirtoli-red/30 rounded-full blur-lg animate-[float_6s_ease-in-out_infinite] will-change-transform" aria-hidden="true"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-hirtoli-green/30 to-transparent rounded-full blur-md animate-[float_12s_ease-in-out_infinite] will-change-transform" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Enhanced trust indicators with better accessibility */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-fade-in" role="region" aria-label="Trust indicators and achievements">
          {[
            { icon: Award, text: t('about.stats.award'), color: "text-yellow-400", rating: "5.0/5.0" },
            { icon: Users, text: t('about.stats.students'), color: "text-blue-300", rating: "98% Satisfaction" },
            { icon: Calendar, text: t('about.stats.experience'), color: "text-green-300", rating: "Since 2010" },
            { icon: Shield, text: t('about.stats.safety'), color: "text-purple-300", rating: "Zero Incidents" },
            { icon: Globe, text: t('about.stats.branches'), color: "text-cyan-300", rating: "Nationwide" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-2 bg-white/15 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 hover:bg-white/25 transition-all duration-500 group hover:scale-110 animate-fade-in transform hover:-translate-y-2 shadow-xl hover:shadow-2xl" 
              style={{ animationDelay: `${index * 0.1}s` }}
              role="article"
              aria-label={`${item.text} - ${item.rating}`}
              tabIndex={0}
            >
              <item.icon 
                className={`w-6 h-6 ${item.color} group-hover:scale-125 transition-transform duration-300`} 
                aria-hidden="true"
              />
              <div className="text-center">
                <span className="text-sm font-bold block">{item.text}</span>
                <span className="text-xs text-gray-300 font-medium">{item.rating}</span>
              </div>
            </div>
          ))}
        </div>

        <header>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              {t('about.title.main')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-hirtoli-green via-green-300 to-hirtoli-green bg-clip-text text-transparent drop-shadow-lg">
              {t('about.title.sub')}
            </span>
          </h1>
        </header>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl mb-6 animate-fade-in opacity-90 leading-relaxed font-medium" style={{ animationDelay: '0.2s' }}>
            {t('about.description.main')}
          </p>
          
          <p className="text-lg mb-8 text-gray-200 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
            {t('about.description.detailed')}
          </p>

          {/* Enhanced feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              {
                title: t('about.features.certified'),
                description: t('about.features.certified_desc'),
                icon: <CheckCircle className="w-8 h-8" />,
                gradient: "from-green-500/25 to-emerald-500/25"
              },
              {
                title: t('about.features.technology'),
                description: t('about.features.technology_desc'),
                icon: <Target className="w-8 h-8" />,
                gradient: "from-blue-500/25 to-cyan-500/25"
              },
              {
                title: t('about.features.multilingual'),
                description: t('about.features.multilingual_desc'),
                icon: <Globe className="w-8 h-8" />,
                gradient: "from-purple-500/25 to-violet-500/25"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group`}
                role="article"
                tabIndex={0}
                aria-label={`${feature.title}: ${feature.description}`}
              >
                <div className="mb-4 text-hirtoli-green group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2 text-lg group-hover:text-hirtoli-green transition-colors duration-300">{feature.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced achievement grid with better accessibility */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }} role="region" aria-label="Key statistics and achievements">
          {[
            { number: "98.5%", label: "Pass Rate", detail: "Industry Leading", gradient: "from-green-500/25 to-emerald-500/25", icon: <Target className="w-5 h-5" /> },
            { number: "13+", label: "Years Excellence", detail: "Since 2010", gradient: "from-blue-500/25 to-cyan-500/25", icon: <Calendar className="w-5 h-5" /> },
            { number: "52", label: "Expert Instructors", detail: "Certified Professionals", gradient: "from-purple-500/25 to-violet-500/25", icon: <Users className="w-5 h-5" /> },
            { number: "3", label: "Branch Locations", detail: "Nationwide Coverage", gradient: "from-orange-500/25 to-red-500/25", icon: <Globe className="w-5 h-5" /> }
          ].map((stat, index) => (
            <article 
              key={index} 
              className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-sm rounded-2xl p-6 text-center border border-white/15 hover:border-white/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 group animate-fade-in shadow-lg hover:shadow-2xl`} 
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              tabIndex={0}
              aria-label={`${stat.number} ${stat.label} - ${stat.detail}`}
            >
              <div className="flex items-center justify-center mb-3 text-hirtoli-green group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{stat.number}</div>
              <p className="text-sm text-gray-200 font-medium mb-1">{stat.label}</p>
              <p className="text-xs text-gray-300">{stat.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;


import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Car, Users, Award, Clock, Shield, Star, CheckCircle, Target, BookOpen, Globe } from 'lucide-react';

const ServiceHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative bg-gradient-to-br from-hirtoli-black via-gray-900 to-hirtoli-red text-white py-32 overflow-hidden"
      role="banner"
      aria-label="Hirtoli Driving School Services Hero Section"
    >
      {/* Enhanced background decorations with performance optimization */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(0,166,81,0.35)_0%,transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.15)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.06)_50%,transparent_75%)] bg-[length:120px_120px] animate-[slide_35s_linear_infinite] will-change-transform"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0deg,rgba(0,166,81,0.1)_90deg,transparent_180deg)] animate-[spin_70s_linear_infinite] will-change-transform"></div>
      </div>
      
      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 w-28 h-28 bg-hirtoli-green/25 rounded-full blur-xl animate-[float_9s_ease-in-out_infinite] will-change-transform" aria-hidden="true"></div>
      <div className="absolute top-40 right-20 w-36 h-36 bg-white/15 rounded-full blur-2xl animate-[float_11s_ease-in-out_infinite_reverse] will-change-transform" aria-hidden="true"></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-hirtoli-red/25 rounded-full blur-lg animate-[float_7s_ease-in-out_infinite] will-change-transform" aria-hidden="true"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-hirtoli-green/20 to-transparent rounded-full blur-md animate-[float_13s_ease-in-out_infinite] will-change-transform" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced service features indicators with better accessibility */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-fade-in" role="region" aria-label="Service features and capabilities">
          {[
            { icon: Car, text: t('services.vehicles') || "200+ Modern Vehicles", color: "text-blue-300", detail: "Latest Models", rating: "5★" },
            { icon: Users, text: t('services.instructors') || "50+ Expert Instructors", color: "text-green-300", detail: "Certified Professionals", rating: "4.9★" },
            { icon: Award, text: t('services.certified') || "Certified Training Programs", color: "text-yellow-300", detail: "International Standards", rating: "5★" },
            { icon: Shield, text: t('services.safety') || "100% Safety Guaranteed", color: "text-purple-300", detail: "Zero Incident Record", rating: "5★" },
            { icon: Globe, text: t('services.languages') || "3 Language Support", color: "text-cyan-300", detail: "Multilingual Training", rating: "4.8★" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-2 bg-white/15 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 hover:bg-white/25 transition-all duration-500 group hover:scale-110 animate-fade-in transform hover:-translate-y-2 shadow-xl hover:shadow-2xl" 
              style={{ animationDelay: `${index * 0.1}s` }}
              role="article"
              aria-label={`${item.text} - ${item.detail} - Rating: ${item.rating}`}
              tabIndex={0}
            >
              <item.icon 
                className={`w-6 h-6 ${item.color} group-hover:scale-125 transition-transform duration-300`} 
                aria-hidden="true"
              />
              <div className="text-center">
                <span className="text-sm font-bold block">{item.text}</span>
                <span className="text-xs text-gray-300 font-medium">{item.detail}</span>
                <span className="text-xs text-yellow-300 font-medium">{item.rating}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <header>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                {t('services.title.main') || 'Our Premium'}
              </span>
              <br />
              <span className="bg-gradient-to-r from-hirtoli-green via-green-300 to-hirtoli-green bg-clip-text text-transparent drop-shadow-lg">
                {t('nav.services') || 'Services'}
              </span>
            </h1>
          </header>
          
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90 leading-relaxed font-medium" style={{ animationDelay: '0.2s' }}>
            {t('services.description.main') || 'Professional driving education tailored to your needs and skill level, delivered with excellence, innovation, and a commitment to road safety.'}
          </p>
          
          <p className="text-lg mb-12 max-w-5xl mx-auto text-gray-200 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
            {t('services.description.detailed') || 'From beginner courses to advanced commercial training, we offer comprehensive programs designed to build confident, skilled drivers while maintaining the highest safety standards in the industry. Our modern fleet, expert instructors, and flexible scheduling ensure you receive the best possible driving education experience.'}
          </p>

          {/* Enhanced service categories */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              {
                title: t('services.categories.beginner') || "Beginner Training",
                description: t('services.categories.beginner.desc') || "Complete foundation courses for new drivers",
                icon: <BookOpen className="w-8 h-8" />,
                gradient: "from-green-500/25 to-emerald-500/25",
                courses: "5 Courses Available"
              },
              {
                title: t('services.categories.advanced') || "Advanced Skills",
                description: t('services.categories.advanced.desc') || "Enhancement programs for experienced drivers",
                icon: <Target className="w-8 h-8" />,
                gradient: "from-blue-500/25 to-cyan-500/25",
                courses: "3 Courses Available"
              },
              {
                title: t('services.categories.commercial') || "Commercial Training",
                description: t('services.categories.commercial.desc') || "Professional licensing for commercial vehicles",
                icon: <Award className="w-8 h-8" />,
                gradient: "from-purple-500/25 to-violet-500/25",
                courses: "4 Courses Available"
              },
              {
                title: t('services.categories.specialized') || "Specialized Programs",
                description: t('services.categories.specialized.desc') || "Custom training for specific needs",
                icon: <Star className="w-8 h-8" />,
                gradient: "from-orange-500/25 to-red-500/25",
                courses: "6 Programs Available"
              }
            ].map((category, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${category.gradient} backdrop-blur-sm rounded-2xl p-6 text-center border border-white/15 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group`}
                role="article"
                tabIndex={0}
                aria-label={`${category.title}: ${category.description} - ${category.courses}`}
              >
                <div className="mb-4 text-hirtoli-green group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="font-semibold mb-2 text-lg group-hover:text-hirtoli-green transition-colors duration-300">{category.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed mb-2">{category.description}</p>
                <p className="text-xs text-gray-300 font-medium">{category.courses}</p>
              </div>
            ))}
          </div>

          {/* Enhanced statistics grid with better accessibility */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }} role="region" aria-label="Service statistics and achievements">
            {[
              { 
                number: "98.5%", 
                label: t('stats.pass_rate') || "Pass Rate", 
                icon: <Target className="w-6 h-6" />,
                gradient: "from-green-500/25 to-emerald-500/25",
                detail: "Industry Leading"
              },
              { 
                number: "52", 
                label: t('stats.instructors') || "Expert Instructors", 
                icon: <Users className="w-6 h-6" />,
                gradient: "from-blue-500/25 to-cyan-500/25",
                detail: "Certified Professionals"
              },
              { 
                number: "18", 
                label: t('stats.courses') || "Course Options", 
                icon: <CheckCircle className="w-6 h-6" />,
                gradient: "from-purple-500/25 to-violet-500/25",
                detail: "Comprehensive Programs"
              },
              { 
                number: "13+", 
                label: t('stats.years') || "Years Excellence", 
                icon: <Star className="w-6 h-6" />,
                gradient: "from-orange-500/25 to-red-500/25",
                detail: "Proven Track Record"
              }
            ].map((stat, index) => (
              <article 
                key={index} 
                className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-sm rounded-2xl p-6 text-center border border-white/15 hover:border-white/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 group animate-fade-in shadow-lg hover:shadow-2xl`} 
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                tabIndex={0}
                aria-label={`${stat.number} ${stat.label} - ${stat.detail}`}
              >
                <div className="mb-3 text-hirtoli-green group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{stat.number}</div>
                <p className="text-sm text-gray-200 font-medium mb-1">{stat.label}</p>
                <p className="text-xs text-gray-300">{stat.detail}</p>
              </article>
            ))}
          </div>

          {/* Enhanced service highlights with better accessibility */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }} role="region" aria-label="Key service highlights">
            {[
              {
                title: t('services.highlights.flexible') || "Flexible Scheduling",
                description: t('services.highlights.flexible.desc') || "Learn at your own pace with convenient time slots and personalized scheduling options",
                icon: <Clock className="w-8 h-8" />,
                gradient: "from-blue-500/25 to-indigo-500/25",
                features: ["Weekend Classes", "Evening Sessions", "Custom Timing"]
              },
              {
                title: t('services.highlights.modern') || "Modern Fleet",
                description: t('services.highlights.modern.desc') || "Practice with the latest vehicles equipped with modern safety features and technology",
                icon: <Car className="w-8 h-8" />,
                gradient: "from-green-500/25 to-teal-500/25",
                features: ["2023 Model Vehicles", "Safety Features", "GPS Tracking"]
              },
              {
                title: t('services.highlights.certified') || "Certified Excellence",
                description: t('services.highlights.certified.desc') || "Internationally recognized training standards with continuous quality improvement",
                icon: <Award className="w-8 h-8" />,
                gradient: "from-yellow-500/25 to-orange-500/25",
                features: ["ISO Certified", "Expert Instructors", "Quality Assurance"]
              }
            ].map((highlight, index) => (
              <article 
                key={index} 
                className={`bg-gradient-to-br ${highlight.gradient} backdrop-blur-sm rounded-2xl p-8 text-center border border-white/15 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group`}
                tabIndex={0}
                aria-label={`${highlight.title}: ${highlight.description}`}
              >
                <div className="mb-4 text-hirtoli-green group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold mb-3 text-xl group-hover:text-hirtoli-green transition-colors duration-300">{highlight.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed mb-4">{highlight.description}</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  {highlight.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 mr-2 text-hirtoli-green" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;

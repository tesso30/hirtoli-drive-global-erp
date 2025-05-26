
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Car, Users, Award, Clock, Shield, Star, CheckCircle, Target } from 'lucide-react';

const ServiceHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-hirtoli-black via-gray-900 to-hirtoli-red text-white py-32 overflow-hidden">
      {/* Advanced background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(0,166,81,0.3)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.04)_50%,transparent_75%)] bg-[length:120px_120px] animate-[slide_35s_linear_infinite]"></div>
      </div>
      
      {/* Floating service elements */}
      <div className="absolute top-20 left-10 w-28 h-28 bg-hirtoli-green/20 rounded-full blur-xl animate-[float_9s_ease-in-out_infinite]"></div>
      <div className="absolute top-40 right-20 w-36 h-36 bg-white/10 rounded-full blur-2xl animate-[float_11s_ease-in-out_infinite_reverse]"></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-hirtoli-red/20 rounded-full blur-lg animate-[float_7s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-hirtoli-green/15 to-transparent rounded-full blur-md animate-[float_13s_ease-in-out_infinite]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Service features indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 animate-fade-in">
          {[
            { icon: Car, text: "200+ Modern Vehicles", color: "text-blue-300" },
            { icon: Users, text: "50+ Expert Instructors", color: "text-green-300" },
            { icon: Award, text: "Certified Training Programs", color: "text-yellow-300" },
            { icon: Shield, text: "100% Safety Guaranteed", color: "text-purple-300" }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-500 group hover:scale-110 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-125 transition-transform duration-300`} />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Our Premium
            </span>
            <br />
            <span className="bg-gradient-to-r from-hirtoli-green via-green-300 to-hirtoli-green bg-clip-text text-transparent">
              {t('nav.services')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90 leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Professional driving education tailored to your needs and skill level, delivered with excellence and innovation.
          </p>
          
          <p className="text-lg mb-12 max-w-5xl mx-auto text-gray-200 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
            From beginner courses to advanced commercial training, we offer comprehensive programs designed to build 
            confident, skilled drivers while maintaining the highest safety standards in the industry.
          </p>

          {/* Enhanced statistics grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { 
                number: "98%", 
                label: "Pass Rate", 
                icon: <Target className="w-6 h-6" />,
                gradient: "from-green-500/20 to-emerald-500/20" 
              },
              { 
                number: "50+", 
                label: "Expert Instructors", 
                icon: <Users className="w-6 h-6" />,
                gradient: "from-blue-500/20 to-cyan-500/20" 
              },
              { 
                number: "15+", 
                label: "Course Options", 
                icon: <CheckCircle className="w-6 h-6" />,
                gradient: "from-purple-500/20 to-violet-500/20" 
              },
              { 
                number: "13+", 
                label: "Years Excellence", 
                icon: <Star className="w-6 h-6" />,
                gradient: "from-orange-500/20 to-red-500/20" 
              }
            ].map((stat, index) => (
              <div key={index} className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 group animate-fade-in`} style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <div className="mb-3 text-hirtoli-green group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <p className="text-sm text-gray-200 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Service highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            {[
              {
                title: "Flexible Scheduling",
                description: "Learn at your own pace with convenient time slots",
                icon: <Clock className="w-8 h-8" />,
                gradient: "from-blue-500/20 to-indigo-500/20"
              },
              {
                title: "Modern Fleet",
                description: "Practice with the latest vehicles and safety features",
                icon: <Car className="w-8 h-8" />,
                gradient: "from-green-500/20 to-teal-500/20"
              },
              {
                title: "Certified Excellence",
                description: "Internationally recognized training standards",
                icon: <Award className="w-8 h-8" />,
                gradient: "from-yellow-500/20 to-orange-500/20"
              }
            ].map((highlight, index) => (
              <div key={index} className={`bg-gradient-to-br ${highlight.gradient} backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group`}>
                <div className="mb-4 text-hirtoli-green group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold mb-3 text-xl group-hover:text-hirtoli-green transition-colors duration-300">{highlight.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;


import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Award, Users, Calendar, Target, Shield, Star } from 'lucide-react';

const AboutHeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-hirtoli-black via-gray-900 to-hirtoli-red text-white py-32 overflow-hidden">
      {/* Advanced background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,166,81,0.3)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:80px_80px] animate-[slide_30s_linear_infinite]"></div>
      </div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-hirtoli-green/20 rounded-full blur-xl animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-[float_10s_ease-in-out_infinite_reverse]"></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-hirtoli-red/20 rounded-full blur-lg animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-hirtoli-green/20 to-transparent rounded-full blur-md animate-[float_12s_ease-in-out_infinite]"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Trust indicators with enhanced animations */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 animate-fade-in">
          {[
            { icon: Award, text: "Award-Winning Institution", color: "text-yellow-400" },
            { icon: Users, text: "15,000+ Happy Students", color: "text-blue-300" },
            { icon: Calendar, text: "13+ Years Excellence", color: "text-green-300" },
            { icon: Shield, text: "100% Safety Record", color: "text-purple-300" }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-500 group hover:scale-110 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-125 transition-transform duration-300`} />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            About Hirtoli
          </span>
          <br />
          <span className="bg-gradient-to-r from-hirtoli-green via-green-300 to-hirtoli-green bg-clip-text text-transparent">
            Driving School
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto animate-fade-in opacity-90 leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Pioneering excellence in driving education since 2010, shaping confident and responsible drivers across Ethiopia.
        </p>
        
        <p className="text-lg mb-12 max-w-5xl text-gray-200 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
          From our humble beginnings with a vision to transform road safety in Ethiopia, we have grown into the nation's 
          most trusted driving school, combining traditional values with modern teaching methods and cutting-edge technology.
        </p>

        {/* Enhanced achievement grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {[
            { number: "98%", label: "Pass Rate", gradient: "from-green-500/20 to-emerald-500/20" },
            { number: "13+", label: "Years Excellence", gradient: "from-blue-500/20 to-cyan-500/20" },
            { number: "50+", label: "Expert Instructors", gradient: "from-purple-500/20 to-violet-500/20" },
            { number: "3", label: "Branch Locations", gradient: "from-orange-500/20 to-red-500/20" }
          ].map((stat, index) => (
            <div key={index} className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 group animate-fade-in`} style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
              <p className="text-sm text-gray-200 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;

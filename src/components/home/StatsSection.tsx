
import React from 'react';
import { UserCheck, Calendar, Award, Users, MapPin, Phone, Car, Clock, Shield, Star, Zap, Heart } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "15,000+",
      label: "Students Trained",
      icon: <UserCheck className="w-8 h-8 text-hirtoli-green" />,
      description: "Successful graduates since 2010",
      gradient: "from-green-500/10 to-emerald-500/10",
      hoverGradient: "group-hover:from-green-500/20 group-hover:to-emerald-500/20"
    },
    {
      value: "13+",
      label: "Years Experience",
      icon: <Calendar className="w-8 h-8 text-hirtoli-red" />,
      description: "Serving Ethiopia with excellence"
    },
    {
      value: "98%",
      label: "Pass Rate",
      icon: <Award className="w-8 h-8 text-hirtoli-black" />,
      description: "First-time test success rate"
    },
    {
      value: "50+",
      label: "Expert Instructors",
      icon: <Users className="w-8 h-8 text-hirtoli-green" />,
      description: "Certified and experienced"
    },
    {
      value: "2",
      label: "Branch Locations",
      icon: <MapPin className="w-8 h-8 text-hirtoli-red" />,
      description: "Chiro and Harar branches"
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <Phone className="w-8 h-8 text-hirtoli-black" />,
      description: "Student assistance anytime"
    },
    {
      value: "200+",
      label: "Modern Vehicles",
      icon: <Car className="w-8 h-8 text-blue-600" />,
      description: "Latest safety features included"
    },
    {
      value: "6 Days",
      label: "Average Training Time",
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      description: "Efficient learning programs"
    },
    {
      value: "100%",
      label: "Safety Record",
      icon: <Shield className="w-8 h-8 text-green-600" />,
      description: "Zero accidents in training"
    },
    {
      value: "4.9/5",
      label: "Student Rating",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      description: "Excellent student satisfaction"
    },
    {
      value: "30+",
      label: "Course Options",
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      description: "Comprehensive training programs"
    },
    {
      value: "95%",
      label: "Student Satisfaction",
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      description: "Students love our approach"
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,166,81,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-hirtoli-black via-gray-700 to-hirtoli-black bg-clip-text text-transparent">
            Our Track Record Speaks
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Over a decade of excellence in driving education with measurable results 
            that demonstrate our commitment to student success and road safety.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-hirtoli-red to-hirtoli-green mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl border border-gray-200 shadow-lg animate-fade-in flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500 hover:border-hirtoli-green bg-gradient-to-br from-white to-gray-50 hover:-translate-y-2 group relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-hirtoli-green/0 to-hirtoli-red/0 group-hover:from-hirtoli-green/5 group-hover:to-hirtoli-red/5 transition-all duration-500"></div>
              
              <div className="relative z-10 mb-6 p-4 rounded-full bg-gradient-to-br from-gray-50 to-white shadow-inner group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="relative z-10 text-4xl font-bold mb-3 text-gray-800 group-hover:text-hirtoli-green transition-colors duration-300">
                {stat.value}
              </div>
              <div className="relative z-10 text-gray-800 font-semibold mb-3 text-lg">{stat.label}</div>
              <div className="relative z-10 text-sm text-gray-600 leading-relaxed">{stat.description}</div>
              
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-hirtoli-green to-hirtoli-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

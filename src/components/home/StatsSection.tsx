
import React from 'react';
import { UserCheck, Calendar, Award, Users, MapPin, Phone, Car, Clock, Shield, Star, Zap, Heart } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "15,000+",
      label: "Students Trained",
      icon: <UserCheck className="w-8 h-8 text-hirtoli-green" />,
      description: "Successful graduates since 2010"
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
      value: "3",
      label: "Branch Locations",
      icon: <MapPin className="w-8 h-8 text-hirtoli-red" />,
      description: "Across major Ethiopian cities"
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Track Record Speaks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over a decade of excellence in driving education with measurable results 
            that demonstrate our commitment to student success and road safety.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-gray-100 shadow-sm animate-fade-in flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:border-hirtoli-green bg-gradient-to-br from-white to-gray-50"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="mb-4 p-3 rounded-full bg-gray-50">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2 text-gray-800">{stat.value}</div>
              <div className="text-gray-800 font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

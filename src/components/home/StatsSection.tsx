
import React from 'react';
import { UserCheck, Calendar, Award, Users, MapPin, Phone } from 'lucide-react';

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
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-100 shadow-sm animate-fade-in flex flex-col items-center text-center hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-800 font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

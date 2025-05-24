
import React from 'react';
import { Target, Heart, Shield } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const whyChooseUs = [
    {
      icon: <Target className="w-12 h-12 text-hirtoli-red" />,
      title: "Proven Track Record",
      description: "Over 98% of our students pass their driving test on the first attempt, thanks to our comprehensive training methodology and experienced instructors."
    },
    {
      icon: <Heart className="w-12 h-12 text-hirtoli-green" />,
      title: "Student-Centered Approach",
      description: "We prioritize each student's individual learning pace and style, ensuring a comfortable and effective learning environment for everyone."
    },
    {
      icon: <Shield className="w-12 h-12 text-hirtoli-black" />,
      title: "Safety First",
      description: "All our vehicles are equipped with dual controls and latest safety features. Our instructors are trained in emergency procedures and defensive driving."
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose Hirtoli?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We're committed to providing the highest quality driving education with a focus on safety, confidence, and success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-in flex flex-col items-center hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

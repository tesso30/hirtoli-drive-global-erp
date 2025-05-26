
import React from 'react';
import { Target, Heart, Shield, Clock, Award, Users, Car, BookOpen, Headphones } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const whyChooseUs = [
    {
      icon: <Target className="w-12 h-12 text-hirtoli-red" />,
      title: "Proven Track Record",
      description: "Over 98% of our students pass their driving test on the first attempt, thanks to our comprehensive training methodology and experienced instructors.",
      features: ["98% first-time pass rate", "15,000+ successful graduates", "13 years of excellence"]
    },
    {
      icon: <Heart className="w-12 h-12 text-hirtoli-green" />,
      title: "Student-Centered Approach",
      description: "We prioritize each student's individual learning pace and style, ensuring a comfortable and effective learning environment for everyone.",
      features: ["Personalized instruction", "Flexible scheduling", "Supportive environment"]
    },
    {
      icon: <Shield className="w-12 h-12 text-hirtoli-black" />,
      title: "Safety First",
      description: "All our vehicles are equipped with dual controls and latest safety features. Our instructors are trained in emergency procedures and defensive driving.",
      features: ["Dual control vehicles", "Latest safety tech", "Emergency trained staff"]
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Flexible Scheduling",
      description: "Learn at your own pace with morning, afternoon, and weekend classes available to fit your busy lifestyle and work schedule.",
      features: ["7-day availability", "Multiple time slots", "Make-up sessions"]
    },
    {
      icon: <Award className="w-12 h-12 text-purple-600" />,
      title: "Certified Excellence",
      description: "ISO 9001:2015 certified with full accreditation from Ethiopian Road Authority and Ministry of Education for quality assurance.",
      features: ["ISO certified", "Government accredited", "Quality guaranteed"]
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Expert Instructors",
      description: "Learn from 50+ certified instructors with extensive experience in both practical driving and theoretical knowledge.",
      features: ["50+ instructors", "Multi-language support", "Specialized training"]
    },
    {
      icon: <Car className="w-12 h-12 text-green-600" />,
      title: "Modern Fleet",
      description: "Practice with our fleet of 200+ modern vehicles including manual, automatic, and commercial vehicles for comprehensive training.",
      features: ["200+ vehicles", "Manual & automatic", "Commercial options"]
    },
    {
      icon: <BookOpen className="w-12 h-12 text-red-500" />,
      title: "Complete Learning Materials",
      description: "Comprehensive study materials including digital guides, practice tests, and video tutorials for theory and practical preparation.",
      features: ["Digital resources", "Practice tests", "Video tutorials"]
    },
    {
      icon: <Headphones className="w-12 h-12 text-indigo-600" />,
      title: "24/7 Student Support",
      description: "Round-the-clock assistance for scheduling, questions, and emergency support to ensure your learning journey is smooth.",
      features: ["24/7 availability", "Multiple channels", "Emergency support"]
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 via-gray-50 to-white relative overflow-hidden">
      {/* Advanced background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(255,0,0,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,rgba(0,166,81,0.1)_0%,transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-hirtoli-red via-hirtoli-black to-hirtoli-green bg-clip-text text-transparent">
            Why Choose Hirtoli?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            We're committed to providing the highest quality driving education with a focus on safety, confidence, and success. 
            Here's what sets us apart from other driving schools.
          </p>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-hirtoli-green to-green-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
            <Award className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-semibold text-lg">Rated #1 Driving School in Ethiopia</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg text-center animate-fade-in flex flex-col items-center hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-hirtoli-green group relative overflow-hidden transform hover:-translate-y-3"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-hirtoli-green/0 to-hirtoli-red/0 group-hover:from-hirtoli-green/5 group-hover:to-hirtoli-red/5 transition-all duration-500"></div>
              
              {/* Icon with enhanced animation */}
              <div className="relative z-10 mb-8 p-4 rounded-full bg-gradient-to-br from-gray-50 to-white shadow-inner group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                {item.icon}
              </div>
              
              <h3 className="relative z-10 text-xl font-semibold mb-6 group-hover:text-hirtoli-green transition-colors duration-300">{item.title}</h3>
              <p className="relative z-10 text-gray-600 mb-8 leading-relaxed">{item.description}</p>
              
              {/* Feature list with staggered animation */}
              <ul className="relative z-10 space-y-3 text-sm text-gray-500">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center gap-3 group-hover:text-gray-700 transition-colors duration-300" style={{ animationDelay: `${featureIndex * 0.1}s` }}>
                    <div className="w-2 h-2 bg-gradient-to-r from-hirtoli-green to-hirtoli-red rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-hirtoli-green via-blue-500 to-hirtoli-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
          ))}
        </div>
        
        {/* Enhanced call to action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-2xl max-w-3xl mx-auto border border-gray-100 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-hirtoli-green/0 to-hirtoli-red/0 group-hover:from-hirtoli-green/5 group-hover:to-hirtoli-red/5 transition-all duration-500"></div>
            
            <h3 className="relative z-10 text-3xl font-bold mb-6 bg-gradient-to-r from-hirtoli-black to-gray-700 bg-clip-text text-transparent">
              Ready to Experience the Difference?
            </h3>
            <p className="relative z-10 text-gray-600 mb-8 text-lg leading-relaxed">
              Join thousands of satisfied students who chose Hirtoli for their driving education. 
              Start your journey to confident driving today.
            </p>
            <div className="relative z-10 flex flex-wrap gap-6 justify-center">
              <button className="bg-gradient-to-r from-hirtoli-red to-red-600 text-white px-10 py-4 rounded-full hover:from-red-600 hover:to-hirtoli-red transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 group">
                Book Free Consultation
              </button>
              <button className="border-2 border-hirtoli-green text-hirtoli-green px-10 py-4 rounded-full hover:bg-hirtoli-green hover:text-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

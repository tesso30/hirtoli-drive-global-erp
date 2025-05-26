
import React from 'react';
import { Target, Heart, Shield, Clock, Award, Users, Car, BookOpen, Headphones, MapPin } from 'lucide-react';

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Hirtoli?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're committed to providing the highest quality driving education with a focus on safety, confidence, and success. 
            Here's what sets us apart from other driving schools.
          </p>
          <div className="inline-flex items-center gap-2 bg-hirtoli-green text-white px-6 py-3 rounded-full">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Rated #1 Driving School in Ethiopia</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg text-center animate-fade-in flex flex-col items-center hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-hirtoli-green group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-hirtoli-green transition-colors">{item.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
              <ul className="space-y-2 text-sm text-gray-500">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-hirtoli-green rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied students who chose Hirtoli for their driving education. 
              Start your journey to confident driving today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-hirtoli-red text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold">
                Book Free Consultation
              </button>
              <button className="border border-hirtoli-green text-hirtoli-green px-8 py-3 rounded-lg hover:bg-hirtoli-green hover:text-white transition-colors font-semibold">
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

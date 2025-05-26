
import React from 'react';
import { Target, Eye, Heart, Shield, Users, Star } from 'lucide-react';

const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,166,81,0.1)_2px,transparent_0)] bg-[length:60px_60px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-hirtoli-green/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-hirtoli-red/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-hirtoli-black via-gray-700 to-hirtoli-black bg-clip-text text-transparent">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Driving towards a safer tomorrow through excellence in education, innovation in training, and unwavering commitment to our students' success.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-hirtoli-red to-hirtoli-green mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mission */}
          <div className="group">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-hirtoli-green/20 relative overflow-hidden hover:-translate-y-2 animate-fade-in">
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-hirtoli-red/0 to-hirtoli-green/0 group-hover:from-hirtoli-red/5 group-hover:to-hirtoli-green/5 transition-all duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-br from-hirtoli-red to-red-600 rounded-2xl shadow-lg mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 group-hover:text-hirtoli-red transition-colors duration-300">Our Mission</h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  To provide world-class driving education that empowers individuals with the skills, knowledge, and confidence needed to become safe, responsible drivers while contributing to Ethiopia's road safety revolution.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: "Prioritize safety in every lesson" },
                    { icon: Users, text: "Build confident, skilled drivers" },
                    { icon: Star, text: "Deliver exceptional education quality" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group/item">
                      <item.icon className="w-5 h-5 text-hirtoli-green mr-3 group-hover/item:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="group">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-hirtoli-green/20 relative overflow-hidden hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-hirtoli-green/0 to-hirtoli-black/0 group-hover:from-hirtoli-green/5 group-hover:to-hirtoli-black/5 transition-all duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-br from-hirtoli-green to-green-600 rounded-2xl shadow-lg mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 group-hover:text-hirtoli-green transition-colors duration-300">Our Vision</h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  To be Ethiopia's leading driving education institution, setting the gold standard for road safety, innovation in training methodologies, and producing the most skilled and responsible drivers in the nation.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Target, text: "Lead innovation in driving education" },
                    { icon: Heart, text: "Foster a culture of road safety" },
                    { icon: Star, text: "Expand access to quality training nationwide" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group/item">
                      <item.icon className="w-5 h-5 text-hirtoli-green mr-3 group-hover/item:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "Striving for the highest standards in everything we do",
                color: "from-red-500 to-hirtoli-red",
                bgColor: "from-red-50 to-red-100"
              },
              {
                title: "Innovation",
                description: "Embracing new technologies and teaching methodologies",
                color: "from-green-500 to-hirtoli-green",
                bgColor: "from-green-50 to-green-100"
              },
              {
                title: "Integrity",
                description: "Building trust through transparency and ethical practices",
                color: "from-gray-600 to-hirtoli-black",
                bgColor: "from-gray-50 to-gray-100"
              }
            ].map((value, index) => (
              <div key={index} className={`bg-gradient-to-br ${value.bgColor} rounded-2xl p-8 text-center border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group`}>
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;


import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Users } from 'lucide-react';

const ContactHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-hirtoli-green via-green-600 to-hirtoli-black text-white py-32 overflow-hidden">
      {/* Advanced background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.2)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:100px_100px] animate-[slide_25s_linear_infinite]"></div>
      </div>
      
      {/* Floating contact elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-[float_7s_ease-in-out_infinite]"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-hirtoli-red/20 rounded-full blur-2xl animate-[float_9s_ease-in-out_infinite_reverse]"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-md animate-[float_11s_ease-in-out_infinite]"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Contact methods indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 animate-fade-in">
          {[
            { icon: Phone, text: "24/7 Phone Support", color: "text-blue-300" },
            { icon: Mail, text: "Quick Email Response", color: "text-yellow-300" },
            { icon: MessageSquare, text: "Live Chat Available", color: "text-green-300" },
            { icon: Users, text: "In-Person Consultations", color: "text-purple-300" }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-500 group hover:scale-110 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-125 transition-transform duration-300`} />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Get in Touch
          </span>
          <br />
          <span className="bg-gradient-to-r from-hirtoli-red via-red-300 to-hirtoli-red bg-clip-text text-transparent">
            With Us
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto animate-fade-in opacity-90 leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Ready to start your driving journey? We're here to help you every step of the way.
        </p>
        
        <p className="text-lg mb-12 max-w-5xl text-gray-200 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
          Whether you have questions about our courses, need to schedule a lesson, or want to visit our facilities, 
          our dedicated team is available through multiple channels to provide you with personalized assistance.
        </p>

        {/* Enhanced contact methods grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {[
            {
              icon: <Phone className="w-8 h-8" />,
              title: "Call Us",
              description: "Speak directly with our team",
              details: "Average response: Immediate",
              gradient: "from-blue-500/20 to-cyan-500/20",
              hoverColor: "group-hover:text-blue-300"
            },
            {
              icon: <Mail className="w-8 h-8" />,
              title: "Email Support",
              description: "Detailed inquiries welcome",
              details: "Average response: 2 hours",
              gradient: "from-purple-500/20 to-pink-500/20",
              hoverColor: "group-hover:text-purple-300"
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              title: "Visit Our Offices",
              description: "Personal consultations available",
              details: "Open Mon-Sat, 8AM-6PM",
              gradient: "from-green-500/20 to-emerald-500/20",
              hoverColor: "group-hover:text-green-300"
            }
          ].map((method, index) => (
            <div key={index} className={`bg-gradient-to-br ${method.gradient} backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 group animate-fade-in`} style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
              <div className={`mb-4 ${method.hoverColor} transition-colors duration-300 group-hover:scale-110 transform duration-300`}>
                {method.icon}
              </div>
              <h3 className="font-semibold mb-2 text-xl group-hover:scale-105 transition-transform duration-300">{method.title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed mb-2">{method.description}</p>
              <p className="text-xs text-gray-300 font-medium">{method.details}</p>
            </div>
          ))}
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {[
            { number: "<2min", label: "Average Response Time" },
            { number: "99%", label: "Customer Satisfaction" },
            { number: "24/7", label: "Support Available" },
            { number: "3", label: "Office Locations" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
              <p className="text-sm text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

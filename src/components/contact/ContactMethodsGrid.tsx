
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactMethodsGrid: React.FC = () => {
  const { t } = useLanguage();

  const methods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: t('contact.methods.call') || "Call Us",
      description: t('contact.methods.call_desc') || "Speak directly with our expert team",
      details: t('contact.methods.call_details') || "Average response: Immediate",
      phone: "+251 911 123 456",
      gradient: "from-blue-500/25 to-cyan-500/25",
      hoverColor: "group-hover:text-blue-300"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: t('contact.methods.email') || "Email Support",
      description: t('contact.methods.email_desc') || "Detailed inquiries and documentation",
      details: t('contact.methods.email_details') || "Average response: 2 hours",
      email: "info@hirtoli.com",
      gradient: "from-purple-500/25 to-pink-500/25",
      hoverColor: "group-hover:text-purple-300"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: t('contact.methods.visit') || "Visit Our Offices",
      description: t('contact.methods.visit_desc') || "Personal consultations and facility tours",
      details: t('contact.methods.visit_details') || "Open Mon-Sat, 8AM-6PM",
      address: "Chiro & Harar Locations",
      gradient: "from-green-500/25 to-emerald-500/25",
      hoverColor: "group-hover:text-green-300"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }} role="region" aria-label="Contact methods and details">
      {methods.map((method, index) => (
        <article 
          key={index} 
          className={`bg-gradient-to-br ${method.gradient} backdrop-blur-sm rounded-2xl p-8 text-center border border-white/15 hover:border-white/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 group animate-fade-in shadow-lg hover:shadow-2xl`} 
          style={{ animationDelay: `${0.6 + index * 0.1}s` }}
          tabIndex={0}
          aria-label={`${method.title}: ${method.description} - ${method.details}`}
        >
          <div className={`mb-4 ${method.hoverColor} transition-colors duration-300 group-hover:scale-110 transform duration-300`}>
            {method.icon}
          </div>
          <h3 className="font-semibold mb-3 text-xl group-hover:scale-105 transition-transform duration-300">{method.title}</h3>
          <p className="text-sm text-gray-200 leading-relaxed mb-3">{method.description}</p>
          <p className="text-xs text-gray-300 font-medium mb-2">{method.details}</p>
          {method.phone && (
            <a href={`tel:${method.phone}`} className="text-sm text-blue-300 hover:text-blue-200 transition-colors duration-300 block">
              {method.phone}
            </a>
          )}
          {method.email && (
            <a href={`mailto:${method.email}`} className="text-sm text-purple-300 hover:text-purple-200 transition-colors duration-300 block">
              {method.email}
            </a>
          )}
          {method.address && (
            <p className="text-sm text-green-300">{method.address}</p>
          )}
        </article>
      ))}
    </div>
  );
};

export default ContactMethodsGrid;


import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactStats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { number: "<30s", label: t('contact.response_stats.response') || "Average Response Time", detail: "Phone calls answered quickly" },
    { number: "99.2%", label: t('contact.response_stats.satisfaction') || "Customer Satisfaction", detail: "Based on 5,000+ reviews" },
    { number: "24/7", label: t('contact.response_stats.availability') || "Support Available", detail: "Round-the-clock assistance" },
    { number: "3", label: t('contact.response_stats.locations') || "Office Locations", detail: "Convenient nationwide access" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }} role="region" aria-label="Contact performance statistics">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="text-center group hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-white/10 backdrop-blur-sm"
          tabIndex={0}
          aria-label={`${stat.number} ${stat.label} - ${stat.detail}`}
        >
          <div className="text-2xl md:text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{stat.number}</div>
          <p className="text-sm text-gray-200 font-medium mb-1">{stat.label}</p>
          <p className="text-xs text-gray-300">{stat.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactStats;

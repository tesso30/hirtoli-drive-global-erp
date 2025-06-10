
import React from 'react';
import { HeadphonesIcon, Users, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactFeatures: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t('contact.features.instant') || "Instant Support",
      description: t('contact.features.instant_desc') || "Get immediate help through multiple channels",
      icon: <HeadphonesIcon className="w-8 h-8" />,
      gradient: "from-blue-500/25 to-cyan-500/25"
    },
    {
      title: t('contact.features.expert') || "Expert Consultation",
      description: t('contact.features.expert_desc') || "Talk to certified driving education specialists",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-500/25 to-emerald-500/25"
    },
    {
      title: t('contact.features.flexible') || "Flexible Communication",
      description: t('contact.features.flexible_desc') || "Choose your preferred communication method",
      icon: <MessageSquare className="w-8 h-8" />,
      gradient: "from-purple-500/25 to-violet-500/25"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      {features.map((feature, index) => (
        <div 
          key={index} 
          className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group`}
          role="article"
          tabIndex={0}
          aria-label={`${feature.title}: ${feature.description}`}
        >
          <div className="mb-4 text-hirtoli-green group-hover:scale-110 transition-transform duration-300 flex justify-center">
            {feature.icon}
          </div>
          <h3 className="font-semibold mb-2 text-lg group-hover:text-hirtoli-green transition-colors duration-300">{feature.title}</h3>
          <p className="text-sm text-gray-200 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactFeatures;

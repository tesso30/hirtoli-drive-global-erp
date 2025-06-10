
import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Users, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactMethodIndicators: React.FC = () => {
  const { t } = useLanguage();

  const handlePhoneSupport = () => {
    window.open('tel:+251911123456', '_self');
  };

  const handleEmailSupport = () => {
    window.open('mailto:info@hirtoli.com?subject=Support Request&body=Hello, I need assistance with...', '_blank');
  };

  const handleLiveChat = () => {
    const liveChatElement = document.querySelector('[data-testid="live-chat"]');
    if (liveChatElement) {
      liveChatElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Live chat is available at the bottom of the page!');
    }
  };

  const handleInPersonConsultation = () => {
    window.location.href = '/consultation';
  };

  const handleLanguageSupport = () => {
    const languageSelector = document.querySelector('[data-testid="language-selector"]');
    if (languageSelector) {
      languageSelector.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('We support Amharic, English, and Oromo. Use the language selector in the navigation menu.');
    }
  };

  const contactMethods = [
    { 
      icon: Phone, 
      text: t('contact.stats.phone_support') || "24/7 Phone Support", 
      color: "text-blue-300", 
      detail: "Immediate Response", 
      rating: "4.9/5",
      onClick: handlePhoneSupport,
      cursor: "cursor-pointer"
    },
    { 
      icon: Mail, 
      text: t('contact.stats.email_support') || "Quick Email Response", 
      color: "text-yellow-300", 
      detail: "Within 2 Hours", 
      rating: "4.8/5",
      onClick: handleEmailSupport,
      cursor: "cursor-pointer"
    },
    { 
      icon: MessageSquare, 
      text: t('contact.stats.live_chat') || "Live Chat Available", 
      color: "text-green-300", 
      detail: "Real-time Help", 
      rating: "4.9/5",
      onClick: handleLiveChat,
      cursor: "cursor-pointer"
    },
    { 
      icon: Users, 
      text: t('contact.stats.in_person') || "In-Person Consultations", 
      color: "text-purple-300", 
      detail: "Expert Guidance", 
      rating: "5.0/5",
      onClick: handleInPersonConsultation,
      cursor: "cursor-pointer"
    },
    { 
      icon: Globe, 
      text: t('contact.stats.multilingual') || "Multilingual Support", 
      color: "text-cyan-300", 
      detail: "3 Languages", 
      rating: "4.7/5",
      onClick: handleLanguageSupport,
      cursor: "cursor-pointer"
    }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-fade-in" role="region" aria-label="Available contact methods and response times">
      {contactMethods.map((item, index) => (
        <div 
          key={index} 
          className={`flex flex-col items-center gap-2 bg-white/15 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 hover:bg-white/25 transition-all duration-500 group hover:scale-110 animate-fade-in transform hover:-translate-y-2 shadow-xl hover:shadow-2xl ${item.cursor}`} 
          style={{ animationDelay: `${index * 0.1}s` }}
          role="button"
          aria-label={`${item.text} - ${item.detail} - Rating: ${item.rating} - Click to access`}
          tabIndex={0}
          onClick={item.onClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              item.onClick();
            }
          }}
        >
          <item.icon 
            className={`w-6 h-6 ${item.color} group-hover:scale-125 transition-transform duration-300`} 
            aria-hidden="true"
          />
          <div className="text-center">
            <span className="text-sm font-bold block">{item.text}</span>
            <span className="text-xs text-gray-300 font-medium">{item.detail}</span>
            <span className="text-xs text-yellow-300 font-medium">★ {item.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMethodIndicators;

import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Users, HeadphonesIcon, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactHero: React.FC = () => {
  const { t } = useLanguage();

  const handlePhoneSupport = () => {
    window.open('tel:+251911123456', '_self');
  };

  const handleEmailSupport = () => {
    window.open('mailto:info@hirtoli.com?subject=Support Request&body=Hello, I need assistance with...', '_blank');
  };

  const handleLiveChat = () => {
    // Scroll to the live chat component at the bottom of the page
    const liveChatElement = document.querySelector('[data-testid="live-chat"]');
    if (liveChatElement) {
      liveChatElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: show alert or open chat widget
      alert('Live chat is available at the bottom of the page!');
    }
  };

  const handleInPersonConsultation = () => {
    // Navigate to consultation page
    window.location.href = '/consultation';
  };

  const handleLanguageSupport = () => {
    // Scroll to language selector or show language options
    const languageSelector = document.querySelector('[data-testid="language-selector"]');
    if (languageSelector) {
      languageSelector.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Show available languages info
      alert('We support Amharic, English, and Oromo. Use the language selector in the navigation menu.');
    }
  };

  return (
    <section 
      className="relative bg-gradient-to-br from-hirtoli-green via-green-600 to-hirtoli-black text-white py-32 overflow-hidden"
      role="banner"
      aria-label="Contact Hirtoli Driving School Hero Section"
    >
      {/* Enhanced background decorations with performance optimization */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.25)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_25%,rgba(255,255,255,0.07)_50%,transparent_75%)] bg-[length:100px_100px] animate-[slide_25s_linear_infinite] will-change-transform"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(255,255,255,0.05)_120deg,transparent_240deg)] animate-[spin_50s_linear_infinite] will-change-transform"></div>
      </div>
      
      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/15 rounded-full blur-xl animate-[float_7s_ease-in-out_infinite] will-change-transform" aria-hidden="true"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-hirtoli-red/25 rounded-full blur-2xl animate-[float_9s_ease-in-out_infinite_reverse] will-change-transform" aria-hidden="true"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-[float_8s_ease-in-out_infinite] will-change-transform" aria-hidden="true"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-white/15 to-transparent rounded-full blur-md animate-[float_11s_ease-in-out_infinite] will-change-transform" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Enhanced contact methods indicators with interactive functionality */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-fade-in" role="region" aria-label="Available contact methods and response times">
          {[
            { 
              icon: Phone, 
              text: t('contact.phone_support') || "24/7 Phone Support", 
              color: "text-blue-300", 
              detail: "Immediate Response", 
              rating: "4.9/5",
              onClick: handlePhoneSupport,
              cursor: "cursor-pointer"
            },
            { 
              icon: Mail, 
              text: t('contact.email_support') || "Quick Email Response", 
              color: "text-yellow-300", 
              detail: "Within 2 Hours", 
              rating: "4.8/5",
              onClick: handleEmailSupport,
              cursor: "cursor-pointer"
            },
            { 
              icon: MessageSquare, 
              text: t('contact.live_chat') || "Live Chat Available", 
              color: "text-green-300", 
              detail: "Real-time Help", 
              rating: "4.9/5",
              onClick: handleLiveChat,
              cursor: "cursor-pointer"
            },
            { 
              icon: Users, 
              text: t('contact.in_person') || "In-Person Consultations", 
              color: "text-purple-300", 
              detail: "Expert Guidance", 
              rating: "5.0/5",
              onClick: handleInPersonConsultation,
              cursor: "cursor-pointer"
            },
            { 
              icon: Globe, 
              text: t('contact.multilingual') || "Multilingual Support", 
              color: "text-cyan-300", 
              detail: "3 Languages", 
              rating: "4.7/5",
              onClick: handleLanguageSupport,
              cursor: "cursor-pointer"
            }
          ].map((item, index) => (
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

        <header className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              {t('contact.title.main') || 'Get in Touch'}
            </span>
            <br />
            <span className="bg-gradient-to-r from-hirtoli-red via-red-300 to-hirtoli-red bg-clip-text text-transparent drop-shadow-lg">
              {t('contact.title.sub') || 'With Us'}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 animate-fade-in opacity-90 leading-relaxed font-medium" style={{ animationDelay: '0.2s' }}>
            {t('contact.description.main') || 'Ready to start your driving journey? We\'re here to help you every step of the way with personalized support and expert guidance.'}
          </p>
          
          <p className="text-lg mb-8 text-gray-200 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
            {t('contact.description.detailed') || 'Whether you have questions about our courses, need to schedule a lesson, or want to visit our facilities, our dedicated multilingual team is available through multiple channels to provide you with personalized assistance and support.'}
          </p>

          {/* Enhanced contact features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              {
                title: t('contact.features.instant') || "Instant Support",
                description: t('contact.features.instant.desc') || "Get immediate help through multiple channels",
                icon: <HeadphonesIcon className="w-8 h-8" />,
                gradient: "from-blue-500/25 to-cyan-500/25"
              },
              {
                title: t('contact.features.expert') || "Expert Consultation",
                description: t('contact.features.expert.desc') || "Talk to certified driving education specialists",
                icon: <Users className="w-8 h-8" />,
                gradient: "from-green-500/25 to-emerald-500/25"
              },
              {
                title: t('contact.features.flexible') || "Flexible Communication",
                description: t('contact.features.flexible.desc') || "Choose your preferred communication method",
                icon: <MessageSquare className="w-8 h-8" />,
                gradient: "from-purple-500/25 to-violet-500/25"
              }
            ].map((feature, index) => (
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
        </header>

        {/* Enhanced contact methods grid with better accessibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }} role="region" aria-label="Contact methods and details">
          {[
            {
              icon: <Phone className="w-8 h-8" />,
              title: t('contact.methods.call') || "Call Us",
              description: t('contact.methods.call.desc') || "Speak directly with our expert team",
              details: t('contact.methods.call.details') || "Average response: Immediate",
              phone: "+251 911 123 456",
              gradient: "from-blue-500/25 to-cyan-500/25",
              hoverColor: "group-hover:text-blue-300"
            },
            {
              icon: <Mail className="w-8 h-8" />,
              title: t('contact.methods.email') || "Email Support",
              description: t('contact.methods.email.desc') || "Detailed inquiries and documentation",
              details: t('contact.methods.email.details') || "Average response: 2 hours",
              email: "info@hirtoli.com",
              gradient: "from-purple-500/25 to-pink-500/25",
              hoverColor: "group-hover:text-purple-300"
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              title: t('contact.methods.visit') || "Visit Our Offices",
              description: t('contact.methods.visit.desc') || "Personal consultations and facility tours",
              details: t('contact.methods.visit.details') || "Open Mon-Sat, 8AM-6PM",
              address: "Chiro & Harar Locations",
              gradient: "from-green-500/25 to-emerald-500/25",
              hoverColor: "group-hover:text-green-300"
            }
          ].map((method, index) => (
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

        {/* Enhanced quick stats with better accessibility */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }} role="region" aria-label="Contact performance statistics">
          {[
            { number: "<30s", label: t('contact.stats.response') || "Average Response Time", detail: "Phone calls answered quickly" },
            { number: "99.2%", label: t('contact.stats.satisfaction') || "Customer Satisfaction", detail: "Based on 5,000+ reviews" },
            { number: "24/7", label: t('contact.stats.availability') || "Support Available", detail: "Round-the-clock assistance" },
            { number: "3", label: t('contact.stats.locations') || "Office Locations", detail: "Convenient nationwide access" }
          ].map((stat, index) => (
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
      </div>
    </section>
  );
};

export default ContactHero;

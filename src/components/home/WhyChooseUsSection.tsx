
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Target, Heart, Shield, Clock, Award, Users, Car, BookOpen, Headphones, GraduationCap, Smartphone, Globe, Users2, FileCheck } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const whyChooseUs = [
    {
      icon: <Target className="w-12 h-12 text-hirtoli-red" />,
      title: t('home.why_choose_us.proven_track_record'),
      description: t('home.why_choose_us.proven_track_record_desc'),
      features: [t('home.why_choose_us.features.first_time_pass'), t('home.why_choose_us.features.successful_graduates'), t('home.why_choose_us.features.years_excellence')]
    },
    {
      icon: <Heart className="w-12 h-12 text-hirtoli-green" />,
      title: t('home.why_choose_us.student_centered'),
      description: t('home.why_choose_us.student_centered_desc'),
      features: [t('home.why_choose_us.features.personalized_instruction'), t('home.why_choose_us.features.flexible_scheduling'), t('home.why_choose_us.features.supportive_environment')]
    },
    {
      icon: <Shield className="w-12 h-12 text-hirtoli-black" />,
      title: t('home.why_choose_us.safety_first'),
      description: t('home.why_choose_us.safety_first_desc'),
      features: [t('home.why_choose_us.features.dual_control_vehicles'), t('home.why_choose_us.features.latest_safety_tech'), t('home.why_choose_us.features.emergency_trained_staff')]
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: t('home.why_choose_us.flexible_scheduling'),
      description: t('home.why_choose_us.flexible_scheduling_desc'),
      features: [t('home.why_choose_us.features.seven_day_availability'), t('home.why_choose_us.features.multiple_time_slots'), t('home.why_choose_us.features.makeup_sessions')]
    },
    {
      icon: <Award className="w-12 h-12 text-purple-600" />,
      title: t('home.why_choose_us.certified_excellence'),
      description: t('home.why_choose_us.certified_excellence_desc'),
      features: [t('home.why_choose_us.features.iso_certified'), t('home.why_choose_us.features.government_accredited'), t('home.why_choose_us.features.quality_guaranteed')]
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-orange-500" />,
      title: t('home.why_choose_us.expert_instructors'),
      description: t('home.why_choose_us.expert_instructors_desc'),
      features: [t('home.why_choose_us.features.fifty_plus_instructors'), t('home.why_choose_us.features.multi_language_support'), t('home.why_choose_us.features.specialized_training')]
    },
    {
      icon: <Car className="w-12 h-12 text-green-600" />,
      title: t('home.why_choose_us.modern_fleet'),
      description: t('home.why_choose_us.modern_fleet_desc'),
      features: [t('home.why_choose_us.features.two_hundred_vehicles'), t('home.why_choose_us.features.manual_automatic'), t('home.why_choose_us.features.commercial_options')]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: t('home.why_choose_us.digital_learning'),
      description: t('home.why_choose_us.digital_learning_desc'),
      features: [t('home.why_choose_us.features.mobile_app_access'), t('home.why_choose_us.features.video_tutorials'), t('home.why_choose_us.features.practice_tests')]
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-600" />,
      title: t('home.why_choose_us.multi_language'),
      description: t('home.why_choose_us.multi_language_desc'),
      features: [t('home.why_choose_us.features.culturally_adapted'), t('home.why_choose_us.features.native_speaking'), t('home.why_choose_us.features.three_languages')]
    },
    {
      icon: <Users2 className="w-12 h-12 text-orange-500" />,
      title: t('home.why_choose_us.small_class'),
      description: t('home.why_choose_us.small_class_desc'),
      features: [t('home.why_choose_us.features.individual_feedback'), t('home.why_choose_us.features.customized_learning'), t('home.why_choose_us.features.personal_attention')]
    },
    {
      icon: <BookOpen className="w-12 h-12 text-red-500" />,
      title: t('home.why_choose_us.comprehensive_curriculum'),
      description: t('home.why_choose_us.comprehensive_curriculum_desc'),
      features: [t('home.why_choose_us.features.traffic_laws'), t('home.why_choose_us.features.defensive_driving'), t('home.why_choose_us.features.emergency_procedures')]
    },
    {
      icon: <FileCheck className="w-12 h-12 text-green-500" />,
      title: t('home.why_choose_us.license_support'),
      description: t('home.why_choose_us.license_support_desc'),
      features: [t('home.why_choose_us.features.document_preparation'), t('home.why_choose_us.features.test_scheduling'), t('home.why_choose_us.features.renewal_services')]
    },
    {
      icon: <Headphones className="w-12 h-12 text-indigo-600" />,
      title: t('home.why_choose_us.support_24_7'),
      description: t('home.why_choose_us.support_24_7_desc'),
      features: [t('home.why_choose_us.features.twenty_four_seven'), t('home.why_choose_us.features.multiple_channels'), t('home.why_choose_us.features.emergency_support')]
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
            {t('home.why_choose_us.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('home.why_choose_us.subtitle')}
          </p>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-hirtoli-green to-green-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
            <Award className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-semibold text-lg">{t('home.why_choose_us.rated_badge')}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
              <p className="relative z-10 text-gray-600 mb-8 leading-relaxed text-sm">{item.description}</p>
              
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
              {t('home.why_choose_us.ready_title')}
            </h3>
            <p className="relative z-10 text-gray-600 mb-8 text-lg leading-relaxed">
              {t('home.why_choose_us.ready_subtitle')}
            </p>
            <div className="relative z-10 flex flex-wrap gap-6 justify-center">
              <button 
                className="bg-gradient-to-r from-hirtoli-red to-red-600 text-white px-10 py-4 rounded-full hover:from-red-600 hover:to-hirtoli-red transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 group"
                onClick={() => navigate('/consultation')}
              >
                {t('home.why_choose_us.book_consultation')}
              </button>
              <button className="border-2 border-hirtoli-green text-hirtoli-green px-10 py-4 rounded-full hover:bg-hirtoli-green hover:text-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                {t('home.why_choose_us.download_brochure')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import InstructorCard from '../InstructorCard';

const InstructorsSection: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const instructors = [
    {
      name: t('instructors.ato_alemayehu.name'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      experience: t('instructors.ato_alemayehu.experience'),
      specializations: [t('instructors.specializations.beginner'), t('instructors.specializations.defensive'), t('instructors.specializations.test_prep')],
      languages: [t('instructors.languages.amharic'), t('instructors.languages.english'), t('instructors.languages.oromo')],
      description: t('instructors.ato_alemayehu.description')
    },
    {
      name: t('instructors.wt_meron.name'),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      experience: t('instructors.wt_meron.experience'),
      specializations: [t('instructors.specializations.advanced'), t('instructors.specializations.women'), t('instructors.specializations.parking')],
      languages: [t('instructors.languages.amharic'), t('instructors.languages.english')],
      description: t('instructors.wt_meron.description')
    },
    {
      name: t('instructors.ato_bekele.name'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      experience: t('instructors.ato_bekele.experience'),
      specializations: [t('instructors.specializations.commercial'), t('instructors.specializations.highway'), t('instructors.specializations.fleet')],
      languages: [t('instructors.languages.amharic'), t('instructors.languages.english'), t('instructors.languages.tigrinya')],
      description: t('instructors.ato_bekele.description')
    },
    {
      name: t('instructors.wt_hanan.name'),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      experience: t('instructors.wt_hanan.experience'),
      specializations: [t('instructors.specializations.youth'), t('instructors.specializations.anxiety'), t('instructors.specializations.safety')],
      languages: [t('instructors.languages.amharic'), t('instructors.languages.arabic'), t('instructors.languages.english')],
      description: t('instructors.wt_hanan.description')
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t('home.instructors.title')}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('home.instructors.subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <InstructorCard {...instructor} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button onClick={() => navigate('/about')} variant="outline" size="lg">
            {t('home.instructors.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;

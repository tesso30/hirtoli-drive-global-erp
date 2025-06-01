
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import CourseDetailCard from '../CourseDetailCard';

const CoursesSection: React.FC = () => {
  const navigate = useNavigate();
  const { t, tArray } = useLanguage();

  const detailedCourses = [
    {
      title: t('courses.detailed.beginner.title'),
      description: t('courses.detailed.beginner.desc'),
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3",
      duration: t('courses.detailed.beginner.duration'),
      classSize: t('courses.detailed.beginner.class_size'),
      price: t('courses.detailed.beginner.price'),
      level: t('courses.detailed.beginner.level'),
      features: tArray('courses.features.beginner')
    },
    {
      title: t('courses.detailed.advanced.title'),
      description: t('courses.detailed.advanced.desc'),
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3",
      duration: t('courses.detailed.advanced.duration'),
      classSize: t('courses.detailed.advanced.class_size'),
      price: t('courses.detailed.advanced.price'),
      level: t('courses.detailed.advanced.level'),
      features: tArray('courses.features.advanced')
    },
    {
      title: t('courses.detailed.commercial.title'),
      description: t('courses.detailed.commercial.desc'),
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3",
      duration: t('courses.detailed.commercial.duration'),
      classSize: t('courses.detailed.commercial.class_size'),
      price: t('courses.detailed.commercial.price'),
      level: t('courses.detailed.commercial.level'),
      features: tArray('courses.features.commercial')
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t('courses.title')}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('courses.subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedCourses.map((course, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CourseDetailCard 
                {...course}
                onEnroll={() => navigate('/register')}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button onClick={() => navigate('/services')} size="lg" className="bg-hirtoli-red hover:bg-opacity-90">
            {t('view_all')} {t('courses.title')} & {t('price')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

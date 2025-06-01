
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
      name: "Ato Alemayehu Tadesse",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      experience: "15 Years Experience",
      specializations: ["Beginner Training", "Defensive Driving", "Test Preparation"],
      languages: ["Amharic", "English", "Oromo"],
      description: "Expert instructor specializing in building confidence in new drivers with a patient and encouraging approach."
    },
    {
      name: "W/t Meron Bekele",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      experience: "12 Years Experience",
      specializations: ["Advanced Skills", "Women's Training", "Parallel Parking"],
      languages: ["Amharic", "English"],
      description: "Dedicated to empowering women drivers and specializes in advanced driving techniques and city driving skills."
    },
    {
      name: "Ato Bekele Worku",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      experience: "18 Years Experience",
      specializations: ["Commercial Vehicles", "Highway Driving", "Fleet Training"],
      languages: ["Amharic", "English", "Tigrinya"],
      description: "Commercial vehicle specialist with extensive experience in training professional drivers and fleet operations."
    },
    {
      name: "W/t Hanan Mohammed",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      experience: "10 Years Experience",
      specializations: ["Youth Training", "Anxiety Management", "Safe Driving"],
      languages: ["Amharic", "Arabic", "English"],
      description: "Specializes in working with anxious drivers and young students, creating a comfortable learning environment."
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

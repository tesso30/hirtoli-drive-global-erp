
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useBranch } from '../contexts/BranchContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Index = () => {
  const { t } = useLanguage();
  const { branch } = useBranch();
  const navigate = useNavigate();

  const features = [
    {
      icon: '🎓',
      title: t('home.features.quality.title'),
      description: t('home.features.quality.desc'),
    },
    {
      icon: '🕒',
      title: t('home.features.flexible.title'),
      description: t('home.features.flexible.desc'),
    },
    {
      icon: '🚗',
      title: t('home.features.vehicles.title'),
      description: t('home.features.vehicles.desc'),
    },
  ];

  const courses = [
    {
      title: t('home.courses.beginner.title'),
      description: t('home.courses.beginner.desc'),
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3',
    },
    {
      title: t('home.courses.advanced.title'),
      description: t('home.courses.advanced.desc'),
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3',
    },
    {
      title: t('home.courses.commercial.title'),
      description: t('home.courses.commercial.desc'),
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hirtoli-red to-hirtoli-black text-white py-24">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('home.hero.subtitle')}
          </p>
          <Button 
            size="lg" 
            className="bg-hirtoli-green hover:bg-opacity-90 animate-fade-in" 
            style={{ animationDelay: '0.4s' }}
            onClick={() => navigate('/register')}
          >
            {t('home.hero.cta')}
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.features.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.courses.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" onClick={() => navigate('/services')}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Information */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            {t('branch.title')} - {branch === 'addis-ababa' ? t('branch.addisAbaba') : branch === 'adama' ? t('branch.adama') : t('branch.bahirDar')}
          </h2>
          {branch === 'addis-ababa' && (
            <div className="max-w-2xl mx-auto">
              <p className="mb-4">Our main branch in Addis Ababa offers all services with the latest facilities.</p>
              <p className="mb-4">Address: Bole Road, Next to Millennium Hall</p>
              <p>Contact: +251 911 123 456</p>
            </div>
          )}
          {branch === 'adama' && (
            <div className="max-w-2xl mx-auto">
              <p className="mb-4">Our Adama branch serves the Oromia region with comprehensive driving courses.</p>
              <p className="mb-4">Address: Main Street, Near Adama University</p>
              <p>Contact: +251 922 123 456</p>
            </div>
          )}
          {branch === 'bahir-dar' && (
            <div className="max-w-2xl mx-auto">
              <p className="mb-4">The Bahir Dar branch provides specialized training for tourism and transport sectors.</p>
              <p className="mb-4">Address: Lake Tana Road, Near Kuriftu Resort</p>
              <p>Contact: +251 933 123 456</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;

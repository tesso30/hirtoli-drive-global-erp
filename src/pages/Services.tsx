
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useBranch } from '../contexts/BranchContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

const Services = () => {
  const { t } = useLanguage();
  const { branch } = useBranch();
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Beginner Driver Course",
      description: "Comprehensive training for those with no prior driving experience. Learn from basics to becoming a confident driver.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3",
      duration: "4 weeks",
      lessons: "15 theory, 10 practical",
      price: 7500,
    },
    {
      id: 2,
      title: "Advanced Driving Skills",
      description: "Enhance your existing skills with advanced techniques, defensive driving, and complex traffic management.",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3",
      duration: "2 weeks",
      lessons: "5 theory, 8 practical",
      price: 5000,
    },
    {
      id: 3,
      title: "Commercial Driver License",
      description: "Specialized training for commercial vehicle operation, including buses, trucks, and delivery vehicles.",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3",
      duration: "6 weeks",
      lessons: "20 theory, 15 practical",
      price: 12000,
    },
    {
      id: 4,
      title: "Refresher Course",
      description: "Quick training to refresh your driving skills after a long break or to overcome anxiety.",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3",
      duration: "1 week",
      lessons: "2 theory, 5 practical",
      price: 3000,
    },
    {
      id: 5,
      title: "Defensive Driving Course",
      description: "Learn strategies to reduce risks and avoid accidents caused by adverse conditions or other drivers' mistakes.",
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3",
      duration: "1 week",
      lessons: "3 theory, 3 practical",
      price: 3500,
    },
    {
      id: 6,
      title: "Driver's License Test Preparation",
      description: "Targeted preparation for the official driver's license test, including mock tests and examinations.",
      image: "https://images.unsplash.com/photo-1486818091315-92c2300be53d?ixlib=rb-4.0.3",
      duration: "2 weeks",
      lessons: "5 theory, 5 practical",
      price: 4000,
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">{t('nav.services')}</h1>
            <p className="text-lg text-gray-600">
              Explore our comprehensive driving courses and specialized training programs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>
                    {service.duration} | {service.lessons}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{service.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-lg font-semibold">{service.price.toLocaleString()} ETB</div>
                  <Button onClick={() => navigate('/register')}>Enroll Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Branch-specific services */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Services at {branch === 'addis-ababa' ? 'Addis Ababa' : branch === 'adama' ? 'Adama' : 'Bahir Dar'} Branch
          </h2>
          
          {branch === 'addis-ababa' && (
            <div className="max-w-3xl mx-auto">
              <p className="mb-6">
                Our Addis Ababa branch offers all services with additional premium options:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>VIP one-on-one training with senior instructors</li>
                <li>Evening and weekend classes for working professionals</li>
                <li>Special courses for diplomatic staff and expats (in English)</li>
                <li>Corporate training programs for companies</li>
              </ul>
            </div>
          )}
          
          {branch === 'adama' && (
            <div className="max-w-3xl mx-auto">
              <p className="mb-6">
                Our Adama branch specializes in:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Commercial truck and bus driver training</li>
                <li>Agricultural vehicle operation</li>
                <li>Intensive weekend courses for students</li>
                <li>Special focus on Afan Oromo language instruction</li>
              </ul>
            </div>
          )}
          
          {branch === 'bahir-dar' && (
            <div className="max-w-3xl mx-auto">
              <p className="mb-6">
                Our Bahir Dar branch offers:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Tourism vehicle operation training</li>
                <li>Boat safety and operation courses</li>
                <li>Scenic route training around Lake Tana</li>
                <li>Special focus on Amharic language instruction</li>
              </ul>
            </div>
          )}
          
          <div className="text-center mt-8">
            <Button onClick={() => navigate('/contact')}>Contact Us For Details</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

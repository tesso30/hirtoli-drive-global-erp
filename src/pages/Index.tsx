
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useBranch } from '../contexts/BranchContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Star, Clock, Shield, Award, UserCheck, Calendar } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();
  const { branch } = useBranch();
  const navigate = useNavigate();

  const features = [
    {
      icon: <Award className="w-10 h-10 text-hirtoli-red" />,
      title: t('home.features.quality.title'),
      description: t('home.features.quality.desc'),
    },
    {
      icon: <Clock className="w-10 h-10 text-hirtoli-green" />,
      title: t('home.features.flexible.title'),
      description: t('home.features.flexible.desc'),
    },
    {
      icon: <Shield className="w-10 h-10 text-hirtoli-black" />,
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

  const testimonials = [
    {
      name: "Abebe Kebede",
      role: "Student Driver",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      quote: "Hirtoli Driving School transformed me from a nervous beginner to a confident driver in just 4 weeks. The instructors were patient and professional.",
      rating: 5,
    },
    {
      name: "Tigist Hailu",
      role: "Commercial License Holder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      quote: "The commercial license training at Hirtoli was comprehensive and practical. I now drive professionally with skills that keep me and others safe.",
      rating: 5,
    },
    {
      name: "Dawit Mekonen",
      role: "Private Driver",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      quote: "After a long break from driving, the refresher course was exactly what I needed. The instructors helped me overcome my anxiety and build my confidence.",
      rating: 4,
    },
  ];

  const stats = [
    {
      value: "15,000+",
      label: "Students Trained",
      icon: <UserCheck className="w-8 h-8 text-hirtoli-green" />,
    },
    {
      value: "13+",
      label: "Years Experience",
      icon: <Calendar className="w-8 h-8 text-hirtoli-red" />,
    },
    {
      value: "98%",
      label: "Pass Rate",
      icon: <Award className="w-8 h-8 text-hirtoli-black" />,
    }
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
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-hirtoli-green hover:bg-opacity-90"
              onClick={() => navigate('/register')}
            >
              {t('home.hero.cta')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-hirtoli-black"
              onClick={() => navigate('/services')}
            >
              Browse Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg border border-gray-100 shadow-sm animate-fade-in flex flex-col items-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
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
                className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-in flex flex-col items-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">{feature.icon}</div>
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
          <div className="text-center mt-10">
            <Button onClick={() => navigate('/services')} size="lg" className="bg-hirtoli-red hover:bg-opacity-90">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Student Testimonials</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Hear from our graduates about their experiences learning to drive with Hirtoli Driving School
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover" 
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-4 flex">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-hirtoli-red text-hirtoli-red" />
                    ))}
                    {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gray-300" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            {t('branch.title')} - {branch === 'addis-ababa' ? t('branch.addisAbaba') : branch === 'adama' ? t('branch.adama') : t('branch.bahirDar')}
          </h2>
          
          {branch === 'addis-ababa' && (
            <div className="max-w-2xl mx-auto">
              <p className="mb-4">Our main branch in Addis Ababa offers all services with the latest facilities and an experienced team of instructors.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p>Bole Road, Next to Millennium Hall</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <p>Phone: +251 911 123 456</p>
                  <p>Email: addis@hirtoli.com</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Operating Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>Monday - Friday</div><div>8:00 AM - 6:00 PM</div>
                  <div>Saturday</div><div>9:00 AM - 4:00 PM</div>
                  <div>Sunday</div><div>Closed</div>
                </div>
              </div>
              <Button onClick={() => navigate('/contact')} className="bg-hirtoli-green">Contact This Branch</Button>
            </div>
          )}
          
          {branch === 'adama' && (
            <div className="max-w-2xl mx-auto">
              <p className="mb-4">Our Adama branch serves the Oromia region with comprehensive driving courses and specialized commercial vehicle training.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p>Main Street, Near Adama University</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <p>Phone: +251 922 123 456</p>
                  <p>Email: adama@hirtoli.com</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Operating Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>Monday - Friday</div><div>8:30 AM - 5:30 PM</div>
                  <div>Saturday</div><div>9:00 AM - 3:00 PM</div>
                  <div>Sunday</div><div>Closed</div>
                </div>
              </div>
              <Button onClick={() => navigate('/contact')} className="bg-hirtoli-green">Contact This Branch</Button>
            </div>
          )}
          
          {branch === 'bahir-dar' && (
            <div className="max-w-2xl mx-auto">
              <p className="mb-4">The Bahir Dar branch provides specialized training for tourism and transport sectors, taking advantage of the beautiful Lake Tana surroundings.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p>Lake Tana Road, Near Kuriftu Resort</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <p>Phone: +251 933 123 456</p>
                  <p>Email: bahirdar@hirtoli.com</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Operating Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>Monday - Friday</div><div>8:00 AM - 5:00 PM</div>
                  <div>Saturday</div><div>9:00 AM - 2:00 PM</div>
                  <div>Sunday</div><div>Closed</div>
                </div>
              </div>
              <Button onClick={() => navigate('/contact')} className="bg-hirtoli-green">Contact This Branch</Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-hirtoli-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Driving Journey?</h2>
          <p className="mb-8 max-w-xl mx-auto">Join thousands of successful graduates who have learned to drive with confidence at Hirtoli Driving School</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-hirtoli-red hover:bg-opacity-90"
              onClick={() => navigate('/register')}
            >
              Register Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-hirtoli-black"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

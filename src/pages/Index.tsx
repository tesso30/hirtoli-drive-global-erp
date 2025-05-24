import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useBranch } from '../contexts/BranchContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Star, Clock, Shield, Award, UserCheck, Calendar, GraduationCap, Car, MapPin, Phone, Mail, Users, Trophy, Target, Heart } from 'lucide-react';
import InstructorCard from '../components/InstructorCard';
import CourseDetailCard from '../components/CourseDetailCard';

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
    {
      icon: <GraduationCap className="w-10 h-10 text-hirtoli-red" />,
      title: "Expert Instructors",
      description: "Learn from certified professionals with years of teaching experience and perfect safety records.",
    },
    {
      icon: <Car className="w-10 h-10 text-hirtoli-green" />,
      title: "Latest Technology",
      description: "Practice with modern vehicles equipped with the latest safety features and dual controls.",
    },
    {
      icon: <Trophy className="w-10 h-10 text-hirtoli-black" />,
      title: "High Success Rate",
      description: "98% of our students pass their driving test on the first attempt with our proven methods.",
    },
  ];

  const detailedCourses = [
    {
      title: "Complete Beginner Course",
      description: "Perfect for absolute beginners with no driving experience",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3",
      duration: "6-8 Weeks",
      classSize: "Max 4 Students",
      price: "3,500 ETB",
      level: "Beginner",
      features: [
        "Basic vehicle controls and safety",
        "Traffic rules and road signs",
        "Parking and maneuvering",
        "Highway driving skills",
        "Test preparation",
        "License application support"
      ]
    },
    {
      title: "Advanced Defensive Driving",
      description: "Enhance your skills with advanced techniques and safety measures",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3",
      duration: "4 Weeks",
      classSize: "Max 6 Students",
      price: "2,800 ETB",
      level: "Advanced",
      features: [
        "Advanced maneuvering techniques",
        "Night and weather driving",
        "Emergency response training",
        "Fuel-efficient driving",
        "Vehicle maintenance basics",
        "Confidence building exercises"
      ]
    },
    {
      title: "Commercial License Training",
      description: "Professional training for commercial vehicle operation",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3",
      duration: "8-12 Weeks",
      classSize: "Max 8 Students",
      price: "5,200 ETB",
      level: "Professional",
      features: [
        "Heavy vehicle operation",
        "Commercial traffic regulations",
        "Load management and safety",
        "Professional driver etiquette",
        "Business driving practices",
        "Commercial license exam prep"
      ]
    },
  ];

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

  const testimonials = [
    {
      name: "Abebe Kebede",
      role: "Student Driver",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      quote: "Hirtoli Driving School transformed me from a nervous beginner to a confident driver in just 4 weeks. The instructors were patient and professional.",
      rating: 5,
      course: "Complete Beginner Course",
      location: "Addis Ababa Branch"
    },
    {
      name: "Tigist Hailu",
      role: "Commercial License Holder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      quote: "The commercial license training at Hirtoli was comprehensive and practical. I now drive professionally with skills that keep me and others safe.",
      rating: 5,
      course: "Commercial License Training",
      location: "Adama Branch"
    },
    {
      name: "Dawit Mekonen",
      role: "Private Driver",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      quote: "After a long break from driving, the refresher course was exactly what I needed. The instructors helped me overcome my anxiety and build my confidence.",
      rating: 4,
      course: "Advanced Defensive Driving",
      location: "Bahir Dar Branch"
    },
    {
      name: "Hiwot Alemseged",
      role: "New Graduate",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      quote: "I was terrified of driving, but W/t Meron made me feel so comfortable. Now I drive to work every day with complete confidence!",
      rating: 5,
      course: "Complete Beginner Course",
      location: "Addis Ababa Branch"
    },
    {
      name: "Solomon Tesfaye",
      role: "Taxi Driver",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
      quote: "The commercial training prepared me for real-world driving challenges. I got my license and started earning immediately after graduation.",
      rating: 5,
      course: "Commercial License Training",
      location: "Adama Branch"
    },
    {
      name: "Rahel Girma",
      role: "Office Worker",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3",
      quote: "Flexible scheduling allowed me to learn while working full-time. The online theory classes were very convenient and well-structured.",
      rating: 4,
      course: "Complete Beginner Course",
      location: "Bahir Dar Branch"
    },
  ];

  const stats = [
    {
      value: "15,000+",
      label: "Students Trained",
      icon: <UserCheck className="w-8 h-8 text-hirtoli-green" />,
      description: "Successful graduates since 2010"
    },
    {
      value: "13+",
      label: "Years Experience",
      icon: <Calendar className="w-8 h-8 text-hirtoli-red" />,
      description: "Serving Ethiopia with excellence"
    },
    {
      value: "98%",
      label: "Pass Rate",
      icon: <Award className="w-8 h-8 text-hirtoli-black" />,
      description: "First-time test success rate"
    },
    {
      value: "50+",
      label: "Expert Instructors",
      icon: <Users className="w-8 h-8 text-hirtoli-green" />,
      description: "Certified and experienced"
    },
    {
      value: "3",
      label: "Branch Locations",
      icon: <MapPin className="w-8 h-8 text-hirtoli-red" />,
      description: "Across major Ethiopian cities"
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <Phone className="w-8 h-8 text-hirtoli-black" />,
      description: "Student assistance anytime"
    },
  ];

  const whyChooseUs = [
    {
      icon: <Target className="w-12 h-12 text-hirtoli-red" />,
      title: "Proven Track Record",
      description: "Over 98% of our students pass their driving test on the first attempt, thanks to our comprehensive training methodology and experienced instructors."
    },
    {
      icon: <Heart className="w-12 h-12 text-hirtoli-green" />,
      title: "Student-Centered Approach",
      description: "We prioritize each student's individual learning pace and style, ensuring a comfortable and effective learning environment for everyone."
    },
    {
      icon: <Shield className="w-12 h-12 text-hirtoli-black" />,
      title: "Safety First",
      description: "All our vehicles are equipped with dual controls and latest safety features. Our instructors are trained in emergency procedures and defensive driving."
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

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg border border-gray-100 shadow-sm animate-fade-in flex flex-col items-center text-center hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-800 font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Hirtoli?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We're committed to providing the highest quality driving education with a focus on safety, confidence, and success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-in flex flex-col items-center hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.features.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-lg shadow-md text-center animate-fade-in flex flex-col items-center hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Comprehensive Courses</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our range of professionally designed courses tailored to different skill levels and needs.
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
              View All Courses & Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Meet Our Expert Instructors</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our certified instructors bring years of experience and a passion for safe driving education.
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
              Meet All Our Instructors
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">What Our Students Say</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Real stories from our graduates who have successfully learned to drive with confidence at Hirtoli Driving School
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-hirtoli-green" 
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4 flex">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-hirtoli-red text-hirtoli-red" />
                    ))}
                    {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gray-300" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div className="flex items-center gap-1">
                      <GraduationCap className="w-3 h-3" />
                      <span>{testimonial.course}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
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


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import CourseDetailCard from '../CourseDetailCard';

const CoursesSection: React.FC = () => {
  const navigate = useNavigate();

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

  return (
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
  );
};

export default CoursesSection;

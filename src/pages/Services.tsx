
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useBranch } from '../contexts/BranchContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Car, Clock, Book, Award, Shield, GraduationCap, Users, Check } from 'lucide-react';

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
      features: [
        "Comprehensive vehicle operations",
        "Traffic rules and regulations",
        "Basic maintenance awareness",
        "Parking and maneuvering techniques",
        "Urban driving skills"
      ]
    },
    {
      id: 2,
      title: "Advanced Driving Skills",
      description: "Enhance your existing skills with advanced techniques, defensive driving, and complex traffic management.",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3",
      duration: "2 weeks",
      lessons: "5 theory, 8 practical",
      price: 5000,
      features: [
        "Defensive driving strategies",
        "Highway and high-speed driving",
        "Advanced maneuvering techniques",
        "Night and poor weather driving",
        "Emergency situation handling"
      ]
    },
    {
      id: 3,
      title: "Commercial Driver License",
      description: "Specialized training for commercial vehicle operation, including buses, trucks, and delivery vehicles.",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3",
      duration: "6 weeks",
      lessons: "20 theory, 15 practical",
      price: 12000,
      features: [
        "Heavy vehicle operation",
        "Loading and cargo management",
        "Long-distance driving techniques",
        "Transportation regulations",
        "Route planning and navigation"
      ]
    },
    {
      id: 4,
      title: "Refresher Course",
      description: "Quick training to refresh your driving skills after a long break or to overcome anxiety.",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3",
      duration: "1 week",
      lessons: "2 theory, 5 practical",
      price: 3000,
      features: [
        "Confidence building exercises",
        "Rules of the road update",
        "Modern vehicle technology familiarization",
        "Personalized feedback and coaching",
        "Stress management while driving"
      ]
    },
    {
      id: 5,
      title: "Defensive Driving Course",
      description: "Learn strategies to reduce risks and avoid accidents caused by adverse conditions or other drivers' mistakes.",
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3",
      duration: "1 week",
      lessons: "3 theory, 3 practical",
      price: 3500,
      features: [
        "Hazard awareness and prediction",
        "Space management techniques",
        "Reaction time improvement",
        "Vehicle control in emergencies",
        "Crash prevention strategies"
      ]
    },
    {
      id: 6,
      title: "Driver's License Test Preparation",
      description: "Targeted preparation for the official driver's license test, including mock tests and examinations.",
      image: "https://images.unsplash.com/photo-1486818091315-92c2300be53d?ixlib=rb-4.0.3",
      duration: "2 weeks",
      lessons: "5 theory, 5 practical",
      price: 4000,
      features: [
        "Test format familiarization",
        "Practice with actual test routes",
        "Mock theoretical exams",
        "Common mistakes avoidance",
        "Test day preparation"
      ]
    },
    {
      id: 7,
      title: "Professional Driver Training",
      description: "Comprehensive course for those looking to become professional drivers for companies and organizations.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3",
      duration: "8 weeks",
      lessons: "25 theory, 20 practical",
      price: 15000,
      features: [
        "Customer service skills",
        "Professional conduct training",
        "Advanced vehicle handling",
        "Fleet maintenance basics",
        "GPS and route optimization"
      ]
    },
    {
      id: 8,
      title: "International Driving Permit Course",
      description: "Prepare for driving abroad with international standards and practices training.",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3",
      duration: "3 weeks",
      lessons: "10 theory, 8 practical",
      price: 9000,
      features: [
        "International traffic regulations",
        "Cross-border driving requirements",
        "Foreign road sign recognition",
        "Cultural driving differences",
        "International permit application"
      ]
    }
  ];

  const courseFeatures = [
    {
      icon: <Book className="w-10 h-10 text-hirtoli-red" />,
      title: "Comprehensive Materials",
      description: "All students receive detailed course materials, handbooks, and digital resources."
    },
    {
      icon: <Car className="w-10 h-10 text-hirtoli-green" />,
      title: "Modern Vehicle Fleet",
      description: "Train on well-maintained vehicles with dual controls for safety."
    },
    {
      icon: <Users className="w-10 h-10 text-hirtoli-black" />,
      title: "Expert Instructors",
      description: "Learn from certified instructors with years of professional experience."
    },
    {
      icon: <Clock className="w-10 h-10 text-hirtoli-red" />,
      title: "Flexible Scheduling",
      description: "Courses available on weekdays, weekends, and evenings to fit your schedule."
    },
    {
      icon: <Award className="w-10 h-10 text-hirtoli-green" />,
      title: "Certification",
      description: "Receive official certification upon successful completion of any course."
    },
    {
      icon: <Shield className="w-10 h-10 text-hirtoli-black" />,
      title: "Insurance Discounts",
      description: "Graduates may qualify for discounts with many insurance providers."
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

      {/* Course Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What All Our Courses Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden flex flex-col h-full">
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
                  <p className="mb-4">{service.description}</p>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Course includes:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-4 h-4 text-hirtoli-green mr-2 mt-1" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <div className="text-lg font-semibold">{service.price.toLocaleString()} ETB</div>
                  <Button onClick={() => navigate('/register')}>Enroll Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Selection Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">How to Choose the Right Course</h2>
            <p className="text-center mb-10">
              Not sure which course is right for you? Use our guide below to help you decide, or contact us for personalized advice.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">For New Drivers</h3>
                <p className="mb-3">
                  If you've never driven before or have very limited experience, we recommend our 
                  <span className="font-semibold text-hirtoli-red"> Beginner Driver Course</span>. This comprehensive 
                  program covers all the basics and builds your confidence from scratch.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">For Experienced Drivers</h3>
                <p className="mb-3">
                  If you already have basic driving skills but want to enhance your abilities, consider our
                  <span className="font-semibold text-hirtoli-red"> Advanced Driving Skills</span> or
                  <span className="font-semibold text-hirtoli-red"> Defensive Driving Course</span>.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">For Career Drivers</h3>
                <p className="mb-3">
                  Looking to drive professionally? Our 
                  <span className="font-semibold text-hirtoli-red"> Commercial Driver License</span> or
                  <span className="font-semibold text-hirtoli-red"> Professional Driver Training</span> courses will
                  prepare you for a career on the road.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Special Situations</h3>
                <p className="mb-3">
                  Haven't driven in a while? Try our <span className="font-semibold text-hirtoli-red">Refresher Course</span>.
                  Preparing for your test? The <span className="font-semibold text-hirtoli-red">Driver's License Test Preparation</span>
                  course is designed specifically for success on the official exam.
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Button size="lg" onClick={() => navigate('/contact')}>
                Get Personalized Course Recommendations
              </Button>
            </div>
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
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">Premium Services Available Only at Addis Ababa</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-hirtoli-red bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <GraduationCap className="w-5 h-5 text-hirtoli-red" />
                    </div>
                    <div>
                      <h4 className="font-medium">VIP One-on-One Training</h4>
                      <p className="text-gray-600">Private sessions with our most senior instructors, customized to your specific learning needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-green bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Clock className="w-5 h-5 text-hirtoli-green" />
                    </div>
                    <div>
                      <h4 className="font-medium">Evening and Weekend Classes</h4>
                      <p className="text-gray-600">Flexible scheduling options for working professionals with busy weekday schedules.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-black bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Users className="w-5 h-5 text-hirtoli-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Expat and Diplomatic Services</h4>
                      <p className="text-gray-600">Special courses for diplomatic staff and expatriates with instruction in English and international driving convention training.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-red bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Shield className="w-5 h-5 text-hirtoli-red" />
                    </div>
                    <div>
                      <h4 className="font-medium">Corporate Training Programs</h4>
                      <p className="text-gray-600">Customized fleet driver training for companies, government agencies, and organizations.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">Advanced Facilities</h3>
                <p className="mb-4">Our Addis Ababa branch features:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>State-of-the-art driving simulators for controlled practice scenarios</li>
                  <li>Modern multimedia classrooms with interactive learning tools</li>
                  <li>Comprehensive vehicle types for diverse training experiences</li>
                  <li>Student lounge and refreshment area for breaks between lessons</li>
                </ul>
              </div>
            </div>
          )}
          
          {branch === 'adama' && (
            <div className="max-w-3xl mx-auto">
              <p className="mb-6">
                Our Adama branch specializes in:
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">Specialized Services in Adama</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-hirtoli-red bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Car className="w-5 h-5 text-hirtoli-red" />
                    </div>
                    <div>
                      <h4 className="font-medium">Commercial Truck and Bus Training</h4>
                      <p className="text-gray-600">Specialized training for heavy commercial vehicles with dedicated practice areas.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-green bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Car className="w-5 h-5 text-hirtoli-green" />
                    </div>
                    <div>
                      <h4 className="font-medium">Agricultural Vehicle Operation</h4>
                      <p className="text-gray-600">Training for tractors, harvesters, and other agricultural equipment for farm workers.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-black bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Clock className="w-5 h-5 text-hirtoli-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Intensive Weekend Courses</h4>
                      <p className="text-gray-600">Accelerated weekend-only programs designed for students and busy professionals.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-red bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Users className="w-5 h-5 text-hirtoli-red" />
                    </div>
                    <div>
                      <h4 className="font-medium">Afan Oromo Language Instruction</h4>
                      <p className="text-gray-600">All courses available with specialized terminology and instruction in Afan Oromo.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">Rural Driving Training</h3>
                <p className="mb-4">Our Adama branch offers specialized rural and off-road driving training:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Unpaved road handling techniques</li>
                  <li>Weather condition management specific to rural areas</li>
                  <li>Farm-to-market route navigation</li>
                  <li>Vehicle maintenance for rural conditions</li>
                </ul>
              </div>
            </div>
          )}
          
          {branch === 'bahir-dar' && (
            <div className="max-w-3xl mx-auto">
              <p className="mb-6">
                Our Bahir Dar branch offers:
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">Specialized Services in Bahir Dar</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-hirtoli-red bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Car className="w-5 h-5 text-hirtoli-red" />
                    </div>
                    <div>
                      <h4 className="font-medium">Tourism Vehicle Operation</h4>
                      <p className="text-gray-600">Specialized training for tour guides and tourism vehicle operators focusing on passenger comfort and safety.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-green bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Shield className="w-5 h-5 text-hirtoli-green" />
                    </div>
                    <div>
                      <h4 className="font-medium">Boat Safety and Operation</h4>
                      <p className="text-gray-600">Introduction to boat handling and water safety for Lake Tana tour operators.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-black bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Car className="w-5 h-5 text-hirtoli-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Scenic Route Training</h4>
                      <p className="text-gray-600">Training on the unique driving challenges of scenic routes around Lake Tana and Blue Nile Falls.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-red bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Users className="w-5 h-5 text-hirtoli-red" />
                    </div>
                    <div>
                      <h4 className="font-medium">Amharic Language Instruction</h4>
                      <p className="text-gray-600">All courses available with specialized terminology and instruction in Amharic.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">Tourism Transportation Focus</h3>
                <p className="mb-4">Our Bahir Dar branch specializes in tourism transportation:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Customer service training for tourism drivers</li>
                  <li>Historical site route knowledge and navigation</li>
                  <li>Safe driving during peak tourist seasons</li>
                  <li>Emergency response training for remote locations</li>
                </ul>
              </div>
            </div>
          )}
          
          <div className="text-center mt-8">
            <Button onClick={() => navigate('/contact')}>Contact Us For Details</Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-hirtoli-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Become a Skilled Driver?</h2>
          <p className="mb-8 max-w-xl mx-auto">
            Join Hirtoli Driving School today and learn from the best instructors in Ethiopia.
            Our comprehensive courses will help you become a confident and safe driver.
          </p>
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

export default Services;

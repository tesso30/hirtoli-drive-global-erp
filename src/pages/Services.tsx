
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useBranch } from '../contexts/BranchContext';
import { Button } from '../components/ui/button';
import { GraduationCap, Clock, Users, Car, Shield } from 'lucide-react';
import ServiceHero from '../components/services/ServiceHero';
import PricingTable from '../components/services/PricingTable';
import CourseComparison from '../components/services/CourseComparison';
import EnrollmentProcess from '../components/services/EnrollmentProcess';
import ScheduleDisplay from '../components/services/ScheduleDisplay';

const Services = () => {
  const { t } = useLanguage();
  const { branch } = useBranch();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <ServiceHero />
      <PricingTable />
      <CourseComparison />
      <EnrollmentProcess />
      <ScheduleDisplay />

      {/* Branch-specific services */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Services at {branch === 'chiro' ? 'Chiro' : 'Harar'} Branch
          </h2>
          
          {branch === 'chiro' && (
            <div className="max-w-3xl mx-auto">
              <p className="mb-6">
                Our Chiro branch offers comprehensive driving courses with additional premium options:
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">Premium Services Available at Chiro</h3>
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
                      <h4 className="font-medium">Commercial Vehicle Training</h4>
                      <p className="text-gray-600">Specialized training for commercial vehicles and professional drivers.</p>
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
                <p className="mb-4">Our Chiro branch features:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>State-of-the-art driving simulators for controlled practice scenarios</li>
                  <li>Modern multimedia classrooms with interactive learning tools</li>
                  <li>Comprehensive vehicle types for diverse training experiences</li>
                  <li>Student lounge and refreshment area for breaks between lessons</li>
                </ul>
              </div>
            </div>
          )}
          
          {branch === 'harar' && (
            <div className="max-w-3xl mx-auto">
              <p className="mb-6">
                Our Harar branch specializes in:
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">Specialized Services in Harar</h3>
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
                      <h4 className="font-medium">Cultural Heritage Tours</h4>
                      <p className="text-gray-600">Training for drivers serving the historic Harar region and cultural sites.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-black bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Car className="w-5 h-5 text-hirtoli-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Regional Route Training</h4>
                      <p className="text-gray-600">Training on the unique driving challenges of the Harar region and surrounding areas.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-red bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Users className="w-5 h-5 text-hirtoli-red" />
                    </div>
                    <div>
                      <h4 className="font-medium">Multi-Language Instruction</h4>
                      <p className="text-gray-600">Courses available in Amharic, Oromo, and Harari languages.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">Regional Specialization</h3>
                <p className="mb-4">Our Harar branch specializes in:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Historical city navigation and narrow street handling</li>
                  <li>Tourist service excellence training</li>
                  <li>Regional climate and terrain adaptation</li>
                  <li>Cross-cultural communication for drivers</li>
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

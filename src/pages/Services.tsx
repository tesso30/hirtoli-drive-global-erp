
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { GraduationCap, Clock, Users, Car, Shield } from 'lucide-react';
import ServiceHero from '../components/services/ServiceHero';
import PricingTable from '../components/services/PricingTable';
import CourseComparison from '../components/services/CourseComparison';
import EnrollmentProcess from '../components/services/EnrollmentProcess';
import ScheduleDisplay from '../components/services/ScheduleDisplay';

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <ServiceHero />
      <PricingTable />
      <CourseComparison />
      <EnrollmentProcess />
      <ScheduleDisplay />

      {/* Our Services */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('services.our_services_title')}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{t('services.comprehensive_courses')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-hirtoli-red bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <GraduationCap className="w-5 h-5 text-hirtoli-red" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('services.basic_driving')}</h4>
                      <p className="text-gray-600">{t('services.basic_driving_desc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-green bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Car className="w-5 h-5 text-hirtoli-green" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('services.commercial_license')}</h4>
                      <p className="text-gray-600">{t('services.commercial_license_desc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-black bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Shield className="w-5 h-5 text-hirtoli-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('services.defensive_driving')}</h4>
                      <p className="text-gray-600">{t('services.defensive_driving_desc')}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{t('services.specialized_training')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-hirtoli-red bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Clock className="w-5 h-5 text-hirtoli-red" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('services.flexible_schedule')}</h4>
                      <p className="text-gray-600">{t('services.flexible_schedule_desc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-green bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Users className="w-5 h-5 text-hirtoli-green" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('services.experienced_instructors')}</h4>
                      <p className="text-gray-600">{t('services.experienced_instructors_desc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-black bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Car className="w-5 h-5 text-hirtoli-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('services.modern_vehicles')}</h4>
                      <p className="text-gray-600">{t('services.modern_vehicles_desc')}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-4">{t('services.facilities_title')}</h3>
              <p className="mb-4">{t('services.facilities_intro')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('services.facility_classrooms')}</li>
                  <li>{t('services.facility_vehicles')}</li>
                  <li>{t('services.facility_practice_area')}</li>
                </ul>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('services.facility_simulator')}</li>
                  <li>{t('services.facility_testing_center')}</li>
                  <li>{t('services.facility_student_lounge')}</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button onClick={() => navigate('/contact')}>{t('services.contact_for_details')}</Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-hirtoli-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('services.cta_title')}</h2>
          <p className="mb-8 max-w-xl mx-auto">
            {t('services.cta_description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-hirtoli-red hover:bg-opacity-90"
              onClick={() => navigate('/consultation')}
            >
              {t('services.get_consultation')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-hirtoli-black"
              onClick={() => navigate('/contact')}
            >
              {t('services.cta_contact')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

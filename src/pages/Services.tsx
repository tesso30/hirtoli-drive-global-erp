
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
            {t(`services.${branch}_branch_services_title`)}
          </h2>
          
          {branch === 'chiro' && (
            <div className="max-w-3xl mx-auto">
              <p className="mb-6">
                {t('services.chiro_intro')}
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">{t('services.chiro_premium_title')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-hirtoli-red bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <GraduationCap className="w-5 h-5 text-hirtoli-red" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('services.chiro_vip_title')}</h4>
                      <p className="text-gray-600">{t('services.chiro_vip_desc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-green bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Clock className="w-5 h-5 text-hirtoli-green" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('services.chiro_evening_title')}</h4>
                      <p className="text-gray-600">{t('services.chiro_evening_desc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-black bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Users className="w-5 h-5 text-hirtoli-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('services.chiro_commercial_title')}</h4>
                      <p className="text-gray-600">{t('services.chiro_commercial_desc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-red bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Shield className="w-5 h-5 text-hirtoli-red" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('services.chiro_corporate_title')}</h4>
                      <p className="text-gray-600">{t('services.chiro_corporate_desc')}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">{t('services.chiro_facilities_title')}</h3>
                <p className="mb-4">{t('services.chiro_facilities_intro')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('services.chiro_facility_1')}</li>
                  <li>{t('services.chiro_facility_2')}</li>
                  <li>{t('services.chiro_facility_3')}</li>
                  <li>{t('services.chiro_facility_4')}</li>
                </ul>
              </div>
            </div>
          )}
          
          {branch === 'harar' && (
            <div className="max-w-3xl mx-auto">
              <p className="mb-6">
                {t('services.harar_intro')}
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">{t('services.harar_specialized_title')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-hirtoli-red bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Car className="w-5 h-5 text-hirtoli-red" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('services.harar_tourism_title')}</h4>
                      <p className="text-gray-600">{t('services.harar_tourism_desc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-green bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Shield className="w-5 h-5 text-hirtoli-green" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('services.harar_heritage_title')}</h4>
                      <p className="text-gray-600">{t('services.harar_heritage_desc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-black bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Car className="w-5 h-5 text-hirtoli-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('services.harar_regional_title')}</h4>
                      <p className="text-gray-600">{t('services.harar_regional_desc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-hirtoli-red bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                      <Users className="w-5 h-5 text-hirtoli-red" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('services.harar_multilang_title')}</h4>
                      <p className="text-gray-600">{t('services.harar_multilang_desc')}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">{t('services.harar_specialization_title')}</h3>
                <p className="mb-4">{t('services.harar_specialization_intro')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('services.harar_specialization_1')}</li>
                  <li>{t('services.harar_specialization_2')}</li>
                  <li>{t('services.harar_specialization_3')}</li>
                  <li>{t('services.harar_specialization_4')}</li>
                </ul>
              </div>
            </div>
          )}
          
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
              onClick={() => navigate('/register')}
            >
              {t('services.cta_register')}
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

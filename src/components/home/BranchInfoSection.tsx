
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useBranch } from '../../contexts/BranchContext';
import { Button } from '../ui/button';

const BranchInfoSection: React.FC = () => {
  const { t } = useLanguage();
  const { branch } = useBranch();
  const navigate = useNavigate();

  return (
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
  );
};

export default BranchInfoSection;


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
          {t('branch.title')} - {branch === 'chiro' ? 'Chiro' : 'Harar'}
        </h2>
        
        {branch === 'chiro' && (
          <div className="max-w-2xl mx-auto">
            <p className="mb-4">Our Chiro branch offers comprehensive driving courses with modern facilities and experienced instructors.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Location</h3>
                <p>Chiro, Oromia Region</p>
                <a 
                  href="https://maps.app.goo.gl/cB4ErmznYy7H7bAx8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-hirtoli-green text-sm hover:underline"
                >
                  View on Google Maps
                </a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Contact</h3>
                <p>Phone: +251 911 123 456</p>
                <p>Email: chiro@hirtoli.com</p>
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
        
        {branch === 'harar' && (
          <div className="max-w-2xl mx-auto">
            <p className="mb-4">Our Harar branch serves the region with quality driving education and specialized training programs.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Location</h3>
                <p>Harar, Harari Region</p>
                <a 
                  href="https://maps.app.goo.gl/jiD7jU2kgVmnXfA87" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-hirtoli-green text-sm hover:underline"
                >
                  View on Google Maps
                </a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Contact</h3>
                <p>Phone: +251 922 123 456</p>
                <p>Email: harar@hirtoli.com</p>
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
      </div>
    </section>
  );
};

export default BranchInfoSection;

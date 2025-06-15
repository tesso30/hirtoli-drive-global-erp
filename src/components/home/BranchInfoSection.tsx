
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';

const BranchInfoSection: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">
          {t('branches.title')}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="mb-8 text-lg">{t('branches.company.description')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Chiro Branch */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Chiro Branch</h3>
              <p className="mb-4">{t('branches.chiro.description')}</p>
              <div className="text-left space-y-2">
                <p><strong>{t('location')}:</strong> {t('branches.chiro.location')}</p>
                <p><strong>{t('branches.chiro.contact')}:</strong> {t('branches.chiro.phone')}</p>
                <p><strong>Email:</strong> {t('branches.chiro.email')}</p>
              </div>
              <div className="mt-4">
                <a 
                  href="https://maps.app.goo.gl/cB4ErmznYy7H7bAx8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-hirtoli-green text-sm hover:underline"
                >
                  {t('branches.chiro.maps')}
                </a>
              </div>
            </div>

            {/* Harar Branch */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Harar Branch</h3>
              <p className="mb-4">{t('branches.harar.description')}</p>
              <div className="text-left space-y-2">
                <p><strong>{t('location')}:</strong> {t('branches.harar.location')}</p>
                <p><strong>{t('branches.harar.contact')}:</strong> {t('branches.harar.phone')}</p>
                <p><strong>Email:</strong> {t('branches.harar.email')}</p>
              </div>
              <div className="mt-4">
                <a 
                  href="https://maps.app.goo.gl/jiD7jU2kgVmnXfA87" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-hirtoli-green text-sm hover:underline"
                >
                  {t('branches.harar.maps')}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">{t('branches.chiro.hours')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium mb-2">Chiro Branch</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>{t('branches.chiro.weekdays')}</div><div>{t('branches.chiro.weekdays_time')}</div>
                  <div>{t('branches.chiro.saturday')}</div><div>{t('branches.chiro.saturday_time')}</div>
                  <div>{t('branches.chiro.sunday')}</div><div>{t('branches.chiro.sunday_time')}</div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Harar Branch</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>{t('branches.harar.weekdays')}</div><div>{t('branches.harar.weekdays_time')}</div>
                  <div>{t('branches.harar.saturday')}</div><div>{t('branches.harar.saturday_time')}</div>
                  <div>{t('branches.harar.sunday')}</div><div>{t('branches.harar.sunday_time')}</div>
                </div>
              </div>
            </div>
          </div>
          
          <Button onClick={() => navigate('/contact')} className="bg-hirtoli-green">
            {t('contact_us')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BranchInfoSection;


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
            <p className="mb-4">{t('branch.chiro.description')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{t('location')}</h3>
                <p>{t('branch.chiro.location')}</p>
                <a 
                  href="https://maps.app.goo.gl/cB4ErmznYy7H7bAx8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-hirtoli-green text-sm hover:underline"
                >
                  {t('branch.chiro.maps')}
                </a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{t('branch.chiro.contact')}</h3>
                <p>{t('branch.chiro.phone')}</p>
                <p>{t('branch.chiro.email')}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">{t('branch.chiro.hours')}</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>{t('branch.chiro.weekdays')}</div><div>{t('branch.chiro.weekdays_time')}</div>
                <div>{t('branch.chiro.saturday')}</div><div>{t('branch.chiro.saturday_time')}</div>
                <div>{t('branch.chiro.sunday')}</div><div>{t('branch.chiro.sunday_time')}</div>
              </div>
            </div>
            <Button onClick={() => navigate('/contact')} className="bg-hirtoli-green">{t('branch.chiro.cta')}</Button>
          </div>
        )}
        
        {branch === 'harar' && (
          <div className="max-w-2xl mx-auto">
            <p className="mb-4">{t('branch.harar.description')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{t('location')}</h3>
                <p>{t('branch.harar.location')}</p>
                <a 
                  href="https://maps.app.goo.gl/jiD7jU2kgVmnXfA87" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-hirtoli-green text-sm hover:underline"
                >
                  {t('branch.harar.maps')}
                </a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{t('branch.harar.contact')}</h3>
                <p>{t('branch.harar.phone')}</p>
                <p>{t('branch.harar.email')}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">{t('branch.harar.hours')}</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>{t('branch.harar.weekdays')}</div><div>{t('branch.harar.weekdays_time')}</div>
                <div>{t('branch.harar.saturday')}</div><div>{t('branch.harar.saturday_time')}</div>
                <div>{t('branch.harar.sunday')}</div><div>{t('branch.harar.sunday_time')}</div>
              </div>
            </div>
            <Button onClick={() => navigate('/contact')} className="bg-hirtoli-green">{t('branch.harar.cta')}</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BranchInfoSection;

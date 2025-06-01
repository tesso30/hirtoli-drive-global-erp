
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { useLanguage } from '../../contexts/LanguageContext';
import EnrollmentStats from './EnrollmentStats';
import EnrollmentSteps from './EnrollmentSteps';
import EnrollmentOptions from './EnrollmentOptions';

const EnrollmentProcess: React.FC = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Enhanced header with statistics */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-hirtoli-black to-hirtoli-red bg-clip-text text-transparent">
            {t('enrollment.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            {t('enrollment.subtitle')}
          </p>
          
          <EnrollmentStats />

          {/* View mode toggle */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-sm text-gray-600">{t('enrollment.view_mode')}</span>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              {t('enrollment.grid_view')}
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              {t('enrollment.list_view')}
            </Button>
          </div>
        </div>

        <EnrollmentSteps viewMode={viewMode} />
        <EnrollmentOptions />

        {/* Progress indicator for screen readers */}
        <div className="sr-only" role="status" aria-live="polite">
          {t('enrollment.viewing_status')} {viewMode} {t('enrollment.viewing_mode')}
        </div>
      </div>
    </section>
  );
};

export default EnrollmentProcess;

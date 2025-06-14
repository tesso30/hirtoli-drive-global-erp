
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Clock, Users, Star, Target } from 'lucide-react';

const EnrollmentStats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: <Clock className="w-5 h-5" />, value: "~30min", label: t('services.total_time') || 'Total Time' },
    { icon: <Users className="w-5 h-5" />, value: "98%", label: t('services.success_rate') || 'Success Rate' },
    { icon: <Star className="w-5 h-5" />, value: "4.9★", label: t('services.rating') || 'Rating' },
    { icon: <Target className="w-5 h-5" />, value: "3", label: t('services.steps') || 'Steps' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="text-hirtoli-green mb-2">{stat.icon}</div>
          <div className="font-bold text-lg">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default EnrollmentStats;


import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Phone, MessageSquare, FileText, CheckCircle, Star, Clock } from 'lucide-react';

const EnrollmentOptions: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const enrollmentOptions = [
    {
      title: t('enrollment.online.title'),
      description: t('enrollment.online.desc'),
      icon: <MessageSquare className="w-12 h-12 text-hirtoli-green" />,
      features: [
        'Instant confirmation',
        'Digital document upload',
        'Online payment options',
        '24/7 availability'
      ],
      rating: '4.9/5',
      estimatedTime: '10 minutes'
    },
    {
      title: t('enrollment.phone.title'),
      description: t('enrollment.phone.desc'),
      icon: <Phone className="w-12 h-12 text-hirtoli-red" />,
      features: [
        'Personal guidance',
        'Immediate answers',
        'Custom scheduling',
        'Payment assistance'
      ],
      rating: '4.8/5',
      estimatedTime: '15 minutes'
    },
    {
      title: t('enrollment.visit.title'),
      description: t('enrollment.visit.desc'),
      icon: <FileText className="w-12 h-12 text-hirtoli-black" />,
      features: [
        'Facility tour',
        'Meet instructors',
        'Document assistance',
        'Immediate enrollment'
      ],
      rating: '5.0/5',
      estimatedTime: '30 minutes'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          {t('enrollment.ready.title')}
        </h3>
        <p className="text-gray-600 mb-6 text-lg">
          {t('enrollment.ready.subtitle')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {enrollmentOptions.map((option, index) => (
          <Card 
            key={index}
            className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-hirtoli-green/50"
            tabIndex={0}
            role="article"
            aria-label={`${option.title}: ${option.description}`}
          >
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
              {option.icon}
            </div>
            <h4 className="font-semibold mb-2 text-xl group-hover:text-hirtoli-green transition-colors">
              {option.title}
            </h4>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {option.description}
            </p>
            
            <div className="mb-4 space-y-2">
              {option.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-500">
                  <CheckCircle className="w-3 h-3 mr-2 text-hirtoli-green" />
                  {feature}
                </div>
              ))}
            </div>
            
            <div className="mb-4 text-center">
              <div className="text-sm text-gray-500">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="font-medium">{option.rating}</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>~{option.estimatedTime}</span>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={() => {
                if (option.title.includes(t('enrollment.online.title'))) {
                  navigate('/register');
                } else {
                  navigate('/contact');
                }
              }} 
              className={`w-full ${
                index === 0 ? 'bg-hirtoli-green hover:bg-hirtoli-green/90' : 'bg-hirtoli-red hover:bg-hirtoli-red/90'
              } text-white`}
            >
              {option.title.includes(t('enrollment.online.title')) ? t('common.register_online') : 
               option.title.includes(t('enrollment.phone.title')) ? t('common.call_now') : t('common.find_location')}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EnrollmentOptions;

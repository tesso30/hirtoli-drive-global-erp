
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { FileText, CreditCard, Calendar, GraduationCap, ArrowRight, CheckCircle, Clock, Target } from 'lucide-react';

interface EnrollmentStepsProps {
  viewMode: 'grid' | 'list';
}

const EnrollmentSteps: React.FC<EnrollmentStepsProps> = ({ viewMode }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const enrollmentSteps = [
    {
      step: 1,
      title: t('enrollment.step1.title'),
      description: t('enrollment.step1.desc'),
      icon: <FileText className="w-8 h-8 text-hirtoli-red" />,
      action: t('enrollment.step1.action'),
      details: [
        t('enrollment.step1.detail1'),
        t('enrollment.step1.detail2'),
        t('enrollment.step1.detail3')
      ],
      duration: '15 minutes',
      difficulty: 'Easy'
    },
    {
      step: 2,
      title: t('enrollment.step2.title'),
      description: t('enrollment.step2.desc'),
      icon: <CreditCard className="w-8 h-8 text-hirtoli-green" />,
      action: t('enrollment.step2.action'),
      details: [
        t('enrollment.step2.detail1'),
        t('enrollment.step2.detail2'),
        t('enrollment.step2.detail3')
      ],
      duration: '10 minutes',
      difficulty: 'Easy'
    },
    {
      step: 3,
      title: t('enrollment.step3.title'),
      description: t('enrollment.step3.desc'),
      icon: <Calendar className="w-8 h-8 text-hirtoli-black" />,
      action: t('enrollment.step3.action'),
      details: [
        t('enrollment.step3.detail1'),
        t('enrollment.step3.detail2'),
        t('enrollment.step3.detail3')
      ],
      duration: '5 minutes',
      difficulty: 'Easy'
    },
    {
      step: 4,
      title: t('enrollment.step4.title'),
      description: t('enrollment.step4.desc'),
      icon: <GraduationCap className="w-8 h-8 text-hirtoli-red" />,
      action: t('enrollment.step4.action'),
      details: [
        t('enrollment.step4.detail1'),
        t('enrollment.step4.detail2'),
        t('enrollment.step4.detail3')
      ],
      duration: 'Course dependent',
      difficulty: 'Progressive'
    }
  ];

  return (
    <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' : 'space-y-6'} mb-12`}>
      {enrollmentSteps.map((step, index) => (
        <div key={step.step} className="relative">
          <Card 
            className={`h-full hover:shadow-xl transition-all duration-300 cursor-pointer ${
              activeStep === step.step ? 'ring-2 ring-hirtoli-green shadow-lg scale-105' : ''
            } ${viewMode === 'list' ? 'md:flex md:flex-row' : ''}`}
            onClick={() => setActiveStep(activeStep === step.step ? null : step.step)}
            role="button"
            tabIndex={0}
            aria-expanded={activeStep === step.step}
            aria-label={`Step ${step.step}: ${step.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveStep(activeStep === step.step ? null : step.step);
              }
            }}
          >
            <CardHeader className={`text-center ${viewMode === 'list' ? 'md:w-1/3' : ''}`}>
              <div className="mx-auto mb-4 p-3 rounded-full bg-gray-100 w-fit hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="text-2xl font-bold text-hirtoli-red mb-2">
                Step {step.step}
              </div>
              <CardTitle className="text-lg">{step.title}</CardTitle>
              <div className="flex items-center justify-center gap-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {step.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  {step.difficulty}
                </span>
              </div>
            </CardHeader>
            
            <CardContent className={viewMode === 'list' ? 'md:w-2/3' : ''}>
              <p className="text-gray-600 mb-4 text-center md:text-left">{step.description}</p>
              
              <div className={`transition-all duration-300 ${
                activeStep === step.step ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <ul className="space-y-2 mb-4">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-gray-500 flex items-start">
                      <CheckCircle className="w-4 h-4 text-hirtoli-green mr-2 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full hover:bg-hirtoli-green hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/register');
                }}
              >
                {step.action}
              </Button>
            </CardContent>
          </Card>
          
          {index < enrollmentSteps.length - 1 && viewMode === 'grid' && (
            <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
              <ArrowRight 
                className="w-6 h-6 text-hirtoli-green animate-pulse" 
                aria-label={`Proceed from step ${step.step} to step ${step.step + 1}`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EnrollmentSteps;

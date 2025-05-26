
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { FileText, CreditCard, Calendar, GraduationCap, ArrowRight, Phone, MessageSquare, CheckCircle, Star, Clock, Users, Target } from 'lucide-react';

const EnrollmentProcess: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const enrollmentSteps = [
    {
      step: 1,
      title: t('enrollment.step1.title') || 'Choose Your Course',
      description: t('enrollment.step1.desc') || 'Select the course that best fits your needs and experience level',
      icon: <FileText className="w-8 h-8 text-hirtoli-red" />,
      action: t('enrollment.step1.action') || 'Browse Courses',
      details: [
        t('enrollment.step1.detail1') || 'Compare course features and pricing',
        t('enrollment.step1.detail2') || 'Read detailed course descriptions',
        t('enrollment.step1.detail3') || 'Check instructor profiles and ratings'
      ],
      duration: '15 minutes',
      difficulty: 'Easy'
    },
    {
      step: 2,
      title: t('enrollment.step2.title') || 'Complete Registration',
      description: t('enrollment.step2.desc') || 'Fill out the registration form with your personal details',
      icon: <CreditCard className="w-8 h-8 text-hirtoli-green" />,
      action: t('enrollment.step2.action') || 'Register Now',
      details: [
        t('enrollment.step2.detail1') || 'Provide personal information and documents',
        t('enrollment.step2.detail2') || 'Upload required identification',
        t('enrollment.step2.detail3') || 'Choose payment plan and make initial payment'
      ],
      duration: '10 minutes',
      difficulty: 'Easy'
    },
    {
      step: 3,
      title: t('enrollment.step3.title') || 'Schedule Your Classes',
      description: t('enrollment.step3.desc') || 'Book your theory and practical lessons at convenient times',
      icon: <Calendar className="w-8 h-8 text-hirtoli-black" />,
      action: t('enrollment.step3.action') || 'Schedule Classes',
      details: [
        t('enrollment.step3.detail1') || 'Choose from flexible morning, afternoon, or evening slots',
        t('enrollment.step3.detail2') || 'Select your preferred certified instructor',
        t('enrollment.step3.detail3') || 'Confirm booking and receive calendar invites'
      ],
      duration: '5 minutes',
      difficulty: 'Easy'
    },
    {
      step: 4,
      title: t('enrollment.step4.title') || 'Start Learning',
      description: t('enrollment.step4.desc') || 'Begin your driving education journey with expert instructors',
      icon: <GraduationCap className="w-8 h-8 text-hirtoli-red" />,
      action: t('enrollment.step4.action') || 'Start Course',
      details: [
        t('enrollment.step4.detail1') || 'Attend comprehensive theory sessions',
        t('enrollment.step4.detail2') || 'Practice with experienced instructors',
        t('enrollment.step4.detail3') || 'Track progress with digital dashboard'
      ],
      duration: 'Course dependent',
      difficulty: 'Progressive'
    }
  ];

  const enrollmentOptions = [
    {
      title: t('enrollment.online.title') || 'Online Registration',
      description: t('enrollment.online.desc') || 'Quick and convenient online enrollment process',
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
      title: t('enrollment.phone.title') || 'Phone Enrollment',
      description: t('enrollment.phone.desc') || 'Speak with our enrollment advisors for personalized assistance',
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
      title: t('enrollment.visit.title') || 'Visit Our Office',
      description: t('enrollment.visit.desc') || 'Get hands-on assistance and tour our facilities',
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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Enhanced header with statistics */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-hirtoli-black to-hirtoli-red bg-clip-text text-transparent">
            {t('enrollment.title') || 'Simple Enrollment Process'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            {t('enrollment.subtitle') || 'Getting started is easy! Follow these simple steps to begin your driving education journey with us.'}
          </p>
          
          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {[
              { icon: <Clock className="w-5 h-5" />, value: "~30min", label: "Total Time" },
              { icon: <Users className="w-5 h-5" />, value: "98%", label: "Success Rate" },
              { icon: <Star className="w-5 h-5" />, value: "4.9★", label: "Experience Rating" },
              { icon: <Target className="w-5 h-5" />, value: "3", label: "Easy Steps" }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-hirtoli-green mb-2">{stat.icon}</div>
                <div className="font-bold text-lg">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* View mode toggle */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-sm text-gray-600">View:</span>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              Grid
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              List
            </Button>
          </div>
        </div>

        {/* Enhanced enrollment steps with accessibility */}
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
              
              {/* Enhanced arrow indicator with better accessibility */}
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

        {/* Enhanced enrollment options with better UX */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('enrollment.ready.title') || 'Ready to Get Started?'}
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              {t('enrollment.ready.subtitle') || 'Take the first step towards becoming a confident driver. Choose your preferred enrollment method.'}
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
                    if (option.title.includes('Online')) {
                      navigate('/register');
                    } else {
                      navigate('/contact');
                    }
                  }} 
                  className={`w-full ${
                    index === 0 ? 'bg-hirtoli-green hover:bg-hirtoli-green/90' : 'bg-hirtoli-red hover:bg-hirtoli-red/90'
                  } text-white`}
                >
                  {option.title.includes('Online') ? 'Register Online' : 
                   option.title.includes('Phone') ? 'Call Now' : 'Find Location'}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Progress indicator for screen readers */}
        <div className="sr-only" role="status" aria-live="polite">
          {activeStep && `Currently viewing details for step ${activeStep}`}
        </div>
      </div>
    </section>
  );
};

export default EnrollmentProcess;

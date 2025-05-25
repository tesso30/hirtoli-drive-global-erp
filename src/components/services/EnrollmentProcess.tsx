
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { FileText, CreditCard, Calendar, GraduationCap, ArrowRight, Phone, MessageSquare } from 'lucide-react';

const EnrollmentProcess: React.FC = () => {
  const navigate = useNavigate();

  const enrollmentSteps = [
    {
      step: 1,
      title: 'Choose Your Course',
      description: 'Select the course that best fits your needs and experience level',
      icon: <FileText className="w-8 h-8 text-hirtoli-red" />,
      action: 'Browse Courses',
      details: ['Compare course features', 'Check pricing options', 'Read course descriptions']
    },
    {
      step: 2,
      title: 'Complete Registration',
      description: 'Fill out the registration form with your personal details',
      icon: <CreditCard className="w-8 h-8 text-hirtoli-green" />,
      action: 'Register Now',
      details: ['Provide personal information', 'Upload required documents', 'Make payment']
    },
    {
      step: 3,
      title: 'Schedule Your Classes',
      description: 'Book your theory and practical lessons at convenient times',
      icon: <Calendar className="w-8 h-8 text-hirtoli-black" />,
      action: 'Schedule Classes',
      details: ['Choose flexible time slots', 'Select preferred instructor', 'Confirm booking']
    },
    {
      step: 4,
      title: 'Start Learning',
      description: 'Begin your driving education journey with expert instructors',
      icon: <GraduationCap className="w-8 h-8 text-hirtoli-red" />,
      action: 'Start Course',
      details: ['Attend theory sessions', 'Practice with instructors', 'Track your progress']
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple Enrollment Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting started is easy! Follow these simple steps to begin your driving education journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {enrollmentSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gray-100 w-fit">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-hirtoli-red mb-2">
                    Step {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-center">{step.description}</p>
                  <ul className="space-y-2 mb-4">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-hirtoli-green rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => navigate('/register')}
                  >
                    {step.action}
                  </Button>
                </CardContent>
              </Card>
              
              {index < enrollmentSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-hirtoli-green" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Take the first step towards becoming a confident driver. Choose your preferred way to enroll.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <MessageSquare className="w-12 h-12 text-hirtoli-green mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Online Registration</h4>
              <p className="text-sm text-gray-600 mb-4">Quick and convenient online enrollment</p>
              <Button onClick={() => navigate('/register')} className="w-full">
                Register Online
              </Button>
            </Card>
            
            <Card className="text-center p-6">
              <Phone className="w-12 h-12 text-hirtoli-red mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-sm text-gray-600 mb-4">Speak with our enrollment advisors</p>
              <Button variant="outline" onClick={() => navigate('/contact')} className="w-full">
                Call Now
              </Button>
            </Card>
            
            <Card className="text-center p-6">
              <FileText className="w-12 h-12 text-hirtoli-black mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Visit Our Office</h4>
              <p className="text-sm text-gray-600 mb-4">Get personalized assistance in person</p>
              <Button variant="outline" onClick={() => navigate('/contact')} className="w-full">
                Find Location
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentProcess;

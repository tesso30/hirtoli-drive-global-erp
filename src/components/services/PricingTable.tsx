
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Check, Star, Zap, Award, Users } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
  recommended?: boolean;
  gradient?: string;
  icon?: React.ReactNode;
}

const PricingTable: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const pricingPlans: PricingPlan[] = [
    {
      id: 'basic',
      name: t('services.pricing.basic_title'),
      price: 2500,
      duration: '2 weeks',
      description: t('services.pricing.basic_desc'),
      features: [
        '8 practical lessons',
        '3 theory sessions',
        'Basic vehicle controls',
        'Traffic rules review',
        'Test preparation'
      ],
      gradient: 'from-blue-500/10 to-cyan-500/10',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      id: 'standard',
      name: t('services.pricing.standard_title'),
      price: 4500,
      originalPrice: 5000,
      duration: '4 weeks',
      description: t('services.pricing.standard_desc'),
      features: [
        '15 practical lessons',
        '8 theory sessions',
        'Comprehensive vehicle training',
        'Highway driving',
        'Parking mastery',
        'Test preparation',
        'Certificate included'
      ],
      popular: true,
      gradient: 'from-green-500/10 to-emerald-500/10',
      icon: <Zap className="w-6 h-6 text-green-500" />
    },
    {
      id: 'premium',
      name: t('services.pricing.premium_title'),
      price: 7500,
      duration: '6 weeks',
      description: t('services.pricing.premium_desc'),
      features: [
        '25 practical lessons',
        '12 theory sessions',
        'Advanced driving techniques',
        'Defensive driving',
        'Night driving training',
        'Weather condition training',
        'Test preparation',
        'Certificate included',
        'One-on-one instruction'
      ],
      recommended: true,
      gradient: 'from-purple-500/10 to-violet-500/10',
      icon: <Award className="w-6 h-6 text-purple-500" />
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_3px_3px,rgba(0,166,81,0.1)_3px,transparent_0)] bg-[length:80px_80px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-hirtoli-green/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-hirtoli-red/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-hirtoli-black via-gray-700 to-hirtoli-black bg-clip-text text-transparent">
            {t('services.pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('services.pricing.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-hirtoli-red to-hirtoli-green mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={plan.id} className={`relative flex flex-col h-full ${plan.popular ? 'ring-2 ring-hirtoli-red shadow-2xl scale-105' : 'shadow-xl'} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group bg-gradient-to-br ${plan.gradient || 'from-white to-gray-50'} border-0 overflow-hidden animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent group-hover:from-white/30 transition-all duration-500"></div>
              
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-hirtoli-red to-red-600 text-white shadow-lg animate-pulse z-10">
                  <Star className="w-3 h-3 mr-1" />
                  {t('services.pricing.most_popular')}
                </Badge>
              )}
              {plan.recommended && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-hirtoli-green to-green-600 text-white shadow-lg z-10">
                  <Award className="w-3 h-3 mr-1" />
                  {t('services.pricing.recommended')}
                </Badge>
              )}
              
              <CardHeader className="text-center relative z-10 pb-2">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-hirtoli-green transition-colors duration-300">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                <div className="mt-6">
                  <div className="flex items-center justify-center gap-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        {plan.originalPrice.toLocaleString()} ETB
                      </span>
                    )}
                    <span className="text-4xl font-bold bg-gradient-to-r from-hirtoli-red to-hirtoli-green bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {plan.price.toLocaleString()} ETB
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 font-medium">{plan.duration}</p>
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow relative z-10 px-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start group/item">
                      <Check className="w-5 h-5 text-hirtoli-green mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                      <span className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="relative z-10 pt-6">
                <Button 
                  className={`w-full transition-all duration-300 transform hover:scale-105 ${
                    plan.popular || plan.recommended 
                      ? 'bg-gradient-to-r from-hirtoli-red to-red-600 hover:from-red-600 hover:to-hirtoli-red shadow-lg' 
                      : 'bg-gradient-to-r from-hirtoli-green to-green-600 hover:from-green-600 hover:to-hirtoli-green'
                  } text-white border-0 shadow-lg hover:shadow-xl`}
                  onClick={() => navigate('/contact')}
                >
                  {t('services.pricing.choose_package')}
                </Button>
              </CardFooter>
              
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-hirtoli-green to-hirtoli-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{t('services.pricing.custom_title')}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('services.pricing.custom_subtitle')}
            </p>
            <Button 
              variant="outline" 
              onClick={() => navigate('/contact')}
              className="border-2 border-hirtoli-green text-hirtoli-green hover:bg-hirtoli-green hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {t('services.pricing.custom_quote')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;

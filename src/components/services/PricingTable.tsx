
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Check, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
}

const PricingTable: React.FC = () => {
  const navigate = useNavigate();

  const pricingPlans: PricingPlan[] = [
    {
      id: 'basic',
      name: 'Basic Package',
      price: 2500,
      duration: '2 weeks',
      description: 'Perfect for those with some driving experience',
      features: [
        '8 practical lessons',
        '3 theory sessions',
        'Basic vehicle controls',
        'Traffic rules review',
        'Test preparation'
      ]
    },
    {
      id: 'standard',
      name: 'Standard Package',
      price: 4500,
      originalPrice: 5000,
      duration: '4 weeks',
      description: 'Most popular choice for new drivers',
      features: [
        '15 practical lessons',
        '8 theory sessions',
        'Comprehensive vehicle training',
        'Highway driving',
        'Parking mastery',
        'Test preparation',
        'Certificate included'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: 7500,
      duration: '6 weeks',
      description: 'Complete professional training',
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
      recommended: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Training Package</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the package that best fits your experience level and learning goals. 
            All packages include modern vehicles and certified instructors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card key={plan.id} className={`relative flex flex-col h-full ${plan.popular ? 'ring-2 ring-hirtoli-red' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-hirtoli-red">
                  Most Popular
                </Badge>
              )}
              {plan.recommended && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-hirtoli-green">
                  <Star className="w-3 h-3 mr-1" />
                  Recommended
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        {plan.originalPrice.toLocaleString()} ETB
                      </span>
                    )}
                    <span className="text-3xl font-bold text-hirtoli-red">
                      {plan.price.toLocaleString()} ETB
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{plan.duration}</p>
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-hirtoli-green mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular || plan.recommended ? 'bg-hirtoli-red hover:bg-hirtoli-red/90' : ''}`}
                  onClick={() => navigate('/register')}
                >
                  Choose This Package
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom package? Contact us for personalized training options.
          </p>
          <Button variant="outline" onClick={() => navigate('/contact')}>
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;

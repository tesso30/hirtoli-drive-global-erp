
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Clock, Users, Award, CheckCircle } from 'lucide-react';

interface CourseDetailCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  classSize: string;
  price: string;
  features: string[];
  level: string;
  onEnroll: () => void;
}

const CourseDetailCard: React.FC<CourseDetailCardProps> = ({
  title,
  description,
  image,
  duration,
  classSize,
  price,
  features,
  level,
  onEnroll
}) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Badge className="absolute top-2 left-2 bg-hirtoli-red">
          {level}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-center">
          <div className="flex flex-col items-center">
            <Clock className="w-5 h-5 text-hirtoli-green mb-1" />
            <span className="text-sm font-semibold">{duration}</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-5 h-5 text-hirtoli-green mb-1" />
            <span className="text-sm font-semibold">{classSize}</span>
          </div>
          <div className="flex flex-col items-center">
            <Award className="w-5 h-5 text-hirtoli-green mb-1" />
            <span className="text-sm font-semibold text-hirtoli-red">{price}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold mb-2">What you'll learn:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 text-hirtoli-green mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          onClick={onEnroll}
          className="w-full bg-hirtoli-green hover:bg-opacity-90"
        >
          Enroll Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseDetailCard;

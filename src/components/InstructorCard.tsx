
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface InstructorCardProps {
  name: string;
  image: string;
  specializations: string[];
  experience: string;
  languages: string[];
  description: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({
  name,
  image,
  specializations,
  experience,
  languages,
  description
}) => {
  return (
    <Card className="h-full">
      <CardHeader className="text-center">
        <img 
          src={image} 
          alt={name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-hirtoli-green"
        />
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-hirtoli-red font-semibold">{experience}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        
        <div className="mb-3">
          <h4 className="font-semibold text-sm mb-2">Specializations:</h4>
          <div className="flex flex-wrap gap-1">
            {specializations.map((spec, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {spec}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-sm mb-2">Languages:</h4>
          <div className="flex flex-wrap gap-1">
            {languages.map((lang, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {lang}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstructorCard;

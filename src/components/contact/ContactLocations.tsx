
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { MapPin } from 'lucide-react';

const ContactLocations = () => {
  const branchInfo = {
    'chiro': {
      address: 'Chiro, Oromia Region, Ethiopia',
      phone: '+251 911 123 456',
      email: 'chiro@hirtoli.com',
      manager: 'Ahmed Hassan',
      mapUrl: 'https://maps.app.goo.gl/cB4ErmznYy7H7bAx8',
    },
    'harar': {
      address: 'Harar, Harari Region, Ethiopia',
      phone: '+251 922 123 456',
      email: 'harar@hirtoli.com',
      manager: 'Fatima Abdullahi',
      mapUrl: 'https://maps.app.goo.gl/jiD7jU2kgVmnXfA87',
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {Object.entries(branchInfo).map(([key, info]) => (
        <Card key={key} className="overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 text-hirtoli-red" />
              {key === 'chiro' ? 'Chiro' : 'Harar'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-600 text-sm">{info.address}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Contact</h4>
                <p className="text-gray-600 text-sm">Phone: {info.phone}</p>
                <p className="text-gray-600 text-sm">Email: {info.email}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Manager</h4>
                <p className="text-gray-600 text-sm">{info.manager}</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href={info.mapUrl} target="_blank" rel="noopener noreferrer">
                    View Map
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={`tel:${info.phone}`}>Call Now</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContactLocations;

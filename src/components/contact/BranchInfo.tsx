
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MapPin, Clock, User, Car, GraduationCap } from 'lucide-react';

const BranchInfo = () => {
  const branchesInfo = {
    'chiro': {
      title: 'Chiro Branch',
      address: 'Chiro, Oromia Region, Ethiopia',
      phone: '+251 911 123 456',
      email: 'chiro@hirtoli.com',
      whatsapp: '+251 911 123 456',
      manager: 'Ahmed Hassan',
      mapUrl: 'https://maps.app.goo.gl/cB4ErmznYy7H7bAx8',
      facilities: ['12 Training Vehicles', '6 Classrooms', 'Practice Area', 'Student Lounge'],
      specialties: ['Basic Driving Courses', 'Commercial Licenses', 'Motorcycle Training'],
    },
    'harar': {
      title: 'Harar Branch',
      address: 'Harar, Harari Region, Ethiopia',
      phone: '+251 922 123 456',
      email: 'harar@hirtoli.com',
      whatsapp: '+251 922 123 456',
      manager: 'Fatima Abdullahi',
      mapUrl: 'https://maps.app.goo.gl/jiD7jU2kgVmnXfA87',
      facilities: ['10 Training Vehicles', '4 Classrooms', 'Driving Simulator', 'Testing Center'],
      specialties: ['Tourism Transport', 'City Driving', 'Highway Training'],
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Branch Information</h2>
      
      {/* Both Branches Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {Object.entries(branchesInfo).map(([key, branch]) => (
          <Card key={key} className="p-6">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 text-hirtoli-red" />
                {branch.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1 flex items-center">
                    <User className="mr-1 w-4 h-4" />
                    Branch Manager
                  </h4>
                  <p className="text-gray-600">{branch.manager}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 flex items-center">
                    <Car className="mr-1 w-4 h-4" />
                    Facilities
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    {branch.facilities.map((facility, index) => (
                      <li key={index}>• {facility}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 flex items-center">
                    <GraduationCap className="mr-1 w-4 h-4" />
                    Specialties
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    {branch.specialties.map((specialty, index) => (
                      <li key={index}>• {specialty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Business Hours - Same for both branches */}
      <Card className="p-6">
        <CardHeader className="px-0 pt-0">
          <CardTitle className="flex items-center">
            <Clock className="mr-2 text-hirtoli-green" />
            Business Hours (Both Branches)
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium">Monday - Friday</span>
              <span className="text-hirtoli-green">8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium">Saturday</span>
              <span className="text-hirtoli-green">9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Sunday</span>
              <span className="text-red-500">Closed</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Emergency support available 24/7 for enrolled students
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BranchInfo;

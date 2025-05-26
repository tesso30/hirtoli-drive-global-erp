
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Users, Calendar } from 'lucide-react';

const ContactSupport = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Student Support Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="flex items-center">
              <Users className="mr-2 text-hirtoli-green" />
              Academic Support
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-hirtoli-red mr-2">•</span>
                <span>One-on-one tutoring sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-hirtoli-red mr-2">•</span>
                <span>Extra practice sessions for struggling students</span>
              </li>
              <li className="flex items-start">
                <span className="text-hirtoli-red mr-2">•</span>
                <span>Study materials and online resources</span>
              </li>
              <li className="flex items-start">
                <span className="text-hirtoli-red mr-2">•</span>
                <span>Mock tests and progress tracking</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 text-hirtoli-green" />
              Scheduling Support
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-hirtoli-red mr-2">•</span>
                <span>Flexible scheduling options</span>
              </li>
              <li className="flex items-start">
                <span className="text-hirtoli-red mr-2">•</span>
                <span>Make-up sessions for missed classes</span>
              </li>
              <li className="flex items-start">
                <span className="text-hirtoli-red mr-2">•</span>
                <span>Weekend and evening slots available</span>
              </li>
              <li className="flex items-start">
                <span className="text-hirtoli-red mr-2">•</span>
                <span>Holiday scheduling accommodations</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="p-6 mt-8">
        <CardHeader className="px-0 pt-0">
          <CardTitle>Emergency Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">24/7 Student Hotline</h4>
              <p className="text-hirtoli-green font-medium">+251 900 000 000</p>
              <p className="text-sm text-gray-600">For enrolled students only</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Emergency Email</h4>
              <p className="text-hirtoli-green font-medium">emergency@hirtoli.com</p>
              <p className="text-sm text-gray-600">Response within 1 hour</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">WhatsApp Support</h4>
              <p className="text-hirtoli-green font-medium">+251 911 000 000</p>
              <p className="text-sm text-gray-600">Quick responses</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSupport;


import React from 'react';
import { Card, CardContent } from '../ui/card';

const CompanyHistorySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2010 by Ato Hirtoli Tadesse, our driving school began with a simple mission: 
                to provide the highest quality driving education in Ethiopia. What started as a small 
                operation with just two instructors and three vehicles has grown into the country's 
                most trusted driving education institution.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our founder, a former transportation ministry official with over 20 years of experience 
                in road safety, recognized the urgent need for professional driving education in Ethiopia. 
                He established Hirtoli Driving School with a vision to reduce road accidents and create 
                a generation of responsible, skilled drivers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we operate across three major cities, employ over 50 certified instructors, 
                and have successfully trained more than 15,000 drivers who are now confidently 
                navigating Ethiopian roads.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-hirtoli-red text-white text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold mb-2">2010</div>
                  <div className="text-sm">Founded</div>
                </CardContent>
              </Card>
              <Card className="p-6 bg-hirtoli-green text-white text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-sm">Cities</div>
                </CardContent>
              </Card>
              <Card className="p-6 bg-hirtoli-black text-white text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm">Instructors</div>
                </CardContent>
              </Card>
              <Card className="p-6 bg-gray-600 text-white text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold mb-2">15K+</div>
                  <div className="text-sm">Graduates</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistorySection;

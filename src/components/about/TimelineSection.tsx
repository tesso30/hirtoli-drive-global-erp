
import React from 'react';
import { CheckCircle } from 'lucide-react';

const TimelineSection: React.FC = () => {
  const milestones = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'Hirtoli Driving School established in Addis Ababa with 2 instructors and 3 vehicles'
    },
    {
      year: '2012',
      title: 'First Expansion',
      description: 'Reached 1,000 successful graduates and expanded fleet to 10 vehicles'
    },
    {
      year: '2015',
      title: 'Multi-City Operations',
      description: 'Opened branches in Adama and Bahir Dar, serving multiple regions'
    },
    {
      year: '2017',
      title: 'Technology Integration',
      description: 'Introduced online theory classes and digital learning management system'
    },
    {
      year: '2019',
      title: 'Quality Recognition',
      description: 'Achieved 98% first-time pass rate and received national recognition'
    },
    {
      year: '2021',
      title: 'Commercial Training',
      description: 'Launched specialized commercial vehicle training programs'
    },
    {
      year: '2023',
      title: '15,000 Graduates',
      description: 'Celebrated training our 15,000th successful driver'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-hirtoli-red transform md:-translate-x-1/2"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-hirtoli-red rounded-full transform md:-translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-5 h-5 text-hirtoli-green mr-2" />
                      <span className="text-2xl font-bold text-hirtoli-red">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

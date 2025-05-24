
import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Target className="w-16 h-16 text-hirtoli-red mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-hirtoli-black">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide comprehensive, professional driving education that prioritizes safety, 
              builds confidence, and creates responsible drivers who contribute to safer roads 
              across Ethiopia.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Eye className="w-16 h-16 text-hirtoli-green mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-hirtoli-black">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be Ethiopia's leading driving education institution, recognized for excellence 
              in training, innovation in teaching methods, and our contribution to road safety 
              nationwide.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Heart className="w-16 h-16 text-hirtoli-black mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-hirtoli-black">Our Values</h3>
            <ul className="text-gray-700 text-left space-y-2">
              <li>• Safety First</li>
              <li>• Student-Centered Learning</li>
              <li>• Professional Excellence</li>
              <li>• Integrity & Trust</li>
              <li>• Continuous Improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;

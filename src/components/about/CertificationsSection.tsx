
import React from 'react';
import { Shield, CheckCircle, FileText, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      icon: <Shield className="w-8 h-8 text-hirtoli-green" />,
      title: "ISO 9001:2015 Certified",
      description: "Quality Management System certification ensuring consistent service delivery"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-hirtoli-red" />,
      title: "Ethiopian Road Authority Licensed",
      description: "Full authorization to provide driving education and testing services"
    },
    {
      icon: <FileText className="w-8 h-8 text-hirtoli-black" />,
      title: "Ministry of Education Accredited",
      description: "Accredited educational institution with approved curriculum standards"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Certified Instructor Program",
      description: "All instructors certified through our rigorous training and assessment program"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications & Accreditations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  {cert.icon}
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our certifications and accreditations demonstrate our commitment to maintaining the highest 
            standards in driving education, safety protocols, and student satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;


import React from 'react';
import InstructorCard from '../InstructorCard';

const TeamSection: React.FC = () => {
  const leadership = [
    {
      name: "Ato Hirtoli Tadesse",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      experience: "20+ Years in Transportation",
      specializations: ["Founder & CEO", "Road Safety Expert", "Policy Development"],
      languages: ["Amharic", "English", "Oromo"],
      description: "Former Ministry of Transportation official with extensive experience in road safety policy and driver education standards."
    },
    {
      name: "W/t Almaz Bekele",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      experience: "15 Years Educational Leadership",
      specializations: ["Academic Director", "Curriculum Development", "Instructor Training"],
      languages: ["Amharic", "English"],
      description: "Educational psychology expert specializing in adult learning and driver education methodology development."
    },
    {
      name: "Ato Dawit Mulugeta",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      experience: "18 Years Operations Management",
      specializations: ["Operations Manager", "Fleet Management", "Quality Assurance"],
      languages: ["Amharic", "English", "Tigrinya"],
      description: "Operations specialist ensuring the highest standards of vehicle maintenance, safety protocols, and training quality."
    },
    {
      name: "W/t Sara Mohammed",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      experience: "12 Years Customer Relations",
      specializations: ["Student Affairs Director", "Community Outreach", "Customer Experience"],
      languages: ["Amharic", "Arabic", "English"],
      description: "Dedicated to ensuring exceptional student experience and building strong community relationships across all branches."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Leadership Team</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet the experienced professionals who lead our mission to provide exceptional driving education across Ethiopia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((member, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <InstructorCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

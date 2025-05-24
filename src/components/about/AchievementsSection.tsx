
import React from 'react';
import { Trophy, Medal, Star, Award } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      title: "Best Driving School Award",
      year: "2022",
      description: "Recognized by Ethiopian Road Authority for excellence in driver education"
    },
    {
      icon: <Medal className="w-12 h-12 text-gray-400" />,
      title: "Safety Excellence Certificate",
      year: "2021",
      description: "Awarded for maintaining the highest safety standards in training operations"
    },
    {
      icon: <Star className="w-12 h-12 text-blue-500" />,
      title: "Innovation in Education",
      year: "2020",
      description: "First driving school in Ethiopia to implement comprehensive digital learning"
    },
    {
      icon: <Award className="w-12 h-12 text-green-500" />,
      title: "Community Impact Award",
      year: "2019",
      description: "Recognized for contribution to road safety awareness and community education"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="mb-4 flex justify-center">{achievement.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <div className="text-2xl font-bold text-hirtoli-red mb-2">{achievement.year}</div>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

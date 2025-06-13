
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Progress } from '../../ui/progress';
import { BookOpen, Calendar, Trophy, Clock } from 'lucide-react';

const AcademicOverview = () => {
  const stats = [
    {
      title: 'Current GPA',
      value: '3.87',
      subtitle: 'Out of 4.0',
      icon: Trophy,
      color: 'text-yellow-600',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
      borderColor: 'border-yellow-200'
    },
    {
      title: 'Credits Completed',
      value: '78',
      subtitle: 'Out of 120',
      icon: BookOpen,
      color: 'text-hirtoli-green',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
      borderColor: 'border-green-200',
      progress: 65
    },
    {
      title: 'Current Semester',
      value: '6',
      subtitle: 'Courses enrolled',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Study Hours',
      value: '24.5',
      subtitle: 'This week',
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card 
          key={index} 
          className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${stat.bgColor} ${stat.borderColor} border-2 backdrop-blur-sm`}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-600">{stat.subtitle}</p>
                {stat.progress && (
                  <div className="space-y-2">
                    <Progress value={stat.progress} className="h-2" />
                    <span className="text-xs text-gray-500">{stat.progress}% Complete</span>
                  </div>
                )}
              </div>
              <div className={`p-4 rounded-2xl bg-white/70 shadow-lg`}>
                <stat.icon className={stat.color} size={28} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AcademicOverview;

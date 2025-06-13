
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
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Credits Completed',
      value: '78',
      subtitle: 'Out of 120',
      icon: BookOpen,
      color: 'text-hirtoli-green',
      bgColor: 'bg-green-50',
      progress: 65
    },
    {
      title: 'Current Semester',
      value: '6',
      subtitle: 'Courses enrolled',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Study Hours',
      value: '24.5',
      subtitle: 'This week',
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.subtitle}</p>
                {stat.progress && (
                  <Progress value={stat.progress} className="mt-2 h-2" />
                )}
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <stat.icon className={stat.color} size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AcademicOverview;

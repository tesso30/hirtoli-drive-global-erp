
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Clock, BookOpen, FileText, MessageSquare, Trophy, Activity } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      type: 'assignment',
      title: 'Submitted Physics Lab Report',
      course: 'PHYS 205',
      time: '2 hours ago',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-gradient-to-r from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      type: 'grade',
      title: 'Received grade for Math Quiz',
      course: 'MATH 301',
      time: '5 hours ago',
      icon: Trophy,
      color: 'text-yellow-600',
      bgColor: 'bg-gradient-to-r from-yellow-50 to-yellow-100',
      borderColor: 'border-yellow-200',
      badge: 'A-'
    },
    {
      type: 'message',
      title: 'New message from Dr. Smith',
      course: 'MATH 301',
      time: '1 day ago',
      icon: MessageSquare,
      color: 'text-hirtoli-green',
      bgColor: 'bg-gradient-to-r from-green-50 to-green-100',
      borderColor: 'border-green-200'
    },
    {
      type: 'course',
      title: 'Attended Computer Science Lecture',
      course: 'CS 401',
      time: '1 day ago',
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-gradient-to-r from-purple-50 to-purple-100',
      borderColor: 'border-purple-200'
    },
    {
      type: 'assignment',
      title: 'Started Literature Essay',
      course: 'ENG 102',
      time: '2 days ago',
      icon: FileText,
      color: 'text-orange-600',
      bgColor: 'bg-gradient-to-r from-orange-50 to-orange-100',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Activity className="text-hirtoli-green" size={24} />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className={`flex items-center gap-4 p-4 ${activity.bgColor} rounded-xl border-2 ${activity.borderColor} hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]`}>
              <div className={`p-3 rounded-xl bg-white/80 shadow-sm border ${activity.borderColor}`}>
                <activity.icon className={activity.color} size={20} />
              </div>
              
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">{activity.title}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="font-medium">{activity.course}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
              
              {activity.badge && (
                <Badge className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-300 font-semibold">
                  {activity.badge}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;

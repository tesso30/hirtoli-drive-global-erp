
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Clock, BookOpen, FileText, MessageSquare, Trophy } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      type: 'assignment',
      title: 'Submitted Physics Lab Report',
      course: 'PHYS 205',
      time: '2 hours ago',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      type: 'grade',
      title: 'Received grade for Math Quiz',
      course: 'MATH 301',
      time: '5 hours ago',
      icon: Trophy,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      badge: 'A-'
    },
    {
      type: 'message',
      title: 'New message from Dr. Smith',
      course: 'MATH 301',
      time: '1 day ago',
      icon: MessageSquare,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      type: 'course',
      title: 'Attended Computer Science Lecture',
      course: 'CS 401',
      time: '1 day ago',
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      type: 'assignment',
      title: 'Started Literature Essay',
      course: 'ENG 102',
      time: '2 days ago',
      icon: FileText,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Clock className="text-hirtoli-green" size={20} />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className={`p-2 rounded-full ${activity.bgColor}`}>
                <activity.icon className={activity.color} size={16} />
              </div>
              
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{activity.title}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{activity.course}</span>
                  <span>•</span>
                  <span>{activity.time}</span>
                </div>
              </div>
              
              {activity.badge && (
                <Badge className="bg-green-100 text-green-800">{activity.badge}</Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;

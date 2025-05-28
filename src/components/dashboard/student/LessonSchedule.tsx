
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Calendar, Clock, MapPin, User } from 'lucide-react';

const LessonSchedule = () => {
  const lessons = [
    {
      id: 1,
      title: 'Highway Driving Practice',
      type: 'practical',
      instructor: 'David Smith',
      date: '2024-01-20',
      time: '10:00 AM',
      duration: '2 hours',
      location: 'Main Training Center',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Traffic Rules Theory',
      type: 'theory',
      instructor: 'Sarah Johnson',
      date: '2024-01-22',
      time: '2:00 PM',
      duration: '1 hour',
      location: 'Classroom A',
      status: 'confirmed'
    },
    {
      id: 3,
      title: 'Night Driving Practice',
      type: 'practical',
      instructor: 'David Smith',
      date: '2024-01-24',
      time: '7:00 PM',
      duration: '1.5 hours',
      location: 'City Route',
      status: 'pending'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'practical' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="text-hirtoli-green" size={20} />
          Upcoming Lessons
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {lessons.map(lesson => (
            <div key={lesson.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium">{lesson.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className={getTypeColor(lesson.type)}>
                      {lesson.type}
                    </Badge>
                    <Badge className={getStatusColor(lesson.status)}>
                      {lesson.status}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{lesson.date}</div>
                  <div className="text-sm text-gray-600">{lesson.time}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User size={14} />
                  {lesson.instructor}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  {lesson.duration}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  {lesson.location}
                </div>
              </div>
              
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="outline">Reschedule</Button>
                {lesson.status === 'pending' && (
                  <Button size="sm" variant="outline" className="text-red-600">Cancel</Button>
                )}
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4" variant="outline">
          View Full Schedule
        </Button>
      </CardContent>
    </Card>
  );
};

export default LessonSchedule;

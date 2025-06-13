
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Clock, MapPin, Calendar } from 'lucide-react';

const UpcomingSchedule = () => {
  const schedule = [
    {
      time: '09:00 AM',
      course: 'Advanced Mathematics',
      room: 'Room 301',
      type: 'Lecture',
      color: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    {
      time: '11:00 AM',
      course: 'Physics Lab',
      room: 'Lab 205',
      type: 'Lab',
      color: 'bg-green-100 text-green-800 border-green-200'
    },
    {
      time: '02:00 PM',
      course: 'English Literature',
      room: 'Room 102',
      type: 'Discussion',
      color: 'bg-purple-100 text-purple-800 border-purple-200'
    },
    {
      time: '04:00 PM',
      course: 'Computer Science',
      room: 'Lab 401',
      type: 'Practical',
      color: 'bg-orange-100 text-orange-800 border-orange-200'
    }
  ];

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Calendar className="text-hirtoli-green" size={24} />
          Today's Schedule
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {schedule.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-white/80 to-gray-50/80 rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-200">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge className={`${item.color} border font-medium`}>{item.type}</Badge>
                  <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                    <Clock size={14} />
                    {item.time}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{item.course}</h4>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin size={14} />
                  {item.room}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingSchedule;

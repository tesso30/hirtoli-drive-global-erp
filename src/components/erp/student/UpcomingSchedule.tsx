
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Clock, MapPin } from 'lucide-react';

const UpcomingSchedule = () => {
  const schedule = [
    {
      time: '09:00 AM',
      course: 'Advanced Mathematics',
      room: 'Room 301',
      type: 'Lecture',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      time: '11:00 AM',
      course: 'Physics Lab',
      room: 'Lab 205',
      type: 'Lab',
      color: 'bg-green-100 text-green-800'
    },
    {
      time: '02:00 PM',
      course: 'English Literature',
      room: 'Room 102',
      type: 'Discussion',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      time: '04:00 PM',
      course: 'Computer Science',
      room: 'Lab 401',
      type: 'Practical',
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Clock className="text-hirtoli-green" size={20} />
          Today's Schedule
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {schedule.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className={item.color}>{item.type}</Badge>
                  <span className="text-sm font-medium text-gray-600">{item.time}</span>
                </div>
                <h4 className="font-medium text-gray-900">{item.course}</h4>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <MapPin size={12} />
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

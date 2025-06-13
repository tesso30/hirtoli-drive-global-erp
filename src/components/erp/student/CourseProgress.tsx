
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Progress } from '../../ui/progress';
import { Badge } from '../../ui/badge';
import { BookOpen, Users, Clock } from 'lucide-react';

const CourseProgress = () => {
  const courses = [
    {
      name: 'Advanced Mathematics',
      code: 'MATH 301',
      progress: 85,
      grade: 'A-',
      instructor: 'Dr. Smith',
      nextClass: 'Tomorrow 9:00 AM',
      status: 'active'
    },
    {
      name: 'Physics Laboratory',
      code: 'PHYS 205',
      progress: 72,
      grade: 'B+',
      instructor: 'Prof. Johnson',
      nextClass: 'Today 11:00 AM',
      status: 'active'
    },
    {
      name: 'Computer Science',
      code: 'CS 401',
      progress: 90,
      grade: 'A',
      instructor: 'Dr. Wilson',
      nextClass: 'Today 4:00 PM',
      status: 'active'
    },
    {
      name: 'English Literature',
      code: 'ENG 102',
      progress: 68,
      grade: 'B',
      instructor: 'Ms. Davis',
      nextClass: 'Today 2:00 PM',
      status: 'active'
    }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-800';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <BookOpen className="text-hirtoli-green" size={20} />
          Course Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {courses.map((course, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{course.name}</h4>
                  <p className="text-sm text-gray-600">{course.code}</p>
                </div>
                <Badge className={getGradeColor(course.grade)}>{course.grade}</Badge>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users size={14} />
                  {course.instructor}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  {course.nextClass}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseProgress;

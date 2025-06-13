
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Progress } from '../../ui/progress';
import { Badge } from '../../ui/badge';
import { BookOpen, Users, Clock, GraduationCap } from 'lucide-react';

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
    if (grade.startsWith('A')) return 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-300';
    if (grade.startsWith('B')) return 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-300';
    if (grade.startsWith('C')) return 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border-yellow-300';
    return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border-gray-300';
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <GraduationCap className="text-hirtoli-green" size={24} />
          Course Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div key={index} className="border-2 border-gray-200/50 rounded-xl p-6 bg-gradient-to-r from-white/80 to-gray-50/80 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{course.name}</h4>
                  <p className="text-sm text-gray-600 font-medium">{course.code}</p>
                </div>
                <Badge className={`${getGradeColor(course.grade)} border font-bold text-lg px-3 py-1`}>
                  {course.grade}
                </Badge>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold text-gray-700">Progress</span>
                  <span className="font-bold text-hirtoli-green text-lg">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-3 rounded-full" />
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Users size={16} className="text-hirtoli-green" />
                  <span className="font-medium">{course.instructor}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock size={16} className="text-hirtoli-green" />
                  <span className="font-medium">{course.nextClass}</span>
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

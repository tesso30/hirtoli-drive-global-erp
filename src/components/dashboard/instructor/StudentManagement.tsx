
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Progress } from '../../ui/progress';
import { User, Phone, Mail, Calendar } from 'lucide-react';

const StudentManagement = () => {
  const students = [
    {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex@example.com',
      phone: '+251-911-123456',
      progress: 75,
      nextLesson: '2024-01-20 10:00',
      status: 'active',
      course: 'Basic Driving Course',
      lessonsCompleted: 18,
      totalLessons: 24
    },
    {
      id: 2,
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      phone: '+251-911-234567',
      progress: 30,
      nextLesson: '2024-01-22 14:00',
      status: 'active',
      course: 'Commercial License',
      lessonsCompleted: 8,
      totalLessons: 32
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael@example.com',
      phone: '+251-911-345678',
      progress: 50,
      nextLesson: '2024-01-24 16:00',
      status: 'paused',
      course: 'Advanced Driving',
      lessonsCompleted: 12,
      totalLessons: 20
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <User className="text-hirtoli-green" size={20} />
            My Students
          </span>
          <Button size="sm">Add Student</Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {students.map(student => (
            <div key={student.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium">{student.name}</h4>
                  <p className="text-sm text-gray-600">{student.course}</p>
                  <Badge className={getStatusColor(student.status)} size="sm">
                    {student.status}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{student.progress}%</div>
                  <div className="text-xs text-gray-600">progress</div>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Lessons Progress</span>
                  <span>{student.lessonsCompleted}/{student.totalLessons}</span>
                </div>
                <Progress value={student.progress} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-2">
                  <Mail size={14} />
                  {student.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} />
                  {student.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  Next: {new Date(student.nextLesson).toLocaleString()}
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline">View Profile</Button>
                <Button size="sm" variant="outline">Update Progress</Button>
                <Button size="sm" variant="outline">Schedule Lesson</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentManagement;

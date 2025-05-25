
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { CheckCircle, Circle, Clock, Calendar, Car, BookOpen } from 'lucide-react';

const CourseProgress = () => {
  const courseData = {
    courseName: 'Basic Driving Course',
    totalLessons: 20,
    completedLessons: 12,
    practicalHours: 15,
    completedPracticalHours: 8,
    theoryProgress: 75,
    practicalProgress: 53,
    nextLesson: {
      type: 'Practical',
      topic: 'Highway Driving',
      date: '2024-01-20',
      time: '10:00 AM',
      instructor: 'Bekele Teferi'
    }
  };

  const lessons = [
    { id: 1, title: 'Traffic Rules and Regulations', type: 'Theory', completed: true },
    { id: 2, title: 'Vehicle Controls and Safety', type: 'Theory', completed: true },
    { id: 3, title: 'Basic Vehicle Operation', type: 'Practical', completed: true },
    { id: 4, title: 'Parking Techniques', type: 'Practical', completed: true },
    { id: 5, title: 'City Driving', type: 'Practical', completed: true },
    { id: 6, title: 'Defensive Driving', type: 'Theory', completed: false, current: true },
    { id: 7, title: 'Highway Driving', type: 'Practical', completed: false },
    { id: 8, title: 'Night Driving', type: 'Practical', completed: false },
    { id: 9, title: 'Emergency Procedures', type: 'Theory', completed: false },
    { id: 10, title: 'Final Test Preparation', type: 'Theory', completed: false }
  ];

  const overallProgress = Math.round(
    ((courseData.completedLessons / courseData.totalLessons) * 100)
  );

  return (
    <div className="space-y-6">
      {/* Overall Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="text-hirtoli-green" size={20} />
            Course Progress Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Overall Progress</span>
                <span className="text-2xl font-bold text-hirtoli-green">{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="h-3" />
              <p className="text-sm text-gray-600 mt-2">
                {courseData.completedLessons} of {courseData.totalLessons} lessons completed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Theory Progress</span>
                  <span className="font-bold text-blue-600">{courseData.theoryProgress}%</span>
                </div>
                <Progress value={courseData.theoryProgress} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Practical Progress</span>
                  <span className="font-bold text-orange-600">{courseData.practicalProgress}%</span>
                </div>
                <Progress value={courseData.practicalProgress} className="h-2" />
                <p className="text-xs text-gray-600 mt-1">
                  {courseData.completedPracticalHours}/{courseData.practicalHours} hours completed
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Lesson */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="text-hirtoli-red" size={20} />
            Next Lesson
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-hirtoli-green/10 to-hirtoli-red/10 p-4 rounded-lg">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-lg">{courseData.nextLesson.topic}</h3>
                <Badge className={`mt-1 ${
                  courseData.nextLesson.type === 'Practical' 
                    ? 'bg-orange-100 text-orange-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {courseData.nextLesson.type} Lesson
                </Badge>
              </div>
              <Car className="text-hirtoli-green" size={24} />
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-500" />
                <span>{new Date(courseData.nextLesson.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gray-500" />
                <span>{courseData.nextLesson.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={16} className="text-gray-500" />
                <span>Instructor: {courseData.nextLesson.instructor}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button size="sm" className="bg-hirtoli-green hover:bg-hirtoli-green/90">
                Confirm Attendance
              </Button>
              <Button size="sm" variant="outline">
                Reschedule
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lesson List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="text-hirtoli-green" size={20} />
            Lesson Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {lessons.slice(0, 10).map((lesson) => (
              <div 
                key={lesson.id}
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  lesson.current ? 'bg-yellow-50 border-yellow-200' : 
                  lesson.completed ? 'bg-green-50 border-green-200' : 
                  'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  {lesson.completed ? (
                    <CheckCircle className="text-green-600" size={20} />
                  ) : lesson.current ? (
                    <Clock className="text-yellow-600" size={20} />
                  ) : (
                    <Circle className="text-gray-400" size={20} />
                  )}
                  
                  <div>
                    <h4 className={`font-medium ${lesson.current ? 'text-yellow-800' : lesson.completed ? 'text-green-800' : 'text-gray-600'}`}>
                      {lesson.title}
                    </h4>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        lesson.type === 'Practical' 
                          ? 'border-orange-300 text-orange-700' 
                          : 'border-blue-300 text-blue-700'
                      }`}
                    >
                      {lesson.type}
                    </Badge>
                  </div>
                </div>

                {lesson.current && (
                  <Badge className="bg-yellow-100 text-yellow-800">
                    Current
                  </Badge>
                )}
                {lesson.completed && (
                  <Badge className="bg-green-100 text-green-800">
                    Completed
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseProgress;

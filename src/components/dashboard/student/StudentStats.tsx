
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Progress } from '../../ui/progress';
import { Clock, CheckCircle, Calendar, Trophy } from 'lucide-react';

const StudentStats = () => {
  const stats = {
    totalLessons: 24,
    completedLessons: 18,
    upcomingLessons: 3,
    practiceHours: 45,
    theoryProgress: 85,
    practicalProgress: 75,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <CheckCircle className="text-green-600" size={16} />
            Completed Lessons
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.completedLessons}</div>
          <p className="text-xs text-muted-foreground">of {stats.totalLessons} total</p>
          <Progress value={(stats.completedLessons / stats.totalLessons) * 100} className="mt-2" />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Calendar className="text-blue-600" size={16} />
            Upcoming Lessons
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.upcomingLessons}</div>
          <p className="text-xs text-muted-foreground">next 7 days</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Clock className="text-orange-600" size={16} />
            Practice Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.practiceHours}</div>
          <p className="text-xs text-muted-foreground">total logged</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Trophy className="text-yellow-600" size={16} />
            Overall Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{Math.round((stats.theoryProgress + stats.practicalProgress) / 2)}%</div>
          <p className="text-xs text-muted-foreground">course completion</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentStats;

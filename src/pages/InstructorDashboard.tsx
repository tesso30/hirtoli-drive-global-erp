
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import StudentManagement from '../components/dashboard/instructor/StudentManagement';
import PerformanceMetrics from '../components/dashboard/instructor/PerformanceMetrics';
import { Calendar, User, Map, Settings, Clock } from 'lucide-react';

const InstructorDashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  // Mock data for demo
  const schedule = [
    { id: 1, time: '09:00 - 10:30', activity: 'Theory Class - Group A', date: '2023-05-22', type: 'theory' },
    { id: 2, time: '11:00 - 12:30', activity: 'Practical Training - Alex Johnson', date: '2023-05-22', type: 'practical' },
    { id: 3, time: '14:00 - 15:30', activity: 'Practical Training - Sarah Williams', date: '2023-05-22', type: 'practical' },
    { id: 4, time: '16:00 - 17:30', activity: 'Theory Class - Group B', date: '2023-05-22', type: 'theory' },
  ];

  return (
    <div className="container mx-auto p-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{t('dashboard.instructor')}</h1>
        <p className="text-gray-600">
          {t('dashboard.welcome')}, {user?.name}!
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <Map size={16} />
            {t('dashboard.overview')}
          </TabsTrigger>
          <TabsTrigger value="students" className="flex items-center gap-2">
            <User size={16} />
            Students
          </TabsTrigger>
          <TabsTrigger value="schedule" className="flex items-center gap-2">
            <Calendar size={16} />
            {t('dashboard.schedule')}
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex items-center gap-2">
            <Settings size={16} />
            Performance
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Today's Sessions</CardTitle>
                <CardDescription>Scheduled for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {schedule.filter(s => s.date === '2023-05-22').length}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active Students</CardTitle>
                <CardDescription>Currently enrolled</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Next Session</CardTitle>
                <CardDescription>Upcoming class</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center">
                <Clock className="mr-2" size={18} />
                <span className="text-sm">{schedule[0].time}</span>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>Your schedule for the day</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schedule.map(session => (
                  <div key={session.id} className="flex items-center p-3 border rounded-md">
                    <div className={`mr-4 p-2 rounded-full ${
                      session.type === 'theory' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      <Clock size={20} className={session.type === 'theory' ? 'text-blue-600' : 'text-green-600'} />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{session.activity}</div>
                      <div className="text-sm text-gray-600">{session.time}</div>
                    </div>
                    <Button size="sm" variant="outline">View Details</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Students Tab */}
        <TabsContent value="students">
          <StudentManagement />
        </TabsContent>

        {/* Schedule Tab */}
        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
              <CardDescription>Your complete schedule overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="font-medium mb-2 p-2 bg-gray-50 rounded">{day}</div>
                    <div className={`p-2 rounded-md min-h-32 ${
                      index === 0 ? 'bg-hirtoli-red bg-opacity-10 border border-hirtoli-red' : 'bg-gray-50'
                    }`}>
                      {index === 0 ? (
                        <div className="space-y-2">
                          {schedule.slice(0, 2).map(session => (
                            <div key={session.id} className="p-1 bg-white border rounded text-xs">
                              <div className="font-medium truncate">{session.activity.split(' - ')[0]}</div>
                              <div>{session.time.split(' - ')[0]}</div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="h-20 flex items-center justify-center text-gray-400 text-xs">
                          No sessions
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="outline">Export Schedule</Button>
                <Button>Update Availability</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Performance Tab */}
        <TabsContent value="performance">
          <PerformanceMetrics />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InstructorDashboard;

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import ModernSidebar from '../components/erp/shared/ModernSidebar';
import DashboardStats from '../components/erp/shared/DashboardStats';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import StudentManagement from '../components/dashboard/instructor/StudentManagement';
import PerformanceMetrics from '../components/dashboard/instructor/PerformanceMetrics';
import { Calendar, User, Map, Settings, Clock, Users, BookOpen, BarChart3 } from 'lucide-react';

const InstructorDashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  const instructorStats = [
    {
      title: "Today's Sessions",
      value: '4',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-500',
      change: 'Scheduled for today',
      changeType: 'neutral' as const
    },
    {
      title: 'Active Students',
      value: '12',
      icon: Users,
      color: 'text-hirtoli-green',
      bgColor: 'bg-green-500',
      change: 'Currently enrolled',
      changeType: 'neutral' as const
    },
    {
      title: 'Completed Sessions',
      value: '156',
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-500',
      change: 'This month',
      changeType: 'increase' as const
    },
    {
      title: 'Average Rating',
      value: '4.8',
      icon: BarChart3,
      color: 'text-orange-600',
      bgColor: 'bg-orange-500',
      change: 'From student feedback',
      changeType: 'increase' as const
    }
  ];

  // Mock data for demo
  const schedule = [
    { id: 1, time: '09:00 - 10:30', activity: 'Theory Class - Group A', date: '2023-05-22', type: 'theory' },
    { id: 2, time: '11:00 - 12:30', activity: 'Practical Training - Alex Johnson', date: '2023-05-22', type: 'practical' },
    { id: 3, time: '14:00 - 15:30', activity: 'Practical Training - Sarah Williams', date: '2023-05-22', type: 'practical' },
    { id: 4, time: '16:00 - 17:30', activity: 'Theory Class - Group B', date: '2023-05-22', type: 'theory' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-100">
      <ModernSidebar userRole="instructor" activePath="dashboard" />
      
      {/* Main Content */}
      <div className="ml-64 min-h-screen">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-40">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-purple-700 bg-clip-text text-transparent">
                  {t('dashboard.instructor')}
                </h1>
                <p className="text-gray-600 mt-1">{t('dashboard.welcome')}, {user?.name}!</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg text-gray-800">Next Session</p>
                <p className="text-purple-600 font-medium">{schedule[0]?.time || 'No sessions'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8 space-y-8">
          {/* Stats Cards */}
          <DashboardStats stats={instructorStats} />

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-white/70 backdrop-blur-sm">
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
            <TabsContent value="overview" className="space-y-6">
              <Card className="bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 shadow-xl">
                <CardHeader>
                  <CardTitle>Today's Schedule</CardTitle>
                  <CardDescription>Your schedule for the day</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {schedule.map(session => (
                      <div key={session.id} className="flex items-center p-4 border-2 border-gray-200/50 rounded-xl bg-gradient-to-r from-white/80 to-gray-50/80 hover:shadow-lg transition-all duration-300">
                        <div className={`mr-4 p-3 rounded-full ${
                          session.type === 'theory' ? 'bg-blue-100' : 'bg-green-100'
                        }`}>
                          <Clock size={20} className={session.type === 'theory' ? 'text-blue-600' : 'text-green-600'} />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-lg">{session.activity}</div>
                          <div className="text-sm text-gray-600 font-medium">{session.time}</div>
                        </div>
                        <Button size="sm" variant="outline" className="hover:bg-purple-50 hover:border-purple-300">View Details</Button>
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
              <Card className="bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 shadow-xl">
                <CardHeader>
                  <CardTitle>Weekly Schedule</CardTitle>
                  <CardDescription>Your complete schedule overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                      <div key={index} className="text-center">
                        <div className="font-semibold mb-2 p-3 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg">{day}</div>
                        <div className={`p-4 rounded-xl min-h-32 border-2 ${
                          index === 0 ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200' : 'bg-gray-50/70 border-gray-200/50'
                        }`}>
                          {index === 0 ? (
                            <div className="space-y-2">
                              {schedule.slice(0, 2).map(session => (
                                <div key={session.id} className="p-2 bg-white/80 border border-purple-200 rounded-lg text-xs">
                                  <div className="font-medium truncate">{session.activity.split(' - ')[0]}</div>
                                  <div className="text-purple-600">{session.time.split(' - ')[0]}</div>
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
                    <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">Update Availability</Button>
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
      </div>
    </div>
  );
};

export default InstructorDashboard;

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Calendar, Book, Settings, Map, Clock, DollarSign } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';

const StudentDashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  // Mock data for demo
  const enrolledCourses = [
    { id: 1, name: 'Basic Driving Course', progress: 60, nextClass: '2023-05-22 14:00' },
    { id: 2, name: 'Traffic Rules and Regulations', progress: 30, nextClass: '2023-05-24 10:00' },
  ];

  const payments = [
    { id: 1, date: '2023-05-01', amount: 2500, status: 'Paid', description: 'Course Registration' },
    { id: 2, date: '2023-05-15', amount: 1500, status: 'Pending', description: 'Practical Session Fee' },
  ];

  return (
    <div className="container mx-auto p-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{t('dashboard.student')}</h1>
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
          <TabsTrigger value="courses" className="flex items-center gap-2">
            <Book size={16} />
            {t('dashboard.courses')}
          </TabsTrigger>
          <TabsTrigger value="schedule" className="flex items-center gap-2">
            <Calendar size={16} />
            {t('dashboard.schedule')}
          </TabsTrigger>
          <TabsTrigger value="payments" className="flex items-center gap-2">
            <DollarSign size={16} />
            {t('dashboard.payments')}
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings size={16} />
            {t('dashboard.settings')}
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Enrolled Courses</CardTitle>
                <CardDescription>Your current courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{enrolledCourses.length}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Average Progress</CardTitle>
                <CardDescription>Across all courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {Math.round(enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length)}%
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Next Session</CardTitle>
                <CardDescription>Upcoming class</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center">
                <Clock className="mr-2" size={18} />
                <span>
                  {new Date(enrolledCourses[0].nextClass).toLocaleDateString()} at{' '}
                  {new Date(enrolledCourses[0].nextClass).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Progress</CardTitle>
            </CardHeader>
            <CardContent>
              {enrolledCourses.map(course => (
                <div key={course.id} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{course.name}</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-hirtoli-green h-2.5 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Courses Tab */}
        <TabsContent value="courses">
          <Card>
            <CardHeader>
              <CardTitle>Enrolled Courses</CardTitle>
              <CardDescription>Your current learning journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {enrolledCourses.map(course => (
                  <Card key={course.id}>
                    <CardHeader>
                      <CardTitle>{course.name}</CardTitle>
                      <CardDescription>Progress: {course.progress}%</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                        <div 
                          className="bg-hirtoli-green h-2.5 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between">
                        <span>Next class: {new Date(course.nextClass).toLocaleDateString()}</span>
                        <Button variant="outline">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Button>Browse More Courses</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Schedule Tab */}
        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Your Schedule</CardTitle>
              <CardDescription>Upcoming classes and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-semibold">Calendar View Coming Soon</h3>
                <p className="mt-1 text-sm text-gray-500">
                  This feature will be available in the next update.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payments Tab */}
        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Your recent transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 text-left">Date</th>
                      <th className="py-2 text-left">Description</th>
                      <th className="py-2 text-right">Amount</th>
                      <th className="py-2 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map(payment => (
                      <tr key={payment.id} className="border-b">
                        <td className="py-2">{payment.date}</td>
                        <td className="py-2">{payment.description}</td>
                        <td className="py-2 text-right">{payment.amount} ETB</td>
                        <td className="py-2 text-right">
                          <span 
                            className={`inline-block px-2 py-1 text-xs rounded-full ${
                              payment.status === 'Paid' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {payment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={user?.name || ''} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user?.email || ''} />
                </div>
                <div>
                  <Label htmlFor="branch">Branch</Label>
                  <Select defaultValue={user?.branch || ''}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('branch.select')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="addis-ababa">{t('branch.addisAbaba')}</SelectItem>
                      <SelectItem value="adama">{t('branch.adama')}</SelectItem>
                      <SelectItem value="bahir-dar">{t('branch.bahirDar')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentDashboard;

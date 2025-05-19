
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Calendar, User, Map, Settings, Check, Clock } from 'lucide-react';

const InstructorDashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  // Mock data for demo
  const assignedStudents = [
    { id: 1, name: 'Alex Johnson', progress: 75, nextClass: '2023-05-22 14:00' },
    { id: 2, name: 'Sarah Williams', progress: 30, nextClass: '2023-05-22 16:00' },
    { id: 3, name: 'Michael Brown', progress: 50, nextClass: '2023-05-23 10:00' },
    { id: 4, name: 'Emily Davis', progress: 90, nextClass: '2023-05-24 15:00' },
  ];

  const schedule = [
    { id: 1, time: '09:00 - 10:30', activity: 'Theory Class - Group A', date: '2023-05-22' },
    { id: 2, time: '11:00 - 12:30', activity: 'Practical Training - Alex Johnson', date: '2023-05-22' },
    { id: 3, time: '14:00 - 15:30', activity: 'Practical Training - Sarah Williams', date: '2023-05-22' },
    { id: 4, time: '16:00 - 17:30', activity: 'Theory Class - Group B', date: '2023-05-22' },
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
                <CardTitle className="text-lg">Assigned Students</CardTitle>
                <CardDescription>Current trainees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{assignedStudents.length}</div>
              </CardContent>
            </Card>
            
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
                <CardTitle className="text-lg">Next Session</CardTitle>
                <CardDescription>Upcoming class</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center">
                <Clock className="mr-2" size={18} />
                <span>{schedule[0].time} - {schedule[0].activity}</span>
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
                    <div className="mr-4 p-2 bg-gray-100 rounded-full">
                      <Clock size={20} className="text-hirtoli-red" />
                    </div>
                    <div>
                      <div className="font-medium">{session.activity}</div>
                      <div className="text-sm text-gray-600">{session.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Students Tab */}
        <TabsContent value="students">
          <Card>
            <CardHeader>
              <CardTitle>Assigned Students</CardTitle>
              <CardDescription>Students you are currently training</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignedStudents.map(student => (
                  <Card key={student.id}>
                    <CardHeader className="pb-2">
                      <CardTitle>{student.name}</CardTitle>
                      <CardDescription>Progress: {student.progress}%</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                        <div 
                          className="bg-hirtoli-green h-2.5 rounded-full" 
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between">
                        <span>Next session: {new Date(student.nextClass).toLocaleString()}</span>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm">Training Log</Button>
                          <Button size="sm">Update Progress</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {/* Days of the week */}
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="font-medium mb-2">{day}</div>
                    <div 
                      className={`p-2 rounded-md ${
                        index === 0 ? 'bg-hirtoli-red bg-opacity-10 border border-hirtoli-red' : 'bg-gray-50'
                      }`}
                    >
                      <div className="text-sm mb-2">{index === 0 ? 'May 22' : ''}</div>
                      {index === 0 ? (
                        <div className="space-y-2">
                          {schedule.map(session => (
                            <div key={session.id} className="p-1 bg-white border rounded text-xs">
                              <div className="font-medium">{session.activity.split(' - ')[0]}</div>
                              <div>{session.time}</div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="h-20 flex items-center justify-center text-gray-400">
                          No sessions
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <Button>Update Availability</Button>
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
                  <Label htmlFor="specialization">Specialization</Label>
                  <Select defaultValue="car">
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="car">Car Driving</SelectItem>
                      <SelectItem value="motorcycle">Motorcycle</SelectItem>
                      <SelectItem value="commercial">Commercial Vehicles</SelectItem>
                    </SelectContent>
                  </Select>
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

export default InstructorDashboard;

// Missing components
const Label = ({ htmlFor, children }: { htmlFor?: string; children: React.ReactNode }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
    {children}
  </label>
);

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

// Mock Select components
const Select = ({ children, defaultValue }: { children: React.ReactNode; defaultValue?: string }) => {
  return <div>{children}</div>;
};

const SelectTrigger = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
      {children}
    </div>
  );
};

const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  return <span className="text-muted-foreground">{placeholder}</span>;
};

const SelectContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="hidden">{children}</div>;
};

const SelectItem = ({ value, children }: { value: string; children: React.ReactNode }) => {
  return <div data-value={value}>{children}</div>;
};

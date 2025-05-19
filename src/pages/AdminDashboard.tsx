
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { User, Users, Settings, Book, DollarSign } from 'lucide-react';

const AdminDashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  // Mock data for demo
  const stats = {
    students: 120,
    instructors: 15,
    courses: 8,
    branches: 3,
    revenue: 450000,
  };

  const recentStudents = [
    { id: 1, name: 'Alex Johnson', email: 'alex@example.com', course: 'Basic Driving Course', branch: 'Addis Ababa', status: 'Active' },
    { id: 2, name: 'Sarah Williams', email: 'sarah@example.com', course: 'Commercial License', branch: 'Adama', status: 'Active' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', course: 'Advanced Driving', branch: 'Bahir Dar', status: 'Inactive' },
  ];

  const instructors = [
    { id: 1, name: 'David Smith', email: 'david@example.com', specialization: 'Car Driving', branch: 'Addis Ababa', students: 10 },
    { id: 2, name: 'Emily Davis', email: 'emily@example.com', specialization: 'Commercial Vehicles', branch: 'Addis Ababa', students: 8 },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', specialization: 'Motorcycle', branch: 'Adama', students: 5 },
  ];

  return (
    <div className="container mx-auto p-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{t('dashboard.admin')}</h1>
        <p className="text-gray-600">
          {t('dashboard.welcome')}, {user?.name}!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.students}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Instructors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.instructors}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.courses}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Branches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.branches}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Revenue (ETB)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.revenue.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="students" className="space-y-4">
        <TabsList>
          <TabsTrigger value="students" className="flex items-center gap-2">
            <User size={16} />
            Students
          </TabsTrigger>
          <TabsTrigger value="instructors" className="flex items-center gap-2">
            <Users size={16} />
            Instructors
          </TabsTrigger>
          <TabsTrigger value="courses" className="flex items-center gap-2">
            <Book size={16} />
            Courses
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex items-center gap-2">
            <DollarSign size={16} />
            Reports
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings size={16} />
            {t('dashboard.settings')}
          </TabsTrigger>
        </TabsList>

        {/* Students Tab */}
        <TabsContent value="students">
          <Card>
            <CardHeader>
              <CardTitle>Student Management</CardTitle>
              <CardDescription>View and manage student accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end mb-4">
                <Button>Add New Student</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left">Name</th>
                      <th className="py-3 text-left">Email</th>
                      <th className="py-3 text-left">Course</th>
                      <th className="py-3 text-left">Branch</th>
                      <th className="py-3 text-left">Status</th>
                      <th className="py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentStudents.map(student => (
                      <tr key={student.id} className="border-b">
                        <td className="py-3">{student.name}</td>
                        <td className="py-3">{student.email}</td>
                        <td className="py-3">{student.course}</td>
                        <td className="py-3">{student.branch}</td>
                        <td className="py-3">
                          <span 
                            className={`inline-block px-2 py-1 text-xs rounded-full ${
                              student.status === 'Active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {student.status}
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                          <Button variant="outline" size="sm" className="text-hirtoli-red">Delete</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-center">
                <Button variant="outline">View All Students</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Instructors Tab */}
        <TabsContent value="instructors">
          <Card>
            <CardHeader>
              <CardTitle>Instructor Management</CardTitle>
              <CardDescription>View and manage instructor accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end mb-4">
                <Button>Add New Instructor</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left">Name</th>
                      <th className="py-3 text-left">Email</th>
                      <th className="py-3 text-left">Specialization</th>
                      <th className="py-3 text-left">Branch</th>
                      <th className="py-3 text-left">Students</th>
                      <th className="py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {instructors.map(instructor => (
                      <tr key={instructor.id} className="border-b">
                        <td className="py-3">{instructor.name}</td>
                        <td className="py-3">{instructor.email}</td>
                        <td className="py-3">{instructor.specialization}</td>
                        <td className="py-3">{instructor.branch}</td>
                        <td className="py-3">{instructor.students}</td>
                        <td className="py-3 text-right">
                          <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                          <Button variant="outline" size="sm" className="text-hirtoli-red">Delete</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-center">
                <Button variant="outline">View All Instructors</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Courses Tab */}
        <TabsContent value="courses">
          <Card>
            <CardHeader>
              <CardTitle>Course Management</CardTitle>
              <CardDescription>Manage course offerings and curriculum</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Book className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-semibold">Course Management Coming Soon</h3>
                <p className="mt-1 text-sm text-gray-500">
                  This feature will be available in the next update.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Financial Reports</CardTitle>
              <CardDescription>View revenue and payment statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <DollarSign className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-semibold">Financial Reports Coming Soon</h3>
                <p className="mt-1 text-sm text-gray-500">
                  This feature will be available in the next update.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure system-wide settings and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input id="siteName" defaultValue="Hirtoli Driving School" />
                </div>
                
                <div>
                  <Label htmlFor="adminEmail">Admin Email</Label>
                  <Input id="adminEmail" type="email" defaultValue={user?.email || ''} />
                </div>
                
                <div>
                  <Label htmlFor="language">Default Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">{t('lang.english')}</SelectItem>
                      <SelectItem value="am">{t('lang.amharic')}</SelectItem>
                      <SelectItem value="om">{t('lang.oromo')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button>Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;

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

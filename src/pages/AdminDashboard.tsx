import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import ModernSidebar from '../components/erp/shared/ModernSidebar';
import DashboardStats from '../components/erp/shared/DashboardStats';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import SystemOverview from '../components/dashboard/admin/SystemOverview';
import { User, Users, Settings, Book, DollarSign, BarChart, Package, CheckCircle } from 'lucide-react';

const AdminDashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  const adminStats = [
    {
      title: 'Training Packages',
      value: '2',
      icon: Package,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-500',
      change: 'Active packages',
      changeType: 'neutral' as const
    },
    {
      title: 'Pending Enrollees',
      value: '2',
      icon: Users,
      color: 'text-gray-600',
      bgColor: 'bg-gray-500',
      change: 'Awaiting approval',
      changeType: 'neutral' as const
    },
    {
      title: 'Verified Enrollees',
      value: '1',
      icon: CheckCircle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-500',
      change: 'Active students',
      changeType: 'increase' as const
    },
    {
      title: 'In-Session',
      value: '1',
      icon: Book,
      color: 'text-orange-600',
      bgColor: 'bg-orange-500',
      change: 'Currently learning',
      changeType: 'neutral' as const
    }
  ];

  // Mock data for demo
  const recentStudents = [
    { id: 1, name: 'Alex Johnson', email: 'alex@example.com', course: 'Basic Driving Course', branch: 'Addis Ababa', status: 'Active', enrolled: '2024-01-15' },
    { id: 2, name: 'Sarah Williams', email: 'sarah@example.com', course: 'Commercial License', branch: 'Adama', status: 'Active', enrolled: '2024-01-14' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', course: 'Advanced Driving', branch: 'Bahir Dar', status: 'Inactive', enrolled: '2024-01-13' },
  ];

  const instructors = [
    { id: 1, name: 'David Smith', email: 'david@example.com', specialization: 'Car Driving', branch: 'Addis Ababa', students: 10, rating: 4.8 },
    { id: 2, name: 'Emily Davis', email: 'emily@example.com', specialization: 'Commercial Vehicles', branch: 'Addis Ababa', students: 8, rating: 4.9 },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', specialization: 'Motorcycle', branch: 'Adama', students: 5, rating: 4.7 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <ModernSidebar userRole="admin" activePath="dashboard" />
      
      {/* Main Content */}
      <div className="ml-64 min-h-screen">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-40">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Car Driving School Management System
                </h1>
                <p className="text-gray-600 mt-1">Administrator Panel - {user?.name}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg text-gray-800">System Status</p>
                <p className="text-green-600 font-medium">All Systems Online</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8 space-y-8">
          {/* Stats Cards */}
          <DashboardStats stats={adminStats} />

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-white/70 backdrop-blur-sm">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart size={16} />
                Overview
              </TabsTrigger>
              <TabsTrigger value="students" className="flex items-center gap-2">
                <User size={16} />
                Students
              </TabsTrigger>
              <TabsTrigger value="instructors" className="flex items-center gap-2">
                <Users size={16} />
                Instructors
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <DollarSign size={16} />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings size={16} />
                {t('dashboard.settings')}
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <SystemOverview />
            </TabsContent>

            {/* Students Tab */}
            <TabsContent value="students">
              <Card className="bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 shadow-xl">
                <CardHeader>
                  <CardTitle>Student Management</CardTitle>
                  <CardDescription>View and manage student accounts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Filter</Button>
                      <Button variant="outline" size="sm">Export</Button>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">Add New Student</Button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 text-left font-semibold">Name</th>
                          <th className="py-3 text-left font-semibold">Email</th>
                          <th className="py-3 text-left font-semibold">Course</th>
                          <th className="py-3 text-left font-semibold">Branch</th>
                          <th className="py-3 text-left font-semibold">Status</th>
                          <th className="py-3 text-left font-semibold">Enrolled</th>
                          <th className="py-3 text-right font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentStudents.map(student => (
                          <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 font-medium">{student.name}</td>
                            <td className="py-3">{student.email}</td>
                            <td className="py-3">{student.course}</td>
                            <td className="py-3">{student.branch}</td>
                            <td className="py-3">
                              <span 
                                className={`inline-block px-2 py-1 text-xs rounded-full ${
                                  student.status === 'Active' 
                                    ? 'bg-green-100 text-green-800 border border-green-200' 
                                    : 'bg-gray-100 text-gray-800 border border-gray-200'
                                }`}
                              >
                                {student.status}
                              </span>
                            </td>
                            <td className="py-3">{student.enrolled}</td>
                            <td className="py-3 text-right">
                              <div className="flex gap-1 justify-end">
                                <Button variant="ghost" size="sm">View</Button>
                                <Button variant="ghost" size="sm">Edit</Button>
                                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">Delete</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Instructors Tab */}
            <TabsContent value="instructors">
              <Card className="bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 shadow-xl">
                <CardHeader>
                  <CardTitle>Instructor Management</CardTitle>
                  <CardDescription>View and manage instructor accounts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Filter</Button>
                      <Button variant="outline" size="sm">Export</Button>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">Add New Instructor</Button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 text-left font-semibold">Name</th>
                          <th className="py-3 text-left font-semibold">Email</th>
                          <th className="py-3 text-left font-semibold">Specialization</th>
                          <th className="py-3 text-left font-semibold">Branch</th>
                          <th className="py-3 text-left font-semibold">Students</th>
                          <th className="py-3 text-left font-semibold">Rating</th>
                          <th className="py-3 text-right font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {instructors.map(instructor => (
                          <tr key={instructor.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 font-medium">{instructor.name}</td>
                            <td className="py-3">{instructor.email}</td>
                            <td className="py-3">{instructor.specialization}</td>
                            <td className="py-3">{instructor.branch}</td>
                            <td className="py-3">{instructor.students}</td>
                            <td className="py-3">
                              <div className="flex items-center gap-1">
                                <span>{instructor.rating}</span>
                                <span className="text-yellow-500">★</span>
                              </div>
                            </td>
                            <td className="py-3 text-right">
                              <div className="flex gap-1 justify-end">
                                <Button variant="ghost" size="sm">View</Button>
                                <Button variant="ghost" size="sm">Edit</Button>
                                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">Delete</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 shadow-xl">
                  <CardHeader>
                    <CardTitle>Revenue Analytics</CardTitle>
                    <CardDescription>Financial performance overview</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>This Month</span>
                        <span className="font-bold">1,020,000 ETB</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Last Month</span>
                        <span>940,000 ETB</span>
                      </div>
                      <div className="flex justify-between items-center text-green-600">
                        <span>Growth</span>
                        <span>+8.5%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 shadow-xl">
                  <CardHeader>
                    <CardTitle>Student Analytics</CardTitle>
                    <CardDescription>Enrollment and completion rates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>New Enrollments</span>
                        <span className="font-bold">45</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Course Completions</span>
                        <span>28</span>
                      </div>
                      <div className="flex justify-between items-center text-blue-600">
                        <span>Success Rate</span>
                        <span>92%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 shadow-xl">
                  <CardHeader>
                    <CardTitle>System Configuration</CardTitle>
                    <CardDescription>General system settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">School Name</label>
                      <input 
                        type="text" 
                        defaultValue="Hirtoli Driving School" 
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Contact Email</label>
                      <input 
                        type="email" 
                        defaultValue="admin@hirtoli.com" 
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">Save Settings</Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 shadow-xl">
                  <CardHeader>
                    <CardTitle>Course Configuration</CardTitle>
                    <CardDescription>Manage course settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Default Course Duration</label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option>4 weeks</option>
                        <option>6 weeks</option>
                        <option>8 weeks</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Theory Hours</label>
                      <input 
                        type="number" 
                        defaultValue="20" 
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">Update Configuration</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

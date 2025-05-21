
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, ResponsiveContainer, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell
} from 'recharts';
import {
  Users, DollarSign, Car, Calendar, 
  FileText, Briefcase, Settings, BarChart2,
  UserCheck, CreditCard, Truck, GraduationCap, BookOpen
} from 'lucide-react';
import { Button } from '../components/ui/button';

const ErpSystem = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data for charts and displays
  const revenueData = [
    { name: 'Jan', revenue: 45000 },
    { name: 'Feb', revenue: 52000 },
    { name: 'Mar', revenue: 48000 },
    { name: 'Apr', revenue: 61000 },
    { name: 'May', revenue: 55000 },
    { name: 'Jun', revenue: 67000 },
  ];

  const branchPerformanceData = [
    { name: t('branch.addisAbaba'), students: 120, revenue: 450000 },
    { name: t('branch.adama'), students: 85, revenue: 320000 },
    { name: t('branch.bahirDar'), students: 65, revenue: 250000 },
  ];

  const studentDistributionData = [
    { name: 'Beginner Course', value: 60 },
    { name: 'Advanced Course', value: 25 },
    { name: 'Commercial License', value: 15 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const upcomingClasses = [
    { id: 1, title: 'Basic Driving Theory', instructor: 'David Smith', time: '09:00 - 10:30', date: '2023-05-25', branch: t('branch.addisAbaba'), students: 12 },
    { id: 2, title: 'Commercial Vehicle Practice', instructor: 'Emily Davis', time: '11:00 - 13:00', date: '2023-05-25', branch: t('branch.addisAbaba'), students: 8 },
    { id: 3, title: 'Advanced Maneuvers', instructor: 'Robert Johnson', time: '14:00 - 16:00', date: '2023-05-25', branch: t('branch.adama'), students: 5 },
  ];

  const recentEnrollments = [
    { id: 1, name: 'Alex Johnson', course: 'Basic Driving Course', date: '2023-05-20', branch: t('branch.addisAbaba'), payment: 'Completed' },
    { id: 2, name: 'Sarah Williams', course: 'Commercial License', date: '2023-05-19', branch: t('branch.adama'), payment: 'Pending' },
    { id: 3, name: 'Michael Brown', course: 'Advanced Course', date: '2023-05-18', branch: t('branch.bahirDar'), payment: 'Completed' },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">{t('erp.dashboard.totalStudents')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="mr-2 text-hirtoli-green" />
              <div className="text-2xl font-bold">270</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">{t('erp.dashboard.activeInstructors')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <UserCheck className="mr-2 text-hirtoli-red" />
              <div className="text-2xl font-bold">15</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">2 new this month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">{t('erp.dashboard.vehicleFleet')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Car className="mr-2 text-blue-500" />
              <div className="text-2xl font-bold">22</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">3 in maintenance</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">{t('erp.dashboard.monthlyRevenue')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign className="mr-2 text-green-600" />
              <div className="text-2xl font-bold">1,020,000 ETB</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+8% from last month</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
            <CardDescription>Monthly revenue for the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Student Distribution</CardTitle>
            <CardDescription>Students by course type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={studentDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {studentDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Branch Performance */}
      <Card>
        <CardHeader>
          <CardTitle>{t('erp.dashboard.branchPerformance')}</CardTitle>
          <CardDescription>Performance metrics by branch</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={branchPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="students" fill="#8884d8" name="Students" />
                <Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" name="Revenue (ETB)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* Recent Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t('erp.dashboard.upcomingClasses')}</CardTitle>
            <CardDescription>Classes scheduled for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingClasses.map(cls => (
                <div key={cls.id} className="flex items-center p-3 border rounded-md">
                  <div className="mr-4 p-2 bg-gray-100 rounded-full">
                    <BookOpen className="h-5 w-5 text-hirtoli-red" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{cls.title}</div>
                    <div className="text-sm text-gray-600">
                      {cls.instructor} • {cls.time} • {cls.branch}
                    </div>
                  </div>
                  <div className="text-sm font-medium">
                    {cls.students} students
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">View Full Schedule</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{t('erp.dashboard.recentEnrollments')}</CardTitle>
            <CardDescription>New student enrollments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEnrollments.map(enrollment => (
                <div key={enrollment.id} className="flex items-center p-3 border rounded-md">
                  <div className="mr-4 p-2 bg-gray-100 rounded-full">
                    <GraduationCap className="h-5 w-5 text-hirtoli-green" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{enrollment.name}</div>
                    <div className="text-sm text-gray-600">
                      {enrollment.course} • {enrollment.branch}
                    </div>
                  </div>
                  <div>
                    <span 
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        enrollment.payment === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {enrollment.payment}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">View All Enrollments</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderPageContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle>{t(`erp.menu.${activeTab}`)}</CardTitle>
              <CardDescription>This module is coming soon</CardDescription>
            </CardHeader>
            <CardContent className="text-center py-12">
              <div className="mx-auto bg-gray-100 p-6 rounded-full inline-block mb-4">
                {activeTab === 'hr' && <Briefcase className="h-12 w-12 text-gray-400" />}
                {activeTab === 'finance' && <DollarSign className="h-12 w-12 text-gray-400" />}
                {activeTab === 'inventory' && <Car className="h-12 w-12 text-gray-400" />}
                {activeTab === 'students' && <Users className="h-12 w-12 text-gray-400" />}
                {activeTab === 'scheduling' && <Calendar className="h-12 w-12 text-gray-400" />}
                {activeTab === 'reports' && <FileText className="h-12 w-12 text-gray-400" />}
                {activeTab === 'settings' && <Settings className="h-12 w-12 text-gray-400" />}
              </div>
              <h3 className="text-lg font-semibold">{t(`erp.menu.${activeTab}`)} Module</h3>
              <p className="mt-2 text-gray-600">
                This functionality will be available in the next update. Our team is working on it!
              </p>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="container mx-auto p-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{t('erp.title')}</h1>
        <p className="text-gray-600">{t('erp.description')}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="bg-card border rounded-lg p-4 sticky top-4">
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  activeTab === 'dashboard' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                <BarChart2 size={16} />
                {t('erp.menu.dashboard')}
              </button>
              <button
                onClick={() => setActiveTab('hr')}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  activeTab === 'hr' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                <Briefcase size={16} />
                {t('erp.menu.hr')}
              </button>
              <button
                onClick={() => setActiveTab('finance')}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  activeTab === 'finance' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                <DollarSign size={16} />
                {t('erp.menu.finance')}
              </button>
              <button
                onClick={() => setActiveTab('inventory')}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  activeTab === 'inventory' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                <Car size={16} />
                {t('erp.menu.inventory')}
              </button>
              <button
                onClick={() => setActiveTab('students')}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  activeTab === 'students' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                <Users size={16} />
                {t('erp.menu.students')}
              </button>
              <button
                onClick={() => setActiveTab('scheduling')}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  activeTab === 'scheduling' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                <Calendar size={16} />
                {t('erp.menu.scheduling')}
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  activeTab === 'reports' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                <FileText size={16} />
                {t('erp.menu.reports')}
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  activeTab === 'settings' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                <Settings size={16} />
                {t('erp.menu.settings')}
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {renderPageContent()}
        </div>
      </div>
    </div>
  );
};

export default ErpSystem;

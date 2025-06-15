
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import ModernSidebar from '../components/erp/shared/ModernSidebar';
import DashboardStats from '../components/erp/shared/DashboardStats';
import AcademicOverview from '../components/erp/student/AcademicOverview';
import QuickActions from '../components/erp/student/QuickActions';
import UpcomingSchedule from '../components/erp/student/UpcomingSchedule';
import CourseProgress from '../components/erp/student/CourseProgress';
import AssignmentTracker from '../components/erp/student/AssignmentTracker';
import RecentActivity from '../components/erp/student/RecentActivity';
import { BookOpen, Calendar, Trophy, Clock, Users, CheckCircle } from 'lucide-react';

const StudentErpDashboard = () => {
  const { user } = useAuth();

  const studentStats = [
    {
      title: 'Current GPA',
      value: '3.87',
      icon: Trophy,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-500',
      change: '+0.12 from last semester',
      changeType: 'increase' as const
    },
    {
      title: 'Credits Completed',
      value: '78/120',
      icon: BookOpen,
      color: 'text-hirtoli-green',
      bgColor: 'bg-green-500',
      change: '65% complete',
      changeType: 'neutral' as const
    },
    {
      title: 'Active Courses',
      value: '6',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-500',
      change: 'This semester',
      changeType: 'neutral' as const
    },
    {
      title: 'Assignments Due',
      value: '3',
      icon: CheckCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-500',
      change: 'Next 7 days',
      changeType: 'neutral' as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <ModernSidebar userRole="student" activePath="dashboard" />
      
      {/* Main Content */}
      <div className="ml-64 min-h-screen">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-40">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-hirtoli-green to-green-600 bg-clip-text text-transparent">
                  Welcome back, {user?.name || 'Student'}!
                </h1>
                <p className="text-gray-600 mt-1">Academic Year 2024/25 • Semester 1</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg text-gray-800">Today's Date</p>
                <p className="text-gray-600">{new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8 space-y-8">
          {/* Stats Cards */}
          <DashboardStats stats={studentStats} />

          {/* Academic Overview */}
          <AcademicOverview />

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <CourseProgress />
              <AssignmentTracker />
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              <QuickActions />
              <UpcomingSchedule />
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentErpDashboard;

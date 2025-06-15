
import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import ModernSidebar from '../components/erp/shared/ModernSidebar';
import DashboardHeader from '../components/erp/student/DashboardHeader';
import AcademicOverview from '../components/erp/student/AcademicOverview';
import QuickActions from '../components/erp/student/QuickActions';
import UpcomingSchedule from '../components/erp/student/UpcomingSchedule';
import CourseProgress from '../components/erp/student/CourseProgress';
import RecentActivity from '../components/erp/student/RecentActivity';
import AssignmentTracker from '../components/erp/student/AssignmentTracker';

const StudentDashboard = () => {
  const { user, requireAuth, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      requireAuth();
    }
  }, [loading, requireAuth]);

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-hirtoli-green"></div>
      </div>
    );
  }

  // Don't render if no user (will redirect)
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-100">
      <ModernSidebar userRole="student" activePath="dashboard" />
      
      {/* Main Content */}
      <div className="ml-64 min-h-screen">
        <DashboardHeader />
        
        {/* Dashboard Content */}
        <div className="p-8 space-y-8">
          {/* Academic Overview Stats */}
          <AcademicOverview />

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <CourseProgress />
              <AssignmentTracker />
              <RecentActivity />
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              <QuickActions />
              <UpcomingSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

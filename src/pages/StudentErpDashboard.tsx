
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import DashboardHeader from '../components/erp/student/DashboardHeader';
import AcademicOverview from '../components/erp/student/AcademicOverview';
import QuickActions from '../components/erp/student/QuickActions';
import RecentActivity from '../components/erp/student/RecentActivity';
import UpcomingSchedule from '../components/erp/student/UpcomingSchedule';
import CourseProgress from '../components/erp/student/CourseProgress';
import AssignmentTracker from '../components/erp/student/AssignmentTracker';

const StudentErpDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <div className="container mx-auto px-4 py-6">
        {/* Academic Overview Stats */}
        <AcademicOverview />
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Left Column - Course Progress & Assignments */}
          <div className="lg:col-span-2 space-y-6">
            <CourseProgress />
            <AssignmentTracker />
          </div>
          
          {/* Right Column - Quick Actions & Schedule */}
          <div className="space-y-6">
            <QuickActions />
            <UpcomingSchedule />
          </div>
        </div>
        
        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </div>
  );
};

export default StudentErpDashboard;

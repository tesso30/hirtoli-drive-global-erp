
import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
          <div className="bg-red-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-red-900 mb-4">Welcome, {user.name}!</h2>
            <p className="text-red-700">
              This is your admin dashboard. Here you can manage the entire system, 
              monitor all activities, and configure system settings.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded border">
                <h3 className="font-semibold text-gray-900">Total Users</h3>
                <p className="text-2xl font-bold text-blue-600">1,247</p>
              </div>
              <div className="bg-white p-4 rounded border">
                <h3 className="font-semibold text-gray-900">Active Courses</h3>
                <p className="text-2xl font-bold text-green-600">89</p>
              </div>
              <div className="bg-white p-4 rounded border">
                <h3 className="font-semibold text-gray-900">Instructors</h3>
                <p className="text-2xl font-bold text-purple-600">34</p>
              </div>
              <div className="bg-white p-4 rounded border">
                <h3 className="font-semibold text-gray-900">Revenue</h3>
                <p className="text-2xl font-bold text-orange-600">$45,230</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

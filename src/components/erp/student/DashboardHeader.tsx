
import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Bell, Search, Settings, User } from 'lucide-react';

const DashboardHeader = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-gray-600">Academic Year 2024/25 • Semester 1</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search courses, assignments..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-hirtoli-green"
              />
            </div>
            
            <Button variant="outline" size="icon" className="relative">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-hirtoli-red text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            
            <Button variant="outline" size="icon">
              <Settings size={18} />
            </Button>
            
            <Button variant="outline" size="icon">
              <User size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

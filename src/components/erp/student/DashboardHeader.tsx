
import React from 'react';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Bell, Search, Settings, User, Calendar } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-hirtoli-green bg-clip-text text-transparent">
              Welcome back, Student!
            </h1>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={16} />
              <p>Academic Year 2024/25 • Semester 1</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-hirtoli-green transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search courses, assignments..."
                className="pl-10 pr-4 py-3 w-80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-hirtoli-green/20 focus:border-hirtoli-green transition-all bg-white/70 backdrop-blur-sm"
              />
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="relative hover:bg-hirtoli-green/10 hover:border-hirtoli-green transition-all duration-200 rounded-xl h-12 w-12"
            >
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-hirtoli-red to-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                3
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              className="hover:bg-hirtoli-green/10 hover:border-hirtoli-green transition-all duration-200 rounded-xl h-12 w-12"
            >
              <Settings size={20} />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              className="hover:bg-hirtoli-green/10 hover:border-hirtoli-green transition-all duration-200 rounded-xl h-12 w-12"
            >
              <User size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

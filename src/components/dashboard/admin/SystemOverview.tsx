
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Progress } from '../../ui/progress';
import { 
  Users, 
  DollarSign, 
  Car, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle 
} from 'lucide-react';

const SystemOverview = () => {
  const overview = {
    totalStudents: 270,
    activeStudents: 185,
    totalInstructors: 15,
    activeInstructors: 12,
    vehicleFleet: 22,
    vehiclesActive: 19,
    monthlyRevenue: 1020000,
    revenueGrowth: 8.5,
    systemHealth: 98,
    pendingIssues: 3
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="text-blue-500" size={16} />
              Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overview.totalStudents}</div>
            <div className="text-xs text-gray-600">{overview.activeStudents} active</div>
            <Progress value={(overview.activeStudents / overview.totalStudents) * 100} className="mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="text-green-500" size={16} />
              Instructors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overview.totalInstructors}</div>
            <div className="text-xs text-gray-600">{overview.activeInstructors} active</div>
            <Progress value={(overview.activeInstructors / overview.totalInstructors) * 100} className="mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Car className="text-orange-500" size={16} />
              Vehicle Fleet
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overview.vehicleFleet}</div>
            <div className="text-xs text-gray-600">{overview.vehiclesActive} operational</div>
            <Progress value={(overview.vehiclesActive / overview.vehicleFleet) * 100} className="mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="text-purple-500" size={16} />
              Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overview.monthlyRevenue.toLocaleString()} ETB</div>
            <div className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp size={12} />
              +{overview.revenueGrowth}% this month
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Overall System Status</span>
                  <span className="text-green-600">{overview.systemHealth}%</span>
                </div>
                <Progress value={overview.systemHealth} />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-lg font-bold text-green-600">99.9%</div>
                  <div className="text-xs text-green-600">Uptime</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">245ms</div>
                  <div className="text-xs text-blue-600">Avg Response</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="text-orange-500" size={20} />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                <div>
                  <div className="text-sm font-medium">Vehicle Maintenance Due</div>
                  <div className="text-xs text-gray-600">Toyota Corolla - License: ABC-123</div>
                </div>
                <div className="text-xs text-yellow-600">2 days</div>
              </div>
              
              <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                <div>
                  <div className="text-sm font-medium">Payment Overdue</div>
                  <div className="text-xs text-gray-600">3 students with pending payments</div>
                </div>
                <div className="text-xs text-red-600">5 days</div>
              </div>
              
              <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                <div>
                  <div className="text-sm font-medium">New Enrollments</div>
                  <div className="text-xs text-gray-600">15 applications pending review</div>
                </div>
                <div className="text-xs text-blue-600">Today</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SystemOverview;

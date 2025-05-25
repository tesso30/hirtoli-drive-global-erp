
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import CourseProgress from '../components/dashboard/CourseProgress';
import { Calendar, BookOpen, CreditCard, MessageSquare, User, Bell } from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useAuth();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
              <p className="text-gray-600">Track your progress and manage your driving course</p>
            </div>
            <Button className="bg-hirtoli-green hover:bg-hirtoli-green/90">
              <Bell size={16} className="mr-2" />
              Notifications
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Course Progress */}
          <div className="lg:col-span-2">
            <CourseProgress />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="text-hirtoli-green" size={20} />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar size={16} className="mr-2" />
                  Schedule Lesson
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CreditCard size={16} className="mr-2" />
                  Make Payment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare size={16} className="mr-2" />
                  Contact Instructor
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen size={16} className="mr-2" />
                  Study Materials
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Lessons */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="text-hirtoli-red" size={20} />
                  Upcoming Lessons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium">Defensive Driving</h4>
                    <p className="text-sm text-gray-600">Theory Class</p>
                    <p className="text-sm font-medium text-blue-600">Today, 2:00 PM</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-medium">Highway Driving</h4>
                    <p className="text-sm text-gray-600">Practical Session</p>
                    <p className="text-sm font-medium text-green-600">Jan 20, 10:00 AM</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <h4 className="font-medium">Night Driving</h4>
                    <p className="text-sm text-gray-600">Practical Session</p>
                    <p className="text-sm font-medium text-orange-600">Jan 22, 7:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="text-hirtoli-green" size={20} />
                  Payment Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Course Fee</span>
                    <span className="font-medium">8,500 ETB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Paid</span>
                    <span className="font-medium text-green-600">6,500 ETB</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-2">
                    <span className="font-medium">Balance</span>
                    <span className="font-bold text-red-600">2,000 ETB</span>
                  </div>
                  <Button className="w-full bg-hirtoli-red hover:bg-hirtoli-red/90 mt-3">
                    Pay Balance
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

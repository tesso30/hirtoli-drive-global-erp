
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { FileText, Calendar, AlertCircle, CheckCircle2 } from 'lucide-react';

const AssignmentTracker = () => {
  const assignments = [
    {
      title: 'Calculus Problem Set #5',
      course: 'MATH 301',
      dueDate: 'Today, 11:59 PM',
      status: 'pending',
      priority: 'high',
      progress: 60
    },
    {
      title: 'Physics Lab Report',
      course: 'PHYS 205',
      dueDate: 'Tomorrow, 2:00 PM',
      status: 'in-progress',
      priority: 'medium',
      progress: 30
    },
    {
      title: 'Programming Assignment',
      course: 'CS 401',
      dueDate: 'Jan 25, 11:59 PM',
      status: 'not-started',
      priority: 'low',
      progress: 0
    },
    {
      title: 'Literature Essay',
      course: 'ENG 102',
      dueDate: 'Jan 28, 5:00 PM',
      status: 'submitted',
      priority: 'medium',
      progress: 100
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-300';
      case 'in-progress': return 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-300';
      case 'pending': return 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border-yellow-300';
      case 'not-started': return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border-gray-300';
      default: return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-hirtoli-green';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <CheckCircle2 className="text-hirtoli-green" size={24} />
          Assignment Tracker
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {assignments.map((assignment, index) => (
            <div key={index} className="border-2 border-gray-200/50 rounded-xl p-6 bg-gradient-to-r from-white/80 to-gray-50/80 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900 mb-1">{assignment.title}</h4>
                  <p className="text-sm text-gray-600 font-medium">{assignment.course}</p>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className={getPriorityColor(assignment.priority)} size={18} />
                  <Badge className={`${getStatusColor(assignment.status)} border font-semibold`}>
                    {assignment.status.replace('-', ' ')}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm mb-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar size={16} className="text-hirtoli-green" />
                  <span className="font-medium">Due: {assignment.dueDate}</span>
                </div>
                <span className="font-bold text-hirtoli-green">Progress: {assignment.progress}%</span>
              </div>
              
              <div className="flex gap-3">
                {assignment.status !== 'submitted' && (
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-hirtoli-green to-green-600 hover:from-green-600 hover:to-hirtoli-green transition-all duration-200"
                  >
                    {assignment.status === 'not-started' ? 'Start' : 'Continue'}
                  </Button>
                )}
                <Button size="sm" variant="outline" className="hover:bg-gray-50 transition-all duration-200">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AssignmentTracker;

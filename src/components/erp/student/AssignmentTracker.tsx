
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { FileText, Calendar, AlertCircle } from 'lucide-react';

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
      case 'submitted': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'not-started': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <FileText className="text-hirtoli-green" size={20} />
          Assignment Tracker
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {assignments.map((assignment, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{assignment.title}</h4>
                  <p className="text-sm text-gray-600">{assignment.course}</p>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className={getPriorityColor(assignment.priority)} size={16} />
                  <Badge className={getStatusColor(assignment.status)}>
                    {assignment.status.replace('-', ' ')}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  Due: {assignment.dueDate}
                </div>
                <span>Progress: {assignment.progress}%</span>
              </div>
              
              <div className="flex gap-2">
                {assignment.status !== 'submitted' && (
                  <Button size="sm" variant="outline">
                    {assignment.status === 'not-started' ? 'Start' : 'Continue'}
                  </Button>
                )}
                <Button size="sm" variant="outline">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AssignmentTracker;

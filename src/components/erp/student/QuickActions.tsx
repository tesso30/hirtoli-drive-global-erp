
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { BookOpen, Calendar, CreditCard, FileText, MessageSquare, User } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { icon: Calendar, label: 'View Schedule', color: 'text-blue-600' },
    { icon: BookOpen, label: 'Course Materials', color: 'text-green-600' },
    { icon: FileText, label: 'Submit Assignment', color: 'text-orange-600' },
    { icon: CreditCard, label: 'Pay Fees', color: 'text-red-600' },
    { icon: MessageSquare, label: 'Contact Advisor', color: 'text-purple-600' },
    { icon: User, label: 'Update Profile', color: 'text-gray-600' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-gray-50"
            >
              <action.icon className={action.color} size={20} />
              <span className="text-xs text-center">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;

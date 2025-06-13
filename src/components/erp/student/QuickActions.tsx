
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { BookOpen, Calendar, CreditCard, FileText, MessageSquare, User, Zap } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { icon: Calendar, label: 'View Schedule', color: 'text-blue-600', bgColor: 'hover:bg-blue-50' },
    { icon: BookOpen, label: 'Course Materials', color: 'text-hirtoli-green', bgColor: 'hover:bg-green-50' },
    { icon: FileText, label: 'Submit Assignment', color: 'text-orange-600', bgColor: 'hover:bg-orange-50' },
    { icon: CreditCard, label: 'Pay Fees', color: 'text-red-600', bgColor: 'hover:bg-red-50' },
    { icon: MessageSquare, label: 'Contact Advisor', color: 'text-purple-600', bgColor: 'hover:bg-purple-50' },
    { icon: User, label: 'Update Profile', color: 'text-gray-600', bgColor: 'hover:bg-gray-50' }
  ];

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Zap className="text-hirtoli-green" size={24} />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className={`h-auto p-4 flex flex-col items-center gap-3 ${action.bgColor} hover:border-gray-300 transition-all duration-200 transform hover:scale-105 rounded-xl`}
            >
              <action.icon className={action.color} size={24} />
              <span className="text-sm text-center font-medium">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;

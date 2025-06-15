
import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { LucideIcon } from 'lucide-react';

interface StatCard {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  change?: string;
  changeType?: 'increase' | 'decrease' | 'neutral';
}

interface DashboardStatsProps {
  stats: StatCard[];
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className={`absolute inset-0 ${stat.bgColor} opacity-10`} />
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                {stat.change && (
                  <p className={`text-xs mt-2 flex items-center ${
                    stat.changeType === 'increase' ? 'text-green-600' : 
                    stat.changeType === 'decrease' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {stat.change}
                  </p>
                )}
              </div>
              <div className={`p-4 rounded-2xl ${stat.bgColor} shadow-lg`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Progress } from '../../ui/progress';
import { Star, Clock, Users, Award } from 'lucide-react';

const PerformanceMetrics = () => {
  const metrics = {
    rating: 4.8,
    totalRatings: 127,
    hoursThisMonth: 85,
    hoursTarget: 100,
    studentsActive: 12,
    studentsCompleted: 45,
    passRate: 92,
    certifications: ['Defensive Driving', 'Commercial Vehicle', 'Traffic Safety']
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="text-yellow-500" size={20} />
            Performance Ratings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Overall Rating</span>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star
                      key={star}
                      size={16}
                      className={star <= metrics.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="font-medium">{metrics.rating}</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Based on {metrics.totalRatings} student reviews
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Student Satisfaction</span>
                <span>95%</span>
              </div>
              <Progress value={95} />
              
              <div className="flex justify-between text-sm">
                <span>Pass Rate</span>
                <span>{metrics.passRate}%</span>
              </div>
              <Progress value={metrics.passRate} />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="text-blue-500" size={20} />
            Monthly Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Teaching Hours</span>
                <span>{metrics.hoursThisMonth}/{metrics.hoursTarget} hrs</span>
              </div>
              <Progress value={(metrics.hoursThisMonth / metrics.hoursTarget) * 100} />
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{metrics.studentsActive}</div>
                <div className="text-xs text-blue-600">Active Students</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{metrics.studentsCompleted}</div>
                <div className="text-xs text-green-600">Completed</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Award size={16} />
                Certifications
              </h4>
              <div className="flex flex-wrap gap-1">
                {metrics.certifications.map(cert => (
                  <span key={cert} className="px-2 py-1 bg-gray-100 text-xs rounded">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceMetrics;

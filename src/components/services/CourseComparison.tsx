
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Clock, Users, Award, Target } from 'lucide-react';

const CourseComparison: React.FC = () => {
  const { t } = useLanguage();

  const courseCategories = [
    {
      id: 'beginner',
      name: t('services.course_comparison.beginner_category'),
      description: t('services.course_comparison.beginner_desc'),
      courses: [
        {
          name: 'Complete Beginner Course',
          duration: '6-8 weeks',
          price: '7,500 ETB',
          level: 'Beginner',
          classSize: 'Max 4 students',
          highlights: ['Zero experience required', 'Comprehensive training', 'Test preparation included']
        },
        {
          name: 'Quick Start Course',
          duration: '3-4 weeks',
          price: '4,500 ETB',
          level: 'Beginner',
          classSize: 'Max 6 students',
          highlights: ['Accelerated learning', 'Basic skills focus', 'Budget-friendly']
        }
      ]
    },
    {
      id: 'intermediate',
      name: t('services.course_comparison.intermediate_category'),
      description: t('services.course_comparison.intermediate_desc'),
      courses: [
        {
          name: 'Skill Enhancement Course',
          duration: '2-3 weeks',
          price: '3,500 ETB',
          level: 'Intermediate',
          classSize: 'Max 6 students',
          highlights: ['Build confidence', 'Advanced techniques', 'Personalized feedback']
        },
        {
          name: 'Refresher Course',
          duration: '1-2 weeks',
          price: '2,500 ETB',
          level: 'Intermediate',
          classSize: 'Max 8 students',
          highlights: ['Quick refresher', 'Rule updates', 'Confidence building']
        }
      ]
    },
    {
      id: 'advanced',
      name: t('services.course_comparison.advanced_category'),
      description: t('services.course_comparison.advanced_desc'),
      courses: [
        {
          name: 'Commercial License Training',
          duration: '8-12 weeks',
          price: '12,000 ETB',
          level: 'Professional',
          classSize: 'Max 4 students',
          highlights: ['Heavy vehicle training', 'Commercial regulations', 'Career preparation']
        },
        {
          name: 'Defensive Driving Course',
          duration: '1-2 weeks',
          price: '3,500 ETB',
          level: 'Advanced',
          classSize: 'Max 6 students',
          highlights: ['Safety focus', 'Risk reduction', 'Advanced techniques']
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('services.course_comparison.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('services.course_comparison.subtitle')}
          </p>
        </div>

        <Tabs defaultValue="beginner" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {courseCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {courseCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.courses.map((course, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{course.name}</CardTitle>
                        <Badge variant="outline">{course.level}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-hirtoli-green mr-2" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-hirtoli-green mr-2" />
                          {course.classSize}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex items-center mb-3">
                          <Award className="w-5 h-5 text-hirtoli-red mr-2" />
                          <span className="text-xl font-bold text-hirtoli-red">{course.price}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2 flex items-center">
                          <Target className="w-4 h-4 text-hirtoli-black mr-2" />
                          {t('services.course_comparison.highlights')}
                        </h4>
                        <ul className="space-y-1">
                          {course.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-hirtoli-green rounded-full mr-2"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CourseComparison;

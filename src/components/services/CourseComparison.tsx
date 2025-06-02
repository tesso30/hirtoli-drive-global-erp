
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
          name: t('courses.detailed.beginner.title'),
          duration: t('courses.detailed.beginner.duration'),
          price: t('courses.detailed.beginner.price'),
          level: t('courses.detailed.beginner.level'),
          classSize: t('courses.detailed.beginner.class_size'),
          highlights: [t('enrollment.features.instant'), t('enrollment.features.digital'), t('enrollment.features.payment')]
        },
        {
          name: t('services.quick_start_title'),
          duration: t('services.quick_start_duration'),
          price: t('services.quick_start_price'),
          level: t('courses.detailed.beginner.level'),
          classSize: t('services.quick_start_class_size'),
          highlights: [t('services.quick_start_highlight1'), t('services.quick_start_highlight2'), t('services.quick_start_highlight3')]
        }
      ]
    },
    {
      id: 'intermediate',
      name: t('services.course_comparison.intermediate_category'),
      description: t('services.course_comparison.intermediate_desc'),
      courses: [
        {
          name: t('services.skill_enhancement_title'),
          duration: t('services.skill_enhancement_duration'),
          price: t('services.skill_enhancement_price'),
          level: t('services.intermediate_level'),
          classSize: t('services.skill_enhancement_class_size'),
          highlights: [t('services.skill_enhancement_highlight1'), t('services.skill_enhancement_highlight2'), t('services.skill_enhancement_highlight3')]
        },
        {
          name: t('services.refresher_title'),
          duration: t('services.refresher_duration'),
          price: t('services.refresher_price'),
          level: t('services.intermediate_level'),
          classSize: t('services.refresher_class_size'),
          highlights: [t('services.refresher_highlight1'), t('services.refresher_highlight2'), t('services.refresher_highlight3')]
        }
      ]
    },
    {
      id: 'advanced',
      name: t('services.course_comparison.advanced_category'),
      description: t('services.course_comparison.advanced_desc'),
      courses: [
        {
          name: t('courses.detailed.commercial.title'),
          duration: t('courses.detailed.commercial.duration'),
          price: t('courses.detailed.commercial.price'),
          level: t('courses.detailed.commercial.level'),
          classSize: t('courses.detailed.commercial.class_size'),
          highlights: [t('services.commercial_highlight1'), t('services.commercial_highlight2'), t('services.commercial_highlight3')]
        },
        {
          name: t('courses.detailed.advanced.title'),
          duration: t('courses.detailed.advanced.duration'),
          price: t('courses.detailed.advanced.price'),
          level: t('courses.detailed.advanced.level'),
          classSize: t('courses.detailed.advanced.class_size'),
          highlights: [t('services.defensive_highlight1'), t('services.defensive_highlight2'), t('services.defensive_highlight3')]
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

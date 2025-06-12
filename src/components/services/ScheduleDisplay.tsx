
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Clock, User, MapPin, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

interface ScheduleSlot {
  time: string;
  instructor: string;
  type: 'theory' | 'practical';
  available: boolean;
  location: string;
}

interface DaySchedule {
  day: string;
  date: string;
  slots: ScheduleSlot[];
}

const ScheduleDisplay: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [selectedSlot, setSelectedSlot] = useState<{ day: string; time: string } | null>(null);

  const weeklySchedule: DaySchedule[] = [
    {
      day: 'Monday',
      date: 'Dec 2',
      slots: [
        { time: '9:00 AM', instructor: 'Ato Kebede', type: 'theory', available: true, location: 'Room A' },
        { time: '11:00 AM', instructor: 'W/ro Almaz', type: 'practical', available: true, location: 'Main Course' },
        { time: '2:00 PM', instructor: 'Ato Tesfaye', type: 'practical', available: false, location: 'Main Course' },
        { time: '4:00 PM', instructor: 'W/ro Meron', type: 'theory', available: true, location: 'Room B' }
      ]
    },
    {
      day: 'Tuesday',
      date: 'Dec 3',
      slots: [
        { time: '8:00 AM', instructor: 'Ato Dawit', type: 'practical', available: true, location: 'Practice Area' },
        { time: '10:00 AM', instructor: 'W/ro Sara', type: 'theory', available: true, location: 'Room A' },
        { time: '1:00 PM', instructor: 'Ato Berhanu', type: 'practical', available: true, location: 'Main Course' },
        { time: '3:00 PM', instructor: 'W/ro Almaz', type: 'practical', available: false, location: 'Main Course' }
      ]
    },
    {
      day: 'Wednesday',
      date: 'Dec 4',
      slots: [
        { time: '9:00 AM', instructor: 'Ato Kebede', type: 'theory', available: true, location: 'Room B' },
        { time: '11:00 AM', instructor: 'W/ro Meron', type: 'practical', available: true, location: 'Practice Area' },
        { time: '2:00 PM', instructor: 'Ato Tesfaye', type: 'theory', available: true, location: 'Room A' },
        { time: '4:00 PM', instructor: 'Ato Dawit', type: 'practical', available: true, location: 'Main Course' }
      ]
    }
  ];

  const instructors = [
    {
      name: 'Ato Kebede Worku',
      speciality: 'Theory & Advanced Driving',
      experience: '8 years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'W/ro Almaz Tadesse',
      speciality: 'Beginner Training',
      experience: '6 years',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b2ab?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Ato Tesfaye Bekele',
      speciality: 'Commercial License',
      experience: '12 years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'W/ro Meron Haile',
      speciality: 'Defensive Driving',
      experience: '5 years',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const handleSlotSelect = (day: string, time: string) => {
    setSelectedSlot({ day, time });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('services.schedule_title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('services.schedule_subtitle')}
          </p>
        </div>

        <Tabs defaultValue="schedule" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="schedule">{t('services.weekly_schedule')}</TabsTrigger>
            <TabsTrigger value="instructors">{t('services.our_instructors')}</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {weeklySchedule.map((daySchedule) => (
                <Card key={daySchedule.day}>
                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center gap-2">
                      <Calendar className="w-5 h-5 text-hirtoli-red" />
                      {daySchedule.day}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{daySchedule.date}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {daySchedule.slots.map((slot, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                            slot.available
                              ? selectedSlot?.day === daySchedule.day && selectedSlot?.time === slot.time
                                ? 'bg-hirtoli-red bg-opacity-10 border-hirtoli-red'
                                : 'hover:bg-gray-50 border-gray-200'
                              : 'bg-gray-100 border-gray-200 cursor-not-allowed opacity-60'
                          }`}
                          onClick={() => slot.available && handleSlotSelect(daySchedule.day, slot.time)}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-hirtoli-green" />
                              <span className="font-medium">{slot.time}</span>
                            </div>
                            <Badge variant={slot.type === 'theory' ? 'secondary' : 'outline'}>
                              {t(`services.${slot.type}`)}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <div className="flex items-center gap-2">
                              <User className="w-3 h-3" />
                              {slot.instructor}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-3 h-3" />
                              {slot.location}
                            </div>
                          </div>
                          {!slot.available && (
                            <p className="text-xs text-red-500 mt-1">{t('services.fully_booked')}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {selectedSlot && (
              <div className="mt-8 p-6 bg-hirtoli-green bg-opacity-10 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">{t('services.selected_time_slot')}</h3>
                <p className="text-gray-600 mb-4">
                  {selectedSlot.day} at {selectedSlot.time}
                </p>
                <Button onClick={() => navigate('/register')} className="bg-hirtoli-red hover:bg-hirtoli-red/90">
                  {t('services.book_this_slot')}
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="instructors">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {instructors.map((instructor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold mb-1">{instructor.name}</h3>
                        <p className="text-hirtoli-red font-medium mb-2">{instructor.speciality}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{instructor.experience} {t('services.experience')}</span>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">★</span>
                            <span>{instructor.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button onClick={() => navigate('/register')} size="lg">
                {t('services.request_specific_instructor')}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ScheduleDisplay;

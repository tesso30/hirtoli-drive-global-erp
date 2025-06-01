
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Star, GraduationCap, MapPin, Quote, Heart, ThumbsUp, Award } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Abebe Kebede",
      role: "Student Driver",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      quote: "Hirtoli Driving School transformed me from a nervous beginner to a confident driver in just 4 weeks. The instructors were patient and professional. I passed my test on the first try!",
      rating: 5,
      course: "Complete Beginner Course",
      location: "Addis Ababa Branch",
      date: "2 months ago",
      highlight: "First-time pass"
    },
    {
      name: "Tigist Hailu",
      role: "Commercial License Holder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      quote: "The commercial license training at Hirtoli was comprehensive and practical. I now drive professionally with skills that keep me and others safe. The job placement support was excellent!",
      rating: 5,
      course: "Commercial License Training",
      location: "Adama Branch",
      date: "1 month ago",
      highlight: "Job placement success"
    },
    {
      name: "Dawit Mekonen",
      role: "Private Driver",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      quote: "After a long break from driving, the refresher course was exactly what I needed. The instructors helped me overcome my anxiety and build my confidence. Highly recommended!",
      rating: 4,
      course: "Advanced Defensive Driving",
      location: "Bahir Dar Branch",
      date: "3 weeks ago",
      highlight: "Anxiety overcome"
    },
    {
      name: "Hiwot Alemseged",
      role: "New Graduate",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      quote: "I was terrified of driving, but W/t Meron made me feel so comfortable. The flexible scheduling allowed me to learn at my own pace. Now I drive to work every day with complete confidence!",
      rating: 5,
      course: "Complete Beginner Course",
      location: "Addis Ababa Branch",
      date: "2 weeks ago",
      highlight: "Fear conquered"
    },
    {
      name: "Solomon Tesfaye",
      role: "Taxi Driver",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
      quote: "The commercial training prepared me for real-world driving challenges. I got my license and started earning immediately after graduation. The investment paid off quickly!",
      rating: 5,
      course: "Commercial License Training",
      location: "Adama Branch",
      date: "6 weeks ago",
      highlight: "Career success"
    },
    {
      name: "Rahel Girma",
      role: "Office Worker",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3",
      quote: "Flexible scheduling allowed me to learn while working full-time. The online theory classes were very convenient and well-structured. Perfect for busy professionals!",
      rating: 4,
      course: "Complete Beginner Course",
      location: "Bahir Dar Branch",
      date: "1 month ago",
      highlight: "Work-life balance"
    },
    {
      name: "Yohannes Tadesse",
      role: "Delivery Driver",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      quote: "The defensive driving course made me a much safer driver. I've been accident-free for over a year now. The techniques I learned have been invaluable for my delivery job.",
      rating: 5,
      course: "Advanced Defensive Driving",
      location: "Chiro Branch",
      date: "3 months ago",
      highlight: "Safety expert"
    },
    {
      name: "Almaz Bekele",
      role: "Working Mother",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      quote: "As a mother of two, having flexible weekend classes was crucial. The instructors were understanding of my schedule constraints. Now I can drive my kids to school safely!",
      rating: 5,
      course: "Complete Beginner Course",
      location: "Harar Branch",
      date: "5 weeks ago",
      highlight: "Family convenience"
    },
    {
      name: "Getachew Wolde",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      quote: "The quality of instruction exceeded my expectations. Modern vehicles with latest safety features made learning comfortable. Worth every birr spent on my driving education!",
      rating: 5,
      course: "Complete Beginner Course",
      location: "Addis Ababa Branch",
      date: "4 weeks ago",
      highlight: "Value for money"
    },
  ];

  const stats = [
    { icon: <Heart className="w-6 h-6 text-red-500" />, value: "4.9/5", label: t('home.testimonials.stats.rating') },
    { icon: <ThumbsUp className="w-6 h-6 text-blue-500" />, value: "98%", label: t('home.testimonials.stats.recommend') },
    { icon: <Award className="w-6 h-6 text-yellow-500" />, value: "95%", label: t('home.testimonials.stats.satisfaction') },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('home.testimonials.title')}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('home.testimonials.subtitle')}
          </p>
          
          {/* Rating stats */}
          <div className="flex justify-center gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                {stat.icon}
                <span className="font-bold text-lg">{stat.value}</span>
                <span className="text-gray-600 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-fade-in hover:shadow-2xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden group" style={{ animationDelay: `${index * 0.05}s` }}>
              {/* Highlight badge */}
              <div className="absolute top-4 right-4 bg-hirtoli-green text-white text-xs px-3 py-1 rounded-full">
                {testimonial.highlight}
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-hirtoli-green group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                    <div className="text-xs text-gray-500 mt-1">{testimonial.date}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-4 flex justify-between items-center">
                  <div className="flex">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-hirtoli-red text-hirtoli-red" />
                    ))}
                    {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gray-300" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gray-300" />
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <GraduationCap className="w-3 h-3" />
                    <span>{testimonial.course}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{t('home.testimonials.cta_title')}</h3>
            <p className="text-gray-600 mb-6">
              {t('home.testimonials.cta_subtitle')}
            </p>
            <button className="bg-hirtoli-red text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold">
              {t('home.testimonials.cta_button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

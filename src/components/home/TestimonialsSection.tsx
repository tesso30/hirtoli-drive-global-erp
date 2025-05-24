
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Star, GraduationCap, MapPin } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Abebe Kebede",
      role: "Student Driver",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      quote: "Hirtoli Driving School transformed me from a nervous beginner to a confident driver in just 4 weeks. The instructors were patient and professional.",
      rating: 5,
      course: "Complete Beginner Course",
      location: "Addis Ababa Branch"
    },
    {
      name: "Tigist Hailu",
      role: "Commercial License Holder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      quote: "The commercial license training at Hirtoli was comprehensive and practical. I now drive professionally with skills that keep me and others safe.",
      rating: 5,
      course: "Commercial License Training",
      location: "Adama Branch"
    },
    {
      name: "Dawit Mekonen",
      role: "Private Driver",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      quote: "After a long break from driving, the refresher course was exactly what I needed. The instructors helped me overcome my anxiety and build my confidence.",
      rating: 4,
      course: "Advanced Defensive Driving",
      location: "Bahir Dar Branch"
    },
    {
      name: "Hiwot Alemseged",
      role: "New Graduate",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      quote: "I was terrified of driving, but W/t Meron made me feel so comfortable. Now I drive to work every day with complete confidence!",
      rating: 5,
      course: "Complete Beginner Course",
      location: "Addis Ababa Branch"
    },
    {
      name: "Solomon Tesfaye",
      role: "Taxi Driver",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
      quote: "The commercial training prepared me for real-world driving challenges. I got my license and started earning immediately after graduation.",
      rating: 5,
      course: "Commercial License Training",
      location: "Adama Branch"
    },
    {
      name: "Rahel Girma",
      role: "Office Worker",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3",
      quote: "Flexible scheduling allowed me to learn while working full-time. The online theory classes were very convenient and well-structured.",
      rating: 4,
      course: "Complete Beginner Course",
      location: "Bahir Dar Branch"
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3">What Our Students Say</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Real stories from our graduates who have successfully learned to drive with confidence at Hirtoli Driving School
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-hirtoli-green" 
                  />
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-4 flex">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-hirtoli-red text-hirtoli-red" />
                  ))}
                  {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-300" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div className="flex items-center gap-1">
                    <GraduationCap className="w-3 h-3" />
                    <span>{testimonial.course}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

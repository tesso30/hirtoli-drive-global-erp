
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import CoursesSection from '../components/home/CoursesSection';
import InstructorsSection from '../components/home/InstructorsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BranchInfoSection from '../components/home/BranchInfoSection';
import CallToActionSection from '../components/home/CallToActionSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <WhyChooseUsSection />
      <CoursesSection />
      <InstructorsSection />
      <TestimonialsSection />
      <BranchInfoSection />
      <CallToActionSection />
    </div>
  );
};

export default Index;

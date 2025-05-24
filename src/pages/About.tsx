
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AboutHeroSection from '../components/about/AboutHeroSection';
import CompanyHistorySection from '../components/about/CompanyHistorySection';
import MissionVisionSection from '../components/about/MissionVisionSection';
import TeamSection from '../components/about/TeamSection';
import AchievementsSection from '../components/about/AchievementsSection';
import CertificationsSection from '../components/about/CertificationsSection';
import TimelineSection from '../components/about/TimelineSection';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <AboutHeroSection />
      <CompanyHistorySection />
      <MissionVisionSection />
      <TimelineSection />
      <TeamSection />
      <AchievementsSection />
      <CertificationsSection />
    </div>
  );
};

export default About;

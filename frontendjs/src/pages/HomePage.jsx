import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { StatsSection } from '../components/StatsSection';
import { EventsSection } from '../components/EventsSection';
// import { TeamSection } from '../components/TeamSection';
import { MembershipSection } from '../components/MembershipSection';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
export const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return <main className="flex-grow">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <EventsSection />
      {/* <TeamSection /> */}
      <MembershipSection />
    </main>;
};
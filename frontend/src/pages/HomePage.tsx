import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { StatsSection } from '../components/StatsSection';
import { EventsSection } from '../components/EventsSection';
// import { TeamSection } from '../components/TeamSection';
import { MembershipSection } from '../components/MembershipSection';

export const HomePage = () => {
  return <main className="flex-grow">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <EventsSection />
      {/* <TeamSection /> */}
      <MembershipSection />
    </main>;
};
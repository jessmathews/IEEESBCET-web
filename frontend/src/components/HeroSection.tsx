import React from 'react';
import Carousel from './Carousel';
import ParticlesBackground from '../components/Particles';

export const HeroSection = () => {
  return <section id="home" className="bg-gradient-to-b from-[#006699] to-[#0088cc] text-white py-2 relative">
    <ParticlesBackground bgColor='#006699'/>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              IEEE SB CET
            </h1>
            <p className="text-xl mb-6">Advancing Technology for Humanity</p>
            <p className="mb-8">
              Join us in our mission to foster technological innovation and
              excellence for the benefit of humanity.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#membership" className="bg-white text-[#006699] px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition">
                Join Now
              </a>
              <a href="#events" className="border border-white px-6 py-2 rounded-md font-medium hover:bg-white/10 transition">
                Upcoming Events
              </a>
            </div>
          </div>
          <div className="md:w-1/2 m-3 p-4 w-full">
          <Carousel/>
          </div>
        </div>
      </div>
    </section>;
};
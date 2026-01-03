import React from 'react';
import { FaUserGroup,FaBookOpen,FaGlobe,FaAward } from 'react-icons/fa6';
export const AboutSection = () => {
  return <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">About IEEE</h2>
          <div className="w-20 h-1 bg-[#006699] mx-auto"></div>
        </div>
        <div className="mb-12">
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">
            IEEE is the world's largest technical professional organization
            dedicated to advancing technology for the benefit of humanity. Our
            college branch connects students with resources, opportunities, and
            a global community of professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-[#006699]/10 p-3 rounded-full mb-4">
              <FaUserGroup  size={32} className="text-[#006699]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              Connect with peers and professionals who share your technical
              interests
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-[#006699]/10 p-3 rounded-full mb-4">
              <FaBookOpen  size={32} className="text-[#006699]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Knowledge</h3>
            <p className="text-gray-600">
              Access to technical resources, publications, and educational
              materials
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-[#006699]/10 p-3 rounded-full mb-4">
              <FaGlobe  size={32} className="text-[#006699]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Networking</h3>
            <p className="text-gray-600">
              Build professional connections and explore career opportunities
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-[#006699]/10 p-3 rounded-full mb-4">
              <FaAward  size={32} className="text-[#006699]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Recognition</h3>
            <p className="text-gray-600">
              Participate in competitions and gain recognition for your
              achievements
            </p>
          </div>
        </div>
      </div>
    </section>;
};
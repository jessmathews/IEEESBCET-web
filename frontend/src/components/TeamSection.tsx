import React from 'react';
import { LinkedinIcon, GithubIcon, MailIcon } from 'lucide-react';
export const TeamSection = () => {
  const teamMembers = [{
    id: 1,
    name: 'Alex Johnson',
    role: 'Chairperson',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    linkedin: '#',
    github: '#',
    email: 'alex@example.com'
  }, {
    id: 2,
    name: 'Sarah Williams',
    role: 'Vice Chairperson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    linkedin: '#',
    github: '#',
    email: 'sarah@example.com'
  }, {
    id: 3,
    name: 'Michael Chen',
    role: 'Secretary',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    linkedin: '#',
    github: '#',
    email: 'michael@example.com'
  }, {
    id: 4,
    name: 'Priya Patel',
    role: 'Treasurer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    linkedin: '#',
    github: '#',
    email: 'priya@example.com'
  }];
  return <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Team</h2>
          <div className="w-20 h-1 bg-[#006699] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team of student leaders who manage our IEEE
            branch activities and initiatives.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-[#006699] font-medium mb-3">{member.role}</p>
                <div className="flex space-x-3">
                  <a href={member.linkedin} className="text-gray-600 hover:text-[#006699]">
                    <LinkedinIcon size={20} />
                  </a>
                  <a href={member.github} className="text-gray-600 hover:text-[#006699]">
                    <GithubIcon size={20} />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-[#006699]">
                    <MailIcon size={20} />
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
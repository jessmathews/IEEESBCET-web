import React from 'react';
import { LinkedinIcon,MailIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ExecomPage = () => {
    const teamMembers = [{
        id: 1,
        name: 'Anvitha Vinod',
        role: 'IEEE Student Branch Chairperson',
        image: 'https://placehold.co/400',
        linkedin: 'https://www.linkedin.com/in/anvitha-vinod-08636425a',
        email: '#'
      }, {
        id: 2,
        name: 'Suraj Krishna S S',
        role: 'IEEE Student Branch Vice-Chairperson',
        image: 'https://placehold.co/400',
        linkedin: 'https://www.linkedin.com/in/suraj-krishna-ss/',
        email: '#'
      }, {
        id: 3,
        name: 'Aiswarya S H',
        role: 'IEEE Student Branch Secretary',
        image: 'https://placehold.co/400',
        linkedin: 'https://www.linkedin.com/in/aiswarya-s-h-123466256',
        email: '#'
      }, {
        id: 4,
        name: 'Sidharth Mohan',
        role: 'IEEE Student Branch Treasurer',
        image: 'https://placehold.co/400',
        linkedin: 'https://www.linkedin.com/in/sidharthmohan61',
        email: '#'
      },
      {
        id: 5,
        name: 'Aleena Terasa John',
        role: 'IEEE Student Branch Joint Secretary',
        image: 'https://placehold.co/400',
        linkedin: 'https://www.linkedin.com/in/aleena-john-827170351/',
        email: '#'
      },
      {
        id: 6,
        name: 'Arjun K M',
        role: 'Technical Coordinator',
        image: 'https://placehold.co/400',
        linkedin: 'https://www.linkedin.com/in/arjun-k-m-b0ab69285',
        email: 'priya@example.com'
      }
    
    ];



    return <section id="team" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">EXECOM 2025</h2>
        <div className="w-20 h-1 bg-[#006699] mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Meet the dedicated team of student leaders who manage our IEEE
          branch activities and initiatives.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {teamMembers.map(member => <div key={member.id} className="bg-white rounded-3xl overflow-hidden shadow-md w-5/6 sm:w-full ">
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover object-center" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1 text-center">{member.name}</h3>
              <p className="text-[#006699] font-medium mb-3 text-center">{member.role}</p>
              <div className="flex space-x-3 justify-center">
                <Link to={member.linkedin} className="text-gray-600 hover:text-[#006699]" target='_blank'>
                  <LinkedinIcon size={20} />
                </Link>
                <Link to={`mailto:${member.email}`} className="text-gray-600 hover:text-[#006699]" target='_blank'>
                  <MailIcon size={20} />
                </Link>
              </div>
            </div>
          </div>)}
      </div>
    </div>
  </section>
} 

import React from 'react';
import { MemberCard } from '../components/MemberCard';
export const ExecomPage = () => {
  const teamMembers = [{
    id: 1,
    name: 'Anvitha Vinod',
    role: 'IEEE SB Chairperson',
    image: 'https://placehold.co/400',
    linkedin: 'https://www.linkedin.com/in/anvitha-vinod-08636425a',
    email: '#'
  }, {
    id: 2,
    name: 'Suraj Krishna S S',
    role: 'IEEE SB Vice-Chairperson',
    image: 'https://placehold.co/400',
    linkedin: 'https://www.linkedin.com/in/suraj-krishna-ss/',
    email: '#'
  }, {
    id: 3,
    name: 'Aiswarya S H',
    role: 'IEEE SB Secretary',
    image: 'https://placehold.co/400',
    linkedin: 'https://www.linkedin.com/in/aiswarya-s-h-123466256',
    email: '#'
  }, {
    id: 4,
    name: 'Sidharth Mohan',
    role: 'IEEE SB Treasurer',
    image: 'https://placehold.co/400',
    linkedin: 'https://www.linkedin.com/in/sidharthmohan61',
    email: '#'
  },
  {
    id: 5,
    name: 'Aleena Terasa John',
    role: 'IEEE SB Joint Secretary',
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



  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    // slight delay to ensure CSS transition runs on mount
    const t = setTimeout(() => setMounted(true), 20);
    return () => clearTimeout(t);
  }, []);

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center m-4">
        {teamMembers.map((member, idx) => (
          <div
            className={`w-full h-full will-change-transform transform transition duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
                <MemberCard
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  linkedin={member.linkedin}
                  email={member.email}
                />
          </div>
        ))}
      </div>
    </div>
  </section>
} 

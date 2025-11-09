import React from 'react';
import { CheckIcon } from 'lucide-react';
export const MembershipSection = () => {
  const benefits = ["Access to IEEE's 5 million technical documents", 'Networking with professionals and peers', 'Discounts on conferences and events', 'Leadership and volunteer opportunities', 'Resume enhancement and career services', 'Participation in technical competitions'];
  return <section id="membership" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Join IEEE</h2>
          <div className="w-20 h-1 bg-[#006699] mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 p-3">
            <h3 className="text-2xl font-semibold mb-4">Membership Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 bg-[#006699] rounded-full p-1">
                    <CheckIcon size={12} className="text-white" />
                  </span>
                  <span>{benefit}</span>
                </li>)}
            </ul>
            <div className="mt-6">
              <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer" className="bg-[#006699] text-white px-6 py-2 rounded-md font-medium hover:bg-[#005588] transition">
                Become a Member
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Membership FAQ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#006699]">
                    How much does student membership cost?
                  </h4>
                  <p className="text-gray-600">
                    IEEE student membership costs $32 per year, which is
                    discounted from the regular membership fee.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-[#006699]">
                    How do I join the college branch?
                  </h4>
                  <p className="text-gray-600">
                    After becoming an IEEE member, you can join our college
                    branch by attending any of our meetings or contacting our
                    executive team.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-[#006699]">
                    Are there any local membership dues?
                  </h4>
                  <p className="text-gray-600">
                    Our college branch does not charge additional dues beyond
                    the IEEE membership fee.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-[#006699]">
                    Can I join specific technical societies?
                  </h4>
                  <p className="text-gray-600">
                    Yes, IEEE offers 39 technical societies you can join for
                    additional fees to focus on specific areas of interest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
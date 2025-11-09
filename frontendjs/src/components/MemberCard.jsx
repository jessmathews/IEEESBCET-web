import React from 'react';
import {FaLinkedin, FaSquareGithub, FaRegEnvelope} from 'react-icons/fa6'
import { Link } from 'react-router-dom';

export const MemberCard = ({id, image, name, role, linkedin, email}) => {
  // const teamMembers = [{
  //   id: 1,
  //   name: 'Alex Johnson',
  //   role: 'Chairperson',
  //   image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
  //   linkedin: '#',
  //   github: '#',
  //   email: 'alex@example.com'
  // }, {
  //   id: 2,
  //   name: 'Sarah Williams',
  //   role: 'Vice Chairperson',
  //   image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
  //   linkedin: '#',
  //   github: '#',
  //   email: 'sarah@example.com'
  // }, {
  //   id: 3,
  //   name: 'Michael Chen',
  //   role: 'Secretary',
  //   image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
  //   linkedin: '#',
  //   github: '#',
  //   email: 'michael@example.com'
  // }, {
  //   id: 4,
  //   name: 'Priya Patel',
  //   role: 'Treasurer',
  //   image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
  //   linkedin: '#',
  //   github: '#',
  //   email: 'priya@example.com'
  // }];
  return <div key={id} className="bg-white rounded-3xl overflow-hidden shadow-md w-full sm:w-full ">
            <img src={image} alt={name} className="w-full h-64 object-cover object-center" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1 text-center">{name}</h3>
              <p className="text-[#006699] font-medium mb-3 text-center">{role}</p>
              <div className="flex space-x-3 justify-center">
                <Link to={linkedin} className="text-gray-600 hover:text-[#006699]" target='_blank'>
                  <FaLinkedin size={20} />
                </Link>
                <Link to={`mailto:${email}`} className="text-gray-600 hover:text-[#006699]" target='_blank'>
                  <FaRegEnvelope size={20} />
                </Link>
              </div>
            </div>
          </div>;
};
import React from 'react';
import {FaLinkedin, FaSquareGithub, FaRegEnvelope} from 'react-icons/fa6'
import { Link } from 'react-router-dom';

export const MemberCard = ({id, image_url, name, designation, linkedin_url, email}) => {
  return (
    <div key={id} className="bg-white rounded-3xl overflow-hidden shadow-md w-full h-full flex flex-col">
      <div className="w-full h-56 sm:h-64 md:h-72 lg:h-64 overflow-hidden">
        <img src={image_url} alt={name} className="w-full h-full object-cover object-center" />
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-1 text-center">{name}</h3>
          <p className="text-[#006699] font-medium mb-3 text-center">{designation}</p>
        </div>

        <div className="flex space-x-3 justify-center mt-4">
          <a href={linkedin_url} className="text-gray-600 hover:text-[#006699]" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${email}`} className="text-gray-600 hover:text-[#006699]" target="_blank" rel="noopener noreferrer">
            <FaRegEnvelope size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import logo from "../assets/ieee-sb-logo.png"
import ieee_logo from "../assets/IEEE_logo.svg"

// import ParticlesBackground from './Particles';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return<footer id="contact" className="bg-gray-900 text-white">

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
          <div className="flex items-center space-x-4">
            <img src={ieee_logo} alt="IEEE Logo" className="h-12"/>
          <img src={logo} alt="IEEESB Logo" className="h-16" />
        </div>
            <p className="text-gray-400 mb-4">
              Advancing technology for the benefit of humanity through our
              college community.
            </p>
            <div className="flex space-x-4">
              <Link to="https://www.facebook.com/IEEE.SB.CET" className="text-gray-400 hover:text-white">
                <FacebookIcon size={20} />
              </Link>
              {/* <Link to="#" className="text-gray-400 hover:text-white">
                <TwitterIcon size={20} />
              </Link> */}
              <Link to="https://www.instagram.com/ieeesbcet/" className="text-gray-400 hover:text-white">
                <InstagramIcon size={20} />
              </Link>
              <Link to="https://www.linkedin.com/company/ieee-sb-cet" className="text-gray-400 hover:text-white">
                <LinkedinIcon size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#home" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="#events" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link to="#membership" className="text-gray-400 hover:text-white">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  IEEE Global
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon size={18} className="mr-2 mt-1 text-[#006699]" />
                <span className="text-gray-400">
                College Of Engineering, Trivandrum
                <br />

Sreekaryam - Kulathoor Rd, P.O, Sreekariyam
<br/>
PIN : 695017                </span>
              </li>
              <li className="flex items-center">
                <MailIcon size={18} className="mr-2 text-[#006699]" />
                <Link to="mailto:ieee@college.edu" className="text-gray-400 hover:text-white">
                  ieee@college.edu
                </Link>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={18} className="mr-2 text-[#006699]" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} IEEE Student Branch College of Engineering, Trivandrum. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
};
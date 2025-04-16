import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import logo from "../assets/IEEE_logo.svg"

export const Footer = () => {
  return <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
          <div className="flex items-center space-x-2">
          <img src={logo} alt="IEEE Logo" className="h-10" />
          <div>
            <p className="text-3xl text-white">SB CET</p>
          </div>
        </div>
            <p className="text-gray-400 mb-4">
              Advancing technology for the benefit of humanity through our
              college community.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/IEEE.SB.CET" className="text-gray-400 hover:text-white">
                <FacebookIcon size={20} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white">
                <TwitterIcon size={20} />
              </a> */}
              <a href="https://www.instagram.com/ieeesbcet/" className="text-gray-400 hover:text-white">
                <InstagramIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/company/ieee-sb-cet" className="text-gray-400 hover:text-white">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="#membership" className="text-gray-400 hover:text-white">
                  Membership
                </a>
              </li>
              <li>
                <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  IEEE Global
                </a>
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
                <a href="mailto:ieee@college.edu" className="text-gray-400 hover:text-white">
                  ieee@college.edu
                </a>
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
    </footer>;
};
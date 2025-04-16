import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import logo from "../assets/IEEE_logo.svg"
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to='/'> <div className="flex items-center space-x-2">
          <img src={logo} alt="IEEE Logo" className="h-10" />
          <div>
            {/* <p className="text-gray-600 text-lg ">SB CET</p> */}
          </div>
        </div>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <Link to="/#home" className="text-gray-800 hover:text-[#006699] font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#about" className="text-gray-800 hover:text-[#006699] font-medium">
                About
              </Link>
            </li>
            <li>
              <Link to="/#events" className="text-gray-800 hover:text-[#006699] font-medium">
                Events
              </Link>
            </li>
            <li>
              <Link to="/execom" className="text-gray-800 hover:text-[#006699] font-medium">
                Execom
              </Link>
            </li>
            <li>
              <Link to="/#membership" className="text-gray-800 hover:text-[#006699] font-medium">
                Membership
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="text-gray-800 hover:text-[#006699] font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col py-2">
            <li>
              <Link to="/#home" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/#about" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/#events" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/execom" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                Execom
              </Link>
            </li>
            <li>
              <Link to="/#membership" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                Membership
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>}
    </header>;
};
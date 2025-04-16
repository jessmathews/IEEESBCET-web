import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import logo from "../assets/IEEE_logo.svg"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href='/'> <div className="flex items-center space-x-2">
          <img src={logo} alt="IEEE Logo" className="h-10" />
          <div>
            <p className="text-gray-600 text-3xl">SB CET</p>
          </div>
        </div>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <a href="#home" className="text-gray-800 hover:text-[#006699] font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-800 hover:text-[#006699] font-medium">
                About
              </a>
            </li>
            <li>
              <a href="#events" className="text-gray-800 hover:text-[#006699] font-medium">
                Events
              </a>
            </li>
            <li>
              <a href="#execom" className="text-gray-800 hover:text-[#006699] font-medium">
                Execom
              </a>
            </li>
            <li>
              <a href="#membership" className="text-gray-800 hover:text-[#006699] font-medium">
                Membership
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-800 hover:text-[#006699] font-medium">
                Contact
              </a>
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
              <a href="#home" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#events" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                Events
              </a>
            </li>
            <li>
              <a href="#execom" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                Execom
              </a>
            </li>
            <li>
              <a href="#membership" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                Membership
              </a>
            </li>
            <li>
              <a href="#contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>}
    </header>;
};
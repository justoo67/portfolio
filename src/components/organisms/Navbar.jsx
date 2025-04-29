import React, { useState } from 'react';
import { resume } from '@/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: '01', label: 'About', href: '#about' },
    { id: '02', label: 'Skills', href: '#skills' },
    { id: '03', label: 'Projects', href: '#projects' },
    { id: '04', label: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full p-4 flex justify-between items-center bg-[#0a192f]/90 backdrop-blur-sm z-50">
      <div className="text-[#1F7D53]">
        <div className="h-12 w-12 border-2 border-[#1F7D53] flex items-center justify-center rounded-lg">
          <span className="text-2xl font-bold">JK</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="text-[#1F7D53] hover:text-white transition-colors"
          >
            <span className="text-sm">{link.id}.</span> {link.label}
          </a>
        ))}
        <a 
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#1F7D53] text-[#1F7D53] px-4 py-2 rounded hover:bg-[#1F7D53]/10 transition-colors"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-[#1F7D53] focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#0a192f] shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button 
              className="text-[#1F7D53] focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-[#1F7D53] hover:text-white transition-colors text-lg"
                onClick={toggleMenu}
              >
                <span className="text-sm">{link.id}.</span> {link.label}
              </a>
            ))}
            <a 
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#1F7D53] text-[#1F7D53] px-4 py-2 rounded hover:bg-[#1F7D53]/10 transition-colors text-center"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar; 
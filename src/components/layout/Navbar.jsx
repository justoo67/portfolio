import React from 'react';

const Navbar = () => {
  const navLinks = [
    { id: '01', label: 'About', href: '#about' },
    { id: '02', label: 'Experience', href: '#experience' },
    { id: '03', label: 'Work', href: '#work' },
    { id: '04', label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full p-4 flex justify-between items-center">
      <div className="text-[#64ffda]">
        <div className="h-12 w-12 border-2 border-[#64ffda] flex items-center justify-center rounded-lg">
          <span className="text-2xl font-bold">JK</span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="text-[#64ffda] hover:text-white transition-colors"
          >
            <span className="text-sm">{link.id}.</span> {link.label}
          </a>
        ))}
        <button className="border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda]/10 transition-colors">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 
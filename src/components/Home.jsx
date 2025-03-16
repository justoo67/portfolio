import React from 'react';
import Navbar from './layout/Navbar';
import SocialLinks from './layout/SocialLinks';
import Hero from './sections/Hero';
import About from './sections/About';
import Contacts from './sections/Contacts';
import Projects from './sections/Projects';
const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contacts/>
      <SocialLinks />
    </div>
  );
};

export default Home; 
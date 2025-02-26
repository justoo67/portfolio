import React from 'react';
import Navbar from './layout/Navbar';
import SocialLinks from './layout/SocialLinks';
import Hero from './sections/Hero';
import About from './sections/About';
const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <Navbar />
      <Hero />
      <About />
      <SocialLinks />
    </div>
  );
};

export default Home; 
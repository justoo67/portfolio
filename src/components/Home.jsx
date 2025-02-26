import React from 'react';
import Navbar from './layout/Navbar';
import SocialLinks from './layout/SocialLinks';
import Hero from './sections/Hero';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <Navbar />
      <Hero />
      <SocialLinks />
    </div>
  );
};

export default Home; 
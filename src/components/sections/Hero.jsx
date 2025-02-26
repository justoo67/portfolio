import React from 'react';

const Hero = () => {
  return (
    <main className="px-4 pt-32">
      <div className="flex flex-col gap-4 max-w-4xl">
        <p className="text-[#64ffda] font-mono">Hi, my name is</p>
        <h1 className="text-7xl font-bold text-slate-200">Justin.</h1>
        <h2 className="text-7xl font-bold text-slate-400">I build things for the web.</h2>
        <p className="text-slate-400 max-w-xl mt-4">
          I'm a software engineer specializing in building (and occasionally 
          designing) exceptional digital experiences. Currently, I'm focused on 
          building accessible, human-centered products at{' '}
          <a href="#" className="text-[#64ffda] hover:underline">
            Upstatement
          </a>
          .
        </p>
        <button className="text-[#64ffda] border border-[#64ffda] px-8 py-4 rounded w-fit mt-8 hover:bg-[#64ffda]/10 transition-colors">
          Check out my course!
        </button>
      </div>
    </main>
  );
};

export default Hero; 
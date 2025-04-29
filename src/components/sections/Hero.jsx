import React from 'react';
import resume from '../../assets/resume.pdf';

const Hero = () => {
  return (
    <main className="px-4 pt-32 flex justify-center items-center" >
      <div className="flex flex-col gap-4 max-w-4xl">
        <p className="text-[#1F7D53] font-mono">Hi, my name is</p>
        <h1 className="text-7xl font-bold text-slate-200">Justin.</h1>
        <h2 className="text-7xl font-bold text-slate-400">I am a Software Engineer</h2>
        <p className="text-slate-400 max-w-xl mt-4">
          I'm a software engineer specializing in building (and occasionally 
          designing) exceptional digital experiences. Currently, I'm focused on 
          building accessible, human-centered products at{' '}
          <a href="#" className="text-[#1F7D53] hover:underline">
            Upstatement
          </a>
          .
        </p>
        <a 
          href={resume} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#1F7D53] border border-[#1F7D53] px-8 py-4 rounded w-fit mt-8 hover:bg-[#1F7D53]/10 transition-colors"
        >
          View Resume
        </a>
      </div>
    </main>
  );
};

export default Hero; 
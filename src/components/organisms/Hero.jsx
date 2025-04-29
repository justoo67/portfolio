import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { resume } from '@/assets';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen px-4 pt-32 flex items-center relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0a192f] to-[#112240] opacity-100"></div>
      
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#1F7D53 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      ></div>

      {/* Content */}
      <motion.div 
        className="max-w-4xl mx-auto relative z-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <motion.p 
          className="text-[#1F7D53] font-mono mb-4"
          variants={fadeInUp}
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          className="text-4xl sm:text-7xl font-bold text-slate-200 mb-4"
          variants={fadeInUp}
        >
          Justin Kirui.
        </motion.h1>
        
        <motion.h2 
          className="text-4xl sm:text-7xl font-bold text-slate-400 mb-8"
          variants={fadeInUp}
        >
          I build things for the web.
        </motion.h2>
        
        <motion.div 
          className="max-w-xl"
          variants={fadeInUp}
        >
          <p className="text-slate-400 text-lg mb-8">
            I'm a software engineer specializing in building (and occasionally designing) 
            exceptional digital experiences. 
          </p>
          
          <motion.div 
            className="flex gap-4"
            variants={fadeInUp}
          >
            <a 
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F7D53] border border-[#1F7D53] px-8 py-4 rounded hover:bg-[#1F7D53]/10 transition-colors"
            >
              View Resume
            </a>
            <a 
              href="#contact"
              className="bg-[#1F7D53] text-white px-8 py-4 rounded hover:bg-[#1F7D53]/90 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 text-[#1F7D53]"
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Hero; 
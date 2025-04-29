import React from 'react'
import { profile } from '@/assets'

const About = () => {
  return (
    <section id="about" className="px-4 py-24 flex  justify-center">
      <div className="flex flex-col items-center md:flex-row gap-12 max-w-4xl">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-200 mb-8">
            <span className="text-[#1F7D53] font-mono">01.</span> About Me
          </h2>
          
          <div className="text-slate-400 space-y-4">
            <p>
              Hello! My name is Justin and 3rd year Software Engineering student with fundamental knowledge of software design, development, and testing. Seeking to utilize excellent analytical, technical, and programming skills to thrive as an entry-level software engineer.
            </p>



            <p>Here are a few technologies I've been working with recently:</p>

            <ul className="grid grid-cols-2 gap-2 mt-4">
              {['JavaScript', 'React', 'Node.js', 'TypeScript', 'WordPress', 'python'].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-[#1F7D53]">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative w-64 h-64 group">
          <div className="absolute inset-0 bg-[#1F7D53] rounded opacity-20 group-hover:opacity-0 transition-opacity"></div>
          <img
            src={profile}
            alt="Profile"
            className="rounded grayscale group-hover:grayscale-0 transition-all"
          />
        </div>
      </div>
    </section>
  )
}

export default About
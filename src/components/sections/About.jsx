import React from 'react'

const About = () => {
  return (
    <section id="about" className="px-4 py-24 flex  justify-center">
      <div className="flex flex-col items-center md:flex-row gap-12 max-w-4xl">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-200 mb-8">
            <span className="text-[#64ffda] font-mono">01.</span> About Me
          </h2>
          
          <div className="text-slate-400 space-y-4">
            <p>
              Hello! My name is Brittany and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>

            <p>
              Fast-forward to today, and I've had the privilege of working at
              an advertising agency, a start-up, a huge corporation, and
              a student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>



            <p>Here are a few technologies I've been working with recently:</p>

            <ul className="grid grid-cols-2 gap-2 mt-4">
              {['JavaScript (ES6+)', 'React', 'Node.js', 'TypeScript', 'Eleventy', 'WordPress'].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative w-64 h-64 group">
          <div className="absolute inset-0 bg-[#64ffda] rounded opacity-20 group-hover:opacity-0 transition-opacity"></div>
          <img
            src="./assets/profile.jpg"
            alt="Profile"
            className="rounded grayscale group-hover:grayscale-0 transition-all"
          />
        </div>
      </div>
    </section>
  )
}

export default About
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioScreenshot, nillaveeScreenshot } from '@/assets';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      image: portfolioScreenshot,
      liveLink: 'https://justinkiplangat.netlify.app/',
      githubLink: 'https://github.com/justoo67/portfolio'
    },
    {
      id: 2,
      title: 'Nillavee Website Clone',
      description: 'A clone of the Nillavee website built with React and styled with CSS.',
      technologies: ['React', 'CSS', 'JavaScript'],
      image: nillaveeScreenshot,
      liveLink: 'https://nillaveewebsiteclone.netlify.app/',
      githubLink: 'https://github.com/justoo67/pinkies'
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: portfolioScreenshot,
      liveLink: '#',
      githubLink: '#'
    }
  ];

  const allTechnologies = ['all', ...new Set(projects.flatMap(project => project.technologies))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  const ProjectCard = ({ project }) => (
    <div className="group relative bg-[#112240] rounded-lg overflow-hidden hover:transform hover:translate-y-[-5px] transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-[#1F7D53]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x200?text=Project+Screenshot';
          }}
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-200 group-hover:text-[#1F7D53] transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-4">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#1F7D53] transition-colors"
              aria-label="GitHub Repository"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#1F7D53] transition-colors"
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          </div>
        </div>
        <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="text-xs font-mono text-[#1F7D53] bg-[#1F7D53]/10 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-200 mb-8">
          <span className="text-[#1F7D53] font-mono">03.</span> Projects
        </h2>
        <p className="text-slate-400 max-w-xl mb-12">
          Here are a few projects I've worked on recently. Each project is briefly described with the technologies used.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-12">
          {allTechnologies.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded text-sm font-mono ${
                filter === tech 
                  ? 'bg-[#1F7D53] text-white' 
                  : 'bg-transparent border border-[#1F7D53] text-[#1F7D53] hover:bg-[#1F7D53]/10'
              } transition-colors`}
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
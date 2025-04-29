import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      image: './assets/portfolio-screenshot.png',
      liveLink: 'https://justoo67.github.io/portfolio/',
      githubLink: 'https://github.com/justoo67/portfolio'
    },
    {
      id: 2,
      title: 'Nillavee Website Clone',
      description: 'A clone of the Nillavee website built with React and styled with CSS.',
      technologies: ['React', 'CSS', 'JavaScript'],
      image: './assets/nillavee-screenshot.jpg',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: './assets/ecommerce-screenshot.jpg',
      liveLink: '#',
      githubLink: '#'
    }
  ];

  const allTechnologies = ['all', ...new Set(projects.flatMap(project => project.technologies))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

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
              className={`px-4 py-2 rounded ${
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
            <div 
              key={project.id} 
              className="bg-[#112240] rounded-lg overflow-hidden hover:transform hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className="h-48 bg-gray-700 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=Project+Screenshot';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-200 mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs text-[#1F7D53] bg-[#1F7D53]/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#1F7D53] hover:text-white transition-colors"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#1F7D53] hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
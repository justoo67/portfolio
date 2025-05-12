import React from 'react';
import { FaCode, FaDatabase, FaTools, FaMobile } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaCode className="text-[#1F7D53] text-2xl" />,
      skills: [
        'React.js',
        'JavaScript',
        'TypeScript',
        'HTML & CSS',
        'Tailwind CSS',
        'Responsive Design'
      ]
    },
    // {
    //   title: 'Backend Development',
    //   icon: <FaDatabase className="text-[#1F7D53] text-2xl" />,
    //   skills: [
    //     'Node.js',
    //     'Express.js',
    //     'RESTful APIs',
    //     'MongoDB',
    //     'SQL',
    //     'Authentication & Authorization'
    //   ]
    // },
    {
      title: 'Tools & Technologies',
      icon: <FaTools className="text-[#1F7D53] text-2xl" />,
      skills: [
        'Git & GitHub',
        'VS Code',
        'npm/yarn'
      ]
    },
    {
      title: 'Other Skills',
      icon: <FaMobile className="text-[#1F7D53] text-2xl" />,
      skills: [
        'WordPress',
        'Python',
        'Problem Solving',
        'Team Collaboration',
        'Agile Methodologies'
      ]
    }
  ];

  return (
    <section id="skills" className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-200 mb-8">
          <span className="text-[#1F7D53] font-mono">02.</span> Skills
        </h2>
        <p className="text-slate-400 max-w-xl mb-12">
          Here are the technologies and tools I work with. I'm always eager to learn new technologies and expand my skill set.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-[#112240] p-6 rounded-lg hover:transform hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-slate-200">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center gap-2 text-slate-400"
                  >
                    <span className="text-[#1F7D53]">▹</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 
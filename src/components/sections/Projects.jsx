import React from 'react'

const Projects = () => {
  return (
    <div className='flex justify-center items-center flex-col px-4 py-24'>
        <h2 className='text-2xl font-bold text-slate-200 md-8 '> <span className="text-[#1F7D53] font-mono">3.</span>Projects</h2>
        <p className='text-slate-200'>Here are a few projects I've worked on recently:</p>
        <ul>
            <li className='flex flex-col gap-2 mt-4'>
                <a href='https://justoo67.github.io/portfolio/'>- Portfolio website</a>
                <a>- Nillavee website clone</a>
            </li>
        </ul>
    </div>
  )
}

export default Projects
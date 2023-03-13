import React from 'react'
import projects from '../projectsData'
import ProjectCard from './ProjectCard'
import Fade from 'react-reveal/Fade';

function Projects() {
  return (
    <div name="projects" className='py-9'>
      <div className='title mb-16'>
      <h1 className='text-4xl font-light mb-3'>Some stuff I've built...</h1>
      <hr/>
      </div>
     <div className='flex flex-wrap place-content-around gap-5'>
     {projects.map( (project) => <ProjectCard project={project} /> )}
     </div>
     </div>
  )
}

export default Projects

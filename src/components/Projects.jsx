import React from 'react'
import projects from '../projectsData'
import ProjectCard from './ProjectCard'
import Fade from 'react-reveal/Fade';

function Projects() {
  return (
    <div className='py-9'>
      <Fade>
      <div className='title mb-5'>
      <h1>Some things I built...</h1>
      <hr/>
      </div>
     <div className='flex flex-wrap place-content-around gap-5'>
     {projects.map( (project) => <ProjectCard project={project} /> )}
     </div>
     </Fade>
     </div>
  )
}

export default Projects

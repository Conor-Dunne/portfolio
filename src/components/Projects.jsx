import React from 'react'
import projects from '../projectsData'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div className='py-9'>
      <div className='title mb-5'>
      <h1>Some things I built...</h1>
      <hr/>
      </div>
     <div className='flex flex-wrap place-content-around gap-5'>
     {projects.map( (project) => <ProjectCard project={project} /> )}
     </div>
     </div>
  )
}

export default Projects

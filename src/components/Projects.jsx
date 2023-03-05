import React from 'react'
import projects from '../projectsData'

function Projects() {
  return (
    <div className='py-9'>
      <div className='title'>
      <h1>Some things I built...</h1>
      <hr/>
      </div>
     <div className='flex gap-3'>
     {projects.map( (project) => (
        
        <div>
            <img src={project.image} width="300px"/>
            {project.name}
        </div>))}
     </div>
    </div>
  )
}

export default Projects

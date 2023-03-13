import Fade from 'react-reveal/Fade';
import {FaGithub ,FaExternalLinkAlt} from "react-icons/fa"

function ProjectCard({project}) {
    const {name, tools, description,image, live, code } = project;
    return (
        
        <div className="flex flex-col justify-between gap-2 p-2 max-w-xs tracking-wide bg-secondaryColor shadow-black shadow-sm hover:scale-105 transition-all ease-in-out cursor-pointer">
            <Fade>
            <img src={image} className="rounded" />
            <div>
                <h2 className="text-2xl text-slate-300 font-bold">{name}</h2>
            </div>
            <div className="h-16 text-sm rounded">
                {description}
            </div>
            <div className="font-mono text-accentColor">
                {tools}
            </div>
            <div className='flex gap-5 justify-end'>
                <FaGithub />
                <FaExternalLinkAlt />
            </div>
            </Fade>
        </div>
        
    )
  }
  
  export default ProjectCard
  
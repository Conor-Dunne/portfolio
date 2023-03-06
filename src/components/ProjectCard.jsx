import Fade from 'react-reveal/Fade';

function ProjectCard({project}) {
    const {name, tools, description,image, live, code } = project;
    return (
        
        <div className="flex flex-col gap-2 p-2 max-w-xs shadow-black shadow-sm">
            <Fade cascade>
            <img src={image} className="rounded" />
            <div>
                <h2 className="text-2xl text-slate-300 font-bold">{name}</h2>
            </div>
            <div className="h-16 p-3 text-sm text-slate-300 bg-secondaryColor rounded">
                {description}
            </div>
            <div className="font-mono">
                {tools}
            </div>
            <div>
                ##
            </div>
            </Fade>
        </div>
        
    )
  }
  
  export default ProjectCard
  
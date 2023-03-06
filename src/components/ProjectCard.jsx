

function ProjectCard({project}) {
    const {name, tools, description,image, live, code } = project;
    return (
        <div className="flex flex-col gap-2 max-w-xs">
            <img src={image} />
            <div>
                <h2 className="text-2xl text-slate-300 font-bold">{name}</h2>
            </div>
            <div className="h-16 text-slate-200 bg-secondaryColor rounded">
                {description}
            </div>
            <div>
                {tools}
            </div>
            <div>
                ##
            </div>
        </div>
    )
  }
  
  export default ProjectCard
  
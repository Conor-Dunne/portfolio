import Fade from "react-reveal/Fade";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ProjectCard({ project }) {
  const { name, tools, description, image, live, code } = project;
  return (
    <div className="flex flex-col justify-between gap-2 p-2 max-w-xs tracking-wide bg-secondaryColor shadow-black shadow-sm hover:scale-105 transition-all ease-in-out">
      <Fade>
        <a href={live} target="_blank" rel="noopener noreferrer">
          <img src={image} className="rounded" width="300px" height="140px"/>
          <div>
            <h2 className="text-2xl text-slate-300 font-bold">{name}</h2>
          </div>
          <div className="h-16 text-sm rounded">{description}</div>
        </a>
        <div className="font-mono text-accentColor">{tools}</div>
        <div className="flex gap-5 justify-end">
          <a href={code} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt />
          </a>
        </div>
      </Fade>
    </div>  
  );
}

export default ProjectCard;

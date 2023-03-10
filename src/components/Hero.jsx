import Fade from "react-reveal/Fade";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { ReactSVG } from 'react-svg';


function Hero() {
  return (
    <div className="flex flex-col justify-start py-9 gap-2 mx-auto h-screen">
      <Fade left cascade>
        <div>
          <p className="text-accentColor mb-1 mt-8 text-sm tracking-widest">
            Hi, I'm...
          </p>
        </div>
        <div>
          <h1 className="text-6xl text-slate-300 font-bold">Conor Dunne</h1>
        </div>
        <div>
          <h1 className="text-6xl font-bold">I build things...</h1>
        </div>
        <div>
          <p className="max-w-md mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            quas!
          </p>
        </div>
        <div className=" text-xl flex justify-start gap-14 py-3">
        <a href="https://github.com/Conor-Dunne" target="_blank" rel="noopener noreferrer">
        <AiFillGithub />
      </a>

          <a
            href="https://www.youtube.com/channel/UCQCTxhPtNbq--onTYl-Z1QQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillYoutube />
          </a>
          <a href="https://twitter.com/ConorCoder" target="_blank" rel="noopener noreferrer">
        <AiFillTwitterCircle />
      </a>
      <a href="https://www.linkedin.com/in/conordunne1/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin />
      </a>
        </div>
        <div>
          <button className="text-accentColor border-accentColor border py-2 px-4 rounded hover:bg-accentOpac">
            Check out my work
          </button>
        </div>
      </Fade>

    </div>
  );
}

export default Hero;

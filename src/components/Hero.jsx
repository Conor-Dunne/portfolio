import Fade from "react-reveal/Fade";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { Link } from "react-scroll";



function Hero() {
  return (
    <div name="top" className="flex justify-center flex-wrap mx-auto gap-28 mt-10 md:flex-nowrap md:h-screen md:-mt-16 md:gap-0 md:px-6">
    <div className="flex flex-col justify-center items-start gap-2 md:w-full">
      <Fade left cascade>
        <div>
          <p className="text-accentColor text-sm tracking-widest">
            Hi, I'm...
          </p>
        </div>
        <div>
          <h1 className="text-4xl text-slate-300 font-bold">Conor Dunne</h1>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Building things one pixel at a time</h1>
        </div>
        <div>
          <p className="max-w-md mt-3">
          Passionate about coding and building with a dedication for learning and continuously improving my skills.
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
        <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
          <button className="text-accentColor border-accentColor border py-2 px-4 rounded hover:bg-accentOpac">
            Check out my work
          </button>
          </Link>
        </div>
      </Fade>

    </div>
    <Fade>
    <div className="flex flex-col justify-center items-center md:items-end w-full">
      <img className="rounded" src="assets\Conor Dunne Profile pic2.jpg" width={"300px"} height={"300px"} />
    </div>
    </Fade>
    </div>
  );
}

export default Hero;

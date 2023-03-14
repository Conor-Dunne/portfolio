import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
    AiFillGithub,
  } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mb-7">
      <div className=" text-xl flex justify-start gap-14 py-10">
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
        <div className="text-xs text-center">
        <p>Designed & Built by Conor Dunne</p>
        <p>Inspired by brittanychiang.com</p>
        </div>
    </div>
  )
}

export default Footer

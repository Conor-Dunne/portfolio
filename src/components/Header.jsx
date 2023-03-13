import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import NavLinks from "./NavLinks";

function Header() {
  const [nav, setNav] = useState(false);
  const closeNav = setNav(!nav)

  return (
    <header
      id="header"
      className="bg-mainColor z-10 shadow-sm fixed flex justify-between items-center w-full px-6 py-4 text-accentColor"
    >
      <div className="flex items-center justify-center w-10">
        <h1 className="text-3xl">C .</h1>
      </div>
      <div className="gap-9 items-center hidden md:flex">
        <ul className="flex gap-9 text-md font-thin">
          <NavLinks />
        </ul>
        <a
          href="src\assets\CONOR DUNNE Resume 2021.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className=" text-mainColor font-semibold bg-accentColor py-2 px-4 rounded">
            Resume
          </button>
        </a>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-2xl md:hidden"
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {nav && (
        <div className="flex flex-col justify-center items-center absolute right-0 top-0 z-0 w-full h-screen gap-9 backdrop-blur-md">
          <Fade right>
            <div onClick={() => setNav(!nav)} className=" flex flex-col justify-center items-center gap-9 bg-mainColor w-4/5 h-full absolute right-0">
              <ul
                className="flex flex-col gap-9 text-md font-thin"
              >
                <NavLinks  />
              </ul>
              <a
                href="src\assets\CONOR DUNNE Resume 2021.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" text-mainColor text-md font-semibold bg-accentColor py-2 px-4 rounded">
                  Resume
                </button>
              </a>
            </div>
          </Fade>
        </div>
      )}
    </header>
  );
}

export default Header;

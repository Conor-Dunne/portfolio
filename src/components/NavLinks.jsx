import React from "react";
import { Link } from 'react-scroll';
import "../App.css";

const NavLinks = () => {
  return (
    <>
      <Link
        activeClass="active"
        to="top"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <li>TOP</li>
      </Link>

      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <li>PROJECTS</li>
      </Link>

      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <li>ABOUT</li>
      </Link>

      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <li>CONTACT</li>
      </Link>

    </>
  );
};

export default NavLinks;

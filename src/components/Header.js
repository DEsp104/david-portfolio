import logo from "../images/logos/logo.svg";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";
import "../styles/header.css"





export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offSetY = window.scrollY;

    if (offSetY > 180) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let classNameNav = ["navbar"]

  if (scrolled) {
    classNameNav.push("scrolled");
  }

  return (
    <header className={classNameNav.join(" ")}>
        <h1><img src={logo} alt="" /></h1>
        <nav>
          <ul>
            <li>
              <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>
                  Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                  About
              </Link>
            </li> 

            <li>
              <Link activeClass="active" to="works" spy={true} smooth={true} offset={0} duration={500}>
                  Works
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                  Contact
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}



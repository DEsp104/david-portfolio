import logo from "../images/logos/logo.svg";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";
import "../styles/header.css"
import HamburgerIcon from "./Hamburger";


// https://hamburger-react.netlify.app/

export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  const linkTo = [
    {
      name: "Home",
      to: "home",
    },
    {
      name: "About",
      to: "about",
    },
    {
      name: "Works",
      to: "works",
    },
    {
      name: "Contact",
      to: "contact",
    }
  ]

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
         <ul className="displayNav">
          {
            linkTo.map((link, index) => {
            return (<li key={index}>
              <Link activeClass="active" to={link.to} spy={true} smooth={true} offset={0} duration={500}>
                {link.name}
              </Link>
            </li>)
            })
          }
          
        </ul>
   
        <div className="displayHamburger">
          <HamburgerIcon />
        </div>  
        </nav>
    </header>
  )
}



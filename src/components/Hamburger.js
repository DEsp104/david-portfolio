import Hamburger from 'hamburger-react';
import React, { useState } from "react";
import { Link } from "react-scroll";






export default function HamburgerIcon() {

  const [isOpen, setOpen] = useState(false)

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


  const renderMenu = () => {
    if (isOpen) {
      return (
        <ul className="hamMenu">
          {
            linkTo.map((link, index) => {
              return (<li key={index}>
                <Link activeClass="active" to={link.to} spy={true} smooth={true} offset={-136} duration={500}>
                  {link.name}
                </Link>
              </li>)
            })
          }
        </ul>
      )
    }
  }


  return (


    <div>
      <div className="hamburger-backgrnd">
        <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
      </div>
      {renderMenu()}
    </div>
  )
}



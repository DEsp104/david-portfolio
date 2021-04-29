import logo from "../images/logos/logo.svg";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll"





export default function Header() {

  return (
    <header>
      <div>
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
      </div>  
    </header>
  )
}



import { Router } from "react-router";
import selfImage from "../images/self_images/self_Image.svg";
import html from "../images/programmingLogo/html5.svg";
import css from "../images/programmingLogo/css3.svg";
import javascript from "../images/programmingLogo/js.svg";
import mongodb from "../images/programmingLogo/mongodb.svg";
import react from "../images/programmingLogo/react.svg";





export default function Home() {
  


  return (
    <div id="home">
      <div>
        <div>
          <h2>Hi, I'm David Espinal</h2>
          <p>I'm a Software Developer</p>
          <ul>
            <li><img src={html} alt="" /></li>
            <li><img src={css} alt="" /></li>
            <li><img src={javascript} alt="" /></li>
            <li><img src={react} alt="" /></li>
            <li><img src={mongodb} alt="" /></li>
          </ul>
        </div>
        <div>
          <img src={selfImage} alt="" />
        </div>  
      </div>
    </div>
  )
}
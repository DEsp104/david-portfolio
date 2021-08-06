import { Router } from "react-router";
import selfImage from "../images/self_images/self_Image.svg";
import html from "../images/programmingLogo/html5.svg";
import css from "../images/programmingLogo/css3.svg";
import javascript from "../images/programmingLogo/js.svg";
import mongodb from "../images/programmingLogo/mongodb.svg";
import react from "../images/programmingLogo/react.svg";
import figma from "../images/programmingLogo/figma.svg";
import express from "../images/programmingLogo/express.svg";
import node from "../images/programmingLogo/node.svg";
import tailwind from "../images/programmingLogo/tailwind.svg";
import { indexOf } from "lodash";




export default function Home() {

  const logos = [html, css, javascript, mongodb, react, figma, express, node, tailwind];
  


  return (
    <div id="home">
      <div>
        <div>
          <h2>Hi, I'm David Espinal</h2>
          <p>I'm a Software Developer</p>
          <ul>
            {logos.map((logo, index) => {
              return (
                <li key={index}><img src={logo}  alt="" /></li>
              )
            })}
          </ul>
        </div>
        <div>
          <img src={selfImage} alt="" />
        </div>  
      </div>
    </div>
  )
}
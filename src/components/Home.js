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
import "../styles/home.css"




export default function Home() {

  const logos = [html, css, javascript, mongodb, react, figma, express, node, tailwind];
  


  return (
    <div id="home" className="home">
      <div className="flex intro-bio">
        <div className="flex-column-justify intro">
          <div>
            <h2><span className="porshe">Hi, I'm</span> David Lora</h2>
            <p>I'm a Software Developer</p>
            <div className="mobile-self-image">
          <img src={selfImage} alt="" />
        </div>
          </div>
          <ul className="flex wrap list-style flex-center logo">
            {logos.map((logo, index) => {
              return (
                <li key={index}><img src={logo}  alt="" /></li>
              )
            })}
          </ul>
        </div>
        <div className="self-image">
          <img src={selfImage} alt="" />
        </div>  
      </div>
    </div>
  )
}
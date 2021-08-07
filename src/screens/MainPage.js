import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Works from "../components/Works";
import Header from "../components/Header";


export default function MainPage() {
  


  return (
    <div>
      <Header />
      <Home />
      <About />
      <Works />
      <Contact />
      <div></div>
    </div>
  )
}
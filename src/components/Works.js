import bloom from "../images/projects/bloom.svg";
import pokie_api from "../images/projects/pokie_api.svg";
import wemundo from "../images/projects/wemundo.svg";
import beveraholic from "../images/projects/beveraholic.svg";
import githublogo from "../images/logos/githublogo.svg";
import "../styles/works.css";
import { Link } from "react-scroll";

export default function Works() {
  
  const projects = [
    {
      image: beveraholic,
      title: "Beveraholic",
      description: "Beveraholic is an enjoyable web application that allows users to add and search their favorite beverages. Users may pick and make the most popular and tastiest drinks in the world.",
      technologies: ["React Hooks", "React Redux", "Axios", "Tailwind CSS", "Express", "MongoDB", "Mongoose", "JWT"],
      live: "https://beveraholic.netlify.app/",
      github: "https://github.com/DEsp04/project-beveraholic",
    },
    {
      image: bloom,
      title: "Bloom",
      description: "Bloom is a web/mobile application which allows users to apply for remote jobs in the tech industry. The app help users find remote roles all around the world and combat the high unemployment rate in underrepresented communities due to COVID-19 pandemic.",
      technologies: ["React Hook", "React Redux", "React Router", "React Native", "CSS", "Remotive API"],
      live: "https://bloom-jobs.netlify.app/",
      github: "https://github.com/Avixph/project-bloom",
    },
    {
      image: pokie_api,
      title: "Poke-Info",
      description: "Poké-Info is a web application that allows users to have access to search and check detailed stats for every creature, including their favorite Pokémon species, in the Pokémon realm. Users may choose a Pokémon of interest-based on generation or through search.",
      technologies: ["React Hook", "React Router", "CSS", "Axios", "Poké API"],
      live: "https://pokemoninfo-pokedex.netlify.app/",
      github: "https://github.com/NashidC/Poke-Info",
    },
    {
      image: wemundo,
      title: "WeMundo",
      description: "This is a web application that allows users to gather informational reports about humantirian relief efforts and disasters worldwide. Users will be able to look at published reports by reputable established sources, from the United Nations Office for the Corrdination of Humanitarian Affairs (OCHA).",
      technologies: ["HTML", "CSS", "Javascript", "Axios", "UN OCHA ReliefWeb API"],
      live: "https://wemundo.netlify.app/",
      github: "https://github.com/stephp23/Humanitarian_UN_OCHA_Information_Search_App",
    }
  ];


  return (
    <div id="works">
      <h2>Portfolio</h2>
      <div className="underline-works"></div>
      <div className="flex project-items">
        {
          projects.map((project, index) => {
            return <div className="project" key={index}>
              <img src={project.image}  alt="" />
              
              <div className="image-overlay">
                <div className="flex overlay-title">
                  <h3>{project.title}</h3>
                </div> 
                <p>{project.description}</p>
                <div className="project-tech-parent">
                <span>Technologies:</span>
                  <ul className="flex project-tech">
                    {project.technologies.map((tech, index) => {
                      return <li key={index}>
                        {tech}
                      </li>
                    })}
                  </ul>
                </div>
                <div className="live-repo">
                  <a className="project-live" target="_blank" href={project.live}>Live</a>
                  <a className="project-repo" target="_blank" href={project.github}><img src={githublogo} /></a>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
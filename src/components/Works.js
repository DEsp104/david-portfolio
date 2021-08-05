import bloom from "../images/projects/bloom.svg";
import pokie_api from "../images/projects/pokie_api.svg";
import wemundo from "../images/projects/wemundo.svg";
import beveraholic from "../images/projects/beveraholic.svg"




export default function Works() {
  
  const projects = [beveraholic, bloom, pokie_api, wemundo]


  return (
    <div id="works">
      <h2>Portfolio</h2>
      <div className="underline"></div>
      <div>

        {
          projects.map((project, index) => {
          return <img src={project} key={index} alt="" />
          })
        }
      </div>
    </div>
  )
}
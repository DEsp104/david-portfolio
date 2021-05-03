import bloom from "../images/projects/bloom.svg";
import pokie_api from "../images/projects/pokie_api.svg";
import wemundo from "../images/projects/wemundo.svg"




export default function Works() {
  


  return (
    <div id="works">
      <h2>Portfolio</h2>
      <div className="underline"></div>
      <div>
        <img src={bloom} alt="" />
        <img src={pokie_api} alt="" />
        <img src={wemundo} alt="" />
      </div>
    </div>
  )
}
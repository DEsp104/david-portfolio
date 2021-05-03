import github from "../images/contact/github.svg";
import linkedin from "../images/contact/linkedin.svg";
import mail from "../images/contact/mail.svg";






export default function Home() {
  


  return (
    <div id="contact">
      <h2>Contact</h2>
      <div class="underline"></div>
      <ul>
        <li><img src={github} alt="" /></li>
        <li><img src={mail} alt="" /></li>
        <li><img src={linkedin} alt="" /></li>
      </ul>
      
    </div>
  )
}
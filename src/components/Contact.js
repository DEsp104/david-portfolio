import github from "../images/contact/github.svg";
import linkedin from "../images/contact/linkedin.svg";
import mail from "../images/contact/mail.svg";






export default function Home() {
  


  return (
    <div id="contact">
      <h2>Contact</h2>
      <div class="underline"></div>
      <ul>
        <li><a href="https://github.com/DEsp04"><img src={github} alt="" /></a></li>
        <li><a href="mailto:davespinal04@gmail.com"><img src={mail} alt="davespinal04@gmail.com" /></a></li>
        <li><a href="https://www.linkedin.com/in/david-espinal-28b91a1b7/"><img src={linkedin} alt="" /></a></li>
      </ul>
      
    </div>
  )
}
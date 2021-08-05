import github from "../images/contact/github.svg";
import linkedin from "../images/contact/linkedin.svg";
import mail from "../images/contact/mail.svg";



export default function Home() {
  
  const contact = [
    {
      link: "https://github.com/DEsp04",
      logoImg: github,
    },
    {
      link: "mailto:davespinal04@gmail.com",
      logoImg: mail,
    },
    {
      link: "https://www.linkedin.com/in/david-espinal-28b91a1b7/",
      logoImg: linkedin,
    }
  ]

  
  
  return (
    <div id="contact">
      <h2>Contact</h2>
      <div className="underline"></div>
      <ul>
        {
          contact.map((info, index) => {
          return (
            <li key={index}>
              <a href={info.link}><img src={info.logoImg} alt="" /></a>
            </li>
          )
          })
        }
      </ul>
      
    </div>
  )
}
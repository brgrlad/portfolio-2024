import "./contact.css";
import arrow from "../../assets/img/icons/arrow-rotating.png";

export default function Contact1() {
  return (
    <section id="contact">
      <div className="contactContent">
        <h3 className="lets-chat">...lets chat?</h3>
        <h2 className="touch ">GET IN TOUCH!</h2>
        <a href="mailto:hello@devbruno.eu" className="email">
          bruno@devbruno.eu
          <img src={arrow} className="emailIcon" />
        </a>

        <footer>
          <button className="socials"> GITHUB</button>
          <button className="socials"> LINKEDIN</button>
        </footer>
      </div>
    </section>
  );
}

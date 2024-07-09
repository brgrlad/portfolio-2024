import "./contact.css";
import arrowRotating from "../../assets/img/icons/arrow-rotating.png";
import arrowUp from "../../assets/img/icons/arrow-up-solid.svg";

export default function Contact1() {
  return (
    <section id="contact">
      <div className="contactContent">
        <h3 className="lets-chat">...lets chat?</h3>
        <h2 className="touch ">GET IN TOUCH!</h2>
        <p className="email">
          bruno@devbruno.eu
          <img src={arrowRotating} className="emailIcon" />
        </p>

        <footer>
          <a
            href="https://www.linkedin.com/in/grbruno/"
            target="_blank"
            rel="noreferrer"
            className="socials"
          >
            Linkedin
            <img src={arrowUp} />
          </a>
          <a
            href="https://github.com/brgrlad"
            target="_blank"
            rel="noreferrer"
            className="socials"
          >
            gitHub
            <img src={arrowUp} />
          </a>
        </footer>
      </div>
    </section>
  );
}

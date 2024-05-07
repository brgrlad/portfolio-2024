import "./contact.css";

export default function Contact1() {
  return (
    <section id="contact">
      <p className="marquee">
        WANNA SAY HELLO? WORK TOGETHER? GIVE FEEDBACK? WORDS OF ENCOURAGEMENT?
      </p>

      <div className="contactContent">
        {/* <h2>
          STAY <span className="displayInline"> </span>IN TOUCH
        </h2> */}
        <h2 className="touch">STAY IN TOUCH!</h2>

        <p className="email">hello@devbruno.eu</p>

        <footer>
          <button className="socials"> GITHUB</button>
          <button className="socials"> LINKEDIN</button>
        </footer>
      </div>
    </section>
  );
}

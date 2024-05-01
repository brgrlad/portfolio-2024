import "./contact.css";
// import contactIMG from "../../assets/img/FREE PNG SHAPES - KMIXC/10.png";

export default function Contact1() {
  return (
    <section id="contact">
      <p className="marquee">
        WANNA SAY HELLO? WORK TOGETHER? GIVE FEEDBACK? WORDS OF ENCOURAGEMENT?
      </p>

      <div className="contactContent">
        {/* <img src={contactIMG} alt="" className="contactIMG" /> */}
        <h2>
          STAY <span className="displayInline"> </span>IN TOUCH
        </h2>

        <p className="email">hello@devbruno.eu</p>

        <footer>
          <button className="socials"> GITHUB</button>
          <button className="socials"> LINKEDIN</button>
        </footer>
      </div>
    </section>
  );
}

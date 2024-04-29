import "./about.css";
import profilePic from "../../assets/img/portrait.webp";
import profileIcon from "../../assets/img/asset-2.svg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="aboutBackground">
        <h2>ABOUT ME</h2>

        {/* CLASS STROKE  + SPAN*/}
        <h3 className="stroke">
          BRUNO GRECCHI
          {/* BRUNO <span className="stroke"> GRECCHI</span> */}
        </h3>
        <img src={profilePic} className="profilePic"></img>

        <div className="aboutText1">
          <p>
            I`M A WEB DEVELOPER WITH EXPERTISE IN THE MERN STACK OVER 8 YEARS OF
            EXPERIENCE IN THE DIGITAL MARKETING AND COMMUNICATIONS SECTORS.
          </p>
        </div>

        <div className="aboutText2">
          <p>
            I`M A WEB DEVELOPER WITH EXPERTISE IN THE MERN STACK YEARS OF
            EXPERIENCE IN THE DIGITAL MARKETING AND COMMUNICATIONS SECTORS.
          </p>

          <p>
            FLUENT IN ENGLISH, PORTUGUESE, AND SPANISH. PASSIONATE ABOUT
            EMERGING TECH AND THE CREATIVE INDUSTRY AND EAGER TO EMBARK ON A NEW
            CAREER CHAPTER IN THE IT SECTOR!
          </p>
        </div>

        <img src={profileIcon} className="profileIcon"></img>
      </div>
    </section>
  );
}

import "./about.css";
// import profilePic from "../../assets/img/portrait.webp";
import profilePic from "../../assets/img/portrait.webp";
// import profileIcon from "../../assets/img/asset-2.svg";
import starIcon from "../../assets/img/icons/star.svg";

import { motion } from "framer-motion";

export default function About() {
  const enterAnimation = {
    initial: { opacity: 0 },
    transition: { duration: 3 },
    whileInView: { opacity: 1 },
    viewport: { margin: "-100px" },
  };
  const photoAnimation = {
    initial: { y: 200 },
    transition: { duration: 1.5 },
    whileInView: { y: 0 },

    viewport: { margin: "100px" },
  };

  return (
    <section className="about" id="about">
      <div className="aboutBackground">
        <h2>ABOUT ME</h2>

        <motion.h3 {...enterAnimation} className="stroke">
          BRUNO GRECCHI
        </motion.h3>

        <motion.img
          {...photoAnimation}
          src={profilePic}
          className="profilePic"
        />

        <div className="aboutText1">
          <motion.p {...enterAnimation}>
            I`M A WEB DEVELOPER WITH EXPERTISE IN THE MERN STACK OVER 8 YEARS OF
            EXPERIENCE IN THE DIGITAL MARKETING AND COMMUNICATIONS SECTORS.
          </motion.p>
        </div>

        <div className="aboutText2">
          <motion.p {...enterAnimation}>
            I`M A WEB DEVELOPER WITH EXPERTISE IN THE MERN STACK YEARS OF
            EXPERIENCE IN THE DIGITAL MARKETING AND COMMUNICATIONS SECTORS.
          </motion.p>

          <motion.p {...enterAnimation}>
            FLUENT IN ENGLISH, PORTUGUESE, AND SPANISH. PASSIONATE ABOUT
            EMERGING TECH AND THE CREATIVE INDUSTRY AND EAGER TO EMBARK ON A NEW
            CAREER CHAPTER IN THE IT SECTOR!
          </motion.p>
        </div>

        <motion.img
          {...photoAnimation}
          whileInView={{
            ...photoAnimation.whileInView,
            y: "-100px",
            rotate: "90deg",
          }}
          src={starIcon}
          className="profileIcon"
        />
      </div>
    </section>
  );
}

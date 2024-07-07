import "./about.css";

import starIcon from "../../assets/img/icons/star.svg";

import { motion } from "framer-motion";

export default function About() {
  const enterAnimation = {
    initial: { opacity: 0 },
    transition: { duration: 3 },
    whileInView: { opacity: 1 },
    viewport: { margin: "-100px", once: true },
  };
  const photoAnimation = {
    initial: { y: 200 },
    transition: { duration: 1.5 },
    whileInView: { y: 0 },
    viewport: { margin: "100px", once: true },
  };

  return (
    <section className="about" id="about">
      <div className="aboutBackground">
        <h2>ABOUT ME</h2>

        <motion.h3 {...enterAnimation} className="stroke">
          BRUNO GRECCHI
        </motion.h3>

        <motion.div className="profilePic2" {...photoAnimation}></motion.div>

        <div className="aboutText1">
          <motion.p {...enterAnimation} className="heyHello">
            HEY, HELLO THERE !
          </motion.p>
          <motion.p {...enterAnimation}>
            I`M A WEB DEVELOPER BASED IN IRELAND WITH A STRONG FOUNDATION IN
            <span className="emphasis"> JAVASCRIPT </span> AND EXPERTISE IN
            <span className="emphasis"> REACT </span> AND
            <span className="emphasis">NEXT.JS </span>.
          </motion.p>
        </div>

        <div className="aboutText2">
          <motion.p {...enterAnimation}>
            TAKING INSPIRATION FROM CUTTING-EDGE DESIGN AND ALL THINGS CREATIVE,
            I LOVE BUILDING APPLICATIONS THAT NOT ONLY LOOK COOL BUT ALSO FOLLOW
            THE BEST PRACTICES IN SEO AND RESPONSIVE DESIGN.
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

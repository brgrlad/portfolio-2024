import "./works.css";
import ArrowUpSolid from "../../assets/img/icons/arrow-up-solid.svg";
import projectMockup from "../../assets/img/projects-mockups/1.jpg";
import arrowSide from "../../assets/img/icons/next.png";
import gearIcon from "../../assets/img/icons/engine.png";
import { useState } from "react";
import { motion } from "framer-motion";

let initialState = {
  drumMachine: false,
  pinkPiranha: false,
  taraShipping: false,
};

const gearIconAnimation = {
  initial: { rotate: 0 },
  whileInView: { rotate: "360deg" },
  transition: { duration: 2, type: "easeOut" },
  viewport: { once: true },
};

const fadeInAnimation = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, ease: "easeInOut", type: "spring" },
  viewport: { once: true },

  // open: { opacity: 1, height: "auto", scale: 1 },
  // closed: { opacity: 0, height: 0, scale: 0.9 },
  // transition: { duration: 0.5, ease: "easeInOut" },
};

export default function Works() {
  let [isClicked, setIsClicked] = useState(initialState);

  // SHOW/HIDE PROJECT DESCRIPTION
  const handleClick = (property) => {
    setIsClicked((prevState) => ({
      ...prevState,
      [property]: !prevState[property],
    }));
    // setIsClicked((prev) => !prev);
  };

  return (
    <section className="works" id="works">
      <motion.div className="worksHeader" id="works" {...fadeInAnimation}>
        <p className="worksIntro">
          Selected works as of May 2024. A mix of front-end, full-stack and
          mobile applications. All idealized and coded by me, with love, and
          long hours of work!
        </p>
        <h2>WORKS</h2>
      </motion.div>

      <div className="gearIconWrapper">
        <motion.img
          src={gearIcon}
          {...gearIconAnimation}
          transition={{ ...gearIconAnimation.transition, delay: 1 }}
          className="gearIcon"
        />
        <motion.img
          src={gearIcon}
          {...gearIconAnimation}
          transition={{ ...gearIconAnimation.transition, delay: 1.5 }}
          className="gearIcon"
        />
        <motion.img
          src={gearIcon}
          {...gearIconAnimation}
          transition={{ ...gearIconAnimation.transition, delay: 2 }}
          className="gearIcon"
        />
      </div>

      {/* WORKS UL */}
      <ul className="worksUL">
        <motion.li
          {...fadeInAnimation}
          transition={{ ...fadeInAnimation.transition, delay: 1 }}
        >
          <div className="projectTitle">
            <p> PINK PIRANHA</p>
            <img
              src={ArrowUpSolid}
              className="arrowUp"
              style={{
                transform: isClicked.pinkPiranha
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform .5",
              }}
              alt="Arrow Up"
              onClick={() => handleClick("pinkPiranha")}
            />
          </div>

          {isClicked.pinkPiranha && (
            <motion.div className="project" {...fadeInAnimation}>
              <div className="projectDescription">
                <div className="projectText">
                  <h4>PROJECT HIGHLIGHTS</h4>

                  <ul className="projectStack">
                    <li> REACT </li>
                    <li> TAILWIND </li>
                    <li> NEXT JS</li>
                  </ul>

                  <p>
                    For this project I led the front-end development,
                    translating a designer`s layout into a fully functional
                    website.
                  </p>
                  <p>
                    I opted to use Next.js due to its server-side rendering
                    capabilities to boost SEO. For the UI components, I chose
                    Tailwind CSS for efficient and scalable styling.
                  </p>
                  <p>
                    One of the main challenges was adapting the design, which
                    was provided only in a desktop format. To address this, I
                    created responsive versions to ensure a seamless experience
                    across all devices.
                  </p>
                  <p>
                    Finally, I used Framer Motion for a bit of animation and
                    movement to enhance the user experience.
                  </p>
                </div>

                <div className="buttons">
                  <button>
                    SOURCE CODE <img src="../../../public/logos/11github.svg" />
                  </button>
                  <button>
                    VIEW LIVE
                    <img src={arrowSide} className="openArrow" alt="" />
                  </button>
                </div>
              </div>

              {/*add project img here  */}
              <img src={projectMockup} className="projectImage"></img>
            </motion.div>
          )}
        </motion.li>

        {/*------------- * project -------------- */}
      </ul>
    </section>
  );
}

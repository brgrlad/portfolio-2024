import "./works.css";
import ArrowUpSolid from "../../assets/img/icons/arrow-up-solid.svg";
import projectMockup from "../../assets/img/projects-mockups/1.jpg";
import arrowSide from "../../assets/img/icons/next.png";
import gearIcon from "../../assets/img/icons/engine.png";
import { useState } from "react";
import { motion } from "framer-motion";

let initialState = { drumMachine: false, pinkPiranha: false };

const gearIconAnimation = {
  initial: { rotate: 0 },
  whileInView: { rotate: "360deg" },
  transition: { duration: 2, type: "easeOut" },
  viewport: { once: true },
};

const fadeInAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 2, exit: false },
  viewport: { once: true },
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
      <motion.div className="worksHeader" {...fadeInAnimation}>
        <p>
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
          transition={{ ...fadeInAnimation.transition, delay: 1.5 }}
        >
          <div className="projectTitle">
            <p> DRUM MACHINE</p>
            <img
              src={ArrowUpSolid}
              className="arrowUp"
              style={{
                transform: isClicked.drumMachine
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform .5",
              }}
              alt="Arrow Up"
              onClick={() => handleClick("drumMachine")}
            />
          </div>

          {isClicked.drumMachine && (
            <motion.div className="project" {...fadeInAnimation}>
              <div className="projectDescription">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Vitae quod saepe quam consequuntur vero aut! Fuga adipisci
                  nulla perferendis eligendi. Lorem ipsum dolor, sit amet
                  consectetur
                  <span className="newLine">
                    adipisicing elit. Unde, minus. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Unde, minus. quod saepe quam
                    consequuntur vero aut! Fuga adipisci nulla perferendis
                    eligendi.
                  </span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Unde, minu quod saepe quam consequuntur vero aut! Fuga
                  adipisci nulla perferendis eligendi. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Unde, minu quod saepe quam
                  consequuntur vero aut! Fuga adipisci nulla perferendis
                  eligendi. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Unde, minu
                </p>

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

        <motion.li
          {...fadeInAnimation}
          transition={{ ...fadeInAnimation.transition, delay: 1.5 }}
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
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Vitae quod saepe quam consequuntur vero aut! Fuga adipisci
                  nulla perferendis eligendi. Lorem ipsum dolor, sit amet
                  consectetur
                  <span className="newLine">
                    adipisicing elit. Unde, minus. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Unde, minus. quod saepe quam
                    consequuntur vero aut! Fuga adipisci nulla perferendis
                    eligendi.
                  </span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Unde, minu quod saepe quam consequuntur vero aut! Fuga
                  adipisci nulla perferendis eligendi. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Unde, minu quod saepe quam
                  consequuntur vero aut! Fuga adipisci nulla perferendis
                  eligendi. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Unde, minu
                </p>

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

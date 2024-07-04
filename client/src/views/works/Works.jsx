import "./works.css";
import ArrowUpSolid from "../../assets/img/icons/arrow-up-solid.svg";
import projectMockup from "../../assets/img/projects-mockups/1.jpg";
import arrowSide from "../../assets/img/icons/next.png";
import gearIcon from "../../assets/img/icons/engine.png";
import { useState } from "react";
import { motion } from "framer-motion";

let initialState = {
  pinkPiranha: false,
  whatsNew: false,
  drumMachine: false,
  portfolio: false,
  fromValidation: false,
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

      {/* --------- GEAR ICON ANIMATION-------------- */}
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

      {/* ----------- WORKS UL WRAPPER -------------------*/}
      <ul className="worksUL">
        {/* --------- PINK PIRANHA -------------- */}
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
                transition: "transform .3s",
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

        {/* --------- WHATS NEW-------------- */}
        <motion.li
          {...fadeInAnimation}
          transition={{ ...fadeInAnimation.transition, delay: 1 }}
        >
          <div className="projectTitle">
            <p> WHATS NEW</p>
            <img
              src={ArrowUpSolid}
              className="arrowUp"
              style={{
                transform: isClicked.whatsNew
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform .3s",
              }}
              alt="Arrow Up"
              onClick={() => handleClick("whatsNew")}
            />
          </div>

          {isClicked.whatsNew && (
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

        {/* --------- DRUM MACHINE------------- */}
        <motion.li
          {...fadeInAnimation}
          transition={{ ...fadeInAnimation.transition, delay: 1 }}
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
                transition: "transform .3s",
              }}
              alt="Arrow Up"
              onClick={() => handleClick("drumMachine")}
            />
          </div>

          {isClicked.drumMachine && (
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
        {/* --------- MY PORTFOLIO------------- */}
        <motion.li
          {...fadeInAnimation}
          transition={{ ...fadeInAnimation.transition, delay: 1 }}
        >
          <div className="projectTitle">
            <p> MY PORTFOLIO</p>
            <img
              src={ArrowUpSolid}
              className="arrowUp"
              style={{
                transform: isClicked.portfolio
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform .3s",
              }}
              alt="Arrow Up"
              onClick={() => handleClick("portfolio")}
            />
          </div>

          {isClicked.portfolio && (
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
        {/* --------- FORM VALIDATION------------- */}
        <motion.li
          {...fadeInAnimation}
          transition={{ ...fadeInAnimation.transition, delay: 1 }}
        >
          <div className="projectTitle">
            <p> FORM VALIDATION</p>
            <img
              src={ArrowUpSolid}
              className="arrowUp"
              style={{
                transform: isClicked.fromValidation
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform .3s",
              }}
              alt="Arrow Up"
              onClick={() => handleClick("fromValidation")}
            />
          </div>

          {isClicked.fromValidation && (
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
      </ul>
    </section>
  );
}

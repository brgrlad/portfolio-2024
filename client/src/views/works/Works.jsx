import { useState } from "react";
import { motion } from "framer-motion";
import "./works.css";
import ArrowUpSolid from "../../assets/img/icons/arrow-up-solid.svg";
// import projectMockup from "../../assets/img/projects-mockups/1.jpg";
import gitHubIcon from "../../../public/logos/11github.svg";
import arrowSide from "../../assets/img/icons/next.png";
import gearIcon from "../../assets/img/icons/engine.png";

// GEAR ICON ANIMATION
const gearIconAnimation = {
  initial: { rotate: 0 },
  whileInView: { rotate: "360deg" },
  transition: { duration: 2, type: "easeOut" },
  viewport: { once: true },
};

//FADE IN ANIMATION
const fadeInAnimation = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, ease: "easeInOut", type: "spring" },
  viewport: { once: true },
};

// INITIAL STATE FOR OPEN / CLOSE ACCORDION
let initialState = {
  pinkPiranha: false,
  whatsNew: false,
  laCozinha: false,
  portfolio: false,
  fromValidation: false,
};

export default function Works() {
  // STATE FOR SHOW/HIDE PROJECT DESCRIPTION
  let [isClicked, setIsClicked] = useState(initialState);

  // SHOW/HIDE PROJECT DESCRIPTION ON CLICK
  const handleClick = (property) => {
    setIsClicked((prevState) => ({
      ...prevState,
      [property]: !prevState[property],
    }));
  };

  return (
    <section className="works" id="works">
      {/* --------- SECTION DESCRIPTION <p>-------- */}
      <motion.div className="worksHeader" id="works" {...fadeInAnimation}>
        <p className="worksIntro">
          <strong> Selected works as of January 2025 </strong>. A mix of
          front-end, full-stack and mobile applications. All idealized and coded
          by me, with love, and long hours of work!
        </p>
        <h2>WORKS</h2>
      </motion.div>

      {/* --------- GEAR ICON ANIMATION -------- */}
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

      {/* ------------- UL WRAPPER ------------- */}
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
                    <li> NEXT JS</li>
                    <li> RESEND API</li>
                  </ul>

                  <p>
                    I led the front-end development for this project,
                    translating a designer`s layout into a functional website
                    using Next.js for server-side rendering and SEO
                    optimization.
                  </p>

                  <p>
                    Tailwind CSS was chosen for efficient styling, and I adapted
                    the desktop-only design into responsive versions for all
                    devices. Additionally, I incorporated Framer Motion for
                    animations to enhance the user experience.
                  </p>
                </div>

                <div className="buttons">
                  <button>
                    <a
                      href="https://github.com/brgrlad/pink-piranha-website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SOURCE CODE
                    </a>
                    <img src={gitHubIcon} />
                  </button>

                  <button>
                    <a
                      href="https://pinkpiranha.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW LIVE
                    </a>
                    <img src={arrowSide} className="openArrow" alt="" />
                  </button>
                </div>
              </div>
              <div className="imageWrapper">
                <img
                  src="/screen-shots/pink-piranha.png"
                  className="projectImage"
                ></img>
              </div>
            </motion.div>
          )}
        </motion.li>

        {/* ------------- WHATS NEW------------- */}
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
                    <li> MONGO DB </li>
                    <li> NODE JS</li>
                  </ul>

                  <p>
                    This is a full-stack project featuring an experimental news
                    feed with a filter for political bias: liberal, moderate, or
                    conservative. The app sources content from the News.org API.
                  </p>

                  <p>
                    Here, I focused on advanced React concepts like useContext
                    and useReducer, and practiced CSS styling. The back end
                    includes routes and user authentication with Node.js and
                    Express.js, while MongoDB stores user login details and
                    bookmarks.
                  </p>
                </div>

                <div className="buttons">
                  <button>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      SOURCE CODE
                    </a>
                    <img src={gitHubIcon} />
                  </button>

                  {/* <button>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW LIVE
                    </a>
                    <img src={arrowSide} className="openArrow" alt="" />
                  </button> */}
                </div>
              </div>
              <div className="imageWrapper">
                <img
                  src="/screen-shots/news-1.png"
                  className="projectImage whats-new"
                ></img>
              </div>
            </motion.div>
          )}
        </motion.li>

        {/* --------- LA COZINHA------------- */}
        <motion.li
          {...fadeInAnimation}
          transition={{ ...fadeInAnimation.transition, delay: 1 }}
        >
          <div className="projectTitle">
            <p> LA COZINHA </p>
            <img
              src={ArrowUpSolid}
              className="arrowUp"
              style={{
                transform: isClicked.laCozinha
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform .3s",
              }}
              alt="Arrow Up"
              onClick={() => handleClick("laCozinha")}
            />
          </div>

          {isClicked.laCozinha && (
            <motion.div className="project" {...fadeInAnimation}>
              <div className="projectDescription">
                <div className="projectText">
                  <h4>PROJECT HIGHLIGHTS</h4>

                  <ul className="projectStack">
                    <li> HTML </li>
                    <li> CSS</li>
                    <li> JAVASCRIPT</li>
                  </ul>

                  <p>
                    During my time at Amenitiz Barcelona, I led both the design
                    and front-end development of this project. Through close
                    collaboration and multiple client meetings, I successfully
                    translated my client`s abstract ideas into a tangible,
                    business-focused website.
                  </p>

                  <p>
                    Working with HTML, CSS, and JavaScript, I built upon one of
                    Amenitiz existing templates to accelerate development while
                    ensuring a custom feel.
                  </p>
                </div>

                <div className="buttons">
                  <button>
                    <a
                      href="https://www.lacozinha.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW LIVE
                    </a>
                    <img src={gitHubIcon} />
                  </button>
                </div>
              </div>
              <div className="imageWrapper">
                <img
                  src="/screen-shots/la-cozinha2.png"
                  className="projectImage whats-new"
                ></img>
              </div>
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
                    <li> FRAMER MOTION</li>
                  </ul>

                  <p>
                    This portfolio showcases my skills. I conceptualized,
                    designed, and coded the entire website from the ground up
                    using React. It`s a single-page front-end application, and
                    due to the customizable layout, I opted for CSS over UI
                    libraries to achieve a clean, responsive look.
                  </p>

                  <p>
                    I integrated Framer Motion for subtle animations to enhance
                    the user experience. This is an ever-evolving page, and I
                    plan to further split the code into smaller chunks to
                    improve separation of concerns.
                  </p>
                </div>

                <div className="buttons">
                  <button>
                    <a
                      href="https://github.com/brgrlad/portfolio-2024"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SOURCE CODE
                    </a>
                    <img src={gitHubIcon} />
                  </button>
                </div>
              </div>
              <div className="imageWrapper">
                <img
                  src="/screen-shots/portfolio.png"
                  className="projectImage"
                />
              </div>
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
                    <li> JAVASCRIPT </li>
                    <li> REGEX </li>
                    <li> HTML </li>
                    <li> CSS</li>
                  </ul>

                  <p>
                    A simple yet efficient form validation code that checks for
                    empty fields and a valid email address. Upon completion, the
                    UI displays a success message. Errors are shown when
                    pertinent.
                  </p>

                  <p>
                    This component was coded in pure JavaScript, HTML, and CSS.
                    I didn`t want to use any libraries as I thought this would
                    be great practice to keep it simple.
                  </p>

                  <p>
                    Perhaps the most interesting part here is the use of Regular
                    Expressions (regex) to validate the email field.
                  </p>
                </div>

                <div className="buttons">
                  <button>
                    <a
                      href="https://github.com/brgrlad/form-validation-challenge-fm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SOURCE CODE
                    </a>
                    <img src={gitHubIcon} />
                  </button>

                  <button>
                    <a
                      href="https://brgrlad.github.io/form-validation-challenge-fm/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW LIVE
                    </a>
                    <img src={arrowSide} className="openArrow" alt="" />
                  </button>
                </div>
              </div>
              <div className="imageWrapper">
                <img
                  src="/screen-shots/form-validation.png"
                  className="projectImage"
                ></img>
              </div>
            </motion.div>
          )}
        </motion.li>
      </ul>
    </section>
  );
}

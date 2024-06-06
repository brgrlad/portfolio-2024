import "./nav.css";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";

export default function Nav() {
  const animationSettings = {
    initial: { opacity: 0.5, y: -1200 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -1200 },
    transition: { duration: 1 },
  };

  let [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <motion.header {...animationSettings}>
      <h1 className="h1Header">BRUNO GRECCHI</h1>

      <nav>
        <button onClick={handleClick}> MENU </button>

        <AnimatePresence>
          {toggleMenu && (
            <motion.ul {...animationSettings} className="navUL">
              <p className="stroke selectedWorks">SELECTED WORKS 2024</p>

              <button onClick={handleClick} className="closeButton">
                CLOSE
              </button>

              <li>
                <a href="#home" onClick={handleClick}>
                  <span className="number">01</span> HOME
                </a>
              </li>

              <li>
                <a href="#about">
                  <span className="number">02</span> ABOUT
                </a>
              </li>
              <li>
                <a href="#tech-stack">
                  <span className="number">02</span> TECH-STACK
                </a>
              </li>
              <li>
                <a href="#works">
                  <span className="number">02</span> WORKS
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span className="number">02</span> CONTACT
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

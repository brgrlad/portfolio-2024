import "./nav.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        <button className="menuButton" onClick={handleClick}>
          MENU
        </button>

        <AnimatePresence>
          {toggleMenu && (
            <motion.ul {...animationSettings} className="navUL">
              <p className="stroke selectedWorks">SELECTED WORKS 2025</p>

              <button onClick={handleClick} className="closeButton">
                CLOSE
              </button>

              <li>
                <a href="#home" onClick={handleClick}>
                  <span className="number">#1</span> HOME
                </a>
              </li>

              <li>
                <a href="#about" onClick={handleClick}>
                  <span className="number">#2</span> ABOUT
                </a>
              </li>
              <li>
                <a href="#tech-stack" onClick={handleClick}>
                  <span className="number">#3</span> TECH-STACK
                </a>
              </li>
              <li>
                <a href="#works" onClick={handleClick}>
                  <span className="number">#4</span> WORKS
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleClick}>
                  <span className="number">#5</span> CONTACT
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

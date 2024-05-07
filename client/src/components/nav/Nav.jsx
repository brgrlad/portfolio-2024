import "./nav.css";
import { motion } from "framer-motion";

import { useState } from "react";

export default function Nav() {
  const animationSettings = {
    initial: { opacity: 1, y: -2000 },
    animate: { opacity: 1, y: 0 },

    transition: { duration: 1, delay: 1, type: "spring" },
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

        {toggleMenu && (
          <motion.ul {...animationSettings} className="navUL">
            <p className="stroke selectedWorks">SELECTED WORKS 2024</p>

            <button onClick={handleClick} className="closeButton">
              CLOSE
            </button>
            <li>
              <span className="number">01</span>HOME
            </li>
            <li>
              <span className="number">02</span>ABOUT
            </li>
            <li>
              <span className="number">03</span>TECH-STACK
            </li>
            <li>
              <span className="number">04</span>WORKS
            </li>
            <li>
              <span className="number">05</span>CONTACT
            </li>
          </motion.ul>
        )}
      </nav>
    </motion.header>
  );
}

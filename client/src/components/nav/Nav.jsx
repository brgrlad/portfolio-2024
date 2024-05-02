import "./nav.css";

import { useState } from "react";

export default function Nav() {
  let [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <header>
      <h1 className="h1Header">BRUNO GRECCHI</h1>

      <nav>
        <button onClick={handleClick}> MENU </button>

        {toggleMenu && (
          <ul className="navUL">
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
          </ul>
        )}
      </nav>
    </header>
  );
}

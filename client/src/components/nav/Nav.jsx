import "./nav.css";
import menuImg from "../../assets/img/FREE PNG SHAPES - KMIXC/8.png";
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
            <img src={menuImg} alt="" />
            <button onClick={handleClick}>CLOSE</button>
            <li>HOME</li>
            <li>ABOUT ME</li>
            <li>TECH-STACK</li>
            <li>WORKS</li>
            <li>CONTACT</li>
          </ul>
        )}
      </nav>
    </header>
  );
}

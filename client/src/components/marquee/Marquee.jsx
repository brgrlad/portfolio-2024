import "./marquee.css";

import sunIcon from "../../assets/img/icons/sun.svg";
import Marquee from "react-fast-marquee";

export default function Marquee1() {
  return (
    <>
      <Marquee autoFill={true} speed={30}>
        <div className="marqueeWrapper">
          <h2>TECH-STACK AND SKILLS SET</h2>
          <img src={sunIcon} />
        </div>
      </Marquee>
    </>
  );
}

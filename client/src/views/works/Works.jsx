import "./works.css";
import ArrowUpSolid from "../../assets/img/arrow-up-solid.svg";
import samplePic from "../../assets/img/10.png";
import { useState } from "react";

export default function Works() {
  let [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <section className="works" id="works">
      <div className="worksHeader">
        <h2>WORKS</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae
        molestiae libero odit tempora consequuntur non enim nulla eius harum
        officiis ab vel minima, nihil, odio asperiores eum, nobis in.
      </div>

      <ul className="worksUL">
        <li>
          DRUM MACHINE
          <img
            src={ArrowUpSolid}
            className="arrowUp"
            alt="Arrow Up"
            onClick={handleClick}
          />
        </li>

        {/*------------- * project -------------- */}
        {isClicked && (
          <div className="project">
            <div className="projectDescription">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                quod saepe quam consequuntur vero aut! Fuga adipisci nulla
                perferendis eligendi. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Unde, minus. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Unde, minus. quod saepe quam
                consequuntur vero aut! Fuga adipisci nulla perferendis eligendi.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
                minu quod saepe quam consequuntur vero aut! Fuga adipisci nulla
                perferendis eligendi. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Unde, minu quod saepe quam consequuntur vero
                aut! Fuga adipisci nulla perferendis eligendi. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Unde, minu
              </p>

              <p className="tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>{" "}
                <span className="tag">FRONT END</span>{" "}
                <span className="tag">MONGO</span>
              </p>
            </div>

            <img src={samplePic} className="project1"></img>
          </div>
        )}
        <li>
          NEWS APP
          <img src={ArrowUpSolid} className="arrowUp" alt="Arrow Up" />
        </li>
        <li>
          SIGN UP
          <img src={ArrowUpSolid} className="arrowUp" alt="Arrow Up" />
        </li>
        <li>
          AUTH
          <img src={ArrowUpSolid} className="arrowUp" alt="Arrow Up" />
        </li>
      </ul>
    </section>
  );
}

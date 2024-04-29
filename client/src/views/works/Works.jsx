import "./works.css";
import ArrowUpSolid from "../../assets/img/arrow-up-solid.svg";
import samplePic from "../../assets/img/gradients/10.png";
import arrowSide from "../../assets/img/icons/next.png";
import star from "../../assets/img/svgs/asset-2.svg";
// import newImg from "../../assets/img/icons/pattern.png";
import { useState } from "react";

export default function Works() {
  let [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <section className="works" id="works">
      <div className="worksHeader">
        <p>
          Selected works as of May 2024. A mix of front-end, full-stack and
          mobile applications. All idealized and coded by me, with love, and
          long hours of work!
        </p>
        <h2>WORKS</h2>
      </div>

      <div className="starWrapper">
        <img src={star} className="star" />
        <img src={star} className="star" />
        <img src={star} className="star" />
      </div>

      <ul className="worksUL">
        <li>
          <div className="projectTitle">
            <p> DRUM MACHINE</p>
            <img
              src={ArrowUpSolid}
              className="arrowUp"
              alt="Arrow Up"
              onClick={handleClick}
            />
          </div>
        </li>

        <li>
          <div className="projectTitle">
            <p> DRUM MACHINE</p>
            <img
              src={ArrowUpSolid}
              className="arrowUp"
              alt="Arrow Up"
              onClick={handleClick}
            />
          </div>
        </li>

        <li>
          <div className="projectTitle">
            <p> DRUM MACHINE</p>
            <img
              src={ArrowUpSolid}
              className="arrowUp"
              alt="Arrow Up"
              onClick={handleClick}
            />
          </div>

          {isClicked && (
            <div className="project">
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
                {/* 
                <p className="tags">
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>{" "}
                  <span className="tag">FRONT END</span>{" "}
                  <span className="tag">MONGO</span>
                </p> */}
              </div>

              <img src={samplePic} className="projectImage"></img>
            </div>
          )}
        </li>

        {/*------------- * project -------------- */}
      </ul>
    </section>
  );
}

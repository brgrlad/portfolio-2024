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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui.lorem
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          voluptate!
        </p>
        <h2>WORKS</h2>
      </div>
      {/* <img src={newImg} className="myNewImg"></img> */}
      <img src={star} className="star"></img>
      <img src={star} className="star"></img>
      <img src={star} className="star"></img>
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
                <span className="newLine">
                  adipisicing elit. Unde, minus. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Unde, minus. quod saepe quam
                  consequuntur vero aut! Fuga adipisci nulla perferendis
                  eligendi.
                </span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
                minu quod saepe quam consequuntur vero aut! Fuga adipisci nulla
                perferendis eligendi. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Unde, minu quod saepe quam consequuntur vero
                aut! Fuga adipisci nulla perferendis eligendi. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Unde, minu
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

              {/* <p className="tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>{" "}
                <span className="tag">FRONT END</span>{" "}
                <span className="tag">MONGO</span>
              </p> */}
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

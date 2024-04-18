import "./stack.css";
// import js from "../../../public/logos/01javascript.svg";

import Marquee from "../../components/marquee/Marquee";

const logos = [
  "01Javascript.svg",
  "02React.svg",
  "03HTML.svg",
  "04CSS.svg",
  "05Node.svg",
  "06Mongo.svg",
  "07Express.svg",
  "08Framer.svg",
  "09Bootstrap.svg",
  "10SaSS.svg",
  "11GitHub.svg",
];

export default function Stack() {
  return (
    <section className="tech-stack">
      <Marquee />
      {/* <h3>TECHNOLOGIES I WORK WITH </h3> */}

      <section className="logos">
        {logos.map((fileName, index) => (
          <div className="logoWrapper" key={index}>
            <img
              key={index}
              src={"../../../public/logos/" + fileName}
              alt={`Image ${index}`}
              className="gallery-image"
            />
            <p>{fileName.substring(2, fileName.length - 4)}</p>
          </div>
        ))}
      </section>
    </section>
  );
}

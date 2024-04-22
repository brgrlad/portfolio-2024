import "./stack1.css";
import Marquee from "../../components/marquee/Marquee";

const logos = [
  "20Javascript.svg",
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
  "12Postman.svg",
];

export default function Stack1() {
  return (
    <section className="tech-stack">
      <Marquee />

      <div className="logosWrapper">
        <div className="h3Wrapper">
          <h3>STUFF I WORK WITH</h3>
          <p>FRONT TO BACK-END, AND ANYTHING IN BETWEEN</p>
        </div>

        {logos.map((fileName, index) => (
          <div className="logoCard1" key={index}>
            <img
              key={index}
              src={"../../../public/logos/" + fileName}
              alt={`Image ${index}`}
              className="gallery-image1"
            />
            <p className="logoName">
              {fileName.substring(2, fileName.length - 4)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

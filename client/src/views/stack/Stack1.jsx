import "./stack1.css";
import Marquee1 from "../../components/marquee/Marquee";
import { motion } from "framer-motion";

//LOGO  NAMES TO FETCH AND RENDER IMAGES CONDITIONALLY
const logos = [
  "01Javascript.svg",
  "02React.svg",
  "14Next.svg",
  "03HTML.svg",
  "04CSS.svg",
  "10SaSS.svg",
  "08Framer.svg",
  "09Bootstrap.svg",
  "15Tailwind.svg",
  "05Node.svg",
  "06Mongo.svg",
  "07Express.svg",
  "11GitHub.svg",
  "12Postman.svg",
];

export default function Stack1() {
  const fromTheTop = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
  };

  return (
    <section className="tech-stack" id="tech-stack">
      <Marquee1 />

      <div className="logosWrapper">
        <div className="h3Wrapper">
          <h3>STUFF I WORK WITH</h3>
          <p>FRONT TO BACK-END, AND ANYTHING IN BETWEEN !</p>
        </div>

        {logos.map((fileName, index) => (
          <motion.div
            className="logoCard1"
            {...fromTheTop}
            transition={{
              ...fromTheTop.transition,
              delay: index / 5,
            }}
            key={index}
          >
            <img
              key={index}
              src={"/logos/" + fileName}
              alt={`Image ${index}`}
              className="gallery-image1"
            />
            <p className="logoName">
              {fileName.substring(2, fileName.length - 4)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

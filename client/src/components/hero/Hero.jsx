import "./hero.css";
import arrowDown from "../../assets/img/icons/down-right.png";
import { motion } from "framer-motion";

export default function Hero() {
  const attention = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      delay: 3,
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    },
  };

  const fromTheTop = {
    initial: { y: -1000, opacity: 10 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 2, type: "spring" },
  };

  const disappear = {
    exit: { opacity: 0, scale: 0, transition: { duration: 2 } },
    viewport: { once: true, amount: 0.5 },
    offset: 0.5,
  };

  return (
    <motion.section className="hero">
      <motion.div
        {...fromTheTop}
        transition={{ ...fromTheTop.transition, delay: 0.2 }}
        className="row"
      >
        <h2 className="stroke marginRight">WEB DEVELOPER</h2>
      </motion.div>

      <motion.div
        {...fromTheTop}
        transition={{ ...fromTheTop.transition, delay: 0.4 }}
        className="row creative"
      >
        <p className="and">AND </p>
        <p className="headerP textGIF">CREATIVE MIND</p>
      </motion.div>

      <motion.div
        className="row"
        {...fromTheTop}
        transition={{ ...fromTheTop.transition, delay: 0.6 }}
        {...disappear}
      >
        <h3 className="stroke marginLeft">BASED IN DUBLIN</h3>
        <motion.img
          {...attention}
          src={arrowDown}
          className="scrollDown arrowDown"
        />
      </motion.div>
    </motion.section>
  );
}

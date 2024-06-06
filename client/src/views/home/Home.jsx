import "./home.css";
import Nav from "../../components/nav/Nav";
import Hero from "../../components/hero/Hero";
import { motion } from "framer-motion";

export default function Home() {
  const scaleUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 2 },
  };
  return (
    <motion.div {...scaleUp} className="homeWrapper" id="home">
      <Nav />
      <Hero />
    </motion.div>
  );
}

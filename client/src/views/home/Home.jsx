import "./home.css";
import Nav from "../../components/nav/Nav";
import Hero from "../../components/hero/Hero";

export default function Home() {
  return (
    <div className="homeWrapper">
      <Nav />
      <Hero />
    </div>
  );
}

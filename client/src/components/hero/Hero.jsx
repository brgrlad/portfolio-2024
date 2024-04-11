import "./hero.css";
export default function Hero() {
  return (
    <section className="hero">
      <div className="row ">
        <h2 className="stroke marginRight">WEB DEVELOPER</h2>
      </div>
      <div className="row creative">
        <p className="and">AND </p>
        <p className="headerP textGIF">CREATIVE MIND </p>
      </div>
      <div className="row">
        <h3 className="stroke marginLeft">BASED IN DUBLIN</h3>
        <div className="arrow">
          <p>SCROLL DOWN</p>
        </div>
      </div>
    </section>
  );
}

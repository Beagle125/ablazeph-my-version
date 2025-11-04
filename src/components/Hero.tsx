import Button from "./Button";
import Img from "./Img";
import HeroImage from "../assets/hero.jpg";
import Slash from "../assets/slash.jpg";

const Hero = () => {
  return (
    <section className="flex flex--column align--center block--primary hero">
      <Img src={Slash} className="slash" />
      <div className="flex flex--column align--center hero__content">
        <span className="hero__destination">
          2F MGC Veranda Tinajeros Malabon City
        </span>
        <header>
          <h1>ABLAZE for Jesus Family Church</h1>
        </header>
        <span className="hero__tagline">
          Loving God, Loving People, Making Disciples
        </span>
        <div className="flex flex--column gap--md hero__btns">
          <Button type="outline">Join</Button>
          <Button color="special">Sign Up for a Discipleship Group</Button>
        </div>
        <span className="hero__cta">Join us every Sunday at 10:00 AM</span>
      </div>
      <div className="hero__container">
        <div className="hero__gradient"></div>
        <Img src={HeroImage} />
      </div>
    </section>
  );
};

export default Hero;

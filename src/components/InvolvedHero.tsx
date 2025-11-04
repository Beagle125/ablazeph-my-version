import Button from "./Button";
import JC from "../assets/jc.jpg";
import Img from "./Img";

const InvolvedHero = () => {
  return (
    <section className="block involved-hero">
      <div className="involved-hero__circle"></div>
      <div className="grid grid--1x2 gap--xlg align--center container involved-hero__container">
        <div>
          <header className="header involved-hero__header">
            <h1>Serve With Us.</h1>
          </header>
          <div className="flex flex--column gap--md involved-hero__btns">
            <Button color="accent">Join</Button>
            <Button color="special">Sign Up for a Discipleship Group</Button>
          </div>
        </div>
        <Img src={JC} className="involved-hero__image" />
      </div>
    </section>
  );
};

export default InvolvedHero;

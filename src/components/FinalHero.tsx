import Button from "./Button";

const FinalHero = () => {
  return (
    <section className="block--shade final-hero">
      <div className="flex flex--column justify--center align--center final-hero__gradient">
        <h2>Serve with us</h2>
        <div className="flex flex--column gap--lg final-hero__container">
          <Button type="outline">Join</Button>
          <Button color="special">Sign up for a Discipleship Group</Button>
        </div>
      </div>
    </section>
  );
};

export default FinalHero;

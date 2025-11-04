import Events from "../assets/events.jpg";
import Sermon from "../assets/sermon.jpg";
import Feature from "./Feature";

const HomeMemories = () => {
  return (
    <section className="block block--shade memories">
      <div className="container memory__container">
        <header className="header">
          <h2>Memories</h2>
        </header>
        <Feature
          src={Events}
          heading="Events"
          btnName="Learn More"
          btnPath="events"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat
          tenetur culpa cupiditate excepturi numquam laudantium autem id maiores
          voluptate.
        </Feature>
        <Feature
          src={Sermon}
          heading="Sermons"
          btnName="Learn More"
          btnPath="sermons"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat
          tenetur culpa cupiditate excepturi numquam laudantium autem id maiores
          voluptate.
        </Feature>
      </div>
    </section>
  );
};

export default HomeMemories;

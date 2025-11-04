import ModalFeature from "./ModalFeature";
import PastorJC from "../assets/jc.jpg";
import Betchai from "../assets/betchai.jpg";

const elders = [
  {
    src: PastorJC,
    heading: "JC",
    description: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae labore
        quo nemo quam consequatur sit minus esse id illo sunt.
    `,
  },
  {
    src: Betchai,
    heading: "Betchai",
    description: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae labore
        quo nemo quam consequatur sit minus esse id illo sunt.
    `,
  },
  {
    src: PastorJC,
    heading: "JC",
    description: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae labore
        quo nemo quam consequatur sit minus esse id illo sunt.
    `,
  },
];

const LeadershipElders = () => {
  return (
    <section className="block container">
      <header>
        <h2 className="leadership__heading">Our Elders</h2>
      </header>
      {elders.map((elder) => (
        <ModalFeature src={elder.src} heading={elder.heading}>
          {elder.description}
        </ModalFeature>
      ))}
    </section>
  );
};

export default LeadershipElders;

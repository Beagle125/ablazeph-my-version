import PersonCard from "./PersonCard";
import PastorJC from "../assets/jc.jpg";
import Betchai from "../assets/betchai.jpg";

const pastors = [
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

const AboutPastors = () => {
  return (
    <section className="block container">
      <header className="header">
        <h2>Our Pastors and Leaders</h2>
      </header>
      <div className="flex flex--wrap justify--center">
        {pastors.map((pastor) => (
          <PersonCard src={pastor.src} heading={pastor.heading}>
            {pastor.description}
          </PersonCard>
        ))}
      </div>
    </section>
  );
};

export default AboutPastors;

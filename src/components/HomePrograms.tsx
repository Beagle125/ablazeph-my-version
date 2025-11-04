import PosterCard from "./PosterCard";
import Program from "../assets/program.png";

const programs = [
  {
    src: Program,
    heading: "Sunday Services",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, eum.",
    linkName: "Learn More",
    path: "what-we-do",
  },
  {
    src: Program,
    heading: "Prayer Meeting",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, eum.",
    linkName: "Learn More",
    path: "what-we-do",
  },
  {
    src: Program,
    heading: "Ministries",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, eum.",
    linkName: "Learn More",
    path: "what-we-do",
  },
];

const HomePrograms = () => {
  return (
    <section className="block container">
      <header className="header">
        <h2>What we Do</h2>
      </header>
      <div className="flex flex--wrap gap--lg justify--center">
        {programs.map((program) => (
          <PosterCard
            src={program.src}
            heading={program.heading}
            linkName={program.linkName}
            path={program.path}
          >
            {program.description}
          </PosterCard>
        ))}
      </div>
    </section>
  );
};

export default HomePrograms;

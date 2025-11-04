import DetailedFeature from "./DetailedFeature";
import JC from "../assets/jc.jpg";
import Feature1 from "../assets/testimonials/testimonial-1.mp4";

const sermonFeatures = [
  {
    heading: "Live Your Day Like It's Your Last.",
    src: Feature1,
    profileSrc: JC,
    references: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, natus.
    `,
    date: "March 22",
    author: "Pastor JC",
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
      eveniet est iusto molestias suscipit sed nisi saepe enim, totam
      veritatis.
    `,
  },
  {
    heading: "Live Your Day Like It's Your Last.",
    src: Feature1,
    profileSrc: JC,
    references: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, natus.
    `,
    date: "March 22",
    author: "Pastor JC",
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
      eveniet est iusto molestias suscipit sed nisi saepe enim, totam
      veritatis.
    `,
  },

  {
    heading: "Live Your Day Like It's Your Last.",
    src: Feature1,
    profileSrc: JC,
    references: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, natus.
    `,
    date: "March 22",
    author: "Pastor JC",
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
      eveniet est iusto molestias suscipit sed nisi saepe enim, totam
      veritatis.
    `,
  },
  {
    heading: "Live Your Day Like It's Your Last.",
    src: Feature1,
    profileSrc: JC,
    references: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, natus.
    `,
    date: "March 22",
    author: "Pastor JC",
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
      eveniet est iusto molestias suscipit sed nisi saepe enim, totam
      veritatis.
    `,
  },
];

const SermonsFeatures = () => {
  return (
    <section className="block container sermon-features">
      <header className="sermon-features__header">
        <h1>Sermons.</h1>
        <p>Teachings for Spiritual Growth.</p>
      </header>
      <div className="sermon-features__container">
        {sermonFeatures.map((feature) => (
          <DetailedFeature
            btnName="See Scripture References"
            heading={feature.heading}
            src={feature.src}
            profileSrc={feature.profileSrc}
            references={feature.references}
            date={feature.date}
            author={feature.author}
          >
            {feature.description}
          </DetailedFeature>
        ))}
      </div>
    </section>
  );
};

export default SermonsFeatures;

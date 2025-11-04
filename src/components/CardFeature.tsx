import Img from "./Img";

interface Props {
  src: string;
  heading: string;
  children: string;
}

const CardFeature = ({ src, heading, children }: Props) => {
  return (
    <article className="card card-feature">
      <div>
        <h3>{heading}</h3>
        <p>{children}</p>
      </div>
      <Img src={src} />
    </article>
  );
};

export default CardFeature;

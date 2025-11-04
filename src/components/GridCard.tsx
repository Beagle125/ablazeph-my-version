import Img from "./Img";

interface Props {
  src: string;
  heading: string;
  children: string;
}

const GridCard = ({ src, heading, children }: Props) => {
  return (
    <article className="grid grid--1x2 gap--xlg card grid__card">
      <div>
        <h3>{heading}</h3>
        <p>{children}</p>
      </div>
      <Img src={src} />
    </article>
  );
};

export default GridCard;

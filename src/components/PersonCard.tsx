import Img from "./Img";

interface Props {
  src: string;
  heading: string;
  children: string;
}

const PersonCard = ({ src, heading, children }: Props) => {
  return (
    <article className="card person__card">
      <Img src={src} className="card__image" />
      <h3 className="card__heading">{heading}</h3>
      <p className="card__description">{children}</p>
    </article>
  );
};

export default PersonCard;

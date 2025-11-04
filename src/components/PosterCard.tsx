import { Link } from "react-router-dom";
import Img from "./Img";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  src: string;
  heading: string;
  children: string;
  linkName: string;
  path: string;
}

const PosterCard = ({ src, heading, children, linkName, path }: Props) => {
  return (
    <article className="card poster__card">
      <div className="card__background"></div>
      <Img src={src} className="card__image" />
      <header>
        <h3 className="card__heading">{heading}</h3>
      </header>
      <p className="card__description">{children}</p>
      <Link to={path} className="flex align--center gap--md card__link">
        {linkName}
        <FaArrowRightLong />
      </Link>
    </article>
  );
};

export default PosterCard;

import Img from "./Img";
import Button from "./Button";
import { Link } from "react-router-dom";

interface Props {
  src: string;
  heading?: string;
  children: string;
  btnName?: string;
  btnPath?: string;
}

const Feature = ({ heading, children, btnName, btnPath, src }: Props) => {
  return (
    <article className="grid grid--1x2 gap--xlg feature">
      <div>
        {heading && <h3>{heading}</h3>}
        <p>{children}</p>
        {btnName && btnPath && (
          <Link to={btnPath}>
            <Button>{btnName}</Button>
          </Link>
        )}
      </div>
      <Img src={src} className="feature__image" />
    </article>
  );
};

export default Feature;

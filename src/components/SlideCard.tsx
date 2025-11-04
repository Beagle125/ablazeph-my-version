import Img from "./Img";

interface Props {
  style?: "light" | "dark";
  src: string;
  heading: string;
  children: string;
}

const SlideCard = ({ style = "dark", heading, children, src }: Props) => {
  return (
    <div className={`card slide__card ${style}`}>
      <Img src={src} className="slide__image" />
      <h3>{heading}</h3>
      <p>{children}</p>
      <div className="slide__background"></div>
      <div className="slide__bar slide__prev"></div>
      <div className="slide__bar slide__next"></div>
    </div>
  );
};

export default SlideCard;

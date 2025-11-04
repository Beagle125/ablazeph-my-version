import { RiDoubleQuotesL } from "react-icons/ri";
import Img from "./Img";

interface Props {
  src: string;
  children: string;
  author: string;
  role: string;
}

const SquareTestimonial = ({ src, children, author, role }: Props) => {
  return (
    <div className="grid grid--1x2 gap--lg testimonial dark">
      <div className="testimonial__container">
        <Img src={src} />
        <span className="flex justify--center align--center icon__quote">
          <RiDoubleQuotesL />
        </span>
      </div>
      <div className="flex flex--column justify--center testimonial__content">
        <blockquote>{children}</blockquote>
        <div className="flex gap--lg">
          <span className="quote__line"></span>
          <div>
            <h4>{author}</h4>
            <span className="testimonial__role">{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareTestimonial;

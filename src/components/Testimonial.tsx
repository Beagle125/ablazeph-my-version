import { ReactNode } from "react";
import { FaUser } from "react-icons/fa";

interface Props {
  children: ReactNode;
  name: string;
  date: string;
  commenterType: string;
}

const Testimonial = ({ children, name, date, commenterType }: Props) => {
  return (
    <article className="flex gap--md testimonial">
      <div className="testimonial__image">
        <FaUser className="icon" color="6f6f6f" />
      </div>
      <div>
        <header className="flex align--center testimonial__header">
          <span className="testimonial__name">@{name}</span>
          <span className="divider"></span>
          <span className="testimonial__date">{date}</span>
          <span className="testimonial__type">{commenterType}</span>
        </header>
        <blockquote className="quote">{children}</blockquote>
      </div>
    </article>
  );
};

export default Testimonial;

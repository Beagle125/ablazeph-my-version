import Img from "./Img";

interface Props {
  heading: string;
  children: string;
  src: string;
}

const ModalFeature = ({ heading, children, src }: Props) => {
  return (
    <article className="grid grid--1x2 gap--lg modal-feature">
      <div className="feature__container">
        <Img src={src} className="modal-feature__image" />
      </div>
      <div className="feature__content modal-feature__content">
        <h3 className="feature__heading modal-feature__heading">{heading}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
};

export default ModalFeature;

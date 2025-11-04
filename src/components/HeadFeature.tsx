import Img from "./Img";

interface Props {
  heading: string;
  children: string;
  logo: string;
  featureSrc: string;
  featureRole: string;
  featureName: string;
}

const HeadFeature = ({
  heading,
  children,
  logo,
  featureSrc,
  featureRole,
  featureName,
}: Props) => {
  return (
    <article className="grid grid--1x2 gap--xlg feature head-feature">
      <div>
        <Img src={logo} className="head-feature__logo" />
        <Img src={featureSrc} className="feature__image head-feature__image" />
        <div className="head-feature__container">
          <span className="head-feature__role">{featureRole}</span>
          <span className="head-feature__name">{featureName}</span>
        </div>
      </div>
      <div>
        {heading && <h3>{heading}</h3>}
        <p>{children}</p>
      </div>
    </article>
  );
};

export default HeadFeature;

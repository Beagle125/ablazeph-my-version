import { useState } from "react";
import Button from "./Button";
import Img from "./Img";
import { IoMdClose } from "react-icons/io";

interface Props {
  src: string;
  profileSrc: string;
  heading: string;
  children: string;
  references: string;
  btnName: string;
  date: string;
  author: string;
}

const DetailedFeature = ({
  src,
  profileSrc,
  heading,
  children,
  references,
  btnName,
  date,
  author,
}: Props) => {
  const [isReferenceActive, setReferenceActive] = useState(false);

  return (
    <>
      {isReferenceActive && <div className="overlay"></div>}
      <article className="grid grid--1x2 gap--xlg feature detailed-feature">
        <div>
          <span className="detailed-feature__profile">
            <Img src={profileSrc} />
          </span>
          <h3>{heading}</h3>
          <div className="flex align--center gap--md detailed-feature__container">
            <span className="detailed-feature__author">{author}</span>
            <span className="divider"></span>
            <span className="detailed-feature__date">{date}</span>
          </div>
          <p className="detailed-feaature__description">{children}</p>
          <div className="detailed-feature__references">
            <Button
              color="accent"
              onClick={() => setReferenceActive(!isReferenceActive)}
            >
              {btnName}
            </Button>
            <div
              className={`reference__container ${
                isReferenceActive && "active"
              }`}
            >
              <span
                className="reference__close"
                onClick={() => setReferenceActive(false)}
              >
                <IoMdClose />
              </span>
              <p>{references}</p>
            </div>
          </div>
        </div>
        <video src={src} controls className="detailed-feature__showcase" />
      </article>
    </>
  );
};

export default DetailedFeature;

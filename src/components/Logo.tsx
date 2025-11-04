import Img from "./Img";
import LogoImage from "../assets/logo.png";
import { Link } from "react-router-dom";

interface Props {
  onClick?: () => void;
}

const Logo = ({ onClick }: Props) => {
  return (
    <Link to="/" className="flex align--center logo" onClick={onClick}>
      <Img src={LogoImage} className="logo__image" />
      <span className="logo__name">
        ABLAZE FOR JESUS <br /> FAMILY CHURCH
      </span>
    </Link>
  );
};

export default Logo;

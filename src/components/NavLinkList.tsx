import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Link {
  path: string;
  icon: ReactNode;
  name: string;
  description: string;
  isBordered?: boolean;
}

interface Props {
  link: Link;
  onClick?: () => void;
}

const NavLinkList = ({ link, onClick }: Props) => {
  return (
    <li className="nav__list">
      <NavLink
        to={link.path}
        className={`flex gap--lg nav__link ${link.isBordered && "bordered"}`}
        onClick={onClick}
      >
        <span className="link__icon">{link.icon}</span>
        <div>
          <span className="link__name">{link.name}</span>
          <span className="link__description">{link.description}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default NavLinkList;

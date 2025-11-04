import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { leftLinks, rightLinks } from "../data/links";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import NavLinkList from "./NavLinkList";

const NavBar = () => {
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const changeBackground = () =>
    window.scrollY >= 80 ? setScrolled(true) : setScrolled(false);

  window.addEventListener("scroll", changeBackground);

  const { pathname } = useLocation();

  const pathCondition =
    pathname == "/" || pathname == "/what-we-do" || pathname == "/involved";

  return (
    <header
      className={`nav__header ${isScrolled && "active"} ${
        pathCondition && "home"
      }`}
    >
      <nav className={`flex align--center ${isMobileMenuOpen && "active"}`}>
        <ul className="nav__lists desktop__lists">
          {leftLinks.map((link) => (
            <li className="flex align--center nav__list desktop__list">
              <span className="desktop__link">{link.name}</span>
              <span className="list__icon">
                <IoMdArrowDropdown />
              </span>
              <ul className="nav__lists dropdown__lists">
                <div className="dropdown__background">
                  {link.dropdown.map((d) => (
                    <NavLinkList link={d} />
                  ))}
                </div>
              </ul>
            </li>
          ))}
        </ul>
        <Logo onClick={() => toggleMobileMenu(false)} />
        <ul className="align--center nav__lists desktop__lists">
          {rightLinks.map((link) => (
            <li className="nav__list">
              <NavLink to={link.path} className="desktop__link">
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <HamburgerMenu onClick={() => toggleMobileMenu(!isMobileMenuOpen)} />
        <div className="mobile__menu ">
          <ul className="nav__lists">
            {leftLinks.map((link) => (
              <li className="nav__list">
                {link.name}
                <ul className="nav__lists dropdown__lists">
                  {link.dropdown.map((d) => (
                    <NavLinkList
                      link={d}
                      onClick={() => toggleMobileMenu(false)}
                    />
                  ))}
                </ul>
              </li>
            ))}
            {rightLinks.map((link) => (
              <NavLinkList
                link={link}
                onClick={() => toggleMobileMenu(false)}
              />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

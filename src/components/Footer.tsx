import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaFacebookF, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail, SiGooglemaps } from "react-icons/si";
import { leftLinks, rightLinks } from "../data/links";

const Footer = () => {
  return (
    <footer>
      <div className="block container flex flex--column align--center footer__container">
        <div className="grid footer__grid top">
          <Logo />
          <div className="flex flex--wrap justify--center footer__icons">
            <span className="footer__icon">
              <FaXTwitter />
            </span>
            <span className="footer__icon">
              <FaFacebookF />
            </span>
            <span className="footer__icon">
              <FaTiktok />
            </span>
            <span className="footer__icon">
              <FaInstagram />
            </span>
            <span className="footer__icon">
              <SiGmail />
            </span>
            <span className="footer__icon">
              <FaYoutube />
            </span>
            <span className="footer__icon">
              <SiGooglemaps />
            </span>
          </div>
        </div>
        <div className="grid footer__grid bottom">
          {leftLinks.map((link) => (
            <section className="footer__section">
              <span className="footer__category">{link.name}</span>
              <ul className="footer__lists">
                {link.dropdown.map((d) => (
                  <li className="footer__list">
                    <NavLink to={d.path} className="footer__link">
                      {d.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section className="footer__section">
            <span className="footer__category">Miscellaneous</span>
            {rightLinks.map((link) => (
              <li className="footer__list">
                <NavLink to={link.path} className="footer__link">
                  {link.name}
                </NavLink>
              </li>
            ))}
          </section>
        </div>
      </div>
      <div className="sub__footer">
        <div className="flex flex--column align--center container">
          <Link to="terms-and-conditions" className="footer__terms">
            Terms and Conditions
          </Link>
          <p className="footer__copyright">
            © 2025 Ablaze for Jesus Family Church. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

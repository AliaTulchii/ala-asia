import "./footer.scss";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useNavItems } from "../Header/Header.Constants";
import {  WHITE_LOGO } from "./Footer.Constant";
import CircleArrowUp from "../../icons/CircleArrowUp";
// import SectionPixelBackground from "../PixelBackground/section/SectionPixelBackground";

const Footer = () => {
  const { t } = useTranslation("footer");
  const navItems = useNavItems();
  // const location = useLocation();

  // const isPolicyPage = location.pathname === "/policy";

  return (
    <footer className="footer" id="contact">
      <div className="line line-fifth" />

      <div className="footer__container container">
        {/* <SectionPixelBackground /> */}

        <div className="line line-first" />
        <div className="line line-second" />
        <div className="line line-third" />
        <div className="line line-fourth" />

        <div className="footer__wrapper-first">
          <NavLink to="/" className="footer__logo-link">
            <img src={WHITE_LOGO} alt="logo" />
          </NavLink>

          <div className="footer__contact">
            <p className="footer__mail">{t("footer.mail")}</p>

            <div className="footer__tel-box">
              <a href="tel:+7(708)5029704" className="footer__tel">
                {t("footer.tel2")}
              </a>
              <a href="tel:+7(707)1040902" className="footer__tel">
                {t("footer.tel1")}
              </a>
             
            </div>
          </div>

          <button onClick={() => window.scrollTo(0, 0)} className="footer__btn">
            <p className="footer__btn-text">{t("footer.btn")}</p>
            <CircleArrowUp />
          </button>
        </div>

        <div className="footer__wrapper-second">
          <p className="footer__rights">{t("footer.rights")}</p>

          <div>
            <nav className="footer__nav">
              <h2 className="footer__nav-title">{t("footer.nav")}</h2>
              <ul className="footer__list">
                {navItems.map((item) => (
                  <li className="footer__item" key={item.key}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `footer__nav-link ${isActive ? "active" : ""}`
                      }
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <p className="footer__text">{item.text}</p>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <NavLink
              to="/policy"
              className="footer__nav-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              <p className="footer__policy">{t("footer.policy")}</p>
            </NavLink>
          </div>

          <div>
            <h2 className="footer__address-title">{t("footer.address")}</h2>
            <address className="footer__address">
              {t("footer.address1")}
            </address>

            <p className="footer__rights-mobile">{t("footer.rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

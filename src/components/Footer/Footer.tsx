import "./footer.scss";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import { useNavItems } from "../Header/Header.Constants";
import SectionPixelBackground from "../PixelBackground/section/SectionPixelBackground";

const Footer = () => {
  const { t } = useTranslation("footer");
  const navItems = useNavItems();
  const location = useLocation();

  const isPolicyPage = location.pathname === "/policy";

  return (
    <footer className="footer" id="contact">
      <div className="footer__container container">
        <SectionPixelBackground />

        <div className="footer__wrapper">
          {!isPolicyPage && (
            <h2 className="footer__title medium__title">{t("footer.title")}</h2>
          )}


          <div className="footer__info">
            <div className="footer__info-box">
              <h2 className="footer__info-title">{t("footer.title1")}</h2>
              <div className="footer__info-title--box">
                <h2 className="footer__info-title">{t("footer.title2")}</h2>
              </div>
            </div>

            <nav className="footer__nav">
              <ul className="footer__list">
                {navItems.map((item) => (
                  <li className="footer__item" key={item.number}>
                    <NavLink
                      to={item.to}
                      className="footer__nav-link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <p className="footer__text">{item.text}</p>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="footer__address">
              <div className="footer__address-box">
                <h3 className="footer__address-title">
                  {t("footer.legalSubtitle")}
                </h3>
                <p className="footer__address-text">{t("footer.legalText2")}</p>
                <p className="footer__address-text">{t("footer.legalText3")}</p>
                <p className="footer__address-text">{t("footer.legalText4")}</p>
              </div>

              <div className="footer__address-box">
                <h3 className="footer__address-title">
                  {t("footer.postalSubtitle")}
                </h3>
                <p className="footer__address-text">{t("footer.legalText2")}</p>
                <p className="footer__address-text">{t("footer.legalText3")}</p>
                <p className="footer__address-text">{t("footer.legalText4")}</p>
              </div>
            </div>
          </div>

          <div className="footer__rights">
            <p>{t("footer.rights")}</p>
            <NavLink
              to="policy"
              className="footer__rights-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              {t("footer.policy")}
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

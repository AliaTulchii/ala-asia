import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import './about-hero.scss'


const AboutHero = () => {
    const {t} = useTranslation("about")
  return (
    <section className="about-hero">
      <div className="about-hero__container container">
        <div className="about-hero__content">
          <h1 className="about-hero__title">{t("about.hero.title")}</h1>
          <p className="about-hero__text">{t("about.hero.text")}</p>
          <NavLink to="/services" className="about-hero__btn">
            {t("about.hero.btn")}
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;

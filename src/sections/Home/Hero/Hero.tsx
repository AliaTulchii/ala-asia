import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./hero.scss";
import { HERO_IMG } from "./Hero.Constants";

const Hero = () => {
  const { t } = useTranslation("homeHero");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const recalc = () => {
      const contentHeight = content.getBoundingClientRect().height;
      section.style.setProperty("--content-height", `${contentHeight}px`);
      // мінімальна висота секції = висота тексту + viewport
      section.style.minHeight = `${contentHeight + window.innerHeight + 50}px`;
    };

    recalc();
    window.addEventListener("resize", recalc);

    const ro = new ResizeObserver(recalc);
    ro.observe(content);

    return () => {
      window.removeEventListener("resize", recalc);
      ro.disconnect();
    };
  }, []);

  return (
    <section className="hero container" ref={sectionRef}>
      {/* Текст */}
      <div className="hero__content " ref={contentRef}>
        <h1 className="hero__title">{t("homeHero.title")}</h1>
        <div className="hero__wrapper">
          <p className="hero__text">{t("homeHero.text")}</p>
          <NavLink className="hero__link" to="/contacts">
            {t("homeHero.btn")}
          </NavLink>
        </div>
      </div>

      {/* Картинка */}
      <div className="hero__image-outer">
        <div className="hero__image-inner">
          <img src={HERO_IMG} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

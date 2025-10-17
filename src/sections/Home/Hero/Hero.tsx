import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./hero.scss";
import { HERO_IMG, HERO_IMG_MOB } from "./Hero.Constants";

const Hero = () => {
  const { t } = useTranslation("homeHero");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const section = sectionRef.current;
  //   const content = contentRef.current;
  //   if (!section || !content) return;

  //   const recalc = () => {
  //     // const contentHeight = content.getBoundingClientRect().height;
  //     // section.style.setProperty("--content-height", `${contentHeight}px`);
  //     // мінімальна висота секції = висота тексту + viewport
  //     // section.style.minHeight = `${contentHeight + window.innerHeight}px`;
  //   };

  //   recalc();
  //   window.addEventListener("resize", recalc);

  //   const ro = new ResizeObserver(recalc);
  //   ro.observe(content);

  //   return () => {
  //     window.removeEventListener("resize", recalc);
  //     ro.disconnect();
  //   };
  // }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const recalc = () => {
      const isMobile = window.innerWidth <= 969;

      if (isMobile) {
        const contentHeight = content.getBoundingClientRect().height;
        // Висота секції = висота контенту + півекрана (для плавного наїзду)
        section.style.setProperty("--content-height", `${contentHeight}px`);
        section.style.minHeight = `${
          contentHeight + window.innerHeight * 0.5
        }px`;
      } else {
        // Для десктопу залишаємо стандартну висоту
        section.style.removeProperty("min-height");
        section.style.removeProperty("--content-height");
      }
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
    <section className="hero " ref={sectionRef}>
      <div className="hero__content " ref={contentRef}>
        <div className="hero__container container">
          <h1 className="hero__title">{t("homeHero.title")}</h1>
          <h1 className="hero__title-mobile">{t("homeHero.titleMob")}</h1>
          <div className="hero__wrapper">
            <p className="hero__text">{t("homeHero.text")}</p>
            <NavLink className="hero__link" to="/contacts">
              {t("homeHero.btn")}
            </NavLink>
          </div>
        </div>
      </div>


      <div className="hero__image-outer">
        <div className="hero__image-inner">
          <picture>
            <source
              media="(max-width: 968px)"
              srcSet={`${HERO_IMG_MOB} 1x, ${HERO_IMG_MOB} 2x`}
              type="image/png"
            />
            <source
              srcSet={`${HERO_IMG} 1x, ${HERO_IMG} 2x`}
              type="image/jpg"
            />
            <img src={HERO_IMG} alt="hero" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;

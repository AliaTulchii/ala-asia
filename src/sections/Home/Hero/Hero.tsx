import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './hero.scss'
import { HERO_IMG } from "./Hero.Constants";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const { t } = useTranslation("homeHero");
    const imgRef = useRef<HTMLImageElement | null>(null);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!sectionRef.current || !imgRef.current) return;

      gsap.set(imgRef.current, {
        width: "172px",
        height: "65px",
        // width: "0px",
        // height: "0px",
        borderRadius: "20px",
        position: "absolute",
        top: "230px",
        left: "490px",
        xPercent: 0,
        yPercent: 0,
      });


      gsap.to(imgRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        top: 0,
        left: "0%",
        xPercent: 0,
        yPercent: 50,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "top+=1000vh",
          scrub: true,
          pin: false,
        },
      });
    }, []);


  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero__image">
          <img ref={imgRef} src={HERO_IMG} alt="Hero" />
        </div>
      <div className="hero__container container">
        
        <div className="hero__line hero__line-first" />
        <div className="hero__line hero__line-second" />
        <div className="hero__line hero__line-third" />
        <div className="hero__line hero__line-fourth" />
        <div className="hero__title-wrapper">
          <div className="hero__title-box">
            <h1 className="hero__title">{t("homeHero.title")}</h1>
            <h1 className="hero__title">{t("homeHero.title1")}</h1>
          </div>
          <h1 className="hero__title hero__title-last">
            {t("homeHero.title2")}
          </h1>
        </div>

        <div className="hero__wrapper">
          <p className="hero__text">{t("homeHero.text")}</p>
          <NavLink to="/contacts" className="hero__link">
            {t("homeHero.btn")}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;

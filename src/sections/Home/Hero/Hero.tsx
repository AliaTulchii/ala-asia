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
        // width: "650px",
        // height: "450px",
        width: "0px",
        height: "0px",
        borderRadius: "20px",
        position: "absolute",
        top: "100%",
        left: "50%",
        xPercent: -50,
        yPercent: -0,
      });


      gsap.to(imgRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
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
      <div className="hero__container container">
        <h1 className="hero__title">{t("homeHero.title")}</h1>
        <div className="hero__wrapper">
          <p className="hero__text">{t("homeHero.text")}</p>
          <NavLink to="/contacts" className="hero__link">
            {t("homeHero.btn")}
          </NavLink>
        </div>
      </div>

      <div className="hero__image">
        <img ref={imgRef} src={HERO_IMG} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;

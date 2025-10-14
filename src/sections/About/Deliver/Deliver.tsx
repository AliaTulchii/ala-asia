import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import './deliver.scss'

import img1 from "/assets/images/home/delivery/blocks.webp";
import img1Mob from "/assets/images/home/delivery/blocks-mob.webp";
import img2 from "/assets/images/home/delivery/machine.webp";
import img2Mob from "/assets/images/home/delivery/machine-mob.webp";
import img3 from "/assets/images/home/delivery/storage.webp";
import img3Mob from "/assets/images/home/delivery/storage-mob.webp";
import img4 from "/assets/images/home/delivery/trucks.webp";
import img4Mob from "/assets/images/home/delivery/trucks-mob.webp";


const Deliver = () => {
  const { t } = useTranslation("about");
  const [hoverField, setHoverField] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const wrapperRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setVisibleItems((prev) =>
              prev.includes(id) ? prev : [...prev, id]
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    wrapperRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const data = [
    {
      id: 1,
      number: t("about.delivery.item1.id"),
      title: t("about.delivery.item1.title"),
      text: t("about.delivery.item1.text"),
      image: img1,
      imageMob: img1Mob,
      direct: "/services/materials/bricks",
      btn: t("about.delivery.item1.btn"),
    },
    {
      id: 2,
      number: t("about.delivery.item2.id"),
      title: t("about.delivery.item2.title"),
      text: t("about.delivery.item2.text"),
      image: img2,
      imageMob: img2Mob,
      direct: "/services/equipment/automation",
      btn: t("about.delivery.item1.btn"),
    },
    {
      id: 3,
      number: t("about.delivery.item3.id"),
      title: t("about.delivery.item3.title"),
      text: t("about.delivery.item3.text"),
      image: img3,
      imageMob: img3Mob,
      direct: "/services/raw/cosmetic",
      btn: t("about.delivery.item1.btn"),
    },
    {
      id: 4,
      number: t("about.delivery.item4.id"),
      title: t("about.delivery.item4.title"),
      text: t("about.delivery.item4.text"),
      image: img4,
      imageMob: img4Mob,
      direct: "/services/logistics/transportation",
      btn: t("about.delivery.item1.btn"),
    },
  ];

  return (
    <section className="deliver">
      <div className="deliver__line deliver__line-third" />
      <div className="deliver__line deliver__line-fourth" />
      <div className="deliver__line deliver__line-fifth" />
      <div className="deliver__line deliver__line-six" />
      <div className="deliver__line deliver__line-seventh" />

      <div className="deliver__container container">
        <div className="deliver__line deliver__line-first" />
        <div className="deliver__line deliver__line-second" />
        <h2 className="deliver__title">{t("about.delivery.title")}</h2>
        <div>
          {data.map(({ id, title, text, image, imageMob, direct, btn }) => (
            <div
              key={id}
              data-id={id}
              ref={(el) => {
                wrapperRef.current[id - 1] = el;
              }}
              className={`deliver__wrapper ${
                visibleItems.includes(id) ? "is-visible" : ""
              } ${hoverField === id ? "is-hovered" : ""}`}
              onMouseEnter={() => setHoverField(id)}
              onMouseLeave={() => setHoverField(null)}
            >
              <div className="deliver__display-box">
                <div className="deliver__display">
                  <img className="deliver__img" src={image} alt={title} />
                </div>
              </div>

              <div className="deliver__content">
                <div className="deliver__content-left">
                  <div className="deliver__content-box">
                    <p className="deliver__number">0{id}</p>
                    <img
                      className="deliver__img-mobile"
                      src={imageMob}
                      alt={title}
                    />
                  </div>

                  <h3 className="deliver__content-title">{title}</h3>
                </div>

                <div className="deliver__content-right">
                  <div className="deliver__line-left" />
                  <div className="deliver__line-right" />
                  <p className="deliver__content-text">{text}</p>
                  <NavLink
                    className="deliver__link"
                    to={direct}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {btn}
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliver;

import { useTranslation } from "react-i18next";
import img1 from "/assets/images/about/trucks.webp";
import img2 from "/assets/images/about/store.webp";
// import img3 from "/assets/images/about/man.webp";
import arrow from "/assets/images/icons/arrow-right.svg"
import "./work.scss"

const Work = () => {
    const {t} = useTranslation("about")
  return (
    <section className="work">
      <div className="work__container container">
        <div className="work__line work__line-first" />
        <div className="work__line work__line-second" />
        <div className="work__content">
          <div className="work__item">
            <div className="work__left">
              <h2 className="work__title">{t("about.work.item1.title")}</h2>
              <h3 className="work__subtitle">{t("about.work.item1.text")}</h3>
              <ul className="work__list">
                <li className="work__list-item">
                  <img src={arrow} alt="arrow" className="work__list-icon" />

                  <p className="work__text">{t("about.work.item1.text1")}</p>
                </li>
                <li className="work__list-item">
                  <img src={arrow} alt="arrow" className="work__list-icon" />

                  <p className="work__text">{t("about.work.item1.text2")}</p>
                </li>

                <li className="work__list-item">
                  <img src={arrow} alt="arrow" className="work__list-icon" />

                  <p className="work__text">{t("about.work.item1.text3")}</p>
                </li>
                <li className="work__list-item">
                  <img src={arrow} alt="arrow" className="work__list-icon" />

                  <p className="work__text">{t("about.work.item1.text4")}</p>
                </li>
              </ul>
            </div>
            <div className="work__right">
              <img src={img1} alt="trucks" className="work__img" />
            </div>
          </div>
          <div className="work__item  work__item-reverse">
            <div className="work__left">
              <h2 className="work__title">{t("about.work.item2.title")}</h2>
              <ul className="work__list">
                <li className="work__list-item">
                  <img src={arrow} alt="arrow" className="work__list-icon" />
                  <p className="work__text">{t("about.work.item2.text1")}</p>
                </li>
                <li className="work__list-item">
                  <img src={arrow} alt="arrow" className="work__list-icon" />

                  <p className="work__text">{t("about.work.item2.text2")}</p>
                </li>
                <li className="work__list-item">
                  <img src={arrow} alt="arrow" className="work__list-icon" />

                  <p className="work__text">{t("about.work.item2.text3")}</p>
                </li>
                <li className="work__list-item">
                  <img src={arrow} alt="arrow" className="work__list-icon" />

                  <p className="work__text">{t("about.work.item2.text4")}</p>
                </li>
              </ul>
            </div>
            <div className="work__right">
              <img src={img2} alt="store" className="work__img" />
            </div>
          </div>

          <div className="work__item-last">
            <div className=" work__left-last">
              <div>
                <h2 className="work__title">{t("about.work.item3.title")}</h2>
                <p className="work__text">{t("about.work.item3.text")}</p>
              </div>

              <ul className=" work__list-last">
                <li className="">
                  <h2 className="work__title work__title-last">
                    {t("about.work.item3.title1")}
                  </h2>
                  <p className="work__text">{t("about.work.item3.text1")}</p>
                </li>
                <li className="">
                  <h2 className="work__title work__title-last">
                    {t("about.work.item3.title2")}
                  </h2>
                  <p className="work__text">{t("about.work.item3.text2")}</p>
                </li>
                <li className="">
                  <h2 className="work__title work__title-last">
                    {t("about.work.item3.title3")}
                  </h2>
                  <p className="work__text">{t("about.work.item3.text3")}</p>
                </li>
              </ul>
            </div>
            <div className=" work__right-last">
              {/* <img src={img3} alt="man" className="work__img"/> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work

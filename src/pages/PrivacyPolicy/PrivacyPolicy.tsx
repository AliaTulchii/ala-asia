import { useTranslation } from "react-i18next";
import './privacy.scss'


const PrivacyPolicy = () => {
    const {t} = useTranslation("privacy")
  return (
    <section className="privacy">
      <div className="privacy__container container">
        <h1 className="privacy__title">{t("privacy.title")}</h1>
        <p className="privacy__text privacy__text-main">{t("privacy.text")}</p>
        <ul className="privacy__list">
          <li className="privacy__item">
            <p className="privacy__number">{t("privacy.item1.id")}</p>
            <div className="privacy__wrapper">
              <h2 className="privacy__subtitle">
                {t("privacy.item1.subtitle")}
              </h2>
              <p className="privacy__text">{t("privacy.item1.text")}</p>
            </div>
          </li>

          <li className="privacy__item">
            <p className="privacy__number">{t("privacy.item2.id")}</p>
            <div className="privacy__wrapper">
              <h2 className="privacy__subtitle">
                {t("privacy.item2.subtitle")}
              </h2>
              <p className="privacy__text">{t("privacy.item2.text")}</p>
              <ul className="privacy__sublist">
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item2.text1")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item2.text2")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item2.text3")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item2.text4")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item2.text5")}</p>
                </li>
              </ul>
            </div>
          </li>

          <li className="privacy__item">
            <p className="privacy__number">{t("privacy.item3.id")}</p>
            <div className="privacy__wrapper">
              <h2 className="privacy__subtitle">
                {t("privacy.item2.subtitle")}
              </h2>
              <p className="privacy__text">{t("privacy.item3.text")}</p>
              <ul className="privacy__sublist">
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item3.text1")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item3.text2")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item3.text3")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item3.text4")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item3.text5")}</p>
                </li>
              </ul>
              <p className="privacy__text">{t("privacy.item3.text6")}</p>
            </div>
          </li>

          <li className="privacy__item">
            <p className="privacy__number">{t("privacy.item4.id")}</p>
            <div className="privacy__wrapper">
              <h2 className="privacy__subtitle">
                {t("privacy.item4.subtitle")}
              </h2>
              <p className="privacy__text">{t("privacy.item4.text")}</p>
              <ul className="privacy__sublist">
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item4.text1")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item4.text2")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item4.text3")}</p>
                </li>
              </ul>
            </div>
          </li>

          <li className="privacy__item">
            <p className="privacy__number">{t("privacy.item5.id")}</p>
            <div className="privacy__wrapper">
              <h2 className="privacy__subtitle">
                {t("privacy.item5.subtitle")}
              </h2>
              <p className="privacy__text">{t("privacy.item5.text")}</p>
            </div>
          </li>

          <li className="privacy__item">
            <p className="privacy__number">{t("privacy.item6.id")}</p>
            <div className="privacy__wrapper">
              <h2 className="privacy__subtitle">
                {t("privacy.item6.subtitle")}
              </h2>
              <p className="privacy__text">{t("privacy.item6.text")}</p>
              <ul className="privacy__sublist">
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item6.text1")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item6.text2")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item6.text3")}</p>
                </li>
              </ul>
              <p className="privacy__text">{t("privacy.item6.text4")}</p>
            </div>
          </li>

          <li className="privacy__item">
            <p className="privacy__number">{t("privacy.item7.id")}</p>
            <div className="privacy__wrapper">
              <h2 className="privacy__subtitle">
                {t("privacy.item7.subtitle")}
              </h2>
              <p className="privacy__text">{t("privacy.item7.text")}</p>
              <ul className="privacy__sublist">
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item7.text1")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item7.text2")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item7.text3")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item7.text4")}</p>
                </li>
              </ul>
              <p className="privacy__text">{t("privacy.item7.text5")}</p>
              <ul className="privacy__contact-list">
                <li className="privacy__subitem-contact">
                  <p className="privacy__text">{t("privacy.item7.text6")}</p>
                </li>
                <li className="privacy__subitem-contact">
                  <p className="privacy__text">{t("privacy.item7.text7")}</p>
                </li>
              </ul>
            </div>
          </li>

          <li className="privacy__item">
            <p className="privacy__number">{t("privacy.item8.id")}</p>
            <div className="privacy__wrapper">
              <h2 className="privacy__subtitle">
                {t("privacy.item8.subtitle")}
              </h2>
              <p className="privacy__text">{t("privacy.item8.text")}</p>
              <ul className="privacy__sublist">
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item8.text1")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item8.text2")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item8.text3")}</p>
                </li>
                <li className="privacy__subitem">
                  <p className="privacy__text">{t("privacy.item8.text4")}</p>
                </li>
              </ul>
            </div>
          </li>

          <li className="privacy__item">
            <p className="privacy__number">{t("privacy.item9.id")}</p>
            <div className="privacy__wrapper">
              <h2 className="privacy__subtitle">
                {t("privacy.item9.subtitle")}
              </h2>
              <p className="privacy__text">{t("privacy.item9.text")}</p>
            </div>
          </li>

          <li className="privacy__item">
            <p className="privacy__number">{t("privacy.item10.id")}</p>
            <div className="privacy__wrapper">
              <h2 className="privacy__subtitle">
                {t("privacy.item10.subtitle")}
              </h2>
              <p className="privacy__text">{t("privacy.item10.text")}</p>
              <ul className="privacy__contact-list">
                <li className="privacy__subitem-contact">
                  <p className="privacy__text">{t("privacy.item10.text1")}</p>
                </li>
                <li className="privacy__subitem-contact">
                  <p className="privacy__text">{t("privacy.item10.text2")}</p>
                </li>
                <li className="privacy__subitem-contact">
                  <p className="privacy__text">{t("privacy.item10.text3")}</p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default PrivacyPolicy

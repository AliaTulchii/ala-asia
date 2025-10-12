import { useTranslation } from "react-i18next";
import './address.scss'

const Address = () => {
    const {t} = useTranslation("contact")
  return (
    <section className="address">
      <div className="address__container container">
        <div className={`address__line address__line-first`} />
        <div className={`address__line address__line-second`} />
        <div className={`address__line address__line-third`} />
        <div className={`address__line address__line-fourth`} />
        <h2 className="address__title">{t("contact.address.title")}</h2>
        <ul className="address__list">
          <li className="address__item address__item-first">
            <div className="address__wrapper">
              <h3 className="address__subtitle">
                {t("contact.address.item1.subtitle")}
              </h3>
              <p className="address__text address__text--phone">
                {t("contact.address.item1.phone1")}
              </p>
              <p className="address__text address__text--phone">
                {t("contact.address.item1.phone2")}
              </p>
            </div>

            <div className="address__wrapper">
              <h3 className="address__subtitle">
                {t("contact.address.item1.subtitle1")}
              </h3>
              <p className="address__text">
                {t("contact.address.item1.email")}
              </p>
            </div>
          </li>

          <li className="address__item address__item-second">
            <h3 className="address__subtitle">
              {t("contact.address.item2.subtitle")}
            </h3>
            <p className="address__text ">
              {t("contact.address.item2.address")}
            </p>
          </li>

          <li className="address__item">
            <h3 className="address__subtitle">
              {t("contact.address.item3.subtitle")}
            </h3>
            <p className="address__text">{t("contact.address.item3.days")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Address

import { useTranslation } from "react-i18next";
import { useConvenientItems } from "./Convenient.Constants";
import './convenient.scss'

const Convenient = () => {
    const convenientItems = useConvenientItems();
    const { t } = useTranslation("convenient");
  return (
    <section className="convenient">
      <div className="convenient__container container">
        <div className="convenient__line-vertical convenient__line-vertical-first" />
        <div className="convenient__line-vertical convenient__line-vertical-second" />
        <div className="convenient__line-vertical convenient__line-vertical-third" />
        <div className="convenient__line-vertical convenient__line-vertical-fourth" />
        <h2 className="convenient__title">{t("convenient.title")}</h2>
        <div className="convenient__line" />
        <ul className="convenient__list">
          {convenientItems.map((item) => (
            <li className="convenient__item" key={item.key}>
              <p className="convenient__item-number">{item.key}</p>
              <img
                src={item.img}
                alt={item.title}
                className="convenient__item-img"
              />
              <div className="convenient__item-wrapper">
                <h3 className="convenient__item-title">{item.title}</h3>
                <p className="convenient__item-text">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Convenient;

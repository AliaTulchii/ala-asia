import { useTranslation } from "react-i18next";
import { useConvenientItems } from "./Convenient.Constants";
import './convenient.scss'

interface ConvenientProps{
  className: string;
}

const Convenient: React.FC<ConvenientProps> = ({className}) => {
  const convenientItems = useConvenientItems();
  const { t } = useTranslation("convenient");
  return (
    <section className={`${className}`}>
      <div className={`${className}__line`} />

      <div className={`${className}__container container`}>
        <div
          className={`${className}__line-vertical ${className}__line-vertical-third`}
        />
        <div
          className={`${className}__line-vertical ${className}__line-vertical-fourth`}
        />
        <h2 className={`${className}__title`}>{t("convenient.title")}</h2>
        <ul className={`${className}__list`}>
          {convenientItems.map((item) => (
            <li className={`${className}__item`} key={item.key}>
              {/* <div className={`${className}__line-horizontal`} /> */}

              <p className={`${className}__item-number`}>{item.key}</p>
              <img
                src={item.img}
                alt={item.title}
                className={`${className}__item-img`}
              />
              <div className={`${className}__item-wrapper`}>
                <h3 className={`${className}__item-title`}>{item.title}</h3>
                <p className={`${className}__item-text`}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Convenient;

import { useTranslation } from "react-i18next";
import DeliveryCard from "./DeliveryCard";
import { CARD_IMG1, CARD_IMG2, CARD_IMG3, CARD_IMG4, CARD_LINK1, CARD_LINK2, CARD_LINK3, CARD_LINK4 } from "./Delivery.Constants";
import './delivery.scss'

const Delivery = () => {
    const { t } = useTranslation("delivery");
  return (
    <section className="delivery">
      <div className="delivery__line delivery__line-fifth" />

      <div className="delivery__container container">
        <div className="delivery__line delivery__line-first" />
        <div className="delivery__line delivery__line-second" />
        <div className="delivery__line delivery__line-third" />
        <div className="delivery__line delivery__line-fourth" />

        <div className="delivery__content">
          <div className="delivery__header">
            <h2 className="delivery__title">{t("delivery.title")}</h2>
            <p className="delivery__text">{t("delivery.text")}</p>
            <p className="delivery__text-mobile">{t("delivery.textMob")}</p>
          </div>

          <div className="delivery__main">
            <div className="delivery__box delivery__box-first">
              <DeliveryCard
                title={t("delivery.card1.title")}
                text={t("delivery.card1.text")}
                btn={t("delivery.btn")}
                img={CARD_IMG1}
                link={CARD_LINK1}
                cardStyle="delivery-card__first"
                imgStyle="delivery-card__img-first"
              />
              <DeliveryCard
                title={t("delivery.card2.title")}
                text={t("delivery.card2.text")}
                btn={t("delivery.btn")}
                img={CARD_IMG2}
                link={CARD_LINK2}
                cardStyle="delivery-card__second"
                imgStyle="delivery-card__img-second"
              />
            </div>
            <div className="delivery__box delivery__box-second">
              <DeliveryCard
                title={t("delivery.card3.title")}
                text={t("delivery.card3.text")}
                btn={t("delivery.btn")}
                img={CARD_IMG3}
                link={CARD_LINK3}
                cardStyle="delivery-card__third"
                imgStyle="delivery-card__img-third"
              />
              <DeliveryCard
                title={t("delivery.card4.title")}
                text={t("delivery.card4.text")}
                btn={t("delivery.btn")}
                img={CARD_IMG4}
                link={CARD_LINK4}
                cardStyle="delivery-card__fourth"
                imgStyle="delivery-card__img-fourth"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delivery

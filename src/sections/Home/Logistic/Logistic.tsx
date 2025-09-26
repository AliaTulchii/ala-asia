import { useTranslation } from 'react-i18next';
import Accordion from '../../../components/Accordion/Accordion';
import './logistic.scss'

const Logistic = () => {
    const { t } = useTranslation("logistic");
  return (
    <section className="logistic">
      <div className="logistic__container container">
        {/* <div className="logistic__line logistic__line-first" />
        <div className="logistic__line logistic__line-second" />
        <div className="logistic__line logistic__line-third" />
        <div className="logistic__line logistic__line-fourth" /> */}
        <h2 className="logistic__title">{t("logistic.title")}</h2>
        <p className="logistic__text">{t("logistic.text")}</p>
        <Accordion />
      </div>
    </section>
  );
}

export default Logistic

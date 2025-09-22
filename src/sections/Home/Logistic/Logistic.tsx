import { useTranslation } from 'react-i18next';
import Accordion from '../../../components/Accordion/Accordion';
import './logistic.scss'

const Logistic = () => {
    const { t } = useTranslation("logistic");
  return (
    <section className="logistic">
      <div className="logistic__container container">
        <h2 className="logistic__title">{t("logistic.title")}</h2>
              <p className="logistic__text">{t("logistic.text")}</p>
              <Accordion/>
      </div>
    </section>
  );
}

export default Logistic

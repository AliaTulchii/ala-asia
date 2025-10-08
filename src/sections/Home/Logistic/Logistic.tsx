import { useTranslation } from 'react-i18next';
import './logistic.scss'
import Accordion from '../../../components/Accordion/AccordionVertical/Accordion';


interface LogisticProps{
  className: string;
}
const Logistic: React.FC<LogisticProps> = ({ className }) => {
  const { t } = useTranslation("logistic");
  return (
    <section className={`${className}`}>
      <div className={`${className}__container container`}>
        <div className={`${className}__line logistic__line-first`} />
        <div className={`${className}__line logistic__line-second`} />
        <div className={`${className}__line logistic__line-third`} />
        <div className={`${className}__line logistic__line-fourth`} />
        <h2 className={`${className}__title`}>{t("logistic.title")}</h2>
        <p className={`${className}__text`}>{t("logistic.text")}</p>
        <Accordion />
      </div>
    </section>
  );
};

export default Logistic

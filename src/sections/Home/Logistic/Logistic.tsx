import { useTranslation } from 'react-i18next';
import './logistic.scss'
import Accordion from '../../../components/Accordion/AccordionVertical/Accordion';
import AccordionMobile from '../../../components/Accordion/AccordionMobile/AccordionMobile';


interface LogisticProps{
  className: string;
}
const Logistic: React.FC<LogisticProps> = ({ className }) => {
  const { t } = useTranslation("logistic");
  return (
    <section className={`${className}`}>
      <div className={`${className}__container container`}>
        <div className={`${className}__line ${className}__line-first`} />
        <div className={`${className}__line ${className}__line-second`} />
        <div className={`${className}__line ${className}__line-third`} />
        <div className={`${className}__line ${className}__line-fourth`} />
        <h2 className={`${className}__title`}>{t("logistic.title")}</h2>
        <h2 className={`${className}__title-mobile`}>{t("logistic.titleMob")}</h2>
        <p className={`${className}__text`}>{t("logistic.text")}</p>
        <Accordion />
        <AccordionMobile/>
      </div>
    </section>
  );
};

export default Logistic

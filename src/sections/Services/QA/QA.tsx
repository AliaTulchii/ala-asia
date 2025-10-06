import { useTranslation } from "react-i18next";
import AccordionHorizontal from "../../../components/Accordion/AcordionHorizontal/AccordionHorizontal";
import "./qa.scss"

const QA = () => {
    const { t } = useTranslation("qa");
  return (
    <section className='qa'>
        <div className=''>
            <h2 className="qa__title container">
                {t("qa.title")}
              </h2>
              <AccordionHorizontal/>
        </div>
    </section>
  )
}

export default QA

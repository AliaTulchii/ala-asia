import { useTranslation } from "react-i18next"
import FormContact from "../../../components/Form/Form";
import "./form.scss"

const Form = () => {
    const {t} = useTranslation("contact")
  return (
    <section className="form">
      <div className="form__line"/>
      <div className="form__container container">
        <h2 className="form__title">{t("contact.form.title")}</h2>
        <h2 className="form__title-mob">{t("contact.form.title")}</h2>
        <div className="form__wrapper">
          <FormContact />
        </div>
      </div>
    </section>
  );
}

export default Form

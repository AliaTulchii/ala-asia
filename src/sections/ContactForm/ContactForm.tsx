import FormContact from "../../components/Form/Form";
import { useTranslation } from "react-i18next";
import "./contact-form.scss";
import greeting from "/assets/images/home/contact/greeting.jpg";

const ContactForm = () => {
  const { t } = useTranslation("contactForm");
  return (
    <section className="contact-form">
      <div className="contact-form__line" />

      <div className="contact-form__container container">
        <h2 className="contact-form__title">{t("contactForm.title")}</h2>
        <div className="contact-form__wrapper">
          <FormContact />
          <img
            className="contact-form__img"
            src={greeting}
            alt="men greeting each other"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

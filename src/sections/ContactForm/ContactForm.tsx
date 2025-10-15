import FormContact from "../../components/Form/Form";
import { useTranslation } from "react-i18next";
import "./contact-form.scss";
import greeting from "/assets/images/home/contact/greeting-desc.webp";
import greetingMob from "/assets/images/home/contact/greeting-mob.webp";

interface ContactFormProps{
  className: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const { t } = useTranslation("contactForm");
  return (
    <section className={`contact-form ${className}`}>
      <div className="contact-form__line" />

      <div className="contact-form__container container">
        <img
          className="contact-form__img-mobile"
          src={greetingMob}
          alt="men greeting each other"
        />
        <div className="contact-form__line-vertical contact-form__line-vertical-third" />
        <div className="contact-form__line-vertical contact-form__line-vertical-fourth" />
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

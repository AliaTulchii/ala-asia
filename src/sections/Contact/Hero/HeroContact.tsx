import { useTranslation } from 'react-i18next';
import './hero-contact.scss'

const HeroContact = () => {
  const {t} = useTranslation("contact")
  return (
    <section className="hero-contact">
      <div className="hero-contact__container container">
        <h1 className="hero-contact__title">{t("contact.hero.title")}</h1>
        <p className="hero-contact__text">{t("contact.hero.text")}</p>
      </div>
    </section>
  );
}

export default HeroContact

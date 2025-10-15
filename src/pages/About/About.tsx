import Deliver from "../../sections/About/Deliver/Deliver";
import AboutHero from "../../sections/About/Hero/AboutHero"
import Work from "../../sections/About/Work/Work"
import ContactForm from "../../sections/ContactForm/ContactForm";
import Logistic from "../../sections/Home/Logistic/Logistic";
import Partners from "../../sections/Partners/Partners";


const About = () => {
  return (
    <div>
      <AboutHero />
      <Work />
      <Partners className="partners-about" />
      <Deliver />
      <Logistic className="logistic-about" />
      <ContactForm className="contact-form-about"/>
    </div>
  );
}

export default About

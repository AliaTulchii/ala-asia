import './services.scss'
import Supplies from "../../sections/Services/Supplies/Supplies";
import Convenient from '../../sections/Convenient/Convenient';
import Partners from '../../sections/Partners/Partners';
import ContactForm from '../../sections/ContactForm/ContactForm';
import QA from '../../sections/Services/QA/QA';

const Services = () => {    

  return (
    <div>
      <Supplies />
      <Convenient className="convenient-services" />
      <Partners className="partners-services" />
      <QA />
      <ContactForm className="contact-form-services" />
    </div>
  );
};

export default Services;

import ContactForm from "../../sections/ContactForm/ContactForm";
import Convenient from "../../sections/Convenient/Convenient";
import Delivery from "../../sections/Home/Delivery/Delivery";
import Hero from "../../sections/Home/Hero/Hero";
import Logistic from "../../sections/Home/Logistic/Logistic";
import Partners from "../../sections/Partners/Partners";

const Home = () => {
  return (
    <div>
      <Hero />
      <Delivery />
      <Partners className="partners-home" />
      <Logistic className="logistic-home" />
      <Convenient className="convenient-home" />
      <ContactForm className=""/>
    </div>
  );
};

export default Home;

import ContactForm from "../../sections/Home/ContactForm/ContactForm"
import Convenient from "../../sections/Home/Convenient/Convenient"
import Delivery from "../../sections/Home/Delivery/Delivery"
import Hero from "../../sections/Home/Hero/Hero"
import Logistic from "../../sections/Home/Logistic/Logistic"
import Partners from "../../sections/Home/Partners/Partners"



const Home = () => {
  
  return (
    <div>
      <Hero />
      <Delivery />
      <Partners />
      <Logistic />
      <Convenient />
      <ContactForm />
    </div>
  )
}

export default Home

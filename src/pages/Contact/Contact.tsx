import Address from "../../sections/Contact/Address/Address"
import Form from "../../sections/Contact/Form/Form"
import HeroContact from "../../sections/Contact/Hero/HeroContact"
import Map from "../../sections/Contact/Map/Map"


const Contact = () => {
  return (
    <div>
      <HeroContact />
      <Address />
      <Map />
      <Form/>
    </div>
  )
}

export default Contact

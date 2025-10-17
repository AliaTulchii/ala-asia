import PhoneIcon from "../../icons/PhoneIcon";
import "./buttons.scss";

const CallButtonMobile = () => {
  return (
    <a href="tel:+77071040902" className="call-btn">
      <PhoneIcon style="call-btn__icon" />
    </a>
  );
};

export default CallButtonMobile;

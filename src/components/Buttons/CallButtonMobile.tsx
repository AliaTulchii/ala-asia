import PhoneIcon from "../../icons/PhoneIcon";
import "./buttons.scss";

const CallButtonMobile = () => {
  return (
    <a href="tel:+7(708)5029704" className="call-btn">
      <PhoneIcon style="call-btn__icon" />
    </a>
  );
};

export default CallButtonMobile;

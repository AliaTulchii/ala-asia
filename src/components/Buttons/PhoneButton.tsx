import PhoneIcon from '../../icons/PhoneIcon';
import { PHONE_NUMBER_BUTTON } from './Buttons.Constants';
import './buttons.scss'

const PhoneButton = ({ themeColor } : {themeColor?: "light" | "dark" | "policy"}) => {
  return (
    <a
      href="tel:+77071040902"
      className={`phone-btn  ${
        themeColor === "light"
          ? "phone-btn--light"
          : themeColor === "policy"
          ? "phone-btn--policy"
          : "phone-btn--dark"
      }`}
    >
      <PhoneIcon style="phone-icon" />
      <p className="phone-btn__text">{PHONE_NUMBER_BUTTON}</p>
    </a>
  );
};

export default PhoneButton

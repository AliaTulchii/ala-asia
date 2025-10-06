import { motion } from "framer-motion";
import "./pop-up.scss";
import { usePopUpItems } from "./PopUp.Constants";
import PopUpCard from "./PopUpCard";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 12,
  stiffness: 120,
} as const;

interface PopUpProps {
  onMouseLeave: () => void;
}

const PopUp:React.FC<PopUpProps> = ({ onMouseLeave }) => {
  const popUpItems = usePopUpItems();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      transition={transition}
      className="header__pop-up"
      onMouseLeave={onMouseLeave}
    >
      <div className="pop-up__line" />
      <ul className="pop-up__list">
        {popUpItems.map((item) => {
          return <PopUpCard item={item} onMouseLeave={onMouseLeave} />;
        })}
      </ul>
    </motion.div>
  );
};

export default PopUp;

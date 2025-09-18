import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import "./stairs.scss";

interface StairsProps {
  children: ReactNode;
}

const Stairs: React.FC<StairsProps> = ({ children }) => {
  const rows = 20;
  const columns = 20;
  const total = rows * columns;


  const delays = Array.from({ length: total }, () => Math.random() * 1); 

  const wave: Variants = {
    initial: {
      opacity: 1,
      scale: 1,
    },
    animate: (i: number) => ({
      opacity: 0,
      scale: 0.8,
      transition: {
        delay: delays[i],
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  return (
    <div className="inner">
      <div className="grid">
        {Array.from({ length: total }).map((_, i) => (
          <motion.div
            className="cell"
            custom={i}
            variants={wave}
            initial="initial"
            animate="animate"
            key={i}
          />
        ))}
      </div>


      <div className="content">{children}</div>
    </div>
  );
};

export default Stairs;

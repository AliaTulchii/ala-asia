import "./pixel-bgd.scss";
import { motion } from "framer-motion";
import { ANIMATION } from "./PixelBackground.Constants";
import type React from "react";

interface PixelBackgroundProps {
  isOpen: boolean;
  getBlocks?: () => void;
  onAnimationComplete?: () => void;
}

const PixelBackground: React.FC<PixelBackgroundProps> = ({ isOpen }) => {
  /**
   * Shuffles array in place (Fisher–Yates shuffle).
   * @param {Array} a items An array containing the items.
   */
  const shuffle = (a: number[]) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = (indexOfColum: number) => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerHeight * 0.1;
    const nbOfBlocks = Math.ceil(innerWidth / blockSize);
    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i));
    return shuffledIndexes.map((randomIndex: number, index: number) => {
      return (
        <motion.div
          key={index}
          className="block"
          variants={ANIMATION}
          initial="initial"
          animate={isOpen ? "open" : "closed"}
          custom={[20 - indexOfColum + randomIndex, indexOfColum + randomIndex]}
        />
      );
    });
  };

  return (
    <div style={{ flexDirection: "column" }} className="pixel-background">
      {[...Array(20)].map((_, index) => {
        return (
          <div key={index} className="row">
            {getBlocks(index)}
          </div>
        );
      })}
    </div>
  );
};

export default PixelBackground;

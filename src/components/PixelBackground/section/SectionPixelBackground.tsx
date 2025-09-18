import "./pixel-bgd.scss";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ANIMATION } from "./PixelBackground.Constants";

const SectionPixelBackground: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.001,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [rows, setRows] = useState(0);
  const [blocksPerRow, setBlocksPerRow] = useState(10); // дефолт

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    }
  }, [isInView]);

  useEffect(() => {
    const updateGrid = () => {
      const blockSize = 60; // px — розмір одного блоку
      const width = window.innerWidth;
      const height = window.innerHeight;
      const newBlocksPerRow = Math.floor(width / blockSize);
      const newRows = Math.ceil(height / blockSize);
      setBlocksPerRow(newBlocksPerRow);
      setRows(newRows);
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

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

  const getBlocks = (indexOfRow: number) => {
    const shuffledIndexes = shuffle([...Array(blocksPerRow)].map((_, i) => i));
    return shuffledIndexes.map((randomIndex, index) => (
      <motion.div
        key={index}
        className="section-block"
        variants={ANIMATION}
        initial="initial"
        animate={shouldAnimate ? "open" : "initial"}
        custom={[rows - indexOfRow + randomIndex, indexOfRow + randomIndex]}
        style={{
          width: `${100 / blocksPerRow}%`,
        }}
      />
    ));
  };

  return (
    <div ref={ref} className="section-pixel-background">
      {[...Array(rows)].map((_, index) => (
        <div key={index} className="section-row">
          {getBlocks(index)}
        </div>
      ))}
    </div>
  );
};

export default SectionPixelBackground;

import "./pixel-bgd-white.scss";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ANIMATION } from "./PixelBackground.Constants";



const SectionPixelBackgroundWhite: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState(0);
  const isInView = useInView(ref, { once: true, amount: 0.001 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) setShouldAnimate(true);
  }, [isInView]);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      const height = container.offsetHeight;
      const newRows = Math.ceil(height / 60);
      setRows(newRows);
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
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
    const totalBlocks = 60;
    const shuffledIndexes = shuffle([...Array(totalBlocks)].map((_, i) => i));
    return shuffledIndexes.map((randomIndex, index) => (
      <motion.div
        key={index}
        className="section-white-block"
        variants={ANIMATION}
        initial="initial"
        animate={shouldAnimate ? "open" : "initial"}
        custom={[20 - indexOfRow + randomIndex, indexOfRow + randomIndex]}
      />
    ));
  };

  return (
    <div ref={ref} className="section-white-pixel-background">
      {[...Array(rows)].map((_, index) => (
        <div key={index} className="section-white-row">
          {getBlocks(index)}
        </div>
      ))}
    </div>
  );
};




export default SectionPixelBackgroundWhite;

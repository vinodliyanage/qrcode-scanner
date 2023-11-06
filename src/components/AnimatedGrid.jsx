import React, { useRef } from "react";
import { motion } from "framer-motion";

function AnimatedGrid({ boxWidth }) {
  const gridRef = useRef(null);

  const columns = Math.floor((gridRef.current?.clientWidth ?? 0) / boxWidth);
  const rows = Math.floor((gridRef.current?.clientHeight ?? 0) / boxWidth);
  const totalBoxes = columns * rows;

  return (
    <div
      ref={gridRef}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
      className="absolute top-0 left-0 w-full h-full grid -z-10"
    >
      {[...Array(totalBoxes)].map((_, i) => (
        <motion.div
          key={i}
          className="w-full"
          initial={{
            boxShadow: "none",
          }}
          animate={{
            boxShadow: [
              "none",
              "rgba(59, 131, 246, 0.11) 0px 1px 100px 0px, rgba(169, 85, 247, 0.11) 0px 1px 100px 0px",
              "none",
            ],
          }}
          transition={{
            duration: 3,
            delay: (i / 10 + (i % 10)) * 0.5,
            repeat: Infinity,
            repeatDelay: 5,
            repeatType: "mirror",
            ease: "backInOut",
          }}
        ></motion.div>
      ))}
    </div>
  );
}

export default AnimatedGrid;

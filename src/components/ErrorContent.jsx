import React from "react";
import { MotionConfig, motion } from "framer-motion";
import images from "../constants/images";

function ErrorContent({ error }) {
  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <img className="w-full" src={images.error} alt="" />

      <MotionConfig
        transition={{
          duration: 1,
          delay: 0.5,
          type: "spring",
          damping: 10,
        }}
      >
        <motion.h1
          className="text-7xl text-red-500 font-bold uppercase"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          Error
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-gray-700 text-lg text-center"
        >
          {error.message}
        </motion.p>
      </MotionConfig>
    </section>
  );
}

export default ErrorContent;

import React from "react";
import { motion } from "framer-motion";
import images from "../constants/images";

function CloseButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      type="button"
      className="bg-transparent bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
      whileHover={{
        rotate: [0, 0, 270, 270, 0],
        scale: 1.1,
      }}
      exit={{
        rotate: [0, 0, 270, 270, 0],
      }}
    >
      <img className="w-3 h-3" src={images.close} alt="" role="presentation" />
      <span className="sr-only">Close modal</span>
    </motion.button>
  );
}

export default CloseButton;

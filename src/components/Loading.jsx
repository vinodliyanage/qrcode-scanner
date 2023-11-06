import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import images from "../constants/images";
import Backdrop from "./Backdrop";

function Loading({ loading = true }) {
  return (
    <>
      <AnimatePresence mode="popLayout">
        {loading && (
          <>
            <Backdrop />
            <div className="fixed z-[9999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: 0,
                  ease: "backInOut",
                }}
                className="flex flex-col items-center  bg-white rounded-2xl p-3"
              >
                <motion.img className="m-auto w-32" src={images.loading} role="presentation" />
                <p className="text-base">loading...</p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Loading;

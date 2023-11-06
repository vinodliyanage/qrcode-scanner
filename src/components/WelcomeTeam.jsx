import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Backdrop from "./Backdrop";
import CloseButton from "./CloseButton";
import AnimatedGrid from "./AnimatedGrid";
import WelcomeContent from "./WelcomeContent";
import ErrorContent from "./ErrorContent";

function WelcomeTeam({ team, open: _open = false, error = false, timeout = 10, onClose }) {
  const [open, setOpen] = useState(_open);
  const [confettiRun, setConfettiRun] = useState(_open);

  useEffect(() => {
    setOpen(_open);
    setConfettiRun(_open);

    let a, b;
    if (_open && !error) {
      a = setTimeout(() => {
        setOpen(false);
      }, timeout * 1000);

      b = setTimeout(() => {
        setConfettiRun(false);
      }, 3000);
    }

    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [_open]);

  useEffect(() => {
    if (!open) onClose(true);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="flex h-screen w-full">
          <Backdrop />

          <motion.article
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "backInOut",
            }}
            className="relative flex w-[800px] h-[680px] z-50 rounded-lg shadow-sm bg-white p-10 m-auto overflow-hidden"
          >
            <header className="absolute top-3 right-3">
              <CloseButton onClick={() => setOpen(false)} />
            </header>

            <main className="w-full h-fit m-auto">
              {error ? <ErrorContent error={error} /> : <WelcomeContent team={team} />}
            </main>

            {!error && (
              <>
                <Confetti numberOfPieces={confettiRun ? 200 : 0} className="w-full h-full" />
                <AnimatedGrid boxWidth={80} />
              </>
            )}
          </motion.article>
        </div>
      )}
    </AnimatePresence>
  );
}

export default WelcomeTeam;

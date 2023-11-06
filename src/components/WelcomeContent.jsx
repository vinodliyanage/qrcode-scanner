import React, { useMemo } from "react";
import { MotionConfig, motion } from "framer-motion";
import images from "../constants/images";
import quotes from "../constants/quotes";

function getRandomQuote(teamName) {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const q = quotes[randomIndex].split("<teamname>").map((q, index) => <span key={index}>{q}</span>);

  q.splice(
    1,
    0,
    <span key={teamName} className="capitalize font-medium">
      {teamName}
    </span>
  );

  return q;
}

function WelcomeContent({ team }) {
  const { name, members } = team;

  const quote = useMemo(() => getRandomQuote(team.name), [team]);

  return (
    <section className="flex flex-col items-center justify-center gap-11">
      <img className="w-36" src={images.confetti} alt="" />

      <MotionConfig
        transition={{
          duration: 1,
          delay: 0.5,
          type: "spring",
          damping: 10,
        }}
      >
        <motion.h1
          className="text-7xl font-bold uppercase"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          Welcome
        </motion.h1>

        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-gray-900">Team</h2>

          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl mb-5"
          >
            <span className="capitalize">{name}</span>
          </motion.h2>

          <ul className="flex flex-row items-center justify-center gap-2">
            {members.map((member, index) => (
              <motion.li
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  damping: 10,
                }}
                key={member}
                className="py-2 px-4 border-[1px] rounded-md bg-green-100 text-green-500 border-slate-200 capitalize"
              >
                {member}
              </motion.li>
            ))}
          </ul>
        </div>
      </MotionConfig>

      <p className="w-3/4 text-gray-700 text-lg text-center">{quote}</p>
    </section>
  );
}

export default WelcomeContent;

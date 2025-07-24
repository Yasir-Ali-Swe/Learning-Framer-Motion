import React from "react";
import { motion } from "framer-motion";

const sentence = "Learning Framer Motion with Yasir Ali";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Typewriter = () => {
  return (
    <motion.div
      className="text-4xl font-bold  mt-40 text-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {sentence.split(" ").map((wordText, index) => (
        <motion.span
          key={index}
          variants={word}
          className="inline-block mr-2"
        >
          {wordText}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Typewriter;

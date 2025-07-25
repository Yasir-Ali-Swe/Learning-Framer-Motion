import React from 'react';
import { easeInOut, motion, useScroll } from 'framer-motion';

const textAnimation = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: easeInOut,
      staggerChildren: 0.3
    }
  }
};

const TextAnimation = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.section className='relative w-full h-[500vh] bg-white'>
      <motion.div
        className='fixed top-0 left-0 w-full z-40 h-1 bg-red-950'
        style={{
          scaleX: scrollYProgress,
          transformOrigin: 'left'
        }}
      />
      <motion.div
        className='mt-[200px]'
        variants={textAnimation}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1
          className='text-8xl text-center font-bold text-red-950'
          variants={textAnimation}
        >
          Learning Framer Motion
        </motion.h1>
        <motion.h1
          className='text-8xl text-center font-bold text-red-950'
          variants={textAnimation}
        >
          with Yasir Ali
        </motion.h1>
      </motion.div>
    </motion.section>
  );
};

export default TextAnimation;

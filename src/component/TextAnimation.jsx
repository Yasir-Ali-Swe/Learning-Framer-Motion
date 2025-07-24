import React from 'react'
import { motion, useScroll } from 'framer-motion'

const textAnimation={
    hidden: {
        opacity: 0, y: 30
    },
    visible:{
        opacity: 1, y: 0
    },
    properties:{
        duration: 1, delay: 0.8
    }
}

const TextAnimation = () => {
    const { scrollYProgress } = useScroll()
    return (
        <motion.section className='relative w-full h-[500vh]'>
            <motion.div className='fixed top-0 left-0 w-full z-40 h-1 bg-red-950' style={{
                scaleX: scrollYProgress,
                transformOrigin: "left"
            }} />
            <div className='mt-60'>
                <motion.h1
                variants={textAnimation}
                    initial="hidden"
                    animate="visible"
                    transition="properties"
                    className='text-8xl text-center font-bold text-red-950'
                >
                    Learning Framer Motion
                </motion.h1>
            </div>

        </motion.section>
    )
}

export default TextAnimation

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
const images = [
    {
        img: "pics/1.jpg",
        tittle: "Image 1"
    },
    {
        img: "pics/2.jpg",
        tittle: "Image 2"
    }, {
        img: "pics/3.jpg",
        tittle: "Image 3"
    }, {
        img: "pics/4.jpg",
        tittle: "Image 4"
    }, {
        img: "pics/5.jpg",
        tittle: "Image 5"
    }, {
        img: "pics/6.jpg",
        tittle: "Image 6"
    }, {
        img: "pics/7.jpg",
        tittle: "Image 7"
    }, {
        img: "pics/8.jpg",
        tittle: "Image 8"
    }, {
        img: "pics/9.jpg",
        tittle: "Image 9"
    }, {
        img: "pics/10.jpg",
        tittle: "Image 10"
    },
]

const ScrollAnimation = () => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef
    })
    const x = useTransform(scrollYProgress, [0, 1], ["0", "-60%"])
    return (
        <div className="w-full h-full bg-stone-500">
            {/* Upper Div */}
            <div className="w-full h-[250px] flex justify-center items-center">
                <h1 className="text-4xl font-bold text-stone-200">Upper Die</h1>
            </div>
            {/* Animation Div */}
            <div ref={targetRef} className="relative bg-stone-600 w-full h-[200vh] ">
                <div className="w-full sticky top-0 left-0 h-screen flex items-center overflow-hidden">
                <motion.div  style={{x}} className="flex gap-4 px-4">
                    {
                        images.map((item)=>{
                            return(
                                <div key={item.tittle} className="w-[280px] h-[280px] relative overflow-hidden">
                                    <div>
                                        <img src={item.img} className="rounded-xl w-full absolute transition-transform duration-300"/>
                                    </div>
                                    <div className="absolute inset-0 grid place-content-center z-10">
                                        <h1 className="text-3xl text-stone-300 backdrop-blur-sm px-4 py-2">{item.tittle}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </motion.div>
                </div>
            </div>
            {/* Lower Div */}
            <div className="w-full h-[250px] flex justify-center items-center">
                <h1 className="text-4xl font-bold text-stone-200">Lower Die</h1>
            </div>
        </div>
    )
}
export default ScrollAnimation;
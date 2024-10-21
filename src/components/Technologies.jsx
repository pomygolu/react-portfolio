import { BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { motion } from "framer-motion";
import { SiJavascript } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 
                whileInView={{ y: 0, opacity: 1}}
                initial={{ y: -100, opacity: 1}}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0}}
                initial={{ x: -100, opacity: 0}}
                transition={{ duration: 1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
                 <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiMicrosoftsqlserver className="text-7xl" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <AiOutlineDotNet className="text-7xl text-sky-700" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <DiRedis className="text-7xl text-red-700" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiJavascript className="text-7xl text-sky-700" />
                </motion.div>
            </motion.div>
        </div>
    )
};

export default Technologies;
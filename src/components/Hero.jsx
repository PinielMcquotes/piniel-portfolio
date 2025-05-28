import piniel from "../assets/piniel.png";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center p-2 lg:p-10">
            <motion.img
              src={piniel}
              alt="Piniel Makotose"
              className="border border-stone-900 rounded-3xl"
              height={650}
              width={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-start lg:items-start mt-10 lg:p-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-5xl"
            >
              Piniel Makotose
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              Fullstack & Embedded Systems Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-md leading-relaxed tracking-tighter"
            >
              Engineer at the intersection of hardware and software. I develop
              fullstack IoT platforms — responsive React UIs, reliable Node.js
              APIs, and embedded systems that connect the physical and digital.
              Let’s build the future together
            </motion.p>
            <motion.a
              variants={childVariants}
              href="../assets/Piniel Makotose_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-2 text-sm text-stone-800 mb-10"
            >
              {" "}
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

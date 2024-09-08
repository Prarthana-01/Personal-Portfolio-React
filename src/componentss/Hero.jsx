import { motion } from "framer-motion";
import profilePic from "../assets/prath2.jpg";

const revealVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: { width: "auto", opacity: 1 },
};

const textVariants = {
  move: {
    x: ["0%", "50%", "0%"], // Move right and back
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex flex-col">
              <motion.h1
                variants={revealVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1,
                }}
                className="overflow-hidden pb-2 text-5xl font-thick tracking-tight lg:mt-16 lg:text-5xl whitespace-nowrap"
              >
                Prarthana Ravikumar
              </motion.h1>
            </div>

            <div className="mt-8 flex flex-col items-center lg:items-start">
              {/* Continuous Animation for Designer */}
              <motion.div
                variants={textVariants}
                animate="move"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-5xl inline-block"
                style={{ overflow: 'hidden' }} // Ensure the text is clipped correctly
              >
                Student +
              </motion.div>

              {/* Continuous Animation for Developer */}
              <motion.div
                variants={textVariants}
                animate="move"
                className="bg-gradient-to-r from-green-300 via-blue-500 to-indigo-500 bg-clip-text text-transparent text-5xl inline-block mt-4 ml-8"
                style={{ overflow: 'hidden' }} // Ensure the text is clipped correctly
              >
                Designer
              </motion.div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Prarthana"
              style={{ width: '400px', height: '440px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
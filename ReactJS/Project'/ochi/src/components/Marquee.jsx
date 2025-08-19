import React from "react";
import { motion } from "motion/react";

function Marquee() {
  return (
    <div>
      <div className="w-full py-10 rounded-3xl bg-[#004D43]">
        <div className="text  border-t-1 border-b-1 border-zinc-300 overflow-hidden flex gap-10 whitespace-nowrap">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
            className="text-[14vw] flex justify-center items-center font-['Founders_Grotesk_X-Condensed'] font-bold uppercase"
          >
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
            className="text-[14vw] flex justify-center items-center font-['Founders_Grotesk_X-Condensed'] font-bold uppercase"
          >
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
            className="text-[14vw] flex justify-center items-center font-['Founders_Grotesk_X-Condensed'] font-bold uppercase"
          >
            We are ochi
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Marquee;

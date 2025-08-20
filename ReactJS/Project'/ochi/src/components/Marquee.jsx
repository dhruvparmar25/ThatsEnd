import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div>
      <div className="w-full -pt-30 py-20 rounded-3xl bg-[#004D43]">
        <div className="text border-t-2 border-b-2 border-zinc-300 overflow-hidden flex gap-10 whitespace-nowrap">
          
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[547px] leading-none -mb-10 -mt-25 flex justify-center items-center font-semibold uppercase"
          >
            We are ochi
          </motion.h1>

          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[547px] leading-none -mb-5 -mt-20 flex justify-center items-center font-semibold uppercase"
          >
            We are ochi
          </motion.h1>

          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[547px] leading-none -mb-10 -mt-25 flex justify-center items-center font-semibold uppercase"
          >
            We are ochi
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Marquee;

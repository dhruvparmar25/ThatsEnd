import React from "react";
import "../index.css";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure  mt-52 px-20">
        {["We Create", "eye opening", "presentations"].map((item, i) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {i === 1 && (
                  <div className="mr-[1vw]  w-[8vw] rounded-md h-[3.7vw] -top-1vw] relative  bg-green-500"></div>
                )}
                <h1 className="pt-[1vw] font-bold uppercase text-[5vw] leading-[.75] font-['Founders_Grotesk_X-Condensed']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px]  border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "for public and private companies",
          "from the first pitch to IPO",
        ].map((item) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md capitalize rounded-full uppercase">
            star the project
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center border-[1px] border-zinc-400">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

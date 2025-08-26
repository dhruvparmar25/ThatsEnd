import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700   pb-20">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured Project
        </h1>
      </div>
      <div className="px-20">
        <div className="cards flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2   h-[75vh] ">
       <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2   z-[9] text-8xl font-['Founders_Grotesk_X-Condensed'] leading-none tracking-tighter text-[#CDEA68]">{"FIDE".split('').map((item,index)=><span >{item}</span>)}</h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
                className="w-full h-full bg-cover"
              />
            </div>
          </div>
          {/* ------------------------------------------------------------------------- */}
          <div className="cardcontainer relative w-1/2   h-[75vh] ">
          <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2   z-[9] text-8xl font-['Founders_Grotesk_X-Condensed'] leading-none tracking-tighter text-[#CDEA68]">{"VISE".split('').map((item,index)=><span >{item}</span>)}</h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"
                className="w-full h-full bg-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

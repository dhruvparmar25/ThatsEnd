import React from 'react'
import '../index.css'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
    return (
        <div className='w-full h-screen bg-zinc-900 pt-1'>
            <div className="textstructure  mt-52 px-20">
                {["We Create", "eye opening", "presentations"].map((item, i) => {
                    return <div className="masker " key={i}>
                        <h1 className='font-landing leading-[6vw] tracking-tighter font-medium uppercase text-[7.5vw]' >{item}</h1>
                    </div>
                }
                )}


            </div>
            <div className="border-t-2 flex justify-between items-center border-zinc-800 mt-32 py-5 px-20">
                {["for public and private companies", "from the first pitch to IPO"].map((item) => (
                    <p className='text-md font-light tracking-tight leading-none'>{item}</p>
                ))}
                <div className='start flex items-center gap-5'>
                    <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md capitalize rounded-full uppercase'>star the project</div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border-[1px] border-zinc-400" ><span className='rotate-45'>
                        <FaArrowUpLong /></span></div>
                </div>
            </div>

        </div>
    )
}

export default LandingPage 
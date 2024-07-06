import React from 'react'
import { motion } from 'framer-motion';
import ExpandingBox from './Expandingbox';
import { GoArrowUpRight } from "react-icons/go";
import "../App.css"

function LandingPage() {
  return (
    <div className='w-screen h-screen text-white pt-1 bg-zinc-900'>
      <div className="textstructur mt-40 pl-[7vw]  relative">

        {
            ["We Create","Eye-opening","Presentations"].map((item,index)=>(
                index === 1?<div className='masker flex justify-start items-center' key={index}> 
                    <ExpandingBox/>
                    <div className="uppercase text-[7.5vw]  tracking-tighter font-medium font-['Founders Grotesk'] leading-[6.5vw]">
                        {item}
                    </div>
                </div>:<div className='masker' key={index}> 
                    
                    <div className="uppercase text-[7.5vw]  tracking-tighter font-medium font-['Founders Grotesk'] leading-[6.5vw]">
                        {item}
                    </div>
                </div>
            ))
        
        }
      </div>
      <div className='w-[12vw] h-[55px] shrink-0 bg-red-500 absolute -rotate-90 flex justify-center items-center gap-5 -right-14 top-[30vh]'>Site of The Day<span className='rotate-90 font-bold text-xl pl-2'>W.</span></div>
      <div className='border-t-[1px] border-zinc-100 mt-16 flex justify-between items-center py-5 px-20'>
         {
            ["For public and private companies","From the first pitch to the IPO"
            ].map((item,index)=>(
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))
        }
        <div className="flex items-center gap-3 cursor-pointer group">
            <div className='px-3 py-1 border-2 rounded-full bg-zinc-900  group-hover:bg-zinc-100 group-hover:text-zinc-900  duration-500'>START THE PROJECT</div>
            <div className='h-9 w-9 rounded-full border-2 flex justify-center items-center text-xl  group-hover:bg-zinc-100 group-hover:text-zinc-900  duration-500'><GoArrowUpRight size={24}/></div>
        </div>
      </div>
       

    </div>
  )
}

export default LandingPage

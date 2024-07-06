import React from 'react'
import { motion } from 'framer-motion';
import ExpandingBox from './Expandingbox';

function LandingPage() {
  return (
    <div className='w-full h-screen text-white pt-1 bg-zinc-900'>
      <div className="textstructur mt-40 px-20">

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
      <div className='border-t-[1px] border-zinc-100 mt-32 flex justify-between items-center py-5 px-20'>
         {
            ["For public and private companies","From the first pitch to the IPO"
            ].map((item,index)=>(
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))
        }
        <button>h</button>
      </div>
       

    </div>
  )
}

export default LandingPage

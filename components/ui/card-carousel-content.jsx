'use client';
//React
import React, { useState, useEffect } from 'react';

//Next JS stuff
import Image from "next/image";

//icons
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export function CardCarouselContent({content, position = false}) {
  const [index, setIndex] = useState(0);

  const showButtons = content.length > 1 ? true : false;

  return(
      <>

      <div className={`flex justify-center w-full self-center ${position === "left" ? "block":"lg:hidden"}`}>
        <div className='relative w-full' style={{aspectRatio: "120 / 100"}}>
          <Image
            src={content[index].image}
            fill
            priority
            className='object-cover relative z-0'
            alt="supporting-image"
          />
        </div>
      </div>



      <div className={`lg:w-3/4 leading-8 p-4 lg:p-8 flex-col justify-between h-full ${position === "full" ? 'hidden':''}`} style={{aspectRatio: `${showButtons === true ? '120' : '100'} / 100`}} >
      
        <h1 className="h-full overflow-scroll relative">
          {/* <div className="gradient-overlay  z-50"></div> */}
          {content[index].text}
          <div className='absolute bottom-0 left-0 right-0 h-10'>
            <div className="fixed gradient-overlay bg-gradient-to-b from-transparent to-black"></div>
          </div>

        </h1>
        <div className='absolute top-0 h-[10%] bg-gradient-to-b bg-transparent from-white to-secondary'></div>

      
        <div className='lg:absolute lg:bottom-0'>

          <div className='flex gap-8 my-8'>
                <button className={`flex items-center justify-center w-10 h-10 rounded-full bg-white15  ${index === 0 ? 'opacity-50' : 'md:hover:opacity-75'} ${showButtons === true ? 'flex' : 'hidden'}`} onClick={() => { if(index > 0){setIndex(index-1)} }}>
                  <FaArrowLeft className='w-6 h-6 fill-white75'/>
                </button>
            
                <button className={`flex items-center justify-center w-10 h-10 rounded-full bg-white15  ${index === content.length-1 ? 'opacity-50' : 'md:hover:opacity-75'} ${showButtons === true ? 'flex' : 'hidden'}`} onClick={() => { if(index < content.length-1){setIndex(index+1)} }}>
                  <FaArrowRight className='w-6 h-6 fill-white75'/>
                </button>
          </div>
      
        </div>
      
      </div>


      <div className={`flex justify-center w-full self-center bg-tertiary ${position === "right" ? "lg:block hidden":"hidden"}`}>
        <div className='relative w-full' style={{aspectRatio: "120 / 100"}}>
          <Image
            src={content[index].image}
            fill
            priority
            className='object-cover'
            alt="supporting image"
          />
        </div>
      </div>

      <div className={`flex justify-center w-full self-center bg-tertiary ${position === "full" ? '' : 'hidden'}`}>
        <div className='relative w-full' style={{aspectRatio: "16 / 8"}}>
          <Image
            src={content[index].image}
            fill
            priority
            className='object-cover'
            alt="supporting image"
          />
        </div>

        <div className={`lg:absolute lg:bottom-0 flex gap-8 m-4 bg-primary p-[3px] backdrop-blur-3xl rounded-full opacity-80 ${showButtons === true ? 'flex' : 'hidden'}`}>
      
          <button className={`flex items-center justify-center w-10 h-10 rounded-full bg-white15 backdrop-blur-3xl ${index === 0 ? 'opacity-50' : 'md:hover:opacity-75'}`} onClick={() => { if(index > 0){setIndex(index-1)} }}>
            <FaArrowLeft className='w-6 h-6 fill-white75'/>
          </button>
      
          <button className={`flex items-center justify-center w-10 h-10 rounded-full bg-white15 backdrop-blur-3xl ${index === content.length-1 ? 'opacity-50' : 'md:hover:opacity-75'}`} onClick={() => { if(index < content.length-1){setIndex(index+1)} }}>
            <FaArrowRight className='w-6 h-6 fill-white75'/>
          </button>
      
        </div>

      </div>
      
      </>
  )
}

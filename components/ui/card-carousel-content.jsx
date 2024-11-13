'use client';
//React
import React, { useState, useEffect } from 'react';

//Next JS stuff
import Image from "next/image";

//icons
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export function CardCarouselContent({content, position}) {
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
            alt="supporting image"
          />
        </div>

      </div>



      <div className='lg:w-3/4 leading-8 p-4 lg:p-8 flex-col justify-between h-full' >
        <p className='xl:h-auto h-48 xl:overflow-auto overflow-scroll lg:pb-8 pb-4' dangerouslySetInnerHTML={{ __html: content[index].text }}></p>
      
        <div className='lg:absolute lg:bottom-0 flex gap-8 xl:my-8 my-4'>
      
          <button className={`flex items-center justify-center w-10 h-10 rounded-full bg-white15  ${index === 0 ? 'opacity-50' : 'md:hover:opacity-75'} ${showButtons === true ? 'flex' : 'hidden'}`} onClick={() => { if(index > 0){setIndex(index-1)} }}>
            <FaArrowLeft className='w-6 h-6 fill-white75'/>
          </button>
      
          <button className={`flex items-center justify-center w-10 h-10 rounded-full bg-white15  ${index === content.length-1 ? 'opacity-50' : 'md:hover:opacity-75'} ${showButtons === true ? 'flex' : 'hidden'}`} onClick={() => { if(index < content.length-1){setIndex(index+1)} }}>
            <FaArrowRight className='w-6 h-6 fill-white75'/>
          </button>
      
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
      
      </>
  )
}
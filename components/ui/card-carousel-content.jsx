'use client';
//React
import React, { useRef } from 'react';

//Next JS stuff
import Image from "next/image";

//icons
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export function CardCarouselContent({text, image}) {
    return(
        <>

        <div className='lg:w-3/4 leading-8 p-4 lg:p-8 flex-col justify-between h-full'>
          <p className='lg:pb-[88px]'>{text}</p>
        
          <div className='lg:absolute lg:bottom-0 flex gap-8 my-8'>
        
            <button className='flex items-center justify-center w-10 h-10 rounded-full bg-white15 md:hover:opacity-75'>
              <FaArrowLeft className='w-6 h-6 fill-white75'/>
            </button>
        
            <button className='flex items-center justify-center w-10 h-10 rounded-full bg-white15 md:hover:opacity-75'>
              <FaArrowRight className='w-6 h-6 fill-white75'/>
            </button>
        
          </div>
        
        </div>
        
        <div className="flex justify-center w-full self-center bg-tertiary ">
          <div className='relative w-full' style={{aspectRatio: "120 / 100"}}>
            <Image
              src={image}
              fill
              priority
              className='object-cover'
              alt="supporting image"
            />
          </div>
        </div>
        
        </>
    );
}

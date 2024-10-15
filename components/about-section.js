//React
import React from 'react'

//images
import supportingImage from "@/public/images/about/about-developer.png"

//icons
// import { IoIosArrowDropdownCircle } from "react-icons/io";


//Next Components
import Image from "next/image";

//components
import { PrimaryButton } from './primary-button';
import { ContactGrid } from './contact-grid';

export function AboutSection({title, details, image, position}){
  return (
    <div className="h-[75%] w-screen pb-64">
        <div className='md:mx-16 mx-4 md:flex items-center justify-between'>

            <div className={`bg-secondary rounded-[1rem] md:mr-12 lg:mr-12 md:my-12 ${position === "left" ? "md:block hidden":"hidden"}`}>
              <div className='relative lg:w-[550px] p-4 w-full md:m-12' style={{aspectRatio: "1024 / 800"}}>
                <Image
                  src={image}
                  // width={auto}
                  // height={auto}
                  fill
                  priority
                  className='object-contain'
                  alt="supporting image"
                />
              </div>
            </div>

            <div className='md:w-[40%] w-full py-12'>
                {title}
                {details}
            </div>

            <div className={`bg-secondary rounded-[1rem] md:ml-12 lg:ml-12 md:my-12 ${position === "right" ? "":"md:hidden block"}`}>
              <div className='relative lg:w-[550px] md:w-[350px] p-4 w-full md:m-12' style={{aspectRatio: "1024 / 800"}}>
                <Image
                  src={image}
                  // width={auto}
                  // height={auto}
                  fill
                  priority
                  className='object-contain'
                  alt="supporting image"
                />
              </div>
            </div>
        </div>

    </div>
  )
}

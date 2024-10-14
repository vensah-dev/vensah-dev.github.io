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
        <div className='md:mx-16 mx-4 md:flex items-center justify-between gap-16'>

            <div className={`bg-secondary flex justify-center rounded-[1rem] ${position === "left" ? "md:block hidden":"hidden"}`}>
              <Image
                src={image}
                // width={auto}
                // height={auto}
                alt="supporting image"
                className="object-contain w-3/4 p-4 md:p-12"
              />
            </div>

            <div className='md:w-[40%] w-full py-12'>
                {title}
                {details}
            </div>

            <div className={`bg-secondary flex justify-center grow-0 rounded-[1rem] ${position === "right" ? "":"md:hidden block"}`}>
              <Image
                src={image}
                // width={auto}
                // height={auto}
                alt="supporting image"
                className="object-contain w-3/4 p-4 md:p-12"
              />
            </div>
        </div>

    </div>
  )
}

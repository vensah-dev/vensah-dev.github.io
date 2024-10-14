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

            <div className={`bg-secondary rounded-[1rem] md:mr-32 mr-0 ${position === "left" ? "md:block hidden":"hidden"}`}>
              <Image
                src={image}
                // width={auto}
                // height={auto}
                alt="supporting image"
                className="inline lg:w-full w-full p-4 md:p-12"
              />
            </div>

            <div className='md:w-[40%] w-full py-12'>
                {title}
                {details}
            </div>

            <div className={`bg-secondary rounded-[1rem] md:ml-32 ${position === "right" ? "":"md:hidden block"}`}>
              <Image
                src={image}
                // width={auto}
                // height={auto}
                alt="supporting image"
                className="inline lg:w-full w-full p-4 md:p-12"
              />
            </div>
        </div>

    </div>
  )
}

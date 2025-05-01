'use client'
//React
import React from 'react'
import { useState, useEffect } from 'react';

//icons
// import { IoIosArrowDropdownCircle } from "react-icons/io";

//Next Components
// import Image from "next/image";

//components
// import { PrimaryButton } from './primary-button';
import { ContactGrid } from './contact-grid';
import { TextGenerateEffect } from './ui/text-generate-effect';



export function AboutHero() {
  const [height, setHeight] = useState(0);

  useEffect(() => {

    if (typeof window !== 'undefined') {

      const handleResize = () => setHeight(window.innerHeight);

      window.addEventListener('resize', handleResize);

      handleResize(); // Initial set on mount

      return () => window.removeEventListener('resize', handleResize);

    }

  }, []);

 
  return (

    <div className="bg-about-hero h-screen bg-repeat-x bg-cover bg-inherit lg:bg-fixed animate-[bg-pan-left_100s_linear_infinite] md:animate-[bg-pan-left_30s_linear_infinite]">
      <div className={`h-screen flex ${height > 760 ? "items-center" : "pt-[136px]"} bg-opacity-0 bg-gradient-to-t from-primary from-20% to-white-opacity-0 to-85% md:bg-gradient-to-r md:from-primary md:from-20% md:to-white-opacity-0 md:to-85% z-100`}>

        <div className='w-full z-0 mx-4 md:mx-16 md:w-2/3 '>
          <div className=' font-jetBrainsMono font-medium md:tracking-[-0.05em] tracking-[-0.14em] flex text-h5 md:text-h4'>

            <TextGenerateEffect
              words={"Text"}
              className="text-[#8888C1]"
              color={"[#8888C1]"}
              duration={1}
            />
            <TextGenerateEffect
              words={"("}
              className="text-[#BCBEC3]"
              color={"[#BCBEC3]"}
              duration={1}
            />
            <TextGenerateEffect
              words={'“Hello, I’m Venkatesh”'}
              className="text-[#79A978]"
              color={"[#79A978]"}

              duration={1}
            />
            <TextGenerateEffect
              words={")"}
              className="text-[#BCBEC3]"
              color={"[#BCBEC3]"}

              duration={1}
            />
          </div>

          <TextGenerateEffect
            words="Student, Developer & Leader"
            className={"text-h3 md:text-h1 font-bold leading-tight pb-4 md:pb-8 w-full md:w-[calc(100vw-128px)] xl:w-[80%] 2xl:w-[55%]"}
            color={"white100"}
            duration={1}
          />

          <TextGenerateEffect
            words={"I’m Venkatesh Devendran. A student in Pei Hwa Secondary School, a passionate developer and the president of my Robotics Club"}
            className={" w-full md:w-3/5 lg:w-1/3 pb-4 animate-blurfadein"}
            color={"white75"}
            duration={1}
            staggerVal={0.05}
          />

          <ContactGrid about={true} />

          {/* <PrimaryButton text="My Projects" position={"right"} icon={<IoIosArrowDropdownCircle className='w-6 h-6'/>}/> */}
        </div>

      </div>
    </div>
  )
}

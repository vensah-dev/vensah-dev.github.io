'use client';
//React
import React, { useRef } from 'react';
//components
import { AboutHero } from "@/components/about-hero";
import { Timeline } from "@/components/ui/timeline";

import { AboutSection } from "@/components/about-section";

//Next JS stuff
import Image from "next/image";

//shadcn or Aceternity
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal";


//images
import aboutProgrammer from "@/public/images/about/about-programmer.png"

import aboutDeveloper from "@/public/images/about/about-developer.png"

import aboutDesigner from "@/public/images/about/about-designer.png"
import aboutPresident from "@/public/images/about/about-designer.png"

//icons
// import { FaCircleCheck } from "react-icons/fa6";


//content


//cardsData



export default function Home() {
  const rootRef = useRef(null);
  const data = [
    {
      title: "2018",
      content: (
        <div className="text-white90 font-medium">
          I was 9 years old when I was introduced to the world of computer programming through a beginners book on Scratch. 
          I made a few simple games in this year until I forgot my Scratch account&#39;s password…
  
          <div className='relative lg:w-[550px] p-4 w-full md:m-12' style={{aspectRatio: "1024 / 800"}}>
            <Image
              src={aboutProgrammer}
              fill
              priority
              className='object-contain'
              alt="supporting image"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div className="text-white90 font-medium">
          This was the year I did what all computer enthusiasts do - take apart their very first computer. 
          I took apart a Dell XPS M1330 (from 2008 ☠️) and learned how computer hardware works to 
          repaired the computer right before HBL due to COVID-19.
          
          <Accordion type="single" collapsible className="pt-8">
            <AccordionItem value="item-1" className="border-2 border-white5 bg-secondary rounded-[1rem]">
  
              <AccordionTrigger>This enabled me to:</AccordionTrigger>
  
              <AccordionContent>
                <ul className="list-disc list-inside">
                  <li>Use my first Personal Computer for HBL after a clean install of Ubuntu 18.04 LTS</li>
                  <li>Discover the recent technological breakthrough and innovation in quantum mechanics called the ‘Forgot My Password’ button which allowed me to recover my Scratch account to continue my programming journey</li>
                  <li>Experience unbearably agonising pain of waiting for 7 minutes to boot up my Dell XPS M1330</li>
                  <li>Use my painful experience to beg my parents for a new MacBook</li>
                  <li>Use the MacBook 😊</li>
                </ul>       
              </AccordionContent>
  
            </AccordionItem>
          </Accordion>
  
          <div className='relative lg:w-[550px] p-4 w-full md:m-12' style={{aspectRatio: "1024 / 800"}}>
            <Image
              src={aboutProgrammer}
              fill
              priority
              className='object-contain'
              alt="supporting image"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="text-white90 font-medium">
          After a year of Scratch, PSLE and overcoming the reluctance to learn a syntax based language I 
          started making games in the Unity. This required learning OOP and C# as my very first syntax based language. 
          In 2 weeks I got a hang of Unity 3D and C# MonoBehaviour by creating an Infinite 3D Procedural Terrain Generation 
          system using layered Perlin Noise and custom mesh generation.
  
  
          <div>
          <Modal>
  
          <ModalTrigger className="flex justify-center w-full">
            <div className='relative lg:w-[550px] p-4 w-full md:m-12' style={{aspectRatio: "1024 / 800"}}>
              <Image
                src={aboutProgrammer}
                fill
                priority
                className='object-contain'
                alt="supporting image"
              />
            </div>
          </ModalTrigger>
  
          <ModalBody rootRef={rootRef.current} className="overflow-scroll scroll-0 ">
  
            <ModalContent>
              <div className='relative lg:w-[550px] p-4 w-full md:m-12' style={{aspectRatio: "1024 / 800"}}>
                <Image
                  src={aboutProgrammer}
                  fill
                  priority
                  className='object-contain'
                  alt="supporting image"
                />
              </div>
            </ModalContent>
  
            <ModalFooter className="gap-4">
              YUMMERSS...
              As a yapper i am a professional yapper. i can get any point across with my professional yapping skills and make it last as long as humanly possible.
          but since this is just a brief description i would be cutting my yapperness short for the sake of me not being able to use lorem ipsum. speaking of which
          i have come to realise that i could have just written lorem ipsum and hit tab on visual studio code just to fill it with lorem ipsum. i am a professional
          yappist.
          As a yapper i am a professional yapper. i can get any point across with my professional yapping skills and make it last as long as humanly possible.
          but since this is just a brief description i would be cutting my yapperness short for the sake of me not being able to use lorem ipsum. speaking of which
          i have come to realise that i could have just written lorem ipsum and hit tab on visual studio code just to fill it with lorem ipsum. i am a professional
          yappist.
          As a yapper i am a professional yapper. i can get any point across with my professional yapping skills and make it last as long as humanly possible.
          but since this is just a brief description i would be cutting my yapperness short for the sake of me not being able to use lorem ipsum. speaking of which
          i have come to realise that i could have just written lorem ipsum and hit tab on visual studio code just to fill it with lorem ipsum. i am a professional
          yappist.
          As a yapper i am a professional yapper. i can get any point across with my professional yapping skills and make it last as long as humanly possible.
          but since this is just a brief description i would be cutting my yapperness short for the sake of me not being able to use lorem ipsum. speaking of which
          i have come to realise that i could have just written lorem ipsum and hit tab on visual studio code just to fill it with lorem ipsum. i am a professional
          yappist.
            </ModalFooter>
  
          </ModalBody>
  
        </Modal>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <>
          As a yapper i am a professional yapper. i can get any point across with my professional yapping skills and make it last as long as humanly possible.
          but since this is just a brief description i would be cutting my yapperness short for the sake of me not being able to use lorem ipsum. speaking of which
          i have come to realise that i could have just written lorem ipsum and hit tab on visual studio code just to fill it with lorem ipsum. i am a professional
          yappist.
  
        </>
      ),
    },
    {
      title: "2023",
      content: (
        <>
          As a yapper i am a professional yapper. i can get any point across with my professional yapping skills and make it last as long as humanly possible.
          but since this is just a brief description i would be cutting my yapperness short for the sake of me not being able to use lorem ipsum. speaking of which
          i have come to realise that i could have just written lorem ipsum and hit tab on visual studio code just to fill it with lorem ipsum. i am a professional
          yappist.
          <div className='relative lg:w-[550px] p-4 w-full md:m-12' style={{aspectRatio: "1024 / 800"}}>
            <Image
              src={aboutProgrammer}
              fill
              priority
              className='object-contain'
              alt="supporting image"
            />
          </div>
        </>
      ),
    },
    {
      title: "2024",
      content: (
        <>
          As a yapper i am a professional yapper. i can get any point across with my professional yapping skills and make it last as long as humanly possible.
          but since this is just a brief description i would be cutting my yapperness short for the sake of me not being able to use lorem ipsum. speaking of which
          i have come to realise that i could have just written lorem ipsum and hit tab on visual studio code just to fill it with lorem ipsum. i am a professional
          yappist.
          <div className='relative lg:w-[550px] p-4 w-full md:m-12' style={{aspectRatio: "1024 / 800"}}>
            <Image
              src={aboutProgrammer}
              // width={auto}
              // height={auto}
              fill
              priority
              className='object-contain'
              alt="supporting image"
            />
          </div>
        </>
      ),
    },
  ]
  return (
    <main ref={rootRef.current} className="bg-primary z-20 pb-48 lg:pb-96">
      <div className="absolute top-0 left-0 right-0 -bottom-[1px] bg-gradient-to-t from-primary from-0% to-white-opacity-5 to-50% z-101"></div>

      <AboutHero className=""/>

      <Timeline data={data}/>

    </main>
  );
}

'use client';
//React
import React, { useRef } from 'react';

//components
import { CardCarouselContent } from '@/components/ui/card-carousel-content';

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
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


//content


//cardsData



export default function Home() {
  const rootRef = useRef(null);
  const data = [


    {
      title: "2018",
      content: (
        <CardCarouselContent 
          text={`I was 9 years old when I was introduced to the world of computer programming through a beginners 
            book on Scratch. I made a few simple games in this year until I forgot my Scratch account’s password…`} 
          image={"https://images.unsplash.com/photo-1726502426504-4257be91c5c6?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
      ),
    },


    {
      title: "2020",
      content: (
        <CardCarouselContent 
          text={`This was the year I did what all computer enthusiasts do - take apart their very first computer. I took apart a Dell XPS M1330 (from 2008 ☠️) 
            and learned how computer hardware works to repaired the computer right before COVID-19. This enabled me to:`} 
          image={"https://images.unsplash.com/photo-1486365227551-f3f90034a57c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
      ),
    },


    {
      title: "2021",
      content: (
        <CardCarouselContent 
          text={`After a year of Scratch, PSLE and overcoming the reluctance to learn a syntax based language I
              started making games in the Unity. This required learning OOP and C# as my very first syntax based language.
              In 2 weeks I got a hang of Unity 3D and C# MonoBehaviour by creating an Infinite 3D Procedural Terrain Generation
              system using layered Perlin Noise and custom mesh generation.`} 
          image={"https://images.unsplash.com/reserve/qstJZUtQ4uAjijbpLzbT_LO234824.JPG?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
      ),
    },


    {
      title: "2022",
      content: (
        <CardCarouselContent 
          text={`For someone who lost 11 umbrellas by forgetting where I put it (and 3 due to collateral damage), 
            I performed just as you would expect for my sec 1 history. Other than that I also managed to: clench 
            1st placing in 3 categories in my very first RoboCup competition.`} 
          image={"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
      ),
    },


    {
      title: "2023",
      content: (
        <CardCarouselContent 
          text={`The fact that it was streaming year and I should start to lock in for my grades took me 2 terms to realise. 
            It was also the year that I made more achievements in my CCA by winning NRC that year and managed to contribute 
            more to CCA by becoming an Exco. I was also part of Swift Accelerator Programme that year which enabled me to software 
            development with Swift. Obviously I had other achievements too:`} 
          image={"https://images.unsplash.com/photo-1582721570262-b6fed9bd5fe7?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
      ),
    },


    {
      title: "2024",
      content: (
        <CardCarouselContent 
          text={`After successfully getting an subject combination with A Math, Pure Physics, Computing and combined Geography 
            (finally no more memorising an entire textbook 🎉), I participated in the Swift Student Challenge for the second 
            time, even though I lost again, the quality of my submission was greatly improved. This was the year I finally 
            started web development which led em to learn:`} 
          image={"https://images.unsplash.com/photo-1474835944939-50b3a279d8ba?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
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

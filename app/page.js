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
import Image2018 from "@/public/images/about/2018.png"
import Image2020 from "@/public/images/about/2020.png"
import Image2021 from "@/public/images/about/2021.png"
import Image2022 from "@/public/images/about/2022.png"
import Image2023 from "@/public/images/about/2023.png"
import Image2024 from "@/public/images/about/2024.png"


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
          position={"left"}
          text={`I was 9 years old when I was introduced to the world of computer programming through a beginners 
            book on Scratch. I made a few simple games in this year until I forgot my Scratch account’s password…`} 
          image={Image2018}
        />
      ),
    },


    {
      title: "2020",
      content: (
        <CardCarouselContent 
          position={"right"}
          text={`This was the year I did what all computer enthusiasts do - take apart their very first computer. I took apart a Dell XPS M1330 (from 2008 ☠️) 
            and learned how computer hardware works to repaired the computer right before COVID-19.`} 
          image={Image2020}
        />
      ),
    },


    {
      title: "2021",
      content: (
        <CardCarouselContent 
          position={"left"}
          text={`After a year of Scratch, PSLE and overcoming the reluctance to learn a syntax based language I
              started making games in the Unity. This required learning OOP and C# as my very first syntax based language.
              In 2 weeks I got a hang of Unity 3D and C# MonoBehaviour by creating an Infinite 3D Procedural Terrain Generation
              system using layered Perlin Noise and custom mesh generation.`} 
          image={Image2021}
        />
      ),
    },


    {
      title: "2022",
      content: (
        <CardCarouselContent 
          position={"right"}
          text={`For someone who lost 11 umbrellas by forgetting where I put it (and 3 due to collateral damage), 
            I performed just as you would expect for my sec 1 history. Other than that I also managed to: clench 
            1st placing in 3 categories in my very first RoboCup competition.`} 
          image={Image2022}
        />
      ),
    },


    {
      title: "2023",
      content: (
        <CardCarouselContent 
          position={"left"}
          text={`The fact that it was streaming year and I should start to lock in for my grades took me 2 terms to realise. 
            It was also the year that I made more achievements in my CCA by winning NRC that year and managed to contribute 
            more to CCA by becoming an Exco. I was also part of Swift Accelerator Programme that year which enabled me to software 
            development with Swift.`} 
          image={Image2023}
        />
      ),
    },


    {
      title: "2024",
      content: (
        <CardCarouselContent 
          position={"right"}
          text={`After successfully getting an subject combination with A Math, Pure Physics, Computing and combined Geography 
            (finally no more memorising an entire textbook 🎉), I participated in the Swift Student Challenge for the second 
            time, even though I lost again, the quality of my submission was greatly improved 📈. This was also the year I finally 
            started web development!`} 
          image={Image2024}
        />
      ),
    },


  ]


  return (
    <main ref={rootRef.current} className="bg-primary z-20 pb-52 lg:pb-96">
      <div className="absolute top-0 left-0 right-0 -bottom-[1px] bg-gradient-to-t from-primary from-0% to-white-opacity-5 to-50% z-101"></div>

      <AboutHero className=""/>

      <Timeline data={data}/>

    </main>
  );
}

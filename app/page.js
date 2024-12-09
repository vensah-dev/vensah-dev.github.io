'use client';
//React
import React, { useRef } from 'react';

//components
import { CardCarouselContent } from '@/components/ui/card-carousel-content';

import { AboutHero } from "@/components/about-hero";
import { Timeline } from "@/components/ui/timeline";

//Next JS stuff
import Image from "next/image";

//shadcn or Aceternity
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal";


//images
import ScratchLogo from "@/public/images/about/scratch-logo.png"
import DellXPSM1330 from "@/public/images/about/dell-xps-m1330.png"
import Trophyx3 from "@/public/images/about/trophyx3.png"
import BlankWhite from "@/public/images/about/blank-white.png"
import SmartSheet from "@/public/images/about/smart-sheet.png"
import WebDevelop from "@/public/images/about/web-develop.png"
import President from "@/public/images/about/president.png"
import LostUmbrellaGraph from "@/public/images/about/Umbrellas-lost.png"
import ForgotPassword from "@/public/images/about/Forgot-Password.png"
import OldWebsite from "@/public/images/about/old-website.png"
import StemAlpFest from "@/public/images/about/stem-alp-fest.png"
import CSharpCode from "@/public/images/about/CSharp-code.png"



//icons
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


//content


//cardsData



export default function Home() {
  const rootRef = useRef(null);

  const year2018 = [
    {
      text: `I was 9 years old when I was introduced to the world of computer programming through a beginners 
        book on Scratch. I made a few simple games in this year until I forgot my Scratch account’s password…`,

      image: ScratchLogo,
    },
  ]
  const year2020 = [
    {
      text: `This was the year I did what all computer enthusiasts do — take apart their very first computer. I took apart a Dell XPS M1330 (from 2008 ☠️) and learned how computer hardware works to repair the computer right before COVID-19. After a clean install of Ubuntu 18.04LTS I was able to use the computer
      for my HBL.`,

      image: DellXPSM1330,
    },
    {
      text: `I also discovered the recent technological breakthrough and innovation in quantum mechanics called the 'Forgot My Password' button which allowed me to recover my Scratch account to continue my programming journey`,

      image: ForgotPassword,
    },
    // {
    //   text: `I was fotunate enough to experience the unbearably agonising pain of waiting for 7 minutes to boot up my Dell XPS M1330 and having to close all my 2 empty Firefox tabs and to run Zoom at 2.5FPS at 100% CPU, RAM and DISK?! usage for the entire HBL period. I use my painful experience and other totally valid points to beg my parents for a new MacBook. This ultimately succeeded and I got a new MacBook 😊`,

    //   image: BlankWhite,
    // },
  ]
  const year2021 = [
    {
      text: `After a year of PSLE, Scratch and reluctance to learn a new language, I started making games in Unity. 
      This required learning OOP and C# as my very first syntax based language. 
      Within 2 weeks, I got a hang of Unity 3D and C# by creating an Infinite 3D Procedural Terrain Generation system using 
      layered Perlin Noise and custom mesh generation.`,

      image: CSharpCode,
    },
  ]
  const year2022 = [
    {
      text: `For someone who lost 11 umbrellas by forgetting where I put it (and 3 more due to collateral damage), I performed just as you would expect for my Sec 1 History. Other than that I also managed to clench 1st placing in 3 categories in my very first RoboCup competition.`,

      image: Trophyx3,
    },
    // {
    //   text: `I helped out with the CCA booth that year, led my class to victory for STREAMnovation that year, got into my school's Awards Day 
    //   where I got free food 🥘 and learnt Python so that I can reply with a “True” when my friends ask me “Can you code? Oh so you know Python”`,

    //   image: BlankWhite,
    // },
  ]
  const year2023 = [
    {
      text: `The fact that it was streaming year and I should start to lock in to save my grades took me 2 terms to realise this year. 
      I also made more achievements in my CCA by winning NRC and managed to contribute more to my CCA by becoming an Exco.
      I was also part of the Swift Accelerator Programme which enabled me to create and release an app in the App Store.`,

      image: SmartSheet,
    },
    {
      text: `I also made more achievements in my CCA by winning NRC and managed to contribute more to my CCA by becoming an Exco. 
      My NRC project also gave me the opportunity to give a presentation about it during the STEM ALP Fest 2023.`,

      image: StemAlpFest,
    },
    {
      text: `Learnt C and C++. I won IvP Distinction this year, but most importantly, my lost umbrellas count was greatly reduced by 76.9230769231% this year`,

      image: LostUmbrellaGraph,
    },
  ]
  const year2024 = [
    {
      text: `After successfully getting a subject combination with A Math, Pure Physics, 
      Computing and Combined Geography (finally no more memorising an entire textbook for History 🎉), 
      I had been appointed as the President of my CCA.`,

      image: President,
    },
    {
      text: `This year I finally started on web development, the first website I created was an older version of this very portfolio website. 
      Along the way, I learnt some UI/UX design skills which enabled me to redesign the webiste until it looked and felt like this. 
      Hosting this on GitHub, naturally forced me to <p style="font-style: italic; display: inline; padding-right: 2px;">properly</p> learn how to use Git and GitHub, which also hosts my website.`,

      image: OldWebsite,
    },
    // {
    //   text: `As the new president of the Robotics CCA, I was able to get into contact and discuss with the RGS chairperson on a combined VIA that we 
    //   started to plan for around mid year. We involved our excos and planned a bonding session between our CCAs and a VIA activity later on in the year. 
    //   The VIA activity was teaching MakeCode Arcade to primary schoolers  in a daycare.`,

    //   image: Image2022,
    // },

    // {
    //   text: `At the end of the year I used up 3 weeks of my year end holiday, on a work attachment instead of getting to the legends league in chess.com. This experience was enriching blah blah blah`,

    //   image: Image2022,
    // },

  ]


  const data = [

    {
      title: "2018",
      content: (
        <CardCarouselContent
          position={"right"}
          content={year2018}
        />
      ),
    },


    {
      title: "2020",
      content: (
        <CardCarouselContent
          position={"left"}
          content={year2020}
        />
      ),
    },


    {
      title: "2021",
      content: (
        <CardCarouselContent
          position={"right"}
          content={year2021}
        />
      ),
    },


    {
      title: "2022",
      content: (
        <CardCarouselContent
          position={"left"}
          content={year2022}
        />
      ),
    },


    {
      title: "2023",
      content: (
        <CardCarouselContent
          position={"right"}
          content={year2023}
        />
      ),
    },


    {
      title: "2024",
      content: (
        <CardCarouselContent
          position={"left"}
          content={year2024}
        />
      ),
    },

  ]


  return (
    <>
      <main ref={rootRef.current} className="bg-primary z-20 lg:pb-[25%] md:pb-[35%] pb-[40%]">

        <div className="absolute top-0 left-0 right-0 -bottom-[1px] bg-gradient-to-t from-primary from-0% to-white-opacity-5 to-50% z-101"></div>

        <AboutHero className="" />

        <Timeline data={data} />

      </main>
    </>
  );
}

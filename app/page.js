//react
import React from "react";

//components
import { AboutHero } from "@/components/about-hero";
import { AboutSection } from "@/components/about-section";

//images
import aboutProgrammer from "@/public/images/about/about-programmer.png"

import aboutDeveloper from "@/public/images/about/about-developer.png"

import aboutDesigner from "@/public/images/about/about-designer.png"
import aboutPresident from "@/public/images/about/about-designer.png"



//icons
// import { FaCircleCheck } from "react-icons/fa6";


export default function Home() {
  return (
    <main className="bg-opacity-0 z-20">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-primary from-0% to-white-opacity-0 to-40% z-101"></div>

      <AboutHero className=""/>

      <div className="flex-col md:my-64 my-32 z-50">
        {/* programmer */}
        <AboutSection
          title={(<h1 className='text-h3 leading-[2.6rem] text-white100 pb-4 font-bold'>I’m an experienced programmer</h1>)}
          details={(
            <>
              <p className='text-base text-white75 leading-7'>
                C, C++, C#, Swift and Python. The 5 languages I am most familiar with. With over 6 years of experience with programming, these languages were the most useful for my interests.
              </p>
            </>
          )}
          image={aboutProgrammer}
          position={"right"}
        />
        {/* developer */}
        <AboutSection
          title={(<h1 className='text-h3 leading-[2.6rem] text-white100 pb-4 font-bold'>I love developing software</h1>)}
          details={(
            <>
              <p className='text-base text-white75 leading-7'>
              Over the years of my software development experience, I’ve spent my time on game dev, app dev,
              programmed a few automations to make my life easier. As such I turn to developing my own software
              solutions to problems I face.
              </p>
            </>
          )}
          image={aboutDeveloper}
          position={"left"}
        />
        {/* designer */}
        <AboutSection
          title={(<h1 className='text-h3 leading-[2.6rem] text-white100 pb-4 font-bold'>I can design</h1>)}
          details={(
            <>
              <p className='text-base text-white75 leading-7'>
              When you develop software you need someone to do the assets and UI/UX design.
              In my case its also me. Even though I won’t say im the best designer I
              can come up with simple minimalistic designs like this very website.
              </p>
            </>
          )}
          image={aboutDesigner}
          position={"right"}
        />
        {/* president */}
        <AboutSection
          title={(<h1 className='text-h3 leading-[2.6rem] text-white100 pb-4 font-bold'>I’m the president of my CCA</h1>)}
          details={(
            <>
              <p className='text-base text-white75 leading-7'>
              Being part of my Robotics Club’s excos since 2023 and volunteering to take
              up leadership roles, I have gained ample experience with leadership. As a leader,
              I value clear communication and always improve from constant feedback.
              </p>
            </>
          )}
          image={aboutPresident}
          position={"left"}
        />
      </div>

    </main>
  );
}

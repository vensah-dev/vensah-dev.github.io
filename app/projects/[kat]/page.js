import React from 'react';

//Next Stuff
import Image from 'next/image';

//Data
import { projects } from '../../../lib/projects';
import { FullCardCarousel } from '@/components/ui/full-card-carousel';


export const generateStaticParams = async () => {
   
    return projects.map((p) => ({
      kat: p.kat
    }))
};

export default function ProjectsDetailPage({ params }) {

    const project = projects.find((p) => p.kat === params.kat)

    return (
        <>

            {/* full poster */}
            <div>
                <div className='w-screen md:h-[136px] h-[104px]' style={{backgroundColor: project.navbarColor || "#070907"}}/>
                <div className='relative w-screen xl:h-[calc(100vh-136px)] -z-50 bg-primary' style={{aspectRatio: "1728 / 800", backgroundColor: project.navbarColor || "#070907"}}>
                
                    <Image
                        src={project.fullPoster}
                        fill
                        quality={100}
                        className='object-scale-down object-top'
                        alt={project.title + "-full-poster"}
                    />
                </div>
                <div className='md:hidden block w-screen md:h-[68px] h-[52px]' style={{backgroundColor: project.navbarColor || "#070907"}}/>
                {/* <div className='w-screen h-[15vw]' style={{ background: `linear-gradient(to bottom, ${project.navbarColor === null ? "#070907" : project.navbarColor}, ${"#070907"})` }}/> */}
            </div>

            {/* links */}
            <div className='flex-col items-center justify-center lg:py-12 py-6 bg-secondary'>
                <div className='flex justify-center lg:gap-16 gap-10'>
                    {

                        project.links && project.links.length > 0 ?(
                            project.links.map((link, index)=>(
                                <a href={link.url} key={index} className='block text-accent md:w-16 md:h-16 w-10 h-10'>{link.content}</a>
                            ))
                        ):null
                        
                    }
                </div>
            </div>

            {/* highlights */}
            <div className={`lg:mx-32 md:mx-16 mx-4 md:my-64 my-32 ${project.highlights && project.highlights.length > 0 ? '':'hidden'}`}>
                <h1 className='md:text-h1 text-h3 text-white100 font-bold pb-10'>Highlights</h1>

                {
                    project.highlights && project.highlights.length > 0 ? (
                        <FullCardCarousel
                            content={ project.highlights}
                        />
                    ):null
                } 

            </div>

        </>

    );
}
import React from 'react';

//Next Stuff
import Image from 'next/image';

//Data
import { projects } from '../../../lib/projects';
import { CardCarouselContent } from '@/components/ui/card-carousel-content';


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
                <div className='w-screen h-[136px]' style={{backgroundColor: project.navbarColor === null ? "#070907" : project.navbarColor}}/>
                <div className='relative w-screen -z-50' style={{aspectRatio: "1728 / 800"}}>
                
                    <Image
                        src={project.fullPoster}
                        fill
                        quality={100}
                        className='object-crop opacity-100'
                        alt='project-image'
                    />
                </div>
                <div className='w-screen h-[15vw]' style={{ background: `linear-gradient(to bottom, ${project.navbarColor === null ? "#070907" : project.navbarColor}, ${"#070907"})` }}/>
            </div>

            {/* highlights */}
            <div className={`mx-32 my-32 ${project.highlights && project.highlights.length > 0 ? '':'hidden'}`}>
                <h1 className='text-h1 text-white100 font-bold pb-10'>Highlights</h1>

                <div className="relative w-full border-white10 border-2 rounded-[1rem]">
                    <div className="text-white75 font-medium lg:flex flex-grow-0 bg-opacity-0 rounded-[1rem] align-text-top overflow-hidden">

                        {
                            project.highlights && project.highlights.length > 0 ? (
                                <CardCarouselContent
                                    position={"full"}
                                    content={ project.highlights}
                                />
                            ):null
                        }    

                    </div>
                </div>

            </div>
            
            {/* links */}
            <div>
                {
                    project.links && project.links.length > 0 ?(
                        project.links.map((link, index)=>(

                            <a href={link.url} key={index}>{link.name}</a>

                        ))
                    ):null
                }
            </div>

        </>

    );
}
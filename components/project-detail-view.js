'use client'
import React from 'react'

//icons

//Next stuff
import Image from 'next/image';

//components
import { FullCardCarousel } from '@/components/ui/full-card-carousel';
import useMediaQuery from '@/hooks/use-media-query'

export function ProjectsDetailView({project}){
    const xl = useMediaQuery('(min-width: 1280px)');
    const lg = useMediaQuery('(min-width: 1024px)');
    const lessThanMd = useMediaQuery('(max-width: 768px)');
    const sm = useMediaQuery('(min-width: 640px)');
    const xs = useMediaQuery('(min-width: 479px)');

    const projectHighlights = []

    for(let _ in project.highlights){
        projectHighlights.push({image: ""})
    }

    for (let i = 0; i < project.highlights.length; i++){
        const imageName = project.highlights[i].image;

        var imagePath = '';

        if(lessThanMd && project.mobileHighlights){
            imagePath = `/images/projects/${project.kat}/mobile-highlights/${imageName}`;
        }
        else{
            imagePath = `/images/projects/${project.kat}/highlights/${imageName}`;
        }

        projectHighlights[i].image = imagePath;
    }

    console.log(projectHighlights);



  return (
    <>
    {/* full poster */}
    <div className='md:px-0 px-4'>
        <div className='w-screen md:h-[136px] h-[104px]' style={{backgroundColor: project.navbarColor || "#070907"}}/>
        <div className='relative w-screen lg:h-[calc(100vh-136px)] -z-50 bg-primary md:aspect-[1728/800] aspect-[600/200]' style={{backgroundColor: project.navbarColor || "#070907"}}>
        
            <Image
                src={lessThanMd ? project.logo : project.fullPoster}
                fill
                // quality={100}
                className='object-scale-down object-top'
                alt={ lessThanMd ? project.title + "-logo" : project.title + "-full-poster"}
            />
        </div>
        <div className='md:hidden block w-screen md:h-[68px] h-[52px]' style={{backgroundColor: project.navbarColor || "#070907"}}/>
        {/* <div className='w-screen h-[15vw]' style={{ background: `linear-gradient(to bottom, ${project.navbarColor === null ? "#070907" : project.navbarColor}, ${"#070907"})` }}/> */}
    </div>

    {/* description */}
    <div className='flex lg:flex-row flex-col lg:justify-between items-center lg:gap-0 gap-10 lg:py-12 py-6 bg-secondary lg:px-32 md:px-16 px-4'>
        <h1 className='text-white75 lg:w-[50%] w-full text-h6'>{project.description}</h1>
        <div className='flex lg:justify-self-start justify-center lg:gap-16 gap-10'>
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
    <div className={`lg:mx-32 md:mx-16 mx-4 md:my-64 my-32 ${projectHighlights && projectHighlights.length > 0 ? '':'hidden'}`}>
        <h1 className='md:text-h1 text-h3 text-white100 font-bold pb-10'>Highlights</h1>

        {

            projectHighlights && projectHighlights.length > 0 ? (
                <FullCardCarousel
                    content={projectHighlights}
                />
            ):null
        } 

    </div>
    </>
  )
}

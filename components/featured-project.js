'use client'

//React
import React from 'react'
import { useState, useEffect } from 'react';

//Next Stuff
import Image from "next/image";

import { useRouter } from 'next/navigation'

//components
import { PrimaryButton } from '@/components/primary-button';
import Tags from '@/components/project-tag';


export default function FeaturedProject({ project }) {
    const router = useRouter()
    const [width, setWidth] = useState(0);

    useEffect(() => {

        if (typeof window !== 'undefined') {

            const handleResize = () => setWidth(window.innerWidth);

            window.addEventListener('resize', handleResize);

            handleResize(); // Initial set on mount

            return () => window.removeEventListener('resize', handleResize);

        }

    }, []);

    return (
        <div className='w-screen'>

            {/* featured project image */}
            <div className={` h-[136px] w-full xl:hidden`} style={{ backgroundColor: project.navbarColor }} />
            <div className={`xl:absolute relative top-0 w-screen lg:h-auto h-[35vh] -z-50 lg:aspect-[1728/832] aspect-auto`} style={{ aspectRatio: "" }}>
                <Image
                    src={project.banner + ".png"}
                    fill
                    quality={100}
                    className='object-cover hidden xl:block'
                    alt={project.title + "-banner"}
                />

                <Image
                    src={project.banner + "-mobile.png"}
                    fill
                    quality={100}
                    className='object-cover xl:hidden block'
                    alt={project.title + "-banner"}
                />
            </div>

            {/* <div className={` w-full bg-opacity-0 bg-gradient-to-t from-primary from-0% to-white-opacity-0 to-25% lg:aspect-[1728/832] absolute`}/>
            <div className={` w-full bg-opacity-0 bg-gradient-to-r from-primary from-0% to-white-opacity-0 to-85% lg:aspect-[1728/832] absolute`}/> */}

            {/* featured project description */}
            <div className={`xl:w-[25vw] w-full xl:bg-transparent bg-secondary top-1 flex ${width < 1490 ? "" : "xl:items-center"} md:px-16 px-4 xl:aspect-[432/832] aspect-auto xl:py-0 py-8`}>

                <div className={` flex-col ${width < 1490 && width > 1024 ? "pt-[136px]" : "pt-0"}`}>

                    <div className='lg:flex-col md:flex flex-col xl:gap-10 gap-4'>
                        <div className='lg:block relative lg:w-[30vw] md:w-[60vw] w-[80vw]' style={{ aspectRatio: "3 / 1" }}>
                            <Image
                                src={project.logo}
                                fill
                                quality={100}
                                className='object-contain'
                                alt={project.title + "-logo"}
                            />
                        </div>

                        <p className='xl:text-base relative lg:text-sm text-base text-white75 font-light w-full pb-4'>{project.description}</p>
                    </div>

                    <div className='flex overflow-scroll w-full no-scrollbar gap-3 relative'>
                        <Tags project={project} />
                    </div>

                    <PrimaryButton text={"View"} className='xl:pt-10 pt-10' handleClick={() => router.push(`/projects/${project.key}`)} />
                </div>

            </div>

        </div>
    )
}
'use client'

//React
import React from 'react'

//Next Stuff
import Image from "next/image";

import { useRouter } from 'next/navigation'

//components
import { PrimaryButton } from '@/components/primary-button';


export default function FeaturedProject({ project }) {
    const router = useRouter()

    return (
        <div className=' w-screen'>

            {/* featured project image */}
            <div className={` h-[136px] w-full lg:hidden`} style={{ backgroundColor: project.navbarColor }} />
            <div className={`lg:absolute relative top-0 w-screen lg:h-auto h-[35vh] -z-50 lg:aspect-[1728/731] aspect-auto`} style={{ aspectRatio: "" }}>
                <Image
                    src={project.banner + ".png"}
                    fill
                    quality={100}
                    className='object-cover hidden lg:block'
                    alt={project.title + "-banner"}
                />

                <Image
                    src={project.banner + "-mobile.png"}
                    fill
                    quality={100}
                    className='object-cover lg:hidden block'
                    alt={project.title + "-banner"}
                />
            </div>

            {/* featured project description */}
            <div className='lg:w-[50vw] w-full lg:bg-primary lg:bg-opacity-50 bg-secondary backdrop-blur-[999px] top-0 flex xl:items-center md:px-16 px-4 xl:pt-0 lg:pt-[136px] lg:aspect-[864/731] aspect-auto lg:pb-0 py-8'>

                <div className='flex-col'>

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
                        <p className='xl:text-base lg:text-sm text-base text-white75 font-light w-full pb-4'>{project.description}</p>

                    </div>

                    <div className='flex overflow-scroll w-full no-scrollbar gap-2'>
                        {
                            project.tags.map((tag, index) => (
                                <div key={index} className={`px-4 py-1 rounded-full bg-opacity-50`} style={{ backgroundColor: tag.color }}>
                                    <p className='whitespace-nowrap'>{tag.title}</p>
                                </div>
                            ))
                        }
                    </div>

                    <PrimaryButton text={"View"} className='xl:pt-10 pt-6' handleClick={() => router.push(`/projects/${project.kat}`)} />
                </div>

            </div>

        </div>
    )
}
'use client'

//React
import React from 'react'

//images

//icons

//Next Stuff
import Image from "next/image";
import Link from "next/link";

import { useRouter } from 'next/navigation'

//components
import { SecondaryButton } from '@/components/secondary-button'

import FeaturedProject from '@/components/featured-project';
import ProjectThumbnail from '@/components/project-thumbnail';

//Data
import { projects } from '../../lib/projects';

export default function Projects(){
    const router = useRouter()

    const landingPageProjects = projects.slice(1, 4);

    return(
        <>
            <FeaturedProject project={projects[0]}/>

            <div className='flex-col my-16 md:mx-16 mx-4'>
                <p className='text-h3 text-white100 font-medium mb-4'>Projects</p>
                <div className='flex lg:flex-row flex-col md:justify-between gap-8'>
                    {
                        landingPageProjects.map((project, index) => (
                            <div key={index} className='lg:w-[(100vw-128)/3] w-full'>
                                <ProjectThumbnail project={project}/>
                            </div>
                        ))
                    }
                </div>
            </div>

            <SecondaryButton text={"View All"} className='flex w-full items-center justify-center pt-8 pb-32' handleClick={() => router.push('/projects/all')}/>

        </>
    )
}
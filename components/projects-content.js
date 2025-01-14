'use client'

//React
import React from 'react'

//images

//icons

//Next Stuff

import { useRouter } from 'next/navigation'

//components
import { SecondaryButton } from '@/components/secondary-button'

import FeaturedProject from '@/components/featured-project';
import ProjectThumbnail from '@/components/project-thumbnail';

//Data
import { projects } from '../lib/projects';

// export const metadata = {
//     title: "Projects | Venkatesh",
//     description: "Portfolio Website",
//     content: "VensahDev or Venkatesh's portfolio website. Search Terms: Vensah Dev Vensah-Dev Venkatesh Devendran Attentia Smart Sheet Plantanator 8000"
// };

export default function ProjectsContent() {
    const router = useRouter()

    const landingPageProjects = projects.slice(1, 5);

    return (
        <>
            <FeaturedProject project={projects[0]} />

            <div className='flex-col my-16 md:mx-16 mx-4'>
                <p className='text-h3 text-white100 font-medium md:mb-8 mb-4'>Projects</p>

                <div className='grid lg:grid-cols-4 grid-cols-1 gap-8'>
                    {
                        landingPageProjects.map((project, index) => (
                            <ProjectThumbnail key={index} project={project} />
                        ))
                    }
                </div>
                {/* <div className='flex lg:flex-row flex-col md:justify-between gap-8'>
                    {
                        landingPageProjects.map((project, index) => (
                            <div key={index} className='lg:w-[(100vw-128)/3] w-full'>
                                <ProjectThumbnail project={project}/>
                            </div>
                        ))
                    }
                </div> */}
            </div>

            <SecondaryButton text={"View All"} className='flex w-full items-center justify-center pt-8 pb-32' handleClick={() => router.push('/projects/all')} />

        </>
    )
}
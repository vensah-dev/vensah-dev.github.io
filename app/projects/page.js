'use client'

//React
import React from 'react'

//images
// import ScratchLogo from "@/public/images/about/scratch-logo.png"
import FeaturedProjectBanner from "@/public/images/projects/attentia/banner.png"
import FeaturedProjectLogo from "@/public/images/projects/attentia/logo.png"

import ecopedia from "/public/images/projects/ecopedia/thumbnail.png"



//icons

//Next Stuff
import Image from "next/image";
import Link from "next/link";

import { useRouter } from 'next/navigation'

//components
import { PrimaryButton } from '@/components/primary-button';
import FeaturedProject from '@/components/featured-project';
import ProjectThumbnail from '@/components/project-thumbnail';

export default function Projects(){
    const router = useRouter()
    
    const projects = [
        {
            title: "Ecopedia",
            tags: [
                {
                    title: "Competition",
                    color: "rgba(197, 204, 102, 0.5)",
                },
            ],
            path: "/projects/ecopedia",
            image: "/images/projects/ecopedia/thumbnail.png",
        },

        {
            title: "Plantanator",
            tags: [
                {
                    title: "Competition",
                    color: "rgba(197, 204, 102, 0.5)",
                },
            ],
            path: "/projects/plantanator",
            image: "/images/projects/plantanator/thumbnail.png",

        },

        {
            title: "Smart Sheet",
            tags: [
                {
                    title: "SAP",
                    color: "rgba(103, 152, 119, 0.5)",
                },

                {
                    title: "Passion Project",
                    color: "rgba(216, 178, 255, 0.5)",
                },
            ],
            path: "/projects/smart-sheet",
            image: "/images/projects/smart-sheet/thumbnail.png",

        },
    ]

    return(
        <>
            <FeaturedProject featuredProjectBanner={FeaturedProjectBanner} featuredProjectLogo={FeaturedProjectLogo}/>

            <div className='flex-col m-16'>
                <p className='text-h3 text-white100 font-medium mb-4'>Projects</p>
                <div className='flex justify-between'>
                    {
                        projects.map((project, index) => (
                            <ProjectThumbnail path={project.path} title={project.title} image={project.image} tags={project.tags} index={index}/>
                        ))
                    }
                </div>
            </div>

        </>
    )
}
//React
import React from 'react'

//images
// import ScratchLogo from "@/public/images/about/scratch-logo.png"

//Next Stuff
import Image from "next/image";
import Link from "next/link";
import Tags from '@/components/project-tag';



export default function ProjectThumbnail({ project }) {
    return (
            <div className='flex-col bg-secondary rounded-[1rem] overflow-clip p-2 group-active:brightness-125  transition-all duration-350'>
                <Link href={`/projects/${project.kat}`} className='group w-full lg:hover:opacity-70 active:opacity-100' onClick={() => { console.log(image) }}>
                    <div className='opacity-80 relative w-[(100vw-128px)/3] rounded-[0.5rem] overflow-clip  group-active:opacity-70 lg:group-active:brightness-75 transition-all duration-350' style={{ aspectRatio: "540 / 300" }}>
                        <Image
                            src={project.image}
                            fill
                            className='object-cover'
                            alt={String(project.title) + ' Thumbnail'}
                        />
                    </div>

                    <p className='whitespace-nowrap	pt-4 pl-2 text-h6 text-white100 font-normal text-ellipsis overflow-hidden'>{project.title}</p>

                    {
                        project.tags.length > 0 ? null:
                        (
                            <p className='px-2 pt-1 h-[48px] text-white50 font-normal pb-4 overflow-hidden line-clamp-2'>{project.description}</p>
                        )
                    }

                </Link>

                {
                    project.tags.length > 0 ? (
                        <div className='flex-col w-full pl-2 py-4 group-active:opacity-100'>
                            <div className='flex overflow-scroll w-[100%] no-scrollbar gap-3'>

                                        <Tags project={project} />

                            </div>
                        </div>
                    ) 
                    : null
                }

            </div>
    )
}

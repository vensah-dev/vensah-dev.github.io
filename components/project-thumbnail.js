
//React
import React from 'react'

//images
// import ScratchLogo from "@/public/images/about/scratch-logo.png"

//Next Stuff
import Image from "next/image";
import Link from "next/link";

import { useRouter } from 'next/navigation'


export default function ProjectThumbnail({project}){
    const router = useRouter()

    return(
        <Link href={`/projects/${project.kat}`} className='group w-full lg:hover:opacity-70 active:opacity-100' onClick={()=>{console.log(image)}}>
            <div className='flex-col bg-secondary rounded-[1rem] overflow-clip p-2 group-active:brightness-125  transition-all duration-350'>
                <div className='opacity-80 relative w-[(100vw-128px)/3] rounded-[0.5rem] overflow-clip  group-active:opacity-70 lg:group-active:brightness-75 transition-all duration-350' style={{aspectRatio: "540 / 300"}}>
                    <Image
                        src={project.image}
                        fill
                        className='object-cover'
                        alt={String(project.title) + ' Thumbnail'}
                    />
                </div>

                <div className='flex-col w-full px-2 py-4 group-active:opacity-100'>

                    <p className='text-h6 text-white100 font-normal pb-4'>{project.title}</p>

                    <div className='flex overflow-scroll w-[100%] no-scrollbar gap-2'>
                        {
                            project.tags.map((tag, index)=>(
                                <div key={index} className={`px-3 py-1 rounded-full bg-opacity-50`} style={{backgroundColor: tag.color}}>
                                    <p className='whitespace-nowrap'>{tag.title}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </Link>
    )
}
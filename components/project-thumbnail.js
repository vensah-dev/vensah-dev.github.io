
//React
import React from 'react'

//images
// import ScratchLogo from "@/public/images/about/scratch-logo.png"

//Next Stuff
import Image from "next/image";
import Link from "next/link";

import { useRouter } from 'next/navigation'


export default function ProjectThumbnail({path, image, title, tags}){
    const router = useRouter()

    return(
        <Link href={path} className='group lg:w-[30%] w-full' onClick={()=>{console.log(image)}}>
            <div className='flex-col bg-secondary rounded-[1rem] overflow-clip p-2 group-active:brightness-125  transition-all duration-350'>
                <div className='opacity-90 relative w-[(100vw-128px)/3] rounded-[0.5rem] overflow-clip lg:group-hover:opacity-70 group-active:opacity-70 lg:group-active:brightness-75 transition-all duration-350' style={{aspectRatio: "540 / 300"}}>
                    <Image
                        src={image}
                        fill
                        className='object-cover'
                        alt='featured project logo'
                    />
                </div>

                <div className='flex-col w-full px-2 py-4'>

                    <p className='text-h6 lg:group-hover:text-white75 text-white100 font-normal pb-4'>{title}</p>

                    <div className='gap-4 flex overflow-x-scroll'>
                        {tags.map((tag, index) => (
                            <p
                                key={index}
                                className='whitespace-nowrap bg-transparent bg-opacity-50 rounded-full text-base lg:group-hover:brightness-75 text-white75 font-light px-2 py-1'
                                style={{ backgroundColor: tag.color }}
                            >
                                {tag.title}
                            </p>
                        
                        ))}
                    </div>

                </div>

            </div>
        </Link>
    )
}
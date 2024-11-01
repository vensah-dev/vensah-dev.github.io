
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
        <Link href={path} className='group w-[30%]' onClick={()=>{console.log(image)}}>
            <div className='flex-col bg-secondary rounded-[1rem] overflow-clip p-2 group-active:brightness-125 transition-all duration-350'>
                <div className='opacity-90 relative w-[(100vw-128px)/3] rounded-[0.5rem] overflow-clip group-hover:opacity-70 group-active:brightness-75 transition-all duration-350' style={{aspectRatio: "540 / 300"}}>
                    <Image
                        src={image}
                        fill
                        className='object-cover'
                        alt='featured project logo'
                    />
                </div>

                <div className='flex-col px-2 py-4'>
                    <p className='text-h6 text-white75 font-normal pb-4'>{title}</p>

                    <div className='flex gap-4'>
                        {
                            tags.map((tag, index) => (
                                <p key={index} className='bg-transparent bg-opacity-50 rounded-full inline-flex text-base text-white75 font-light px-4' style={{backgroundColor: tag.color}}>{tag.title}</p>
                            ))
                        }
                    </div>

                </div>

            </div>
        </Link>
    )
}
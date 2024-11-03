'use client'

//React
import React from 'react'

//images
// import ScratchLogo from "@/public/images/about/scratch-logo.png"
// import FeaturedProjectBanner from "@/public/images/projects/attentia/banner.png"
// import FeaturedProjectLogo from "@/public/images/projects/attentia/logo.png"


//icons

//Next Stuff
import Image from "next/image";

import { useRouter } from 'next/navigation'

//components
import { PrimaryButton } from '@/components/primary-button';


export default function FeaturedProject({banner, logo, description}){
    const router = useRouter()

    return(
            <div className=' w-screen' style={{aspectRatio: "1728 / 731"}}>

                {/* featured project image */}
                <div className='absolute top-0 w-screen -z-50' style={{aspectRatio: "1728 / 731"}}>
                    <Image
                        src={banner}
                        fill
                        quality={100}
                        className='object-contain'
                        alt='featured project banner'
                    />
                </div>

                {/* featured project description */}
                <div className='w-[50vw] bg-primary bg-opacity-50 absolute top-0 flex items-center p-16' style={{aspectRatio: "864 / 731"}}>

                    <div className='flex-col'>
                        <div className='relative w-[30vw] mb-10' style={{aspectRatio: "3 / 1"}}>
                            <Image
                                src={logo}
                                fill
                                quality={100}
                                className='object-contain'
                                alt='featured project logo'
                            />
                        </div>
                        <p className='text-base text-white75 font-light w-4/5'>{description}</p>
                        <PrimaryButton text={"View"} className='pt-10' handleClick={() => router.push('/projects/attentia')}/>
                    </div>

                </div>

            </div>
    )
}
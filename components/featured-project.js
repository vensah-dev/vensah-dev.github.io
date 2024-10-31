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


export default function FeaturedProject({featuredProjectBanner, featuredProjectLogo}){
    const router = useRouter()

    return(
            <div className=' w-screen' style={{aspectRatio: "1728 / 731"}}>

                {/* featured project image */}
                <div className='absolute top-0 w-screen -z-50' style={{aspectRatio: "1728 / 731"}}>
                    <Image
                        src={featuredProjectBanner}
                        fill
                        className='object-contain'
                        alt='featured project banner'
                    />
                </div>

                {/* featured project description */}
                <div className='w-[50vw] bg-primary bg-opacity-50 absolute top-0 flex items-center p-16' style={{aspectRatio: "864 / 731"}}>

                    <div className='flex-col'>
                        <div className='relative w-[30vw] mb-10' style={{aspectRatio: "3 / 1"}}>
                            <Image
                                src={featuredProjectLogo}
                                fill
                                className='object-contain'
                                alt='featured project logo'
                            />
                        </div>
                        <p className='text-base text-white75 font-light w-4/5'>
                            Attentia is a mobile app designed to improve the attention span of teenagers.
                            It gamifies the habit of doing recommended mind and physical exercises.
                            Users earn credits by completing these exercises, which can be used to unlock
                            rewards like leaderboards and profile pictures.
                        </p>
                        <PrimaryButton text={"View"} className='pt-10' handleClick={() => router.push('/projects/attentia')}/>
                    </div>

                </div>

            </div>
    )
}
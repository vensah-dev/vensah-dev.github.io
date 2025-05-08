
//React
import React from 'react'

//images

//icons

//Next Stuff
import Image from "next/image";
import Link from "next/link";


//components
import { SecondaryButton } from '@/components/secondary-button'

import FeaturedProject from '@/components/featured-project';
import ProjectThumbnail from '@/components/project-thumbnail';

//Data
import { projects } from '../../lib/projects';
import ProjectsContent from '@/components/projects-content';

export const metadata = {
    title: "Achievements"
};

export default function timetable() {


    return (
        <>
            <div className='relative flex-col pt-[136px]'>
                <div className='relative w-screen -z-50 bg-primary aspect-[2646/2040] mb-4'>
                    <Image
                        src={"/images/timetable/even.png"}
                        fill
                        // quality={100}
                        className='object-cover'
                        alt={"bg"}
                    />
                </div>

                <div className='relative w-screen -z-50 bg-primary aspect-[2646/2040]'>
                    <Image
                        src={"/images/timetable/odd.png"}
                        fill
                        // quality={100}
                        className='object-cover'
                        alt={"bg"}
                    />
                </div>

            </div>
        </>
    )
}
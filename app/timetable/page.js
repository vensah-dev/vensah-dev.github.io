
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
    title: "Timetable"
};

export default function timetable() {


    return (
        <>
            <div className='flex-col items-center justify-center pt-[200px] p-32'>
                <div className='relative h-[90vh] bg-primary mb-8'>
                    <Image
                        src={"/images/timetable/even.png"}
                        fill
                        // quality={100}
                        className='object-contain self-center'
                        alt={"even"}
                    />
                </div>
                <div className='relative h-[90vh] bg-primary'>
                    <Image
                        src={"/images/timetable/odd.png"}
                        fill
                        // quality={100}
                        className='object-contain'
                        alt={"odd"}
                    />
                </div>
            </div>
        </>
    )
}
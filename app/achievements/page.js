
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

export default function Achievements() {


    return (
        <>
            <div>
                <div className='relative w-screen -z-50 bg-primary aspect-[1728/736]'>
                    <Image
                        src={"/images/achievements/background.png"}
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
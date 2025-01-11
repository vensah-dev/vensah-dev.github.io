
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
    title: "Projects",
    description: "Check out all the projects I was involved in over the years!",

    openGraph: {
        title: "Projects | Venkatesh",
        site_name: "Projects | Venkatesh",
        description: "Check out all the projects I was involved in over the years!",
        url: "https://vensah-dev.github.io/projects",
        type: "website",
        logo: 'https://vensah-dev.github.io/icons/open-graph-image.png',
        images: [
            {
                width: 600,
                height: 600,
                url: 'https://vensah-dev.github.io/icons/open-graph-image.png',
            }
        ]
    },
};

export default function Projects() {


    return (
        <>
            <ProjectsContent />
        </>
    )
}
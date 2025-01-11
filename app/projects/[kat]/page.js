import React from 'react';

//Next Stuff

//Data
import { projects } from '../../../lib/projects';
import { AllProjects } from '@/components/all-projects';
import { ProjectsDetailView } from '@/components/project-detail-view';

export const generateStaticParams = async () => {

    const paths = [
        { kat: "all" },
        ...projects
    ]

    return paths.map((p) => ({
        kat: p.kat
    }))
};

export async function generateMetadata({ params }) {
    const project = projects.find((p) => p.kat === params.kat)

    return {
        title: `${project ? `${project.title} | Projects ` : "All Projects | Projects"}`,
        icons: {
            icon: `${project ? project.icon : "/icons/favicon.ico"}`,
        },
        openGraph: {
            title: project ? project.title : "All Projects",
            description: project ? project.title : "",
            images: [
                project ?
                    {
                        width: 1080,
                        height: 600,
                        url: 'https://vensah-dev.github.io' + project.image,
                    }
                    :
                    {
                        width: 1900,
                        height: 1900,
                        url: `https://vensah-dev.github.io/icons/open-graph-image.png`,
                    }
            ]
        },
    };
}


export default function ProjectsDetailPage({ params }) {

    const project = projects.find((p) => p.kat === params.kat)

    return (
        <>
            {
                params.kat === "all" ? (
                    <div className='py-[136px]'>
                        <AllProjects />
                    </div>
                ) : (
                    <ProjectsDetailView project={project} />
                )
            }
        </>
    );
}
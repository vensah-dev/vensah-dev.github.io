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
                        type: project.image,
                        width: 540,
                        height: 300,
                        url: `/opengraph/${project.kat}`
                    }
                    :
                    {
                        type: "/icons/favicon.ico",
                        width: 500,
                        height: 500,
                        url: `/opengraph/projects/all`
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
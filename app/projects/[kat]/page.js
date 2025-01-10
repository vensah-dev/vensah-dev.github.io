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
        // openGraph: {
        //     images: ['/some-specific-page-image.jpg', ...previousImages],
        // },
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
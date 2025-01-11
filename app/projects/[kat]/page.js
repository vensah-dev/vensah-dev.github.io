import React from 'react';

//Next Stuff

//Data
import { projects } from '../../../lib/projects';
import { AllProjects } from '@/components/all-projects';
import { ProjectsDetailView } from '@/components/project-detail-view';
import Head from 'next/head';

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
        title: `${project ? `${project.title} | Projects ` : "All Projects"}`,
        icons: {
            icon: `${project ? project.icon : "/icons/favicon.ico"}`,
        },
        openGraph: {
            title: project ? `${project.title} | Projects | Venkatesh` : "All Projects | Venkatesh",
            description: project ? project.description.replace("\n", "") : "Check out all the projects I was involved in over the years.",
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
            {/* {
                project ? (
                    <>
                        <meta property="og:url" content="https://vensah-dev.github.io/" />
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content={`${project.title} | Projects | Venkatesh`} />
                        <meta property="og:description" content={project.description.replace("\n", "")} />
                        <meta property="og:image" content={'https://vensah-dev.github.io' + project.image} />

                        <meta name="twitter:card" content="summary_large_image" />
                        <meta property="twitter:domain" content="vensah-dev.github.io" />
                        <meta property="twitter:url" content="https://vensah-dev.github.io/" />
                        <meta name="twitter:title" content={`${project.title} | Projects | Venkatesh`} />
                        <meta name="twitter:description" content={project.description.replace("\n", "")} />
                        <meta name="twitter:image" content={'https://vensah-dev.github.io' + project.image} />
                    </>

                ) : (
                    <>
                        <meta property="og:url" content="https://vensah-dev.github.io/" />
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content="All Projects | Projects | Venkatesh" />
                        <meta property="og:description" content="Check out all the projects I was involved in over the years." />
                        <meta property="og:image" content="https://vensah-dev.github.io/icons/open-graph-image.png" />

                        <meta name="twitter:card" content="summary_large_image" />
                        <meta property="twitter:domain" content="vensah-dev.github.io" />
                        <meta property="twitter:url" content="https://vensah-dev.github.io/" />
                        <meta name="twitter:title" content="All Projects | Projects | Venkatesh" />
                        <meta name="twitter:description" content="Check out all the projects I was involved in over the years." />
                        <meta name="twitter:image" content="https://vensah-dev.github.io/icons/open-graph-image.png" />
                    </>

                )
            } */}
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
import React from 'react';

//Next Stuff

//Data
import { projects } from '../../../lib/projects';
import { AllProjects } from '@/components/all-projects';
import { ProjectsDetailView } from '@/components/project-detail-view';

var paths = [
    {kat: "all"}
]

for(items in projects){
    paths.push({kat: projects.kat});
}

export const generateStaticParams = async () => {
   
    return paths.map((p) => ({
      kat: p.kat
    }))
};

export default function ProjectsDetailPage({ params }) {

    const project = projects.find((p) => p.kat === params.kat)

    return (
        <>
            {
                params.kat === "all" ? (
                    <div className='py-[136px]'>
                        <AllProjects/>
                    </div>
                ):(
                    <ProjectsDetailView project={project}/>
                )
            }
        </>
    );
}
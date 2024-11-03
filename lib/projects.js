import React from "react";
//icons
import { FaGithub } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";


export const projects = [
    {
        kat: "attentia",

        //project details
        title: "Attentia",
        description: `Attentia is a mobile app designed to improve the attention span of teenagers. 
        It gamifies the habit of doing recommended mind and physical exercises. Users earn credits 
        by completing these exercises, which can be used to unlock rewards like leaderboards and profile pictures.`,

        //images
        image: "/images/projects/attentia/thumbnail.png",
        fullPoster: "/images/projects/attentia/full-poster.png",

        //featured project stuff
        banner: "/images/projects/attentia/banner.png",
        logo: "/images/projects/attentia/logo.png",

        //links
        links:[
            {
                content: (<FaGithub className='w-full h-full hover:fill-white100 fill-white75'/>),
                url: "https://github.com/vensah-dev/Attentia"
            },
            {
                content: (<FaGoogleDrive className='w-full h-full hover:fill-white100 fill-white75'/>),
                url: "https://drive.google.com/drive/folders/1Sw0fHmQvL5IwcL2C3t6ADPxyLB5hQ4Lo?usp=drive_link"
            },
        ],


        highlights: [
            {
                text: `
                <p style="font-weight: bold; font-size: 2.441rem; color: hsla(240, 2%, 88%, 0.9); padding: 24px 0; ">Home Page</p>

                The homepage of Attentia provides a quick overview of daily exercises, 
                tasks, leaderboard rankings, and progress in improving attention span.`,

                image: "/images/projects/attentia/highlights/highlight-1.png"
            },
            {
                text: `
                <p style="font-weight: bold; font-size: 2.441rem; color: hsla(240, 2%, 88%, 0.9); padding: 24px 0; ">Exercises Page</p>

                The exercise page on Attentia lists various mind and physical exercises 
                categorized as mindfulness, calm, and focus. Daily, users complete`,

                image: "/images/projects/attentia/highlights/highlight-2.png"
            },
            {
                text: `
                <p style="font-weight: bold; font-size: 2.441rem; color: hsla(240, 2%, 88%, 0.9); padding: 24px 0; ">Leaderboards Page</p>

                The leaderboards page allows users to view their ranking and compare it with friends, 
                fostering friendly competition and encouraging regular exercise completion.`,

                image: "/images/projects/attentia/highlights/highlight-3.png"
            },
            {
                text: `
                <p style="font-weight: bold; font-size: 2.441rem; color: hsla(240, 2%, 88%, 0.9); padding: 24px 0; ">Market Page</p>

                The market page allows users to spend credits on profile picture packs 
                with varying rarities. This gamified feature encourages regular exercise 
                completion and app usage, similar to unlocking skins in games, providing 
                a sense of achievement that can be shared.`,

                image: "/images/projects/attentia/highlights/highlight-4.png"
            },

        ],

        tags: [
            {
                title: "Competition",
                color: "rgba(197, 204, 102, 0.5)",
            },
        ],

        navbarColor: "#131118"
    },


    {
        kat: "smart-sheet",

        //project details
        title: "Smart Sheet",
        description: `Ever experienced trouble tabulating all your worksheets before your major exams? 
        Ever forgot or mixed up various studying events due to your busy schedule? Ever found it troublesome 
        to actually allocate time to study without the help of a study timer? Well, fret not, Smart Sheet is here to help! 
        With the provision of various useful functions related to studying, you’ll be more prepared and organised when studying and revising.`,

        //images
        image: "/images/projects/smart-sheet/thumbnail.png",
        fullPoster: "/images/projects/smart-sheet/full-poster.png",

        //featured project stuff
        banner: "/images/projects/smart-sheet/banner.png",
        logo: "/images/projects/smart-sheet/logo.png",

        links:[
            {
                content: "App Store",
                url: "https://apps.apple.com/us/app/smart-sheet-easy-revision/id6473449023"
            },
            {
                content: "Git Hub",
                url: "https://github.com/vensah-dev/SmartSheet"
            },
            {
                content: "Google Drive",
                url: "https://drive.google.com/"
            },
        ],

        tags: [
            {
                title: "SAP",
                color: "rgba(103, 152, 119, 0.5)",
            },

            {
                title: "Passion Project",
                color: "rgba(216, 178, 255, 0.5)",
            },
        ],

    },


    {
        kat: "ecopedia",

        //project details
        title: "Ecopedia",
        description: `Attentia is a mobile app designed to improve the attention span of teenagers. 
        It gamifies the habit of doing recommended mind and physical exercises. Users earn credits 
        by completing these exercises, which can be used to unlock rewards like leaderboards and profile pictures.`,

        //images
        image: "/images/projects/ecopedia/thumbnail.png",
        fullPoster: "/images/projects/ecopedia/full-poster.png",

        links:[
            {
                content: "Git Hub",
                url: "https://github.com/vensah-dev/Ecopedia"
            },
            {
                content: "Google Drive",
                url: "https://drive.google.com/drive/folders/1XzyB0Of1WXffT1gbzBHOeLbRRCKBXcgR?usp=drive_link"
            },
        ],
        
        tags: [
            {
                title: "Competition",
                color: "rgba(197, 204, 102, 0.5)",
            },
        ],
    },


    {
        kat: "plantanator",

        //project details
        title: "Plantanator",
        description: `The Plantanator is a smart gardening device that automates plant care and provides real-time insights. 
        It features automated watering, plant height tracking, customizable lighting, and a mobile app for remote monitoring 
        and control. This intuitive device caters to both casual and advanced users, making it an ideal solution for anyone 
        looking to grow healthy plants effortlessly.`,

        //images
        image: "/images/projects/plantanator/thumbnail.png",
        fullPoster: "/images/projects/plantanator/full-poster.png",

        links:[
            {
                content: "Git Hub",
                url: "https://github.com/vensah-dev/Plantanator-8000"
            },
            {
                content: "Google Drive",
                url: "https://drive.google.com/drive/folders/1Y9ALl_6wwCGLfnaxeP52ZN7ia-_OMKXX?usp=drive_link"
            },
        ],

        tags: [
            {
                title: "Competition",
                color: "rgba(197, 204, 102, 0.5)",
            },
        ],

    },

];

//get data function
export async function getProjectData(kat) {
    return projects.find((p) => p.kat === kat)
}

//tbh IDK
//What i meant to say is that the i thought u had to use getStaticPaths() and getStaticProps() until i foudn out generateStaticParams() is a thing so yea
export async function getProjectIdList() {
    IdList = []
    for(let x in projects){
        IdList.append(x.kat)
    }
    return IdList
}
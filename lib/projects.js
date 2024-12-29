import React from "react";

//icons
import { FaGithub } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";

export const projects = [

    {
        kat: "attentia",
        year: "2024",

        //project details
        title: "Attentia",
        description: `Attentia is a mobile app designed to improve the attention span of teenagers. 
        It gamifies the habit of doing recommended mind and physical exercises. Users earn credits 
        by completing these exercises, which can be used to unlock rewards like leaderboards and profile pictures.
        Attentia was made for IvP 2024 using React Native and shared using Expo.`,
        showDescription: false,

        //images
        image: "/images/projects/attentia/thumbnail.png",
        fullPoster: "/images/projects/attentia/full-poster.png",

        //featured project stuff
        banner: "/images/projects/attentia/banner",
        logo: "/images/projects/attentia/logo.png",

        //links
        links: [
            {
                content: (<FaGithub className='w-full h-full hover:fill-white100 fill-white75' />),
                url: "https://github.com/vensah-dev/Attentia"
            },
            {
                content: (<FaGoogleDrive className='w-full h-full hover:fill-white100 fill-white75' />),
                url: "https://drive.google.com/drive/folders/1Sw0fHmQvL5IwcL2C3t6ADPxyLB5hQ4Lo?usp=drive_link"
            },
        ],


        highlights: [
            {
                image: "highlight-1.png"
            },
            {
                image: "highlight-2.png"
            },
            {
                image: "highlight-3.png"
            },
            {
                image: "highlight-4.png"
            },

        ],
        mobileHighlights: true,

        tags: [
            {
                title: "Competition",
                color: "rgba(143, 255, 195, 0.3)",
            },
        ],

        navbarColor: "#131118",

    },


    {
        kat: "smart-sheet",
        year: "2023",

        //project details
        title: "Smart Sheet",
        description: `Ever experienced trouble tabulating all your worksheets before your major exams? 
        Ever forgot or mixed up various studying events due to your busy schedule? Ever found it troublesome 
        to actually allocate time to study without the help of a study timer? Well, fret not, Smart Sheet is here to help! 
        With the provision of various useful functions related to studying, you’ll be more prepared and organised when studying and revising. 
        Smart Sheet was made by me and my teamates for the our Swift Accelerator final year project.`,
        showDescription: true,

        //images
        image: "/images/projects/smart-sheet/thumbnail.png",
        fullPoster: "/images/projects/smart-sheet/full-poster.png",

        //featured project stuff
        banner: "/images/projects/smart-sheet/banner",
        logo: "/images/projects/smart-sheet/logo.png",

        links: [
            {
                content: (<FaAppStoreIos className='w-full h-full hover:fill-white100 fill-white75' />),
                url: "https://apps.apple.com/us/app/smart-sheet-easy-revision/id6473449023"
            },
            {
                content: (<FaGithub className='w-full h-full hover:fill-white100 fill-white75' />),
                url: "https://github.com/vensah-dev/SmartSheet"
            },
            {
                content: (<FaGoogleDrive className='w-full h-full hover:fill-white100 fill-white75' />),
                url: "https://drive.google.com/"
            },
        ],

        highlights: [
            {
                image: "highlight-1.png"
            },
            {
                image: "highlight-2.png"
            },
            {
                image: "highlight-3.png"
            },
            {
                image: "highlight-4.png"
            },
        ],
        mobileHighlights: false,

        tags: [
            {
                title: "SAP",
                color: "rgba(250, 150, 50, 0.3)",
            },

            {
                title: "Passion Project",
                color: "rgba(216, 178, 255, 0.3)",
            },
        ],

        navbarColor: "#070907"

    },


    {
        kat: "ecopedia",
        year: "2023",

        //project details
        title: "Ecopedia",
        description: `The ultimate app that revolutionises your sustainable living experience! 
        Scan products for sustainable alternatives and instructions on recycling it after use if applicable. 
        Calculate your carbon footprint and get personalised suggestions to reduce it. 
        Set goals and track progress toward reducing your carbon footprint. Using a personalised and rewarding gamified experience, 
        Ecopedia assists you in turning green! Ecopedia was made for IvP 2023 using Swift.`,
        showDescription: true,

        //images
        image: "/images/projects/ecopedia/thumbnail.png",
        fullPoster: "/images/projects/ecopedia/full-poster.png",

        //featured project stuff
        banner: "/images/projects/ecopedia/banner",
        logo: "/images/projects/ecopedia/logo.png",

        links: [
            {
                content: (<FaGithub className='w-full h-full hover:fill-white100 fill-white75' />),

                url: "https://github.com/vensah-dev/Ecopedia"
            },
            {
                content: (<FaGoogleDrive className='w-full h-full hover:fill-white100 fill-white75' />),
                url: "https://drive.google.com/drive/folders/1XzyB0Of1WXffT1gbzBHOeLbRRCKBXcgR?usp=drive_link"
            },
        ],

        highlights: [
            {
                image: "highlight-1.png"
            },
        ],
        mobileHighlights: false,

        tags: [
            {
                title: "Competition",
                color: "rgba(143, 255, 195, 0.3)",
            },
        ],

        navbarColor: "#070907"
    },


    {
        kat: "plantanator",
        year: "2023",

        //project details
        title: "Plantanator",
        description: `The Plantanator is a smart gardening device that automates plant care and provides real-time insights. 
        It features automated watering, plant height tracking, customizable lighting, and a mobile app for remote monitoring 
        and control. This intuitive device caters to both casual and advanced users, making it an ideal solution for anyone 
        looking to grow healthy plants effortlessly. The Plantanator 8000 was made for NRC 2023.`,
        showDescription: false,

        //images
        image: "/images/projects/plantanator/thumbnail.png",
        fullPoster: "/images/projects/plantanator/full-poster.png",

        //featured project stuff
        banner: "/images/projects/plantanator/banner.png",
        logo: "/images/projects/plantanator/logo.png",

        links: [
            {
                content: (<FaGithub className='w-full h-full hover:fill-white100 fill-white75' />),

                url: "https://github.com/vensah-dev/Plantanator-8000"
            },
            {
                content: (<FaGoogleDrive className='w-full h-full hover:fill-white100 fill-white75' />),
                url: "https://drive.google.com/drive/folders/1Y9ALl_6wwCGLfnaxeP52ZN7ia-_OMKXX?usp=drive_link"
            },
        ],
        mobileHighlights: false,

        highlights: [
            {
                image: "highlight-1.png"
            },
            {
                image: "highlight-2.png"
            },
            {
                image: "highlight-3.png"
            },
            {
                image: "highlight-4.png"
            },

        ],

        tags: [
            {
                title: "Competition",
                color: "rgba(143, 255, 195, 0.3)",
            },
        ],

        navbarColor: "#000"

    },


    {
        kat: "web-develop",
        year: "2024",

        //project details
        title: "Web Develop",
        description: `Web Develop is an app playground that I made for the Swift Student Challenge 2024. 
        The app playground is designed to teach people the basics of HTML and CSS and get the user interested in web development 
        for them to possibly pursue it in the future.`,
        showDescription: false,
        //images
        image: "/images/projects/web-develop/thumbnail.png",
        fullPoster: "/images/projects/web-develop/full-poster.png",
        //featured project stuff
        banner: "/images/projects/web-develop/banner",
        logo: "/images/projects/web-develop/logo.png",
        //links
        links: [
            {
                content: (<FaGithub className='w-full h-full hover:fill-white100 fill-white75' />),
                url: "https://github.com/vensah-dev/web-develop"
            },
            {
                content: (<FaGoogleDrive className='w-full h-full hover:fill-white100 fill-white75' />),
                url: "https://drive.google.com/drive/folders/1Sw0fHmQvL5IwcL2C3t6ADPxyLB5hQ4Lo?usp=drive_link"
            },
        ],


        highlights: [
            {
                image: "highlight-1.png"
            },
            {
                image: "highlight-2.png"
            },
            {
                image: "highlight-3.png"
            },
        ],
        mobileHighlights: true,

        tags: [
            {
                title: "Competition",
                color: "rgba(143, 255, 195, 0.3)",
            },

            {
                title: "Passion Project",
                color: "rgba(216, 178, 255, 0.3)",
            },
        ],

        navbarColor: "#404040",
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
    for (let x in projects) {
        IdList.append(x.kat)
    }
    return IdList
}
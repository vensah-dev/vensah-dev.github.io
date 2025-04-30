import React from "react";

//icons
import { FaGithub } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { FaItchIo } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

function githubIcon(){return(<FaGithub className='w-full h-full hover:fill-white100 fill-white75' />)}
function gDriveIcon(){return(<FaGoogleDrive className='w-full h-full hover:fill-white100 fill-white75' />)}
function AppStoreIcon(){return(<FaAppStoreIos className='w-full h-full hover:fill-white100 fill-white75' />)}
function itchIcon(){return(<FaItchIo className='w-full h-full hover:fill-white100 fill-white75' />)}
function mediumIcon(){return(<SiMedium className='w-full h-full hover:fill-white100 fill-white75' />)}
function youtubeIcon(){return(<FaYoutube className='w-full h-full hover:fill-white100 fill-white75' />)}

export const projects = [
    {
        kat: "pew-pew",
        year: "2025",
        icon: "/images/projects/pew-pew/icon.png",

        //project details
        title: "Pew Pew",
        description: `Pew Pew is a low poly 3D shoot em' up space game oriented around space combat. The game is currently in a prototype stage, with the basic combat and purchasing systems in place. `,
        paragraph: `I started developing Pew Pew in the Sec 3 December Holidays. It's essentially the epitome of my obsession for space shooter games. I have been developing the game in sprints every few months. This year, I spent a few days to get a prototype version of the game on itch.io for my school’s Student Initiated Learning. As of now, the game has a combat system with 3 different types of enemies that spawn in waves, forcing the player to move around and change playing styles based on the wave composition. There is also a space station which enables the player to purchase the 3 different weapons there are. Since, the prototype version has perma-death, there is also a highscore accessible from the main menu.`,
        

        //images
        image: "/images/projects/pew-pew/thumbnail.png",
        fullPoster: "/images/projects/pew-pew/full-poster.png",

        //featured project stuff
        banner: "/images/projects/pew-pew/banner",
        logo: "/images/projects/pew-pew/logo.png",

        links: [

            {
                content: mediumIcon(),
                url: "https://medium.com/@venkateshdeven14/pew-pew-a2f57366b76e"
            },
            
            {
                content: gDriveIcon(),
                url: "https://drive.google.com/drive/folders/1UvWk5a-qHBrFtTbFHhJnVVuZsgXmLy6a?usp=drive_link"
            },
            
            {
                content: githubIcon(),
                url: "https://github.com/vensah-dev/pew-pew"
            },
            
            {
                content: itchIcon(),
                url: "https://vensah.itch.io/pew-pew"
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
                title: "Passion Project",
                color: "rgba(216, 178, 255, 0.3)",
            },
            
        ],

        navbarColor: "#000000"

    },

    {
        kat: "smart-sheet",
        year: "2023",
        icon: "/images/projects/smart-sheet/icon.png",

        //project details
        title: "Smart Sheet",
        description: `Smart Sheet aims to aid with revision through its various useful functions related to studying, you’ll be more prepared and organised when studying and revising.`,
        paragraph: `Ever experienced trouble tabulating all your worksheets before your major exams? 
        Ever forgot or mixed up various studying events due to your busy schedule? Ever found it troublesome 
        to actually allocate time to study without the help of a study timer? Well, fret not, Smart Sheet is here to help! 
        With the provision of various useful functions related to studying, you’ll be more prepared and organised when studying and revising. 
        Smart Sheet was made by me and my teammates for the our Swift Accelerator final year project.`,
        

        //images
        image: "/images/projects/smart-sheet/thumbnail.png",
        fullPoster: "/images/projects/smart-sheet/full-poster.png",

        //featured project stuff
        banner: "/images/projects/smart-sheet/banner",
        logo: "/images/projects/smart-sheet/logo.png",

        links: [
            {
                content: AppStoreIcon(),
                url: "https://apps.apple.com/us/app/smart-sheet-easy-revision/id6473449023"
            },
            {
                content: githubIcon(),
                url: "https://github.com/vensah-dev/SmartSheet"
            },
            {
                content: gDriveIcon(),
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
        kat: "robocup-2025",
        year: "2025",
        icon: "/images/projects/robocup-2025/icon.png",

        //project details
        title: "RoboCup 2025",
        description: `I led my team to win 1st place in the Onstage U19 Category and the Influencer award. We made a transforming Optimus Prime and Bumblebee based on the Generation 1 designs.`,
        paragraph: `The task was to create an Onstage performance with fully autonomous robots custom-built by us. While many teams focused on simple dance routines, I had a slightly different vision after watching the Gen 1 Transformers cartoon... 

    Inspired by the cartoon, my team of 5, led by me, built a fully transforming, funky looking Optimus Prime and Bumblebee. The designs and transformations were heavily inspired by the classic Gen 1 Transformers. 

    I also spent a few days chasing my teammates to record some lines to make a video for the Influencer award. This essentially enabled me to ensure that my team wins every award there is for the Onstage U19 category!`,

        //images
        image: "/images/projects/robocup-2025/thumbnail.png",
        fullPoster: "/images/projects/robocup-2025/full-poster.png",

        //featured project stuff
        banner: "/images/projects/robocup-2025/banner",
        logo: "/images/projects/robocup-2025/logo.png",

        links: [

            {
                content: gDriveIcon(),
                url: "https://drive.google.com/drive/folders/1e2zkrT3yQ3h-gQZH45PW5JHhWJSxlqJ8?usp=sharing"
            },
            
            {
                content: youtubeIcon(),
                url: "https://www.youtube.com/watch?v=EMo6wAfQw0U"
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
        mobileHighlights: false,

        tags: [

            {
                title: "Competition",
                color: "rgba(143, 255, 195, 0.3)",
            },
            
        ],

        navbarColor: "#000000"

    },

    {
        kat: "space-code",
        year: "2025",
        icon: "/images/projects/space-code/icon.png",

        //project details
        title: "SpaceCode",
        description: `SpaceCode is essentially another idea that stemmed from my obsession with space shooters. This time, its a space shooter game that teaches programming through gamification.`,
        paragraph: `SpaceCode aims to solve the problem of students not being able to grasp fundamental concepts like Object Oriented Programming and computational thinking by gamifying the process of learning, making them program a spaceship in a game, for a more engaging and enjoyable introduction to programming. SpaceCode was made by me for Swift Student Challenge 2025 and the second space shooter related project.
    `,

        //images
        image: "/images/projects/space-code/thumbnail.png",
        fullPoster: "/images/projects/space-code/full-poster.png",

        //featured project stuff
        banner: "/images/projects/space-code/banner",
        logo: "/images/projects/space-code/logo.png",

        links: [

            {
                content: githubIcon(),
                url: "https://github.com/vensah-dev/SSC_2025"
            },
            
            {
                content: gDriveIcon(),
                url: "https://drive.google.com/drive/folders/1kSQpMvq_gQT9hFaSjOBEvGFroEVwx5LJ?usp=drive_link"
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

            {
                image: "highlight-5.png"
            },
            
        ],
        mobileHighlights: false,

        tags: [

            {
                title: "Competition",
                color: "rgba(143, 255, 195, 0.3)",
            },

            {
                title: "Passion Project",
                color: "rgba(216, 178, 255, 0.3)",
            },

            {
                title: "SAP",
                color: "rgba(250, 150, 50, 0.3)",
            },

            {
                title: "SAP",
                color: "rgba(250, 150, 50, 0.3)",
            },

            {
                title: "SAP",
                color: "rgba(250, 150, 50, 0.3)",
            },
            
        ],

        navbarColor: "#000000"

    },

    {
        kat: "procedural-terrain-generation",
        year: "2022",
        icon: "/images/projects/procedural-terrain-generation/icon.png",

        //project details
        title: "Procedural Terrain Generation",
        description: `I made an infinite 3D procedural terrain generation system made in Unity as one of my first 3D Unity projects.`,
        paragraph: `I had wanted to make a 3D survival game as my very first game in the Unity game engine that I didn't finish due to lack 
        of interest and over scoping, but did get some of the game done and learned more about 3D game development and gained some experience 
        in Unity 3D along the way. I was able to make an infinite procedural terrain generation system with simple colouring and water in under 
        3 weeks ad my first project in Unity. I had been playing with a terrain generation system since P6 which led me to the idea of the 3D survival game. 
        I did document my progress in blogs on gamedev.net which isn’t available in some regions, so PDF versions of my blogs can be found in the 
        Google Drive linked. The latest version of the game allowed the player to explore a procedurally generated island with trees which can be
        chopped down to get resources with an inventory system.`,
        
        //images
        image: "/images/projects/procedural-terrain-generation/thumbnail.png",
        fullPoster: "/images/projects/procedural-terrain-generation/full-poster.png",
        //featured project stuff
        banner: "/images/projects/procedural-terrain-generation/banner",
        logo: "/images/projects/procedural-terrain-generation/logo.png",
        //links
        links: [
            {
                content: gDriveIcon(),
                url: "https://drive.google.com/drive/folders/1p0Cz91f4dTBC8LbGbMqE0lF7MjYLpTJW?usp=drive_link"
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
                title: "Passion Project",
                color: "rgba(216, 178, 255, 0.3)",
            },
        ],

        navbarColor: "#000000",
    },

    {
        kat: "plantanator",
        year: "2023",
        icon: "/images/projects/plantanator/icon.png",

        //project details
        title: "Plantanator",
        description: `The Plantanator is a smart gardening device that automates plant care and provides real-time insights. 
        It features automated watering, plant height tracking, customizable lighting, and a mobile app for remote monitoring 
        and control. This intuitive device caters to both casual and advanced users, making it an ideal solution for anyone 
        looking to grow healthy plants effortlessly. The Plantanator 8000 was made for NRC 2023.`,
        

        //images
        image: "/images/projects/plantanator/thumbnail.png",
        fullPoster: "/images/projects/plantanator/full-poster.png",

        //featured project stuff
        banner: "/images/projects/plantanator/banner.png",
        logo: "/images/projects/plantanator/logo.png",

        links: [
            {
                content: githubIcon(),

                url: "https://github.com/vensah-dev/Plantanator-8000"
            },
            {
                content: gDriveIcon(),
                url: "https://drive.google.com/drive/folders/1Y9ALl_6wwCGLfnaxeP52ZN7ia-_OMKXX?usp=drive_link"
            },
            {
                content: youtubeIcon(),
                url: "https://www.youtube.com/watch?v=QpKt5F1Y_jc"
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
        icon: "/images/projects/web-develop/icon.png",

        //project details
        title: "Web Develop",
        description: `Web Develop is an app playground that I made for the Swift Student Challenge 2024. 
        The app playground is designed to teach people the basics of HTML and CSS and get the user interested in web development 
        for them to possibly pursue it in the future.`,
        
        //images
        image: "/images/projects/web-develop/thumbnail.png",
        fullPoster: "/images/projects/web-develop/full-poster.png",
        //featured project stuff
        banner: "/images/projects/web-develop/banner",
        logo: "/images/projects/web-develop/logo.png",
        //links
        links: [
            {
                content: githubIcon(),
                url: "https://github.com/vensah-dev/web-develop"
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

            {
                title: "SAP",
                color: "rgba(250, 150, 50, 0.3)",
            },
        ],

        navbarColor: "#404040",
    },

    {
        kat: "attentia",
        year: "2024",
        icon: "/images/projects/attentia/icon.png",

        //project details
        title: "Attentia",
        description: "Attentia is a mobile app designed to improve the attention span of teenagers. It gamifies the habit of doing recommended mind and physical exercises. Users earn credits by completing these exercises, which can be used to unlock rewards like leaderboards and profile pictures. Attentia was made for IvP 2024 using React Native and shared using Expo.",
        

        //images
        image: "/images/projects/attentia/thumbnail.png",
        fullPoster: "/images/projects/attentia/full-poster.png",

        //featured project stuff
        banner: "/images/projects/attentia/banner",
        logo: "/images/projects/attentia/logo.png",

        //links
        links: [
            {
                content: githubIcon(),
                url: "https://github.com/vensah-dev/Attentia"
            },
            {
                content: gDriveIcon(),
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
            {
                title: "Passion Project",
                color: "rgba(216, 178, 255, 0.3)",
            },
        ],

        navbarColor: "#131118",

    },

    {
        kat: "triangulation",
        year: "2023",
        icon: "/images/projects/triangulation/icon.png",

        //project details
        title: "Triangulation",
        description: `Triangulation was a game I made while in the Swift Accelerator Programme for a hackathon with the theme 'Amusing but Useless'. 
        Back when I made this I was new to iOS development and SwiftUI. Thus, to challenge myself, I decided that 
        I would make a game in SwiftUI for fun. At that time other than Swift I was also playing this small game called Cookie Clicker,
        taking heavy inspiration I made a clicker game about triangles.`,
        
        //images
        image: "/images/projects/triangulation/thumbnail.png",
        fullPoster: "/images/projects/triangulation/full-poster.png",
        //featured project stuff
        banner: "/images/projects/triangulation/banner",
        logo: "/images/projects/triangulation/logo.png",
        //links
        links: [
            {
                content: githubIcon(),

                url: "https://github.com/vensah-dev/triagulation"
            },
            {
                content: gDriveIcon(),
                url: "https://drive.google.com/drive/folders/1_K3Rq-D3eAa13pVESeYfXWOzKbgRHOJe?usp=drive_link"
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
                title: "Passion Project",
                color: "rgba(216, 178, 255, 0.3)",
            },
        ],

        navbarColor: "#E8494B",
    },

    {
        kat: "ecopedia",
        year: "2023",
        icon: "/images/projects/ecopedia/icon.png",

        //project details
        title: "Ecopedia",
        description: `The ultimate app that revolutionises your sustainable living experience! 
        Scan products for sustainable alternatives and instructions on recycling it after use if applicable. 
        Calculate your carbon footprint and get personalised suggestions to reduce it. 
        Set goals and track progress toward reducing your carbon footprint. Using a personalised and rewarding gamified experience, 
        Ecopedia assists you in turning green! Ecopedia was made for IvP 2023 using Swift.`,
        paragraph: `The ultimate app that revolutionises your sustainable living experience! 
        Scan products for sustainable alternatives and instructions on recycling it after use if applicable. 
        Calculate your carbon footprint and get personalised suggestions to reduce it. 
        Set goals and track progress toward reducing your carbon footprint. Using a personalised and rewarding gamified experience, 
        Ecopedia assists you in turning green! Ecopedia was made for IvP 2023 using Swift.`,
        

        //images
        image: "/images/projects/ecopedia/thumbnail.png",
        fullPoster: "/images/projects/ecopedia/full-poster.png",

        //featured project stuff
        banner: "/images/projects/ecopedia/banner",
        logo: "/images/projects/ecopedia/logo.png",

        links: [
            {
                content: githubIcon(),

                url: "https://github.com/vensah-dev/Ecopedia"
            },
            {
                content: gDriveIcon(),
                url: "https://drive.google.com/drive/folders/1XzyB0Of1WXffT1gbzBHOeLbRRCKBXcgR?usp=drive_link"
            },
            {
                content: youtubeIcon(),
                url: "https://www.youtube.com/watch?v=Xbx16ShdQPY&t=4s"
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
        kat: "neopixel-shooter",
        year: "2024",
        icon: "/images/projects/neopixel-shooter/icon.png",

        //project details
        title: "NeoPixel Shooter",
        description: `A space shooters game run on a 16x16 NeoPixel matrix powered by 2 microbits. This was the start of my space shooter obsession.`,

        paragraph: `
        My computing teacher had assigned the class a pair project as our June Holidays homework. The task was to make an animation on a 16x16 NeoPixel matrix that can optionally be interactive. To be honest I was kind of excited for this. I ended up procrastinating the project up til the last 3 days of June Holidays as I was involved with other projects. With 3 days left the most creative idea I could come up with was a Space Shooters game. 

        To make a game the best way would be start by creating sprites which led me to creating a modular sprite system which is practically just a very simple game engine. This allowed me to make a Space Shooters game where the enemies spawn from the top and move down toward you. There is also a special move that can allow the player to heal. 
        `,
        

        //images
        image: "/images/projects/neopixel-shooter/thumbnail.png",
        fullPoster: "/images/projects/neopixel-shooter/full-poster.png",

        //featured project stuff
        banner: "/images/projects/neopixel-shooter/banner",
        logo: "/images/projects/neopixel-shooter/logo.png",

        links: [
            {
                content: gDriveIcon(),
                url: "https://drive.google.com/drive/folders/1K6-TMmGIeqN6vyZ0DaQsRncy4PMPpNLa?usp=sharing"
            },
        ],

        highlights: [

        
            {
                image: "highlight-1.png"
            },
            
            {
                image: "highlight-2.png"
            },
            
        ],
        mobileHighlights: false,

        tags: [

            {
                title: "School",
                color: "rgba(165,14,127,0.3)",
            },
        ],

        navbarColor: "#000000"

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
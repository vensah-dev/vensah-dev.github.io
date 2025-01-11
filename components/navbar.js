//idk what this even is
'use client'

//React.
import React, { useRef } from 'react';

//images
import profilePic from "@/public/icons/profile-pic.svg"

//Next stuff
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

//icons
import { TbMenu } from "react-icons/tb";
import { IoClose } from "react-icons/io5";



export function Navbar({ className, style }) {
  const pathname = usePathname()

  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);
  const menuCloseRef = useRef(null);

  function openSidebar() {
    var sidebar = sidebarRef.current
    var button = menuButtonRef.current
    var close = menuCloseRef.current

    button.style.opacity = "0.0";
    close.style.opacity = "1.0";
    sidebar.style.left = "0%";
  }

  function closeSidebar() {
    // Access the DOM element using the ref
    var sidebar = sidebarRef.current
    var button = menuButtonRef.current
    var close = menuCloseRef.current

    if (sidebar && button && close) {
      button.style.opacity = "1.0";
      close.style.opacity = "0.0";
      sidebar.style.left = "100%";
    }

  }

  const navItems = [
    {
      title: "About",
      url: "/",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    // {
    //   title: "Testimonials",
    //   url: "/testimonials",
    // },
    // {
    //   title: "Competencies",
    //   url: "/competencies",
    // },
    // {
    //   title: "Achievements",
    //   url: "/achievements",
    // },
  ]

  return (
    <header>
      <nav className={className} style={style}>
        <div className="flex w-full px-4 py-8 md:px-16 md:py-12 lg:justify-normal justify-between items-center absolute z-50">

          {/* profile picture */}
          <Link href={'/'} className='z-10' onClick={() => closeSidebar()}>
            <div className='rounded-full overflow-hidden'>
              <Image
                src={profilePic}

                alt="vensah-profile-picture"
                className="inline w-10 h-10"
              />
            </div>
          </Link>


          {/* hamburger */}
          <div ref={menuButtonRef} className='lg:hidden items-center z-0 transition-all ease-in-out duration-300' onClick={() => openSidebar()}>
            <TbMenu className='w-8 h-8 stroke-white90 stroke-[2.5px]' />
          </div>


          {/* sidebar */}
          <ul ref={sidebarRef} id="sidebar" className=' flex-col items-center justify-center transition-all delay-100	 duration-300 z-0 lg:hidden fixed w-full left-[100%] top-0 bottom-0 bg-white5 backdrop-blur-2xl text-h5'>

            {/* close */}
            <div ref={menuCloseRef} className='lg:hidden flex w-full px-4 py-8 md:px-16 md:py-12 justify-end items-center z-0 self-end transition-all duration-300' onClick={() => closeSidebar()}>
              <IoClose className='w-8 h-8 fill-white90' />
            </div>


            {
              navItems.map((navItem, index) => (
                <Link href={navItem.url} key={index} onClick={() => closeSidebar()}>
                  <p className={` hover:text-accent py-4 text-center ${pathname === navItem.url ? "text-accent" : "text-white75"}`}>{navItem.title}</p>
                </Link>
              ))
            }

          </ul>



          {/* large navbar */}
          <ul className='lg:flex hidden pl-8'>

            {
              navItems.map((navItem, index) => (
                <Link href={navItem.url} key={index} >
                  <p className={`text-base hover:text-accent inline py-12 px-8 ${pathname === navItem.url ? "text-accent" : "text-white75"}`}>{navItem.title}</p>
                </Link>
              ))
            }

          </ul>

        </div>
      </nav>
    </header>
  )
}
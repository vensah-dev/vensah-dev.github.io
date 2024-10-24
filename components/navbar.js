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



export function Navbar(){
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

  return (
        <header>
          <nav>
              <div className="flex w-full px-4 py-8 md:px-16 md:py-12 lg:justify-normal justify-between items-center absolute z-50">

                <Link href={'/'}  className='z-10' onClick={() => closeSidebar()}>
                  <div className='rounded-full overflow-hidden'>
                    <Image
                      src={profilePic}

                      alt="Profile Picture"
                      className="inline w-10 h-10"
                    />
                  </div>
                </Link>


                {/* hamburger */}
                <div ref={menuButtonRef} className='lg:hidden items-center z-0 transition-all ease-in-out duration-300' onClick={() => openSidebar()}>
                  <TbMenu className='w-8 h-8 stroke-white90 stroke-[2.5px]'/>
                </div>


                {/* sidebar */}
                <ul ref={sidebarRef} id="sidebar" className=' flex-col items-center justify-center transition-all delay-100	 duration-300 ease-[cubic-bezier(0.680,-0.150,0.265,1.150)] z-0 lg:hidden fixed w-full left-[100%] top-0 bottom-0 bg-white5 backdrop-blur-2xl text-h5'>

                  {/* close */}
                  <div ref={menuCloseRef} className='lg:hidden flex w-full px-4 py-8 md:px-16 md:py-12 justify-end items-center z-0 self-end transition-all duration-300' onClick={() => closeSidebar()}>
                    <IoClose className='w-8 h-8 fill-white90'/>
                  </div>

                  <Link href={'/'}  onClick={() => closeSidebar()}>
                    <p className={` hover:text-accent py-4 text-center ${pathname === '/' ? "text-accent" : "text-white75"}`}>About</p>
                  </Link>

                  <Link href={'/competencies'} onClick={() => closeSidebar()}>
                    <p className={` hover:text-accent py-4 text-center ${pathname === '/competencies' ? "text-accent" : "text-white75"}`}>Competencies</p>
                  </Link>

                  <Link href={'/projects'} onClick={() => closeSidebar()}>
                    <p className={` hover:text-accent py-4 text-center ${pathname === '/projects' ? "text-accent" : "text-white75"}`}>Projects</p>
                  </Link>
                    
                  <Link href={'/achievements'} onClick={() => closeSidebar()}>
                    <p className={` hover:text-accent py-4 text-center ${pathname === '/achievements' ? "text-accent" : "text-white75"}`}>Achievements</p>
                  </Link>
                </ul>



                {/* large navbar */}
                <ul className='lg:block hidden'>
                  <Link href={'/'} >
                    <p className={`text-base hover:text-accent inline py-12 pl-16 ${pathname === '/' ? "text-accent" : "text-white75"}`}>About</p>
                  </Link>

                  <Link href={'/competencies'} >
                    <p className={`text-base hover:text-accent inline py-12 pl-16 ${pathname === '/competencies' ? "text-accent" : "text-white75"}`}>Competencies</p>
                  </Link>

                  <Link href={'/projects'} >
                    <p className={`text-base hover:text-accent inline py-12 pl-16 ${pathname === '/projects' ? "text-accent" : "text-white75"}`}>Projects</p>
                  </Link>

                  <Link href={'/achievements'} >
                    <p className={`text-base hover:text-accent inline py-12 pl-16 ${pathname === '/achievements' ? "text-accent" : "text-white75"}`}>Achievements</p>
                  </Link>
                </ul>

              </div>
          </nav>
        </header>
    )
}
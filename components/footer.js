'use client'
import React from 'react'

//images
import profilePic from "@/public/icons/profile-pic.svg"

//Next Components
// import Link from "next/link";
import Image from "next/image";

//Components
import { ContactGrid } from './contact-grid';

const Footer = () => {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <footer className='bg-secondary '>
        <div className="flex mx-16 py-6 items-center justify-between">

          <button onClick={scrollToTop}>

            <div className='flex gap-4 items-center'>
                <div className='rounded-full w-8 h-8 overflow-hidden'>
                  <Image
                    src={profilePic}
                    alt="vensah-profile-picture"  
                  />
                </div>

                <p className='text-white75'>© Venkatesh Devendran 2024.</p>
            </div>

          </button>

          <ContactGrid footer={true}/>

        </div>
    </footer>
  )
}

export default Footer

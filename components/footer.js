import React from 'react'

//images
import profilePic from "@/public/images/icons/profile-pic.svg"

//Next Components
import Link from "next/link";
import Image from "next/image";

//Components
import { ContactGrid } from './contact-grid';

const Footer = () => {
  return (
    <footer className='bg-secondary'>
        <div className="flex mx-16 py-6 items-center justify-between">
            <div className='flex gap-4 items-center'>
                <Image
                    src={profilePic}
                    width={32}
                    height={32}
                    alt="Profile Picture"
                    className="inline"
                />
                <p className='text-white75'>© Venkatesh Devendran 2024.</p>
            </div>

            <ContactGrid footer={true}/>

        </div>
    </footer>
  )
}

export default Footer
